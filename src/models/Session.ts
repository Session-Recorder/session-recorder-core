// import { eventWithTime } from "rrweb/typings/types";
import { Document, Schema, model, Types } from "mongoose";

export type SessionDocument = Document & {
	// recording: Array<any>;
	ip: string;
	location: string;
	websiteId: Types.ObjectId;
	clientId: Types.ObjectId;
	createdAt: Date;
};

const sessionSchema = new Schema<SessionDocument>({
	// recording: [Any],
	ip: String,
	location: String,
	websiteId: { type: Types.ObjectId, ref: "Website" },
	clientId: { type: Types.ObjectId, ref: "Client" },
	createdAt: Date,
});

export const SessionModel = model<SessionDocument>("Session", sessionSchema);
