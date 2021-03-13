import { eventWithTime } from "rrweb/typings/types";
import { Document, Schema, model, Types, SchemaType } from "mongoose";

export type SessionDocument = Document & {
	ip: string;
	location: object;
	websiteId: Types.ObjectId;
	clientId: Types.ObjectId;
	createdAt: Date;
	recording: Array<eventWithTime>;
};

const sessionSchema = new Schema<SessionDocument>({
	ip: String,
	location: Object,
	websiteId: { type: Types.ObjectId, ref: "Website" },
	clientId: { type: Types.ObjectId, ref: "Client" },
	createdAt: Date,
	recording: { type: [], default: [] },
});

export const Session = model<SessionDocument>("Session", sessionSchema);
