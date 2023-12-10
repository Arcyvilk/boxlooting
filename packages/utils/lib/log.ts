/* eslint-disable no-console */
export const log = {
  INFO: (content: unknown): void =>
    console.log(`${new Date().toLocaleString()} - [INFO] - ${content}`),
  WARN: (content: unknown): void =>
    console.trace(`${new Date().toLocaleString()} - [WARN] - ${content}`),
  DEBUG: (content: unknown): void =>
    console.log(`${new Date().toLocaleString()} - [DEBUG] - ${content}`),
  CRITICAL: (content: unknown): void =>
    console.log(`${new Date().toLocaleString()} - [CRITICAL] - ${content}`),
};
