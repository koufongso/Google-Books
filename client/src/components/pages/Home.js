import React, { Component } from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import SerachBar from '../SearchBar';
import axios from 'axios';
import BookCard from '../BookCard';

class Home extends Component {
    state = { currentBook: "", result: undefined }

    formHandle = (event) => {
        event.preventDefault();
        const { value } = event.target;
        this.setState({ currentBook: value });

    }

    searchHandle = (event) => {
        
        event.preventDefault();
        let name = this.state.currentBook.trim();
        if (name) {
            // console.log("call api");
            axios.get(`api/search/${name}`)
                .then((response) => {
                    this.setState({ result: response.data });
                })
        }
    }

    saveBook = () =>{

    }

    render() {
        return (
            <div>
                <Navbar currentPage="home"></Navbar>
                <br></br>
                <div className="container">
                    <Jumbotron></Jumbotron>
                    <SerachBar formHandle={this.formHandle} searchHandle={this.searchHandle} ></SerachBar>
                    <br></br>

                    {this.state.result ? (this.state.result.items.map(x => {
                        let volumeInfo = x.volumeInfo;
                        let id = x.id;
                        return (
                            <BookCard
                                key={id}
                                id = {id}
                                title={volumeInfo.title}
                                authors={volumeInfo.authors}
                                thumbnail={volumeInfo.imageLinks? volumeInfo.imageLinks.thumbnail:""}
                                link={volumeInfo.infoLink}
                                description={volumeInfo.description}
                                saved={false}
                            ></BookCard>)
                    })
                    ) : (<h1>No Search Result</h1>)}
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Home;