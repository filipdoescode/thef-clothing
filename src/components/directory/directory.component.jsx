import React from "react";
import styles from "./directory.styles.module.scss";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className={styles["directory-menu"]}>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
