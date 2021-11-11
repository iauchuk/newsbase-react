import React, { MutableRefObject, useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import "./userInfoFormDialog.css";
import * as _ from "lodash";
import {
  validationErrorInvalidFormat,
  validationErrorLong,
  validationErrorRequired,
  validationErrorShort,
} from "../../../constants/validationConst";
import { default_regexp } from "../../../constants/appConsts";
import { isPresent } from "../../../helpers/helpers";

interface FormDialogPropsInterface {
  isOpen?: boolean;
  onSubmit: Function;
  onClose: Function;
  initValue?: any;
  dialogTitle?: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(default_regexp, validationErrorInvalidFormat)
    .required(validationErrorRequired),
  surname: Yup.string()
    .min(1, validationErrorShort)
    .max(50, validationErrorLong)
    .required(validationErrorRequired),
});

const selectInitialOptions = [
  {
    name: "Admin",
    value: "admin",
  },
  {
    name: "Editor",
    value: "editor",
  },
  {
    name: "User",
    value: "user",
  },
];

export const UserInfoFormDialog = (props: FormDialogPropsInterface) => {
  const { isOpen, onSubmit, onClose, initValue, dialogTitle } = props;
  const [role, setRole] = React.useState(selectInitialOptions[0].value);
  const formikRef: MutableRefObject<any> = useRef();

  useEffect(() => {
    if (!isPresent(initValue)) {
      return;
    }
    setRole(initValue?.role);
  }, [initValue]);

  const handleClose = () => {
    onClose(false);
  };

  const isValid = (errors: any, controlName: string): boolean => {
    return !!getIn(errors, controlName);
  };

  const sendForm = (formValues: any) => {
    onSubmit(formValues);
    formikRef.current.resetForm();
    handleClose();
  };

  return (
    <Dialog
      className="dialog-wrapper"
      onClose={handleClose}
      open={isOpen || false}
    >
      <DialogTitle>
        <Typography>{dialogTitle}</Typography>
      </DialogTitle>
      <Formik
        innerRef={formikRef}
        initialValues={initValue}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          sendForm(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <Select
              defaultValue={initValue && initValue.role}
              value={role}
              name="role"
              label="Role"
              className="select-menu"
              onChange={(e) => {
                setRole(e.target.value);
                setFieldValue(e.target.name, e.target.value);
              }}
            >
              {_.map(selectInitialOptions, (option: any, index: number) => (
                <MenuItem key={index} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage
              className="error-message"
              name="role"
              component="div"
            />
            <Field type="text" name="name">
              {({ field }: any) => (
                <div>
                  <TextField
                    id="outlined-size-small"
                    className="input-wrapper"
                    label="Name"
                    size="small"
                    variant="outlined"
                    value={values && values.name}
                    error={touched.name && isValid(errors, "name")}
                    onChange={(event) =>
                      setFieldValue("name", event.target.value)
                    }
                    {...field}
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              className="error-message"
              name="name"
              component="div"
            />
            <Field type="text" name="surname">
              {({ field }: any) => (
                <div>
                  <TextField
                    id="outlined-size-small"
                    className="input-wrapper"
                    label="Surname"
                    size="small"
                    variant="outlined"
                    value={values && values.surname}
                    error={touched.surname && isValid(errors, "surname")}
                    onChange={(event) =>
                      setFieldValue("surname", event.target.value)
                    }
                    {...field}
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              className="error-message"
              name="surname"
              component="div"
            />
            <Button
              className="primary-button"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
