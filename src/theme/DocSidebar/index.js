import React from "react";
import { useWindowSize } from "@docusaurus/theme-common";
import DocSidebarDesktop from "@theme/DocSidebar/Desktop";
import DocSidebarMobile from "@theme/DocSidebar/Mobile";
import { useLocation } from "@docusaurus/router";

const useSidebar = (sidebar) => {
  const { pathname } = useLocation();
  const activeSidebar = sidebar.find((side) => pathname.startsWith(side.href));
  if (activeSidebar && activeSidebar.items) {
    return activeSidebar.items;
  }
  return [];
};

export default function DocSidebar(props) {
  const windowSize = useWindowSize();
  // Desktop sidebar visible on hydration: need SSR rendering
  const shouldRenderSidebarDesktop =
    windowSize === "desktop" || windowSize === "ssr";
  // Mobile sidebar not visible on hydration: can avoid SSR rendering
  const shouldRenderSidebarMobile = windowSize === "mobile";

  const activeSidebar = useSidebar(props.sidebar);

  return (
    <>
      {shouldRenderSidebarDesktop && (
        <DocSidebarDesktop {...props} sidebar={activeSidebar} />
      )}
      {shouldRenderSidebarMobile && (
        <DocSidebarMobile {...props} sidebar={activeSidebar} />
      )}
    </>
  );
}
