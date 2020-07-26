import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function PositionedSnackbar(props) {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;


  return (
    <div>
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical, horizontal }}
        open={props.open}
        onClose={props.closePopup}
      >
        <Alert onClose={props.closePopup} severity={ props.color }>
          { props.message }
        </Alert>
      </Snackbar>
    </div>
  );
}
