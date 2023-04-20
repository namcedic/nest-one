import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { GraphqlJwtAuthGuard } from './graphql-jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  @UseGuards(GraphqlJwtAuthGuard)
  createPost(@Args('input') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post])
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  findOne(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  // @Mutation(() => Post)
  // update(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
  //   return this.postsService.update(updatePostInput.id, updatePostInput);
  // }

  @Mutation(() => Post)
  remove(@Args('id') id: number) {
    return this.postsService.remove(id);
  }
}
