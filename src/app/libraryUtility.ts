import {
    isEmpty,
    isIsbnContainAlphabet,
    isIsbnLengthValid,
    isValidYear,
} from "../utility/validationFn";
import {
    bookException,
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
    private borrowedBookList: String[] = [];

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

        if (!isValidYear(book.publicationYear)) {
            throw new invalidYearException("invalid the publication year");
        }

        if (this.books.has(book.isbn)) {
            throw new bookException("Book is already added to library");
        }

        this.books.set(book.isbn, book);
    }

    borrowBook(isbn: string) {
        this.borrowedBookList.push(isbn);
    }
}

export default Library;
