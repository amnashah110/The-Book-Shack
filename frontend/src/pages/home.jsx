import React, { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdAddCircle, MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 p-20 overflow-y-auto' style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp10933264.jpg")', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center">
                <div className="text-3xl my-8" style={{ fontSize: '6em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000' }}>
                    The Book Shack
                </div>
            </div>
            <div className="flex justify-end items-center">
                <Link to='/books/create'>
                    <h1 style = {{fontSize: '1.5em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', marginTop: '-0.1em', marginRight: '0.4em'}} title = "Add Book">Add Book</h1>
                </Link>
                <Link to='/books/create'>
                    <MdAddCircle size={40} style={{ color: "#FFFFFF" }} title = "Add Book"/>
                </Link>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div className="flex flex-wrap">
                        {books.map((book) => (
                            <div key={book._id} className="p-11 relative group">
                                <div className="image-wrapper">
                                    <img
                                        src={book.imgURL}
                                        alt={`Book Cover for ${book.title}`}
                                        className="enlarge-image"
                                    />
                                    <div className="title-container">
                                        <h1 className="flex justify-center items-center" style={{ fontSize: '1.5em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', margin: '0 auto' }}>{book.title}</h1>
                                    </div>
                                    <div className="icon-container flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100" title={book.title}>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className='text-white' size={35} title = "View Details"/>
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-white ml-2' size={35} title = "Edit Book"/>
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-white ml-2' size={35} title = "Delete Book"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <style>
                {`
                    .image-wrapper {
                        position: relative;
                    }

                    .enlarge-image {
                        width: 200px;
                        height: 300px;
                        object-fit: cover;
                        transition: transform 0.3s ease-in-out;
                    }

                    .group:hover .enlarge-image {
                        transform: scale(1.1);
                    }

                    .title-container {
                        max-width: 200px;
                        margin: 25px 0 auto;
                        text-align: center;
                    }

                    .icon-container {
                        background-color: rgba(0, 0, 0, 0.5);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        display: none; 
                        width: 200px;
                        height: 300px;
                        transform: scale(1.1);
                    }

                    .group:hover .icon-container {
                        display: flex; 
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
