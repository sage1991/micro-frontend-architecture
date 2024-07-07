# Yarn classic workspaces example

npm workspaces 와 동일하게 `package.json` 의 `workspaces` 속성을 통해 패키지를 관리 합니다.

```json
{
  "workspaces": [
    "packages/*"
  ]
}
```

`yarn workspace` 커맨드 를 사용하면 루트 패키지에서 각 패키지의 script를 실행할 수 있습니다.

```bash
# a 패키지의 start 명령어를 실행
$ yarn workspace a start
```

한번에 여러 패키지의 script를 실행 하고 싶을 경우, `yarn workspaces` 커맨드를 사용 합니다.

```bash
# 모든 패키지의 start 명령어를 실행
$ yarn workspaces run start
```

workspace 간의 의존 관계를 확인하고 싶다면 `yarn workspaces info`  커맨드를 활용 할 수 있습니다.

```bash
$ yarn workspaces info
```
