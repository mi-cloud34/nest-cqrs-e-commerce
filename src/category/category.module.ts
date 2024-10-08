import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema';
import { CategoryQueryHandlers } from './application/queries';
import { CategoryCommandHandlers } from './application/commons';
import { CategoryRepository } from './insfrastructure/repositories/category.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { AbstractCategoryRepository } from './domain/repositories/category.repositories';
import { IsCategoryExist } from './application/dtos/custom_validator/is_categories_exits.validator';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    CqrsModule,
  AuthModule,
    MongooseModule.forFeature([
      {name: Category.name,schema: CategorySchema},]),
  ],
  controllers: [CategoryController],
  providers: [
    { provide: AbstractCategoryRepository, useClass: CategoryRepository },
    IsCategoryExist,
    ...CategoryCommandHandlers,
    ...CategoryQueryHandlers
  ]
})
export class CategoryModule {}
