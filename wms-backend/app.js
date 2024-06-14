const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(5172, () => {
  console.log(`server is running on port 5172!`);
});
