import NewsList from "@/components/NewsList/NewsList";
import { getNewsForYear } from "@/lib/news";

const FilterdNewsPage = ({ params }: { params: { year: string } }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
};

export default FilterdNewsPage;
