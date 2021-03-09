# SSH 포트포워딩

포트포워딩은 하나의 IP 주소와 포트 번호 결합의 통신 요청을 다른 곳으로 넘겨주는 네트워크 주소 변환(NAT)의 응용입니다. (위키피디아 참조)

SSH 포트포워딩은 SSH 서버를 Proxy처럼 활용하여 터널링(tunneling)이라고도 부르며 통신시 SSH를 이용하기 때문에 통신내용이 암호화되어 전송됩니다.

## 로컬 포트포워딩

SSH Client에 리스닝 포트를 열어 SSH Server의 지정포트에 연결합니다.

아래는 로컬 8080번 포트를 Remote host의 localhost:80에 연결하는 명령어입니다.

```bash
ssh -L 8080:localhost:80 $REMOTEHOST # 8080->$REMOTEHOST의 localhost:80
```

## 리모트 포트포워딩

SSH Server에 이스닝 포트를 열고 SSH Client의 지정포트에 연결합니다.

아래는 로컬 80번 포트에 Remote host의 localhost:8080을 연결하는 명령어입니다.

```bash
ssh -R 80:localhost:8080 $REMOTEHOST # $REMOTEHOST의 localhost:8080 -> 80
```
