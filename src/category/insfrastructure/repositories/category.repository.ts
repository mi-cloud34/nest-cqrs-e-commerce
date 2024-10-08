import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories";
import { Category } from "src/category/schemas/category.schema";
import { BaseRepository } from "src/common/insfractructure/repository/base.repository";

@Injectable()
export class CategoryRepository
  extends BaseRepository<Category>
  implements AbstractCategoryRepository<Category>
{
  constructor(
    @InjectModel(Category.name) private  categoryModel: Model<Category>
  ) {
    super(categoryModel)
  }
}