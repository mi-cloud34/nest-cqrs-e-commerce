import { GetCategorysQueryHandler } from "./get_categories/get_category.handler";
import { GetCategoryByIdQueryHandler } from "./get_category_by_id/get_category_by_id.handler";

export const CategoryQueryHandlers = [
  GetCategorysQueryHandler,
  GetCategoryByIdQueryHandler
]