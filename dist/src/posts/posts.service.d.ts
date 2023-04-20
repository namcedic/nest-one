import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostsService {
    create(createPostInput: CreatePostInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostInput: UpdatePostInput): string;
    remove(id: number): string;
}
