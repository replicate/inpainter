export default async function handler(req, res) {
  // Check for API token in headers
  const apiToken = req.headers['x-replicate-api-token'];
  if (!apiToken) {
    res.statusCode = 401;
    res.end(JSON.stringify({ detail: "Missing Replicate API token" }));
    return;
  }

  const response = await fetch(`https://api.replicate.com/v1/predictions/${req.query.id}`, {
    headers: {
      Authorization: `Token ${apiToken}`,
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    const error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.end(JSON.stringify(prediction));
}
