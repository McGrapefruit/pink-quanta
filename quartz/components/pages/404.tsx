import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    return (
    <article class="popover-hint">

      <p> 
       <h3> This is not the page you are looking for. </h3>  </p>
      <p> Seems like this page does not exist – at least not under this url. </p>
      <p> My best guess is:</p>

      <ul>
        <li> I probably moved this page to a different directory. I rarely delete content, so a quick search should solve this.</li>
        <li> Maybe I made a typo. </li>
        <li> Maybe the page does not exist yet. If you havent observed the page already, it may be still in superposition: Its existent and nonexistent at the same time ;-) </li>
        
      </ul>
      <p> <strong> Please return to the <a href="/">Home page</a> or use the <span class="text-highlight">search function</span> to find what you are looking for. </strong>  </p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

