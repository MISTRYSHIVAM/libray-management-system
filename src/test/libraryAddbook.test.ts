import Library from "../app/libraryUtility";

describe("book add feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("1. book should be add to library", () => {
        const book = {
            isbn: "1234567890",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        };
        expect(() => {
            library.addBook(book);
        }).not.toThrow();
    });

    describe("validation for invalidvalid isbn", () => {
        test("2.1 throw error msg when isbn is not valid", () => {
            const book = {
                isbn: "15246301",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow();
        });

        test("2.2 throw error msg when isbn conatin any alphabetic character.", () => {
            const book = {
                isbn: "1542687POI",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow();
        });

        test("2.3 throw error msg when isbn is empty.", () => {
            const book = {
                isbn: "",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow();
        });
    });
});
