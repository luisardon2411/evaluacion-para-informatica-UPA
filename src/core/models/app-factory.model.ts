import { App } from "@hivejs/core/models/app.model";

export class AppFactory {
    static async create(appModule: any): Promise<App> {
        const modules = Reflect.getMetadata('imports', appModule) || [];
        const app = new App(modules);
        return app;
    }
}