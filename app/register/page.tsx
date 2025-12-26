"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Form from "next/form";
import { submitPreRegistration } from "@/app/actions/preregister";
import "./register.css";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="register-btn" disabled={pending}>
            {pending ? (
                <>
                    <span className="btn-loader"></span>
                    Securing Your Spot...
                </>
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Claim Your Spot
                </>
            )}
        </button>
    );
}

export default function RegisterPage() {
    const [state, formAction] = useActionState(
        async (_prevState: unknown, formData: FormData) => {
            const result = await submitPreRegistration(formData);
            return result;
        },
        null
    );

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
                        Early Access Opening Soon
                    </div>

                    <h1 className="register-title">
                        Be the First to
                        <span className="title-gradient"> EVOLVE</span>
                    </h1>

                    <p className="register-subtitle">
                        Join India&apos;s first free-to-compete, pro-led esports league.
                        Get exclusive early access, priority tournament slots, and be part
                        of the movement that&apos;s changing Indian esports forever.
                    </p>

                    <div className="benefits-list">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="benefit-text">
                                <strong>Priority Access</strong>
                                <span>First to know when we launch</span>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                                </svg>
                            </div>
                            <div className="benefit-text">
                                <strong>Reserved Slot</strong>
                                <span>Guaranteed entry in Season 1</span>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div className="benefit-text">
                                <strong>Exclusive Updates</strong>
                                <span>Behind-the-scenes & early features</span>
                            </div>
                        </div>
                    </div>

                    <div className="trust-badges">
                        <div className="trust-item">
                            <span className="trust-number">100%</span>
                            <span className="trust-label">Free to Join</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">0</span>
                            <span className="trust-label">Paywalls</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">∞</span>
                            <span className="trust-label">Opportunities</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="register-form-wrapper">
                    <div className="form-card">
                        <div className="form-header">
                            <h2>Pre-Register Now</h2>
                            <p>Secure your spot in the first wave</p>
                        </div>

                        {state?.success ? (
                            <div className="success-message">
                                <div className="success-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3>You&apos;re on the list! 🎮</h3>
                                <p>{state.message}</p>
                                <p className="success-note">Check your email for updates. Follow us on Discord for exclusive content.</p>
                            </div>
                        ) : (
                            <Form action={formAction} className="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ign">In-Game Name (IGN) *</label>
                                    <input
                                        type="text"
                                        id="ign"
                                        name="ign"
                                        placeholder="Your gamer tag"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="game">Primary Game *</label>
                                    <select id="game" name="game" required defaultValue="">
                                        <option value="" disabled>Select your game</option>
                                        <option value="bgmi">BGMI</option>
                                        <option value="valorant">Valorant</option>
                                        <option value="codm">Call of Duty Mobile</option>
                                        <option value="freefire">Free Fire</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {state?.error && (
                                    <div className="error-message">{state.error}</div>
                                )}

                                <SubmitButton />

                                <p className="form-disclaimer">
                                    By registering, you agree to our{" "}
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
