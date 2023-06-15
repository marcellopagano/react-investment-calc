import PropTypes from "prop-types"

const formatMoney = new Intl.NumberFormat("it-It", {
    style: "currency",
    currency: "EUR"
});

export default function TableList({ resultData }) {

    TableList.propTypes = {
        resultData: PropTypes.array
    }

    return (
        <>
            {resultData.map((objData) => {
                return (
                    <tr key={objData.year}>
                        <td>{objData.year}</td>
                        <td>{formatMoney.format(objData.savingsEndOfYear)}</td>
                        <td>{formatMoney.format(objData.yearlyInterest)}</td>
                        <td>
                            {formatMoney.format(
                                objData.savingsEndOfYear -
                                objData.initInvest -
                                objData.yearlyContribution * objData.year
                            )}
                        </td>
                        <td>
                            {formatMoney.format(
                                objData.initInvest + objData.yearlyContribution * objData.year
                            )}
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
