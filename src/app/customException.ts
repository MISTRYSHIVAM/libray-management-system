class libraryException extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "library management exception";
    }
}

class invalidTitleExecption extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "invalidIsbnException";
    }
}

class invalidIsbnException extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "invalidTitleException";
    }
}

class invalidAuthorException extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = "invalidAuthorException";
    }
}

export { invalidIsbnException, invalidTitleExecption, invalidAuthorException };
