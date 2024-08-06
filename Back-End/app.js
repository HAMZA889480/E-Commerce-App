const express = require("express");
const morgan = require("morgan");
const appError = require("./error");
const globalerrorHandler = require("./Controllers/globalErrorHandler");

const userRouter = require("./Routes/userRouter");
const taskRouter = require("./Routes/tasksRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//adding user routers as a middle-ware
app.use("/e-commerce/users", userRouter);

//adding the task router as a middle-ware
app.use("/portfolio/v1/tasks", taskRouter);

//adding the education router as a middle-ware

//handling error for undefined handler
app.use("*", (req, res, next) => {
  next(new appError(`Cannot find request for URL ${req.originalUrl}`, 400));
});

//error handling middle-warew
//This middle-ware is automatically called when an error occured
app.use(globalerrorHandler);

module.exports = app;
