import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
// import spinner from './spinner.js'
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults]=useState(0);
  // document.title=`${props.category}-NewsMonkey`

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9512641005394f6ba6f8669f13fa3f04&page=1`;
    // setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    // let setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  });

  const handlePrev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9512641005394f6ba6f8669f13fa3f04`

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({articles:parsedData.articles})
    setPage(page - 1);
    updateNews();
  };
  const handleNext = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9512641005394f6ba6f8669f13fa3f04&page=2f`
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({articles:parsedData.articles})
    setPage(page - 1);
    updateNews();
  };
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9512641005394f6ba6f8669f13fa3f04&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">NewsMonkey - Top Headlines</h1>
      {/* {this.state.loading && <spinner />} */}
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length ! == totalResults}
        loader={<spinner />}
      /> */}

      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          class="btn btn-primary "
          onClick={handlePrev}
        >
          &larr;prev
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 20)}
          type="button"
          class="btn btn-primary "
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
