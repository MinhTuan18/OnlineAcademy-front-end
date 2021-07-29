import { React, useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";

import './TreeList.scss';

const TreeNode = ({node}) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.subCategories ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex">
        {hasChild && (
          <div onClick={(e) => setChildVisiblity((v) => !v)}
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <BsCaretRightFill/>
          </div>
        )}
        <div className="col d-tree-head">
          {node.name}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <TreeList data={node.subCategories} />
          </ul>
        </div>
      )}
    </li>
  );
}

const TreeList = ({data = []}) => {
  return(
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
}

export default TreeList;