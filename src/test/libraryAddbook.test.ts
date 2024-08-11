import Library from "../app/libraryUtility";

describe("book add feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("book should be add to library", () => {
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
});
