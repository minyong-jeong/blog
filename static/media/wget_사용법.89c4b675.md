# Python wget 사용법

Python에서 wget을 사용하는 방법입니다.

## wget 라이브러리 설치

먼저 wget을 사용하기 위해 python wget 라이브러리를 설치합니다.

``` bash
pip install wget
```

## wget으로 다운로드

wget를 import하고 wget.download를 사용하여 다운로드 받을 수 있습니다.

``` python
import wget

url = "https://github.com/minyong-jeong/minyong-jeong.github.io/raw/master/images/ryan.jpg"
wget.download(url)
```

## bar 디자인 변경 및 다운로드 위치 변경

bar_custom 함수를 만들어 wget.download의 bar변수에 할당하면 wget의 bar 디자인을 변경할 수 있습니다.

또한, wget.download에 out 값을 넣어주면 다운로드 받는 위치를 변경할 수 있습니다.

``` python
import wget
import math

def bar_custom(current, total, width=80):
    width=30
    avail_dots = width-2
    shaded_dots = int(math.floor(float(current) / total * avail_dots))
    percent_bar = '[' + '■'*shaded_dots + ' '*(avail_dots-shaded_dots) + ']'
    progress = "%d%% %s [%d / %d]" % (current / total * 100, percent_bar, current, total)
    return progress

def download(url, out_path="."):
    wget.download(url, out=out_path, bar=bar_custom)

if __name__ == "__main__":
    url = "https://github.com/minyong-jeong/minyong-jeong.github.io/raw/master/images/ryan.jpg"
    download(url)
```

bar_custom 적용하면 bar 디자인이 변경되는 것을 확인할 수 있습니다.

```text
[기존 디자인]
100% [..............................................................................] 59524 / 59524

[변경된 디자인]
100% [■■■■■■■■■■■■■■■■■■■■■■■■■■■■] [59524 / 59524]
```
