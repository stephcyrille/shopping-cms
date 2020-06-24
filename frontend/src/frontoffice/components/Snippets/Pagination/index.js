import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    width: "100%"
  },
}));

export default function PaginationButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={props.pages?props.pages:100} showFirstButton showLastButton size="large" />
    </div>
  );
}
