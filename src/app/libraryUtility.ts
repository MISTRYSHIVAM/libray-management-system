import {
    isIsbnContainAlphabet,
    isIsbnLengthValid,
} from "../utility/validationFn";
import { invalidIsbnError } from "./customException";

interface Book {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
}

class Library {
    private books: Map<string, Book> = new Map();
    private brrowedBookList: String[] = [];

    addBook(book: Book) {
        if (!isIsbnLengthValid(book.isbn)) {
            throw new invalidIsbnError("isbn lengh must be ten");
        }

        if (isIsbnContainAlphabet(book.isbn)) {
            throw new invalidIsbnError("isbn should not contain alphabet");
        }
        this.books.set(book.isbn, book);
    }
}

export default Library;
