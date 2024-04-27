import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SiteLogo({ cfg, fileData }: QuartzComponentProps) {
  const ogImagePath = `https://mcgrapefruit.github.io/pink-quanta/quartz/static/pink_quanta_white_300.png`
  return <div><a href="https://mcgrapefruit.github.io/pink-quanta/"><img class="site-logo" src={ogImagePath} alt="Return to Home Page"></img></a></div>
}
SiteLogo.css = `
.site-logo {
  margin: 1rem 1rem 0 0;
  text-align: centre;
  
}
`

export default (() => SiteLogo) satisfies QuartzComponentConstructor
