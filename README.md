# React js

## 개발 환경 구성

- VS Code 설치
    - 프로젝트 폴더 생성 - VS Code에서 Open

- 라이브러리 설치
    - CMD / Terminal 에서 설치
    - node.js 설치(설치파일 설치 가능)
    - yarn 설치
    - 설치된 라이브러리 버전 확인 - 설치 여부 확인

- React project 설치
    - npx create-react-app 설치폴더이름

- CMD / Terminal 모드 명령어
    - windows
        - 파일/목록 : dir
        - 화면 클리어 : cls
        - 폴더 경로 이동 : cd
    - mac
        - 파일/목록 : ls
        - 화면 클리어 : clear
        - 폴더 경로 이동 : cd

- 로컬 서버 호스트
    - name : localhost
    - ip 주소 : 127.0.0.1
    - port 번호 : 같은 주소를 공유하면 서로다른 웹사이트를 표시

- 폴더/파일 구조
    - node_modules : node module 저장된 폴더
    - public : 최종으로 화면에 보이는 리소스가 저장되는 폴더
        - index.html : 브라우저에서 최종 표시되는 메인 페이지
            - index : 서버에서 기본 적용되는 파일이름 : URL에 파일이름이 포함되지 않아도 됨
    - src : 실제로 프로그래밍하는 Component 파일들이 저장되는 폴더
        - Component 내용이 HTML Contents / Structure로 렌더링됨
        - index.js : App.js의 내용이 모이는 파일 => index.html 파일로 렌더링
        - App.js : component 내용이 모이는 파일 => index.js로 렌더링 됨

```
작업된 component 파일 => App.js에 component가 모임
App.js => index.js 파일에 전달됨
index.js => index.html에 렌더링된 내용 표시

** component 프로그래밍 / 작업
```

## React js 개념

- 공식 홈페이지 : https://ko.reactjs.org/

- 개발방식 비교
    - 일반 개발 : HTML, CSS, JS 3가지 언어의 밸런스를 유지하고 사용해서 정적 개발
    - React 개발
        - 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리
        - React 라이브러리와 javascript 언어를 사용해서 동적 개발

- 구현방식 비교
    - 일반 개발 : 각 페이지마다 파일 구분(여러개의 페이지로 구성)
    - React 개발 : SPA(Single Page Application)
        - SPA : 물리적으로 페이지 구분이 되지 않고 페이지 내용만 변경할 수 있도록 개발하는 방식
            - AJAX
            - Reactjs routing

- Virtual DOM
    - 가상 돔(HTML Element 객체화)
    - DOM 복사본 - 메모리에 저장
    - 메모리상에서 필요한 기능 실행
    - 최종적으로 반영할 때만 렌더링 : 기존 DOM과 비교해서 변경된 부분만 렌더링
    - 일반 개발
        - DOM 직접 제어 : document.querySelector() - DOM Access
        - CRUD로 대표되는 기능이 동작할 때 마다 매번 렌더링
    
- Component : 작은 단위로 나누어준 자바스크립트 코드 블럭
    - HTML 전체 Structure / Contents를 작은 단위로 나누어 구현 => 구조화
    - Component를 재사용 / 공통 사용
    - 자바스크립트 개발은 서버개발과 연관해서 데이터를 다룰 수 있음

## JSX(Javascript Syntax eXtension / JavaScript XML)

- HTML 마크업 언어를 별다른 기호를 사용하지 않고 그대로 Javascript 구문처럼 사용할 수 있는 문법
- babel.js 가 JSX를 사용가능하게 해줌

- JSX는 return 안에 하나의 Element 영역으로 그룹화 되어야 함
- JSX는 XML문법을 따름 => self-close
    - 빈 요소(Empty Element)의 경우 시작 태그 끝부분에 /를 사용해서 닫아줘야 함
    - self-close 태그

- Fragment : 하나의 영역으로 그룹화 되어야 할때 실제 태그로 렌더링되지 않도록 해줌
    - <React.Fragment></React.Fragment>
    - 축약 표현 : <></>

- 변수 사용하기
    - {변수이름}

- class, id 표시
    - id attribute 형태
    - className attribute 형태

## props

- properties => props : 객체 데이터
- component 사이에서 데이터를 전달할 때 사용

- 객체, 배열 데이터 : 데이터 집합 형태
    - 구조 분해 할당 : 데이터를 추출해서 변수를 단순하게 사용할 수 있도록 하는 방법

- props 객체 데이터의 값을 전달할 때 구조 분해 할당 사용하는 형태

