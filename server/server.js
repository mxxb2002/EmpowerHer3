const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });

//In the server folder we connected the mongodb and App's Api
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("MongoDB connection failed!"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});
