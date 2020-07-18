module.exports = {
  /**
   * Output mode.
   *  production...
   *    minified files as possible.
   *  development...
   *    bundle files debuggable.
   */
  mode: "development",

  /**
   * Mapping between original source and bundled file.
   */
  devtool: "inline-source-map",

  /**
   * Automatially build when changed files.
   */
  watch: true,

  /**
   * Ignore file or direcotry for *watch*.
   */
  watchOptions: {
    ignored: /node_modules/,
  },

  /**
   * Filename of entry point for bundling.
   */
  entry: "./src/index.js",

  /**
   * Output configurations.
   */
  output: {
    /**
     *  output.path
     *  directory for output file(include path.).
     *  __dirname
     *    variable that preset on nodejs.
     *    it stored absolute path of *this* file.
     *    ex) c:/user/app
     *  output.filename
     *  filename of output.
     */
    path: __dirname + "/dist",
    filename: "main.js",
  },
};
