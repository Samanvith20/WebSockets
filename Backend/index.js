import { WebSocketServer } from 'ws';

const port=3000
const WebSockets= new  WebSocketServer({port})
WebSockets.on("connection",(ws)=>{
   console.log("websockets was connected from backend",)
   WebSockets.on("message",(message)=>{
    console.log('Message from client:', message);
    // Echo the received message back to the client
    console.log("received: %s", message);
    ws.send(`Server received: ${message}`);
   })
})