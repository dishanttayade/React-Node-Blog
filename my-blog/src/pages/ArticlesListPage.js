import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList'
import '../App.css'


const ArticlesListPage = () => (
    /*<>
        <h1>Articles List Page</h1>
    </>*/
    <div className="article-list">
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </div>

);

export default ArticlesListPage;