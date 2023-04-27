const AwesomeLib = require('./NativeAwesomeLib').default;

export function multiply(a: number, b: number): number {
  return AwesomeLib.multiply(a, b);
}
