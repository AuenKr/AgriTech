const express = require("express");
const cors = require("cors");
const { PORT } = require("./constant/envVariable");
const { mainRoute } = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "on root page",
  });
});

app.use(mainRoute);

app.use((err, req, res, next) => {
  res.json({
    msg: "Error Occur",
    err,
  });
});

app.listen(PORT, () => {
  console.log("Port : ", PORT);
});
