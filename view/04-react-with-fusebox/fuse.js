const { FuseBox, BabelPlugin, WebIndexPlugin, CopyPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src/",
  target: "browser@es6",
  output: "dist/$name.js",
  useTypescriptCompiler : true,
  plugins: [
    BabelPlugin(),
    WebIndexPlugin({
      template : "src/index.html"
    }),
    CopyPlugin({
      files: ["favicon.ico"],
      dest: "assets",
    }),
  ]
});
// All 404's will return the fallback file
fuse.dev({
  fallback: "index.html",
  port: 8080,
});
// launch http server
fuse
  .bundle("bundle")
  .instructions(" > index.js")
  .watch();
fuse.run();