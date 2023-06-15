import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

import styles from "./App.module.css"

function App() {
  const [result, setResult] = useState([]);

  const calculateHandler = ({
    "current-savings": currentSavings,
    "yearly-contribution": yearlyContribution,
    "expected-return": expectedReturn,
    duration
  }) => {
    expectedReturn = expectedReturn / 100;
    let initInvest = currentSavings;

    const yearlyData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initInvest: initInvest
      });
    }
    setResult(yearlyData);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Form onCalculate={calculateHandler} />
      {result.length === 0 && <p style={{ textAlign: "center" }}>no data</p>}
      {result.length !== 0 && <Table resultData={result} />}
    </div>
  );
}

export default App;
