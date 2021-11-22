import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
export class Apinews extends Component {
    static defaultProps = {
        country: "us",
        pagesize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = []

    constructor() {
        super()
        console.log("hrll")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=097575c06ecd4bc4b550fae79a2bd131&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState(
            {
                articles: parsedData.articles,
                loading: false
            })
        console.log(parsedData)
    }
    handlePrev = async () => {
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=097575c06ecd4bc4b550fae79a2bd131&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNext = async () => {
        console.log("next")
        console.log("cdm")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {


        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=097575c06ecd4bc4b550fae79a2bd131&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3 ">
                <h1 className="text-center"><strong>TOP HEADLINES</strong>  IN <i>INDIA</i></h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 my-4" key={element.url}>
                            <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handleNext}>NEXT &rarr; </button>
                </div>
                <nav class="navbar fixed-bottom navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Fixed bottom</a>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Apinews
