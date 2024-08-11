import {
    isEmpty,
    isIsbnContainAlphabet,
    isIsbnLengthValid,
} from "../utility/validationFn";
import {
    invalidAuthorException,
    invalidIsbnException,
    invalidTitleExecption,
    invalidYearException,
} from "./customException";

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
        if (isEmpty(book.isbn)) {
            throw new invalidIsbnException("please provide the isbn");
        }

        if (!isIsbnLengthValid(book.isbn)) {
            throw new invalidIsbnException("isbn lengh must be ten");
        }

        if (isIsbnContainAlphabet(book.isbn)) {
            throw new invalidIsbnException("isbn should not contain alphabet");
        }

        if (isEmpty(book.title)) {
            throw new invalidTitleExecption("please provide the title");
        }

        if (isEmpty(book.author)) {
            throw new invalidAuthorException("please provide the author name");
        }
        if (isEmpty(book.publicationYear)) {
            throw new invalidYearException(
                "please provide the publication year of book"
            );
        }

        this.books.set(book.isbn, book);
    }
}

export default Library;
