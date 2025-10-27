import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./LogCard.scss";

export type UsageLogEntry = {
  cpu: number;
  ram: number;
  date: string;
  time: string;
};

const usageLogs: UsageLogEntry[] = [
  { cpu: 53, ram: 75, date: "16/06/2025", time: "15.45" },
  { cpu: 53, ram: 75, date: "16/06/2025", time: "15.45" },
  { cpu: 56, ram: 45, date: "16/06/2025", time: "09.12" },
  { cpu: 33, ram: 37, date: "15/06/2025", time: "19.01" },
];

const SystemUsageLog: React.FC = () => {
  return (
    <Card className="system-log-card bg-dark text-light rounded-5 border-2 border-secondary">
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title className="fw-bold fs-4 mb-4">
          <FormattedMessage
            id="components.SystemUsageLog.title"
            defaultMessage="Log"
          />
        </Card.Title>

        <ListGroup variant="flush" className="flex-grow-1">
          {usageLogs.map((log, index) => (
            <ListGroup key={index} className="bg-dark text-light py-3">
              <Row className="align-items-center">
                <Col xs={8}>
                  <Row className="flex-column g-1">
                    <Col>
                      <span className="fw-semibold text-white small">
                        <FormattedMessage
                          id="components.SystemUsageLog.usageUpdate"
                          defaultMessage="Usage update"
                        />
                      </span>
                    </Col>

                    <Col>
                      <Row className="g-3">
                        <Col
                          xs="auto"
                          className="d-flex align-items-center gap-2"
                        >
                          <span className="dot dot-cpu" />
                          <small className="text-secondary">
                            <FormattedMessage
                              id="components.SystemUsageLog.cpu"
                              defaultMessage={"CPU"}
                            />{" "}
                            {log.cpu}%
                          </small>
                        </Col>

                        <Col
                          xs="auto"
                          className="d-flex align-items-center gap-2"
                        >
                          <span className="dot dot-ram" />
                          <small className="text-secondary">
                            <FormattedMessage
                              id="components.SystemUsageLog.ram"
                              defaultMessage={"RAM"}
                            />{" "}
                            {log.ram}%
                          </small>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col xs={4} className="text-end">
                  <small className="text-secondary">
                    {log.date}, {log.time}
                  </small>
                </Col>
              </Row>
            </ListGroup>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SystemUsageLog;
