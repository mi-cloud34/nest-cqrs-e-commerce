import { Injectable } from '@nestjs/common'
import { ValidationArguments, ValidatorConstraint } from 'class-validator'
import { AbstractCategoryRepository } from 'src/category/domain/repositories/category.repositories'

@ValidatorConstraint({ async: true })
@Injectable()
export class IsCategoryExist {
  constructor(private readonly repository: AbstractCategoryRepository<Document>) {}

  // eslint-disable-next-line
  async validate(id: string, args: ValidationArguments) {
    return this.repository.findById(id)
  }

  // eslint-disable-next-line
  defaultMessage(args: ValidationArguments) {
    return 'category cannot found'
  }
}