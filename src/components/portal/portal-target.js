import wormhole from './wormhole'

export default {
  name: 'portalTarget',
  props: {
    multiple: Boolean,
    slotProps: Object,
    name: {
      type: String,
      required: true
    }
  },
  created() {
    if (!this.transports[this.name]) {
      this.$set(this.transports, this.name, [])
    }
  },
  data() {
    return {
      transports: wormhole.transports
    }
  },
  computed: {
    ownTransports() {
      const transports = this.transports[this.name] || []
      if (this.multiple) {
        return transports
      } else {
        return transports.slice(-1)
      }
    },
    passengers() {
      const slotProps = this.slotProps || {}
      return this.ownTransports.reduce((passengers, transport) => {
        let newPassenger = transport.passengers[0]
        if (typeof newPassenger === 'function') {
          newPassenger = newPassenger(slotProps)
        } else {
          newPassenger = transport.passengers
        }

        return passengers.concat(newPassenger)
      }, [])
    }
  },
  methods: {
    children() {
      return this.passengers.length === 0 ?
      this.$slots.default : this.passengers
    }
  },
  render() {
    const children = this.children()
    // Solves a bug where Vue would sometimes duplicate elements upon changing multiple or disabled
    const wrapperKey = this.ownTransports.length
    return (
      <div class="portal-target" key={wrapperKey}>
        {children}
      </div>
    )
  }

}