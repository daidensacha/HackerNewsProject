import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './SearchForm.css';

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function SearchForm({ setSearch, search }) {
  const submitHandler = e => {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearch(e.target.search.value);
    e.target.reset();
  };
  // const searchHandler = e => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };
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
                <Button
                  // className="btn-outline-teal"
                  variant='teal'
                  type='submit'
                  id='button-addon2'>
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
