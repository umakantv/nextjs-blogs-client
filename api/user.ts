import api from "./apiTransport";

export async function getUser(userId: string) {
  return api.get(`/users/${userId}`);
}
