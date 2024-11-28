import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaTrash } from 'react-icons/fa';

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
  dimensions: Yup.number().positive('Dimensions must be positive').required('Dimensions are required'),
  items: Yup.string().required('Gemstone name is required'),
  date: Yup.string().required('Entry date and time are required'),
  photos: Yup.array().min(1, 'At least one photo is required'),
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
    photos: [],
    dimensions: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  };

  const handleSubmit = (values) => {
    console.log("Submitting gemstone data:", values);
    handleSave(values);
    handleClose();
  };

  return (
    <div className="dynamic-fields">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <FormikForm>
            {/* Number and Group */}
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

            {/* Description and AltCode */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Field type="text" name="description" className="form-control" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAltCode">
                  <Form.Label>Alt Code</Form.Label>
                  <Field type="text" name="altcode" className="form-control" />
                </Form.Group>
              </Col>
            </Row>

            {/* Gemstone Details */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formGemstoneName">
                  <Form.Label>Gemstone Name</Form.Label>
                  <Field type="text" name="items" className="form-control" />
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

            {/* Size, Origin, and Weight */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field type="text" name="size" className="form-control" />
                  <ErrorMessage name="size" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field type="number" name="weight" className="form-control" />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Color, Stock Quantity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Field type="text" name="color" className="form-control" />
                  <ErrorMessage name="color" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field type="number" name="stockQuantity" className="form-control" />
                  <ErrorMessage name="stockQuantity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Purchase Price, Selling Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Field type="number" name="purchasePrice" className="form-control" />
                  <ErrorMessage name="purchasePrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMarketPrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field type="number" name="marketPrice" className="form-control" />
                  <ErrorMessage name="marketPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Selling Price, RFID, and Origin */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field type="number" name="sellingPrice" className="form-control" />
                  <ErrorMessage name="sellingPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field type="text" name="origin" className="form-control" />
                  <ErrorMessage name="origin" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* RFID text and Entry Date & Time */}
            <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="formDimensions">
                  <Form.Label>Dimensions</Form.Label>
                  <Field type="number" name="dimensions" className="form-control" />
                  <ErrorMessage name="dimensions" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field type="datetime-local" name="date" className="form-control" />
                  <ErrorMessage name="date" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* RFID Number */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field type="text" name="rfidNo" className="form-control" />
                  <ErrorMessage name="rfidNo" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhotos">
                  <Form.Label>Photos</Form.Label>
                  <input
                    type="file"
                    multiple
                    name="photos"
                    accept="image/jpeg, image/png"
                    onChange={(event) => {
                      const files = event.target.files;
                      const validFiles = Array.from(files).filter((file) =>
                        ['image/jpeg', 'image/png'].includes(file.type)
                      );
                      const updatedFiles = validFiles.slice(0, 4 - values.photos.length);
                      const fileNames = updatedFiles.map(file => file.name);
                      setFieldValue('photos', [...values.photos, ...fileNames]);
                    }}
                    className="form-control"
                  />
                  <div>
                    {values.photos && values.photos.length > 0 && (
                      <div className="image-preview-container">
                        {values.photos.map((photo, index) => (
                          <div key={index} className="image-preview-item">
                            <span>{photo}</span>
                            <button
                              type="button"
                              onClick={() => {
                                const updatedPhotos = values.photos.filter((_, i) => i !== index);
                                setFieldValue('photos', updatedPhotos);
                              }}
                              className="btn btn-link text-danger mx-5"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <ErrorMessage name="photos" component="div" className="text-danger" />
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

export default GemstoneForm;
