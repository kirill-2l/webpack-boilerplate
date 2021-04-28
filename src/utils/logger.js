/**
 * Обертка над console, выводящая сообщения только, когда
 * глобальная переменная DEBUG === true
 */

export default {
  info(...args) {
    if (process.env.DEBUG === true) console.info(...args);
  },

  warn(...args) {
    if (process.env.DEBUG === true) console.warn(...args);
  },

  error(...args) {
    if (process.env.DEBUG === true) console.error(...args);
  },
  table(object) {
    if (process.env.DEBUG === true) console.table(object);
  },
};
