import { useEffect, useState } from 'react';

import getArticle from './utils/getArticle';
import getRandomNumber from './utils/getRandomNumber';

function App() {
  const [articles, setArticles] = useState([getArticle(), getArticle(), getArticle(), getArticle(), getArticle()]);

  useEffect(() => {
    async function getArticles() {
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
    <main className="px-4">
      <div className="max-w-[800px] mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="mt-5">
            <h2 className="font-extrabold text-2xl text-gray-800">{article.title}</h2>
            <p className="text-justify text-gray-700 mt-2">{article.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
