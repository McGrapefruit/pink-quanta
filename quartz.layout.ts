import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
     // Mastodon: {link: "https://aus.social/@purposeofpomelo", icon: "fa-brands fa-mastodon", iconcolor: "rgb(140, 141, 255)"},
      // Instagram: {link: "https://www.instagram.com/magiconionman/", icon: "fa-brands fa-instagram", iconcolor: "white"},
    
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
   
    Component.SiteLogo(),

    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Graph()),

    Component.Search(),
    
  
  
  ],
  right: [
    
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),

  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [

    Component.SiteLogo(),

    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    

  ],
  right: [],
}
