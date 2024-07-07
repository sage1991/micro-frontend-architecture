# NPM Link Example

`npm link` 명령어를 이용하여 node_modules 에 Symbolic link 를 생성하고 이를 `require` 를 통해 불러오는 예제입니다.

```shell
# ln -s 를 이용해 node_modules 내부에 Symbolic link 를 생성해도 동일하게 require 할 수 있습니다.
$ npm link ./package-a
$ npm link ./package-b
```
