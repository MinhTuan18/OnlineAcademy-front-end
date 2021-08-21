import { React, useContext, useState } from "react";
import { BsCaretRightFill,BsFillCaretDownFill } from "react-icons/bs";
import CourseListContext from "../../../context/CourseListContext";

import './TreeList.scss';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const useItemStyles = makeStyles(() => ({
  selected: {
    
    backgroundColor: 'red',
  }
}));


const TreeList = () => {
  const classesItem = useItemStyles();

  const { categories: data, handleCategoryChange, handleSubCategoryChange, selectedCategory } = useContext(CourseListContext);

  const [nodeSelected, setNodeSelected] = useState(selectedCategory);

  const classes = useStyles();

  const selectCategory = (event, nodeIds) => {
    event.preventDefault();
    handleCategoryChange(nodeIds);
  };

  const selectSubCategory = (event, nodeIds) => {
    event.preventDefault();
    handleSubCategoryChange(nodeIds);
  };

  const handleSelect = (_, nodeId) => {
    
    if (nodeSelected === nodeId) {
      setNodeSelected('');
    } else {
      setNodeSelected(nodeId);
    }
  };

  const renderTree = (nodes) => (
    <TreeItem classes={classesItem.selected} key={nodes._id} nodeId={nodes._id} label={nodes.name} onLabelClick={(e => selectCategory(e, nodes._id))}>
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
      defaultCollapseIcon={<BsFillCaretDownFill />}
      defaultExpandIcon={<BsCaretRightFill/>}
      selected={nodeSelected}
      onNodeSelect={handleSelect}
    >
      {
        data.map((nodes) => renderTree(nodes))
      }
    </TreeView>
  );
}

export default TreeList;