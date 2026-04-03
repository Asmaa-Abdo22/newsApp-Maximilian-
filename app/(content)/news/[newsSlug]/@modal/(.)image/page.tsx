// "use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImage = async ({
  params,
}: {
  params: { newsSlug: string };
}) => {
  const { newsSlug } = await params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  // const router = useRouter();

  return (
    <div
      className="image-lightbox"
      role="presentation"
      // onClick={() => router.back()}
    >
      <div className="image-lightbox-backdrop" />

      <div
        className="image-lightbox-panel"
        role="dialog"
        aria-modal="true"
        aria-label={newsItem.title}
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="image-lightbox-frame">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </div>
    </div>
  );
};

export default InterceptedImage;
