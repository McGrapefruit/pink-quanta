import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showspaces: boolean
  showReadingTime: boolean
  showComma: boolean
  showDate: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
  showDate: false,
  showtags: true,
}

function tagHTML(tag: string, title: string) {
  
  const url = `/tags/${tag}`

  return (
    <span>
      <a class="internal tag-link" href={url}> {tag}</a>
    </span>
  )
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass, allFiles }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates && options.showDate) {
        const created = formatDate(getDate(cfg, fileData)!, cfg.locale) 
        const modifed = formatDate(fileData.dates?.modified, cfg.locale)
        if (created == modifed) {
          segments.push(`${created},`)
        } else {
          segments.push(`${created} [updated ${modifed}],`)
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      if (options.showtags) {
        if ( fileData.frontmatter?.tags != null ) {
          for (const tag of fileData.frontmatter?.tags) {
            const result = allFiles.find(item => item.slug === `tags/${tag}`)     
            segments.push(tagHTML(tag, result?.frontmatter?.title.toUpperCase() as string))
          }
        }
      }

      // End of my changes

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
