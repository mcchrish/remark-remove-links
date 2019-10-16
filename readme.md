# remark-remove-links

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to remove all links, references, and
definitions.
Similar to [remark-unlink](https://github.com/remarkjs/remark-unlink) but
allows images.

Original motivation was to process Markdown documents in a way that would make
it easier to read as a plain text.
On an ebook reader or a piece of paper the links are useless and look ugly.

## Install

[npm][]:

```sh
npm install remark-remove-links
```

## Use

Say we have the following file, `example.md`.
Imagine section titles and URLs a bit longer though.

```markdown
## TOC

- [section 1](#section-1)
- [section 2](#section-2)

## section 1

Section [content][1] may include some [links](https://domain.name/path).

[1]: https://domain.name/path

## section 2

![some images are here also](https://gif.com/1.gif)

More content.
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var remark = require('remark')
var removeLinks = require('remark-remove-links')

remark()
  .use(removeLinks)
  .process(vfile.readSync('example.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```markdown
## TOC

- section 1
- section 2

## section 1

Section content may include some links.

## section 2

![some images are here also](https://gif.com/1.gif)

More content.
```

## API

#### `remark().use(removeLinks)`

Plugin to remove all links, references, and definitions.

## Security

Use of `remark-remove-links` does not involve [**rehype**][rehype]
([**hast**][hast])or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Contribute

See [`contributing.md`][contributing] in [`mcchrish/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © Michael Chris Lopez

[build-badge]: https://img.shields.io/travis/mcchrish/remark-remove-links/master.svg

[build]: https://travis-ci.org/mcchrish/remark-remove-links

[coverage-badge]: https://img.shields.io/codecov/c/github/mcchrish/remark-remove-links.svg

[coverage]: https://codecov.io/github/mcchrish/remark-remove-links

[downloads-badge]: https://img.shields.io/npm/dm/remark-remove-links.svg

[downloads]: https://www.npmjs.com/package/remark-remove-links

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-remove-links.svg

[size]: https://bundlephobia.com/result?p=remark-remove-links

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/mcchrish/.github

[contributing]: https://github.com/mcchrish/.github/blob/master/contributing.md

[support]: https://github.com/mcchrish/.github/blob/master/support.md

[coc]: https://github.com/mcchrish/.github/blob/master/code-of-conduct.md

[license]: license

[remark]: https://github.com/mcchrish/remark

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
