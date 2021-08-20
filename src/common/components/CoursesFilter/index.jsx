import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { Adjustments as AdjustmentsIcon } from '../../icons/adjustments';
import { ViewGrid as ViewGridIcon } from '../../icons/view-grid';
import { ViewList as ViewListIcon } from '../../icons/view-list';
import SearchBox from '../SearchBox';

export const CoursesFilter = (props) => {
  const { mode, onModeChange, onQueryChange, query } = props;
  return (
    <Box
      p={3}
      style={{
        alignItems: 'center',
        display: 'grid',
        gap: 2,
        gridTemplateColumns: '1fr auto',
        justifyItems: 'flex-start',
      }}
    >
      <SearchBox
        onChange={onQueryChange}
        style={{
          order: 2
        }}
        value={query}
      />
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          order: 3
        }}
      >
        <Button
          startIcon={<AdjustmentsIcon />}
          size="large"
          style={{ order: 3, color: '#7c4bc0'}}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};

CoursesFilter.defaultProps = {
  mode: 'table'
};

CoursesFilter.propTypes = {
  mode: PropTypes.oneOf(['table', 'dnd']),
  onModeChange: PropTypes.func,
  onQueryChange: PropTypes.func,
  query: PropTypes.string
};
