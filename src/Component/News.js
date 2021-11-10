import React, { Component } from 'react'
import image from './image-processing.png'


export default class News extends Component {
  render() {
    return (
      <>
        <div className="position-relative d-flex justify-content-end" style={{top:"10px",zIndex:'1'}}>
          <span className="badge rounded-pill bg-danger">{this.props.source}</span>
        </div>
        <div className="card">
          <img src={this.props.imageUrl ? this.props.imageUrl : image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{this.props.title}</h6>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.Url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text mt-2"><small className="text-muted">By {this.props.author}</small></p>
          </div>
        </div>
      </>
    )
  }
}

// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=70a79c6fd50245bebe64bc7882659185