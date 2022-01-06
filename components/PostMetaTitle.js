export default function PostMetaTitle({ title, date, category, center }) {
  return (
    <>
      <div className="flex space-x-3 text-lg items-center">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div className="">{date}</div>
      </div>
      <h2
        className={`text-2xl text-white mt-5 w-11/12 ${
          center ? "text-center" : ""
        }`}
      >
        {title}
      </h2>
    </>
  );
}
