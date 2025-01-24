import React from 'react';
import { Breadcrumbs, Typography, Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import routes from '../routes/routes.js';

const MuiBreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  let currentLabel = '';
  if (Array.isArray(routes)) {
    currentLabel = pathnames.length
      ? routes.find(
          (route) => route.path === `/${pathnames[pathnames.length - 1]}`
        )?.label
      : '';
  } else if (typeof routes === 'object') {
    currentLabel = pathnames.length
      ? routes[`/${pathnames[pathnames.length - 1]}`]
      : '';
  }

  if (!currentLabel) {
    currentLabel = 'timeline';
  }

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ padding: '10px 0', margin: 'auto' }}
    >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = Array.isArray(routes)
          ? routes.find((route) => route.path === to)?.label || value
          : routes[to] || value;
        return (
          <Typography key={to} color="text.primary">
            <Chip
              label={capitalizeFirstLetter(label)}
              color={index === pathnames.length - 1 ? 'primary' : 'default'}
              size="small"
              sx={{
                marginLeft: 1,
              }}
            />
          </Typography>
        );
      })}
      {currentLabel && (
        <Typography color="text.primary">
          <Chip
            label={capitalizeFirstLetter(currentLabel)}
            color="primary"
            size="small"
            sx={{
              marginLeft: 1,
            }}
          />
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default MuiBreadCrumbs;