import React from "react"
import { getNews, searchNews } from "../actions";
import { storeState } from "../reducers";
import { connect } from "react-redux";
import { newsItem } from "../actions";
import { NewsItem } from "./NewsItem";

interface _AppProps {
    getNews: () => {}
    searchNews: (query: string) => {}
    news: newsItem[]
}

interface _AppState {
    searchValue: ""
}

export class _App extends React.Component<_AppProps, _AppState> {
    constructor(props: any) {
        super(props)

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }


    renderNewsList = () => {
        return this.props.news.map((story: newsItem) => {
            return <NewsItem story={story} key={story.url} />
        })
    };

    componentDidMount(): void {
        this.props.getNews();
    }

    handleChange(event: any): void {
        this.setState({
            searchValue: event.target.value
        });
    }

    searchHandler(): void {
        this.props.searchNews(this.state.searchValue);
    }

    render(): JSX.Element {
        console.log(this.props.news)
        return (
            <div>
                <div className="container">
                    <nav className="navbar">
                        <a href="/" className="navbar-brand">News App</a>
                        <span className="navbar-text text-primary text-large ">
                            <a href="/">Farrell</a>
                        </span>
                    </nav>

                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={this.state.searchValue}
                                onChange={this.handleChange}
                            />
                            <span className="sr-only">Search article here</span>
                        </label>
                        <button onClick={this.searchHandler}>Search</button>
                    </div>

                    <div className="card-columns">
                        {this.renderNewsList()}
                    </div>
                </div>
            </div>


        )
    };
}

const mapStateToProps = (state: storeState): { news: newsItem[] } => {
    return state;
};

export const App = connect(mapStateToProps, { getNews, searchNews })(_App);
