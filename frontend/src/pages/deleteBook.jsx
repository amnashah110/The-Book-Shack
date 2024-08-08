import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Spinner from "../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";


const DeleteBook = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const deleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Deleted Successfully', { variant: 'success', autoHideDuration: 2000 });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error Deleting Book', { variant: 'error', autoHideDuration: 2000 });
                console.log(error);
            });
    };

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 p-20 overflow-y-auto' style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp10933264.jpg")', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center">
                <div className="text-3xl my-8" style={{ fontSize: '4em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000' }}>
                    Delete Book
                </div>
            </div>
            {loading ? <Spinner /> : ''}
            <div className="flex justify-center items-center flex-col border-4 w-[600px] p-4 mx-auto" style={{ fontFamily: 'Poppins', backgroundColor: '#494949', marginTop: '3em', borderRadius: '2em', fontSize: '2.2em', color: '#FFFFFF' }}>
                <p className="mb-8 mt-4">Confirm Deletion</p>
                <div className="flex">
                    <Link to='/'>
                        <button className="px-10 bg-red-500 w-full" style={{ fontFamily: 'Poppins', fontSize: '1em', color: '#ffffff', marginRight: '0.6em' }}>No</button>
                    </Link>
                    <button className="px-10 bg-green-600 w-full" style={{ fontFamily: 'Poppins', fontSize: '1em', color: '#ffffff', marginLeft: '2em' }} onClick={deleteBook}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBook