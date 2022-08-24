import './styles.scss';

import React, { useState } from 'react';

import getArticle from '../../utils/getArticle';
import getRandomNumber from '../../utils/getRandomNumber';

export default function ScrollableFloatingCard() {
  const [articles, setArticles] = useState([getArticle({ size: 3 })]);

  function handleScroll(event: React.MouseEvent<HTMLDivElement>) {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight * 0.95;
    if (isAtBottom) {
      const newArticle = getArticle({ size: getRandomNumber({ min: 1, max: 2 }) });
      setArticles((prevArticles) => [...prevArticles, newArticle]);
    }
  }

  return (
    <section
      id="scrollable-floating-card"
      className="fixed top-4 right-4 w-72 h-72 border shadow-2xl rounded overflow-y-auto p-4 bg-white flex flex-col gap-4 overscroll-contain"
      onScroll={handleScroll}
    >
      {articles.map((article) => (
        <div key={article.id}>
          <h2 className="font-extrabold text-2xl text-gray-800 m-0">{article.title}</h2>
          <p className="text-justify text-gray-700 mt-2">{article.content}</p>
        </div>
      ))}
    </section>
  );
}
