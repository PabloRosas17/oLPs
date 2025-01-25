import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TimeLineCard = ({
  title,
  content,
  expandedIndex,
  index,
  handleExpand,
  link,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card
      onClick={() => handleExpand(index)}
      sx={{
        width: '50%',
        margin: 'auto',
        marginTop: -2,
        marginBottom: 2,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          backgroundColor: 'primary.light',
          boxShadow: '0px 4px 10px rgba(21, 21, 21, 0.3)',
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontSize: '19px',
            color: 'primary.dark',
            marginBottom: '8px',
            lineHeight: 1.4,
          }}
        >
          {link ? (
            <Button
              onClick={handleClick}
              sx={{
                fontSize: '19px',
                color: 'primary.dark',
                textTransform: 'none',
              }}
            >
              {title}
            </Button>
          ) : (
            title
          )}
        </Typography>
        <Button
          size="small"
          onClick={() => handleExpand(index)}
          sx={{
            color: 'primary',
            fontSize: '10px',
          }}
        >
          {expandedIndex === index ? `Reduce : ${title}` : `Boost : ${title}`}
        </Button>
        {expandedIndex === index && (
          <Typography
            variant="body1"
            sx={{
              color: 'primary.dark',
              fontSize: '14px',
            }}
          >
            {content}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TimeLineCard;