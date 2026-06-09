"use client";

import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import css from "./ApplyButton.module.css";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type ApplyButtonProps = {
  jobId: string;
  jobTitle: string;
  company: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};
type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
};

const OrderFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default function ApplyButton({
  jobId,
  jobTitle,
  company,
}: ApplyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  useEffect(() => {
    const storedApplications = localStorage.getItem("applications");

    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    }
  }, []);

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    const newApplication: Application = {
      id: Date.now().toString(),
      jobId,
      jobTitle,
      company,
      name: values.name,
      email: values.email,
      message: values.message,
      status: "Applied",
      createdAt: new Date().toLocaleDateString(),
    };
    const updatedApplications = [...applications, newApplication];
    setApplications(updatedApplications);
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    console.log({
      jobId,
      jobTitle,
      company,
      ...values,
    });

    formikHelpers.resetForm();
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={css.applyButton}
        onClick={() => setIsModalOpen(true)}
      >
        Apply Now
      </button>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={OrderFormSchema}
      >
        {({ resetForm }) => (
          <>
            {isModalOpen && (
              <Form>
                <div className={css.overlay}>
                  <div className={css.modal}>
                    <h2 className={css.title}>Apply for Job</h2>

                    <p className={css.subtitle}>
                      {jobTitle} • {company}
                    </p>

                    <div className={css.form}>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className={css.input}
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className={css.error}
                      />

                      <Field
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className={css.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className={css.error}
                      />

                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Write a short message..."
                        className={css.textarea}
                        rows={5}
                      />

                      <div className={css.actions}>
                        <button
                          type="button"
                          className={css.cancelButton}
                          onClick={() => {
                            resetForm();
                            setIsModalOpen(false);
                          }}
                        >
                          Cancel
                        </button>

                        <button type="submit" className={css.submitButton}>
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </>
        )}
      </Formik>
    </>
  );
}
