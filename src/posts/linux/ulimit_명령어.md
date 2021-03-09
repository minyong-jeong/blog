# ulimit

ulimit은 프로세스의 자원 한도를 설정하는 명령어입니다.

ulimit에는 soft한도와 hard한도가 있습니다.

- soft한도: 새로운 프로그램을 생성하면 기본으로 적용되는 한도
- hard한도: 소프트 한도에서 최대로 늘릴 수 있는 한도 (슈퍼유저에 의해서만 조정가능)

/etc/security/limits.conf 파일을 수정하여 설정 값을 변경할 수 있습니다.

## 실행방법

ulimit [옵션]

- -a: 모든 제한 사항을 보여준다.
- -c: 최대 코어 파일 크기
- -d: 프로세스 데이터 세그먼트의 최대 크기
- -f: shell에 의해 만들어질 수 있는 파일의 최대 크기
- -s: 최대 스택 크기
- -p: 파이프 크기
- -n: 오픈 파일의 최대수
- -u: 프로세스 최대수
- -v: 최대 가상메모리의 양
- -S: soft 한도
- -H: hard 한도

``` text
core file size          (blocks, -c) 0          # 최대 코어 파일 크기
data seg size           (kbytes, -d) unlimited  # 프로세스 데이터 세그먼트의 최대크기
scheduling priority             (-e) 0          # 스케줄링 우선순위
file size               (blocks, -f) unlimited  # shell에서 생성되는 파일의 최대크기
pending signals                 (-i) 31206
max locked memory       (kbytes, -l) 64
max memory size         (kbytes, -m) unlimited  # 메모리 최대 크기
open files                      (-n) 65536      # 최대 오픈 파일의 수
pipe size            (512 bytes, -p) 8          # 파이프 크기
POSIX message queues     (bytes, -q) 819200
real-time priority              (-r) 0
stack size              (kbytes, -s) 8192       # 최대 스택 크기
cpu time               (seconds, -t) unlimited  # 총 누적 CPU시간
max user processes              (-u) 4096       # 프로세스 최대 수
virtual memory          (kbytes, -v) unlimited  # 최대 가상메모리 크기
file locks                      (-x) unlimited
```
