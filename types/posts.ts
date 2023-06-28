


type Author = {
    name: string,
    image: string,
}

type Post = {
    _id: string;
    title: string;
    content: string;
    slug: string;
    author: Author;
    featuredImage: string;
    createdAt: string;
    excerpt: string;
    metadata: {
        coverImage: string;
        seoDescription: string;
        ogImage: string;
    };
}