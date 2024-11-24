import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  // unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
  // size: Yup.string().required('Size is required'),
  // origin: Yup.string().required('Origin is required'),
  // purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
  // marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
  // sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
  // stockQuantity: Yup.number().positive('Quantity must be positive').required('Stock quantity is required'),
  // rfidNo: Yup.string().required('RFID number is required'),
  // color: Yup.string().required('Color is required'),
  // weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
  items: Yup.string().required('Rudraksh type is required'),
  // date: Yup.string().required('Entry date and time are required'),
});

const RudrakshForm = ({ handleSave, handleClose }) => {

  const initialValues = {
    items: '',
    size: '',
    origin: '',
    purchasePrice: '',
    marketPrice: '',
    sellingPrice: '',
    unitPrice: '',
    stockQuantity: '',
    rfidNo: '',
    color: '',
    weight: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  };

  const handleSubmit = (values) => {
    console.log("Submitting rudraksh data:", values);
    handleSave(values);
    handleClose(); // Close the form after saving
  };

  return (
    <div className="dynamic-fields">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formnumber">
                  <Form.Label>Number</Form.Label>
                  <Field type="number" name="number" className="form-control" />
                  <ErrorMessage name="number" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formGroup">
                  <Form.Label>Group</Form.Label>
                  <Field as="select" name="group" className="form-control">
                    <option value="">Select Group</option>
                    <option value="group1">Group 1</option>
                    <option value="group2">Group 2</option>
                    <option value="group3">Group 3</option>
                  </Field>
                  <ErrorMessage name="group" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Field type="descripton" name="description" className="form-control" />
                  <ErrorMessage name="description" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAltCode">
                  <Form.Label>Alt Code</Form.Label>
                  <Field type="altcode" name="altcode" className="form-control" />
                  <ErrorMessage name="altcode" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formItems">
                  <Form.Label>Rudraksh Type</Form.Label>
                  <Field as="select" name="items" className="form-control">
                    <option value="">Select type</option>
                    <option value="1 Mukhi">1 Mukhi</option>
                    <option value="3 Mukhi">3 Mukhi</option>
                    <option value="5 Mukhi">5 Mukhi</option>
                  </Field>
                  <ErrorMessage name="items" component="div" className="text-danger" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Field type="number" name="unitPrice" className="form-control" />
                  <ErrorMessage name="unitPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field type="size" name="size" className="form-control" />
                  <ErrorMessage name="size" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field type="weight" name="weight" className="form-control" />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Field type="color" name="color" className="form-control" />
                  <ErrorMessage name="color" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field type="stockQuantity" name="stockQuantity" className="form-control" />
                  <ErrorMessage name="stockQuantity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Purchase Price, Market Price, Selling Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Field type="purchasePrice" name="purchasePrice" className="form-control" />
                  <ErrorMessage name="purchasePrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMarketPrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field type="marketPrice" name="marketPrice" className="form-control" />
                  <ErrorMessage name="marketPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Selling Price, RFID Number, and Origin */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field type="sellingPrice" name="sellingPrice" className="form-control" />
                  <ErrorMessage name="sellingPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field type="origin" name="origin" className="form-control" />
                  <ErrorMessage name="origin" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Entry Date & Time and Photos */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field type="date" name="date" className="form-control" />
                  <ErrorMessage name="date" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* RFID Number */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field type="rfidNo" name="rfidNo" className="form-control" />
                  <ErrorMessage name="rfidNo" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>
            {/* Submit Button */}
            <Row className="mb-3">
              <Col md={6}>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
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

export default RudrakshForm;
