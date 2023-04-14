import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    getPosts(): Promise<any>;
    getCourse(postId: any): Promise<any>;
    addPost(CreatePostDto: CreatePostDto): Promise<any>;
    deletePost(id: string): Promise<any>;
}
