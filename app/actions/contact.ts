"use server";

import { getCollection, DB_CONFIG } from "@/lib/mongodb";

interface ContactFormData {
    name: string;
    mobile: string;
    email: string;
    subject: string;
    description: string;
}

export async function submitContactForm(formData: FormData) {
    try {
        const data: ContactFormData = {
            name: formData.get("name") as string,
            mobile: formData.get("mobile") as string,
            email: formData.get("email") as string,
            subject: formData.get("subject") as string,
            description: formData.get("description") as string,
        };

        // Validate required fields
        if (!data.name || !data.email || !data.subject || !data.description) {
            return { success: false, error: "Please fill in all required fields" };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return { success: false, error: "Please enter a valid email address" };
        }

        const collection = await getCollection(DB_CONFIG.COLLECTIONS.CONTACTS);

        await collection.insertOne({
            ...data,
            createdAt: new Date(),
            status: "new",
        });

        return { success: true, message: "Thank you! We'll get back to you soon." };
    } catch (error) {
        console.error("Contact form submission error:", error);
        return { success: false, error: "Something went wrong. Please try again." };
    }
}
