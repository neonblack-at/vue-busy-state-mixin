export default {
  data() {
    return {
      isBusy: false
    }
  },
  methods: {
    /**
     * Set isBusy until work is done and passthrough result.
     * @param work
     * @returns {Promise<any>}
     */
    do(work) {
      if (!(work instanceof Promise)) {
        throw new Error('You need to pass a promise')
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
