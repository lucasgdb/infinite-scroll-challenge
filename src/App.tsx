import { useEffect, useState } from 'react';

import getArticle from './utils/getArticle';
import getRandomNumber from './utils/getRandomNumber';

function App() {
  const [articles, setArticles] = useState([getArticle(), getArticle(), getArticle(), getArticle(), getArticle()]);

  useEffect(() => {
    async function getArticles() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight * 0.98;
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
          <p key={article.id} className="text-justify mt-5">
            {article.content}
          </p>
        ))}
      </div>
    </main>
  );
}

export default App;
