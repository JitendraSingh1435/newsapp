import React, { Component } from 'react'

export default class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                        <span className="badge rounded-pill bg-danger"> {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/05/LIC-IPO-1-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}...</p>
                        <b><p className="card-text"><small className="text-muted">Published By: {author === null ? "Unknown" : author}</small></p></b>
                        <b><p className="card-text"><small className="text-muted">Date: {new Date(date).toGMTString()}</small></p></b>
                        <br />
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}
