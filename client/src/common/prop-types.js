import PropTypes from 'prop-types';

export const bookPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}).isRequired;

export const booksPropTypes = PropTypes.arrayOf(bookPropTypes);

export default bookPropTypes;
