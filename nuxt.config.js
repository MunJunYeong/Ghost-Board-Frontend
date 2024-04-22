module.exports = {
  srcDir: "src/",
  extensions: ["js", "ts"],
  /*
   ** Headers of the page
   */
  head: {
    title: "portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "my portfolio site" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isServer }) {
      const tsLoader = {
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        exclude: [/vendor/, /\.nuxt/],
      };
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader,
      });
      config.resolve.extensions.push(".ts");
      config.module.rules.map((rule) => {
        if (rule.loader === "vue-loader") {
          rule.options.loaders = { ts: tsLoader };
        }
        return rule;
      });

      if (isServer) {
        config.externals = [];
      }
    },
  },
};
