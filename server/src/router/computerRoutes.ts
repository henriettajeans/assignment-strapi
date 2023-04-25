import express from "express"
import * as controller from "../controller/computerController"

export const computerRoutes = express.Router()

computerRoutes.get("/", controller.getAllComputer)

computerRoutes.get("/:id", controller.getComputerById)