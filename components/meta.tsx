import Head from 'next/head'
import { useRouter } from 'next/router';
import config from '../config';

export default function Meta({meta}: {meta: any}) {
  const router = useRouter();
  let {
    description = "A statically generated blog example using Next.js and Node.js Backend.",
    tags = ['nextjs', 'nodejs', 'mern-stack'],
    author = "Umakant Vashishta",
    title = "Home 🏡",
    ogImage = config.HOME_OG_IMAGE_URL,
  } = meta || {};

  let keywords = tags.join(", ");
  let route = router.asPath;

  let url = config.HOME_PAGE + route;


  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{title}</title>
    </Head>
  )
}
