<h1 align="center">Hypha Beaker Example</h1>

A little single-page-app style site generator for Beaker using [Hypha](https://github.com/jondashkyle/hypha).

## Usage

- Format a directory of content as described in the [Hypha documentation](https://github.com/jondashkyle/hypha).
- A choo app renders your `/content`, as defined by source in `/site`

## Installation

- Clone the archive into an empty Dat
- Run `npm install` inside `/site` to install the dependencies
- Run `npm build` to build the source

Of course, you can also just go ahead and clone the Dat archive to get all the bundled files.

`dat://5b269ae56e15bd3b22c19a382c92be96bc427888f57576609477d95dc9f5796e/`

## Development

- Run `npm start` to watch for changes to your site’s source during dev.
- Run `npm run build` to build your site!

## Notes

- If cloning into a Dat archive within Beaker, ensure you edit your `dat.json` file to include `{ "fallback_page": "index.html" }`. This will be fixed in an upcoming version of Beaker.

## Todo

- [ ] Cleanup site source
- [ ] Use the Enoki Panel in /panel
