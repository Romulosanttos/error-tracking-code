export default class errorTrackingCode extends Error {
  constructor(message, code) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = 'errorTrackingCode';
    this.message = message;
    if (code) this.code = code;
  }
}
