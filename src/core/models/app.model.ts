import express, { Application } from "express";
import { logger, initializateAscii } from "@hivejs/core";

export class App {

    public app: Application

    constructor(modules: any[]) {
        this.app = express();
        this.app.use(express.json());
    }

    public listen(port: number ): void {
        this.app.listen(port, () => {
            console.log(initializateAscii());
            logger.log(`Server running on http://localhost:${port}`);
        });
    }
}