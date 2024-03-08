import { useFavicon, useTitle } from "ahooks";

export function usePageMetadata({
  title,
  favicon,
}: {
  title: string;
  favicon: string;
}) {
  useFavicon(favicon);
  useTitle(title, { restoreOnUnmount: true });
  console.log("Metadata settled");
}
