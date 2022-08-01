import { Container, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating';
import moment from 'moment';
import './Post.scss';
const Post = ({ posts, removePost }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        {posts.hits?.map(
          ({
            objectID,
            url,
            title,
            author,
            points,
            num_comments,
            created_at,
          }) => {
            const timeSince = moment(
              created_at,
              'YYYY-MM-DDThh:mm:ss',
            ).fromNow();
            return (
              <Col className='p-3' sm='12' md='6' lg='6' key={objectID}>
                <div className='post p-3'>
                  <h5 className='text-start'>
                    <a href={url} target='_blank' rel='noreferrer'>
                      {title}
                    </a>{' '}
                  </h5>
                  {!url && <p className='warning'>No URL for this article</p>}
                  <p className='text-start'>
                    <span className='tag'>Author: {author}</span>{' '}
                    <span className='tag'>{timeSince}</span>{' '}
                    <span className='tag'>{points} points</span>{' '}
                    <span className='tag'>
                      <StarRating totalStars={5} points={points} />
                    </span>{' '}
                    <span className='tag'>{num_comments} comments</span>{' '}
                  </p>
                  {/* <StarRating totalStars={5} points={points}/> */}
                  <p className='text-start danger'>
                    <button
                      className='btn-remove'
                      onClick={() => removePost(objectID)}>
                      Remove Story{' '}
                    </button>
                  </p>
                </div>
              </Col>
            );
          },
        )}
      </Row>
    </Container>
  );
};

export default Post;
