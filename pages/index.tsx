import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { PostApi } from "../api";
import PostsContainer from "../components/posts-container";
import Intro from "../components/intro";
import Container from "../components/container";
import ErrorPage from "../components/error-page";

export default function Index({ allPosts, error }) {

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout>
      <Container>
        <Intro />
      </Container>
      <PostsContainer allPosts={allPosts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    try {
    let response: any = await PostApi.getPosts({});

    let allPosts = response.records.map((post: Post) => ({
      title: post.title,
      featuredImage: post.metadata?.coverImage,
      createdAt: post.createdAt,
      author: post.author,
      slug: post.slug,
      excerpt: post.excerpt,
    }));

    return {
      props: { allPosts, preview },
      revalidate: 10,
    };
  } catch(err) {

    return {
      props: {
        error: {
          status: err.status,
          message: err.message,
        }
      },
      revalidate: 10
    }
  }
};
