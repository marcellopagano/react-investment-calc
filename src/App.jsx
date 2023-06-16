import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

import styles from "./App.module.css"

function App() {

  const [items, setItems] = useState([]);
  const [initCurrentSavings, setInitCurrentSavings] = useState(0)

  const calculateHandler = ({
    "current-savings": currentSavings,
    "yearly-contribution": yearlyContribution,
    "expected-return": expectedReturn,
    duration
  }) => {
    expectedReturn = expectedReturn / 100;
    setInitCurrentSavings(currentSavings)

    const yearlyData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initCurrentSavings
      });
    }
    setItems(yearlyData);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Form onCalculate={calculateHandler} />
      {items.length 
        ? <Table resultData={{ items, initCurrentSavings }} />
        : <p style={{ textAlign: "center" }}>no data</p>
      }
    </div>
  );
}

export default App;
