import app from "app";
import config from "./config";
const { port } = config;

app.listen(port, "0.0.0.0", () => {
	console.log(`Server Running in ${port}`);
});
