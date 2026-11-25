const { chromium } = require('/opt/data/workspace/sazon-web-admin/node_modules/playwright');
const fs = require('fs');

const URL = 'http://localhost:4321/';
const OUT = '/opt/data/workspace/micv/qa-captures';

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'], executablePath: '/opt/hermes/.playwright/chromium_headless_shell-1243/chrome-headless-shell-linux-arm64/chrome-headless-shell' });
  const report = { viewports: [], consoleErrors: [], interaction: {}, checks: {} };

  for (const vp of [{ name: '1440', width: 1440, height: 900 }, { name: '768', width: 768, height: 1024 }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    page.on('requestfailed', r => errors.push('requestfailed: ' + r.url() + ' ' + (r.failure() && r.failure().errorText)));

    await page.goto(URL, { waitUntil: 'load' });
    await page.waitForTimeout(1200);
    await page.reload({ waitUntil: 'load' });
    errors.length = 0;
    await page.waitForTimeout(2500);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(600);

    const metrics = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('body *'));
      const overflow = [];
      const contained = [];
      const isClipped = (el) => {
        let p = el.parentElement;
        while (p && p !== document.documentElement) {
          const ox = getComputedStyle(p).overflowX;
          if (ox === 'hidden' || ox === 'auto' || ox === 'scroll' || ox === 'clip') return true;
          p = p.parentElement;
        }
        return false;
      };
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        if (r.right > window.innerWidth + 1 || r.left < -1) {
          const item = { tag: el.tagName.toLowerCase(), id: el.id || '', cls: (el.className && String(el.className)).slice(0, 90), left: Math.round(r.left), right: Math.round(r.right) };
          if (isClipped(el)) contained.push(item); else overflow.push(item);
        }
      }
      const cs = getComputedStyle(document.body);
      const h1 = document.querySelector('h1');
      return {
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        overflowCount: overflow.length,
        clippedMarqueeOrTabOverflow: contained.length,
        overflowSample: overflow.slice(0, 6),
        bodyBg: cs.backgroundColor,
        bodyFont: cs.fontFamily,
        h1Font: h1 ? getComputedStyle(h1).fontFamily : '',
        h1Size: h1 ? getComputedStyle(h1).fontSize : '',
        fraunces: document.fonts.check('16px Fraunces'),
        inter: document.fonts.check('16px Inter'),
        title: document.title,
        sections: ['inicio','perfil','stack','experiencia','proyectos','formacion','contacto'].filter(id => !!document.getElementById(id)),
        tabs: document.querySelectorAll('[role="tab"]').length,
        panels: document.querySelectorAll('[role="tabpanel"]').length,
        hiddenPanels: Array.from(document.querySelectorAll('[role="tabpanel"]')).filter(p => p.hidden).length,
        timelineItems: document.querySelectorAll('.acc-trigger').length,
        copyButtons: document.querySelectorAll('.copy-btn').length,
        placeholdersInDom: document.body.innerText.includes('[Tu Nombre]'),
        tokensApplied: cs.backgroundColor === 'rgb(250, 247, 242)'
      };
    });

    // Trigger scroll-reveal across the whole page before the screenshot.
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const step = Math.max(280, Math.floor(window.innerHeight * 0.5));
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 160));
      }
      await new Promise(r => setTimeout(r, 500));
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    });
    await page.waitForTimeout(900);
    const invisible = await page.evaluate(() => Array.from(document.querySelectorAll('.reveal')).filter(el => getComputedStyle(el).opacity !== '1').length);

    await page.screenshot({ path: `${OUT}/micv-${vp.name}.png`, fullPage: true });
    await page.screenshot({ path: `${OUT}/micv-${vp.name}-viewport.png`, fullPage: false });

    report.viewports.push({ name: vp.name, width: vp.width, height: vp.height, ...metrics, revealNotVisible: invisible, errors });
    report.consoleErrors.push(...errors.map(e => vp.name + ': ' + e));

    if (vp.name === '1440') {
      await page.click('#tab-datos');
      report.interaction.tabs = await page.evaluate(() => ({
        datosSelected: document.getElementById('tab-datos').getAttribute('aria-selected'),
        datosPanelVisible: !document.getElementById('panel-datos').hidden,
        cloudPanelHidden: document.getElementById('panel-cloud').hidden
      }));
      await page.focus('#tab-cloud');
      await page.keyboard.press('ArrowRight');
      report.interaction.tabsKeyboard = await page.evaluate(() => ({
        selected: document.querySelector('[role="tab"][aria-selected="true"]').id,
        activeElement: document.activeElement.id
      }));
      await page.keyboard.press('End');
      report.interaction.tabsEnd = await page.evaluate(() => document.querySelector('[role="tab"][aria-selected="true"]').id);
      await page.click('[aria-controls="acc-2"]');
      await page.waitForTimeout(450);
      report.interaction.accordion = await page.evaluate(() => ({
        expanded: document.querySelector('[aria-controls="acc-2"]').getAttribute('aria-expanded'),
        open: document.getElementById('acc-2').classList.contains('open'),
        rows: getComputedStyle(document.getElementById('acc-2')).gridTemplateRows
      }));
      await page.evaluate(() => window.scrollTo(0, 1200));
      await page.waitForTimeout(400);
      report.interaction.backToTopVisible = await page.evaluate(() => document.getElementById('to-top').classList.contains('show'));
      report.interaction.navActive = await page.evaluate(() => Array.from(document.querySelectorAll('.nav-link.active')).map(a => a.getAttribute('href')));
    } else {
      report.interaction.headerAt768 = await page.evaluate(() => ({
        desktopNavVisible: getComputedStyle(document.querySelector('nav[aria-label="Navegación principal"]')).display !== 'none',
        hamburgerVisible: getComputedStyle(document.getElementById('menu-btn')).display !== 'none'
      }));
    }
    await ctx.close();
  }

  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const mp = await mctx.newPage();
  const mErrors = [];
  mp.on('pageerror', e => mErrors.push(e.message));
  await mp.goto(URL, { waitUntil: 'load' });
  await mp.waitForTimeout(1500);
  await mp.click('#menu-btn');
  report.interaction.mobileMenuOpen = await mp.evaluate(() => ({
    visible: !document.getElementById('mobile-menu').classList.contains('hidden'),
    expanded: document.getElementById('menu-btn').getAttribute('aria-expanded')
  }));
  await mp.click('#mobile-menu a[href="#perfil"]');
  report.interaction.mobileMenuClosedOnNav = await mp.evaluate(() => ({
    hidden: document.getElementById('mobile-menu').classList.contains('hidden'),
    expanded: document.getElementById('menu-btn').getAttribute('aria-expanded')
  }));
  report.interaction.mobileOverflow = await mp.evaluate(() => ({ inner: window.innerWidth, scroll: document.documentElement.scrollWidth }));
  await mp.locator('.copy-btn').first().click();
  await mp.waitForFunction(() => (document.getElementById('copy-status')?.textContent || '').length > 0, null, { timeout: 2000 }).catch(() => {});
  report.interaction.copy = await mp.evaluate(async () => ({
    status: document.getElementById('copy-status').textContent,
    clipboard: await navigator.clipboard.readText()
  }));
  report.interaction.mobileErrors = mErrors;
  await mp.screenshot({ path: `${OUT}/micv-390.png`, fullPage: true });
  await mctx.close();

  await browser.close();
  fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
})().catch(e => { console.error('VERIFY_FAILED', e); process.exit(1); });
