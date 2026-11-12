MOHAN IRAYYA NAIK - WILDLIFE PHOTOGRAPHY PORTFOLIO
==================================================

FILES
  index.html   the page (all sections and text)
  style.css    fonts, small layout rules and the accent colour
  script.js    the gallery list, category filters and photo tiles
  images/      all photographs used on the page

HOW TO RUN ON YOUR COMPUTER
  Unzip the folder and double-click index.html. It opens in your browser.
  Keep the images folder next to index.html.
  You need an internet connection the first time so the Google Fonts load.

HOW TO PUT IT ONLINE (free options)
  - Netlify: go to app.netlify.com/drop and drag the whole folder onto the page.
  - GitHub Pages: upload the files to a GitHub repository and turn on Pages.
  - Vercel or Cloudflare Pages: upload the folder as a static site.

HOW TO EDIT
  Add a photo to the gallery
    1. Copy the picture into the images folder (a JPG around 1600 px wide is ideal).
    2. Open script.js and add a line to the "all" list, for example:
       { src: 'images/my-photo.jpg', ratio: '3 / 2', zoom: 1, title: 'Name', cat: 'Birds', alt: 'Short description' },
       cat must be one of: Birds, Wildlife, Reptiles and amphibians, Macro.
  Change the accent (yellow) colour
    Open style.css and change the value of --accent at the top.
  Change text, phone number, email, WhatsApp, Instagram or Facebook links
    Open index.html and search for the text or link you want to change.
  Add Instagram photo thumbnails
    The strip near the bottom is the "strip" list in script.js.
