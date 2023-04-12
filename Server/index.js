const express = require("express");
const noteRoute = require("./Routes/notesRoutes");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("<h1>MySQL</h1>");
});
app.use("/", noteRoute);
// npm start or npx nodemon index.js  run command to start the server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
