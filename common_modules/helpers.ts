export async function loadHomepage(page){
  await page.goto('http://www.example.com')
}


export async function assertTitle(page){
  await page.waitForSelector('h1')
}