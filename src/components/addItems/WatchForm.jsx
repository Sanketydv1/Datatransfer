import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import AddGemstoneForm from './AddGemstoneForm'; // Assuming you have this form for Gemstone
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  size: Yup.string().required('Size is required'),
  origin: Yup.string().required('Origin is required'),
  purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
  marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
  sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
  stockQuantity: Yup.number().positive('Quantity must be positive').required('Stock quantity is required'),
  rfidNo: Yup.string().required('RFID number is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
  purity: Yup.number().positive('purity must be positive').required('purity is required'),
  items: Yup.string().required('Rudraksh type is required'),
  metal: Yup.string().required('metal is required'),
  date: Yup.string().required('date and time are required'),
});

const WatchForm = ({ handleSave, handleClose }) => {
  const initialValues = {
    items: '',
    purity: '',
    origin: '',
    metal: '',
    otheritems: '', // Track if Gemstone or Rudraksh is selected
    purchasePrice: '',
    marketPrice: '',
    sellingPrice: '',
    stockQuantity: '',
    weight: '',
    photos: [],
    rfidNo: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  };

  const [showModal, setShowModal] = useState(false);
  const [watchData, setWatchData] = useState()

  const handleSubmit = (values) => {
    console.log("Submitting watch data:", values);
    handleSave(values);
    handleClose(); // Close the form after saving
  };

  const handleGemstoneData = (gemstoneData) => {
    console.log('modalsaved', showModal)
    setWatchData((prevData) => ({
      ...prevData,
      gemstoneDetails: gemstoneData, // Save gemstone data
    }));
    setShowModal(false); // Close modal after data is submitted
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...watchData, [name]: value };
    setWatchData(updatedData);
  };

  useEffect(() => {
    // Check if watchData exists and has the property otheritems
    if (watchData && watchData.otheritems) {
      if (watchData.otheritems === 'gemstone') {
        setShowModal(true); // Show modal when Gemstone
      } else {
        setShowModal(false); // Hide the modal otherwise
      }
    }
  }, [watchData]); // Depend on `watchData` changes


  const handleCloseModal = () => {
    setShowModal(false);
    setWatchData((prevData) => ({
      ...prevData,
      otheritems: '', // Reset the selection after closing the modal
    }));
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

            {/* Watch Name and Item Type */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Watch Name</Form.Label>
                  <Field type="items" name="items" className="form-control" />
                  <ErrorMessage name="items" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOtherItems">
                  <Form.Label>Gemstone</Form.Label>
                  <Field as="select" name="otheritems" className="form-control" onChange={handleInputChange}>
                    <option value="">Select item</option>
                    <option value="gemstone">Gemstone</option>
                  </Field>
                </Form.Group>
              </Col>
            </Row>

            {/* Metal and Purity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formMetal">
                  <Form.Label>Metal</Form.Label>
                  <Field as="select" name="metal" className="form-control" >
                    <option value="">Select metal</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="brass">Brass</option>
                    <option value="copper">Copper</option>
                  </Field>
                  <ErrorMessage name="metal" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPurity">
                  <Form.Label>Purity</Form.Label>
                  <Field type="number" name="purity" className="form-control" />
                  <ErrorMessage name="purity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Weight, Stock Quantity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field type="weight" name="weight" className="form-control" />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
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
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field type="number" name="sellingPrice" className="form-control" />
                  <ErrorMessage name="sellingPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Entry Date & Photos */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formOrigin">
                  <Form.Label>Origin</Form.Label>
                  <Field type="origin" name="origin" className="form-control" />
                  <ErrorMessage name="origin" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formdate">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field type="date" name="date" className="form-control" />
                  <ErrorMessage name="date" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* RFID Number */}
            <Row className="mb-3">
        
              <Col md={6}>
                <Form.Group controlId="formRfid">
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

      {/* Modal for Gemstone / Rudraksh */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{watchData.otheritems === 'gemstone' ? 'Gemstone Form' : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {watchData.otheritems === 'gemstone' && <AddGemstoneForm handleGemstoneSubmit={handleGemstoneData} />}
          {/* Render Rudraksh Form here if needed */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WatchForm;
