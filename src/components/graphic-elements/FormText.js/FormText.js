import styles from "./FormText.module.css";

function FormText() {
  return (
    <form className={styles.box}>
      <label htmlFor="test-text" className={styles.label}>
        Test Text:
      </label>
      <textarea
        id="test-text"
        name="test-text"
        spellcheck="false"
        className={styles.textarea}
      ></textarea>
      <input type="reset" value="Reset" className={styles.resetButton} />
    </form>
  );
}

export default FormText;