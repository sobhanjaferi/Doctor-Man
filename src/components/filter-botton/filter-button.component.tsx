import { ComponentProps, ReactElement } from "react";
import styles from "./filter-button.module.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};

export default function FilterButtonComponent({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        className,
        styles["filter-button"],
        isActive && styles.active,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
