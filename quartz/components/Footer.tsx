import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          © 2018-{year} Nikolaus Leonard Bergner  <br>
          {i18n(cfg.locale).components.footer.createdWith}{" "} <a href="https://obsidian.md/">Obsidian</a> and {" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year} 
        
        </p>
       

        <ul>
          {Object.entries(links).map(([text, detail]) => {
            const fontclass = detail.icon
            const iconstyle = "color: " + detail.iconcolor
            return (
            <li>
              <a href={detail.link}><i style={iconstyle} class={fontclass}></i> {text}</a>
            </li>
          )})}
          <li><a href="https://aus.social/@purposeofpomelo"><i class="fa-brands fa-mastodon"></i> Find me on Mastodon</a></li>
          <li>|&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/magiconionman/"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
          <li>|&nbsp;&nbsp;&nbsp;<a href="/META/Privacy"><i class="fa-solid fa-lock"></i> Privacy</a></li>
          <li>|&nbsp;&nbsp;&nbsp;<a href="/META/Impressum"><i class="fa-solid fa-address-card"></i> Impressum</a></li> 
        </ul>


      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
