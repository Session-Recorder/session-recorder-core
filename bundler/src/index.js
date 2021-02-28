import { record } from "rrweb";
import axios from "axios";

let eventsBuffer = [];

record({
	emit(event) {
		eventsBuffer.push(event);
	},
});

let { websiteId, apiUrl } = window.sessionRecorderConfig;

function idenfityClient() {
	return new Promise((resolve, reject) => {
		const clientId = sessionStorage.getItem("clientId");
		if (clientId) {
			resolve(clientId);
		} else {
			axios
				.post(`${apiUrl}/api/clients`)
				.then(({ data }) => {
					sessionStorage.setItem("clientId", data.clientId);
					resolve(data.clientId);
				})
				.catch(reject);
		}
	});
}

function identifySession() {
	return new Promise((resolve, reject) => {
		axios
			.get("https://api.ipify.org?format=json")
			.then(({ data }) => {
				const ip = data.ip;
				const sessionId = window.sessionId;
				if (sessionId) {
					resolve(sessionId);
				} else {
					// generate new session if doesnt' exist.
					axios
						.post(
							`${apiUrl}/api/sessions`,
							{
								ip,
								location: window.location,
								clientId: sessionStorage.getItem("clientId"),
							},
							{ params: { websiteId } }
						)
						.then(({ data }) => {
							window.sessionId = data._id;
							resolve(data._id);
						})
						.catch(reject);
				}
			})
			.catch(reject);
	});
}

function save(sessionId, clientId) {
	axios
		.post(`${apiUrl}/api/sessions/${sessionId}/recordings`, {
			events: eventsBuffer,
			clientId,
		})
		.then((result) => {
			// eventsBuffer = [];
			console.log("Successfully Sent To Server");
		})
		.catch((error) => {
			console.log("Failure Sending.");
			console.error(error);
		});
}

try {
	idenfityClient().then((clientId) => {
		identifySession().then((sessionId) => {
			setInterval(() => {
				save(sessionId, clientId);
			}, 5 * 1000);
		});
	});
} catch (error) {
	console.error(error);
}