- props.children : component 내용을 다른 component에 전체 포함시킬 때 사용

## 조건부 렌더링

- 조건 결과(true/false)에 따라 다른 HTML Element를 렌더링

## React에서 CSS를 작성하는 방식

- CSS-in-JS
    - JS파일에 CSS를 포함
    - Component에 css를 같이 작성
    - 해당 Component의 스타일만 적용
    - Component 별로 css 관리가 용이
    - 공통 사용할 수 없음
    - css에서 상태변화 구분을 할 수 없음
    - 구현 방식 : styled-component

- CSS-in-CSS
    - CSS 파일을 따로 생성해서 CSS구현
    - 구현방식 : CSS Module

## React Event

- event와 실행 함수를 연결
- 일반 javascript에서는 addEventListener 이벤트 핸들러 사용
- 이벤트가 발생되는 Element에 직접 작성 : 인라인 방식 작성
- 이벤트와 함수를 연결했을 때 이벤트 발생시 함수가 실행되어 데이터는 없데이트 됨
    => Hook을 사용하지 않으면 리렌더링이 되지 않아 웹페이지에는 반영되지 않음

```
on이벤트종류 = {함수이름}

Ex) onClick={myFunction}
```

## React Hook

- Hook은 상태값 관리와 여러 React 기능을 사용할 수 있음
- 상태값 관리
    - 상태 변경 : 렌더링 된 페이지에서 상태가 변경되는 것 => 데이터 업데이트
    - 데이터가 변경/업데이트 되었을 때 => 변경된 데이터가 화면에 반영
    - 첫 렌더링 => 데이터 변경 => 리렌더링(변경된 데이터가 화면에 반영되도록 다시 렌더링)

## Hook API

### useState

- 초기값을 지정한 후, 그 값을 사용해서 상태를 표현하는 값(데이터), 그 값을 설정(지정)하는 함수를 반환함

```
useState() => 값, set 함수를 반환

let stateFunction = useState(초기값);

stateFunction[0] = 상태 값(변수)
stateFunction[1] = 상태 set 함수

// 구조 분해 할당

const [state, setState] = useState(initState);

state : initState 사용해서 값이 저장되는 변수
setState : 값을 지정(변수에 값을 저장)하는 함수
initState : 초기값
```

### useRef

- 초기값을 지정하지 않고 사용하는 형태 : 특정 DOM에 Access
- 초기값을 지정하면 current 프로퍼티에 값을 저장해서 전역 변수처럼 사용할 수 있음
    - current 값이 변경되도 리렌더링이 발생되지 않음
    - 리렌더링과 상관없이 값을 전역으로 변경가능하도록 사용할 때

## 배열 데이터 렌더링(React CRUD)

### 배열 데이터 생성/추가(Create)

- 객체 데이터 전체 배열 : 데이터의 상태 변화가 생기기 때문에 상태 관리가 필요함
- 객체 데이터 배열 원소 변수 : 새로 입력되는 객체를 관리하는 변수 / 변수값의 상태 변화가 생기기 때문에 상태 관리가 필요함
- 객체 데이터 전체 배열에 새로운 객체가 추가 될때 인덱스 번호의 관리가 필요함
    - 객체 데이터가 추가될 때 인덱스 번호는 1씩 증가
    - 인덱스 번호는 여러 컴포넌트에서 전역 변수처럼 사용할 수 있어야 함 : useRef

### 배열 데이터 표시(Read)

- JSX 사용해서 화면에 렌더링
- 배열 정적 렌더링
- 배열 동적 렌더링
    - map 함수 사용
        - 전체 배열에서 각 원소별 연산을 처리 / 처리된 결과를 새로운 배열로 반환
        - map 함수를 사용해서 배열을 동적 생성시, 각 객체 데이터의 원소중 고유하게 사용할 수 있는 값을 사용해서 key 값을 지정해야 함

### 배열 데이터 수정(Update)

### 배열 데이터 삭제(Delete)

## Todo App mini project

- HTML, CSS 렌더링
    - HTML, CSS 일반개발 : 전체 구조 파악이 용이
    - React Component로 분해
    - CSS code중에 폰트설정, reset css 코드 처럼 전체 적용되어야 하는 css는 전역 설정 : App.css에 작성
```
header : TodoHeader.js

contents : TodoContents.js
    - list container : TodoList.js
        - list item : TodoItem.js
    - status : TodoStatus.js

footer : TodoFooter.js
```

- JS 기능 구현
