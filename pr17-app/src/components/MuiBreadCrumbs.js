import React from 'react';
import { Breadcrumbs, Typography, Chip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import routes from '../routes/routes.js';

const MuiBreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const currentLabel = pathnames.length
    ? routes.find(
        (route) => route.path === `/${pathnames[pathnames.length - 1]}`
      )?.label
    : 'Timeline';

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ padding: '10px 0', margin: 'auto' }}
    >
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = routes.find((route) => route.path === to)?.label || value;
        return (
          <Typography key={to} color="text.primary">
            <Chip
              label={label}
              color={index === pathnames.length - 1 ? 'primary' : 'default'}
              size="small"
              sx={{
                marginLeft: 0.5,
                transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                },
              }}
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
            sx={{
              marginLeft: 0.5,
              transition: 'transform 0.1s ease, box-shadow 0.1s ease',
              '&:hover': {
                backgroundColor: 'primary.dark',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
              },
            }}
          />
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default MuiBreadCrumbs;
