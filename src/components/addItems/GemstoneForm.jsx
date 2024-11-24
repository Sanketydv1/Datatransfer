import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
// const validationSchema = Yup.object({
//   name: Yup.string().required('Gemstone name is required'),
//   unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
//   size: Yup.string().required('Size is required'),
//   origin: Yup.string().required('Origin is required'),
//   purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
//   marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
//   sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
//   stockQuantity: Yup.number().integer('Quantity must be an integer').min(1, 'Quantity must be greater than 0').required('Stock quantity is required'),
//   rfidNo: Yup.string().required('RFID number is required'),
//   color: Yup.string().required('Color is required'),
//   weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
//   // photos: Yup.array().min(1, 'At least one photo is required'),
//   dimensions: Yup.string().required('Dimensions are required'),
//   entryDateTime: Yup.string().required('Entry date and time is required'),
// });

const GemstoneForm = ({ handleSave, handleClose, selectedItemType }) => {
  const [gemstoneData, setGemstoneData] = useState({
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
    otheritems: '',
    dimensions: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  });

  const handleFileChange = (e) => {
    setGemstoneData({
      ...gemstoneData,
      photos: Array.from(e.target.files),
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGemstoneData({
      ...gemstoneData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(gemstoneData);
    // Send the form data to parent through handleSave
    handleSave(gemstoneData);
    handleClose(); // Close the form after saving
  };



  return (
    <div className="dynamic-fields">

      <Formik
        initialValues={gemstoneData}
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
                    value={gemstoneData.number}
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
                    value={gemstoneData.group}
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
                    value={gemstoneData.description}
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
                    value={gemstoneData.altcode}
                    onChange={handleInputChange}
                  />
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
                    value={gemstoneData.items}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="items" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Field
                    type="text"
                    name="unitPrice"
                    className="form-control"
                    value={gemstoneData.unitPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="unitPrice" component="div" className="text-danger" /> */}
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
                    value={gemstoneData.size}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="size" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field
                    type="text"
                    name="weight"
                    className="form-control"
                    value={gemstoneData.weight}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="weight" component="div" className="text-danger" /> */}
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
                    value={gemstoneData.color}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="color" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field
                    type="text"
                    name="stockQuantity"
                    className="form-control"
                    value={gemstoneData.stockQuantity}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="stockQuantity" component="div" className="text-danger" /> */}
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
                    value={gemstoneData.purchasePrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="purchasePrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formMarketPrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field
                    type="text"
                    name="marketPrice"
                    className="form-control"
                    value={gemstoneData.marketPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="marketPrice" component="div" className="text-danger" /> */}
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
                    value={gemstoneData.sellingPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="sellingPrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field
                    type="text"
                    name="origin"
                    className="form-control"
                    value={gemstoneData.origin}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="origin" component="div" className="text-danger" /> */}
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
                    value={gemstoneData.dimensions}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="dimensions" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhotos">
                  <Form.Label>Photos</Form.Label>
                  <input
                    type="file"
                    multiple
                    name="photos"
                    onChange={(e) => handleFileChange(e)}
                    className="form-control"
                  />
                  <ErrorMessage name="photos" component="div" className="text-danger" />
                </Form.Group>
              </Col>
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
                    value={gemstoneData.entryDateTime}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="date" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field
                    type="text"
                    name="rfidNo"
                    className="form-control"
                    value={gemstoneData.rfidNo}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="rfidNo" component="div" className="text-danger" /> */}
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
