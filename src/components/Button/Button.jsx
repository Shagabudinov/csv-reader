import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { useMyContext } from "../../GlobalContext";

const Button = (props) => {
    const { title } = props;
    const { setIsRenderErrorComponent, setDataInLocalStorage } = useMyContext();

    const isCSVFile = (fileName) => {
        return fileName.endsWith(".csv");
    };

    const handleSave = (data) => {
        localStorage.setItem("data", data);
        setDataInLocalStorage(data)
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (isCSVFile(selectedFile.name)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;

                
                handleSave(JSON.stringify(content));
                setIsRenderErrorComponent(false);
            };

            reader.readAsText(selectedFile, "Windows-1251");
        } else {
            setIsRenderErrorComponent(true);
            setTimeout(() => {
                setIsRenderErrorComponent(false);
            }, 3000);
        }
    };
    
    return (
        <div className={styles.ButtonContainer}>
            <label htmlFor="fileInput">{title}</label>
            <input
                type="file"
                id="fileInput"
                accept=".csv"
                onChange={handleFileChange}
            />
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
