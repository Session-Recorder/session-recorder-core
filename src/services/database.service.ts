import Datastore from "nedb";

const datastoreFactory = (collectionName: string): Datastore =>
	new Datastore({
		filename: `./database/${collectionName}.db`,
		autoload: true,
	});

export type DatabaseService = {
	websites: Datastore;
	sessions: Datastore;
	clients: Datastore;
	recordings: Datastore;
};

const databaseService: DatabaseService = {
	websites: datastoreFactory("websites"),
	sessions: datastoreFactory("sesions"),
	clients: datastoreFactory("clients"),
	recordings: datastoreFactory("recordings"),
};

export default databaseService;
