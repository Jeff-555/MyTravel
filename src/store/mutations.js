export default {
  // 3、changeCity完成后，把mutate to state
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
