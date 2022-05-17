export default function uncaughtError(req, res) {
  console.log("500 error");
  throw new Error("WOOPSIE");
}
