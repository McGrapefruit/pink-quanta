import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "PINKquanta",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'umami', 
      host: 'cloud.umami.is', 
      websiteId: '44211951-6d26-4a06-b462-ee49ab492f9d' 
      },
    locale: "en-US",
    baseUrl: "quanta.nikolaus-leonard.de",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
          lightMode: {
              header: "Roboto",
              body: "Roboto",
              code: "Roboto Mono",
              bodyfontweight: 400,
            },
          darkMode: {
            header: "Roboto",
            body: "Roboto thin",
            code: "Roboto Mono",
            bodyfontweight: 100,

          },
      },
      colors: {
          lightMode: {
            light: "#faf8f8",
            lightgray: "#e5e5e5",
            gray: "#b8b8b8",
            darkgray: "#4e4e4e",
            dark: "#2b2b2b",
            yellow: "#F3A712",
            primary: "#ef699e",
            secondary: "#2b2b2b",
            tertiary: "#ef699e",
            linkcolor: "#288CAB",
            linkbackground: "#3dd7fb28",
            highlight: "rgba(143, 159, 169, 0.15)",          
          },
        darkMode: {
            light: "#030F25",
              lightgray: "#193044",
              gray: "#646464",
              darkgray: "#d4d4d4",
              dark: "#ebebec",
              yellow: "#FFD000",
              primary: "#ef699e",
              secondary: "#3dd7fb",
              tertiary: "#ef699e",
              linkcolor: "#3dd7fb",
              linkbackground: "#030F25",
              highlight: "rgb(239, 105, 158)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.HardLineBreaks(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
        rssFullHtml: true,
        rssRootFolder: "blog",
        rssLimit: 50,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
