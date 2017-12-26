module.exports = `
  html {
    font-size: 2vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings:"kern" 1; 
    -ms-font-feature-settings:"kern" 1; 
    -o-font-feature-settings:"kern" 1; 
    -webkit-font-feature-settings:"kern" 1; 
    font-feature-settings:"kern" 1;
    font-kerning: normal; 
  }

  body {
    line-height: 1.15;
  }

  .ha {
    hyphens: auto;
  }

  hr {
    height: 2px;
    background: #fff;
    border: 0;
  }

  code, pre {
    background: rgba(127, 127, 127, 0.25);
    border-radius: 0.25em;
    padding: 0 0.15em;
    font-family: menlo, monaco, monospace;
  }

  code {
    display: inline-block;
  }

  pre {
    font-size: 0.75em;
    padding: 1rem;
    overflow: auto;
  }

  pre * {
    background: none;
    padding: 0;
  }

  .copy {
    max-width: 38rem;
  }

  .copy > * + * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    padding-top: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }


  ul li {
    padding-left: 1rem;
    position: relative;
  }

  ul li:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '•';
  }

  ol.featured li { position: relative }
  ol.featured li:before {
    background: #fff;
    content: '';
    position: absolute;
    height: 0.075em;
    width: 1rem;
    left: 0;
    top: 0.45em;
  }

  .ofct {
    object-fit: contain;
  }

  .circle {
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    margin: 0 0.2em;
    height: 0.8em;
    width: 0.8em;
  }

  .line-through {
    background-image: url(/assets/line.svg);
    background-size: 1em;
    background-repeat: repeat;
  }

  .wbba {
    word-break: break-all;
  }

  .ti1 {
    text-indent: 1em;
  }

  iframe {
    display: block;
  }
  
  @font-face {
    font-family: 'Authentic';
    src: url('/assets/AUTHENTIC-Sans.woff2') format('woff2'),
         url('/assets/AUTHENTIC-Sans.woff') format('woff');
  }
`