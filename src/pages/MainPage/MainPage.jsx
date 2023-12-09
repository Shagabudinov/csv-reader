import PropTypes from 'prop-types'
import Button from '../../components/Button/Button'
import styles from './MainPage.module.scss'

const MainPage = ({title}) => {
  return (
    <>
    <div className={styles.mainPage}>
                <h1>{title}</h1>
                <Button title="Выберите файл"/>
            </div>
    </>
  )
}

export default MainPage

MainPage.propTypes = {
    title: PropTypes.string.isRequired
}