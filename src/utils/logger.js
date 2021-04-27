/**
 * Обертка над console, выводящая сообщения только, когда
 * глобальная переменная DEBUG === true
 */

export default {
  info(...args) {
    if (DEBUG === true) console.info(...args);
  },

  warn(...args) {
    if (DEBUG === true) console.warn(...args);
  },

  error(...args) {
    if (DEBUG === true) console.error(...args);
  },
  table(object) {
    if (DEBUG === true) console.table(object);
  },
};
