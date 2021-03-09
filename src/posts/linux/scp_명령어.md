# SCP 명령어

scp(secure copy)는 ssh 통신을 이용한 파일 전송 명령어입니다.

## 사용법

```bash
scp file user@host:/path/to/file                        # 리모트 서버로 파일 전송
scp user@host:/path/to/file /local/path/to/file         # 리모트 서버에서 파일 가져오기
scp file1 file2 user@host:/path/to/directory            # 여러 파일 전송
scp -r /path/to/directory user@host:/path/to/directory  # 디렉토리 전체 전송

# (옵션)
# -r      : 디렉토리 전송
# -v      : 전송 상세내용 보기
# -C      : 압축하여 전송
# -l 800  : bandwith를 800으로 제한
# -p      : 전송하는 파일의 원래 속성을 보존
# -q      : output을 숨김
```
