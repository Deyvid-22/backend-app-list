import express from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";

class App {
   private app = express.application;

   constructor() {
      this.app = express();
      this.config();
      this.router()
   }

   config() {
      this.app.use(express.json());
      this.app.use(cors())
   }


   router() {
      this.app.use(router);
   }

   listen(port: number | string) {
      this.app.listen(port, () => console.log("server running", port))
   }
}

export { App }