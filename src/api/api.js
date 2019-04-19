//doc: https://github.com/xCss/JsonBird
let proxyUrl = 'https://bird.ioliu.cn/v1?url='
let baseApi = 'http://www.liulongbin.top:3005'

let api = {
  getlunbo: '/api/getlunbo',
  getshopcarlist: '/api/goods/getshopcarlist/',
  getcomments: '/api/getcomments/ ',
  postcomment: '/api/postcomment/',
  getimageInfo: '/api/getimageInfo/',
  getthumimages: '/api/getthumimages/',
  getimgcategory: '/api/getimgcategory',
  getimages: '/api/getimages/',
  getnew: '/api/getnew/',
  getnewslist: '/api/getnewslist',
  getdesc: '/api/goods/getdesc/',
  getinfo: '/api/goods/getinfo/',
  getgoods: '/api/getgoods?pageindex=',
}

Reflect.ownKeys(api).forEach( key => {
  api[key] = proxyUrl + baseApi + api[key]
})
export default api