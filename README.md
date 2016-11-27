# angular-meteor.com

This repository contains the actual source code of the `angular-meteor.com` website, which uses `angular-meteor-tutorial-infrastructure` in order to generate static HTML website from Git managed tutorials (powered by `tortilla` package).

## Generate static website for local usage

    $ npm install
    $ npm run generate

Then all of the generated HTML files will be in: `./static-website/` directory.

## Generate static website for publishing to gh-pages

    $ npm install
    $ npm run generate
    $ npm run deploy

## Development

Install modules first:

    $ npm install

And in two different Terminal tabs:

    $ npm start
    $ npm run watch

Open you browser [http://localhost:3000](http://localhost:3000) !

## TODO

- [ ] Angular 2 API docs missing `bootstrap` page
- [ ] Add "improve this code" for diff box