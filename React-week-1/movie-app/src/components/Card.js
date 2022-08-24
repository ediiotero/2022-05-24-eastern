import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className="card m-3" style={{width: "18rem", display: "inline-block"}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                <a href="#" className="btn btn-primary"
                    onClick={() => alert(`Clicked on ${this.props.title}`)}
                >Read More...</a>
            </div>
        </div>
    )
  }
}
