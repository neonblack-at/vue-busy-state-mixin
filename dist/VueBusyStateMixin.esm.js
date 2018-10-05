var index = {
  data: function data() {
    return {
      isBusy: false
    };
  },
  methods: {
    /**
     * Set isBusy until work is done and passthrough result.
     * @param {Promise} work
     * @returns {Promise<any>}
     */
    do: function _do(work) {
      var _this = this;

      if (!('then' in work)) {
        throw new Error('Work is not a Promise!');
      }

      this.isBusy = true;

      var handler = function handler(data) {
        _this.isBusy = false;
        return Promise.resolve(data);
      };

      return work.then(handler, function (error) {
        handler();
        return Promise.reject(error);
      });
    }
  }
};

export default index;
