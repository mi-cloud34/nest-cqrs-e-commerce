import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common"
import { CommandBus, QueryBus } from "@nestjs/cqrs"
import { ApiTags } from "@nestjs/swagger"
import {v4} from  'uuid'
import { FileInterceptor } from "@nestjs/platform-express"
import { ProductIdDTO } from "./application/dtos/product_id.dto"
import { GetProductByIdQuery } from "./application/queries/get_product_by_id/get_product_by_id.query"
import { DeleteProductByIdCommand } from "./application/commons/delete_product/delete_product.command"
import { UpdateProductByIdCommand } from "./application/commons/update_product/update_product.command"
import { UpdateProductDto } from "./application/dtos/update_product.dto"
import { GetProductsQuery } from "./application/queries/get_products/get_product.query"
import { CreateProductDto } from "./application/dtos/create_product.dto"
import { MediaService } from "src/common/insfractructure/helper/s3.service"
import { Message } from "src/common/insfractructure/decorators/message.decorators"
import { AuthenticationGuard } from "src/common/insfractructure/guards/authentication.guard"
import { CreateProductCommand } from "./application/commons/create_product/create_product.command"
import { GetCategoryByIdQuery } from "src/category/application/queries/get_category_by_id/get_category_by_id.query"

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly mediaService:MediaService,
  ) {}

  @Post()
  @UseGuards(AuthenticationGuard)
  @Message('Product created successfully.')
  async createProduct (@Req() req,  @Body() createProductDto: CreateProductDto) {

   const category = await this.commandBus.execute(new GetCategoryByIdQuery(createProductDto.categoryId.toString()));
  console.log("categoryIdddd",category);
  
  if (!category) {
    throw new NotFoundException(`Category with id ${category} not found`);
  }
    console.log("userIddddd",req.user.user._id);
  
    return this.commandBus.execute(new CreateProductCommand(createProductDto))
  }
  //file: Express.Multer.File,
  // @UseInterceptors(FileInterceptor ('image'))
  //const file=req.files.carimage;
   // const key="products/photo/"+`${v4()}${file.originalname}`;
   // const keys=`${v4()}${file.originalname}`;
    //this.mediaService.uploadS3(file,key)
    //createProductDTO.productImage=keys;
  @Get()
  @Message('Product fetched successfully.')
  async getProducts(@Query() query:string) {
    console.log("queryyy",query);
    
    return this.queryBus.execute(new GetProductsQuery(query))
  }

  @Get(':productId')
  @Message('Product fetched successfully.')
  async getProductById(@Param() params: ProductIdDTO,@Query('key') key:string) {
     const product=this.queryBus.execute(new GetProductByIdQuery(params.productId));
    // const key='/cars/photo/';
   // const data=car['carimage'];
    product['productImage']=this.mediaService.getLinkMedia(key)
    return this.queryBus.execute(new GetProductByIdQuery(params.productId))
  }
 
  @UseGuards(AuthenticationGuard)
  @Put(':productId')
  @Message('Product updated successfully.')
  async updateProductById(
    @Param() params: ProductIdDTO,
    @Body() updateProductDTO: UpdateProductDto
  ) {
    return this.commandBus.execute(
      new UpdateProductByIdCommand(params.productId, updateProductDTO)
    )
  }
 
  @UseGuards(AuthenticationGuard)
  @Delete(':productId')
  @Message('Product deleted successfully.')
  async deletProductById(@Param() params: ProductIdDTO) {
    const product=this.queryBus.execute(new GetProductByIdQuery(params.productId))
    const post1='productss/photo/'+product['productimage']
    this.mediaService.deleteFileS3(post1);
    return this.commandBus.execute(new DeleteProductByIdCommand(params.productId))
  }
}