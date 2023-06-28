import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import ErrorPage from "../../components/error-page";
import { PostApi } from "../../api";
import PostsContainer from "../../components/posts-container";
import Intro from "../../components/intro";
import AppError from "../../utils/AppError";

export default function Post({ tag, posts, error }) {
  const router = useRouter();

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>{tag}</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {tag}
                </title>

              </Head>
              <Container>
                <Intro title={`# ${tag}`} />
              </Container>
              
              <PostsContainer allPosts={posts} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params: {tag},
}) => {
  try {

    const response: any = await PostApi.getPosts({ tag: tag as string, sortBy: 'commentCount', sortOrder: 'desc' });

    console.log('Tag', tag)

    return {
      props: {
        posts: response.records,
        tag,
      },
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

export const getStaticPaths: GetStaticPaths = async () => {
  // const allPosts = await getAllPostsWithSlug()

  return {
    paths: [],
    fallback: true,
  };
};
