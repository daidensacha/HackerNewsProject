import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page-container'>
        <img src={require('./search-error.jpg')} alt='404' />
      </div>
    </div>
  );
};

export default ErrorPage;
