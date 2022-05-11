import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  makeStyles } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxComponentProps {
  checkbox: { 
    title: string;
    state: string;
  }
}

const useStyles = makeStyles({
  card: {
    borderRadius: 10,
    '&.CHECKBOX_UNSELECTED': {
    },
    '&.CHECKBOX_HOVER, &:hover': {
      boxShadow: '0px 0px 0px 2px #65E9D9',
    },
    '&.CHECKBOX_SELECTED': {
      boxShadow: '0px 0px 0px 2px #65E9D9',
      
    },
  },
  checkbox: {
    color: "#21B6A8",
      '&.Mui-checked': {
        color: "#21B6A8 !important",
      },
  },
  typography: {
    textAlign: "left"
  }
 });

const CheckboxComponent = (props: CheckboxComponentProps) => {
  const { checkbox: { state, title } } = props
  const classes = useStyles();
  console.log('state', state)
  return (
    <Card sx={{ maxWidth: 229 }} classes={{ root: `${classes.card} ${state}` }} >
      <CardMedia
        component="img"
        height="150"
        image="./CardMedia.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography classes={{ root: `${classes.typography}` }}>
          <FormControlLabel control={<Checkbox defaultChecked={state === 'CHECKBOX_SELECTED' ? true : false} classes={{ root: `${classes.checkbox}` }} />} label={title} />
        </Typography>
      </CardContent>
    </Card>

  );
}

export default CheckboxComponent;