import React, { useContext, useState } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, Row, Col, Label } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';
import { courseSortOrder } from '../../utils/constant';
import CourseListContext from '../../../context/CourseListContext';


const SearchBar = ({ initQuery, initSortOrder}) => {
  const { handleSearchChange, handleSortChange } = useContext(CourseListContext);

  const [term, setTerm] = useState(initQuery);

  const txtTerm_Changed = (e) => {
    setTerm(e.target.value);
  }

  const txtTerm_KeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSearchChange(term);
    }
  }

  const btnSearchClick = (e) => {
    handleSearchChange(term);
  }

  const sortOrder_Changed = (e) => {
    handleSortChange(e.target.value)
  }
  const renderSortOrder = courseSortOrder.map((sortOrder) => {
      return <option value={sortOrder.id}>{ sortOrder.value }</option>
    
    })
  return (
    <div>
        <Row>
        <Col xs={8}>
        <InputGroup>
          <Input
            placeholder="Search" value={term} onChange={txtTerm_Changed} onKeyUp={txtTerm_KeyUp}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={btnSearchClick}>
              <FaSearch />
            </Button>
          </InputGroupAddon>
          </InputGroup> 
          
        </Col>
        <Col xs='2'>
          <InputGroup>
            <Label className='sort-order-label' for="sortSelect">Sort By</Label>
            <Input type="select" name="select" id="sortSelect" onChange={sortOrder_Changed} value={initSortOrder}>
              { renderSortOrder }
            </Input>
          </InputGroup>
        
        </Col>
        </Row>
    </div>
  );
}

export default SearchBar;
