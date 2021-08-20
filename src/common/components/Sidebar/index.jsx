import React, { useState } from 'react';
import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ForumIcon from '@material-ui/icons/Forum';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/Help';
import './sidebar.css';

const items = [
  {
    href: '/instructor/courses',
    icon: OndemandVideoIcon,
    label: 'Courses'
  },
  {
    href: '#',
    icon: ForumIcon,
    label: 'Communication'
  },
  {
    href: '#',
    icon: BarChartIcon,
    label: 'Permances'
  },
  {
    href: '#',
    icon: BuildIcon,
    label: 'Tools'
  },
  {
    href: '#',
    icon: HelpIcon,
    label: 'Resources'
  },
  // {
  //   href: '/404',
  //   icon: UserIcon,
  //   label: '404'
  // },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <Drawer
      open
      style={{ zIndex: 1000 }}
      variant="permanent"
      PaperProps={{
        style: {
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)',
          p: 1,
          top: 70,
          width: 110
        }
      }}
    >
      <List style={{ width: '100%' }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = matchPath(href, location.pathname);
          // console.log(active);
          return (
            <ListItem
              className={active ? 'active' : ''}
              disablePadding
              component={RouterLink}
              key={href}
              to={href}
              style={
                {
                  flexDirection: 'column',
                  // color: active ? '#f16101' : '#7c4bc0',
                  // color: hoverLinkColor,
                  px: 2,
                  py: 1.5,
                }
              }
            >
              <ListItemIcon
                style={{
                  minWidth: 'auto',
                  color: 'inherit'
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  style: {
                    pb: 0,
                    pt: 1.25
                  },
                  variant: 'caption'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
