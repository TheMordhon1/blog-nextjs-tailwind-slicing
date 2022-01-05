import InfoPost from "@components/InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} alt="" className="w-full rounded mb-5" />
      <InfoPost {...infoPost} />
    </article>
  );
}
