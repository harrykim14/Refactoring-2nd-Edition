<!-- Heading -->

# 리팩터링 2판 스터디

<!-- Line -->

개인 프로젝트를 진행하며 **좋은 코드란 무엇인가**?에 대해 알아보고자 클린코드에 이어 리팩터링 2판을 구매하여 책의 예시를 따라가보고자 한다. (2021/01/03 시작)

## Chapter 01
[코드 보기](https://github.com/harrykim14/Refactoring-2nd-Edition/blob/master/Chapter01/01-3.%20logic%20wt%20class.js)
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


## Chapter 02
~코드 보기~ 예시 코드 없음
* **리팩터링** : 소프트웨어의 겉보기 동작은 그대로 유지한 채 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법

> 리팩터링의 의미
* **특정한 방식**에 따라 코드를 정리하는 것
* 리팩터링하기 전과 후의 코드가 **똑같이 동작**해야 함
* 함수 추출하기를 거치면 콜스택이 달라져 성능이 변할 수도 있음
* 리팩터링의 목적은 **코드를 이해하고 수정하기 쉽게** 만드는 것

> 리팩터링은 언제 해야 할까?

**비슷한 일을 세 번째 하게 되면 리팩터링한다**

1. 구조를 바꾸면 다른 작업을 하기가 쉬워질 부분을 찾아 정리하기
2. 자잘한 세부 코드에 이해를 위한 리팩터링 하기 (변수명 변경 및 긴 함수 나누기 등)
3. 캠핑 규칙([*주1](#주석))에 따라 처음 봤을 때보다 깔끔하게 정리하기
4. 리팩터링은 프로그래밍과 구분되는 별개의 활동이 아니다
    * 소프트웨어 개발은 추가하는 과정만이 아니다
5. 코드 리뷰에 리팩터링을 활용하기
6. 자가 테스트 코드를 마련하면 리팩터링에 도움이 된다

> 리팩터링을 고려해야 할 때
* 외부 API 다루듯 호출해서 쓰는 코드라면 지저분해도 그냥 두기
* 처음부터 새로 작성하는게 쉬울 때엔 리팩터링 하지 않기
* 리팩터링을 도덕적인 이유로 정당화하지 않기

> 리팩터링을 활용하기
1. 아키텍처를 결정하는 시간을 줄여 개발을 바로 시작하여 개발 중에 리팩터링으로 아키텍처를 다듬을 수 있다
2. 자가 테스트 코드와 리팩터링을 묶어 **테스트 주도 개발**(TDD)라 하며 요구사항 변화에 빠르게 대응하고 안정적인 구조를 코드베이스에 심을 수 있다
3. 리팩터링은 단기적으로 성능이 느려질 수도 있지만 튜닝하기 쉽게 만들기 때문에 결국 더 빠른 소프트웨어를 얻게 될 수 있다

# Chaper 03
~코드 보기~ 예시 코드 없음
> 리팩터링, 무엇을 해야 하는가?
* 좋은 **이름** 정하기: 함수 선언 바꾸기, 변수 이름 바꾸기, 필드 이름 바꾸기 등
* 반복되는 코드 줄이기: 함수 추출하기, 문장 슬라이드하기, 메서드 올리기 등
* 함수는 **짧게** 작성하기
    * 함수 내 매개변수와 임시변수의 수를 줄이기
    * **조건문 분해하기**로 switch문 내 case 본문을 함수 호출문 하나로 바꾸기
    * **반복문 쪼개기**로 독립된 함수로 만들기
* 매개변수 목록 줄이기: 객체 통째로 넘기기, 여러 함수를 클래스로 묶기 등
* 전역 데이터에 주의하기: **변수 캡슐화하기**
* 데이터 변경에 주의하기
    * **변수 캡슐화**: 정해놓은 함수를 거쳐야만 값이 수정되게 하기
    * **변수 쪼개기**: 용도별로 독립변수에 저장하기
    * 여러 함수를 클래스로 묶기, 여러 함수를 변환 함수로 묶기
* 단일 책임 원칙 지키기: 단계 쪼개기, 함수 모으기 등
* 모듈 내 상호작용은 늘리고 모듈 간 상호작용은 최소화하기
* 데이터 뭉치를 찾기: **클래스**를 적극적으로 사용하기
* 기본형 데이터를 객체로 바꾸기
* 중복되는 switch문 제거하기
* 반복문은 파이프라인으로 변경하기([*주2](#주석))
* **나중에 필요할 것 같은 코드** 제거하기
* 임시 필드(쓰이지 않는 것 처럼 보이는 필드)에 주의하기
* 메시지 체인([*주3](#주석))에 주의하기
* 접두어나 접미어가 같은 필드들을 클래스로 추출하기
* 서브클래스가 인터페이스를 따르지 않는지 주의하기
* **주석이 필요하다 느끼면 주석이 필요없는 코드로 리팩터링 해본다**

# Chaper 04
[코드 보기]('#')
> 테스트를 작성하기 가장 좋은 시점은 프로그래밍을 시작하기 전이다
* 모카를 사용하여 테스트 코드를 작성(예시)
```
describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    })
})
```
> 자주 테스트하고 적어도 하루에 한 번은 전체 테스트를 돌려보자

> 문제가 생길 가능성이 있는 경계조건을 생각해보고 그 부분을 집중적으로 테스트하자 

> **위험한 기능에 집중하여 테스트 코드를 작성하기**

> 모든 버그를 잡아낼 수 없다는 생각으로 테스트를 작성하지 않는다면 대다수의 버그를 잡을 수 있는 기회를 날리는 셈이다.


#### 주석
* [주1](#chapter-02) : 도착했을때보다 깔끔하게 정돈하고 떠난다(챕터1.7)
* [주2](#chapter-03) : ES6 문법에서 제공하는 filter, reduce, map 등을 활용하는 것
* [주3](#chapter-03) : 객체를 요청하는 작업이 연쇄적으로 이어지는 코드
