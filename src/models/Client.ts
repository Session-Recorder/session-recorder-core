import { Document, Schema, model } from "mongoose";

export type ClientDocument = Document;

const clientSchema = new Schema<ClientDocument>();

export const ClientModel = model<ClientDocument>("Client", clientSchema);
