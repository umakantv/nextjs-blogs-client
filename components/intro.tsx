import SectionSeparator from "./section-separator";

export default function Intro({title = 'Blog.'}) {
  return (
    <section className="intro flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
    </section>
  );
}
