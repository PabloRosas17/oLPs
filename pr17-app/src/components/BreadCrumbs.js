import React from 'react';
import {  Breadcrumbs as MUIBreadcrumbs, Typography, Link, Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import routes from '../routes/routes.js';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const currentLabel = pathnames.length ? routes.find(
        (route) => route.path === `/${pathnames[pathnames.length - 1]}` )?.label : 'Timeline';

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{ position: 'absolute', top: 10, left: 10 }} >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = routes.find((route) => route.path === to)?.label || value;
        return (
          <Typography key={to} color="text.primary">
            <Chip
              label={label}
              color={index === pathnames.length - 1 ? 'primary' : 'default'}
              size="small"
              sx={{ marginLeft: 1 }}
            />
          </Typography>
        );
      })}
      {currentLabel && (
        <Typography color="text.primary">
          <Chip
            label={currentLabel}
            color="primary"
            size="small"
            sx={{ marginLeft: 1 }}
          />
        </Typography>
      )}
    </MUIBreadcrumbs>
  );
};

export default BreadCrumbs;