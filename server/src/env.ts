export const isProduction = process.env.NODE_ENV === "production";

if (typeof process.env.DISCORD_CLIENT_ID !== "string") {
  throw Error("Missing environment variable DISCORD_CLIENT_ID");
}
export const discordClientId = process.env.DISCORD_CLIENT_ID;

if (typeof process.env.DISCORD_BOT_TOKEN !== "string") {
  throw Error("Missing environment variable DISCORD_BOT_TOKEN");
}
export const discordBotToken = process.env.DISCORD_BOT_TOKEN;

if (typeof process.env.PORT !== "string") {
  throw Error("Missing environment variable PORT");
}
export const serverPort = process.env.PORT;

if (typeof process.env.BASE_URL !== "string") {
  throw Error("Missing environment variable BASE_URL");
}
export const baseUrl = process.env.BASE_URL;

if (typeof process.env.RUN_BOT_SERVER !== "string") {
  throw Error("Missing environment variable RUN_BOT_SERVER");
}
export const runBotServer = process.env.RUN_BOT_SERVER === "1";

if (typeof process.env.DATABASE_URL !== "string") {
  throw Error("Missing environment variable DATABASE_URL");
}
export const databaseUrl = process.env.DATABASE_URL;

export const sentryDsn =
  typeof process.env.SENTRY_DSN === "string"
    ? process.env.SENTRY_DSN
    : undefined;

if (typeof process.env.ENVIRONMENT !== "string") {
  throw Error("Missing environment variable ENVIRONMENT");
}
export const environment = process.env.ENVIRONMENT;
