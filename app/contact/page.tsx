import ContactForm from "@/app/components/ContactForm";
import "./contact.css";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with the EVOLVE Gamer League team. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <section className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="contact-badge">Get in Touch</span>
                    <h1 className="contact-heading">
                        Have questions or want to partner with us? We&apos;d love to hear from you.
                    </h1>
                </div>

                <ContactForm />
            </div>
        </section>
    );
}
