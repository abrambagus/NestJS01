import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export class Event extends mongoose.Document {
  @Prop({ index: true })
  name: string;

  @Prop()
  type: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ name: 1, type: -1 });
