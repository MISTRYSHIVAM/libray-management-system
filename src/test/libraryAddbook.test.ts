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
        test("2.1 throw exception msg when isbn is not valid", () => {
            const book = {
                isbn: "15246301",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow("isbn lengh must be ten");
        });

        test("2.2 throw exception msg when isbn conatin any alphabetic character.", () => {
            const book = {
                isbn: "1542687POI",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow("isbn should not contain alphabet");
        });

        test("2.3 throw exception msg when isbn is empty.", () => {
            const book = {
                isbn: "",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(() => {
                library.addBook(book);
            }).toThrow("please provide the isbn");
        });
    });

    test("3. throw exception when book title is empty", () => {
        const book = {
            isbn: "1542876532",
            title: "",
            author: "jone doe",
            publicationYear: 2022,
        };

        expect(() => {
            library.addBook(book);
        }).toThrow("please provide the title");
    });

    test("4. throw exception when book author is empty", () => {
        const book = {
            isbn: "1542876532",
            title: "Basic of javascript",
            author: "",
            publicationYear: 2022,
        };

        expect(() => {
            library.addBook(book);
        }).toThrow("please provide the author name");
    });

    test("5. throw exception when book publication year is empty", () => {
        const book = {
            isbn: "1542876532",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: null,
        };

        expect(() => {
            library.addBook(book);
        }).toThrow("please provide the publication year of book");
    });

    test("6. throw exception when book publication year is invalid", () => {
        const book = {
            isbn: "1542876532",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2026,
        };

        expect(() => {
            library.addBook(book);
        }).toThrow("invalid the publication year");
    });

    test("7. throw exception when book is already added in library", () => {
        const book = {
            isbn: "1542876532",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2021,
        };
        library.addBook(book);
        expect(() => {
            library.addBook(book);
        }).toThrow("Book is already added to library");
    });
});
