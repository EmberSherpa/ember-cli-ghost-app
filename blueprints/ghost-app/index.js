module.exports = {
  description: 'Generates content directory and config for Ghost App',

  anonymousOptions: [],

  locals: function(options) {
    return {
      productionUrl: options.taskOptions.productionUrl || ''
    };
  }
};
