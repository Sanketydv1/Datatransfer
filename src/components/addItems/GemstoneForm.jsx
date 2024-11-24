import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
  size: Yup.string().required('Size is required'),
  origin: Yup.string().required('Origin is required'),
  purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
  marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
  sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
  stockQuantity: Yup.number().positive('Quantity must be positive').required('Stock quantity is required'),
  rfidNo: Yup.string().required('RFID number is required'),
  color: Yup.string().required('Color is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
  dimensions: Yup.number().positive('dimensions must be positive').required('dimensions is required'),
  items: Yup.string().required('Rudraksh type is required'),
  date: Yup.string().required('Entry date and time are required'),
});

const GemstoneForm = ({ handleSave, handleClose }) => {
  const initialValues = {
    items: '',
    unitPrice: '',
    size: '',
    origin: '',
    purchasePrice: '',
    marketPrice: '',
    sellingPrice: '',
    stockQuantity: '',
    rfidNo: '',
    color: '',
    weight: '',
    // photos: [],
    dimensions: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  };

  const handleSubmit = (values) => {
    console.log('gemstone is submitted', values);
    // Send the form data to parent through handleSave
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
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Field type="descripton" name="description" className="form-control" />

                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAltCode">
                  <Form.Label>Alt Code</Form.Label>
                  <Field type="altcode" name="altcode" className="form-control" />

                </Form.Group>
              </Col>
            </Row>

            {/* Gemstone Details */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formGemstoneName">
                  <Form.Label>Gemstone Name</Form.Label>
                  <Field
                    type="text"
                    name="items"
                    className="form-control"
                  />
                  <ErrorMessage name="items" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Field
                    type="text"
                    name="unitPrice"
                    className="form-control"
                  />
                  <ErrorMessage name="unitPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Size, Origin, and Weight */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field
                    type="text"
                    name="size"
                    className="form-control"
                  />
                  <ErrorMessage name="size" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field
                    type="text"
                    name="weight"
                    className="form-control"
                  />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Color, Stock Quantity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Field
                    type="text"
                    name="color"
                    className="form-control"

                  />
                  <ErrorMessage name="color" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field
                    type="text"
                    name="stockQuantity"
                    className="form-control"

                  />
                  <ErrorMessage name="stockQuantity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Purchase Price, Selling Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Field
                    type="text"
                    name="purchasePrice"
                    className="form-control"

                  />
                  <ErrorMessage name="purchasePrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMarketPrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field
                    type="text"
                    name="marketPrice"
                    className="form-control"

                  />
                  <ErrorMessage name="marketPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Selling Price, RFID, and Origin */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field
                    type="text"
                    name="sellingPrice"
                    className="form-control"
                  />
                  <ErrorMessage name="sellingPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field
                    type="text"
                    name="origin"
                    className="form-control"

                  />
                  <ErrorMessage name="origin" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Dimensions, Photos, and Entry Date */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDimensions">
                  <Form.Label>Dimensions</Form.Label>
                  <Field
                    type="text"
                    name="dimensions"
                    className="form-control"

                  />
                  <ErrorMessage name="dimensions" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              {/* <Col md={6}>
                <Form.Group controlId="formPhotos">
                  <Form.Label>Photos</Form.Label>
                  <input
                    type="file"
                    multiple
                    name="photos"
                    onChange={(event) => {
                      const files = event.target.files;
                      // setFieldValue("photos", Array.from(files));
                    }}
                    className="form-control"
                  />
                  <ErrorMessage name="photos" component="div" className="text-danger" />
                </Form.Group>
              </Col> */}
            </Row>

            {/* RFID text and Entry Date & Time */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field
                    type="datetime-local"
                    name="date"
                    className="form-control"

                  />
                  <ErrorMessage name="date" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field
                    type="text"
                    name="rfidNo"
                    className="form-control"

                  />
                  <ErrorMessage name="rfidNo" component="div" className="text-danger" />
                </Form.Group>
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

export default GemstoneForm;
