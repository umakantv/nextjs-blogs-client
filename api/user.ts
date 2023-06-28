import axios from "./apiTransport";

export async function loginApi(email: string, password: string) {
  return axios.post("/auth/login", {
    email,
    password,
  });
}

export async function registerApi(name: string, email: string, password: string) {
  return axios.post("/auth/register", {
    name,
    email,
    password,
  });
}

export async function loginWithGithubApi(code: string) {
  return axios.get(`/auth/github-signin/${code}`);
}

export async function getLoggedInUser() {
  return axios.get(`/auth/loggedInUser`);
}

export async function getUser(userId: string) {
  return axios.get(`/user/${userId}`);
}
