export default function cache(req, res) {
  console.log("Inside cache page");
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json({ name: "John Doe" });
}
