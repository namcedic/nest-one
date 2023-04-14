export declare class PostsService {
    posts: {
        id: number;
        title: string;
        description: string;
        author: string;
        url: string;
    }[];
    getPosts(): Promise<any>;
    getPost(postId: any): Promise<any>;
    addPost(post: any): Promise<any>;
    deletePost(postId: any): Promise<any>;
}
