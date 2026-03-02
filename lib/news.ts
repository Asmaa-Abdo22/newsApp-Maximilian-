import { DUMMY_NEWS } from "@/dummy-news";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export function getAllNews(): NewsItem[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): NewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce<number[]>((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number | string): number[] {
  const targetYear = +year;
  return DUMMY_NEWS.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === targetYear) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number | string): NewsItem[] {
  const targetYear = +year;
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === targetYear,
  );
}

export function getNewsForYearAndMonth(
  year: number | string,
  month: number | string,
): NewsItem[] {
  const targetYear = +year;
  const targetMonth = +month;
  return DUMMY_NEWS.filter((news) => {
    const newsDate = new Date(news.date);
    const newsYear = newsDate.getFullYear();
    const newsMonth = newsDate.getMonth() + 1;
    return newsYear === targetYear && newsMonth === targetMonth;
  });
}
