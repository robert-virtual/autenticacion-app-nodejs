const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
// middlewares
app.use(express.json());
app.use(
  cors({
    // origin: "http://127.0.0.1:5500",
    // credentials: true,
  })
);
if (process.env.NODE_ENV != "production") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// rutas
app.post("/login", (req, res) => {
  res.cookie("flit", "hola");
  res.json({ msg: "cookie  establecido" });
});

app.get("/data", (req, res) => {
  res.json({ msg: "data", query: req.query });
});

app.get("/me", (req, res) => {
  const { flit } = req.cookies;
  console.log(flit);
  res.json({ msg: "cookie  recibido" });
});

app.listen(port, () => {
  console.log("aplicacion ejecutandose en el puerto: ", port);
});
