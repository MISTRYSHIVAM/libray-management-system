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
        if (isEmpty(isbn)) {
            throw new invalidIsbnException("please provide the isbn");
        }

        if (!isIsbnLengthValid(isbn)) {
            throw new invalidIsbnException("isbn lengh must be ten");
        }

        if (isIsbnContainAlphabet(isbn)) {
            throw new invalidIsbnException("isbn should not contain alphabet");
        }

        if (!this.books.has(isbn)) {
            throw new bookException("book not found");
        }

        if (this.borrowedBookList.includes(isbn)) {
            throw new bookException("book is already borrowed");
        }

        this.borrowedBookList.push(isbn);
    }

    returnBook(isbn: string) {
        if (isEmpty(isbn)) {
            throw new invalidIsbnException("please provide the isbn");
        }

        if (!isIsbnLengthValid(isbn)) {
            throw new invalidIsbnException("isbn lengh must be ten");
        }

        if (isIsbnContainAlphabet(isbn)) {
            throw new invalidIsbnException("isbn should not contain alphabet");
        }

        if (!this.books.has(isbn)) {
            throw new bookException("book not found");
        }

        if (!this.borrowedBookList.includes(isbn)) {
            throw new bookException("book is not borrowed yet");
        }

        this.borrowedBookList = this.borrowedBookList.filter(
            (book) => book !== isbn
        );
    }

    viewAvailableBook(): Book[] {
        if (this.books.size === 0) {
            throw new bookException("libarary has no book");
        }

        let availBooks = Array.from(this.books.values());
        return availBooks;
    }
}

export default Library;
