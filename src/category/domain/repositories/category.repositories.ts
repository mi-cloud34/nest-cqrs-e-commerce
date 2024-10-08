
import { Injectable } from '@nestjs/common'
import { AbstractBaseRepository } from 'src/common/domain/repository/base.repository';

@Injectable()
export abstract class AbstractCategoryRepository<
  Document
> extends AbstractBaseRepository<Document> {}