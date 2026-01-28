import { useState } from "react";
import "./App.css";

export default function App() {
    const [books, setBooks] = useState([
        { id: 1, title: "Clean Code", author: "Robert C. Martin" },
        { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
    ]);

    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const addBook = (e) => {
        e.preventDefault();
        if (!title || !author) return;

        setBooks([
            ...books,
            { id: Date.now(), title, author }
        ]);

        setTitle("");
        setAuthor("");
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    return ( <
        div className = "container" >
        <
        h1 > 📚Library Management System < /h1>

        <
        input type = "text"
        placeholder = "Search by title or author"
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value) }
        className = "search" /
        >

        <
        form onSubmit = { addBook }
        className = "form" >
        <
        input type = "text"
        placeholder = "Book Title"
        value = { title }
        onChange = {
            (e) => setTitle(e.target.value) }
        /> <
        input type = "text"
        placeholder = "Author Name"
        value = { author }
        onChange = {
            (e) => setAuthor(e.target.value) }
        /> <
        button type = "submit" > Add Book < /button> <
        /form>

        <
        div className = "book-list" > {
            filteredBooks.length === 0 ? ( <
                p > No books found < /p>
            ) : (
                filteredBooks.map((book) => ( <
                    div key = { book.id }
                    className = "book-card" >
                    <
                    h3 > { book.title } < /h3> <
                    p > { book.author } < /p> <
                    button onClick = {
                        () => removeBook(book.id) } > Remove < /button> <
                    /div>
                ))
            )
        } <
        /div> <
        /div>
    );
}