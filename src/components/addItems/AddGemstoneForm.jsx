import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
  gemstoneName: Yup.string().required('Gemstone name is required'),
  unitPrice: Yup.number().positive('Price must be positive').required('Unit price is required'),
  size: Yup.string().required('Size is required'),
  stockQuantity: Yup.number().integer('Quantity must be an integer').min(1, 'Quantity must be greater than 0').required('Stock quantity is required'),
  color: Yup.string().required('Color is required'),
  weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
  dimensions: Yup.string().required('Dimensions are required'),
  shape: Yup.string().required('Shape is required'),
});

const AddGemstoneForm = ({ handleGemstoneSubmit }) => {
  return (
    <div className="dynamic-fields">
      <Formik
        initialValues={{
          gemstoneName: '',
          unitPrice: '',
          size: '',
          stockQuantity: '',
          color: '',
          weight: '',
          dimensions: '',
          shape: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleGemstoneSubmit(values); // Send gemstone data to parent  
          resetForm(); // Clear form
          alert('Gemstone successfully added!');
        }}

      >
        {({ isSubmitting }) => (
          <FormikForm>
            <h4>Add New Gemstone</h4>

            {/* Gemstone Name and Unit Price */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formgemstoneName">
                  <Form.Label>Gemstone Name :</Form.Label>
                  <Field type="text" name="gemstoneName" className="form-control" />
                  <ErrorMessage name="gemstoneName" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formUnitPrice">
                  <Form.Label>Unit Price :</Form.Label>
                  <Field type="text" name="unitPrice" className="form-control" />
                  <ErrorMessage name="unitPrice" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Dimensions and Shape */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formDimensions">
                  <Form.Label>Dimensions</Form.Label>
                  <Field type="text" name="dimensions" className="form-control" />
                  <ErrorMessage name="dimensions" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formShape">
                  <Form.Label>Shape :</Form.Label>
                  <Field as="select" name="shape" className="form-control">
                    <option value="">Select shape</option>
                    <option value="round">Round</option>
                    <option value="oval">Oval</option>
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                  </Field>
                  <ErrorMessage name="shape" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Size and Weight */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formSize">
                  <Form.Label>Size :</Form.Label>
                  <Field type="text" name="size" className="form-control" />
                  <ErrorMessage name="size" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWeight">
                  <Form.Label>Weight :</Form.Label>
                  <Field type="text" name="weight" className="form-control" />
                  <ErrorMessage name="weight" component="div" className="text-danger" />
                </Form.Group>
              </Col>
            </Row>

            {/* Color and Stock Quantity */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formColor">
                  <Form.Label>Color :</Form.Label>
                  <Field type="text" name="color" className="form-control" />
                  <ErrorMessage name="color" component="div" className="text-danger" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStockQuantity">
                  <Form.Label>Quantity :</Form.Label>
                  <Field type="text" name="stockQuantity" className="form-control" />
                  <ErrorMessage name="stockQuantity" component="div" className="text-danger" />
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

export default AddGemstoneForm;
