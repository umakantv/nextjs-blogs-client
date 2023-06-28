import Footer from './footer'
import Meta from './meta'

type Metadata = {
  description?: string | undefined,
  tags?: string[] | undefined;
  author?: string | undefined;
  title?: string;
  ogImage?: string | undefined;
}

export default function Layout({ children, meta }: {
  meta?: Metadata | undefined,
  children: any
}) {
  return (
    <>
      <Meta meta={meta} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
