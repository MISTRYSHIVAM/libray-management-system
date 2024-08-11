export const isIsbnLengthValid = (isbn: string): boolean => {
    return isbn.length === 10;
};

export const isIsbnContainAlphabet = (isbn: string): boolean => {
    let isbnArr = isbn.split("");
    let alphaRegx = /[a-z,A-Z]/;
    return isbnArr.some((ele) => alphaRegx.test(isbn));
};
