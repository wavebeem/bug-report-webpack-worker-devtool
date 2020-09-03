import HelloWorker from "./hello.worker";

const worker = new HelloWorker();
worker.addEventListener("message", (event) => {
  console.log(event.data.result);
});
worker.postMessage({ input: "world" });
