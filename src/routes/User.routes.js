import { Router } from "express";
import { Methods as UserController } from "../controllers/Users.controllers";

const router = Router();

router.get("/", UserController.getUsers );
router.get("/:id", UserController.getUser );
router.post("/create", UserController.addUsers );
router.put("/update/:id", UserController.updateUser );
router.delete("/delete/:id", UserController.deleteUser );

export default router;