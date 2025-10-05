import puppeteer, { Browser, Page } from 'puppeteer';

export async function ConsultarGuia(
  NroGuia: string,
): Promise<{ estado: string }> {
  const browser: Browser = await puppeteer.launch({ headless: true });
  const page: Page = await browser.newPage();

  await page.goto('https://interrapidisimo.com/sigue-tu-envio/#', {
    waitUntil: 'domcontentloaded',
  });

  // Detectar input (desktop o móvil)
  const inputSelector = (await page.$('#inputGuideMovil'))
    ? '#inputGuideMovil'
    : '#inputGuia';

  await page.waitForSelector(inputSelector, { timeout: 2000 });
  await page.type(inputSelector, NroGuia);

  await page.click('#BtnMovilGuide');

  // Dar tiempo a que se abra la nueva pestaña
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const pages: Page[] = await browser.pages();
  const newPage: Page = pages[pages.length - 1]; // la última suele ser la nueva

  // Dar un pequeño tiempo extra para cargar
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Esperar a que aparezca el estado actual
  await newPage.waitForSelector('.container-ActualState .font-weight-600', {
    timeout: 2000,
  });

  // Extraer el texto del estado
  const estado: string = await newPage.$eval(
    '.container-ActualState .font-weight-600',
    (el) => el.textContent?.trim() || '',
  );

  console.log('📦 Estado actual del envío:', estado);
  console.log('Consulta realizada ✅');

  // Mantener la pestaña abierta para inspección (500s)
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  await browser.close();
  return { estado: estado };
  //return ;
}

// Ejemplo de uso:
// (async () => {
//   const estado = await ConsultarGuia("240036126202");
//   console.log("Resultado final:", estado);
// })();
