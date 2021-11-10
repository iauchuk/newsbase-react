import React, { MutableRefObject, useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
  isOpen?: any;
  onSubmit: any;
  onClose: any;
  initValue?: any;
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
  const { isOpen, onSubmit, onClose, initValue } = props;
  const [role, setRole] = React.useState(selectInitialOptions[0].value);
  const formikRef: MutableRefObject<any> = useRef();

  useEffect(() => {
    if (!isPresent(initValue)) {
      return;
    }
    setRole(initValue.role);
  }, [initValue]);

  const handleClose = () => {
    onClose(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const sendForm = (formValues: any) => {
    onSubmit(formValues);
    formikRef.current.resetForm();
    handleClose();
  };

  return (
    <Dialog className="dialog-wrapper" onClose={handleClose} open={isOpen}>
      <DialogTitle>Enter data</DialogTitle>
      <Formik
        innerRef={formikRef}
        initialValues={initValue}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          sendForm(values);
        }}
      >
        {(form) => (
          <Form>
            <Select
              defaultValue={initValue.role}
              value={role}
              name="role"
              label="Role"
              onChange={(e) => {
                handleChange(e);
                form.setFieldValue(e.target.name, e.target.value);
              }}
            >
              {_.map(selectInitialOptions, (option: any, index: number) => (
                <MenuItem key={index} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage name="role" component="div" />
            <Field type="text" name="name">
              {({ field }: any) => (
                <div>
                  <TextField
                    id="outlined-size-small"
                    className="input-wrapper"
                    label="Name"
                    size="small"
                    variant="outlined"
                    {...field}
                  />
                </div>
              )}
            </Field>
            <ErrorMessage name="name" component="div" />
            <Field type="text" name="surname">
              {({ field }: any) => (
                <div>
                  <TextField
                    id="outlined-size-small"
                    className="input-wrapper"
                    label="Surname"
                    size="small"
                    variant="outlined"
                    {...field}
                  />
                </div>
              )}
            </Field>
            <ErrorMessage name="surname" component="div" />
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
