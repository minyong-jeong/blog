# scp를 이용한 파일전송

python의 paramiko와 scp라이브러리를 사용하여 파일전송이 가능합니다.

## 라이브러리 설치

scp 전송을 위해 사용될 paramiko, scp 라이브러리를 설치합니다.

```bash
pip install paramiko
pip install scp
```

## SSHManger 클래스

SSH 연결 및 종료, scp 전송 및 다운로드 등의 기능을 포함한 SSHManager 클래스를 생성합니다.

- create_ssh_client: SSH 세션 생성
- close_ssh_client: SSH 세션 종료
- send_file: scp를 이용한 파일 전송
- get_file: scp를 이용한 파일 다운로드
- send_command: remote 서버에서 명령어 실행

```python
import paramiko
from scp import SCPClient, SCPException

class SSHManager:
    """
    usage:
        >>> import SSHManager
        >>> ssh_manager = SSHManager()
        >>> ssh_manager.create_ssh_client(hostname, username, password)
        >>> ssh_manager.send_command("ls -al")
        >>> ssh_manager.send_file("/path/to/local_path", "/path/to/remote_path")
        >>> ssh_manager.get_file("/path/to/remote_path", "/path/to/local_path")
        ...
        >>> ssh_manager.close_ssh_client()
    """
    def __init__(self):
        self.ssh_client = None

    def create_ssh_client(self, hostname, username, password):
        """Create SSH client session to remote server"""
        if self.ssh_client is None:
            self.ssh_client = paramiko.SSHClient()
            self.ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            self.ssh_client.connect(hostname, username=username, password=password)
        else:
            print("SSH client session exist.")

    def close_ssh_client(self):
        """Close SSH client session"""
        self.ssh_client.close()

    def send_file(self, local_path, remote_path):
        """Send a single file to remote path"""
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.put(local_path, remote_path, preserve_times=True)
        except SCPException:
            raise SCPException.message

    def get_file(self, remote_path, local_path):
        """Get a single file from remote path"""
        try:
            with SCPClient(self.ssh_client.get_transport()) as scp:
                scp.get(remote_path, local_path)
        except SCPException:
            raise SCPException.message

    def send_command(self, command):
        """Send a single command"""
        stdin, stdout, stderr = self.ssh_client.exec_command(command)
        return stdout.readlines()
```

## 실행

선언한 함수들을 실행하여 전송 & 다운로드 작업을 수행합니다.

```python
ssh_manager = SSHManager()
ssh_manager.create_ssh_client("hostname", "username", "password") # 세션생성
ssh_manager.send_file("local_path", "remote_path") # 파일전송
ssh_manager.get_file('remote_path', 'local_path')  # 파일다운로드
ssh_manager.close_ssh_client() # 세션종료
```
