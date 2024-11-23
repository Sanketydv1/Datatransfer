import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';
import AddGemstoneForm from './AddGemstoneForm'; // Assuming you have this form for Gemstone

const WatchForm = ({ handleSave, handleClose, selectedItemType }) => {
  const [watchData, setWatchData] = useState({
    name: '',
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
    entryDateTime: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  });

  // Manage the modal visibility based on the selection of Gemstone or Rudraksh
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    console.log("Submitting watch data:", watchData);
    // Send the form data to parent through handleSave
    handleSave(watchData);
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

  const handleFileChange = (e) => {
    setWatchData({
      ...watchData,
      photos: Array.from(e.target.files),
    });
  };

  useEffect(() => {
    if (watchData.otheritems === 'gemstone' || watchData.otheritems === 'rudraksh') {
      setShowModal(true); // Show modal when Gemstone or Rudraksh is selected
    } else {
      setShowModal(false); // Hide the modal otherwise
    }
  }, [watchData.otheritems]); // Depend on `otheritems` value

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
        initialValues={watchData}
        onSubmit={handleSubmit}
        enableReinitialize={true} // Ensures the form updates when `watchData` changes
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
                    value={watchData.number}
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
                    value={watchData.group}
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
                    value={watchData.description}
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
                    value={watchData.altcode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Watch Name and Item Type */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formname">
                  <Form.Label>Watch Name</Form.Label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    value={watchData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formOtherItems">
                  <Form.Label>Gemstone</Form.Label>
                  <Field
                    as="select"
                    name="otheritems"
                    className="form-control"
                    onChange={handleInputChange}
                  >
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
                  <Field
                    as="select"
                    name="metal"
                    className="form-control"
                    onChange={handleInputChange}
                  >
                    <option value="">Select metal</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="brass">Brass</option>
                    <option value="copper">Copper</option>
                  </Field>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPurity">
                  <Form.Label>Purity</Form.Label>
                  <Field
                    type="text"
                    name="purity"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Weight, Stock Quantity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Field
                    type="text"
                    name="weight"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field
                    type="text"
                    name="stockQuantity"
                    className="form-control"
                    onChange={handleInputChange}
                  />
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
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field
                    type="text"
                    name="sellingPrice"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Entry Date & Photos */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formEntryDateTime">
                  <Form.Label>Entry Date & Time</Form.Label>
                  <Field
                    type="datetime-local"
                    name="entryDateTime"
                    className="form-control"
                    value={watchData.entryDateTime}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPhotos">
                  <Form.Label>Photos</Form.Label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e)}
                    className="form-control"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* RFID Number */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formRfid">
                  <Form.Label>RFID Number</Form.Label>
                  <Field
                    type="text"
                    name="rfidNo"
                    className="form-control"
                    onChange={handleInputChange}
                  />
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