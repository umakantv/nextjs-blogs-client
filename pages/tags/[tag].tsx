import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import ErrorPage from "../../components/error-page";
import { PostApi } from "../../api";
import PostsContainer from "../../components/posts-container";
import Intro from "../../components/intro";

export default function Post({ tag, posts, error }) {
  const router = useRouter();

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout meta={{ title: tag }}>
      <Container>
        {router.isFallback ? (
          <PageTitle>{tag}</PageTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{tag}</title>
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

export const getStaticProps: GetStaticProps = async ({ params: { tag } }) => {
  try {
    const response: any = await PostApi.getPosts({
      tag: tag as string,
      sortBy: "commentCount",
      sortOrder: "desc",
    });

    return {
      props: {
        posts: response.records,
        tag,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {
        error: {
          status: err.status,
          message: err.message,
        },
      },
      revalidate: 10,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
