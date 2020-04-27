import React from 'react';

function SearchBar(prop) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="book">Book Search</label>
                <input className="form-control mr-sm-2" type="text" id="book" placeholder="Enter book's name here" aria-label="Search" onChange={prop.formHandle} required></input>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit" onClick={prop.searchHandle}>Search</button>
                </div>
            </div>

        </form>


    )
}

export default SearchBar;