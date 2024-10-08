import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthenticationGuard } from 'src/common/insfractructure/guards/authentication.guard';
import { Message } from 'src/common/insfractructure/decorators/message.decorators';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCategoryDto } from './application/dtos/create_category.dto';
import { CreateCategoryCommand } from './application/commons/create_category/create_category.command';
import { AuthorizationGuard } from 'src/common/insfractructure/guards/authorization.guard';
import { GetCategorysQuery } from './application/queries/get_categories/get_category.query';
import { GetCategoryByIdQuery } from './application/queries/get_category_by_id/get_category_by_id.query';
import { CategoryIdDTO } from './application/dtos/category_id.dto';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  
  ) {}

  @Post()
  
  @UseGuards(AuthorizationGuard)
  @Message('Product created successfully.')
 
  async createProduct (@Req() req,@Body() createCategoryDTO: CreateCategoryDto) {
 
   // console.log("userIddddd",req.user.user._id);
    //const file=req.files.carimage;
   
    return this.commandBus.execute(new CreateCategoryCommand(createCategoryDTO))
  }
  
  @Get()
  @Message('Category fetched successfully.') 
  async getCategorys(@Query() query:string) {
    console.log("queryyy",query);
    
    return this.queryBus.execute(new GetCategorysQuery(query))
  }
 
  @Get(':categoryId')
  @Message('Category fetched successfully.')
  async getCategoryById(@Param() params: CategoryIdDTO,@Query('key') key:string) {
    console.log("paramsssss",params);
    
    return this.queryBus.execute(new GetCategoryByIdQuery(key))
  }
}
 