import axios from "./apiTransport";

export async function getPosts(
    {page = 1, pageSize = 15, search = '', tag = '', sortBy = 'createdAt', sortOrder = 'desc'}) {

    if (!search) {
        search = undefined
    }

    if (!tag) {
        tag = undefined
    }

    return axios.get('/posts', {
        params: {
            page, pageSize, search, tag, sortBy, sortOrder
        }
    })
}

export async function addPost(title: string, content: string) {
    return axios.post('/posts', {
        title, content
    })
}

export async function getPostById(id: string) {
    return axios.get(`/posts/${id}`)
}

export async function getPostsByTag(tag: string) {
    return axios.get(`/posts/tag/${tag}`)
}