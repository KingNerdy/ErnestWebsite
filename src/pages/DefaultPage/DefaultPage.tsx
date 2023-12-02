import styles from "./DefaultPage.module.css";
import cx from "classnames";
import docsIcn from "../../assets/docsIcn.svg";
import { useState } from "react";

interface DefaultPageProps {
  setShowDefaultPage: (arg: boolean) => void;
}

const DefaultPage = ({ setShowDefaultPage }: DefaultPageProps) => {
  const rectArr = [1, 2, 3, 4, 5, 6, 7];
  const [swipe, setSwipe] = useState<boolean>(false);

  const toggleButton = () => {
    setSwipe(true);
    setTimeout(() => {
      setShowDefaultPage(false);
    }, 1000);
  };

  return (
    <div className={cx(styles.bigBox)}>
      {rectArr.map((num) => {
        let swipeLeft: boolean = false;
        let swipeRight: boolean = false;
        if (num % 2 === 0) {
          swipeLeft = swipe;
          swipeRight = false;
        } else {
          swipeRight = swipe;
          swipeLeft = false;
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
              <div className={cx(styles.description)}>
                <div>Ernest here...</div>
              </div>
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
            >
              <button onClick={() => toggleButton()}>
                <span>View Docs</span>
                <img src={docsIcn} />
              </button>
            </div>
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
};

export default DefaultPage;
