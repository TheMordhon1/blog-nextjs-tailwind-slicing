export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
  return (
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
  );
}
