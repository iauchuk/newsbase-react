import {makeStyles} from "@mui/styles";

const styledUserInfoFormDialog = makeStyles({
  dialogWrapper: {
      '& .MuiDialog-paper': {
          background: `white`,
          width: `100%`,
          padding: `20px 30px`,
          '& form': {
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            height: `100%`,
            textAlign: `center`,
          }
      },
  },
  inputWrapper: {
    width: `100%`,
    marginBottom: `24px !important`,
  }
});

export default styledUserInfoFormDialog;