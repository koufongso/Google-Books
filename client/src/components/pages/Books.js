import React, { Component } from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import axios from 'axios';
import BookCard from '../BookCard';

class Books extends Component {
    state = {books:[]}


    componentDidMount(){
        axios.get("/api/books")
        .then((response)=>{
            if(response.data.length!==0){
                this.setState({books:response.data})
            }
        })
    }

    render() {
        let books = this.state.books;
        return (
            <div>
                <Navbar currentPage="books"></Navbar>
                <br></br>
                <div className="container">
                    <Jumbotron></Jumbotron>
                    <br></br>
                    {}

                    {books.length!==0 ? (books.map(x => {
                        return (
                            <BookCard
                                key={x.bookID}
                                id={x.bookID}
                                title={x.title}
                                authors={x.authors}
                                thumbnail={x.thumbnail}
                                link={x.link}
                                description={x.description}
                                saved = {true}
                            ></BookCard>)
                    })) : (<h1>No Saved Books</h1>)}
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Books;