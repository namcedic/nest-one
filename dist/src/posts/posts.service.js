"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = class PostsService {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: 'Chúng tôi là ai?',
                description: 'Sun Asterisk chứa đựng ước mơ và mục tiêu kiến tạo nên thật nhiều những điều tốt đẹp cho xã hội của tập thể những chiến binh mặt trời.',
                author: 'Sun*',
                url: 'https://sun-asterisk.vn/ve-chung-toi/',
            },
            {
                id: 2,
                title: 'Chúng tôi làm gì?',
                description: 'Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm "Awesome" nhất cho end-user',
                author: 'Sun*',
                url: 'https://sun-asterisk.vn/creative-engineering/',
            },
        ];
    }
    getPosts() {
        return new Promise((resolve) => {
            resolve(this.posts);
        });
    }
    getPost(postId) {
        const id = Number(postId);
        return new Promise((resolve) => {
            const post = this.posts.find((post) => post.id === id);
            if (!post) {
                throw new common_1.HttpException('Post not found', 404);
            }
            resolve(post);
        });
    }
    addPost(post) {
        return new Promise((resolve) => {
            this.posts.push(post);
            resolve(this.posts);
        });
    }
    deletePost(postId) {
        const id = Number(postId);
        return new Promise((resolve) => {
            const index = this.posts.findIndex((post) => post.id === id);
            if (index === -1) {
                throw new common_1.HttpException('Post not found', 404);
            }
            this.posts.splice(index, 1);
            resolve(this.posts);
        });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map