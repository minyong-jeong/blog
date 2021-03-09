# Hook

Hook은 React 16.8버전에 새로 추가되었습니다.

Hook은 함수 컴포넌트에서 React 상태와 생명주기 기능을 연동 할 수 있게 해주는 함수입니다.

Hook을 이용하여 Class 작성없이 함수형 컴포넌트에서도 상태를 관리할 수 있습니다.

## useState

useState는 함수형 컴포넌트에서 가변적인 상태를 지닐 수 있도록 해주는 Hook입니다.

```javascript
import React, { useState } from "react";

const example = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("text");

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};
```

useState의 함수 파라미터 값은 state의 default 값 입니다. (useState(0)일 경우 0이 default 값)

useState 함수를 호출하면 배열을 반환합니다. ([state 값, state 설정 함수]를 반환)

state 설정 함수(setValue)에 파라미터를 넣어 호출하면 state 값(value)은 전달받은 파라미터 값으로 바뀌고 컴포넌트가 리렌더링 됩니다.

하나의 컴포넌트 내에 여러개의 state 변수를 선언할 수 있습니다. (value, text)

## useEffect

useEffect는 리액트 컴포넌트가 렌더링될때마다 특정 작업을 수행하도록 설정할 수 있는 함수입니다.

React class의 componentDidMount, componentDidUpdate, componentWillUnmount등을 하나의 API로 합친 형태입니다.

```javascript
import React, { useState, useEffect } from "react";

const example = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("렌더링 될때 실행");
  });

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};
```

useEffect에 두번째 파라미터를 따로 넣지 않으면 렌더링이 될때마다 실행이 됩니다.

```javascript
useEffect(() => {
  console.log("마운트 될때만 실행");
}, []);

useEffect(() => {
  console.log("특정 값(value)이 업데이트 될때만 실행");
}, [value]);

useEffect(() => {
  console.log("렌더링 될때 실행");
  return () => {
    console.log("컴포넌트를 unmount할 때 실행");
  };
});
```

useEffect는 기본적으로 렌더링이 된 직후마다 실행되며 두번째 배열에 무엇을 넣으냐에 따라 실행조건이 달라집니다.

- 두번째 파라미터가 [] 인 경우: 마운트 될때만 실행
- 두번째 파라미터가 [value] 인 경우: 특정 값(value)이 업데이트 될때만 실행. 값에는 useState가 관리하는 상태 또는 props로 전달받은 값을 넣어주면 됩니다.

effect를 해제할 필요가 있다면 해제하는 함수를 반환합니다.

- 해제하는 함수반환: 컴포넌트를 unmount할 때 실행

## Hook의 사용 규칙

Hook을 사용할 때는 두가지 규칙을 준수해야 합니다.

1. 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩문 내에서 Hook을 실행하면 안됩니다.

2. React 함수 컴포넌트에서만 실행해야 합니다. 일반 javascript 함수에서는 Hook을 호출해서는 안됩니다.

## 참고

- [React 공식 Doc](https://ko.reactjs.org/docs/hooks-intro.html)
- [리액트를 다루는 기술](https://book.naver.com/bookdb/book_detail.nhn?bid=15372757)
