import { Module } from '@nestjs/common';
import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Post',
      schema: BlogSchema,
    }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
