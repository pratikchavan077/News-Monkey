import React, { useEffect, useState } from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

function News({ pagesize, country, category, setProgress }) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    const [load, setLoad] = useState(true)
    

    function capitalizeFirstLetter(str) {
        return String(str).charAt(0).toUpperCase() + String(str).slice(1);
    }


    async function fetchApi() {
        setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7a85bf8d921445aea84bdf8ae7e58a52&page=${page}&pageSize=${pagesize}`
        setLoad(true)
        let resp = await fetch(url)
        setProgress(30)
        const data = await resp.json()
        setProgress(70)
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoad(false)
        setProgress(100)
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`
        fetchApi()
    }, [])

    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7a85bf8d921445aea84bdf8ae7e58a52&page=${page+1}&pageSize=${pagesize}`
        setPage(page + 1)
        let resp = await fetch(url)
        const data = await resp.json()
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
    }

    return (
        <>
                <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>News Monkey - Top Headlines from {capitalizeFirstLetter(category)}</h1>
                {load && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {
                                articles.map((elem) => (
                                    <div className="col-md-4" key={elem.url}>
                                        <NewsComponent title={elem.title ? elem.title : ""} desc={elem.description ? elem.description : ""} imgUrl={elem.urlToImage ? elem.urlToImage : ""} newsurl={elem.url ? elem.url : ""} author={elem.author ? elem.author : "unknown"} date={elem.publishedAt} source={elem.source.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: "us",
    pagesize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News