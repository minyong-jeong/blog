# nmap 명령어

nmap은 호스트나 네트워크를 스캐닝 할 때 사용하는 port scanning tool입니다.

nmap을 이용하여 방화벽이 오픈되어있는지 확인할 수 있습니다.

## 사용법

nmap <옵션> <호스트>

* -sT: TCP open scan
* -sS: TCP half open scan (세션을 성립하지 않음(스텔스 스캔))
* -sF: TCP FIN scan (FIN 패킷을 이용한 스캔)
* -sN: TCP NULL scan (NULL 패킷을 이용한 스캔)
* -sX: TCP Xmas scan (FIN, PSH, URG 패킷을 이용한 스캔)
* -sP: ping을 이용한 스캔
* -sU: UDP port scan
* -O: 대상 호스트의 운영체제 판별
* -o: 스캔 결과를 텍스트파일로 저장
* -F: Fast scan
* -sV: service version
* -p: 포트선택
* -h: namp 옵션들을 확인

호스트의 특정 포트가 열려있는지 확인하는 방법

``` bash
nmap -PN 111.222.333.444 -p 8000 # nmap -PN <ip> -p <port>
```
