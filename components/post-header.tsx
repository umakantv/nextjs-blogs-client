import Date from "./date";
import CoverImage from "./cover-image";
import PageTitle from "./page-title";
import Tags from "./tags";
import AccountInfo from "./Auth/AccountInfo";

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <div className="hidden md:block md:mb-12">
        <AccountInfo user={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <AccountInfo user={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          {tags.length > 0 && <Tags tags={tags} />}
        </div>
      </div>
    </>
  );
}
