import mongoose, { mongo } from "mongoose"

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        imgURL: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const book = mongoose.model('Book', bookSchema);