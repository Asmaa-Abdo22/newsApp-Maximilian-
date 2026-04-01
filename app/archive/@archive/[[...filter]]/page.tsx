import NewsList from "@/components/NewsList/NewsList";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

const FilterdNewsPage = async ({
  params,
}: {
  params: Promise<{ filter?: string[] }>;
}) => {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  if (
    selectedYear !== undefined &&
    !getAvailableNewsYears().includes(+selectedYear)
  ) {
    notFound();
  }
  if (
    selectedYear !== undefined &&
    selectedMonth !== undefined &&
    !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
  ) {
    notFound();
  }

  let news;
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  let newsContent = <p>No News found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilterdNewsPage;
