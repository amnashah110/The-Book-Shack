import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import ShowBook from "./pages/showBook";
import EditBook from "./pages/editBook";
import CreateBook from "./pages/createBook";
import DeleteBook from "./pages/deleteBook";
import "@fontsource/poppins/800.css";

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/books/details/:id' element = {<ShowBook/>}></Route>
      <Route path = '/books/create' element = {<CreateBook/>}></Route>
      <Route path = '/books/delete/:id' element = {<DeleteBook/>}></Route>
      <Route path = '/books/edit/:id' element = {<EditBook/>}></Route>
    </Routes>
  );
};

export default App;
