
import ReactDOM from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import { withFormik } from "formik";

import "../App.css";


const today = new Date();

const App = props => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched
  } = props;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="validationFormik03">
          <Form.Label>Date</Form.Label>

          <DatePicker
            selected={values.date}
            onChange={(e) => {
                setFieldValue('date', e);
                setFieldTouched('date');
              }}
            className="form-control"
            minDate={today}
            customInput={
              <input
                type="text"
                id="validationCustom01"
                placeholder="date"
              />
            }
          />
          {touched.date && !!errors.date && errors.date}
        </Form.Group>
        
        <button class = "button1" type="submit">
            Submit
          </button>
      </Form>
    </div>
  );
};

const ValidatedForm = withFormik({
  mapPropsToValues: () => ({
    date: null
  }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.date) {
      errors.date = "Please select a date";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm"
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<ValidatedForm />, rootElement);

export default App;