const { chromium } = require('/opt/data/workspace/sazon-web-admin/node_modules/playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'], executablePath: '/opt/hermes/.playwright/chromium_headless_shell-1243/chrome-headless-shell-linux-arm64/chrome-headless-shell' });
  const page = await browser.newPage();
  for (const vp of ['1440', '768']) {
    const a64 = fs.readFileSync(`/opt/data/workspace/micv/qa-captures/micv-${vp}-viewport.png`).toString('base64');
    const b64 = fs.readFileSync(`/opt/data/workspace/portfolio-qa/portfolio-${vp}-viewport.png`).toString('base64');
    const diff = await page.evaluate(async ({ a64, b64 }) => {
      const load = (src) => new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
      const a = await load('data:image/png;base64,' + a64);
      const b = await load('data:image/png;base64,' + b64);
      const c = document.createElement('canvas');
      c.width = a.width; c.height = a.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(a, 0, 0);
      const da = ctx.getImageData(0, 0, c.width, c.height).data;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(b, 0, 0, c.width, c.height);
      const db = ctx.getImageData(0, 0, c.width, c.height).data;
      let sum = 0, big = 0;
      for (let i = 0; i < da.length; i += 4) {
        const d = (Math.abs(da[i] - db[i]) + Math.abs(da[i+1] - db[i+1]) + Math.abs(da[i+2] - db[i+2])) / 3;
        sum += d;
        if (d > 24) big++;
      }
      const px = da.length / 4;
      return { width: c.width, height: c.height, meanDiff: +(sum / px).toFixed(2), pctOver24: +(100 * big / px).toFixed(2) };
    }, { a64, b64 });
    console.log(vp, JSON.stringify(diff));
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
