

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Category } from 'src/category/schemas/category.schema';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;
  @Prop()
  imgUlr: string;
  @Prop({ required: false, type: SchemaTypes.ObjectId,ref:"Category" })
  categoryId: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
