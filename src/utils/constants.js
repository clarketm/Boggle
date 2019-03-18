export const isClient = typeof window === "object";
export const isServer = typeof window !== "object";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

export const MimeType = {
  IMAGE: /^image/,
  PLAIN: /^text\/plain/,
  HTML: /^text\/html/,
  JSON: /^application\/json/
};

export const Header = {
  CONTENT_TYPE: "content-type",
  LOCATION: "location",
  AUTHORIZATION: "authorization",
  IF_MATCH: "if-match",
  IF_NONE_MATCH: "if-none-match",
  IF_MODIFIED_SINCE: "if-modified-since",
  IF_UNMODIFIED_SINCE: "if-unmodified-since"
};

export const PrimitiveType = {
  BOOLEAN: "boolean",
  FUNCTION: "function",
  NUMBER: "number",
  OBJECT: "object",
  STRING: "string",
  SYMBOL: "symbol",
  UNDEFINED: "undefined"
};

export const InstanceType = {
  OBJECT: Object,
  ARRAY: Array,
  REGEXP: RegExp,
  DATE: Date
};
