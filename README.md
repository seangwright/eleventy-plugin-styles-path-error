# eleventy-plugin-styles-path-error

Reproduction of path error with eleventy-plugin-styles

## Steps

- Clone the repo
- run `npm i`
- run `npm start`
- See error

```bash
[eleventy:dev] [11ty] Writing _site/index.html from ./src/index.njk
[eleventy:dev] [11ty] Writing _site/pages/about/index.html from ./src/pages/about.njk
[eleventy:dev] [11ty] Problem writing Eleventy templates: (more in DEBUG output)
[eleventy:dev] [11ty] > Having trouble writing template: _site/index.html
[eleventy:dev] 
[eleventy:dev] `TemplateWriterWriteError` was thrown
[eleventy:dev] [11ty] > EISDIR: illegal operation on a directory, open 'path-to-project\eleventy-plugin-styles-path-error\_site\index.html'
[eleventy:dev] 
[eleventy:dev] `Error` was thrown:
[eleventy:dev] [11ty]     Error: EISDIR: illegal operation on a directory, open 'path-to-project\eleventy-plugin-styles-path-error\_site\index.html'
```
