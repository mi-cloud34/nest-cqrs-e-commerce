import { Injectable } from '@nestjs/common'
import { ValidationArguments, ValidatorConstraint } from 'class-validator'
import { AbstractProductRepository } from 'src/product/domain/repositories/product.repository'

@ValidatorConstraint({ async: true })
@Injectable()
export class IsProductExist {
  constructor(private readonly repository: AbstractProductRepository<Document>) {}

  // eslint-disable-next-line
  async validate(id: string, args: ValidationArguments) {
    return this.repository.findById(id)
  }

  // eslint-disable-next-line
  defaultMessage(args: ValidationArguments) {
    return 'product cannot found'
  }
}