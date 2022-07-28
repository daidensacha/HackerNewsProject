import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page-container'>
        <img src={require('./bg-404.jpg')} alt='404' />
      </div>
    </div>
  );
};

export default ErrorPage;
