import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 p-20 overflow-y-auto h-screen' style={{ position: 'relative', backgroundImage: 'url("https://wallpapercave.com/wp/wp10933264.jpg")', backgroundPosition: 'center' }}>
            <BackButton />
            <div className="flex justify-center items-center flex-col">
                <th className="text-center" style={{ fontFamily: 'Poppins', fontSize: '4em', maxWidth: '80%', color: '#FFFFFF', textShadow: '10px 10px 10px #000000' }}>
                    {book.title}
                </th>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex" style={{ position: 'relative' }}>
                    <img
                        src={book.imgURL}
                        alt="Book Cover"
                        style={{
                            width: '20rem',
                            height: '50rem',
                            objectFit: 'contain',
                            marginTop: '-6rem',
                            marginLeft: '2rem',
                            zIndex: 2,
                        }}
                    />
                    <img
                        src={book.imgURL}
                        alt="Book Cover"
                        style={{
                            width: '20rem',
                            height: '50rem',
                            objectFit: 'contain',
                            marginTop: '-4rem',
                            marginLeft: '-18rem',
                            zIndex: 1,
                            opacity: 0.5,
                        }}
                    />
                    <div className="title-container">
                        <h1 className="flex" style={{ fontSize: '1.8em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', margin: '80px 0 auto', marginLeft: '2rem' }}>Written By {book.author}</h1>
                        <h1 className="flex" style={{ fontSize: '1.8em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', margin: '50px 0 auto', marginLeft: '2rem' }}>Genre: {book.genre}</h1>
                        <h1 className="flex" style={{ fontSize: '1.8em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', margin: '50px 0 auto', marginLeft: '2rem' }}>Published In {book.publishYear}</h1>
                        <h1 className="flex justify-center items-center" style={{ fontSize: '2.4em', fontFamily: 'Poppins', color: '#ffffff', textShadow: '10px 10px 10px #000000', margin: '50px 0 auto', marginLeft: '2rem' }}>What's it about?</h1>
                        <div className="description-container" style={{ fontSize: '1.8em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000', margin: '25px 0 auto', marginLeft: '2rem' }}>
                            {book.description && (
                                <>
                                    {isExpanded ? book.description : `${book.description.slice(0, 150)}...`}
                                    {!isExpanded && (
                                        <span
                                            style={{ cursor: 'pointer', color: '#417ee0', marginLeft: "1em" }}
                                            onClick={toggleDescription}
                                        >
                                            See More
                                        </span>
                                    )}
                                    {isExpanded && (
                                        <span
                                            style={{ cursor: 'pointer', color: '#417ee0', marginLeft: "1em" }}
                                            onClick={toggleDescription}
                                        >
                                            See Less
                                        </span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowBook;
