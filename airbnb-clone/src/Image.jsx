import PropTypes from 'prop-types';

export default function Image({ src, alt = '', ...rest }) {
  src = src && src.includes('https://')
    ? src
    : 'http://localhost:4000/uploads/' + src;
    
  return (
    <img {...rest} src={src} alt={alt} />
  );
}

// Define propTypes
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
