export default async function handler(req, res) {
    const pair = req.query.pair;
    if (!pair) return res.status(400).json({ error: 'Missing pair address' });
  
    const url = `https://api.dexscreener.com/latest/dex/pairs/base/${pair}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  