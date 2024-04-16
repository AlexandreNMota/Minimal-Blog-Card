import styles from "./Card.module.scss";
import cn from "classnames";

import { CardProps } from "./types";
import { FC } from "react";
export const Card: FC<CardProps> = ({
  title,
  body,
  author,
  image,
}: CardProps) => {
  const classNames = cn(styles.Card);
  return (
    <div className={classNames}>
      <img className={styles.catus} src={image} alt="C" />
      <div className={styles["tag--container"]}>
        <div className={styles.tag}>
          <span className={styles["tag--content"]}>Design</span>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles["card-body"]}>{body}</p>
      <div className={styles["card-footer"]}>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
};
