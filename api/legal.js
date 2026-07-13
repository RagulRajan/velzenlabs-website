const fs = require('fs');
const path = require('path');

// Serves the legal HTML pages with an explicit 200 status,
// bypassing Vercel's static-file 206 (Partial Content) behavior
// that breaks the Meta / Facebook crawler.
module.exports = (req, res) => {
  // Which page to serve, based on the ?page= query set by the rewrites in vercel.json
  const page = (req.query && req.query.page) || 'privacy-policy';

  // Only allow our known pages (no arbitrary file access)
  const allowed = ['privacy-policy', 'terms-of-service', 'data-deletion'];
  const safe = allowed.includes(page) ? page : 'privacy-policy';

  try {
    const filePath = path.join(process.cwd(), 'legal', safe + '.html');
    const html = fs.readFileSync(filePath, 'utf8');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.end(html);
  } catch (err) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Page not found</h1>');
  }
};
