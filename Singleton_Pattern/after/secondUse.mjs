import logger from './fancyLogger.mjs';

export default function logSecondImplementation() {
    logger.printLogCount();
    logger.log('Second File');
    logger.printLogCount();
}
