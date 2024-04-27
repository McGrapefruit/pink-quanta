import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "Find me on Mastedon": "https://aus.social/@purposeofpomelo",
      instagram: "https://www.instagram.com/magiconionman/",
      
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
   
    Component.DesktopOnly(Component.SiteLogo()),

    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Graph()),

    Component.Search(),
    Component.Darkmode(),




    
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Graph()),
    Component.Backlinks(),

  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),

  ],
  right: [],
}
