<h1 align="center">Hypha/Beaker Browser Example</h1>

![](assets/example.jpg)

<div align="center"><a href="dat://5b269ae56e15bd3b22c19a382c92be96bc427888f57576609477d95dc9f5796e/">dat://5b269ae56e15bd3b22c19a382c92be96bc427888f57576609477d95dc9f5796e/</a></div>

<div align="center">A little single-page-app style site generator for <a href="http://beakerbrowser.com">Beaker Browser</a>a> using <a href="https://github.com/jondashkyle/hypha">Hypha</a> and <a href="https://github.com/choojs/choo">Choo</a>.</div>

## Usage

- Format a directory of content as described in the [Hypha documentation](https://github.com/jondashkyle/hypha).
- A [Choo](http://github.com/choojs/choo) app renders your `/content`, as defined by source in `/site`

## Installation

- Clone the archive into an empty Dat
- Run `npm install` inside `/site` to install the dependencies
- Run `npm build` to build the source

Of course, you can also just go ahead and clone the Dat archive to get all the bundled files.

`dat://5b269ae56e15bd3b22c19a382c92be96bc427888f57576609477d95dc9f5796e/`

## Development

- Run `npm start` to watch for changes to your site’s source during dev.
- Run `npm run build` to build your site!

### Views

Creating a view involves placing a js file in the `site/views` directory. This requires some manual configuration. An example of a minimal view:

```js
var html = require('choo/html')

module.exports = function example (state, emit) {
  return html`
    <div>
      ${state.page.title}
    </div>
  `
}
```

We’ll save this as `example.js`. Next, add the view to `site/views/index.js`:

```js
module.exports = {
  default: require('./default'),
  example: require('./example')
}
```

To access the view from within one of our pages, add a `view` field to the `index.txt` file:

```
title: Example Page
----
view: example
```

You can see how this can easily be extended to exposing any number of options by using the value of a field to select a key within an object in your build.

For a more comprehensive unpacking of how this works, take a look at the [information page](content/information/index.txt).

## Notes

- If cloning into a Dat archive within Beaker, ensure you edit your `dat.json` file to include `{ "fallback_page": "index.html" }`. This will be fixed in an upcoming version of Beaker.

## Todo

- [ ] Add a better non-p2p page
- [ ] Typography credit (info page?)
- [ ] Use the Enoki Panel in /panel
