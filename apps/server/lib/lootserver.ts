import { serverV1 } from "./routes";

const init = async () => {
  await serverV1.start();
  console.log(`Lootbox server running on ${serverV1.info.uri} - version V1`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
