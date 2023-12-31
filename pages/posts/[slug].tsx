import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/posts/post-body";
import MoreStories from "../../components/posts/more-stories";
import PostHeader from "../../components/posts/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import { CommentApi, PostApi } from "../../api";
import ErrorPage from "../../components/error-page";
import Comment from "../../components/comments/comment";
import markdownToHtml from "../../lib/markdown";

export default function Post({ post, comments = [], posts, error }) {
  const router = useRouter();
  const morePosts = posts;

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return (
    <Layout
      meta={{
        author: post?.author.name,
        description: post?.excerpt,
        tags: post?.tags,
        title: `${post?.title} - ${post?.author.name}`,
        ogImage: post?.metadata?.ogImage,
      }}
    >
      <Container>
        {router.isFallback ? (
          <PageTitle>Loading...</PageTitle>
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
              <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Comments
              </h2>

              <footer>
                {comments.map((comment, i) => (
                  <Comment key={i} comment={comment} />
                ))}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post: any = await PostApi.getPostById(params.slug as string);
    const comments = await CommentApi.getCommentsByPostId(post._id);

    post.content = markdownToHtml(post.content || "");

    return {
      props: {
        post,
        comments,
        posts: [],
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
