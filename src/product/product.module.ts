import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schemas/product.schemas";
import { ProductController } from "./product.controller";
import { AbstractProductRepository } from "./domain/repositories/product.repository";
import { ProductRepository } from "./insfrastructure/repositories/product.repository";
import { IsProductExist } from "./application/dtos/custom_validator/is_product_exits.validator";
import { MediaService } from "src/common/insfractructure/helper/s3.service";
import { ProductCommandHandlers } from "./application/commons";
import { ProductQueryHandlers } from "./application/queries";
import { CategoryModule } from "src/category/category.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    CqrsModule,
    CategoryModule,
    AuthModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [ProductController],
  providers: [
    { provide: AbstractProductRepository, useClass: ProductRepository },MediaService,
    IsProductExist,
    ...ProductCommandHandlers,
    ...ProductQueryHandlers
  ]
})
export class ProductModule {}