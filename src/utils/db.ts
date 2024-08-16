import mongoose from "mongoose";

type TConnection = {
	isConnected: number | undefined;
};

const connection: TConnection = {
	isConnected: undefined,
};

export const connectToDb = async () => {
	try {
		if (connection.isConnected) {
			console.log("Using existing connection");
			return;
		}

		if (!process.env.MONGODB_URI) {
			throw new Error("MONGODB_URI is not defined in environment variables");
		}

		const db = await mongoose.connect(process.env.MONGODB_URI);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.error("Failed to connect to MongoDB", error);
		if (error instanceof Error) {
			throw error;
		} else {
			throw new Error("An unknown error occurred during MongoDB connection.");
		}
	}
};
