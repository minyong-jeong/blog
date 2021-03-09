# Shell 명령어 실행법

Python에서 Shell 명령어를 실행하고 싶을 때가 있습니다.

파이썬의 subprocess를 활용하여 shell 명령어 실행하는 예제코드를 작성해보았습니다.

※ subprocess는 새로운 프로세스를 생성하여 input/output/error pipes와 연결을 제공하는 파이썬의 모듈

## shell 명령어 실행 예제코드

run_shell_cmd 함수의 인자로 쉘 명령어를 보내어 결과 값을 출력하는 예제입니다.

"echo test!!"라는 명령어를 입력하였을 때 "test!!"라는 결과 값을 나오는 것을 확인할 수 있습니다.

```bash
import subprocess

def run_shell_cmd(cmd):
    cmd_list = cmd.split(' ')
    try:
        sp = subprocess.run(cmd_list, stdout=subprocess.PIPE)
        print(sp.stdout.decode("utf-8"))
    except Exception as e:
        print(e)

my_cmd = 'echo test!!'
run_shell_cmd(my_cmd)
```
