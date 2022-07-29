import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Post from './components/Post';
import Pagination from './components/Pagination';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
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
    const url = `https://hn.algolia.com/api/v1/search_by_date`;
    //   const params = {
    //     url: `https://hn.algolia.com/api/v1/search`,
    //     searchQuery: 'search',
    //     tagsQuery: 'story',
    //     pageQuery: 1,
    //     dateQuery: Date.now(),
    //   };
    const endpoint = `${url}?query=${search}&tags=story&page=${pageNumber}`;

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
    // console.log(id);
    setPosts({
      ...posts,
      hits: posts.hits.filter(post => post.objectID !== id),
    });
  };

  // console.log(posts);
  return (
    <div className='App'>
      <SearchForm setSearch={setSearch} search={search} />

      {isError && <h2>Oh, something is amiss!</h2>}
      {!isError && posts.nbHits && <h2> Posts about {search}</h2>}
      <hr />
      <div className='spinner'>
        {loading && <ClipLoader color={color} loading={loading} size={150} />}
      </div>
      {!posts.nbHits && <ErrorPage />}
      <Pagination
        page={posts.page}
        pages={posts.nbPages}
        posts={posts}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <Post posts={posts} removePost={removePost} />
      <Footer />
    </div>
  );
}
