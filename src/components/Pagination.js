import { Button, Container, Row, Col } from 'react-bootstrap';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import './Pagination.css';

const Pagination = ({ page, pages, posts, setPageNumber, pageNumber }) => {
  const handlePagination = val => {
    // console.log(val);
    if (val === 'dec') {
      let prevPage = pageNumber - 1;
      console.log(prevPage);
      if (prevPage < 0) {
        prevPage = posts.nbPages - 1;
      }
      return setPageNumber(prevPage);
    }
    if (val === 'inc') {
      let nextPage = pageNumber + 1;
      if (nextPage > posts.nbPages - 1) {
        nextPage = 0;
      }
      return setPageNumber(nextPage);
    }
  };

  return (
    <Container className='pagination-container'>
      <Row className='justify-content-md-center'>
        <Col md lg='4'>
          <div className='pagination justify-content-md-center'>
            <Button
              onClick={() => handlePagination('dec')}
              className='btn-pagination'
              variant='dark link'>
              <CaretLeft /> Prev
            </Button>
            <p className='page-number mx-2 my-auto'>
              Page {pageNumber + 1} of {pages}
            </p>
            <Button
              onClick={() => handlePagination('inc')}
              className='btn-pagination'
              variant='dark link'>
              Next <CaretRight />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
