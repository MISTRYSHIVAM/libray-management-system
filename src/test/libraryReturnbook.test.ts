import Library from "../app/libraryUtility";

describe("book returing fetures testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });

    test("1. user can return book", () => {
        let isbn = "0123654789";
        expect(() => {
            library.returnBook(isbn);
        }).not.toThrow();
    });
});
