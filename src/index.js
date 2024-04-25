export default {
  data() {
    return {
      isBusy: false
    }
  },
  methods: {
    /**
     * Set isBusy until work is done and passthrough result.
     * @param {Promise} work
     * @returns {Promise<any>}
     */
    do(work) {
      if (!work || !('then' in work)) {
        throw new Error('Work is not a Promise!')
      }

      this.isBusy = true
      const handler = (data) => {
        this.isBusy = false
        return Promise.resolve(data)
      }

      return work
        .then(handler, (error) => {
          handler()
          return Promise.reject(error)
        })
    }
  }
}
