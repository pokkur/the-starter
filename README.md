# Usage

## Change Info

### 2018-05-28

- add stylelint
- add pre-commit linting

## Setup

install npm

```sh
yarn
```

## Branches

|      branch      |                    description                     |
| ---------------- | -------------------------------------------------- |
| master           | no preprocessor                                    |
| feature/extended | pug, scss, postcss, autoprefixer, eslint, prettier |
| feature/vue      | feature/extend, vue                                |

## Commands

|    command    |         script         |
| ------------- | ---------------------- |
| yarn dev      | 開発ビルド             |
| yarn build    | リリースビルド         |
| yarn start    | webpack-dev-server     |
| yarn lint     | eslint                 |
| yarn nibble   | eslint結果の概要を表示 |
| yarn prettier | prettier               |

## Plans

- [ ] imagemin
- [ ] storybook
