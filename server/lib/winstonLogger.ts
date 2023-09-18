import { createLogger, transports, format } from 'winston';

const alignColorsAndTime = format.combine(
  format.colorize({
    all: true,
  }),
  format.label({
    label: '[LOGGER]',
  }),
  format.timestamp({
    format: 'YY-MM-DD HH:mm:ss',
  }),
  format.printf(
    (info) =>
      ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`,
  ),
);

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), alignColorsAndTime),
    }),
  ],
});

export default logger;
