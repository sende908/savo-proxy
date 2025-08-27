const puppeteer = require('puppeteer');

(async () => {
  // Launch browser with remote debugging enabled
  const browser = await puppeteer.launch({
    headless: false, // Needs Xvfb/noVNC for GUI, set true if only proxying
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--remote-debugging-address=0.0.0.0',
      '--remote-debugging-port=9222',
      '--disable-dev-shm-usage'
    ]
  });

  // Optionally open a page
  const page = await browser.newPage();
  await page.goto('https://web.snapchat.com', { waitUntil: 'networkidle2' });

  console.log('Browser started! Remote debug: http://localhost:9222');
  // Keep process alive
  process.stdin.resume();
})();