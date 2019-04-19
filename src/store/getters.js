
export default{
  getAllCount(state){
    var c = 0;
    state.cart.forEach( item => {
      c += item.count
    })
    return c
  },
  getGoodsCount(state){
    var o = {}
    state.cart.forEach(item => {
      o[item.id] = item.count
    })
    return o
  },
  getGoodsSelected(state){
    var o = {}
    state.cart.forEach( item => {
      o[item.id] = item.selected
    })
    return o
  },
  getGoodsCountAndAmount(state){
    var o = {
      count: 0,
      amount: 0
    }
    state.cart.forEach( item => {
      if(item.selected){
        o.count += item.count
        o.amount += item.price * item.count
      }
    })
    return o
  }
}