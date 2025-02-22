import { Server } from "socket.io";
import { Tender } from "../models/tender.model";

export const setupWebSockets = (io: Server) => {
    console.log("🟢 WebSockets initialized");

    io.on("connection", (socket) => {
        console.log("🟢 New WebSocket Connection");

        const changeStream = Tender.watch();
        changeStream.on("change", (change) => {
            console.log("⚡ Database Change Detected:", change);
            io.emit("db_update", change);
        });

        socket.on("disconnect", () => {
            console.log("🔴 WebSocket Disconnected");
        });
    });
};
