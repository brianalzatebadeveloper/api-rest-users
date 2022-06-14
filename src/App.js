import  Express from "express";
import morgan from "morgan";
import UsersRoutes from "./routes/User.routes";

const App = Express();

// settings
App.set('port',4000);

// middlewares
App.use(morgan("dev"));
App.use(Express.json());

// routes
App.use("/api/users", UsersRoutes);

export default App;