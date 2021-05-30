import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/articlepage/${article.name}`}>
              <h3>{ article.title }</h3>
              <p>{article.content[0].substring(0,210)}...</p> <hr/>
            </Link>
        ))}
    </>
);

export default ArticlesList;