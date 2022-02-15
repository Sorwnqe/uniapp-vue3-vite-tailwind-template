# 本项目来自 vue/cli

# ts+vue3+vite+tailwind

## 运行

首次需要

yarn husky

```
yarn dev

yarn deploy

```

```
主要插件：uni-app
```

## 提交规范(必须遵守，不然无法提交)

提交前会自动 lint

```
fix: message
```

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ | --- |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |     |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |     |
| ci       | 持续集成修改                                           |     |
| docs     | 文档修改                                               |     |
| feat     | 新特性、新功能                                         |     |
| fix      | 修改 bug                                               |     |
| perf     | 优化相关，比如提升性能、体验                           |     |
| refactor | 代码重构                                               |     |
| revert   | 回滚到上一个版本                                       |     |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |

### 生成 CHANGELOG

```
yarn log
```

### .vscode里包含uni-app的代码提示，不要加入到gitignore中，忽略文件需要单独指定