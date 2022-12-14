import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
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
  const [localPosts, setLocalPosts] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState('react.js');

  const [isError, setIsError] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#a1a1a1ff');

  let postsLocal = JSON.parse(localStorage.getItem('posts')) || [];
  useEffect(() => {
    setLocalPosts(postsLocal);
  }, []);

  useEffect(() => {
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
    const fetchingData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Something went wrong!');
        const results = await response.json();
        setPosts(results);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setLoading(true);
        console.log(err);
      }
    };
    fetchingData();
  }, [search, pageNumber]);

  useEffect(() => {
    // const localPosts = JSON.parse(localStorage.getItem('posts'));
    // if (localPosts) {
    //   setLocalPosts(localPosts);
      saveLocalPosts();
    // }
    }, [])



  const removePost = id => {
    // console.log(id);
    setPosts({
      ...posts,
      hits: posts.hits.filter(post => post.objectID !== id),
    });
  };

  // Save posts in local storage
  const saveLocalPosts = () => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  // console.log(`Posts: ${posts}`);
  // console.log(`LocalPosts: ${localPosts}`);
  // console.log(posts);
  console.log('Local' , localPosts);

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
      {posts.nbHits && (
        <Pagination
          page={posts.page}
          pages={posts.nbPages}
          posts={posts}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
      <Post posts={posts} removePost={removePost} />
      <Footer />
    </div>
  );
}
