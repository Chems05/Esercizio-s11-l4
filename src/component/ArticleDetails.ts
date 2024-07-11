import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../interfaces/Article';

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`https://api.example.com/articles/${id}`);
            const data = await response.json();
            setArticle(data);
        };

        fetchArticle();
    }, [id]);


    return (
        <div>
        </div>
    );
};

export default ArticleDetail;