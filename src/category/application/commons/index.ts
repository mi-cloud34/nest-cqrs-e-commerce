import { CreateCategoryCommandHandler } from "./create_category/create_category.handler";
import { DeleteCategoryByIdCommandHandler } from "./delete_category/delete_category.handler";
import { UpdateCategoryByIdCommandHandler } from "./update_category/update_category.handler";

export const CategoryCommandHandlers = [
  CreateCategoryCommandHandler,
  UpdateCategoryByIdCommandHandler,
  DeleteCategoryByIdCommandHandler
]