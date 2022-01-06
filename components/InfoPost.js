import PostAuthor from "./PostAuthor";
import PostMetaTitle from "./PostMetaTitle";

export default ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="mt-6 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
};
