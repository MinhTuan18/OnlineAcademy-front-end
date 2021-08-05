import { React, useContext } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import CourseListContext from "../../../context/CourseListContext";

import './TreeList.scss';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const TreeList = () => {

  const { categories: data, handleCategoryChange, handleSubCategoryChange } = useContext(CourseListContext);
  const classes = useStyles();

  const selectCategory = (event, nodeIds) => {
    event.preventDefault();
    handleCategoryChange(nodeIds);
  };

  const selectSubCategory = (event, nodeIds) => {
    event.preventDefault()
    handleSubCategoryChange(nodeIds);
  };

  const renderTree = (nodes) => (
    <TreeItem key={nodes._id} nodeId={nodes._id} label={nodes.name} onLabelClick={(e => selectCategory(e, nodes._id))}>
      {Array.isArray(nodes.subCategories) ? 
        nodes.subCategories.map((node) => 
          <TreeItem key={node._id} nodeId={node._id} label={node.name} onLabelClick={(e => selectSubCategory(e, node._id))}/>
          ) 
        : null}
    </TreeItem>
  );

  return(
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<BsCaretRightFill/>}
    >
      {
        data.map((nodes) => renderTree(nodes))
      }
    </TreeView>
  );
}

export default TreeList;