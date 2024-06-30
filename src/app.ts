import express from "express";
import "express-async-errors";
import { Request, Response, NextFunction } from "express";
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
   }


   router() {
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(router);
   }

   listen(port: number | string) {
      this.app.listen(port, () => console.log("server running", port))
   }
}

export { App }