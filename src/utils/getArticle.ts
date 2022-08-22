import { v4 as uuid } from 'uuid';

const article = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet error, esse ex modi hic dignissimos rem delectus a, obcaecati ut consectetur sequi sed doloremque. Iusto quod exercitationem vitae alias vel. `;

interface getArticleProps {
  size: number;
}

type Article = {
  id: string;
  title: string;
  content: string;
};

export default function getArticle({ size }: getArticleProps = { size: 10 }): Article {
  return {
    id: uuid(),
    title: 'Artigo Lorem Ipsum',
    content: article.repeat(size),
  };
}
