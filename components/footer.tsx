import { Container } from "./ui";
import LinkButton from "./ui/LinkButton";

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with ❤️ by Umakant
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <LinkButton link="https://umakantv.com" variant="outlined">
              Reach out to me
            </LinkButton>
            {/* <a className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"></a> */}
            <a
              href={`https://github.com/umakantv/nextjs-blogs-client`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
