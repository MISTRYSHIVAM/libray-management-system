
# Library Management System

This library management system is based on single copy per book .

### Requirements
- Add Books:
    
    - Users should be able to add new books to the library.
    - Each book should have a unique identifier (e.g., ISBN), title, author, and
    - publication year.
- Borrow Books:
    - Users should be able to borrow a book from the library.
    - The system should ensure that the book is available before allowing it to be borrowed.
    - If the book is not available, the system should raise an appropriate error.
- Return Books:
    - Users should be able to return a borrowed book.
    - The system should update the availability of the book accordingly.
- View Available Books:
    - Users should be able to view a list of all available books in the library.

I use typescript to built this project.and jest as a testing framework

#### what is typescript ?

- superset of javascript . allow us to write javascript in presice manner. so that error are less at run time .
- It is all about type safety .
- typescript will finally converted into javascript


#### This project is made through TDD (Test driven devlopment)

#### what is jest ?

- Jest is a popular JavaScript testing framework developed by Facebook, commonly used for testing applications written in JavaScript, including those built with React. 
- It is known for its simplicity, powerful features, and ease of use.

#### what is TDD (Test driven devlopment) ?

- It is a software development practice where you write tests for a new feature before you actually write the code to implement that feature. 

- The process generally involves writing a test that fails initially, then writing the minimal amount of code to make that test pass, and finally refactoring the code while ensuring that the tests continue to pass.

#### 3 laws of TDD

- Write a Test First
- Make the Test Pass:
- Refactor


## project setup

- step - 1 clone project using git clone command

```bash
  git clone <repository-url>
```
    
- step - 2 install dependencies mention in package.json

```bash
  npm install
```
- step - 3 go to ./src/test and write your test and pass the test.
    
