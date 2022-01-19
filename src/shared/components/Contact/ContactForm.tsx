import { emailRule } from "@shared/validation/emailsending";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Form, Container } from "react-bootstrap";
import * as yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      company: "",
      message: "",
    },
    onSubmit: (value) => {
      const res = fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }).then((resp) => {
        alert("You have succesfully sent the email!");
        // formik.resetForm();
      });
    },
    validationSchema: emailRule,
  });

  return (
    <div className="mt-5 ">
      <Container>
        <h1>Send me an email.</h1>
        <p>
          Note: The contents of this message will be forwarded to your email. It
          will be located on your{" "}
          <span className="text-danger">
            <strong>SPAM</strong>
          </span>{" "}
          folder.
        </p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="m-2 w-100" as={Col} md="4">
            <Form.Label>Your email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isValid={formik.touched.email && !formik.errors.email}
            />

            <Form.Control.Feedback type="valid">
              Email is valid
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2 w-100" as={Col} md="4">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              isValid={formik.touched.company && !formik.errors.company}
            />
            <Form.Control.Feedback type="valid">
              {formik.errors.company}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2 w-100" as={Col} md="4">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              isValid={formik.touched.message && !formik.errors.message}
              type="invalid"
            />
            <Form.Control.Feedback>
              {formik.errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="m-2 w-100" type="submit">
            Send
          </Button>
        </Form>
        <Link href={`/`}>
          <Button variant="outline-dark" className="m-2 w-100">
            Homepage
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default ContactForm;
