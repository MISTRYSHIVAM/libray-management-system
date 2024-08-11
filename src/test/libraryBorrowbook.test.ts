import Library from "../app/libraryUtility";

describe("book borrow feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("1. user should borrow the book", () => {
        library.addBook({
            isbn: "0123456789",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        });
        let isbn = "0123456780";
        expect(() => {
            library.borrowBook(isbn);
        }).not.toThrow();
    });

    let invalidIsbn = ["", "sdgy458725", "123654"];

    invalidIsbn.forEach((isbn, index) => {
        test(`${index + 2}. throw exception when isbn is invalid`, () => {
            expect(() => {
                library.borrowBook(isbn);
            }).toThrow();
        });
    });

    test("5. user can nont borrow the book which is not added in to the library", () => {
        expect(() => {
            library.borrowBook("0123654789");
        }).toThrow();
    });
});
