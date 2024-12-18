import http from 'axios'

//下载
// export async function getCaptcha () {
//   try {
//     const response = await post('/login/getCaptcha');
//     return response
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//   }
// }
export const downFileGpt = () => {
  // const query = qs.stringify(
  //   {
  //     populate: ['kfgpt_price.product_fucs.des', 'kfgpt_price.coordinations', 'kfgpt_price.card_bg']
  //   },
  //   {
  //     encodeValuesOnly: true, // prettify URL
  //   }
  // )
  return http.get(`https://sae.kefugpt.com/download_url.json`, {
    timeout: 15000,
  })
}
