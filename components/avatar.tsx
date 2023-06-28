import Image from "next/legacy/image"
import Link from 'next/link'

export default function Avatar({ author }) {
  const name = author.name || null

  return (
    <Link href={`/user/${author.username}`}>
      <div className="flex items-center">
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={author.image}
              layout="fill"
              className="rounded-full"
              alt={name}
            />
          </div>
          <div className="text-xl font-bold">{name}</div>
      </div>
    </Link>
  )
}
