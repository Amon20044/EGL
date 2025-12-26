"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Form from "next/form";
import { submitContactForm } from "@/app/actions/contact";
import "./ContactForm.css";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="button-primary" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(
        async (_prevState: unknown, formData: FormData) => {
            const result = await submitContactForm(formData);
            return result;
        },
        null
    );

    return (
        <div className="contact-form-wrapper">
            <Form action={formAction} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="Your mobile number"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Message *</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Tell us more..."
                        rows={5}
                        required
                    />
                </div>

                {state && (
                    <div className={`form-message ${state.success ? "success" : "error"}`}>
                        {state.success ? state.message : state.error}
                    </div>
                )}

                <SubmitButton />
            </Form>
        </div>
    );
}
