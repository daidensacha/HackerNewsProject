import { Button, Container, Row, Col } from 'react-bootstrap';
import { CaretLeft, CaretRight } from 'react-bootstrap-icons';
import classnames from 'classnames';
import styles from './Pagination.module.scss';

const Pagination = ({ page, pages, posts, setPageNumber, pageNumber }) => {
  const handlePagination = val => {
    // console.log(val);
    if (val === 'dec') {
      let prevPage = pageNumber - 1;
      // console.log(prevPage);
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
    <Container className={styles.paginationContainer}>
      <Row className='justify-content-md-center'>
        <Col md lg='4'>
          <div className={classnames(styles.pagination, styles.justifyContentMdCenter)}>
            <Button
              onClick={() => handlePagination('dec')}
              className={styles.btnPagination}
              variant='dark link'>
              <CaretLeft /> Prev
            </Button>
            <p className={classnames(styles.pageNumber, styles.mx2, styles.myAuto)}>
              Page {pageNumber + 1} of {pages}
            </p>
            <Button
              onClick={() => handlePagination('inc')}
              className={styles.btnPagination}
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
