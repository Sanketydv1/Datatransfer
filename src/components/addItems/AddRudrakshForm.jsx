import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  rudrakshName: Yup.string().required('Rudraksh type is required'),
  unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
  size: Yup.string().required('Size is required'),
  quantity: Yup.number().integer('Quantity must be an integer').min(1, 'Quantity must be greater than 0').required('Quantity is required'),
  color: Yup.string().required('Color is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
});

const AddRudrakshForm = ({ handleRudrakshSubmit }) => {
     return (
    <div className="dynamic-fields">
        <Formik
          initialValues={{
            rudrakshName: '',
            unitPrice: '',
            size: '',
            quantity: '',
            color: '',
            weight: '',
          }}
          validationSchema={validationSchema} // Use Yup validation schema


          onSubmit={(values, { resetForm }) => {
            console.log(" rudraksh Data Submitted ", values)
            handleRudrakshSubmit(values); // Send gemstone data to parent  
            resetForm(); // Clear form
            alert('rudraksh successfully added!');
          }}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <h4>Add New Rudraksh</h4>

              <Row className="mb-3">
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor="type">Rudraksh Type :</label>
                    <Field as="select" name="rudrakshName" className="form-control">
                      <option value="">Select type</option>
                      <option value="1 mukhi">1 mukhi</option>
                      <option value="2 mukhi">3 mukhi</option>
                      <option value="3 mukhi">5 mukhi</option>
                    </Field>
                    <ErrorMessage name="rudrakshName" component="div" className="text-danger" />
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Col>
            </Row>
            </FormikForm>
          )}
        </Formik>
    </div>
  );
};

export default AddRudrakshForm;
