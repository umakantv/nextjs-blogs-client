import api from "./apiTransport";

export async function loginApi(email: string, password: string) {
  return api.post("/auth/login", {
    email,
    password,
  });
}

export async function registerApi(
  name: string,
  email: string,
  password: string
) {
  return api.post("/auth/register", {
    name,
    email,
    password,
  });
}

export async function loginWithGithubApi(code: string) {
  return api.get(`/auth/github-signin/${code}`);
}

export async function getLoggedInUser() {
  // console.log(api.);
  return api.get(`/auth/loggedInUser`);
}