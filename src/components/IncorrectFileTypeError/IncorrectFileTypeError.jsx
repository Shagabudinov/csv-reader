import PropTypes from "prop-types";
import styles from './IncorrectFileTypeError.module.scss';

const IncorrectFileTypeError = ({errorMessage}) => {
  return (
    <div className={`${styles.container} ${styles.visible}`}>
        <p>{errorMessage}</p>
    </div>
  )
}

export default IncorrectFileTypeError

IncorrectFileTypeError.propTypes = {
    errorMessage: PropTypes.string.isRequired
}