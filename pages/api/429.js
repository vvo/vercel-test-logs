// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler429(req, res) {
  res.status(200).json({ name: "John Doe" });
}
