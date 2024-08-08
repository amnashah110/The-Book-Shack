import express from 'express';
import { book } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.imgURL ||
            !request.body.description ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: `Send all required fields: title, author, publishYear`,
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            imgURL: request.body.imgURL,
            description: request.body.description,
            genre: request.body.genre,
        };
        const Book = await book.create(newBook);
        return response.status(201).send(Book);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const books = await book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.imgURL ||
            !request.body.description ||
            !request.body.genre
        ) {
            return response.status(400).send({
                message: `Send all required fields: title, author, publishYear`,
            });
        }
        const { id } = request.params;
        const result = await book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: `Book not found` });
        }
        return response.status(200).json({ message: `Book updated successfully` });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedBook = await book.findByIdAndDelete(id);
        if (!deletedBook) {
            return response.status(404).json({ message: "Book not found" });
        }
        return response.status(200).json({ message: "Book deleted successfully" });

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const Book = await book.findById(id);

        return response.status(200).json(Book);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

export default router;