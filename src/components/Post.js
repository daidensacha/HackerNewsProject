import { Container, Row, Col } from 'react-bootstrap';

const Post = ({posts}) => {
  return (

     <Container>
     <Row className='justify-content-md-center'>
       {posts?.map((post, index) => (
         <Col className='p-3' sm='12' md='6' lg='6' key={post.objectID}>
           {/* <Col className="post" md='6' lg='6' key={post.objectID}> */}
           <div className='post p-3'>
             <h5 className='text-start'>
               {index + 1}. {post.title}{' '}
             </h5>
             <p className='text-start'>
               {' '}
               Author: {post.author} | {post.points} points |{' '}
               {post.num_comments} comments{' '}
             </p>
             <p className='text-start'>
               <a href={post.url} target='_blank' rel='noreferrer'>
                 {' '}
                 View Post{' '}
               </a>
             </p>
           </div>
         </Col>
       ))}
     </Row>
   </Container>
  );
};

export default Post;
