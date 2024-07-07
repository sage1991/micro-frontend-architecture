# Npm Workspaces Example

npm 의 workspaces 기능을 이용 하는 방법 입니다.  
`package.json` 의 workspaces 속성에 등록된 package 들은 node_modules 내부에 Symbolic link가 생성 되고  
이를 npm 패키지로 사용 할 수 있게 됩니다.

```json
{
  "workspaces": [
    "packages/*"
  ]
}
```

workspace 로 등록된 package 들의 script 는 root 에서 아래와 같이 일괄적으로 실행 할 수 있습니다.

```shell
# --workspace: workspace 로 등록된 모든 package 들의 start 스크립트를 실행 합니다.
# --include-workspace-root: root 경로의 스크립트도 실행 합니다.
# --if-present: 해당 스크립트가 존재할 경우에만 실행 합니다.
$ npm start --workspace --include-workspace-root --if-present
```
