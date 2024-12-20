"use client";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
//defining interface for values coming from the api to set their types
interface NewsItems {
  author: null | string;
  content: null | string;
  description: null | string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
}

function NewsList() {
  const [newsData, setNewsData] = useState([]);

  //function to fetch news data from api

  async function getNews() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
      );
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  console.log(newsData);

  return (
    <div>
      <h1>List news</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {newsData.map((item: NewsItems, index: number) => {
          return item.description === "[Removed]" ||
            item.description === null ? null : (
            <div key={index}>
              <NewsCard
                news_description={item.description.slice(0, 90) + "..."}
                news_publishedAt={item.publishedAt}
                news_publisher={item.source.name}
                news_title={item.title.slice(0, 49) + "..."}
                news_image={item.urlToImage}
                news_details_url={item.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsList;
