import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ newsSlug: string }> }) => {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="fullScreenImage">
        <img src={`/images/news/${newsItem.image}`} alt={`${newsItem.title}`} />
      </div>
    </>
  );
};

export default page;
