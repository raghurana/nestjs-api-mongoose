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

    async getAllPosts(): Promise<Post[]> {
        return this.postModel.find();
    }

    async deletePostById(idGuid: string) {
        return this.postModel.findByIdAndDelete(idGuid);
    }

    async editPost(idGuid: string, postDto: CreatePostDTO) {
        const editedPost = await this.postModel.findByIdAndUpdate(idGuid, postDto);
        return editedPost;
    }
}
