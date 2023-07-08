import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import ErrorPage from "../../components/error-page";
import { PostApi, UserApi } from "../../api";
import PostsContainer from "../../components/posts/posts-container";
import Intro from "../../components/intro";
import Avatar from "../../components/Auth/Avatar";
import { Typography } from "../../components/ui";

export default function Post({ user, posts, error }) {
  const router = useRouter();

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PageTitle>{user?.username}</PageTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{user?.name}</title>
              </Head>
              <Container>
                <div className="text-center md:text-left">
                  <Avatar user={user} size={200} />
                </div>
                <div>
                  <Intro title={`@ ${user.username}`} />
                  <Typography variant="h4">{user?.name}</Typography>
                  <Typography variant="body2">{user?.about}</Typography>
                </div>
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
  params: { username },
}) => {
  try {
    const user: any = await UserApi.getUser(username as string);

    const response: any = await PostApi.getPosts({
      authorId: user._id as string,
      sortBy: "commentCount",
      sortOrder: "desc",
    });

    return {
      props: {
        posts: response.records,
        user,
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
