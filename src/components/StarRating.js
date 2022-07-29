import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const createArray = length => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'gold' : 'grey'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5, points}) {
  const [selectedStars, setSelectedStars] = useState(0);

  // if (points < 50) {
  //   setSelectedStars(1)
  // }

  return createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
}

export default StarRating;
