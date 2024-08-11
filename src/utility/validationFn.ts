export const isIsbnLengthValid = (isbn: string): boolean => {
    return isbn.length === 10;
};

export const isIsbnContainAlphabet = (isbn: string): boolean => {
    let isbnArr = isbn.split("");
    let alphaRegx = /[a-z,A-Z]/;
    return isbnArr.some((ele) => alphaRegx.test(isbn));
};

export const isEmpty = (field: string | number): boolean => {
    return field ? false : true;
};

export const isValidYear = (year: number): boolean => {
    let currentYear = new Date().getFullYear();

    return year <= currentYear;
};
