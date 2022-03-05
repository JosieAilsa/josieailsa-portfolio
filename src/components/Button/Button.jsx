import "./Button.scss";
import PropTypes from "prop-types"; // ES6

const Button = ({ content, classNames, onClick, value }) => {
  Button.propTypes = {
    content: PropTypes.object.isRequired,
    classNames: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
  };
  return (
    <>
      <button className={classNames} value={value} onClick={onClick}>
        {content}
      </button>
    </>
  );
};

export default Button;
