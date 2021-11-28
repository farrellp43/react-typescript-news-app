import React from "react";
import { newsItem } from "../actions";

interface NewsItemProps {
    story: newsItem
}

export const NewsItem = ({ story }: NewsItemProps): JSX.Element => {

    const { title, author, description, publishedAt, urlToImage, url, source } = story;

    return (
        <div className="card">
            <img src={urlToImage} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author || 'Anonymous'}</h6>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center border-primary">
                    <small className="text-primary">{source.name}</small>
                    <small className="text-muted">{publishedAt.split('T')[0]}</small>
                    <div className="btn-group">
                        <a type="button" href={url} className="btn btn-sm btn-outline-primary">Read</a>
                    </div>
                </div>
            </div>
        </div>
    );
};