// console.log("hola estoy saliendo por pantalla")
// console.info("mensaje informativo")
// console.debug("esto es un debug")
// console.warn("esto es una advertencia")
// console.error("esto es un error")

const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


logger.info("mensaje informativo")
logger.debug("esto es un debug")
logger.warn("esto es una advertencia")
logger.error("esto es un error")