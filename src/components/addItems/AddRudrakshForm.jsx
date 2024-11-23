import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  type: Yup.string().required('Rudraksh type is required'),
  unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
  size: Yup.string().required('Size is required'),
  quantity: Yup.number().integer('Quantity must be an integer').min(1, 'Quantity must be greater than 0').required('Quantity is required'),
  color: Yup.string().required('Color is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
});

const AddRudrakshForm = ({ handleRudrakshSubmit }) => {
  const [submittedRudraksh, setSubmittedRudraksh] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Handle form submission
  const handleFormSubmit = (values, { resetForm }) => {
    handleRudrakshSubmit(values); // Send gemstone data to parent
    resetForm();
    setIsFormVisible(false); // Optionally hide the form
    alert('Rudraksh successfully added!');

    setTimeout(() => {
      setIsLoading(false); // Stop loading after a short delay (simulate successful submission)
      setSubmittedRudraksh([...submittedRudraksh, values]); // Add submitted rudraksh
      setIsFormVisible(false); // Hide the form after submission

      resetForm(); // Reset form data after submission
    }, 1500);
  };

  // Handle Add New Item action (reset form and show it again)
  const handleAddNewItem = () => {
    setIsFormVisible(true); // Show the form again
  };

  return (
    <div className="dynamic-fields">
      {isFormVisible && (
        <Formik
          initialValues={{
            type: '',
            unitPrice: '',
            size: '',
            quantity: '',
            color: '',
            weight: '',
          }}
          validationSchema={validationSchema} // Use Yup validation schema
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <h4>Add New Rudraksh</h4>

              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="type">Rudraksh Type :</label>
                    <Field as="select" name="type" className="form-control">
                      <option value="">Select type</option>
                      <option value="natural">1 mukhi</option>
                      <option value="heated">3 mukhi</option>
                      <option value="treated">5 mukhi</option>
                    </Field>
                    <ErrorMessage name="type" component="div" className="text-danger" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="unitPrice">Unit Price :</label>
                    <Field
                      type="text"
                      name="unitPrice"
                      className="form-control"
                    />
                    <ErrorMessage name="unitPrice" component="div" className="text-danger" />
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="size">Size :</label>
                    <Field
                      type="text"
                      name="size"
                      className="form-control"
                    />
                    <ErrorMessage name="size" component="div" className="text-danger" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="weight">Weight :</label>
                    <Field
                      type="text"
                      name="weight"
                      className="form-control"
                    />
                    <ErrorMessage name="weight" component="div" className="text-danger" />
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="color">Color :</label>
                    <Field
                      type="text"
                      name="color"
                      className="form-control"
                    />
                    <ErrorMessage name="color" component="div" className="text-danger" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity :</label>
                    <Field
                      type="text"
                      name="quantity"
                      className="form-control"
                    />
                    <ErrorMessage name="quantity" component="div" className="text-danger" />
                  </div>
                </Col>
              </Row>

              {/* Submit Button */}
              <Row className="mb-3">
                <Col md={6}>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting} // Disable button during loading or form submission
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </Col>
              </Row>
            </FormikForm>
          )}
        </Formik>
      )}

      {/* Show the Add New Item Button and Submitted List if the form is hidden */}
      {!isFormVisible && (
        <div>
          <Button variant="secondary" onClick={handleAddNewItem}>Add New Item</Button>

          <div className="submitted-rudraksh mt-3">
            {submittedRudraksh.length > 0 && <h5>Submitted Rudraksh:</h5>}
            <ul>
              {submittedRudraksh.map((item, index) => (
                <li key={index}>
                  Rudraksh {index + 1} - {item.type} ({item.color}) - {item.size} - {item.weight}g
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRudrakshForm;
