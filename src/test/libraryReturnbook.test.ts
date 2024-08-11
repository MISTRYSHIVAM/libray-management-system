import Library from "../app/libraryUtility";

describe("book returing fetures testing", () => {
    let library: Library;

    beforeEach(() => {
        library = new Library();
    });

    test("1. user can return book", () => {
        library.addBook({
            isbn: "0123456789",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        });
        let isbn = "0123456789";
        expect(() => {
            library.returnBook(isbn);
        }).not.toThrow();
    });

    let invalidIsbn = ["", "sdgy458725", "123654"];

    invalidIsbn.forEach((isbn, index) => {
        test(`${index + 2}. throw exception when isbn is invalid`, () => {
            expect(() => {
                library.returnBook(isbn);
            }).toThrow();
        });
    });

    test("5. user can not return the book which is not added in to the library", () => {
        expect(() => {
            library.returnBook("0123654789");
        }).toThrow();
    });

    test("6. user can not retrun book which is not borrowed from library", () => {
        library.addBook({
            isbn: "0123456789",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        });
        expect(() => {
            library.returnBook("0123456785");
        }).toThrow();
    });
});
