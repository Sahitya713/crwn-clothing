import React from "react";

import "./directory.styles.scss";
import "../menu-item/menu-item.component.jsx";
import MenuItem from "../menu-item/menu-item.component.jsx";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionOptions }) => (
      <MenuItem key={id} {...sectionOptions} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
