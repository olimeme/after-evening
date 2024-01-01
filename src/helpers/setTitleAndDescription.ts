export default function setTitleAndDescription(
  title: string,
  description: string
) {
  document.title = title;
  document
    .querySelector('meta[name="description"]')!
    .setAttribute("content", description);
}
