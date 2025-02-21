import config from "config";
import loggerUtil from "./logger";
import mongoose from "mongoose";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (err) {
    loggerUtil.error("Could not connect to DB");
    process.exit(1);
  }
}
export default connect;
