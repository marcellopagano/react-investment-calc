import PropTypes from "prop-types"
import { currencyEur } from "../../utils/formatCurrency";

export default function TableList({ resultData }) {

    TableList.propTypes = {
        resultData: PropTypes.object
    }

    return (
        <>
            {resultData.items.map((objData) => {
                return (
                    <tr key={objData.year}>
                        <td>{objData.year}</td>
                        <td>{currencyEur.format(objData.savingsEndOfYear)}</td>
                        <td>{currencyEur.format(objData.yearlyInterest)}</td>
                        <td>
                            {currencyEur.format(
                                objData.savingsEndOfYear -
                                resultData.initCurrentSavings -
                                objData.yearlyContribution * objData.year
                            )}
                        </td>
                        <td>
                            {currencyEur.format(
                                resultData.initCurrentSavings + objData.yearlyContribution * objData.year
                            )}
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
