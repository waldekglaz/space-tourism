import React from "react";
import styles from "./PageContainer.module.css";
type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles["page-wrapper"]}>{children}</div>;
};

export default PageContainer;
