# Heap Sort (힙정렬)

힙 정렬은 비교기반 정렬 알고리즘으로 선택정렬의 향상된 버전으로 볼 수 있습니다.

선택정렬과 유사하게 정렬된 영역과 정렬되지 않은 영역으로 나누고 정렬되지 않은 영역의 가장 큰 요소를 추출한 후 정렬된 영역에 삽입합니다.

선택정렬과 다른 점은 힙 정렬은 정렬되지 않은 영역의 선형탐색에 시간을 낭비하지 않습니다.

잘 구현된 퀵 정렬보다는 실행속도가 다소 느리며 O(nlogn)의 시간복잡도를 가집니다.

## Heap Sort 정렬과정

1. 정렬해야 할 요소들로 최대 힙 트리 를 구성합니다. (내림차순으로 정렬은 최소 힙 트리)
    - 최대 힙: 완전 트리이면서 모든 노드가 자식들보다 큰 트리
    - 최소 힙: 완전 트리이면서 모든 노드가 자식들보다 작은 트리
2. 가장 큰 수(루트에 위치)를 힙에서 꺼내 배열의 마지막 요소와 교환합니다.
3. 위치를 바꾼 후 루트노드부터 다시 힙을 구성합니다. (이미 정렬된 마지막 노드를 제외)

### 1) 최대 힙 구성

초기상태: (8 2 7 1 6 9 3)

i = 2
- (8 2 **7** 1 6 <u>9</u> <u>3</u>), 7 < 9 swap --> (8 2 9 1 6 7 3)

i = 1
- (8 **2** 9 <u>1</u> <u>6</u> 7 3), 2 < 6 swap --> (8 6 9 1 2 7 3)

i = 0
- (**8** <u>6</u> <u>9</u> 1 2 7 3), 8 < 9 swap --> (9 6 8 1 2 7 3)
- (9 6 **8** 1 2 <u>7</u> <u>3</u>), 8 > 7, 8 > 3 pass --> (9 6 8 1 2 7 3)

결과: (9 6 8 1 2 7 3)

### 2) 정렬

(9 6 8 1 2 7 3)
- swap and delete --> (3 6 8 1 2 7)
- (**3** <u>6</u> <u>8</u> 1 2 7), 3 < 8 swap --> (8 6 3 1 2 7)
- (8 6 **3** 1 2 <u>7</u>), 3 < 7 swap --> (8 6 7 1 2 3)
- heap: (8 6 7 1 2 3), sorted: (9)

(8 6 7 1 2 3)
- swap and delete --> (3 6 7 1 2)
- (**3** <u>6</u> <u>7</u> 1 2), 3 < 7 swap --> (7 6 3 1 2)
- heap: (7 6 3 1 2), sorted: (8 9)

(7 6 3 1 2)
- swap and delete --> (2 6 3 1)
- (**2** <u>6</u> <u>3</u> 1), 2 < 6 swap --> (6 2 3 1)
- heap: (6 2 3 1), sorted: (7 8 9)

(6 2 3 1)
- swap and delete --> (1 2 3)
- (**1** <u>2</u> <u>3</u>), 1 < 3 swap --> (3 2 1)
- heap: (3 2 1), sorted: (6 7 8 9)

(3 2 1)
- swap and delete --> (1, 2)
- (**1**, <u>2</u>), 1 < 2 swap --> (2 1)
- heap: (2 1), sorted: (3 6 7 8 9)

(2 1)
- swap and delete (1)
- heap: (1), sorted: (2 3 6 7 8 9)

(1)
- delete ()
- heap: (), sorted: (1 2 3 6 7 8 9)

결과: (1 2 3 6 7 8 9)

## Heap Sort 코드 (Python)

```python
def heapify(arr, index, heap_size):
    largest = index
    left_index = 2 * index + 1
    right_index = 2 * index + 2
    if left_index < heap_size and arr[left_index] > arr[largest]:
        largest = left_index
    
    if right_index < heap_size and arr[right_index] > arr[largest]:
        largest = right_index

    if largest != index:
        arr[largest], arr[index] = arr[index], arr[largest]
        heapify(arr, largest, heap_size)

def heap_sort(arr):
    length = len(arr)

    for i in range(length // 2 - 1, -1, -1):
        heapify(arr, i, length)

    for i in range(length - 1, 0 , -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, 0, i)
    return arr
```
