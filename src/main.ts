import { AppFactory } from "@hivejs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await AppFactory.create(AppModule);
    app.listen(5000);
}

bootstrap();