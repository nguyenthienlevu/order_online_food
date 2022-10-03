import PropTypes from 'prop-types';

function DefaulLayOut({ children }) {
  return children;
}

DefaulLayOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaulLayOut;
