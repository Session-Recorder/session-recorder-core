import { Session } from "./../models/Session";
import { Client } from "./../models/Client";
import { Website } from "./../models/Website";

const databaseService = {
	websites: Website,
	clients: Client,
	sessions: Session,
};

export default databaseService;
