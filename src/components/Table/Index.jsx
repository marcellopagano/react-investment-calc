import TableList from "./TableList";
import styles from "./index.module.css";
import PropTypes from "prop-types"

export default function Table({ resultData }) {

    Table.propTypes = {
        resultData: PropTypes.object,
    }

    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <TableList resultData={resultData} />
            </tbody>
        </table>
    );
}
