import { useState, useEffect } from "react";
import { getTopHeadlines } from "../utils/apis/news";
import { articlesType } from "../utils/apis/types";

export default function TopHeadlines() {
  const [news, setNews] = useState<articlesType[]>([]);

  const fetchData = async () => {
    try {
      const result = await getTopHeadlines();
      setNews(result.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>Top Headlines</p>
    </div>
  );
}
