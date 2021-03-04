import logger from "services/logger.service";

const config = {
	apiUrl: "http://localhost:3000",
	port: 3000,
	jwtSecret: "mySecretKey",
	mongoURI: `mongodb+srv://admin:${process.env.SESSION_RECORDER_DB_PASSWORD}@cluster0.dsxai.mongodb.net/sessionRecorder?authSource=admin&replicaSet=atlas-bq0qo1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
};

if (!config.mongoURI) {
	logger.log("error", "FATAL: Please Set DB Environment Variables");
	process.exit(1);
}

export default config;
