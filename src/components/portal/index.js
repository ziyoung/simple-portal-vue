import Portal from './portal'
import PortalTarget from './portal-target'

export default {
  install(Vue) {
    Vue.component('portal', Portal)
    Vue.component('portalTarget', PortalTarget)
  }
}
