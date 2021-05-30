import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import '../App.css'


const ArticlePage = ({ match }) => {
    const name = match.params.name;
    /*
    return (
        <>
            <h1>This is {name} Article Page</h1>
        </>
    );*/

    const article = articleContent.find(article => article.name === name);
    
    if(!article) return <h1>{name} Article doesn't exist!</h1>

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
    <>
        <h1>{article.title}</h1>
        <div className="article-para">
            {article.content.map((paragraphs, key) =>(
                    <p key={key}>{paragraphs}</p>
            ))}
        </div>

       <h3>Other Articles</h3>
       <div className="article-list">
            <ArticlesList articles={otherArticles} />
       </div>
    </>
    );
};

export default ArticlePage;
