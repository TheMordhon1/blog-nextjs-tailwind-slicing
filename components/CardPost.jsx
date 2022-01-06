import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <Link href="/detail">
      <article className="cursor-pointer">
        <img src={thumbnail} alt="" className="w-full rounded mb-5" />
        <InfoPost {...infoPost} />
      </article>
    </Link>
  );
}
