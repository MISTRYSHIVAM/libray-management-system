import Library from "../app/libraryUtility";

describe("view available book feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("1. user can view books.", () => {
        const book = {
            isbn: "1234567890",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        };
        library.addBook(book);
        expect(library.viewAvailableBook()).toEqual([book]);
    });

    test("2. throw exception if book is not available in library", () => {
        expect(() => {
            library.viewAvailableBook();
        }).toThrow("libarary has no book");
    });

    test("3. only those book will appear which is not borrowed", () => {
        const book1 = {
            isbn: "1234567890",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        };
        const book2 = {
            isbn: "0321654987",
            title: "Advanced javascript",
            author: "peter",
            publicationYear: 2021,
        };
        library.addBook(book1);
        library.addBook(book2);
        library.borrowBook("1234567890");
        expect(library.viewAvailableBook()).toEqual([book2]);
    });
});
