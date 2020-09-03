self.addEventListener("message", (event) => {
  self.postMessage({ result: `hello ${event.data.input}` });
});
