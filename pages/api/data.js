// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json([
    {
      id: 1,
      thumbnail: "/img/thumbnail-2.png",
      category: "Internet",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      shortDescription:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
      authorAvatar: "/img/authors/author-2.png",
    },
    {
      id: 2,
      thumbnail: "/img/thumbnail-3.png",
      category: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      shortDescription:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      authorName: "Esther Howard",
      authorJob: "Entrepreneur",
      authorAvatar: "/img/authors/author-3.png",
    },
    {
      id: 3,
      thumbnail: "/img/thumbnail-4.png",
      category: "INSPIRATIONS",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      shortDescription:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      authorName: "Robert Fox",
      authorJob: "Front-end Engineer",
      authorAvatar: "/img/authors/author-4.png",
    },
    {
      id: 4,
      thumbnail: "/img/thumbnail-2.png",
      category: "Internet",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      shortDescription:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      authorName: "Elena Gomez",
      authorJob: "Product Designer",
      authorAvatar: "/img/authors/author-2.png",
    },
    {
      id: 5,
      thumbnail: "/img/thumbnail-3.png",
      category: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      shortDescription:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      authorName: "The Mordhon",
      authorJob: "Entrepreneur",
      authorAvatar: "/img/authors/author-3.png",
    },
    {
      id: 6,
      thumbnail: "/img/thumbnail-4.png",
      category: "INSPIRATIONS",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      shortDescription:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      authorName: "Romdhon",
      authorJob: "Front-end Engineer",
      authorAvatar: "/img/authors/author-4.png",
    },
  ]);
}
