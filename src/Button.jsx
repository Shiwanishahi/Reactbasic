
import PropTypes from 'prop-types';

const Button = (props) => {
  const {name} = props;
  return (
    <div>
     <button>{name}</button>
    </div>
  );
};

// Add PropTypes validation
Button.propTypes = {
  name: PropTypes.string // 'title' is required and must be a string
  
};

//Button.defaultProps ={
 // name : "default"
//}


export default Button;

