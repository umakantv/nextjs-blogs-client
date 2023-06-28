import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import { PostApi } from "../api";
import PostsContainer from "../components/posts-container";
import Intro from "../components/intro";
import Container from "../components/container";

export default function Index({ allPosts }) {

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
      </Container>
      <PostsContainer allPosts={allPosts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
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
};
