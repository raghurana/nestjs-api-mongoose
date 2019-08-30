import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from '../interfaces/post.interface';
import { CreatePostDTO } from '../dto/create-post-dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel('Post')
        private readonly postModel: Model<Post>,
    ) {}

    async addPost(createPostDto: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel.create(createPostDto);
        return newPost.save();
    }

}
