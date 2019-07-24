# デザインガイドライン

## 最初に読む
- [2018年のフロントエンドエンジニア/デザイナーに知ってほしいAtomic Design](https://qiita.com/kahirokunn/items/f188b2362a4d3cdf0204)
- [フロントエンドのコンポーネント設計に立ち向かう](https://qiita.com/seya/items/8814e905693f00cdade2)

## 実践

### コンポーネントの分解

|   単位    |                                       説明                                        |              例               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------- |
| atoms     | htmlのタグに該当する部品。プリミティブ（汎用）。                                  | `Button`, `Input`, `Headding` |
| molecules | 追加/削除ボタンのような独立できないパーツ。<br>バリューオブジェクト（目的特化）。 | `SearchForm`, `Lede`          |
| organisms | moleculesと違って、単一の機能でなく複数の役割を持つ。                             | `Header`, `Footer`, `SideBar` |
| templates | organismsを組み合わせたもの。                                                     |                               |
| pages     | reduxにおける `Containerコンポーネント`                                           |                               |

- organismsは別のorganismを内包できるし、直下にatomsを置くことも出来る。
- moleculeは他のmoleculeに依存してはならない。



- importは絶対パスで指定する
    ごちゃついてきたら適宜alias設定する。[参考](https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9)


## 展望

Atomic designはコンポーネント志向での開発において、割とスタンダードなデザイン手法だが、
難解だし、いつまでたっても解釈がまとまらない。
派生したデザイン手法を生み出したい。
