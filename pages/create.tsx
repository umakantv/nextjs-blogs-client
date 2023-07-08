import { lazy, Suspense } from "react";
import { useRouter } from "next/router";
import Container from "../components/container";
import Layout from "../components/layout";

const PostForm = lazy(() => import("../components/posts/psot-form"));

export default function CreatePost({}) {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <Suspense fallback={"Loading..."}>
          <PostForm />
        </Suspense>
      </Container>
    </Layout>
  );
}
