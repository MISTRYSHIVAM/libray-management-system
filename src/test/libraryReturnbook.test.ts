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
        library.borrowBook("0123456789");
        let isbn = "0123456789";
        expect(() => {
            library.returnBook(isbn);
        }).not.toThrow();
    });

    let invalidIsbn = ["", "sdgy458725", "123654"];
    let errMsg = [
        "please provide the isbn",
        "isbn should not contain alphabet",
        "isbn lengh must be ten",
    ];
    invalidIsbn.forEach((isbn, index) => {
        test(`${index + 2}. throw exception when isbn is invalid`, () => {
            expect(() => {
                library.returnBook(isbn);
            }).toThrow(errMsg[index]);
        });
    });

    test("5. user can not return the book which is not added in to the library", () => {
        expect(() => {
            library.returnBook("0123654789");
        }).toThrow("book not found");
    });

    test("6. user can not retrun book which is not borrowed from library", () => {
        library.addBook({
            isbn: "0123456789",
            title: "Basic of javascript",
            author: "jone doe",
            publicationYear: 2022,
        });
        expect(() => {
            library.returnBook("0123456789");
        }).toThrow("book is not borrowed yet");
    });
});
