import IWebSocket from "../../interfaces/IWebSocket";

export default class WebSocketService {
    private webSocketPort = require("../../assets/appsettings.json").UserSettings.PortWebSocket;

    public openWebSocket(webSocket: IWebSocket): void {
        const webSocketName: string | undefined = webSocket.name;

        if (!webSocket.webSocket ||
            webSocket.webSocket.readyState !== WebSocket.OPEN) {
            webSocket.webSocket = new WebSocket(`ws://localhost:${ this.webSocketPort }/ws`);
        } else {
            console.log(`The ${ webSocketName } is already connected`);
        }

        if (webSocket.webSocket !== undefined) {
            webSocket.webSocket.onopen = () => {
                console.log(`Connection to the ${ webSocketName } is successful`);
            };

            webSocket.webSocket.onmessage = (event) => {
                console.log(event.data);
            };

            webSocket.webSocket.onclose = () => {
                console.log(`Connection to the ${ webSocketName } is closed`);
            };

            webSocket.webSocket.onerror = () => {
                console.log(`Connection to the ${ webSocketName } failed`);
            };
        } else {
            console.log(`${ webSocketName } is not defined`);
        }
    }

    public closeWebSocket(webSocket: IWebSocket): void {
        const webSocketName: string | undefined = webSocket.name;

        if (!webSocket.webSocket ||
            webSocket.webSocket.readyState !== WebSocket.OPEN) {
            console.log(`The ${ webSocketName } is not connected`);
        } else {
            webSocket.webSocket.close(1000, `Closing the ${ webSocketName } from the client`);
        }
    }
}
