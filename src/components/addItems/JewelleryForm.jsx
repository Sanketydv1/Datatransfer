import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import AddGemstoneForm from './AddGemstoneForm';
import AddRudrakshForm from './AddRudrakshForm';

// Define the validation schema using Yup
// const validationSchema = Yup.object({
//   jewelleryName: Yup.string().required('Jewellery name is required'),
//   unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
//   size: Yup.string().required('Size is required'),
//   origin: Yup.string().required('Origin is required'),
//   purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
//   marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
//   sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
//   stockQuantity: Yup.number().integer('Quantity must be an integer').min(1, 'Quantity must be greater than 0').required  ('Stock quantity is required'),
//   rfidNo: Yup.string().required('RFID number is required'),
//   color: Yup.string().required('Color is required'),
//   weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
//   photos: Yup.array().min(1, 'At least one photo is required'),
//   dimensions: Yup.string().required('Dimensions are required'),
//   entryDateTime: Yup.string().required('Entry date and time is required'),
// });

const JewelleryForm = ({ handleSave, handleClose, selectedItemType }) => {
  const [gemstoneData, setGemstoneData] = useState()
  const [rudrakshData, setRudrakshData] = useState()
  const [jewelleryData, setJewelleryData] = useState({
    items: '',
    unitPrice: '',
    size: '',
    origin: '',
    metal: '',
    purity: '',
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

  const [showModal, setShowModal] = useState(false); // Modal visibility

  // Manage modal visibility based on selection of Gemstone or Rudraksh
  useEffect(() => {
    if (jewelleryData.otheritems === 'gemstone' || jewelleryData.otheritems === 'rudraksh') {
      setShowModal(true);  // Show the modal when Gemstone or Rudraksh is selected
    } else {
      setShowModal(false);  // Hide the modal otherwise
    }
  }, [jewelleryData.otheritems]);

  const handleFileChange = (e) => {
    setJewelleryData({
      ...jewelleryData,
      photos: Array.from(e.target.files),
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJewelleryData({
      ...jewelleryData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(jewelleryData);
    // Send the form data to parent through handleSave
    handleSave(jewelleryData);
    handleClose(); // Close the form after saving
  };

  const handleGemstoneData = (gemstoneData) => {
    console.log(gemstoneData);
    setGemstoneData((prevData) => ({
      ...prevData,
      gemstoneDetails: gemstoneData, // Save gemstone data
    }));
    setShowModal(false); // Close modal after data is submitted
  };

  const handleRudrakshData = (rudrakshData) => {
    console.log(rudrakshData);
    setRudrakshData((prevData) => ({
      ...prevData,
      rudrakshDetails: rudrakshData, // Save gemstone data
    }));
    setShowModal(false); // Close modal after data is submitted
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setJewelleryData((prevData) => ({
      ...prevData,
      otheritems: '',  // Reset selection to nothing after closing modal
    }));
  };

  return (
    <div className="dynamic-fields">

      <Formik
        initialValues={jewelleryData}
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
                    value={jewelleryData.number}
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
                    value={jewelleryData.group}
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
                    value={jewelleryData.description}
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
                    value={jewelleryData.altcode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* Jewellery Name */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formJewelleryName">
                  <Form.Label>Jewellery Name</Form.Label>
                  <Field
                    type="text"
                    name="items"
                    className="form-control"
                    value={jewelleryData.name}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="items" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOtherItems">
                  <Form.Label>Gemstone / Rudraksh</Form.Label>
                  <Field
                    as="select"
                    name="otheritems"
                    className="form-control"
                    onChange={handleInputChange}
                  >
                    <option value="">Select item </option>
                    <option value="gemstone">Gemstone</option>
                    <option value="gemstone">Rudraksh</option>
                  </Field>
                  <ErrorMessage name="otheritems" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Size, Origin, and Weight */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price</Form.Label>
                  <Field
                    type="text"
                    name="unitPrice"
                    className="form-control"
                    value={jewelleryData.unitPrice}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="unitPrice" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field
                    type="text"
                    name="size"
                    className="form-control"
                    value={jewelleryData.size}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="size" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field
                    type="text"
                    name="weight"
                    className="form-control"
                    value={jewelleryData.weight}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="weight" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDimensions">
                  <Form.Label>Dimensions</Form.Label>
                  <Field
                    type="text"
                    name="dimensions"
                    className="form-control"
                    value={jewelleryData.dimensions}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="dimensions" component="div" className="text-danger" /> */}
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
                    value={jewelleryData.color}
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
                    value={jewelleryData.stockQuantity}
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
                    value={jewelleryData.purchasePrice}
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
                    value={jewelleryData.marketPrice}
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
                    value={jewelleryData.sellingPrice}
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
                    value={jewelleryData.origin}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="origin" component="div" className="text-danger" /> */}
                </Form.Group>
              </Col>
            </Row>

            {/* Dimensions, Photos, and Entry Date */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field
                    type="datetime-local"
                    name="date"
                    className="form-control"
                    value={jewelleryData.entryDateTime}
                    onChange={handleInputChange}
                  />
                  {/* <ErrorMessage name="date" component="div" className="text-danger" /> */}
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
                <Form.Group controlId="formRfidNo">
                  <Form.Label>RFID Number</Form.Label>
                  <Field
                    type="text"
                    name="rfidNo"
                    className="form-control"
                    value={jewelleryData.rfidNo}
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
      {/* Modal for Gemstone / Rudraksh */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{jewelleryData.otheritems === 'gemstone' ? 'Gemstone Form' : 'Rudraksh Form'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {jewelleryData.otheritems === 'gemstone' && <AddGemstoneForm handleGemstoneSubmit={handleGemstoneData} />}
          {jewelleryData.otheritems === 'rudraksh' && <AddRudrakshForm handleRudrakshSubmit={handleRudrakshData} />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JewelleryForm;
