# edX CAPA refactor

This repo contains examples of CAPA problem and response types, leveraging the edX Pattern Library to provide true representations of how each problem type should look.

Additionally it contains proper and expected markup and OLX to work with.

## Quick start

We use Jekyll to view this work locally. To get started:

* clone this repo
* run `npm install` to grab any packages and dependencies
* ensure Grunt and the CLI are installed
  * run `npm install -g grunt` if you don't have it installed
  * run `npm install -g grunt-cli` if you don't have it installed
* ensure Jekyll is installed
  * `gem install jekyll`
* launch the CAPA preview site with `grunt serve`

The site is viewable at http://localhost:4000 and changes to Jekyll files and `edx-capa.scss` are watched.

### Troubleshooting

During your first serve, Grunt may complain about a stylesheet path. The Pattern Library files assume a certain directory structure (bug to be filed) so you'll need to modify the file paths in the four following files before you can continue:

* the path should be `../../../../` in the following:
  * `edx-pattern-library-ltr.scss`
  * `edx-pattern-library-rtl.scss`
* the path should be `../../../../../` in the following:
  * `_ltr.scss`
  * `_rtl.scss`
