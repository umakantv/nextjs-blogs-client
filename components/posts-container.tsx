import Container from "./container";
import HeroPost from "./hero-post";
import Intro from "./intro";
import MoreStories from "./more-stories";

export default function PostsContainer({ allPosts }) {

    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return <Container>
        {HeroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost?.featuredImage}
            date={heroPost.createdAt}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
}