import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

export const MyProvider = ({ children }) => {
    const [dataInLocalStorage, setDataInLocalStorage] = useState(
        localStorage.getItem("data")
    );
    const [isRenderErrorComponent, setIsRenderErrorComponent] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isRenderErrorComponent,
                setIsRenderErrorComponent,
                dataInLocalStorage,
                setDataInLocalStorage
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useMyContext = () => useContext(GlobalContext);

MyProvider.propTypes = {
    children: PropTypes.node.isRequired
};
