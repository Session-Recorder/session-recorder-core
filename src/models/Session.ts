// import { eventWithTime } from "rrweb/typings/types";
import { Document, Schema, model, Types } from "mongoose";

export type SessionDocument = Document & {
	// recording: Array<any>;
	ip: string;
	location: object;
	websiteId: Types.ObjectId;
	clientId: Types.ObjectId;
	createdAt: Date;
};

const sessionSchema = new Schema<SessionDocument>({
	// recording: [Any],
	ip: String,
	location: Object,
	websiteId: { type: Types.ObjectId, ref: "Website" },
	clientId: { type: Types.ObjectId, ref: "Client" },
	createdAt: Date,
});

export const Session = model<SessionDocument>("Session", sessionSchema);
