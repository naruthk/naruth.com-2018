---
title: "Responsive HTML Portfolio Theme"
layout: page
path: "/responsive-html-portfolio-theme"
---

The ultimate one-page portfolio template featuring an attractive portfolio layout and skills section.

## Download

To download the distributed version (just the HTML, CSS, and Javascript files to get everything up and running right away), click [here](https://github.com/naruthk/web-theme-portfolio/raw/master/theme.zip)

The full source code can be found on [GitHub](https://github.com/naruthk/web-theme-portfolio)

## Live Preview

I recommend you see the demo in [full screen](https://codepen.io/naruthk/full/wrRjKv/).

<iframe height='607' scrolling='no' title='Modern & Simple One-Page Portfolio HTML Theme' src='//codepen.io/naruthk/embed/wrRjKv/?height=607&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/naruthk/pen/wrRjKv/'>Modern & Simple One-Page Portfolio HTML Theme</a> by Naruth Kongurai (<a href='https://codepen.io/naruthk'>@naruthk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Screenshot

![Overview](overall.png)

## Development

## Development

If you're interested in making changes in development mode to better suit certain aspects of design that you want, then please kindy follow the instructions below carefully.

### Requirements

- [Node.js](http://nodejs.org/)
- Build sytem: [Gulp](http://gulpjs.com/)

### Build

- Do the `git clone` command of this repository
- Move into the directory of this recently cloned repository
- Type and run this command `npm install`
- Run `gulp copy` to output a **dist** folder that contains all the necessary files to properly display the website on the browser
- To enter production mode please run `gulp watch`

----

## Folder and Files

```
./
├── package.json
├── gulpfile.js                                * gulp tasks & config
├── README.md
|
├── screenshots/                               * test screenshots
|
├── index.pug                                  * pug file for homepage
|
├── scss/                                      * scss files
│   ├── _base.scss                             * typography, fonts, general styling
│   ├── _layout.scss                           * layout settings
│   ├── _modals.scss
│   ├── _theme.scss                            * theme of the webpage (most important)
│   ├── _variables.scss                        * variables
│   ├── main.scss                              * compiles all above scss files into a single file
│
└── dist/                                     * built source
	├── index.html
	├── main.css
    ├── theme.js
```

`Bootstrap`, `jQuery`, and `Font Awesome` libraries are also used but are provided from external CDNs only.

----