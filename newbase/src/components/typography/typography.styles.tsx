import {makeStyles} from "@mui/styles";


const styledTypography = makeStyles({
  textWrapper: {
    fontFamily: ["Roboto","Helvetica","Arial", 'sans-serif'].join(','),
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  }
});

export default styledTypography;