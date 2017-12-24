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

  .circle {
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    margin: 0 0.2em;
    height: 0.8em;
    width: 0.8em;
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