import InfoPost from "./InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex gap-7 items-start lg:items-center flex-col md:flex-row">
        <div className="overflow-hidden rounded-xl w-full object-fit md:w-8/12">
          <img src="/img/thumbnail-1.png" alt="" />
        </div>
        <div className="w-full md:w-4/12 text-white/60">
          <InfoPost
            category="ui design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/img/authors/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
