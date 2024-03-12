/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { articlesType } from "../utils/apis/types";
import { getAllNews } from "../utils/apis/news";
import Layout from "../components/layout";

export default function Home() {
  const [articles, setArticles] = useState<articlesType[]>([]);

  const fetchData = async () => {
    try {
      const result = await getAllNews();
      setArticles(result.articles);
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <p>test</p>
    </Layout>
  );
}
