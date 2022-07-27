import { Button, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
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
    <Container>
      <Row className='justify-content-md-center'>
        <Col md='6' lg='6'>
          <Form onSubmit={submitHandler}>
            <InputGroup className='mb-3 '>
              <Form.Control
                name='search'
                type='search'
                placeholder='Search by topic ...'
                aria-label='Search'
                aria-describedby='basic-addon2'
                // onChange={setSearch}
                // value={search}
              />
              <Button
                type='submit'
                variant='outline-secondary'
                id='button-addon2'>
                <Search />
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
