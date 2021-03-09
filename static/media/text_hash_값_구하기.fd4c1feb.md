# text hash 값 구하기

python의 hashlib를 이용하여 여러 hash 알고리즘(md5,sha1,sha224,sha256,sha384,sha512,...)에 매칭되는 hash 값을 얻을 수 있습니다.

아래에 hashlib의 hash 함수를 이용한 hash값 생성 예제코드를 작성해보았습니다.

※ hash 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. (hash 함수로 얻어지는 값을 hash 값이라고 합니다.)

## 예제 코드

```python
import hashlib

HASH_NAME = "md5" # hash algorithm (md5,sha1,sha224,sha256,sha384,sha512)

txt = input("Enter the text to convert: ")

text = txt.encode('utf-8')
md5 = hashlib.new(HASH_NAME)
md5.update(text)
result = md5.hexdigest()

print("HASH: %s" % result)
```

## 실행 결과

password를 입력하였을 때 password의 md5 해시 값인 5f4dcc3b5aa765d61d8327deb882cf99를 얻을 수 있습니다.

```text
Enter the text to convert: password
HASH: 5f4dcc3b5aa765d61d8327deb882cf99
```
