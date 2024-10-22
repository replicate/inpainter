const addBackgroundToPNG = require("lib/add-background-to-png");

export default async function handler(req, res) {
  // remove null and undefined values
  req.body = Object.entries(req.body).reduce(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );

  if (req.body.mask) {
    req.body.mask = addBackgroundToPNG(req.body.mask);
  }

  const modelVersion = req.body.model || "ideogram-ai/ideogram-v2";

  req.body.aspect_ratio = "4:3";

  const body = JSON.stringify({
    input: req.body,
  });

  const response = await fetch(`https://api.replicate.com/v1/models/${modelVersion}/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body,
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
