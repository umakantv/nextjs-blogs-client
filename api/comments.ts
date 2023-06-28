import axios from "./apiTransport";

export async function getCommentsByPostId(id: string) {
  return axios.get(`/comments/blog/${id}`);
}

export async function addComment(content: string, postId: string) {
  return axios.post(`/comments/${postId}`, {
    comment: content,
  });
}
