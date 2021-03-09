# sudo 패스워드없이 사용

리눅스에서 sudo를 패스워드없이 사용하는 방법입니다.

root 계정으로 /etc/sudoers.d/[사용자명] 파일에 아래 내용을 추가합니다.

아래 예제에서 NOPASSWD: 를 빼면 sudo 권한만 부여 (sudo 실행시 패스워드 입력필요)

## 모든 명령어에 대한 sudo 권한 부여

- vi 에디터로 추가

```text
# vi /etc/sudoers.d/[사용자명]
# 아래 내용 입력 후 저장
[사용자명] ALL=NOPASSWD: ALL
```

- echo 명령어로 추가

```bash
# echo 명령어로 추가
echo '[사용자명] ALL=NOPASSWD: ALL' > /etc/sudoers.d/[사용자명]
```

## 특정 명령어만 sudo 권한 부여

- vi 에디터로 추가

```text
# vi /etc/sudoers.d/[사용자명]
# 아래 내용 입력 후 저장
[사용자명] ALL=NOPASSWD: [명령어1], [명령어2]
```

- echo 명령어로 추가

```bash
# echo 명령어로 추가
echo '[사용자명] ALL=NOPASSWD: [명령어1], [명령어2]' > /etc/sudoers.d/[사용자명]
```
