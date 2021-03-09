# find 명령어

find 명령어는 리눅스에서 파일 및 디렉토리를 검색할 때 사용하는 명령어입니다.

여러 옵션(type,perm,name,mtime...)을 이용하여 원하는 파일을 검색할 수 있고 exec 옵션을 사용하여 검색한 파일을 제어할 수 있습니다.

## 사용 예

현재 경로의 파일,디렉토리 전부를 출력

```bash
find .
```

현재 경로에서 파일만 출력 (-type f)

```bash
find . -type f
```

현재 경로에서 디렉토리만 출력 (-type d)

```bash
find . -type d
```

하위 디렉토리 검색하지 않기(-maxdepth 1)

```bash
find . -maxdepth 1
```

현재 경로의 파일 중 권한이 644(-perm 644)인 것만 출력

```bash
find . -type f -perm 644
```

현재 경로의 파일 중 파일 상태 변경이 5일 이상(-mtime +5)된 것을 출력

```bash
find . -type f -mtime +5
```

현재 경로에서 *.jar 이름을 가진 것들(-name "*.jar")을 찾아서 출력

```bash
find . -name "*.jar"
```

현재 경로의 파일 중 파일 상태 변경이 5일 이상(-mtime +5)되고 *.jar 이름을 가진 것들(-name "*.jar")을 찾아서 출력

```bash
find . -type f -mtime +5 -name "*.jar"
```

현재 경로의 파일(-type f) 중 *.jar 이름을 가진 것들(-name "*.jar")을 찾아서 "ls -l"로 출력(-exec ls -l {} \;)

```bash
find . -type f -name "*.jar" -exec ls -l {} \;
```
