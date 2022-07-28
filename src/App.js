import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Post from './components/Post';
import Pagination from './components/Pagination';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
// import { Container, Row, Col } from 'react-bootstrap';
// Import styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [posts, setPosts] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState('react');

  const [isError, setIsError] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#a1a1a1ff');

  useEffect(() => {
    // const apiUrl = `https://hn.algolia.com/api/v1/search?query=${search}&tags=story`;
    // https://hn.algolia.com/api/v1/search?query=search_by_date&tags=story
    // https://hn.algolia.com/api/v1/search_by_date?query=react&tags=story
    const url = `https://hn.algolia.com/api/v1/search_by_date`;
    //   const params = {
    //     url: `https://hn.algolia.com/api/v1/search`,
    //     searchQuery: 'search',
    //     tagsQuery: 'story',
    //     pageQuery: 1,
    //     dateQuery: Date.now(),
    //   };
    // const { url, searchQuery, tagsQuery, pageQuery, dateQuery } = params;

    const endpoint = `${url}?query=${search}&tags=story&page=${pageNumber}`;
    // const endpoint = `https://hn.algolia.com/api/v1/search?query=react&tags=story`;
    // const endpoint = `${url}?query=${search}&tags=story`;
    // fetch(endpoint)
    //   .then(response => response.json())
    //   // .then((data) => console.log(data))
    //   .then(data => setPosts(data.hits))
    //   .catch(err => console.log(err));
    axios
      .get(endpoint)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setIsError(true);
        setLoading(true);
        console.log('error', err);
      });
  }, [search, pageNumber]);

  const removePost = id => {
    console.log(id);
    setPosts({
      ...posts,
      hits: posts.hits.filter(post => post.objectID !== id),
    });
  };

  console.log(posts);
  return (
    <div className='App'>
      <SearchForm setSearch={setSearch} search={search} />
      {/* {!posts.nbHits && <h2>No results returned for search {search}... </h2>} */}
      {!posts.nbHits && <ErrorPage />}
      {isError && <h2>Oh, something is amiss!</h2>}
      {!isError && posts.nbHits && <h2> Posts about {search}</h2>}
      <hr />
      <Pagination
        page={posts.page}
        pages={posts.nbPages}
        posts={posts}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <div className='spinner'>
        {loading && <ClipLoader color={color} loading={loading} size={150} />}
      </div>

      <Post posts={posts} removePost={removePost} />
      {/* <Pagination
        page={posts.page}
        pages={posts.nbPages}
        posts={posts}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      /> */}
      <Footer />
    </div>
  );
}
