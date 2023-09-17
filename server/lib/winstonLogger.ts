import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
      ),
    }),
  ],
});

export default logger;
