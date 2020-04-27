import React, { Component } from 'react';
import axios from 'axios';

class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            authors: props.authors ? props.authors : [],
            thumbnail: props.thumbnail,
            description: props.description,
            link: props.link,
            saved: props.saved
        }
    }

    componentDidMount() {
        axios.get(`/api/books/${this.state.id}`)
            .then((response) => {
                if (response.data) {
                    this.setState({ saved: true })
                } else {
                    this.setState({ saved: false })
                }
            })
    }

    saveBook = () => {
        axios.post(`/api/books`,
            {
                bookID: this.state.id,
                title: this.state.title,
                authors: this.state.authors,
                thumbnail: this.state.thumbnail,
                link: this.state.link,
                description: this.state.description
            })
            .then((response) => {
                if (response.data) {
                    this.setState({ saved: true })
                } else {
                    this.setState({ saved: false })
                }
            })
    }

    unSaveBook = () => {
        axios.delete(`/api/books/${this.state.id}`)
            .then((response) => {
                if (response.data) {
                    this.setState({ saved: false });
                } else {
                    this.setState({ saved: true })
                }
            })
    }

    render() {
        return (
            <div className="card" style={{ "width": "100%" }}>
                <div className="container">
                    <div className="row">
                        <img className="card-img-left col-2" src={this.state.thumbnail} alt="Book thumbnail" style={{ "height": "220px", "padding": "20px" }}></img>
                        <div className="card-body col-10">
                            <h5 className="card-title">{this.state.title}</h5>
                            <h6 className="card-title">{this.state.authors.join(", ")}</h6>
                            <p className="card-text">{this.state.description}</p>

                            <a type="button" className="btn btn-outline-info btn-sm" href={this.state.link} target="_blank" rel="noopener noreferrer" style={{ "marginRight": "5px" }}>View</a>
                            {this.state.saved ?
                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.unSaveBook}>Unsave</button>
                                :
                                <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.saveBook}>Save</button>}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BookCard;


