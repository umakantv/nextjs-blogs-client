import { Typography } from "./ui";

export default function PostTitle({ children }) {
  return (
    <>
      {/* <Typography
        variant="h1"
        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      >
        {children}
      </Typography> */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-8">
        {children}
      </h1>
    </>
  );
}
