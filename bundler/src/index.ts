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
		const clientId = localStorage.getItem("clientId");
		if (clientId) {
			resolve(clientId);
		} else {
			axios
				.post(`${apiUrl}/api/clients`)
				.then(({ data }) => {
					localStorage.setItem("clientId", data.clientId);
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
				const sessionId = sessionStorage.getItem("sessionId");
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
								clientId: localStorage.getItem("clientId"),
							},
							{ params: { websiteId } }
						)
						.then(({ data }) => {
							sessionStorage.setItem("sessionId", data._id);
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
			eventsBuffer = [];
			console.log("Successfully Sent To Server");
		})
		.catch((error) => {
			console.error(error);
			console.log("Failure Sending.");
		});
}

try {
	identifyClient().then((clientId) => {
		identifySession().then((sessionId) => {
			window.addEventListener("beforeunload", () => save(sessionId, clientId));
			setInterval(() => {
				save(sessionId, clientId);
			}, 5 * 1000);
		});
	});
} catch (error) {
	console.error(error);
}
