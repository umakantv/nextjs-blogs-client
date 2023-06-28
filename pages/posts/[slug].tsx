import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import { CommentApi, PostApi } from "../../api";
import ErrorPage from "../../components/error-page";
import Comment from "../../components/comment";

export default function Post({ post, comments = [], posts, error }) {
  const router = useRouter();
  const morePosts = posts;

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout meta={{
      author: post?.author.name,
      description: post?.excerpt,
      tags: post?.tags,
      title: post?.title,
      ogImage: post?.metadata?.ogImage
    }}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.metadata?.coverImage}
                date={post.createdAt}
                author={post.author}
                tags={post.tags}
              />
              
              <PostBody content={post.content} />
              <hr className="border-accent-2 mt-10 mb-10" />
              <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Comments</h2>

              <footer>
                {comments.map((comment, i) => (<Comment key={i} comment={comment} />))}
              </footer>
            </article>

            <SectionSeparator />

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  try {

    const post: any = await PostApi.getPostById(params.slug as string);
    const comments = await CommentApi.getCommentsByPostId(post._id);

    return {
      props: {
        post,
        comments,
        posts: [],
      },
      revalidate: 10,
    };
  } catch(err) {

    console.error(err.response?.status, err)
    const status = err.response?.status || 500;
    const message = err.response?.data.message || 'Something went wrong';

    return {
      props: {
        error: {
          status,
          message,
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
