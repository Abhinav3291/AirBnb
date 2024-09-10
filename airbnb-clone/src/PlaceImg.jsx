import PropTypes from 'prop-types';
import Image from './Image.jsx';

export default function PlaceImg({ place, index = 0, className = 'object-cover' }) {
  if (!place.photos?.length) {
    return null; // Use null to indicate that nothing should be rendered
  }
  return (
    <Image className={className} src={place.photos[index]} alt="" />
  );
}

PlaceImg.propTypes = {
  place: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};
