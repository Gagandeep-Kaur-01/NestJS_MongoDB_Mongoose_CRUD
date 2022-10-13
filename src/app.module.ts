import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './schema/student.schema';

@Module({
  imports: 
    //The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package
    [MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
      MongooseModule.forFeature([
        {
          name: 'Student',
          schema: StudentSchema
        }
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
