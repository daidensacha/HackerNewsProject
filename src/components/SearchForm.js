import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './SearchForm.css';

function SearchForm({ setSearch, search }) {
  const submitHandler = e => {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearch(e.target.search.value);
    e.target.reset();
  };

  return (
    <div className='search-bar py-3 mb-5'>
      <Container>
        <Row className='searchbar justify-content-md-start'>
          <Col md={4}>
            <h3 className='text-light'>Tech News </h3>
          </Col>
          <Col md='8' lg='8' className=''>
            <Form onSubmit={submitHandler}>
              <InputGroup className=''>
                <Form.Control
                  variant='outline-teal'
                  name='search'
                  type='search'
                  placeholder='Search by topic, author, comments ...'
                  aria-label='Search'
                  aria-describedby='basic-addon2'
                />
                <Button variant='teal' type='submit' id='button-addon2'>
                  <Search />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchForm;
