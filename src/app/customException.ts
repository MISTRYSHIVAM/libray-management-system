class libraryException extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "library management exception";
    }
}

class invalidIsbnError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "invalidIsbnException";
    }
}

export { invalidIsbnError };
