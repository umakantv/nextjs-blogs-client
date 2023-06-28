import api from "./apiTransport";

export async function getCommentsByPostId(id: string) {
  return api.get(`/comments/blog/${id}`);
}

export async function addComment(content: string, postId: string) {
  return api.post(`/comments/${postId}`, {
    comment: content,
  });
}
