import ReactDOM from 'react-dom';
import MainPage from "./pages/MainPage/MainPage.jsx";
import TablePage from "./pages/TablePage/TablePage.jsx";
import { MyProvider } from "./GlobalContext.jsx";
import { useMyContext } from "./GlobalContext.jsx";
import IncorrectFileTypeError from "./components/IncorrectFileTypeError/IncorrectFileTypeError.jsx";
import { incorrectFileTypeError } from "./_constants.js";

function App() {
    //localStorage.clear();

    return (
        <MyProvider>
            <AppContent />
        </MyProvider>
    );
}

const AppContent = () => {
    const { isRenderErrorComponent, dataInLocalStorage } = useMyContext();

    return (
        <>
            {isRenderErrorComponent &&
                ReactDOM.createPortal(
                    <IncorrectFileTypeError
                        errorMessage={incorrectFileTypeError}
                    />,
                    document.body
                )}

            {dataInLocalStorage ? <TablePage /> : <MainPage title="Выберите файл в формате CSV"/>}
        </>
    );
};

export default App;
