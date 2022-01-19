import { AppLayout, AppPage } from "@shared/components";
import { ContactForm } from "@shared/components/Contact";
import { NextPage } from "next";
import { Col, Row, Container } from "react-bootstrap";

const Contact: NextPage = () => {
  return (
    <AppPage title="Contact Me | Kim Avillanosa">
      <AppLayout>
        <Container>
          <Row>
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </AppLayout>
    </AppPage>
  );
};

export default Contact;
