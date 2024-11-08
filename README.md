# WebSocket Server and Multi-Client Example

This project demonstrates a simple WebSocket server and client setup using Node.js. The server listens for connections and responds to messages sent by clients. The client can simulate multiple instances, each capable of sending messages and receiving responses individually.

### Prerequisites

	• Node.js installed on your machine
	• ws package (installed automatically with the setup instructions below)

### Files Overview

	• server.js: Contains the WebSocket server implementation.
	• client.js: Contains the WebSocket client implementation, which allows for multiple instances with unique IDs.


## Usage
#### Step 1: Run the WebSocket Server

Start the WebSocket server by running:
```
node server.js
```

#### Step 2: Run Multiple Client Instances

To simulate multiple clients, open different terminal windows or tabs and start each client with a unique name:
```
node client.js Client_1
node client.js Client_2
node client.js Client_3
```
Each client instance will have its own command prompt for input. The client name provided (e.g., Client_1) will appear in the prompt to differentiate between each client’s input.


### Additional Notes

	• Make sure each client has a unique name when starting in separate terminals.
	• This setup demonstrates basic WebSocket functionality with Node.js and can be expanded for more complex use cases.

