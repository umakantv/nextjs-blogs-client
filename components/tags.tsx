import Link from "next/link";

const colors = [
  '#47bbff',
  '#07c0c0',
  '#50ff47',
  '#ff4747',
  '#f5da45',
]

export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.map((tag: string, index: number) => (
          <Link href={`/tags/${tag}`} className="ml-4 font-normal">
            <span key={index} style={{color: colors[index]}}>
              # {tag}
            </span>
          </Link>
        ))}
      </p>
    </div>
  );
}
