import { MongoClient, Db } from "mongodb";

// MongoDB Configuration Constants
export const DB_CONFIG = {
    DATABASE_NAME: "evolve_gamer_league",
    COLLECTIONS: {
        CONTACTS: "contacts"
    },
} as const;

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error("Please define the MONGODB_URL environment variable");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable to preserve the client across hot reloads
    if (!global._mongoClientPromise) {
        client = new MongoClient(MONGODB_URL);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, create a new client
    client = new MongoClient(MONGODB_URL);
    clientPromise = client.connect();
}

export async function getDatabase(): Promise<Db> {
    const client = await clientPromise;
    return client.db(DB_CONFIG.DATABASE_NAME);
}

export async function getCollection(collectionName: string) {
    const db = await getDatabase();
    return db.collection(collectionName);
}

export default clientPromise;
