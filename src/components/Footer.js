import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col md lg='4' className='fname'>
            <p>Daiden Sacha, 2022</p>
          </Col>
          <Col md lg='4' className='flogo'>
            <img src={require('./Logo@140.png')} alt='logo' />
          </Col>
          <Col md lg='4' className='fproject'>
            <p className='project'>Hacker News App</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
