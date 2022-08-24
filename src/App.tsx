import { useEffect, useState } from 'react';

import getArticle from './utils/getArticle';
import getRandomNumber from './utils/getRandomNumber';

export default function App() {
  const [articles, setArticles] = useState(() => {
    const DEFAULT_STATE = [
      getArticle({ size: 5 }),
      getArticle({ size: 10 }),
      getArticle({ size: 20 }),
      getArticle({ size: 30 }),
      getArticle({ size: 40 }),
    ];

    return DEFAULT_STATE;
  });

  useEffect(() => {
    function getArticles() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight * 0.95;
      if (isAtBottom) {
        const newArticle = getArticle({ size: getRandomNumber({ min: 1, max: 20 }) });
        setArticles((prevArticles) => [...prevArticles, newArticle]);
      }
    }

    document.addEventListener('scroll', getArticles);

    return () => document.removeEventListener('scroll', getArticles);
  }, []);

  return (
    <main className="px-6">
      <div className="max-w-3xl mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="mt-5">
            <h2 className="font-extrabold text-3xl text-gray-800">{article.title}</h2>
            <p className="text-justify text-gray-600 mt-2">{article.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
