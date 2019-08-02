import * as React from "react";
import { Container, Row, Col } from "reactstrap";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <footer className="pt-4 text-center">
            <p>© Media Sourcery Inc. All rights reserved.</p>

            <p>
              Homepage &bull; Company &bull; Support &bull; News &bull; Contacts
            </p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};
