"use server";

import { getCollection, DB_CONFIG } from "@/lib/mongodb";

interface PreRegisterData {
    name: string;
    email: string;
    mobile: string;
    ign: string; // In-Game Name
    game: string;
}

export async function submitPreRegistration(formData: FormData) {
    try {
        const data: PreRegisterData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            mobile: formData.get("mobile") as string,
            ign: formData.get("ign") as string,
            game: formData.get("game") as string,
        };

        // Validate required fields
        if (!data.name || !data.email || !data.ign || !data.game) {
            return { success: false, error: "Please fill in all required fields" };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return { success: false, error: "Please enter a valid email address" };
        }

        const collection = await getCollection(DB_CONFIG.COLLECTIONS.PRE_REGISTRATIONS);

        // Check if email already registered
        const existing = await collection.findOne({ email: data.email });
        if (existing) {
            return { success: false, error: "This email is already registered. We'll notify you when we launch!" };
        }

        await collection.insertOne({
            ...data,
            createdAt: new Date(),
            status: "pending",
            source: "website",
        });

        return {
            success: true,
            message: "You're in! We'll notify you when EVOLVE launches."
        };
    } catch (error) {
        console.error("Pre-registration error:", error);
        return { success: false, error: "Something went wrong. Please try again." };
    }
}
