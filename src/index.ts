export function booleanize(input: boolean | number | bigint | string | null | undefined): boolean {
  if (input === null) return false;
  if (typeof input === "undefined") return false;
  if (typeof input === "boolean") return input;
  if (typeof input === "number") return Boolean(input);
  if (typeof input === "bigint") return Boolean(input);
  if (typeof input === "string") {
    if (input.length === 0) return false;

    const inputStr = input.toLowerCase();

    switch (inputStr) {
      case "null":
      case "undefined":
      case "false":
      case "no":
      case "0":
        return false;
      default:
        return true;
    }
  }

  throw new Error(`Unable to booleanize type: ${typeof input}`);
}
