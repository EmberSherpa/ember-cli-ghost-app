[FAILED EXPERIMENT DO NOT USE]

This library was going to use EmberCLI's server mechanism to add necessary headers to work around Ghost's private API. This proved to be wrong approach because EmberCLI's server is not designed for production. A more reliable way would be to use Ghost's API, which is not available yet. 

# ember-cli-ghost-app

`ember-cli-ghost-app` adds a Ghost app to your Ember project. This addon adds /ghost to your Express server and Ghost will automatically start when you run `ember serve`.
It also exposes **/ghost/api/v0.1/posts** endpoint which you can use to pull posts from Ghost app.

**WARNING**: Ghost source code is included as a bundledDependency of this library. The included version has been modified in several places to disable the frontend and expose /posts API endpoint. You can compare changes in [embersherpa/TryGhost](https://github.com/embersherpa/Ghost/compare/ember-cli-ghost-app-hacks) repo.

## Installation

* `npm install --save ember-cli-ghost-app`
* `ember generate ghost-app blog` ( you can pass --production-url=<your_blog_url> to not have to do that later )
* `ember serve`
* Visit [http://locahost:4200/ghost](http://locahost:4200/ghost) to finish setup

## Running

* `ember server`
* Visit your app at http://localhost:4200/ghost.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
