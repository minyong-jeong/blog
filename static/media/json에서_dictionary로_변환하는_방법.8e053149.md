# json에서 dictionary로 변환하는 방법

파이썬에서 dictionary를 json를 변환하거나 json을 dictionary로 변환해야하는 경우가 있습니다.

json 라이브러리의 loads와 dumps를 이용하여 dictionary와 json간의 변환이 가능합니다.

아래에 dictionary와 json간의 변환에 대한 예제 코드를 작성하였습니다.

※ json은 키-값 쌍으로 이루어진 데이터를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷

※ dictionary는 파이썬의 자료형 중 하나로 키-값으로 연결되어있는 순서가 없는 집합 자료형

## 예시 코드

```python
import json

json_data = '{ "p1": { "name": "chulsu", "age": 20 }, "p2": { "name": "younghee", "age": 22 } }'
dict_data = { "p1": { "name": "chulsu", "age": 20 }, "p2": { "name": "younghee", "age": 22 } }

# Convert json to dict
result = json.loads(json_data)
print("parse_json result: %s" % type(result))

# Convert dict to json
result = json.dumps(dict_data)
print("convert_json result: %s" % type(result))
```

## 예시 코드 결과

위 예제 코드를 실행하면 아래의 결과를 얻을 수 있습니다.

결과를 확인해보면 json -> dictionary, dictionary -> json으로 잘 변환된 것을 확인할 수 있습니다.

```text
parse_json result: <class 'dict'>
convert_json result: <class 'str'>
```
