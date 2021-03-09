# REST API 호출

파이썬의 requests, urllib 모듈을 사용하여 REST API 호출하는 방법을 정리하였습니다.

※ requests는 Apache License 2.0의 라이센스를 가진 python HTTP 라이브러리 ([requests 공식문서](https://requests.readthedocs.io/en/latest/))

※ urllib는 URL 작업을 위한 여러 기능을 가지고 있는 python 라이브러리 ([urllib 공식문서](https://docs.python.org/ko/3/library/urllib.html))

## 1. requests 이용 예시

```python
import requests
import json

# GET
res = requests.get('http://127.0.0.1:5000')
print(str(res.status_code) + " | " + res.text)

# POST (JSON)
headers = {'Content-Type': 'application/json; chearset=utf-8'}
data = {'title': 'dummy title', 'id': 1, 'message': 'hello world!'}
res = requests.post('http://127.0.0.1:5000', data=json.dumps(data), headers=headers)
print(str(res.status_code) + " | " + res.text)
```

## 2. urllib 이용 예시

```python
from urllib import request, parse
import json

# GET
req = request.Request('http://127.0.0.1:5000')
res = request.urlopen(req)
print(str(res.status) + " | " + res.read().decode('utf-8'))

# POST (JSON)
headers = {'Content-Type': 'application/json; chearset=utf-8'}
data = {'title': 'dummy title', 'id': 1, 'message': 'hello world!'}
req = request.Request('http://127.0.0.1:5000', headers=headers, data=json.dumps(data).encode('utf-8'))
res = request.urlopen(req)
print(str(res.status) + " | " + res.read().decode('utf-8'))
```
