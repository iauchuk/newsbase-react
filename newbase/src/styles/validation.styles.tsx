import {makeStyles} from "@mui/styles";

interface styledValidationProps {
  color: string;
}

const styledValidation = makeStyles({
  errorMessage: {
    color: (props: styledValidationProps) => {
      return props.color;},
    marginBottom: `24px`,
    textAlign: `left`,
  }
});

export default styledValidation;