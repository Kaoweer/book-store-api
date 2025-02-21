import dayjs from "dayjs";
import logger from "pino";

const loggerUtil = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time" : "${dayjs().format()}"`,
});

export default loggerUtil;
