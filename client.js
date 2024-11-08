const WebSocket = require("ws");
const readline = require("readline");

const clientId = process.argv[2] || "Client";

if (!clientId) {
  console.error(
    "Please provide a client name when running the script, e.g., node client.js Client_1"
  );
  process.exit(1);
}

const ws = new WebSocket("ws://localhost:8080");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `${clientId} - Enter message: `,
});

ws.on("open", () => {
  console.log(`${clientId} connected to server.`);
  rl.prompt();

  rl.on("line", (input) => {
    ws.send(`${clientId}: ${input}`);
    rl.prompt();
  });
});

ws.on("message", (message) => {
  console.log(`Received from server (${clientId}):`, message.toString());
});

ws.on("close", () => {
  console.log(`${clientId} disconnected from server.`);
  rl.close();
});
