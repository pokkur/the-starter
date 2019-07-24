# Usage

## Change Info

### 2019-07-15

- from Vue to React

### 2018-05-28

- add stylelint
- add pre-commit linting

## Setup

install packages

```sh
yarn
```

## Branches

|      branch      |                  description                  |
| ---------------- | --------------------------------------------- |
| master           | no preprocessor                               |
| feature/extended | pug,scss,postcss,autoprefixer,eslint,prettier |
| feature/react    | scss,postcss,autoprefixer,eslint,prettier     |

## Commands

|     command     |         script         |
| --------------- | ---------------------- |
| yarn dev        | 開発ビルド             |
| yarn build      | リリースビルド         |
| yarn start      | webpack-dev-server     |
| yarn lint       | eslint                 |
| ~~yarn nibble~~ | eslint結果の概要を表示 |
| yarn prettier   | prettier               |

## Todo

- [ ] Speed Measure Plugin (stylelint-processor-styled-components絡みのissue)
- [ ] nibble setting
- [ ] [react-axe](https://github.com/dequelabs/react-axe)
- [ ] imagemin
