export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

// export function checkSubHeading(str) {
//   return /^(\*)(\*)(.*)(.*)\*$/.test(str);
// }

export function replaceHeadingStars(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "");
}

// export function replaceSubHeadingStars(str) {
//   return str.replace(/^(\*)(\*)|(\*)(\*)$/g, "");
// }
