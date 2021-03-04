import { Document, Schema, model } from "mongoose";

export type ClientDocument = Document;

const clientSchema = new Schema<ClientDocument>();

export const Client = model<ClientDocument>("Client", clientSchema);
