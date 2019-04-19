
export default{
  addToShoppingCart(state, goodsinfo){
    var flag = false
    // 点击加入购物车，把商品信息保存到 state 中的 cart 上
    state.cart.some(item => {
      if(item.id == goodsinfo.id) {
        item.count += parseInt(goodsinfo.count)
        flag = true
        return true
      }
    })
    
    if(flag === false){
      state.cart.push(goodsinfo)
    }

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  updateGoodsInfo(state, goodsinfo){
    state.cart.some( item => {
      if(item.id == goodsinfo.id) {
        item.count = parseInt(goodsinfo.count)
        return true
      }
    })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  removeFromCart(state, id){
    state.cart.some( (item, i) => {
      if (item.id == id) {
        state.cart.splice(i, 1)
        return true
      }
    })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  updateGoodsSelected(state, info){
    state.cart.some( item => {
      if (item.id == info.id) {
        item.selected = info.selected
      }
    })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}