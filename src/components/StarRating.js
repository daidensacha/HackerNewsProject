// import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'gold' : 'grey'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5, points }) {

  // console.log(points)
  let stars;
  switch (true) {
    case points < 50:
      stars = 1;
      break;
    case points < 100:
     stars = 2;
      break;
    case points < 150:
      stars = 3;
      break;
    case points < 200:
      stars = 4;
      break;
    case points >= 250:
      stars = 5;
      break;
    default:
      stars = 0;
      break;
  }

  return createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={stars > i}
    />
  ));
}

export default StarRating;
