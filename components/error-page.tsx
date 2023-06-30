import Container from "./container";
import Header from "./header";
import Layout from "./layout";

export default function ErrorPage({ status, message }) {
  return (
    <Layout>
      <Container>
        <Header />
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {status}
        </h1>
        <h2>{message}</h2>
      </Container>
    </Layout>
  );
}
