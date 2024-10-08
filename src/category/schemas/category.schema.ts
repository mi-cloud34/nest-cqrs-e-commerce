import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  name: string;

 
}

export const CategorySchema = SchemaFactory.createForClass(Category);
