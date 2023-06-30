import Footer from "./footer";
import Meta from "./meta";
import { Container } from "./ui";
import Header from "./header";

type Metadata = {
  description?: string | undefined;
  tags?: string[] | undefined;
  author?: string | undefined;
  title?: string;
  ogImage?: string | undefined;
};

export default function Layout({
  children,
  meta,
}: {
  meta?: Metadata | undefined;
  children: any;
}) {
  return (
    <>
      <Meta meta={meta} />
      <div className="min-h-screen">
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
}
