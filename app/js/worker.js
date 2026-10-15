const WORKER = {
  url: "",
  token: null,
  find() {
    this.token = null;
    return new Promise((done) => setTimeout(() => done(false), 350));
  },
  call() {
    return new Promise((_, fail) => setTimeout(() => fail(new Error("offline")), 350));
  },
  send() {
    return this.call();
  },
  games() {
    return this.call();
  },
  themes() {
    return this.call();
  },
  status() {
    return this.call();
  },
  tune() {
    return this.call();
  }
};
