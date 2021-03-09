# python에서 md5 checksum 구하는 방법

파일을 전송, 다운로드할 때 파일의 무결성을 확인해야 하는 경우가 생긴다.

python으로 file의 md5 checksum을 구하는 방법을 정리해보았다.

## file md5 checksum 소스코드

아래의 코드를 실행하면 /path/to/file의 hash값을 얻을 수 있다.

```python
import hashlib

def calc_file_hash(path):
    f = open(path, 'rb')
    data = f.read()
    hash = hashlib.md5(data).hexdigest()
    return hash

if __name__ == "__main__":
    hash_val = calc_file_hash("/path/to/file")
    print(hash_val)
```
