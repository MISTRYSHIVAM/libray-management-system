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
        this.books.set(book.isbn, book);
    }
}

export default Library;
