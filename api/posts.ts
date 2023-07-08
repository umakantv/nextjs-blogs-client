import { CreatePost } from "../types/posts";
import api from "./apiTransport";

type FetchPostParams = {
  authorId?: string | undefined;
  search?: string | undefined;
  tag?: string | undefined;
  page?: number | undefined;
  pageSize?: number | undefined;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};

export async function getPosts(params: FetchPostParams) {
  let {
    authorId,
    search,
    tag,
    page = 1,
    pageSize = 15,
    sortBy = "createdAt",
    sortOrder = "desc",
  } = params;

  return api.get("/posts", {
    params: {
      authorId,
      search,
      tag,
      page,
      pageSize,
      sortBy,
      sortOrder,
    },
  });
}

export async function addPost(post: CreatePost) {
  return api.post("/posts", post);
}

export async function getPostById(id: string) {
  return api.get(`/posts/${id}`);
}

export async function getPostsByTag(tag: string) {
  return api.get(`/posts/tag/${tag}`);
}
