import {makeStyles} from "@mui/styles";


const styledButton = makeStyles({
  button: {
    textAlign: 'center',
    boxShadow: 'none',
    padding: `12px 24px`,
    borderRadius: `16px`,
    height: `48px`,
    '& + button': {
      marginLeft: `12px`
    },
    '&.MuiButton-contained': {
      background: 'darkblue',
      color: 'white',
      borderRadius: `16px`,
    },
    '&.MuiButton-outlined': {
      color: 'darkblue'
    }
  }
});

export default styledButton;