export const removeHtmlTags = (html: string | null): string => {
  if (!html) {
    return "There is no description";
  }

  const htmlParser = new DOMParser();
  const parsedDocument = htmlParser.parseFromString(html, "text/html");

  return parsedDocument.body.textContent?.trim() || "There is no description";
};
