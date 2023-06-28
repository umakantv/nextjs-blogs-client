import cn from 'classnames'
import Image from "next/legacy/image"
import Link from 'next/link'

interface Props {
  title: string
  coverImage: string
  slug?: string
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={1200}
      height={630}
      alt={`Cover Image for ${title}`}
      src={coverImage}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
