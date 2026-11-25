const { chromium } = require('/opt/data/workspace/sazon-web-admin/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'], executablePath: '/opt/hermes/.playwright/chromium_headless_shell-1243/chrome-headless-shell-linux-arm64/chrome-headless-shell' });
  for (const vp of [{ name: '1440', width: 1440, height: 900 }, { name: '390', width: 390, height: 844 }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    await page.goto('http://localhost:4321/', { waitUntil: 'load' });
    await page.waitForTimeout(1800);
    const data = await page.evaluate(() => {
      const info = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return { sel, missing: true };
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          sel,
          text: (el.textContent || '').trim().slice(0, 80),
          color: cs.color,
          background: cs.backgroundColor,
          opacity: cs.opacity,
          display: cs.display,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }
        };
      };
      return {
        header: info('header'),
        heroCta: info('#inicio a[href=\"#experiencia\"]'),
        contactHeading: info('#contacto h2'),
        contactValue: info('#contacto .space-y-3 a'),
        sectionHeights: ['inicio','perfil','stack','experiencia','proyectos','formacion','contacto'].map(id => {
          const el = document.getElementById(id);
          const r = el.getBoundingClientRect();
          return { id, h: Math.round(r.height), children: el.children.length };
        }),
        revealOpacity: Array.from(document.querySelectorAll('.reveal')).slice(0, 4).map(el => getComputedStyle(el).opacity)
      };
    });
    console.log(JSON.stringify({ vp: vp.name, data }, null, 2));
    await ctx.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
