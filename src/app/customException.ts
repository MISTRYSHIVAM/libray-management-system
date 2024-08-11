class libraryException extends Error {
    constructor(msg) {
        super(msg);
        this.name = "library management exception";
    }
}
