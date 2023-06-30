import api from "./apiTransport";

export async function loginApi(email: string, password: string) {
  return api.post("/auth/login", {
    email,
    password,
  });
}

export async function registerApi(
  name: string,
  username: string,
  email: string,
  password: string
) {
  return api.post("/auth/register", {
    name,
    username,
    email,
    password,
  });
}

export async function loginWithGithubApi(code: string) {
  return api.get(`/auth/github-signin/${code}`);
}

export async function getLoggedInUser() {
  return api.get(`/auth/loggedInUser`);
}

export async function checkUsernameAvailable(username: string) {
  return api.get(`/auth/username_available/${username}`);
}
