---
aliases:
  - Pink Quanta style sheet
  - stylesheet
  - test sheet
date_created: 2024-02-10  04:38:54
date_modified: 2024-04-25  20:56:39
draft: 
language: 
title: Pink Quanta Theme
tags:
  - Pink-Quanta
---


This is a Quartz installation, which I am currently styling like my local [Obsidian](https://obsidian.md).
This Stylesheet is used to explore css-stylings for different markdown features, while also demonstrating ideas for people in search of inspiration on how to customizing their own *secondBrain*.
This page also serves as my project-notes for further theme developement.

I am not quite happy with it yet to be honest. The design is still all over the place. I am publishing it tho, in hopes others might have useful input for me as well.

I'd love to hear from you. **Feel free to contact me, if you got any feedback or just wanna have a nerdy conversation about design psychology / philosophy.**





![[Pink-quanta.jpg|500]]

## THE ==PINK QUANTA== COLOR SYSTEM


**This theme is designed to be used primarily in darkmode, to fully emerse with the content.** (Use the "sunny" icon near the search function)


The styling of my System/theme follows one simple rule: [[testsheet|Blue is used for Links and references (WHERE & WHAT)]], ==PINK is the indicator(HOW/WHY).==

**How do we know something is important?** Through **contrast**.
Our brain is programmed to focus on stimuli that stand out.

> Block-Quotes  
> Its important to me, that external sources / quotes are well recognized as such. Therefore the sorta-APA-styling.
>
> – Author title


The goal of the Pink Quanta design is to **empazise central information** easily, so that ==the reader can== **grasp the content fast** and is able to decide, if a long text is interesting to him and ==decide if it is worth his time==.

Also the pages consist of many QUANTA (chunks), therefore a clean but also distinguishable layout is important to me.

*Lorem Ipsum* is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.




## HOW I Structure my notes

At the start of a note I often describe the purpose, overview & status quo of the note / topic, as well as some todos

- general info
    - Mostly just some sorted lists
        - Sublists are great to build a quick structure!
- [[Pink Quanta Theme|Quicklinks]]
    - people
    - related Projects

**Todos**
- [x] `#to ` Example Task 📅 2024-04-11 ✅ 2024-04-10
	- [x] Another sub-todo
- [ ] Unchecked Task

I also use Dataview to display a table of contents if the note happens to be a MOC.

### How I use headings and style my notes
I have changed how headings are displayed significantly, to make them more distinct.

I dont really use Heading 1 at the top of a note, since my file-name already introduces the topic. I also dont add the filename as a H1 Title to the note, since the title is displayed two times when the note is embedded.  
I use the plugin [Linter](https://github.com/platers/obsidian-linter) to automatically add the file-name as a title to my metadata, which is more elegant in my opinion.

My H1 are only used to seperate individual parts within one note.

In my local Installation of obsidian I styled the H1 with a big divider. I like a visual separater. Just like we draw a big fat line on a piece of paper when beginning a new topic/thought on the same piece of paper.

I havent achieved this in Quartz, since the site-title is also defined as a H1, which breaks the styling. I could find a workaround just yet.  
Hit me up if you know how to fix this problem :)

# H1: Separates MAIN Topics within a large Note

## Heading 2: Is used as my "H1"

### Heading 3: is bold & pink

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. _Lorem Ipsum_ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has **survived not only five centuries**, but also the leap into electronic typesetting.

> Block-Quotes  
> _Lorem Ipsum_ was created, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.  
> – [[Author title]]

 _Lorem Ipsum_ survived not only five centuries, but also the leap into electronic typesetting

#### Heading 4: is italic & pink

##### Heading 5: USED FOR DEFINITIONS or single atomic pieces of text within a large paper (will be same color as a Link to an atomic-note when embedded)

###### Heading 6: is monospace (and not used very often. it is yellow atm, but that gives it a little too much meaning)




# LIST of issues
##### TODO
- [x] Convert my Obsidian-CSS to SCSS for quartz
	- [x] Heading stylings
	- [x] Colors
- [ ] Change how embeds are displayed
	- can not add a left border-  maybe my blockquote styling broke something (border right & top/bottom work when added in custom.scss)
- [ ] Add a SiteLogo, which is only displayed on Desktop (left sidebar) but is hidden on mobile
	- `Component.DesktopOnly(Component.SiteLogo()),` is not working properly, also displayes it on mobile
- [ ] hide inexisting links
- [ ] MOC pages
- [ ] configure RSS
- [ ] Exclude tag from this.tag.pagelist
- [ ] Custom fonts besides google.fonts (i wanna have this baby beautiful and fully open source)
	- [ ] Learn how to build a hook

### Darkmode issues
- [ ] Different body-font-weights for light/DarkMode, atm its too thin in lightmode
- [ ] Different siteLogo for light/DarkMode
- [ ] Make the darkmode the default option for new users visiting the page

##### Different css variables in Darkmode

Havent managed to create variables besides colors that work in `custom.css` yet. I tried to setup a variable `fontweight` in  `/quartz/util/theme.ts` and used different values in Light/Dark theme `quartz.config.` Did notwork.


##### SiteLogo: Different versions for light/darkmode


To versions of a siteLogo, one for light, one for darkmode. Change the siteLogo when `themechange` event occours.

![[KALEIDOS-20240315222641542.png|200]]![[Kaleidos Logo SW.png|200]]


> You can also listen to the `themechange` event to perform any custom logic when the theme changes.

Thats written in the [Quartz Documentation](https://quartz.jzhao.xyz/features/darkmode) , yet I dont know how to approach this

```tsx
document.addEventListener("themechange", (e) => {
  console.log("Theme changed to " + e.detail.theme) // either "light" or "dark"
  // your logic here
})

```


##### making Darkmode default


 Changed `prefers-color-scheme` to dark. doesnt seams to fix anything
 
```ts
const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"

```

##### Different callout-colors for Dark/light

> [!NOTE] This callout is also not quite right
> I have no clue how to fit it, the text within the `<p>` in the callout `.callout[data-callout=note]` has the same color as the tile


### Advanced Things to solve for later 

- [ ] Create MOC-Layout w/ short summaries of the pages, sort/query via metadata
	- I really love how David Buchan solved this one in his [Quantum Garden](https://quantumgardener.info/landscapes/expand-my-way-of-being)
	- still need a good method to distinguish articles in English & German




## Different styled items

### Lists `<li>`

#### Ordered Lists `<ol>`

1. First item
	1. Subitem
		1. subsubitem
2. Second item

I havent managed to change the list behavior to my obsidian css, which uses alpabetical and roman lists for the subcathegories

![[Pink Quanta demo stylesheet-20240411151538820.png|300]]

#### Unordered bullet lists `<Ul>`

- First item
	- Subitem
		- subsubitem
- Second item

Same with the unordered bullet lists

![[Pink Quanta demo stylesheet-20240411151638601.png|300]]


### Embeds

![[testsheet]]


# Things I changed in Quartz 4 instance


- Had a Weird behaviour on desktop (both on my 14" mac and 24" screen, all browsers): when the page is displayed at 100% the "mobile version" is shown, with a Header & Footer and no sidebars. Only if I zoom out to 90%, both sidebars get visible. I want to have this as a default, that desktop always gets a desktop view.
	- Solved it for now by changing $sidePanelWidth to 360px in `variables.scss`