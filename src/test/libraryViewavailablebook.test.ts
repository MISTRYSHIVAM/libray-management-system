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
});
