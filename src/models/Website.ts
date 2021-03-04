import { Document, Schema, model, Types } from "mongoose";

export type WebsiteDocument = Document & {
	name: string;
	domain: string;
	description: string;
	sessions: Array<Types.ObjectId>;
};

const websiteSchema = new Schema<WebsiteDocument>({
	name: String,
	domain: String,
	description: String,
	sessions: [{ type: Types.ObjectId, ref: "Session" }],
});

export const Website = model<WebsiteDocument>("Website", websiteSchema);
