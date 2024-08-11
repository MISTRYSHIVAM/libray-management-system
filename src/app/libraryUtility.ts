interface Book {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
}

class Library {
    private books: Map<string, Book> = new Map();
    private brrowedBookList: String[] = [];
}

export default Library;
