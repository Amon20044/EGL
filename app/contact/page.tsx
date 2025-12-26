"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Form from "next/form";
import { submitContactForm } from "@/app/actions/contact";
import "./contact.css";

// Validation patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_PHONE_REGEX = /^(\+91[\s-]?)?[6-9]\d{9}$/;

interface ValidationErrors {
    name?: string;
    email?: string;
    mobile?: string;
    subject?: string;
    description?: string;
}

// Info Icon Component
function InfoIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    );
}

// Input with validation icon inside
function InputWithValidation({
    type = "text",
    id,
    name,
    placeholder,
    hasError,
    errorMessage,
    onBlur,
}: {
    type?: string;
    id: string;
    name: string;
    placeholder: string;
    hasError: boolean;
    errorMessage?: string;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="input-wrapper">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                className={hasError ? "input-error" : ""}
            />
            {hasError && (
                <div className="input-icon-error" title={errorMessage}>
                    <InfoIcon />
                </div>
            )}
            {hasError && errorMessage && (
                <div className="validation-tooltip">{errorMessage}</div>
            )}
        </div>
    );
}

// Textarea with validation icon inside
function TextareaWithValidation({
    id,
    name,
    placeholder,
    rows,
    hasError,
    errorMessage,
    onBlur,
}: {
    id: string;
    name: string;
    placeholder: string;
    rows: number;
    hasError: boolean;
    errorMessage?: string;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}) {
    return (
        <div className="input-wrapper textarea-wrapper">
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                onBlur={onBlur}
                className={hasError ? "input-error" : ""}
            />
            {hasError && (
                <div className="input-icon-error textarea-icon" title={errorMessage}>
                    <InfoIcon />
                </div>
            )}
            {hasError && errorMessage && (
                <div className="validation-tooltip">{errorMessage}</div>
            )}
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="register-btn" disabled={pending}>
            {pending ? (
                <>
                    <span className="btn-loader"></span>
                    Sending...
                </>
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Send Message
                </>
            )}
        </button>
    );
}

export default function ContactPage() {
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const [state, formAction] = useActionState(
        async (_prevState: unknown, formData: FormData) => {
            // Validate before submitting
            const validationErrors = validateForm(formData);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                setTouched({ name: true, email: true, mobile: true, subject: true, description: true });
                return { success: false, error: "Please fix the validation errors" };
            }
            const result = await submitContactForm(formData);
            return result;
        },
        null
    );

    // Validate form fields
    function validateForm(formData: FormData): ValidationErrors {
        const errors: ValidationErrors = {};
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const mobile = formData.get("mobile") as string;
        const subject = formData.get("subject") as string;
        const description = formData.get("description") as string;

        if (!name || name.length < 3) {
            errors.name = "Name must be at least 3 characters";
        }

        if (!email) {
            errors.email = "Email is required";
        } else if (!EMAIL_REGEX.test(email)) {
            errors.email = "Please enter a valid email address";
        }

        if (mobile && !INDIAN_PHONE_REGEX.test(mobile.replace(/\s/g, ""))) {
            errors.mobile = "Enter valid Indian number (10 digits)";
        }

        if (!subject || subject.length < 3) {
            errors.subject = "Subject must be at least 3 characters";
        }

        if (!description || description.length < 10) {
            errors.description = "Message must be at least 10 characters";
        }

        return errors;
    }

    // Validate single field on blur
    function validateField(name: string, value: string) {
        const newErrors = { ...errors };

        switch (name) {
            case "name":
                if (!value || value.length < 3) {
                    newErrors.name = "Name must be at least 3 characters";
                } else {
                    delete newErrors.name;
                }
                break;
            case "email":
                if (!value) {
                    newErrors.email = "Email is required";
                } else if (!EMAIL_REGEX.test(value)) {
                    newErrors.email = "Please enter a valid email address";
                } else {
                    delete newErrors.email;
                }
                break;
            case "mobile":
                if (value && !INDIAN_PHONE_REGEX.test(value.replace(/\s/g, ""))) {
                    newErrors.mobile = "Enter valid Indian number (10 digits)";
                } else {
                    delete newErrors.mobile;
                }
                break;
            case "subject":
                if (!value || value.length < 3) {
                    newErrors.subject = "Subject must be at least 3 characters";
                } else {
                    delete newErrors.subject;
                }
                break;
            case "description":
                if (!value || value.length < 10) {
                    newErrors.description = "Message must be at least 10 characters";
                } else {
                    delete newErrors.description;
                }
                break;
        }

        setErrors(newErrors);
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        validateField(name, value);
    }

    return (
        <section className="register-page">
            {/* Background Elements */}
            <div className="register-bg">
                <div className="bg-gradient-1"></div>
                <div className="bg-gradient-2"></div>
                <div className="bg-grid"></div>
            </div>

            <div className="register-container">
                {/* Left Side - Content */}
                <div className="register-content">
                    <div className="launch-badge">
                        <span className="badge-dot"></span>
                        We&apos;re Here to Help
                    </div>

                    <h1 className="register-title">
                        Get in
                        <span className="title-gradient"> Touch</span>
                    </h1>

                    <p className="register-subtitle">
                        Have questions or want to partner with us? We&apos;d love to hear from you.
                        Reach out and let&apos;s build the future of Indian esports together.
                    </p>

                    <div className="benefits-list">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div className="benefit-text">
                                <strong>Email Us</strong>
                                <span>support@evolvegg.in</span>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className="benefit-text">
                                <strong>Call Us</strong>
                                <span>+91 9876543210</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="register-form-wrapper">
                    <div className="form-card">
                        <div className="form-header">
                            <h2>Send us a Message</h2>
                            <p>We&apos;ll get back to you as soon as possible</p>
                        </div>

                        {state?.success ? (
                            <div className="success-message">
                                <div className="success-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3>Message Sent! ✉️</h3>
                                <p>Thank you for reaching out!</p>
                            </div>
                        ) : (
                            <Form action={formAction} className="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <InputWithValidation
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        hasError={!!(touched.name && errors.name)}
                                        errorMessage={errors.name}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <InputWithValidation
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        hasError={!!(touched.email && errors.email)}
                                        errorMessage={errors.email}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <InputWithValidation
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="8218381203"
                                        hasError={!!(touched.mobile && errors.mobile)}
                                        errorMessage={errors.mobile}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <InputWithValidation
                                        id="subject"
                                        name="subject"
                                        placeholder="What's this about?"
                                        hasError={!!(touched.subject && errors.subject)}
                                        errorMessage={errors.subject}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Message *</label>
                                    <TextareaWithValidation
                                        id="description"
                                        name="description"
                                        placeholder="Tell us more..."
                                        rows={4}
                                        hasError={!!(touched.description && errors.description)}
                                        errorMessage={errors.description}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                {state?.error && (
                                    <div className="error-message">{state.error}</div>
                                )}

                                <SubmitButton />

                                <p className="form-disclaimer">
                                    By submitting, you agree to our{" "}
                                    <a href="/terms">Terms</a> and{" "}
                                    <a href="/privacy">Privacy Policy</a>
                                </p>
                            </Form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
