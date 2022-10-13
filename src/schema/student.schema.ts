import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
    name: string;
  @Prop()
    roleNumber: number;
  @Prop()
    class: number;
  @Prop()
    gender: string;
  @Prop()
    marks: number;
}

// @Schema: This decorator fixes the class as the schema definition. Name given to the class will appear as the name of the collection. This will map our Student class to the MongoDB Student collection
//@Prop:  This decorator defines a property within the document. Here, we have a total of 5 properties like name, roleNumber, class, gender and marks.
export const StudentSchema = SchemaFactory.createForClass(Student);