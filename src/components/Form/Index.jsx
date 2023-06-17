import { useState } from "react";
import PropTypes from "prop-types"
import styles from "./index.module.css";

export default function Form({ onCalculate }) {

    Form.propTypes = {
        onCalculate: PropTypes.func
    }

  const initFormState = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 5,
    duration: 10
  };
  const [inputForm, setInputForm] = useState(initFormState);

  function inputChangeHandler(input, value) {
    setInputForm({ ...inputForm, [input]: +value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onCalculate(inputForm);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input
            onChange={({ target }) =>
              inputChangeHandler(target.id, target.value)
            }
            type="number"
            id="current-savings"
            value={inputForm["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            onChange={({ target }) =>
              inputChangeHandler(target.id, target.value)
            }
            type="number"
            id="yearly-contribution"
            value={inputForm["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={({ target }) =>
              inputChangeHandler(target.id, target.value)
            }
            type="number"
            id="expected-return"
            value={inputForm["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={({ target }) =>
              inputChangeHandler(target.id, target.value)
            }
            type="number"
            id="duration"
            value={inputForm["duration"]}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={() => setInputForm(initFormState)}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
