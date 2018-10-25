import wormhole from './wormhole'

let pid = 1

export default {
  name: 'portal',
  props: {
    to: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default() {
        return String(pid++)
      }
    }
  },
  mounted() {
    this.sendUpdate()
  },
  updated() {
    this.sendUpdate()
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    normalizedSlots() {
      return this.$scopedSlots.default ?
        [this.$scopedSlots.default] : this.$slots.default
    },
    sendUpdate() {
      const slotContent = this.normalizedSlots()
      if (slotContent) {
        wormhole.open({
          from: this.name,
          to: this.to,
          passengers: [...slotContent]
        })
      } else {
        this.clear()
      }
    },
    clear() {
      wormhole.close({
        from: this.name,
        to: this.to
      })
    }
  },
  render() {
    return (
      <div class="v-portal" style="display: none;"></div>
    )
  }
}