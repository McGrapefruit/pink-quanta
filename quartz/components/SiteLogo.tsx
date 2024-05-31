import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SiteLogo({ cfg, fileData }: QuartzComponentProps) {
  const ogImagePath = `https://quanta.nikolaus-leonard.de/static/pinkquanta_typelogo.png`
  return <div><a href="https://mcgrapefruit.github.io/pink-quanta/"><img class="site-logo" src={ogImagePath} alt="Return to Home Page"></img></a></div>
}
SiteLogo.css = `
.site-logo {
  margin: 0rem 0rem 0 0;
  text-align: center;
  display: flex;
  
}
`

export default (() => SiteLogo) satisfies QuartzComponentConstructor
