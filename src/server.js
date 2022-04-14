const express = require("express");
const router = require("./router/router");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
// const corsOptions = {
//   origin: "https://ivandcdesign.vercel.app/",
//   optionsSuccessStatus: 200,
// };
// App
const app = express();
// Config
app.set("PORT", process.env.PORT || "3001");
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
// Static
app.use(express.static(path.join(__dirname, "public")));
// Router
router(app);
// Port
app.listen(app.get("PORT"), () => {
  console.log(`Express server listening on port ${app.get("PORT")}`);
});
