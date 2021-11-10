import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsitem extends Component {

    // Creating constructor
    constructor() {
        // console.log("This is contructor");
        super();
        this.state = { articles: [], page: 1, loading: true, totalResults: 1 }
    }

    async update() {
        this.props.setProgress(50);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=70a79c6fd50245bebe64bc7882659185&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });
        this.props.setProgress(100);
    }

    // Creating componentDidMount
    async componentDidMount() {
        this.update();
    }

    // Fetch more data function for infinite scroll
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=70a79c6fd50245bebe64bc7882659185&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        const data = await fetch(url);
        const parseData = await data.json();
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false });
    }

    // COnverting text into capitalize
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    render() {
        return (
            <>
                <h3 className="text-center my-3">NewsMonkey- {this.props.category === 'general'?"Top":this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <News title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} source={element.source.name} 
                                    author={element.author===null?'Unknown':element.author}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

// Using proptypes.
Newsitem.propTypes = {
    category: PropTypes.string,
    page: PropTypes.string,
    pageSize: PropTypes.number
};
