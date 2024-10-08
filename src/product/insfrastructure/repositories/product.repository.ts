import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "src/common/insfractructure/repository/base.repository";
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository";
import { Product } from "src/product/schemas/product.schemas";

@Injectable()
export class ProductRepository
  extends BaseRepository<Product>
  implements AbstractProductRepository<Product>
{
  constructor(
    @InjectModel(Product.name) private  productModel: Model<Product>
  ) {
    super(productModel)
  }
}