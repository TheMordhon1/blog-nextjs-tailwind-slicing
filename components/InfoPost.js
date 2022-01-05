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
      <div className="flex space-x-3 text-lg items-center">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2 className="text-2xl text-white mt-5 w-11/12">{title}</h2>
      <p className="mt-6 w-10/12">{shortDescription}</p>

      <div className="flex items-center mt-5 space-x-3">
        <img
          src={authorAvatar}
          alt={authorName}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-white">{authorName}</h3>
          <div className="text-sm">{authorJob}</div>
        </div>
      </div>
    </>
  );
};
