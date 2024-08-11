import Library from "../app/libraryUtility";

describe("book add feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("1. book should be add to library", () => {
        const book = {
            isbn: "102356487",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        };
        expect(() => {
            library.addBook(book);
        }).not.toThrow();
    });

    describe("validation for invalidvalid isbn", () => {
        test("2. throw error msg when isbn is not valid", () => {
            const book = {
                isbn: "15246301",
                title: "Basic of javascript",
                author: "jone doe",
                publicationYear: 2022,
            };

            expect(library.addBook(book)).toThrow();
        });
    });
});
