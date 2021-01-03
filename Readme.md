<!-- Heading -->

# 리팩터링 2판 스터디

<!-- Line -->

개인 프로젝트를 진행하며 **좋은 코드란 무엇인가**?에 대해 알아보고자 클린코드에 이어 리팩터링 2판을 구매하여 책의 예시를 따라가보고자 한다. (2021/01/03 시작)

## Chapter 01
[코드 보기](https://github.com/harrykim14/Refactoring-2nd-Edition/blob/master/01.%20extract%20function.js)
* 함수 추출하기 
    - 함수 및 변수는 명확한 이름으로 변경하기
    - 좋은 코드라면 하는 일이 명확히 드러나야하며 변수 이름은 커다란 역할을 함

* 조건부 로직을 다형성으로 바꾸기
    - 타입 코드 대신 서브클래스를 사용하도록 변경
    - 다형성을 이용하여 필요 할 때 오버라이드하게 만들기

> ### 챕터1에서 정리하는 리팩터링 작업의 단계
1. **반복문 쪼개기**로 누적 변수값을 분리
2. **문장 슬라이드하기**로 초기화 문장을 누적 코드 앞으로 옮김
3. **함수 추출하기**로 별도 함수로 추출
4. **변수 인라인하기**로 변수 제거


