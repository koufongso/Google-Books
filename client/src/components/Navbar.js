import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Google Books</a>
            <div className="navbar-nav">
                <a className={"nav-item nav-link"+(props.currentPage==="home"? " active" :"")} href="/">Search Books</a>
                <a className={"nav-item nav-link"+(props.currentPage==="books"? " active" :"")} href="/books">Saved Books</a>
            </div>
        </nav>
    )
}


export default Navbar;