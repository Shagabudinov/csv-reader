import { useMyContext } from "../../GlobalContext";
import Button from "../../components/Button/Button";
import styles from "./TablePage.module.scss";

const TablePage = () => {
    const { dataInLocalStorage } = useMyContext();
    let data = JSON.parse(dataInLocalStorage).split("\r\n");

    const length = data[0].split(',').length

    const regex = /(?:,|\n|^)(?:"([^"]*(?:""[^"]*)*)"|([^",\n]*))/g;
    const arrayOfStrings = [];
    const resultData = [];
    let match;

    while ((match = regex.exec(data)) !== null) {
        const value =
            match[1] !== undefined ? match[1].replace('""', '"') : match[2];
        arrayOfStrings.push(value);
    }
    arrayOfStrings.pop()
    for (let i = 0; i < arrayOfStrings.length; i += length) {
        resultData.push(arrayOfStrings.slice(i, i + length));
    }

    const dictionary = {
        name: "Имя",
        phone: "Номер телефона",
        bday: "Дата рождения",
        address: "Адрес",
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.buttonWrapper}>
                <Button title="Загрузить новый файл" />
            </div>
            <table>
                <thead>
                    <tr>
                        {resultData[0].map((item, index) => (
                            <th key={index}>
                                {dictionary[item] ? dictionary[item] : item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resultData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex} className={styles.trRows}>
                            {row.map((item, columnIndex) =>
                                columnIndex === 2 ? (
                                    <td key={columnIndex} style={{textDecoration: "underline"}}>{item}</td>
                                ) : (
                                    <td key={columnIndex}>{item}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
