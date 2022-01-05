import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex gap-7 items-center">
        <div className="overflow-hidden rounded-xl w-8/12">
          <img src="/img/img1.png" alt="" />
        </div>
        <div className="w-4/12 text-white/60">
          <InfoPost
            category="ui design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/img/authors/author1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
