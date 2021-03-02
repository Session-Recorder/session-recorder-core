import { record } from "rrweb";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { eventWithTime } from "rrweb/typings/types";

let eventsBuffer: Array<eventWithTime> = [];
const { websiteId, apiUrl } = jwt_decode<{ websiteId: string; apiUrl: string }>(
	(window as any).sessionRecorderToken
);

record({
	emit(event: eventWithTime) {
		eventsBuffer.push(event);
	},
});

function identifyClient(): Promise<string> {
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

function identifySession(): Promise<string> {
	return new Promise((resolve, reject) => {
		axios
			.get("https://api.ipify.org?format=json")
			.then(({ data }) => {
				const ip = data.ip;
				const sessionId = (window as any).sessionId;
				if (sessionId) {
					resolve(sessionId);
				} else {
					// generate new session if doesnt' exist.
					axios
						.post(
							`${apiUrl}/api/sessions`,
							{
								ip,
								location: (window as any).location,
								clientId: sessionStorage.getItem("clientId"),
							},
							{ params: { websiteId } }
						)
						.then(({ data }) => {
							(window as any).sessionId = data._id;
							resolve(data._id);
						})
						.catch(reject);
				}
			})
			.catch(reject);
	});
}

function save(sessionId: string, clientId: string) {
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
	identifyClient().then((clientId) => {
		identifySession().then((sessionId) => {
			setInterval(() => {
				save(sessionId, clientId);
			}, 5 * 1000);
		});
	});
} catch (error) {
	console.error(error);
}
