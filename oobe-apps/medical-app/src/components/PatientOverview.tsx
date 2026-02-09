import React from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const PatientOverview = () => {
  return (
    <Form noValidate>
      <Modal.Body>
        <Row>
          <h5>
            <FormattedMessage
              id="overview.title"
              defaultMessage="Patient Overview"
            />
          </h5>
        </Row>
        <Row className="my-2 ps-2">
          <Col>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage id="overview.Name" defaultMessage="Name" />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.BloodType"
                  defaultMessage="Blood Type"
                />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.reasonDetails"
                  defaultMessage="Reason for hospitalization and details"
                />
              </Form.Label>
              <Form.Control as="textarea" rows={4} value="" readOnly />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.patientAge"
                  defaultMessage="Age"
                />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.patientHeight"
                  defaultMessage="Height"
                />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.patientAttendingPhysician"
                  defaultMessage="Attending Physician"
                />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                <FormattedMessage
                  id="overview.patientWeight"
                  defaultMessage="Weight"
                />
              </Form.Label>
              <Form.Control type="text" value="" readOnly />
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
    </Form>
  );
};

export default PatientOverview;
