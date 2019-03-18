/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url           The URL we want to request
 * @param  {object} [options]     The options we want to pass to "fetch"
 * @param  {boolean} [check]      Whether to throw an error for non OK status codes (e.g. < 200 or >= 300)
 *
 * @return {object}           The response data
 */
import { Header, MimeType } from "./constants";

const request = async (url, options, type = Request.FULL) => {
  const res = await fetch(url, options);
  switch (true) {
    case type === Request.RAW:
      return res;
    case type === Request.STATUS:
      return res.status;
    case type === Request.FULL:
    default:
      return await parseResponse(res);
  }
};

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

const parseResponse = async response => {
  const contentType = response.headers.get(Header.CONTENT_TYPE);

  switch (true) {
    case MimeType.JSON.test(contentType):
      return await response.json();
    case MimeType.IMAGE.test(contentType):
      return await response.buffer(); // buffer
    case MimeType.HTML.test(contentType):
    case MimeType.PLAIN.test(contentType):
    default:
      return await response.text();
  }
};

export const Request = {
  RAW: "raw",
  STATUS: "status",
  FULL: "full"
};

export default request;
