import React, { useState, useEffect } from "react";
import axios from 'axios';
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setGenre(response.data.genre);
                setPublishYear(response.data.publishYear);
                setImgURL(response.data.imgURL);
                setDescription(response.data.description);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occured. Please check console');
                console.log(error);
            });
    }, [])

    const editBook = () => {
        const data = {
            title,
            author,
            genre,
            publishYear,
            imgURL,
            description,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Edited Successfully', { variant: 'success', autoHideDuration: 2000 });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error Editing Book', { variant: 'error', autoHideDuration: 2000 });
                console.log(error);
            });
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 p-20 overflow-y-auto h-screen' style={{ position: 'relative', backgroundImage: 'url("https://wallpapercave.com/wp/wp10933264.jpg")', backgroundPosition: 'center' }}>
            <BackButton />
            <div className="flex justify-center items-center">
                <div className="text-3xl my-8" style={{ fontSize: '4em', fontFamily: 'Poppins', color: '#FFFFFF', textShadow: '10px 10px 10px #000000' }}>
                    Edit Book Details
                </div>
            </div>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-4 w-[600px] p-4 mx-auto" style={{ backgroundColor: '#494949', marginTop: '3em', borderRadius: '2em' }}>
                <div className="my-4">
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Genre</label>
                    <input
                        type='text'
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Publish Year</label>
                    <input
                        type='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                    <label className="flex text-xl mr-4 justify-center items-center" style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#FFFFFF', marginBottom: '0.7em', marginTop: '0.7em' }}>Enter Book Image URL</label>
                    <input
                        type='text'
                        value={imgURL}
                        onChange={(e) => setImgURL(e.target.value)}
                        className="border-4 border-gray-700 px-4 py-2 w-full"
                        required='true'
                        style={{ fontFamily: 'Poppins', fontSize: '1.5em', color: '#000000' }}
                    />
                </div>
                <button className="p-2 bg-gray-500 m-8" onClick={editBook} style={{ fontFamily: 'Poppins', fontSize: '1.8em', color: '#ffffff' }}>Save Book Details</button>
            </div>
        </div>
    )
}

export default EditBook