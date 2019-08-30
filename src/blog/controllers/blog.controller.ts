import { Controller, Post, Res, Body, Get } from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { CreatePostDTO } from '../dto/create-post-dto';

@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService) {}

    @Get('/posts')
    async getAllPosts() {
        return this.blogService.getAllPosts();
    }

    @Post('/newpost')
    async newPost(@Body() postDto: CreatePostDTO) {
        const savedPost = await this.blogService.addPost(postDto);
        return {
            message: 'new post created successfully.',
            post: savedPost,
        };
    }

}
