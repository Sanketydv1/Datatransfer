import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import AddGemstoneForm from './AddGemstoneForm'; // Assuming you have this form for Gemstone
import * as Yup from 'yup';
import { FaTrash } from 'react-icons/fa';

const validationSchema = Yup.object({
  size: Yup.string().required('Size is required'),
  origin: Yup.string().required('Origin is required'),
  metal: Yup.string().required('Metal is required'),
  purchasePrice: Yup.number().positive('Purchase price must be positive').required('Purchase price is required'),
  marketPrice: Yup.number().positive('Market price must be positive').required('Market price is required'),
  sellingPrice: Yup.number().positive('Selling price must be positive').required('Selling price is required'),
  stockQuantity: Yup.number().positive('Quantity must be positive').required('Stock quantity is required'),
  rfidNo: Yup.string().required('RFID number is required'),
  color: Yup.string().required('Color is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
  purity: Yup.number().positive('Purity must be positive').required('Dimensions are required'),
  items: Yup.string().required('Gemstone name is required'),
  date: Yup.string().required('Entry date and time are required'),
  photos: Yup.array().min(1, 'At least one photo is required'),
});

const WatchForm = ({ handleSave, handleClose }) => {
  const initialValues = {
    items: '',
    purity: '',
    origin: '',
    metal: '',
    size: '',
    otheritems: '', 
    purchasePrice: '',
    marketPrice: '',
    sellingPrice: '',
    stockQuantity: '',
    weight: '',
    photos: [],
    rfidNo: '',
    color: '',
    date: '',
    number: '',
    group: '',
    description: '',
    altcode: '',
  };

  const [watchData, setWatchData] = useState({});
  const [gemstones, setGemstones] = useState([]); // Track selected gemstones


  // Inside WatchForm
  const handleGemstoneData = (gemstoneData, setFieldValue) => {
    console.log("Data recieved", gemstoneData);


    setGemstones((prevGemstones) => [...prevGemstones, gemstoneData.gemstoneName]);

    // Optionally store gemstone data for further processing (if needed)
    setWatchData((prevData) => ({ ...prevData, gemstoneDetails: [...(prevData.gemstoneDetails || []), gemstoneData], }));

    // Reset the gemstone field to hide the modal
    setFieldValue('gemstone', ''); // Reset gemstone field to close modal
  };

  const handleDeleteGemstone = (gemstoneName) => {
    setGemstones((prevGemstones) => prevGemstones.filter((name) => name !== gemstoneName));

    setWatchData((prevData) => ({ ...prevData, gemstoneDetails: (prevData.gemstoneDetails || []).filter((gem) => gem.gemstoneName !== gemstoneName), }));
  };

  const handleSubmit = (values) => {
    // Combine the gemstone details with the form values
    const formData = {
      ...values,
      gemstoneDetails: watchData.gemstoneDetails || [], // Add gemstone details if available
    };
    console.log('Submitting combined data:', formData);
    handleSave(formData);
    handleClose();
  };

  const handleCloseModal = (setFieldValue) => {
    setFieldValue('gemstone', ''); // Reset gemstone selection
  };


  return (
    <div className="dynamic-fields">

      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
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

            {/* Description and AltCode */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formGemstoneName">
                  <Form.Label>Gemstone Name</Form.Label>
                  <Field type="text" name="items" className="form-control" />
                  <ErrorMessage name="items" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formgemstone">
                  <Form.Label>Gemstone</Form.Label>
                  <Field
                    as="select"
                    name="otheritems"
                    className="form-control"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      setFieldValue('gemstone', selectedValue); // Update the gemstone field when option is selected
                    }}
                  >
                    <option value="">Select Gemstone</option>
                    <option value="gemstone">Gemstone</option> {/* Trigger opening of Gemstone modal */}
                  </Field>

                  {/* Display the selected gemstone name with delete button */}
                  {gemstones.length > 0 && (
                    <div className="gemstone-selected mt-2">
                      {gemstones.map((gemstoneName, index) => (
                        <div key={index} className="d-flex align-items-center">
                          <span className="badge bg-success me-2">{gemstoneName}</span>
                          < button
                            type="button"
                            onClick={() => handleDeleteGemstone(gemstoneName)}
                            className="btn btn-link text-danger mx-2"
                          >
                            <FaTrash /> {/* Trash icon */}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
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
                    className="form-control" >
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
                  <Field
                    type="text"
                    name="purity"
                    className="form-control" />
                  <ErrorMessage name="purity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size</Form.Label>
                  <Field type="text" name="size" className="form-control" />
                  <ErrorMessage name="size" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color</Form.Label>
                  <Field type="text" name="color" className="form-control" />
                  <ErrorMessage name="color" component="div" className="text-danger" />
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
                    className="form-control" />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Stock Quantity</Form.Label>
                  <Field
                    type="text"
                    name="stockQuantity"
                    className="form-control" />
                  <ErrorMessage name="stockQuantity" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">

              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Market Price</Form.Label>
                  <Field
                    type="text"
                    name="marketPrice"
                    className="form-control" />
                  <ErrorMessage name="marketPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPurchasePrice">
                  <Form.Label>Purchase Price</Form.Label>
                  <Field
                    type="text"
                    name="purchasePrice"
                    className="form-control" />
                  <ErrorMessage name="purchasePrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Purchase Price, Selling Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSellingPrice">
                  <Form.Label>Selling Price</Form.Label>
                  <Field
                    type="text"
                    name="sellingPrice"
                    className="form-control" />
                  <ErrorMessage name="sellingPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Origin</Form.Label>
                  <Field
                    type="text"
                    name="origin"
                    className="form-control" />
                  <ErrorMessage name="origin" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Entry Date & Photos */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formdate">
                  <Form.Label>Date & Time</Form.Label>
                  <Field
                    type="datetime-local"
                    name="date"
                    className="form-control" />
                  <ErrorMessage name="date" component="div" className="text-danger" />
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

                      // Limit to 4 images
                      const updatedFiles = validFiles.slice(0, 4 - values.photos.length);

                      // Store file names instead of URLs
                      const fileNames = updatedFiles.map(file => file.name);

                      // Update the photos in form state with file names
                      setFieldValue('photos', [...values.photos, ...fileNames]);
                    }}
                    className="form-control"
                  />
                  {/* Show Uploaded Images with Delete Icon */}
                  <div>
                    {values.photos && values.photos.length > 0 && (
                      <div className="image-preview-container">
                        {values.photos.map((photo, index) => (
                          <div key={index} className="image-preview-item">
                            <span>{photo}</span> {/* Displaying image name */}

                            <button
                              type="button"
                              onClick={() => {
                                // Remove the image from the array
                                const updatedPhotos = values.photos.filter((_, i) => i !== index);
                                setFieldValue('photos', updatedPhotos);
                              }}
                              className="btn btn-link text-danger mx-5"
                            >
                              <FaTrash /> {/* Trash icon */}
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

            {/* RFID Number */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formRfid">
                  <Form.Label>RFID Number</Form.Label>
                  <Field
                    type="text"
                    name="rfidNo"
                    className="form-control" />
                  <ErrorMessage name="rfidNo" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Modal for Gemstone */}
            <Modal
              show={values.gemstone === 'gemstone'}
              onHide={() => setFieldValue('gemstone', '')} // Close modal when selecting a different option
            >
              <Modal.Header closeButton>
                <Modal.Title>Gemstone Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddGemstoneForm
                  handleGemstoneSubmit={(gemstoneData) =>
                    handleGemstoneData(gemstoneData, setFieldValue)
                  }
                />
              </Modal.Body>
            </Modal>


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
    </div >
  );
};

export default WatchForm;
