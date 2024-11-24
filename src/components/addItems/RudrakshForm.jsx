import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
// const validationSchema = Yup.object({
//   unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
//   size: Yup.string().required('Size is required'),
//   origin: Yup.string().required('Origin is required'),
//   purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
//   marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
//   sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
//   stockQuantity: Yup.number().positive('Quantity must be positive').required('Stock quantity is required'),
//   rfidNo: Yup.number().required('RFID number is required'),
//   color: Yup.string().required('Color is required'),
//   weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
//   // photos: Yup.array().min(1, 'At least one photo is required').required('Photos are required'),
//   name: Yup.string().required('Rudraksh type is required'),
//   entryDateTime: Yup.string().required('Entry date and time are required'),
// });

const RudrakshForm = ({ handleSave, handleClose, selectedItemType }) => {
  const [rudrakshData, setRudrakshData] = useState({
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
    // photos: [],
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  });

  const handleFileChange = (e) => {
    setRudrakshData({
      ...rudrakshData,
      photos: Array.from(e.target.files),
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRudrakshData({
      ...rudrakshData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(rudrakshData);
    // Send the form data to parent through handleSave
    handleSave(rudrakshData);
    handleClose(); // Close the form after saving
  };

  return (
    <div className="dynamic-fields">

      <Formik
        initialValues={rudrakshData}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formnumber">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="number"
                    value={rudrakshData.number}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formGroup">
                  <Form.Label>Group</Form.Label>
                  <Form.Control
                    as="select"
                    name="group"
                    value={rudrakshData.group}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Group</option>
                    <option value="group1">Group 1</option>
                    <option value="group2">Group 2</option>
                    <option value="group3">Group 3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formdescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={rudrakshData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formAltCode">
                  <Form.Label>Alt Code</Form.Label>
                  <Form.Control
                    type="number"
                    name="altcode"
                    value={rudrakshData.altcode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formItems">
                  <Form.Label>Rudraksh Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="items"
                    className="form-control"
                    value={rudrakshData.items}
                    onChange={handleInputChange}
                  >

                    <option value="">Select type</option>
                    <option value="1 Mukhi">1 Mukhi</option>
                    <option value="3 Mukhi">3 Mukhi</option>
                    <option value="5 Mukhi ">5 Mukhi</option>
                  </Form.Control>
                  {/* <ErrorMessage name="rudrakshName" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Field type="text"
                    name="unitPrice"
                    className="form-control"
                    value={rudrakshData.unitPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="unitPrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Size, Weight, and Color */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field type="text"
                    name="size"
                    className="form-control"
                    value={rudrakshData.size}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="size" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field type="text"
                    name="weight"
                    className="form-control"
                    value={rudrakshData.weights}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="weight" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Color, Stock Quantity, and Purchase Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Field type="text"
                    name="color"
                    className="form-control"
                    value={rudrakshData.color}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="color" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field type="text"
                    name="stockQuantity"
                    className="form-control"
                    value={rudrakshData.stockQuantity}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="stockQuantity" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Purchase Price, Market Price, Selling Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Field type="text" name="purchasePrice" className="form-control"
                    value={rudrakshData.purchasePrice}
                    onChange={handleInputChange}

                  />
                  {/* <ErrorMessage name="purchasePrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMarketPrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field type="text" name="marketPrice" className="form-control"
                    value={rudrakshData.marketPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="marketPrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Selling Price, RFID Number, and Origin */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field type="text" name="sellingPrice" className="form-control"
                    value={rudrakshData.sellingPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="sellingPrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field type="text" name="origin" className="form-control"
                    value={rudrakshData.origin}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="origin" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Entry Date & Time and Photos */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field type="datetime-local" name="date" className="form-control"
                    value={rudrakshData.entryDateTime}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="entryDateTime" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              {/* <Col md={6}>
                <Form.Group controlId="formPhotos">
                  <Form.Label>Photos</Form.Label>
                  <input
                    type="file"
                    multiple
                    onChange={(event) => {
                      const files = event.target.files;
                      setFieldValue('photos', Array.from(files));
                    }}
                    className="form-control"
                  />
                  <Form.Text className="text-muted">You can upload up to 4 photos, 1 is mandatory.</Form.Text>
                </Form.Group>
              </Col> */}
            </Row>

            {/* RFID Number */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field type="text" name="rfidNo" className="form-control"
                    value={rudrakshData.rfidNo}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="rfidNo" component="div" className="text-danger" /> */}
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
  )
};

export default RudrakshForm;
