# webpack Bug report

1. Install and start the application

   ```shell
   $ npm install
   $ npm start
   ```

2. Open the URL printed by webpack-dev-server.

3. Open the JS console and see the error.

   ```
   SyntaxError: unexpected token: ":"
   ```

   Which comes from this malformed sourceURL comment with a newline inside:

   ```js
   eval(\"//# sourceURL=[module]\\nsourceURL=webpack-internal:///./src/cool.worker.js\\n\")
   ```

   The error occurs in the generated JS code for a WebWorker created by
   `worker-loader` when using the devtool `eval-cheap-module-source-map`.

   Notice the newline inside the `sourceURL` comment, which causes a syntax error
   on the next line. It seems that this should have been `//# sourceURL` but the
   `//#` was stripped away.

4. See `webpack.config.js` for more details.

5. Note that this bug can also be reproduced via regular webpack, without using
   webpack-dev-server:

   ```shell
   $ npm run build
   ```

   Then edit `index.html` to point to `dist/main.js` instead of `main.js`

   ```shell
   $ npx serve
   ```
