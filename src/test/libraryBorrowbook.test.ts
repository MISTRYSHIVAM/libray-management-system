import Library from "../app/libraryUtility";

describe("book borrow feature testing", () => {
    let library: Library;
    beforeEach(() => {
        library = new Library();
    });
    test("1. user should borrow the book", () => {
        let isbn = "0123456789";
        expect(() => {
            library.borrowBook(isbn);
        }).not.toThrow();
    });
});
