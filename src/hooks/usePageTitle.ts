import { useEffect } from "react";

/** Sets document.title per page, mirroring the per-page <title> of the original HTML. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
