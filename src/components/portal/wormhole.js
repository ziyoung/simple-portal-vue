import Vue from 'vue'

const Wormhole = Vue.extend({
  data() {
    return {
      transports: {}
    }
  },
  methods: {
    open(transport) {
      const { to, passengers } = transport
      transport.passengers = Object.freeze(passengers)
      if (!this.transports[to]) {
        Vue.set(this.transports, to, [])
      }

      const currentIndex = this.getTransportIndex(transport)
      const newTransports = [...this.transports[to]]
      if (currentIndex === -1) {
        newTransports.push(transport)
      } else {
        newTransports[currentIndex] = transport
      }
      this.transports[to] = newTransports
    },
    close(transport, force = false) {
      const { to } = transport
      if (!this.transports[to]) {
        return
      }

      if (force) {
        this.transports[to] = []
      } else {
        const index = this.getTransportIndex(transport)
        if (index !== -1) {
          const newTransports = [...this.transports[to]]
          newTransports.splice(index, 1)
          this.transports[to] = newTransports
        }
      }
    },
    getTransportIndex({ to, from }) {
      return this.transports[to].findIndex(transport => transport.from === from)
    }
  }
})

const wormhole = new Wormhole()

export default wormhole
