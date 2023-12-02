import styles from "./App.module.css";
import cx from "classnames";
import docsIcn from "./assets/docsIcn.svg"

function App() {
  const rectArr = [1, 2, 3, 4, 5, 6, 7];
 
  return (
    <div className={cx(styles.bigBox)}>
      {rectArr.map((num) => {
        let swipeLeft: boolean = false;
        let swipeRight: boolean = false;
        if (num % 2 === 0) {
          swipeLeft = true;
        } else if (num % 2 === 1) {
          swipeRight = true;
        }

        if (num === 3) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
            >
              <span className={cx(styles.header)}>Hello World!</span>
              
            </div>
          );
        }

        if (num === 4) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
            >
              <div className={cx(styles.description)}><div>Ernest here...</div></div>
            </div>
          );
        }

        if (num === 5) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
            ><button><span>View Docs</span><img src={docsIcn}/></button></div>
          );
        }
        return (
          <div
            className={cx({
              [styles.rectangle]: true,
              [styles.swipeLeft]: swipeLeft,
              [styles.swipeRight]: swipeRight,
            })}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
