import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Post from './components/Post';
// import { Container, Row, Col } from 'react-bootstrap';
// Import styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('react');

  useEffect(() => {
    const apiUrl = `https://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   // .then((data) => console.log(data))
    //   .then((data) => setPosts(data.hits))
    //   .catch((err) => console.log(err));
    axios
      .get(apiUrl)
      .then(response => setPosts(response.data.hits))
      .catch(err => console.log('error', err));
  }, [search]);
  console.log(posts);
  return (
    <div className='App'>
      <h1>ooDaiden Technews</h1>
      <SearchForm setSearch={setSearch} search={search} />
      <h2> Posts about {search}</h2>
      <hr />
      <Post posts={posts}/>

    </div>
  );
}
