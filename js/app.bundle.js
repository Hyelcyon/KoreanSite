// Standalone Zero-Dependency Universal Bundle
// Built with KS X 1026-1 Standard Unicode Conjoining Jamo & Programmers 2026 Rich Gradient Architecture

(function () {
  'use strict';

  // 1. Embedded Datasets
  const PYTHON_TUTORIAL_DATA = {
    title: "Python 3.14 Official Tutorial for Beginners",
    version: "3.14.7",
    chapters: [
      {
        id: 1,
        title: "1. 첫 파이썬 프로그램과 print() 출력",
        badge: "Ch.1 기본 출력",
        summary: "파이썬의 가장 첫 단계인 print() 함수를 사용하여 화면에 문자열과 여러 개의 값을 출력하는 방법을 배웁니다.",
        concepts: [
          { title: "print() 기본 출력", desc: "괄호 안에 따옴표로 감싼 글자나 숫자를 넣어 콘솔 화면에 즉시 출력합니다." },
          { title: "콤마(,) 다중 출력", desc: "콤마로 여러 값을 나열하면 공백 한 칸으로 구분되어 나란히 출력됩니다." },
          { title: "sep 와 end 옵션", desc: "sep='구분자'로 값 사이의 문자를 바꾸고, end='끝문자'로 줄바꿈 대신 다른 문자를 지정할 수 있습니다." }
        ],
        code: `# 1. 화면에 텍스트 출력하기
print("안녕하세요, 파이썬 3.14!")
print("Welcome to Python Programming")

# 2. 여러 개의 값 동시에 출력하기 (콤마로 구분)
print("이름:", "홍길동", "나이:", 20)

# 3. sep(구분자)와 end(끝 문자) 옵션 활용
print("010", "1234", "5678", sep="-")
print("줄을 바꾸지 않고", end=" ")
print("이어서 출력합니다!")`,
        takeaways: [
          "print() 함수는 기본적으로 출력 후 자동으로 줄바꿈(Enter)을 수행합니다.",
          "문자열은 반드시 큰따옴표(\")나 작은따옴표(')로 감싸야 합니다."
        ]
      },
      {
        id: 2,
        title: "2. 주석(Comments)과 코드 설명",
        badge: "Ch.2 주석 문법",
        summary: "코드의 가독성을 높이고 특정 줄의 실행을 임시로 제외시키는 주석(#)의 사용법을 학습합니다.",
        concepts: [
          { title: "한 줄 주석 (#)", desc: "# 기호 뒤에 오는 모든 글자는 파이썬 인터프리터가 실행하지 않고 건너뜁니다." },
          { title: "인라인 주석", desc: "코드의 같은 줄 오른쪽에 주석을 달아 특정 변수나 수식의 의미를 설명합니다." },
          { title: "문자열 내의 #", desc: "따옴표 안에 있는 #은 주석이 아닌 일반 문자열 글자로 취급됩니다." }
        ],
        code: `# 이것은 한 줄 주석입니다. 컴퓨터는 이 줄을 실행하지 않고 건너뜁니다.
print("주석은 코드 실행에 영향을 주지 않습니다.")

# 인라인 주석: 코드 옆에 설명을 덧붙일 때 사용합니다.
width = 20   # 사각형의 가로 길이 (cm)
height = 10  # 사각형의 세로 길이 (cm)

# 계산 결과 출력
print("사각형의 면적:", width * height)

# 문자열 내부의 # 기호는 주석이 아닌 일반 글자입니다.
print("문의 사항은 #CS 채널로 연락해주세요.")`,
        takeaways: [
          "주석은 나중에 코드를 다시 볼 때 동작 의도를 빠르게 이해하도록 돕는 메모 역할을 합니다.",
          "단축키 Ctrl+/ 를 누르면 선택한 영역을 빠르게 주석 처리하거나 해제할 수 있습니다."
        ]
      },
      {
        id: 3,
        title: "3. 변수(Variables)와 값의 대입",
        badge: "Ch.3 변수 기초",
        summary: "데이터를 컴퓨터 메모리에 저장하고 이름을 붙여 재사용하는 변수의 선언과 대입(=) 규칙을 익힙니다.",
        concepts: [
          { title: "변수 선언과 대입 (=)", desc: "변수이름 = 값 형태로 데이터를 저장하며, 우항의 값이 좌항의 변수에 할당됩니다." },
          { title: "변수 이름 짓기 규칙", desc: "영문자, 숫자, 언더바(_)를 사용하며, 숫자로 시작할 수 없고 공백을 포함할 수 없습니다." },
          { title: "다중 대입 & Swap", desc: "a, b = 10, 20 처럼 여러 변수를 한 번에 정의하거나 a, b = b, a 로 값을 쉽게 교환합니다." }
        ],
        code: `# 1. 변수에 값 저장하기 (= 대입 연산자)
user_name = "민수"
user_age = 17
user_score = 95.5

print("사용자 정보:", user_name, user_age, user_score)

# 2. 변수 값 변경 (재할당)
user_score = 100
print("수정된 점수:", user_score)

# 3. 여러 변수에 한 번에 값 대입하기 (다중 대입)
x, y, z = 10, 20, 30
print("x, y, z:", x, y, z)

# 두 변수의 값 맞바꾸기 (Swap)
x, y = y, x
print("교환 후 x, y:", x, y)`,
        takeaways: [
          "파이썬은 변수의 타입을 미리 지정할 필요 없이 대입하는 값에 따라 타입이 자동 결정됩니다.",
          "변수 이름은 가급적 의미를 알아보기 쉬운 단어(user_name, score 등)로 짓는 것이 좋습니다."
        ]
      },
      {
        id: 4,
        title: "4. 기본 자료형과 type() 검사",
        badge: "Ch.4 기본 자료형",
        summary: "파이썬의 4대 기본 데이터 타입(int, float, str, bool)의 특성과 type() 함수를 활용한 타입 검사를 학습합니다.",
        concepts: [
          { title: "4대 기본 자료형", desc: "정수(int), 소수점이 있는 실수(float), 문자열(str), 참/거짓 논리값(bool)이 있습니다." },
          { title: "type() 함수", desc: "변수나 값의 자료형 종류를 <class '자료형'> 형태로 반환해줍니다." },
          { title: "불리언 (bool)", desc: "True(참) 또는 False(거짓) 두 가지 값만 가지며 비교 연산의 결과로 주로 사용됩니다." }
        ],
        code: `# 1. 파이썬의 4대 기본 자료형
age = 25              # 정수 (int)
pi = 3.14159          # 실수 (float)
greeting = "Hello"    # 문자열 (str)
is_active = True      # 불리언 (bool: True 또는 False)

# 2. type() 함수로 자료형 확인하기
print("age의 타입:", type(age))
print("pi의 타입:", type(pi))
print("greeting의 타입:", type(greeting))
print("is_active의 타입:", type(is_active))

# 3. 불리언 참/거짓 논리값
is_greater = (10 > 5)
print("10 > 5 계산 결과:", is_greater)`,
        takeaways: [
          "True와 False는 첫 글자가 반드시 대문자여야 합니다 (true/false는 에러).",
          "정수와 실수를 함께 연산하면 결과는 자동으로 더 정밀한 실수(float)가 됩니다."
        ]
      },
      {
        id: 5,
        title: "5. 숫자와 산술 연산자 (Arithmetic Operators)",
        badge: "Ch.5 산술 연산자",
        summary: "사칙연산과 정수 나눗셈(몫), 나머지 연산자, 거듭제곱 연산자의 동작 원리와 연산자 우선순위를 배웁니다.",
        concepts: [
          { title: "사칙연산 (+, -, *, /)", desc: "덧셈, 뺄셈, 곱셈과 나눗셈을 수행합니다. 나눗셈(/) 결과는 항상 float입니다." },
          { title: "몫(//)과 나머지(%)", desc: "정수 몫만 구할 때는 //, 나눈 나머지를 구할 때는 % 연산자를 사용합니다." },
          { title: "거듭제곱(**)과 괄호", desc: "** 연산자로 거듭제곱을 계산하며, 괄호 ()를 통해 계산 순서를 먼저 지정합니다." }
        ],
        code: `# 1. 사칙연산 (+, -, *, /)
a = 15
b = 4

print("덧셈 a + b =", a + b)
print("뺄셈 a - b =", a - b)
print("곱셈 a * b =", a * b)
print("나눗셈 a / b =", a / b)  # 나눗셈 결과는 항상 실수(float)

# 2. 정수 나눗셈(//), 나머지(%), 거듭제곱(**)
print("몫 (//):", a // b)        # 3
print("나머지 (%):", a % b)      # 3
print("거듭제곱 (**):", 2 ** 8)   # 2의 8승 = 256

# 3. 연산자 우선순위 (괄호 활용)
result = (50 - 5 * 6) / 4
print("수식 계산 결과:", result)`,
        takeaways: [
          "홀수와 짝수를 구분할 때는 num % 2 == 0 식의 나머지 연산자를 자주 사용합니다.",
          "수학 수식과 동일하게 곱셈/나눗셈이 덧셈/뺄셈보다 우선하여 계산됩니다."
        ]
      },
      {
        id: 6,
        title: "6. 문자열 기초와 이스케이프 문자",
        badge: "Ch.6 문자열 기초",
        summary: "문자열 정의 방식, 줄바꿈(\\n)과 탭(\\t) 등 특수 이스케이프 문자, 그리고 세 줄 따옴표를 학습합니다.",
        concepts: [
          { title: "따옴표 표기법", desc: "작은따옴표('') 또는 큰따옴표(\"\")로 둘러싸서 문자열을 선언합니다." },
          { title: "이스케이프 문자 (\\)", desc: "\\n(줄바꿈), \\t(탭), \\'(따옴표 출력), \\\\(역슬래시) 등을 표현합니다." },
          { title: "세 줄 따옴표 (\"\"\")", desc: "여러 줄에 걸친 긴 문장이나 서식을 그대로 유지하는 문자열을 작성합니다." }
        ],
        code: `# 1. 작은따옴표(')와 큰따옴표(")
msg1 = '파이썬은 쉽고 강력합니다.'
msg2 = "Python 3.14 Programming"

# 2. 이스케이프 문자 (\\n: 줄바꿈, \\t: 탭, \\": 따옴표)
quote = "철수가 \\"안녕하세요!\\"라고 인사했습니다."
lines = "첫 번째 줄\\n두 번째 줄\\t(탭 이동)"
print(quote)
print(lines)

# 3. 여러 줄 문자열 (따옴표 3개: \"\"\" 또는 ''')
multiline = """
==============================
      시스템 상태 보고서
      버전: Python 3.14.7
==============================
"""
print(multiline)`,
        takeaways: [
          "문자열 안에 큰따옴표를 넣고 싶다면 바깥을 작은따옴표로 감싸면 이스케이프 없이 편리합니다.",
          "문자열끼리 + 연산자를 쓰면 서로 이어붙여지고(연결), * 연산자를 쓰면 반복됩니다."
        ]
      },
      {
        id: 7,
        title: "7. 문자열 인덱싱과 슬라이싱 (Indexing & Slicing)",
        badge: "Ch.7 인덱싱과 슬라이싱",
        summary: "문자열의 특정 위치 글자를 가져오는 인덱싱과 특정 구간을 잘라내는 슬라이싱 [start:end:step]을 실습합니다.",
        concepts: [
          { title: "0부터 시작하는 인덱스", desc: "첫 번째 글자는 0번이며, 음수 인덱스(-1)는 맨 뒤에서부터 역순으로 가리킵니다." },
          { title: "슬라이싱 [start:end]", desc: "start 번호부터 end 번호 직전까지의 부분 문자열을 잘라냅니다." },
          { title: "스텝 간격 [::step]", desc: "간격을 지정하여 2칸씩 건너뛰거나, [::-1]로 문자열을 뒤집을 수 있습니다." }
        ],
        code: `text = "Python 3.14"

# 1. 인덱싱 (0번부터 시작, 음수는 뒤에서부터)
print("첫 글자 [0]:", text[0])       # 'P'
print("세 번째 [2]:", text[2])       # 't'
print("마지막 [-1]:", text[-1])      # '4'

# 2. 슬라이싱 [시작:끝] (끝 번호 직전까지 추출)
print("앞 6글자 [0:6]:", text[0:6])   # 'Python'
print("버전 부분 [7:]:", text[7:])     # '3.14'

# 3. 스텝 지정 [시작:끝:간격]
numbers = "0123456789"
print("2칸씩 건너뛰기:", numbers[::2])  # '02468'
print("문자열 뒤집기:", text[::-1])     # '41.3 nohtyP'`,
        takeaways: [
          "슬라이싱 [0:6]의 경우 6번 인덱스 문자는 포함되지 않습니다 (0, 1, 2, 3, 4, 5번 추출).",
          "파이썬 문자열은 불변(Immutable) 객체이므로 text[0] = 'J' 처럼 직접 바꿀 수 없습니다."
        ]
      },
      {
        id: 8,
        title: "8. F-String과 현대적 포맷팅",
        badge: "Ch.8 포맷 스트링",
        summary: "Python 3.6+ 표준 포맷 스트링(f-string)의 변수 삽입, 숫자 서식 지정자, 그리고 3.14 최신 디버그 표현식을 배웁니다.",
        concepts: [
          { title: "기본 f-string", desc: "문자열 앞에 f를 붙이고 {변수명}으로 변수 값을 직관적으로 끼워 넣습니다." },
          { title: "포맷 지정자", desc: ":, (천단위 콤마), :.2f (소수점 자릿수), :.1% (백분율) 등을 간편하게 지정합니다." },
          { title: "f'{expr=}' 디버깅", desc: "{변수명=} 형태로 작성하면 변수 이름과 계산 결과를 동시에 깔끔하게 출력합니다." }
        ],
        code: `user = "지민"
score = 98.456
rank = 1

# 1. 기본 f-string (변수 및 표현식 삽입)
print(f"반갑습니다, {user}님! 당신의 순위는 {rank}위입니다.")
print(f"점수 2배 계산: {score * 2}")

# 2. 숫자 포맷 지정자 (소수점 자릿수, 천단위 콤마, 정렬)
price = 1280000
ratio = 0.8567
print(f"금액: {price:,}원")
print(f"소수점 2자리: {score:.2f}점")
print(f"백분율: {ratio:.1%}")

# 3. f"{expr=}" 디버깅 문법 (변수명과 결과를 동시 출력)
width = 15
height = 8
print(f"{width=}, {height=}, {width * height = }")`,
        takeaways: [
          "f-string은 이전 포맷팅 방식(% 연산자, str.format())보다 가독성과 실행 속도가 월등히 뛰어납니다.",
          "중괄호 {} 안에는 변수뿐만 아니라 사칙연산, 함수 호출 등 유효한 모든 표현식을 넣을 수 있습니다."
        ]
      },
      {
        id: 9,
        title: "9. 사용자 입력과 형 변환 (Type Casting)",
        badge: "Ch.9 입력과 형변환",
        summary: "문자열 데이터를 정수나 실수형으로 변환하는 int(), float(), str() 형 변환의 핵심을 익힙니다.",
        concepts: [
          { title: "형 변환(Type Casting)", desc: "데이터의 종류를 다른 자료형으로 강제 변환합니다 (예: '100' 문자열 -> 100 숫자)." },
          { title: "int() 와 float()", desc: "문자열이나 숫자를 각각 정수형(int) 또는 소수점 실수형(float)으로 변환합니다." },
          { title: "str() 변환", desc: "숫자나 불리언 데이터를 텍스트(문자열)로 변환하여 문자열끼리 연결할 때 사용합니다." }
        ],
        code: `# 1. 문자열로 주어진 숫자 데이터 (input 등의 결과 형태)
input_year = "2026"
input_price = "15000"
input_weight = "68.5"

# 2. int(), float() 함수로 숫자로 형 변환
year_num = int(input_year)
price_num = int(input_price)
weight_num = float(input_weight)

# 숫자로 변환되었으므로 정상적인 사칙연산이 가능합니다.
next_year = year_num + 1
discounted_price = price_num * 0.9

print("다음 연도:", next_year)
print("10% 할인 가격:", int(discounted_price))
print("체중:", weight_num, "kg")

# 3. 숫자를 다시 문자열로 변환 (str)
serial = "ITEM-" + str(price_num)
print("생성된 품번 코드:", serial)`,
        takeaways: [
          "숫자가 아닌 글자(예: 'abc')를 int()로 변환하려고 하면 ValueError 예외가 발생합니다.",
          "실수를 int()로 변환하면 소수점 아래 자리는 반올림이 아니라 무조건 버려집니다."
        ]
      },
      {
        id: 10,
        title: "10. 조건문 if, elif, else 와 비교 연산자",
        badge: "Ch.10 조건문 분기",
        summary: "조건에 따라 실행할 코드 블록을 분기하는 if문과 비교 연산자(==, !=, <, >, <=, >=)를 배웁니다.",
        concepts: [
          { title: "if - elif - else", desc: "조건이 참(True)일 때만 해당 블록의 코드가 실행되며, 콜론(:)과 4칸 들여쓰기가 필수입니다." },
          { title: "비교 연산자", desc: "==(같음), !=(다름), <(미만), >(초과), <=(이하), >=(이상) 연산자를 사용합니다." },
          { title: "들여쓰기(Indentation)", desc: "파이썬은 중괄호 {} 대신 들여쓰기로 코드 블록의 포함 관계를 구분합니다." }
        ],
        code: `# 1. 점수에 따른 학점 판정
score = 85

if score >= 90:
    grade = "A"
    message = "탁월한 성적입니다!"
elif score >= 80:
    grade = "B"
    message = "우수한 성적입니다."
elif score >= 70:
    grade = "C"
    message = "노력이 조금 더 필요합니다."
else:
    grade = "F"
    message = "재시험 대상입니다."

print(f"시험 점수: {score}점 -> 학점: {grade} ({message})")

# 2. 짝수/홀수 판별 (% 나머지 연산자)
num = 14
if num % 2 == 0:
    print(f"{num}은(는) 짝수입니다.")
else:
    print(f"{num}은(는) 홀수입니다.")`,
        takeaways: [
          "같음을 비교할 때는 수학의 = 기호가 아니라 반드시 등호 두 개(==)를 사용해야 합니다.",
          "들여쓰기 칸수가 맞지 않으면 IndentationError 오류가 발생하므로 일정하게 4칸을 유지해야 합니다."
        ]
      },
      {
        id: 11,
        title: "11. 논리 연산자와 in 멤버십 연산자",
        badge: "Ch.11 논리 연산자",
        summary: "여러 조건을 결합하는 and, or, not 논리 연산자와 특정 항목이 컬렉션에 포함되어 있는지 검사하는 in 연산자를 배웁니다.",
        concepts: [
          { title: "and 연산자", desc: "결합된 모든 조건이 참(True)일 때만 최종 결과가 참이 됩니다." },
          { title: "or 연산자", desc: "조건 중 하나라도 참(True)이면 최종 결과가 참이 됩니다." },
          { title: "in / not in 연산자", desc: "리스트나 문자열 안에 특정 데이터가 존재하는지 여부를 검사합니다." }
        ],
        code: `# 1. and, or, not 논리 연산
age = 22
has_license = True

# 두 조건이 모두 참이어야 실행 (and)
if age >= 18 and has_license:
    print("운전이 가능합니다.")
else:
    print("운전할 수 없습니다.")

# 2. not 연산자 (참/거짓 반전)
is_raining = False
if not is_raining:
    print("비가 오지 않으므로 산책을 나갑니다.")

# 3. in 연산자 (포함 여부 검사)
allowed_roles = ["admin", "editor", "moderator"]
my_role = "editor"

if my_role in allowed_roles:
    print(f"[{my_role}] 권한이 승인되었습니다.")`,
        takeaways: [
          "in 연산자는 문자열에서도 'py' in 'python' 처럼 부분 문자열 검색에 매우 유용합니다.",
          "복잡한 조건문은 괄호 ()로 묶어 연산의 우선순위를 명확히 표현하는 것이 좋습니다."
        ]
      },
      {
        id: 12,
        title: "12. 구조적 패턴 매칭 (match-case)",
        badge: "Ch.12 패턴 매칭",
        summary: "Python 3.10+ 에 도입된 강력한 제어 흐름 도구인 match-case 문법과 와일드카드 패턴을 실습합니다.",
        concepts: [
          { title: "match - case 문", desc: "값이나 자료구조 형태에 따라 다중 분기를 깔끔하고 읽기 쉽게 작성합니다." },
          { title: "파이프(|) 다중 조건", desc: "case 401 | 403: 처럼 여러 케이스를 한 번에 묶어서 처리할 수 있습니다." },
          { title: "와일드카드 (_)", desc: "위의 어떤 case에도 일치하지 않을 때 실행되는 기본값(Default) 패턴입니다." }
        ],
        code: `# 1. HTTP 상태 코드 패턴 매칭
http_status = 200

match http_status:
    case 200:
        print("200 OK: 웹 페이지 요청이 성공했습니다.")
    case 400:
        print("400 Bad Request: 잘못된 요청입니다.")
    case 403 | 401:
        print("401/403: 접근 권한이 없습니다.")
    case 404:
        print("404 Not Found: 페이지를 찾을 수 없습니다.")
    case 500:
        print("500 Internal Server Error: 서버 내부 오류입니다.")
    case _:
        print("알 수 없는 상태 코드입니다.")

# 2. 튜플 구조 분해 매칭
command = ("move", 10, 20)
match command:
    case ("move", x, y):
        print(f"좌표 ({x}, {y})로 이동합니다.")
    case ("stop",):
        print("정지합니다.")`,
        takeaways: [
          "match-case는 C/Java의 switch-case보다 훨씬 진화하여 튜플, 리스트 구조까지 분해 매칭할 수 있습니다.",
          "와일드카드 '_'는 switch 문의 default 키워드와 동일한 역할을 합니다."
        ]
      },
      {
        id: 13,
        title: "13. while 반복문과 루프 탈출 (break)",
        badge: "Ch.13 while 반복문",
        summary: "조건이 참인 동안 코드를 반복 실행하는 while문과 무한 루프 탈출 키워드(break)를 학습합니다.",
        concepts: [
          { title: "while 반복문", desc: "조건식이 참(True)인 동안 블록 안의 코드를 계속해서 반복 실행합니다." },
          { title: "조건 갱신 (증감 연산)", desc: "count += 1 등으로 조건을 변경해주지 않으면 무한 루프에 빠질 수 있습니다." },
          { title: "break 문", desc: "반복문 실행 도중 특정 조건이 충족되면 루프를 즉시 강제 종료합니다." }
        ],
        code: `# 1. 기본 while문 (1부터 5까지 카운트)
count = 1
while count <= 5:
    print(f"카운트: {count}")
    count += 1

# 2. 누적 합계 계산
total = 0
n = 1
while n <= 10:
    total += n
    n += 1
print("1부터 10까지의 누적 합계:", total)

# 3. break 문으로 루프 탈출
battery = 100
while True:
    battery -= 30
    print(f"현재 배터리: {battery}%")
    if battery <= 20:
        print("배터리 부족! 절전 모드로 전환합니다.")
        break`,
        takeaways: [
          "while True는 일부러 무한 루프를 만들 때 사용하며, 내부에 반드시 탈출용 break 조건이 있어야 합니다.",
          "반복 횟수가 정해져 있을 때는 while보다 for문이 더 안전하고 편리합니다."
        ]
      },
      {
        id: 14,
        title: "14. for 반복문과 range() 시퀀스",
        badge: "Ch.14 for 반복문",
        summary: "연속된 숫자 범위를 순회하는 range() 함수와 for 반복문, 그리고 continue 흐름 제어를 배웁니다.",
        concepts: [
          { title: "for - in 루프", desc: "리스트나 range() 시퀀스의 항목을 하나씩 꺼내어 순차적으로 반복합니다." },
          { title: "range(start, stop, step)", desc: "연속된 숫자 시퀀스를 생성합니다 (stop 번호는 포함되지 않음)." },
          { title: "continue 문", desc: "현재 반복 회차의 남은 코드를 건너뛰고 다음 반복 회차로 즉시 넘어갑니다." }
        ],
        code: `# 1. range() 기본 순회 (0부터 4까지 5회 반복)
print("0부터 4까지 출력:")
for i in range(5):
    print(i, end=" ")
print()

# 2. range(시작, 끝, 간격)
print("1부터 10까지 홀수만 출력:")
for i in range(1, 11, 2):
    print(i, end=" ")
print()

# 3. continue 와 break 제어
print("짝수만 출력 (continue 활용):")
for i in range(1, 10):
    if i % 2 != 0:
        continue  # 홀수면 아래 코드를 건너뜁니다.
    print(f"짝수: {i}")`,
        takeaways: [
          "range(1, 6)은 1, 2, 3, 4, 5까지 총 5개의 숫자를 만들어냅니다.",
          "for 루프는 리스트, 튜플, 문자열 등 모든 순회 가능한(iterable) 객체에 바로 적용할 수 있습니다."
        ]
      },
      {
        id: 15,
        title: "15. 리스트 자료구조와 메서드 (Lists)",
        badge: "Ch.15 리스트 컬렉션",
        summary: "여러 데이터를 순서대로 담아두고 수정할 수 있는 리스트(List)의 생성, 인덱싱, 그리고 핵심 내장 메서드를 배웁니다.",
        concepts: [
          { title: "리스트 생성과 인덱싱", desc: "대괄호 [] 안에 항목을 콤마로 구분하여 저장하며, 인덱스로 조회 및 수정이 가능합니다." },
          { title: "추가 및 삽입 (append, insert)", desc: "append()로 끝에 항목을 붙이고, insert(index, item)으로 원하는 위치에 삽입합니다." },
          { title: "제거 및 정렬 (pop, remove, sort)", desc: "pop()으로 꺼내고, remove()로 특정 값을 삭제하며, sort()로 정렬합니다." }
        ],
        code: `# 1. 리스트 생성과 인덱싱/수정
fruits = ["사과", "바나나", "포도"]
print("초기 리스트:", fruits)

# 2. 주요 리스트 메서드
fruits.append("망고")        # 맨 끝에 추가
fruits.insert(1, "오렌지")   # 1번 인덱스에 삽입
print("추가 후:", fruits)

fruits.remove("바나나")      # 특정 값 삭제
popped_item = fruits.pop()  # 맨 뒤 항목 꺼내기
print(f"꺼낸 항목: {popped_item}, 현재 리스트: {fruits}")

# 3. 정렬 및 길이 확인
numbers = [42, 11, 88, 23, 7]
numbers.sort()              # 오름차순 정렬
print("정렬된 숫자:", numbers)
print("항목 개수:", len(numbers))`,
        takeaways: [
          "리스트는 내용 수정이 가능한 가변(Mutable) 객체입니다.",
          "len(list) 함수를 사용하면 리스트 안에 들어있는 항목의 총 개수를 알 수 있습니다."
        ]
      },
      {
        id: 16,
        title: "16. 리스트 컴프리헨션 (List Comprehensions)",
        badge: "Ch.16 리스트 컴프리헨션",
        summary: "for 루프와 조건문을 한 줄로 축약하여 간결하고 고속으로 새 리스트를 생성하는 파이썬의 대표 문법을 익힙니다.",
        concepts: [
          { title: "기본 문법", desc: "[표현식 for 변수 in 반복대상] 형태로 간결하게 새 리스트를 생성합니다." },
          { title: "if 조건 필터링", desc: "[표현식 for 변수 in 반복대상 if 조건] 형태로 조건에 맞는 항목만 선별합니다." },
          { title: "실행 속도 최적화", desc: "일반 for문보다 내부 C 레벨에서 최적화되어 더 빠르고 읽기 쉽습니다." }
        ],
        code: `# 1. 기본 리스트 컴프리헨션 [표현식 for 항목 in 순회대상]
squares = [x ** 2 for x in range(1, 6)]
print("1부터 5까지의 제곱:", squares)

# 2. 조건 필터링이 포함된 컴프리헨션
even_squares = [x ** 2 for x in range(1, 11) if x % 2 == 0]
print("1부터 10 중 짝수의 제곱:", even_squares)

# 3. 문자열 변환 컴프리헨션
words = ["python", "javascript", "c++", "rust"]
upper_words = [w.upper() for w in words]
print("대문자 변환:", upper_words)`,
        takeaways: [
          "기존의 4~5줄짜리 for + append 코드를 단 한 줄로 명확하게 표현할 수 있습니다.",
          "너무 복잡한 다중 중첩 컴프리헨션은 오히려 가독성을 해치므로 단순한 매핑/필터링에 주로 사용합니다."
        ]
      },
      {
        id: 17,
        title: "17. 튜플(Tuple)과 딕셔너리(Dictionary)",
        badge: "Ch.17 튜플과 딕셔너리",
        summary: "수정이 불가능한 불변 튜플과 키-값(Key-Value) 쌍으로 고속 조회가 가능한 딕셔너리를 학습합니다.",
        concepts: [
          { title: "튜플 (Tuple)", desc: "소괄호 ()로 생성하며 한 번 생성되면 항목을 추가/수정/삭제할 수 없는 불변 객체입니다." },
          { title: "딕셔너리 (Dictionary)", desc: "중괄호 {키: 값} 형태로 데이터를 저장하며, 키(Key)를 통해 값을 O(1) 고속 조회합니다." },
          { title: "dict.get() 과 items()", desc: "get()으로 안전하게 조회하고 items()로 키와 값을 동시에 for문으로 순회합니다." }
        ],
        code: `# 1. 튜플 (불변 시퀀스)
point = (10, 20)
x, y = point  # 언패킹(Unpacking)
print(f"좌표 언패킹: x={x}, y={y}")

# 2. 딕셔너리 (키-값 쌍)
student = {
    "name": "수진",
    "grade": 3,
    "scores": {"국어": 95, "수학": 90}
}

print(f"학생 이름: {student['name']}")
print(f"국어 점수: {student['scores']['국어']}")

# 3. 딕셔너리 안전한 조회 및 순회
student["email"] = "sujin@example.com" # 새 키 추가
print("안전 조회 (get):", student.get("phone", "연락처 없음"))

print("--- 딕셔너리 순회 ---")
for key, value in student.items():
    print(f"{key}: {value}")`,
        takeaways: [
          "딕셔너리의 키(Key)는 중복될 수 없으며 문자열이나 숫자 같은 불변 객체만 사용할 수 있습니다.",
          "존재하지 않는 키를 student['phone'] 처럼 조회하면 KeyError가 발생하므로 get() 메서드를 권장합니다."
        ]
      },
      {
        id: 18,
        title: "18. 세트(Set)와 집합 연산",
        badge: "Ch.18 세트 집합 연산",
        summary: "중복을 허용하지 않고 순서가 없는 세트(Set)의 특징과 합집합, 교집합, 차집합 연산을 마스터합니다.",
        concepts: [
          { title: "세트의 특징", desc: "중괄호 {}로 생성하며, 중복된 값은 자동으로 하나만 남기고 제거됩니다." },
          { title: "집합 연산자", desc: "합집합(|), 교집합(&), 차집합(-) 기호로 고속 집합 연산을 수행합니다." },
          { title: "add() 와 discard()", desc: "새 원소를 추가하거나 안전하게 삭제할 때 사용합니다." }
        ],
        code: `# 1. 세트 생성 (중복 자동 제거)
raw_ids = [101, 102, 101, 103, 102, 104]
unique_ids = set(raw_ids)
print("중복 제거된 ID 목록:", unique_ids)

# 2. 집합 연산
set_a = {"Python", "JavaScript", "C++"}
set_b = {"Python", "Rust", "Go"}

print("교집합 (&):", set_a & set_b) # 공통 언어
print("합집합 (|):", set_a | set_b) # 전체 언어
print("차집합 (-):", set_a - set_b) # set_a에만 있는 언어

# 3. 원소 추가 및 삭제
set_a.add("TypeScript")
set_a.discard("C++")
print("수정된 set_a:", set_a)`,
        takeaways: [
          "빈 딕셔너리는 {}로 만들지만, 빈 세트는 반드시 set() 함수로 만들어야 합니다.",
          "리스트에서 중복을 없애고 싶을 때 list(set(my_list)) 패턴을 자주 활용합니다."
        ]
      },
      {
        id: 19,
        title: "19. 함수 정의와 반환값 (Functions)",
        badge: "Ch.19 함수 정의",
        summary: "반복되는 코드를 묶어 재사용하는 def 함수 정의, 매개변수(Parameter), return 반환값을 배웁니다.",
        concepts: [
          { title: "def 키워드", desc: "def 함수이름(매개변수): 형태로 선언하며 재사용 가능한 독립 블록을 만듭니다." },
          { title: "return 문", desc: "함수의 계산 결과를 호출한 곳으로 돌려주며 함수 실행을 종료합니다." },
          { title: "기본 매개변수", desc: "인자가 전달되지 않았을 때 사용할 기본값(Default Value)을 지정합니다." }
        ],
        code: `# 1. 기본 함수 정의와 return
def add_numbers(a, b):
    """두 숫자를 더한 결과를 반환하는 함수"""
    return a + b

sum_val = add_numbers(15, 25)
print("덧셈 결과:", sum_val)

# 2. 기본 매개변수 (Default Parameter)
def greet_user(name, title="회원"):
    return f"환영합니다, {name} {title}님!"

print(greet_user("김민수"))
print(greet_user("이영희", "VIP"))

# 3. 여러 개의 값 반환하기 (튜플 반환)
def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([23, 5, 89, 12, 67])
print(f"최솟값: {min_val}, 최댓값: {max_val}")`,
        takeaways: [
          "함수 안에서 return 문이 없으면 기본적으로 None을 반환합니다.",
          "기본 매개변수를 가진 인자는 반드시 일반 매개변수보다 뒤쪽에 위치해야 합니다."
        ]
      },
      {
        id: 20,
        title: "20. 가변 인자(*args, **kwargs)와 람다(Lambda)",
        badge: "Ch.20 가변인자와 람다",
        summary: "임의 개수의 인자를 받는 *args, **kwargs 문법과 한 줄 익명 함수인 람다(lambda) 표현식을 학습합니다.",
        concepts: [
          { title: "*args", desc: "임의 개수의 위치 인자를 튜플(tuple) 형태로 한 번에 묶어서 받습니다." },
          { title: "**kwargs", desc: "키워드=값 형태로 전달된 인자들을 딕셔너리(dict)로 받습니다." },
          { title: "lambda 표현식", desc: "lambda x: x * 2 처럼 이름 없는 한 줄 함수를 간단하게 선언합니다." }
        ],
        code: `# 1. 가변 위치 인자 (*args)
def sum_all(*numbers):
    return sum(numbers)

print("임의 개수 숫자 합계:", sum_all(10, 20, 30, 40, 50))

# 2. 가변 키워드 인자 (**kwargs)
def print_user_profile(**info):
    for key, value in info.items():
        print(f"  {key}: {value}")

print("사용자 프로필:")
print_user_profile(name="박지성", role="미드필더", goals=15)

# 3. 람다 (lambda) 표현식과 정렬
items = [("노트북", 1500000), ("마우스", 35000), ("키보드", 89000)]
items.sort(key=lambda item: item[1]) # 가격 기준 오름차순 정렬
print("가격순 정렬 결과:", items)`,
        takeaways: [
          "람다 함수는 map(), filter(), sort(key=...) 등의 인자로 일회성 전달할 때 가장 유용합니다.",
          "*args와 **kwargs를 함께 사용할 때는 (*args, **kwargs) 순서를 지켜야 합니다."
        ]
      },
      {
        id: 21,
        title: "21. 에러와 예외 처리 (Exception Handling)",
        badge: "Ch.21 예외 처리",
        summary: "프로그램 중단을 방지하고 오류를 안전하게 수습하는 try-except-else-finally 구문과 raise를 배웁니다.",
        concepts: [
          { title: "try - except", desc: "오류가 발생할 수 있는 코드를 try에 넣고 except에서 에러를 잡아 처리합니다." },
          { title: "else 와 finally", desc: "else는 오류가 없을 때만, finally는 성공/실패와 무관하게 항상 실행됩니다." },
          { title: "Exception as e", desc: "발생한 구체적인 에러 메시지를 변수 e에 담아 원인을 분석합니다." }
        ],
        code: `# 1. try - except - else - finally 완전체
def calculate_average(scores):
    try:
        total = sum(scores)
        count = len(scores)
        avg = total / count
    except ZeroDivisionError:
        print("[에러] 빈 리스트는 평균을 계산할 수 없습니다.")
        return 0.0
    except TypeError as e:
        print(f"[타입 에러] 숫자 데이터만 입력하세요: {e}")
        return 0.0
    else:
        print("[성공] 평균 계산이 정상 처리되었습니다.")
        return avg
    finally:
        print("-- 연산 블록 종료 --")

print("점수 평균:", calculate_average([90, 85, 95]))
print()
print("빈 리스트 계산:", calculate_average([]))`,
        takeaways: [
          "except 뒤에 에러 종류(ZeroDivisionError, ValueError 등)를 명시하면 정확한 예외 처리가 가능합니다.",
          "finally 블록은 파일 닫기, 네트워크 세션 종료 등 정리 작업에 필수적으로 사용됩니다."
        ]
      },
      {
        id: 22,
        title: "22. 클래스와 객체 지향 프로그래밍 (Classes & OOP)",
        badge: "Ch.22 클래스와 객체",
        summary: "데이터(속성)와 기능(메서드)을 하나로 캡슐화하는 클래스, 생성자 __init__, self, 상속을 학습합니다.",
        concepts: [
          { title: "클래스(Class)와 인스턴스", desc: "클래스는 설계도(틀)이며, 이를 바탕으로 실제 생성된 실체를 인스턴스(객체)라고 합니다." },
          { title: "__init__ 과 self", desc: "__init__은 객체 생성 시 속성을 초기화하는 생성자이며, self는 인스턴스 자신을 가리킵니다." },
          { title: "메서드와 상속", desc: "클래스 내부 함수를 메서드라 부르며, 부모 클래스의 기능을 자식 클래스가 물려받아 확장합니다." }
        ],
        code: `# 1. 은행 계좌 클래스 정의
class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount
        print(f"[{self.owner}] {amount:,}원 입금 완료 (잔액: {self.balance:,}원)")

    def withdraw(self, amount):
        if amount > self.balance:
            print(f"[{self.owner}] 잔액 부족! (현재 잔액: {self.balance:,}원)")
            return False
        self.balance -= amount
        print(f"[{self.owner}] {amount:,}원 출금 완료 (잔액: {self.balance:,}원)")
        return True

    def __str__(self):
        return f"계좌 소유주: {self.owner} | 잔액: {self.balance:,}원"

# 2. 인스턴스 생성 및 메서드 호출
acc = BankAccount("홍길동", 50000)
acc.deposit(30000)
acc.withdraw(20000)
print(acc)`,
        takeaways: [
          "클래스 내부 메서드의 첫 번째 매개변수는 관례적으로 항상 self로 선언합니다.",
          "__str__ 메서드를 구현하면 print(acc)를 호출했을 때 사용자 친화적인 문자열이 출력됩니다."
        ]
      }
    ]
  };


  const DATA_QUESTIONS = { "title": "Middle Korean Linguistics & Hunminjeongeum 500 Quiz Dataset", "version": "1.0.0", "total_questions": 500, "categories": ["훈민정음 해례본", "동국정운", "소실 문자와 음운", "중세국어 문법", "고전문헌과 어휘"], "questions": [{ "id": 1, "category": "훈민정음 해례본", "subcategory": "초성 제자 원리", "difficulty": "초급", "question": "훈민정음 초성 기본자 'ㄱ'의 제자 원리로 올바른 것은 무엇인가?", "options": ["혀가 입천장에 닿지 않는 모양", "혀뿌리가 목구멍을 막는 모양", "입술을 둥글게 모으는 모양", "천지인 삼재의 모양을 본뜸"], "answer": 1, "explanation": "초성 기본자 'ㄱ'은(는) 어금닛소리(아음)의 기본자로, 혀뿌리가 목구멍을 막는 모양을(를) 본떠 만들었습니다 (가획자 ㅋ, 이체자 ㆁ)." }, { "id": 2, "category": "훈민정음 해례본", "subcategory": "초성 분류", "difficulty": "초급", "question": "초성 글자 'ㄱ'은(는) 오음(五音) 분류상 어디에 해당하는가?", "options": ["반설음(半舌音)", "반치음(半齒音)", "순경음(脣輕音)", "어금닛소리(아음)"], "answer": 3, "explanation": "'ㄱ'은(는) 어금닛소리(아음)의 기본자입니다." }, { "id": 3, "category": "훈민정음 해례본", "subcategory": "초성 제자 원리", "difficulty": "초급", "question": "훈민정음 초성 기본자 'ㄴ'의 제자 원리로 올바른 것은 무엇인가?", "options": ["혀가 입천장에 닿지 않는 모양", "혀가 윗잇몸에 붙는 모양", "입술을 둥글게 모으는 모양", "천지인 삼재의 모양을 본뜸"], "answer": 1, "explanation": "초성 기본자 'ㄴ'은(는) 혓소리(설음)의 기본자로, 혀가 윗잇몸에 붙는 모양을(를) 본떠 만들었습니다 (가획자 ㄷ/ㅌ, 이체자 ㄹ)." }, { "id": 4, "category": "훈민정음 해례본", "subcategory": "초성 분류", "difficulty": "초급", "question": "초성 글자 'ㄴ'은(는) 오음(五音) 분류상 어디에 해당하는가?", "options": ["반치음(半齒音)", "혓소리(설음)", "순경음(脣輕音)", "반설음(半舌音)"], "answer": 1, "explanation": "'ㄴ'은(는) 혓소리(설음)의 기본자입니다." }, { "id": 5, "category": "훈민정음 해례본", "subcategory": "초성 제자 원리", "difficulty": "초급", "question": "훈민정음 초성 기본자 'ㅁ'의 제자 원리로 올바른 것은 무엇인가?", "options": ["입의 모양", "천지인 삼재의 모양을 본뜸", "혀가 입천장에 닿지 않는 모양", "입술을 둥글게 모으는 모양"], "answer": 0, "explanation": "초성 기본자 'ㅁ'은(는) 입술소리(순음)의 기본자로, 입의 모양을(를) 본떠 만들었습니다 (가획자 ㅂ/ㅍ)." }, { "id": 6, "category": "훈민정음 해례본", "subcategory": "초성 분류", "difficulty": "초급", "question": "초성 글자 'ㅁ'은(는) 오음(五音) 분류상 어디에 해당하는가?", "options": ["순경음(脣輕音)", "반치음(半齒音)", "반설음(半舌音)", "입술소리(순음)"], "answer": 3, "explanation": "'ㅁ'은(는) 입술소리(순음)의 기본자입니다." }, { "id": 7, "category": "훈민정음 해례본", "subcategory": "초성 제자 원리", "difficulty": "초급", "question": "훈민정음 초성 기본자 'ㅅ'의 제자 원리로 올바른 것은 무엇인가?", "options": ["혀가 입천장에 닿지 않는 모양", "천지인 삼재의 모양을 본뜸", "이의 모양", "입술을 둥글게 모으는 모양"], "answer": 2, "explanation": "초성 기본자 'ㅅ'은(는) 잇소리(치음)의 기본자로, 이의 모양을(를) 본떠 만들었습니다 (가획자 ㅈ/ㅊ, 이체자 ㅿ)." }, { "id": 8, "category": "훈민정음 해례본", "subcategory": "초성 분류", "difficulty": "초급", "question": "초성 글자 'ㅅ'은(는) 오음(五音) 분류상 어디에 해당하는가?", "options": ["잇소리(치음)", "반치음(半齒音)", "순경음(脣輕音)", "반설음(半舌音)"], "answer": 0, "explanation": "'ㅅ'은(는) 잇소리(치음)의 기본자입니다." }, { "id": 9, "category": "훈민정음 해례본", "subcategory": "초성 제자 원리", "difficulty": "초급", "question": "훈민정음 초성 기본자 'ㅇ'의 제자 원리로 올바른 것은 무엇인가?", "options": ["목구멍의 모양", "천지인 삼재의 모양을 본뜸", "입술을 둥글게 모으는 모양", "혀가 입천장에 닿지 않는 모양"], "answer": 0, "explanation": "초성 기본자 'ㅇ'은(는) 목구멍소리(후음)의 기본자로, 목구멍의 모양을(를) 본떠 만들었습니다 (가획자 ㆆ/ㅎ)." }, { "id": 10, "category": "훈민정음 해례본", "subcategory": "초성 분류", "difficulty": "초급", "question": "초성 글자 'ㅇ'은(는) 오음(五音) 분류상 어디에 해당하는가?", "options": ["순경음(脣輕音)", "반치음(半齒音)", "반설음(半舌音)", "목구멍소리(후음)"], "answer": 3, "explanation": "'ㅇ'은(는) 목구멍소리(후음)의 기본자입니다." }, { "id": 11, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "초급", "question": "훈민정음 중성 글자 'ㆍ'에 대한 설명으로 올바른 것은?", "options": ["기본자(天)에 속하며, 하늘의 둥근 모양을(를) 본뜸 (양성모음)", "초성 글자와 획을 합친 합용병서", "혀뿌리가 목구멍을 막는 모양을 본뜸", "이체자에 속하는 자음 글자"], "answer": 0, "explanation": "중성 'ㆍ'은(는) 기본자(天)로서 하늘의 둥근 모양 원리로 만들어졌으며, 성질은 양성모음에 해당합니다." }, { "id": 12, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "초급", "question": "훈민정음 중성 글자 'ㅡ'에 대한 설명으로 올바른 것은?", "options": ["기본자(地)에 속하며, 땅의 평평한 모양을(를) 본뜸 (음성모음)", "혀뿌리가 목구멍을 막는 모양을 본뜸", "초성 글자와 획을 합친 합용병서", "이체자에 속하는 자음 글자"], "answer": 0, "explanation": "중성 'ㅡ'은(는) 기본자(地)로서 땅의 평평한 모양 원리로 만들어졌으며, 성질은 음성모음에 해당합니다." }, { "id": 13, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "초급", "question": "훈민정음 중성 글자 'ㅣ'에 대한 설명으로 올바른 것은?", "options": ["이체자에 속하는 자음 글자", "기본자(人)에 속하며, 사람이 서 있는 모양을(를) 본뜸 (중성모음)", "초성 글자와 획을 합친 합용병서", "혀뿌리가 목구멍을 막는 모양을 본뜸"], "answer": 1, "explanation": "중성 'ㅣ'은(는) 기본자(人)로서 사람이 서 있는 모양 원리로 만들어졌으며, 성질은 중성모음에 해당합니다." }, { "id": 14, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅗ'에 대한 설명으로 올바른 것은?", "options": ["초성 글자와 획을 합친 합용병서", "이체자에 속하는 자음 글자", "혀뿌리가 목구멍을 막는 모양을 본뜸", "초출자에 속하며, ㆍ + ㅡ (하늘이 땅 위에 있음)을(를) 본뜸 (양성모음)"], "answer": 3, "explanation": "중성 'ㅗ'은(는) 초출자로서 ㆍ + ㅡ (하늘이 땅 위에 있음) 원리로 만들어졌으며, 성질은 양성모음에 해당합니다." }, { "id": 15, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅏ'에 대한 설명으로 올바른 것은?", "options": ["이체자에 속하는 자음 글자", "혀뿌리가 목구멍을 막는 모양을 본뜸", "초출자에 속하며, ㅣ + ㆍ (하늘이 사람 바깥에 있음)을(를) 본뜸 (양성모음)", "초성 글자와 획을 합친 합용병서"], "answer": 2, "explanation": "중성 'ㅏ'은(는) 초출자로서 ㅣ + ㆍ (하늘이 사람 바깥에 있음) 원리로 만들어졌으며, 성질은 양성모음에 해당합니다." }, { "id": 16, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅜ'에 대한 설명으로 올바른 것은?", "options": ["초출자에 속하며, ㅡ + ㆍ (하늘이 땅 아래에 있음)을(를) 본뜸 (음성모음)", "이체자에 속하는 자음 글자", "초성 글자와 획을 합친 합용병서", "혀뿌리가 목구멍을 막는 모양을 본뜸"], "answer": 0, "explanation": "중성 'ㅜ'은(는) 초출자로서 ㅡ + ㆍ (하늘이 땅 아래에 있음) 원리로 만들어졌으며, 성질은 음성모음에 해당합니다." }, { "id": 17, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅓ'에 대한 설명으로 올바른 것은?", "options": ["초출자에 속하며, ㆍ + ㅣ (하늘이 사람 안쪽에 있음)을(를) 본뜸 (음성모음)", "혀뿌리가 목구멍을 막는 모양을 본뜸", "초성 글자와 획을 합친 합용병서", "이체자에 속하는 자음 글자"], "answer": 0, "explanation": "중성 'ㅓ'은(는) 초출자로서 ㆍ + ㅣ (하늘이 사람 안쪽에 있음) 원리로 만들어졌으며, 성질은 음성모음에 해당합니다." }, { "id": 18, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅛ'에 대한 설명으로 올바른 것은?", "options": ["혀뿌리가 목구멍을 막는 모양을 본뜸", "이체자에 속하는 자음 글자", "재출자에 속하며, ㆍㆍ + ㅡ (초출자 ㅗ에 ㆍ 결합)을(를) 본뜸 (양성모음)", "초성 글자와 획을 합친 합용병서"], "answer": 2, "explanation": "중성 'ㅛ'은(는) 재출자로서 ㆍㆍ + ㅡ (초출자 ㅗ에 ㆍ 결합) 원리로 만들어졌으며, 성질은 양성모음에 해당합니다." }, { "id": 19, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅑ'에 대한 설명으로 올바른 것은?", "options": ["초성 글자와 획을 합친 합용병서", "이체자에 속하는 자음 글자", "혀뿌리가 목구멍을 막는 모양을 본뜸", "재출자에 속하며, ㅣ + ㆍㆍ (초출자 ㅏ에 ㆍ 결합)을(를) 본뜸 (양성모음)"], "answer": 3, "explanation": "중성 'ㅑ'은(는) 재출자로서 ㅣ + ㆍㆍ (초출자 ㅏ에 ㆍ 결합) 원리로 만들어졌으며, 성질은 양성모음에 해당합니다." }, { "id": 20, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅠ'에 대한 설명으로 올바른 것은?", "options": ["혀뿌리가 목구멍을 막는 모양을 본뜸", "재출자에 속하며, ㅡ + ㆍㆍ (초출자 ㅜ에 ㆍ 결합)을(를) 본뜸 (음성모음)", "이체자에 속하는 자음 글자", "초성 글자와 획을 합친 합용병서"], "answer": 1, "explanation": "중성 'ㅠ'은(는) 재출자로서 ㅡ + ㆍㆍ (초출자 ㅜ에 ㆍ 결합) 원리로 만들어졌으며, 성질은 음성모음에 해당합니다." }, { "id": 21, "category": "훈민정음 해례본", "subcategory": "중성 제자 원리", "difficulty": "중급", "question": "훈민정음 중성 글자 'ㅕ'에 대한 설명으로 올바른 것은?", "options": ["재출자에 속하며, ㆍㆍ + ㅣ (초출자 ㅓ에 ㆍ 결합)을(를) 본뜸 (음성모음)", "혀뿌리가 목구멍을 막는 모양을 본뜸", "이체자에 속하는 자음 글자", "초성 글자와 획을 합친 합용병서"], "answer": 0, "explanation": "중성 'ㅕ'은(는) 재출자로서 ㆍㆍ + ㅣ (초출자 ㅓ에 ㆍ 결합) 원리로 만들어졌으며, 성질은 음성모음에 해당합니다." }, { "id": 22, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "예의편 어제 서문에서 '국지어음 이호중국'이 드러내는 창제 정신은?", "options": ["사상적 통일", "보수주의", "자주정신", "사대주의"], "answer": 2, "explanation": "조선의 언어가 중국과 구조적으로 다름을 명시한 자주정신을 천명합니다." }, { "id": 23, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "예의편 어제 서문에서 '어린 백성이 니르고져 홇 배 이셔도'에서 '어린'의 15세기 의미는?", "options": ["나이가 적은", "가난한", "어리석은", "총명한"], "answer": 2, "explanation": "15세기 중세국어 '어리다'는 '어리석다'를 의미했으며, 현대에 '나이가 적다'로 의미가 이동했습니다." }, { "id": 24, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "예의편 어제 서문에서 '어엿비 너겨'의 '어엿브다'의 15세기 본래 의미는?", "options": ["예쁘게 여기다", "가련히/불쌍히 여기다", "귀엽게 여기다", "대견하게 여기다"], "answer": 1, "explanation": "15세기 '어엿브다'는 '불쌍하다/가련하다'는 의미였습니다." }, { "id": 25, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 해례본의 편제에 해당하지 않는 것은?", "options": ["제자해(制字解)", "합자해(合字解)", "운해편(韻解篇)", "용자례(用字例)"], "answer": 2, "explanation": "훈민정음 해례본은 예의, 제자해, 초성해, 중성해, 종성해, 합자해, 용자례, 정인지 서문으로 구성되어 있습니다." }, { "id": 26, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 해례본 제자해에서 밝힌 '가획(加劃)의 원리'의 본질은?", "options": ["모음의 길이를 표시함", "소리의 세기(기식성)가 강해짐에 따라 획을 더함", "중국의 획수를 그대로 모방함", "글자의 획수가 많을수록 부드러운 소리임"], "answer": 1, "explanation": "가획은 기본 조음기관 모양에 소리의 거셈(기식성)에 따라 획을 체계적으로 추가하는 원리입니다." }, { "id": 27, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 종성해에서 밝힌 '종성부용초성(終聲復用初聲)'의 의미는?", "options": ["종성은 별도 글자를 만들지 않고 초성을 다시 씀", "종성은 초성보다 획수가 적어야 함", "종성에는 오직 모음만 올 수 있음", "종성은 반드시 한자음으로만 적음"], "answer": 0, "explanation": "종성은 초성 17자를 그대로 다시 가져다 쓴다는 경제적 제자 원리입니다." }, { "id": 28, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 해례본 종성해에 규정된 '8종성가부용(八終聲可敷用)'의 8개 자모는?", "options": ["ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ", "ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅎ", "ㄱ, ㅋ, ㄷ, ㅌ, ㅂ, ㅍ, ㅈ, ㅊ", "ㄱ, ㆁ, ㄷ, ㄴ, ㅂ, ㅁ, ㅅ, ㄹ"], "answer": 3, "explanation": "해례본 8종성은 ㄱ, ㆁ(옛이응), ㄷ, ㄴ, ㅂ, ㅁ, ㅅ, ㄹ 입니다 (현대 7종성/8종성과 다름)." }, { "id": 29, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 초성 17자 중 '이체자(異體字)'에 해당하는 3글자는?", "options": ["ㆆ, ㅎ, ㅸ", "ㅋ, ㅌ, ㅍ", "ㄱ, ㄷ, ㅂ", "ㆁ(옛이응), ㄹ(반설음), ㅿ(반치음)"], "answer": 3, "explanation": "이체자는 발음기관 상형 후 일반적인 가획(소리가 거세짐) 규칙을 따르지 않은 글자(ㆁ, ㄹ, ㅿ)를 뜻합니다." }, { "id": 30, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "훈민정음 해례본의 발견 연도와 발견 장소로 올바른 것은?", "options": ["1910년 한양 경복궁", "1940년 경북 안동 (간송 전형필 선생 수집)", "1988년 강화도", "1950년 평양 대동강"], "answer": 1, "explanation": "1940년 경북 안동 와룡면 주하리에서 발견되어 간송 전형필 선생이 수집 보존하였습니다." }, { "id": 31, "category": "훈민정음 해례본", "subcategory": "해례본 정밀 분석", "difficulty": "중급", "question": "정인지 서문에 명시된 훈민정음 해례본의 완성 및 반포 시기는?", "options": ["세조 5년(1459년)", "태종 10년(1410년)", "세종 25년(1443년) 음력 12월", "세종 28년(1446년) 음력 9월 상한"], "answer": 3, "explanation": "1443년 겨울 창제 후 3년간의 해설서 편찬을 거쳐 1446년 9월 상한에 해례본이 반포되었습니다." }, { "id": 32, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "중급", "question": "동국정운(東國正韻, 1448)이 편찬된 주된 목적은 무엇인가?", "options": ["한자를 폐지하고 한글만 쓰기 위해", "일본과의 외교 문서를 번역하기 위해", "훈민정음 창제를 비밀에 부치기 위해", "당시 문란했던 조선의 한자음을 중국 중고음 표준에 맞추어 바로잡기 위해"], "answer": 3, "explanation": "동국정운은 당시 현실 한자음(속음)의 혼란을 극복하고 이상적 표준 한자음을 제정하기 위해 편찬되었습니다." }, { "id": 33, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "고급", "question": "동국정운식 한자음 표기에서 '이영보래(以影補來)'의 의미로 가장 적절한 것은?", "options": ["그림자 영(影) 자를 초성에 항상 적음", "'ㄹ' 받침 한자음 뒤에 여린히읗(ㆆ)을 덧붙여 입성(入聲)의 긴장성을 나타냄", "'ㄹ' 소리를 'ㅇ'으로 바꾸어 발음함", "받침 없는 글자에 무조건 'ㅇ'을 붙임"], "answer": 1, "explanation": "이영보래는 중국의 ㄷ받침 입성음이 우리나라에서 유음 'ㄹ'로 늘어지는 것을 막기 위해 'ㆆ'을 보충한 표기법입니다." }, { "id": 34, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "중급", "question": "동국정운식 한자음에서 '世'를 '솅'으로 표기한 원칙은?", "options": ["당시 사람들이 실제로 '솅'으로 발음했기 때문", "초·중·종성 3성 체계를 갖추기 위해 음가 없는 형식 종성 'ㅇ'을 부착", "이영보래 규정 적용", "세종대왕의 존칭 표기법"], "answer": 1, "explanation": "동국정운은 모든 한자음이 초·중·종성을 갖추어야 한다는 원칙에 따라 개음절 한자에 형식 종성 'ㅇ'을 표기했습니다." }, { "id": 35, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "고급", "question": "동국정운의 초성 체계는 총 몇 개의 자모로 구성되었는가?", "options": ["14초성", "17초성", "23초성", "28초성"], "answer": 2, "explanation": "동국정운은 훈민정음 17초성에 전탁음 6자(ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ)를 더해 23초성 체계를 확립했습니다." }, { "id": 36, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "중급", "question": "동국정운식 한자음 표기에서 순음(ㅁ, ㅂ, ㅍ) 아래 개음절 한자에 붙는 형식 종성은?", "options": ["옛이응 (ㆁ)", "여린히읗 (ㆆ)", "순경음 미음 (ㅱ)", "반치음 (ㅿ)"], "answer": 2, "explanation": "순음 계열 모음 뒤에는 형식 종성으로 순경음 미음(ㅱ)을 붙여 斗(둉), 貿(뮹) 등으로 표기했습니다." }, { "id": 37, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "고급", "question": "다음 중 '이영보래(以影補來)' 원칙이 적용된 한자음 표기는?", "options": ["世 -> 솅", "國 -> 귁", "君 -> 군", "月 -> 워ᇹ"], "answer": 3, "explanation": "月(월)은 'ㄹ' 받침 뒤에 'ㆆ'을 덧붙여 '워ᇹ'로 표기했습니다." }, { "id": 38, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "중급", "question": "동국정운식 한자음 표기에서 '國'을 '귁'으로 표기한 이유는?", "options": ["고구려식 방언을 반영함", "중국 중고음(홍무정운)의 원음을 반영하여 모음을 표기했기 때문", "오타로 잘못 기록된 것", "이영보래 원칙에 따름"], "answer": 1, "explanation": "당시 중국 한자음 중 '國'의 원음 모음이 '위'에 가까웠으므로 이를 '귁'으로 표기했습니다." }, { "id": 39, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "고급", "question": "동국정운식 표기에서 두음법칙은 어떻게 처리되었는가?", "options": ["두음법칙을 적용하지 않고 원음(李 -> 링, 柳 -> 륭) 그대로 표기함", "모든 어두 자음을 'ㅇ'으로 통일함", "초성에 'ㅅ'을 덧붙임", "현대 국어처럼 '이', '유'로 완전 탈락시킴"], "answer": 0, "explanation": "동국정운은 중국 원음 보존을 위해 어두의 'ㄹ'이나 'ㄴ'을 탈락시키지 않는 원음주의를 고수했습니다." }, { "id": 40, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "중급", "question": "동국정운식 한자음 표기가 16세기 이후 점차 사라진 주요 원인은?", "options": ["세종대왕이 금지령을 내렸기 때문", "우리나라의 실제 현실 한자음과 괴리가 너무 컸기 때문", "한자 교육이 중단되었기 때문", "임진왜란으로 책이 소실되었기 때문"], "answer": 1, "explanation": "동국정운식 한자음은 지나치게 인위적이고 이상적이어서 백성과 사대부의 실제 현실음과 동떨어져 점차 소멸했습니다." }, { "id": 41, "category": "동국정운", "subcategory": "동국정운 원칙", "difficulty": "고급", "question": "동국정운식 한자음 표기가 반영된 대표적인 15세기 문헌은?", "options": ["훈민정음 신식 맞춤법 통일안", "월인천강지곡(1449), 석보상절(1447)", "춘향전", "용비어천가 목판본 한글 가사"], "answer": 1, "explanation": "세종 연간에 간행된 석보상절, 월인천강지곡 등 초기 언해 문헌에 동국정운식 한자음이 철저히 적용되었습니다." }, { "id": 42, "category": "소실 문자와 음운", "subcategory": "소실 문자 음가", "difficulty": "중급", "question": "15세기 소실 문자 'ㆍ (아래아)'의 음성학적 음가 및 특징으로 올바른 것은?", "options": ["오직 모음 뒤에서만 쓰이는 형식적 기호", "현대의 된소리 'ㄲ'과 같은 강한 경음", "중국어에는 없고 일본어에만 존재하던 특수음", "후설 저모음 (양성모음)의 음가를 지님"], "answer": 3, "explanation": "'ㆍ (아래아)'은(는) 후설 저모음 (양성모음)의 음가를 지녔습니다." }, { "id": 43, "category": "소실 문자와 음운", "subcategory": "음운 변천사", "difficulty": "고급", "question": "15세기 소실 문자 'ㆍ (아래아)'의 역사적 소실 및 변화 과정에 대한 설명은?", "options": ["현대 국어의 알파벳 'R' 발음으로 바뀜", "두음법칙에 의해 어두에서만 살아남음", "훈민정음 창제 직후 1년 만에 폐기됨", "16세기 2음절에서 'ㅡ'로 변화, 18세기 1음절에서 'ㅏ'로 변화하여 최종 소실"], "answer": 3, "explanation": "16세기 2음절에서 'ㅡ'로 변화, 18세기 1음절에서 'ㅏ'로 변화하여 최종 소실" }, { "id": 44, "category": "소실 문자와 음운", "subcategory": "소실 문자 음가", "difficulty": "중급", "question": "15세기 소실 문자 'ㅸ (순경음 비읍)'의 음성학적 음가 및 특징으로 올바른 것은?", "options": ["현대의 된소리 'ㄲ'과 같은 강한 경음", "양순 유성 마찰음 [β]의 음가를 지님", "오직 모음 뒤에서만 쓰이는 형식적 기호", "중국어에는 없고 일본어에만 존재하던 특수음"], "answer": 1, "explanation": "'ㅸ (순경음 비읍)'은(는) 양순 유성 마찰음 [β]의 음가를 지녔습니다." }, { "id": 45, "category": "소실 문자와 음운", "subcategory": "음운 변천사", "difficulty": "고급", "question": "15세기 소실 문자 'ㅸ (순경음 비읍)'의 역사적 소실 및 변화 과정에 대한 설명은?", "options": ["15세기 후반에 반모음 'ㅗ/ㅜ'로 변화 (더ᄫᅥ -> 더워)", "두음법칙에 의해 어두에서만 살아남음", "훈민정음 창제 직후 1년 만에 폐기됨", "현대 국어의 알파벳 'R' 발음으로 바뀜"], "answer": 0, "explanation": "15세기 후반에 반모음 'ㅗ/ㅜ'로 변화 (더ᄫᅥ -> 더워)" }, { "id": 46, "category": "소실 문자와 음운", "subcategory": "소실 문자 음가", "difficulty": "중급", "question": "15세기 소실 문자 'ㅿ (반치음)'의 음성학적 음가 및 특징으로 올바른 것은?", "options": ["오직 모음 뒤에서만 쓰이는 형식적 기호", "중국어에는 없고 일본어에만 존재하던 특수음", "현대의 된소리 'ㄲ'과 같은 강한 경음", "유성 치경 마찰음 [z]의 음가를 지님"], "answer": 3, "explanation": "'ㅿ (반치음)'은(는) 유성 치경 마찰음 [z]의 음가를 지녔습니다." }, { "id": 47, "category": "소실 문자와 음운", "subcategory": "음운 변천사", "difficulty": "고급", "question": "15세기 소실 문자 'ㅿ (반치음)'의 역사적 소실 및 변화 과정에 대한 설명은?", "options": ["두음법칙에 의해 어두에서만 살아남음", "훈민정음 창제 직후 1년 만에 폐기됨", "15세기 후반~16세기 초반에 소실되어 'ㅇ'으로 탈락 (아ᅀᆞ -> 아우, ᄆᆞᅀᆞᆷ -> 마음)", "현대 국어의 알파벳 'R' 발음으로 바뀜"], "answer": 2, "explanation": "15세기 후반~16세기 초반에 소실되어 'ㅇ'으로 탈락 (아ᅀᆞ -> 아우, ᄆᆞᅀᆞᆷ -> 마음)" }, { "id": 48, "category": "소실 문자와 음운", "subcategory": "소실 문자 음가", "difficulty": "중급", "question": "15세기 소실 문자 'ㆁ (옛이응)'의 음성학적 음가 및 특징으로 올바른 것은?", "options": ["중국어에는 없고 일본어에만 존재하던 특수음", "현대의 된소리 'ㄲ'과 같은 강한 경음", "연구개 비음 [ŋ]의 음가를 지님", "오직 모음 뒤에서만 쓰이는 형식적 기호"], "answer": 2, "explanation": "'ㆁ (옛이응)'은(는) 연구개 비음 [ŋ]의 음가를 지녔습니다." }, { "id": 49, "category": "소실 문자와 음운", "subcategory": "음운 변천사", "difficulty": "고급", "question": "15세기 소실 문자 'ㆁ (옛이응)'의 역사적 소실 및 변화 과정에 대한 설명은?", "options": ["두음법칙에 의해 어두에서만 살아남음", "현대 국어의 알파벳 'R' 발음으로 바뀜", "훈민정음 창제 직후 1년 만에 폐기됨", "현대 국어의 받침 'ㅇ' 소리로, 15세기에는 초성에서도 온전한 자음으로 발음됨"], "answer": 3, "explanation": "현대 국어의 받침 'ㅇ' 소리로, 15세기에는 초성에서도 온전한 자음으로 발음됨" }, { "id": 50, "category": "소실 문자와 음운", "subcategory": "소실 문자 음가", "difficulty": "중급", "question": "15세기 소실 문자 'ㆆ (여린히읗)'의 음성학적 음가 및 특징으로 올바른 것은?", "options": ["성문 파열음 [ʔ]의 음가를 지님", "오직 모음 뒤에서만 쓰이는 형식적 기호", "현대의 된소리 'ㄲ'과 같은 강한 경음", "중국어에는 없고 일본어에만 존재하던 특수음"], "answer": 0, "explanation": "'ㆆ (여린히읗)'은(는) 성문 파열음 [ʔ]의 음가를 지녔습니다." }, { "id": 51, "category": "소실 문자와 음운", "subcategory": "음운 변천사", "difficulty": "고급", "question": "15세기 소실 문자 'ㆆ (여린히읗)'의 역사적 소실 및 변화 과정에 대한 설명은?", "options": ["두음법칙에 의해 어두에서만 살아남음", "이영보래 표기, 관형사형 어미 뒤 된소리 부호, 사잇소리 등으로 쓰이다 15세기 말 소실", "현대 국어의 알파벳 'R' 발음으로 바뀜", "훈민정음 창제 직후 1년 만에 폐기됨"], "answer": 1, "explanation": "이영보래 표기, 관형사형 어미 뒤 된소리 부호, 사잇소리 등으로 쓰이다 15세기 말 소실" }, { "id": 52, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어에서 '나랏말ᄊᆞ미'의 'ㅅ'의 문법적 기능은?", "options": ["호격 조사 ('~아')", "주격 조사 ('~이')", "관형격 조사 ('~의')", "목적격 조사 ('~을')"], "answer": 2, "explanation": "'나라 + ㅅ'에서 'ㅅ'은 무정명사나 존칭 대상 뒤에 붙는 관형격 조사입니다." }, { "id": 53, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어의 주격 조사 형태 중 '자음 뒤'에 결합하는 형태는?", "options": ["이 (예: 사ᄅᆞᆷ + 이 -> 사ᄅᆞ미)", "영형태 Ø ('ㅣ' 모음 뒤)", "가", "ㅣ (모음 뒤)"], "answer": 0, "explanation": "15세기에는 '가'가 없었고, 자음 뒤 '이', 모음 뒤 'ㅣ', 'ㅣ'계열 뒤 '영형태(Ø)'만 존재했습니다." }, { "id": 54, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어의 주격 조사 형태 중 '부텨 (모음 ㅕ로 끝남)' 뒤에 결합하는 주격 조사는?", "options": ["ㅣ (부텨 + ㅣ -> 부톄)", "가", "께서", "이"], "answer": 0, "explanation": "'ㅣ'가 아닌 모음 뒤에서는 반모음 형태의 'ㅣ'가 결합하여 '부톄'가 됩니다." }, { "id": 55, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어에서 체언 '불휘 (뿌리, ㅣ모음으로 끝남)' 뒤에 주격 조사가 결합할 때의 형태는?", "options": ["불휘가", "불휘이", "불휜", "불휘 (영형태 Ø 결합)"], "answer": 3, "explanation": "'ㅣ' 모음으로 끝난 체언 뒤에서는 주격 조사가 겉으로 드러나지 않는 영형태(Ø)로 실현됩니다 ('불휘 기픈 나모ᄂᆞᆫ')." }, { "id": 56, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어 목적격 조사의 결합 규칙으로 올바른 것은?", "options": ["받침 유무와 상관없이 '을'로 통일", "존칭 체언 뒤에는 'ㅅ'만 결합", "무조건 '을/를'만 사용", "양성 끝모음 뒤 'ᄅᆞᆯ', 음성 끝모음 뒤 '룰', 양성 자음 뒤 'ᄅᆞᆯ', 음성 자음 뒤 '을'"], "answer": 3, "explanation": "15세기에는 모음조화와 받침 유무에 따라 ᄅᆞᆯ, 룰, ᄅᆞᆯ, 을 4가지 형태가 엄격히 대립했습니다." }, { "id": 57, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어 어두자음군 중 'ㅂ계 합용병서(ㅄ, ㅂㄷ, ㅂㅅ 등)'의 실제 발음 양상은?", "options": ["'ㅂ'은 묵음이었음", "오직 중국어 차용어에만 존재함", "현대처럼 순수한 된소리로만 발음됨", "어두의 'ㅂ' 소리가 실제로 발음되는 자음군이었음"], "answer": 3, "explanation": "'벼 + ᄡᆞᆯ -> 볏쌀', '조 + ᄡᆞᆯ -> 좁쌀' 등의 현대어 잔재를 통해 어두 'ㅂ'이 실제 발음되었음이 증명됩니다." }, { "id": 58, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어의 표기 원칙인 '연철(連綴, 이어적기)'에 해당하는 표기는?", "options": ["사람이", "사ᄅᆞᆷ미", "사ᄅᆞ미 (사ᄅᆞᆷ + 이)", "사람이"], "answer": 2, "explanation": "앞 음절의 받침 자음을 뒷 음절 초성으로 넘겨 적는 방식을 연철(이어적기)이라고 합니다." }, { "id": 59, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어 방점(傍點)에서 '거성(去聲)'을 나타내는 점의 개수와 음조는?", "options": ["글자 왼쪽에 점 2개 (상성)", "글자 오른쪽에 점 1개", "글자 왼쪽에 점 1개 (높고 곧은 소리)", "점 없음 (낮은 소리)"], "answer": 2, "explanation": "거성은 글자 왼쪽에 점 1개를 찍어 높고 곧은 소리를 나타냈습니다." }, { "id": 60, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어 성조 중 현대 국어에서 '긴소리(장음)'로 변화한 것은?", "options": ["입성(入聲)", "상성(上聲, 2점)", "평성(平聲, 무점)", "거성(去聲, 1점)"], "answer": 1, "explanation": "상성(낮았다가 높아지는 소리)은 근대 국어에서 성조가 소멸하면서 현대 국어의 음장(장음)으로 남았습니다." }, { "id": 61, "category": "중세국어 문법", "subcategory": "조사와 어미", "difficulty": "중급", "question": "중세국어 모음조화에서 '양성모음'끼리 바르게 짝지어진 것은?", "options": ["ㅡ, ㅓ, ㅜ", "ㅣ, ㅡ, ㅓ", "ㆍ, ㅏ, ㅗ", "ㅏ, ㅓ, ㅜ"], "answer": 2, "explanation": "양성모음은 ㆍ, ㅏ, ㅗ (및 재출자 ㅑ, ㅛ) 입니다." }, { "id": 62, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "용비어천가 제2장 '불휘 기픈 나모ᄂᆞᆫ ᄇᆞᄅᆞ매 아니 뮐ᄊᆡ'에서 '뮐ᄊᆡ'의 뜻은?", "options": ["떨어지므로", "마르므로", "흔들리므로 / 움직이므로", "자라므로"], "answer": 2, "explanation": "'뮈다'는 '움직이다/흔들리다'이며, '-ㄹᄊᆡ'는 원인/이유의 연결어미입니다." }, { "id": 63, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "용비어천가 제2장 '곶 됴코 여름 하ᄂᆞ니'에서 '여름'과 '하ᄒᆞ니'의 본래 의미는?", "options": ["열매가 많으니", "꽃이 아름다우니", "계절 여름이 오니", "잎이 무성하니"], "answer": 0, "explanation": "15세기 '여름'은 '열매', '하다'는 '많다/크다'를 뜻했습니다." }, { "id": 64, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "용비어천가 제2장 'ᄉᆡ미 기픈 믈은 ᄀᆞᄆᆞ래 아니 그츨ᄊᆡ'에서 'ᄀᆞᄆᆞ래'의 현대어 뜻은?", "options": ["바다에", "강물에", "가뭄에", "구름에"], "answer": 2, "explanation": "'ᄀᆞᆷ'은 '가뭄'을 뜻하는 중세국어 명사입니다." }, { "id": 65, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "용비어천가 제2장 '내히 이러 바ᄅᆞ래 가ᄒᆞ니'에서 '바ᄅᆞ래'의 현대어 뜻은?", "options": ["바다에", "마을에", "바람에", "들판에"], "answer": 0, "explanation": "'바ᄅᆞᆯ'은 '바다'를 뜻하며, '바ᄅᆞᆯ + 애(부사격조사) -> 바ᄅᆞ래'로 연철되었습니다." }, { "id": 66, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "석보상절(1447)이 간행된 역사적 배경은?", "options": ["한글 최초의 소설", "중국 황제에게 헌정한 외교 서적", "훈민정음 반대를 잠재우기 위한 군사 서적", "세종이 소헌왕후 심씨의 명복을 빌기 위해 수양대군에게 명하여 편찬"], "answer": 3, "explanation": "세종 29년 소헌왕후가 승하하자 왕후의 명복을 빌고 불교 교리를 널리 알리기 위해 편찬한 석가모니 일대기입니다." }, { "id": 67, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "월인천강지곡(1449)의 한글 표기상 독특한 특징은?", "options": ["모든 조사를 한자로 표기함", "한자만 쓰고 한글은 전혀 쓰지 않음", "동국정운식 표기를 전면 거부함", "한글을 큰 글자로 먼저 쓰고, 한자를 작은 글자로 아래에 적음 (국문 본위)"], "answer": 3, "explanation": "월인천강지곡은 세종이 직접 지은 찬불가로, 한글을 본문에 크게 적고 한자를 작게 달아 한글 우위 의식을 드러냈습니다." }, { "id": 68, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "훈민정음 언해본에서 '제 ᄠᅳ들 시러 펴디 못ᄒᆞᆯ 노미 하니라'의 '시러'의 뜻은?", "options": ["싫어서", "능히 / 뜻대로", "싣고서", "빠르게"], "answer": 1, "explanation": "'시러'는 '능히', '마침내 제 뜻을 싣고서/능히'라는 부사적 의미를 지닙니다." }, { "id": 69, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "훈민정음 언해본에서 '스믈여듧 字ᄅᆞᆯ ᄆᆡᇰᄀᆞ노니'에서 창제된 자모의 총 수는?", "options": ["24자", "33자", "17자", "28자 (초성 17자 + 중성 11자)"], "answer": 3, "explanation": "세종대왕이 창제한 기본 자모는 초성 17자 + 중성 11자 = 총 28자입니다 (현대 한글 24자)." }, { "id": 70, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "중세국어 단어 'ᄀᆞᄅᆞᆷ'의 현대어 의미는?", "options": ["나무", "가을", "구름", "강 (江)"], "answer": 3, "explanation": "'ᄀᆞᄅᆞᆷ'은 '강(River)'을 뜻하는 순우리말 고유어입니다." }, { "id": 71, "category": "고전문헌과 어휘", "subcategory": "문헌 해석", "difficulty": "중급", "question": "중세국어 단어 '뫼' 또는 '묗'의 현대어 의미는?", "options": ["모래", "산 (山)", "들판", "무덤"], "answer": 1, "explanation": "'뫼'는 '산'을 뜻하는 15세기 순우리말입니다." }, { "id": 72, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 73, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 74, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 75, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬이] (주격 결합형)"], "answer": 0, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 76, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 77, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 78, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 79, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 80, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민이] (주격 결합형)", "[민] (현대음과 동일)", "[民라] (훈독 표기)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 81, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 82, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 83, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 84, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 85, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁이] (주격 결합형)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[國라] (훈독 표기)", "[국] (현대음과 동일)"], "answer": 1, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 86, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 87, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "부텻 (부텨 + ㅅ)", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 88, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 2, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 89, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 90, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[王라] (훈독 표기)", "[왕] (현대음과 동일)"], "answer": 1, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 91, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 92, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["므를 (믈 + 을 -> 연철)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 93, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 0, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 94, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 95, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[둉이] (주격 결합형)", "[두] (현대음과 동일)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 96, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 97, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 98, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 99, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 100, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[天라] (훈독 표기)", "[텬이] (주격 결합형)", "[천] (현대음과 동일)"], "answer": 0, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 101, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 102, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["나모ᄅᆞᆯ", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 103, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 104, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 105, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (현대음과 동일)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민이] (주격 결합형)", "[民라] (훈독 표기)"], "answer": 1, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 106, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 107, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["어마니믜 (어마님 + 의)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 108, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 109, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 110, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[국] (현대음과 동일)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[國라] (훈독 표기)", "[귁이] (주격 결합형)"], "answer": 1, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 111, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "궁궐의 관직 이름", "바다의 옛말"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 112, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["구루믈 (구룸 + 을 -> 연철)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 113, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)"], "answer": 3, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 114, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 115, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[王라] (훈독 표기)"], "answer": 2, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 116, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 117, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "체언과 조사를 띄어 적음"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 118, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 119, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 120, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[斗라] (훈독 표기)", "[둉이] (주격 결합형)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[두] (현대음과 동일)"], "answer": 2, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 121, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 122, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 123, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)"], "answer": 3, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 124, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 125, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[天라] (훈독 표기)", "[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)"], "answer": 2, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 126, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 127, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 128, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 129, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 130, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[民라] (훈독 표기)", "[민] (현대음과 동일)", "[민이] (주격 결합형)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 131, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 132, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "부텻 (부텨 + ㅅ)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 133, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 0, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 134, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 135, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[국] (현대음과 동일)", "[귁이] (주격 결합형)", "[國라] (훈독 표기)"], "answer": 0, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 136, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 137, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "므를 (믈 + 을 -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 138, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 139, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 140, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 141, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 142, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 143, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 144, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 145, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[두] (현대음과 동일)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[斗라] (훈독 표기)", "[둉이] (주격 결합형)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 146, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 147, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["나모ᄅᆞᆯ", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 148, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 149, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 150, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[天라] (훈독 표기)"], "answer": 1, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 151, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 152, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "어마니믜 (어마님 + 의)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 153, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 2, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 154, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 155, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)", "[민이] (주격 결합형)", "[民라] (훈독 표기)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 156, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말", "궁궐의 관직 이름"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 157, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "구루믈 (구룸 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 158, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 159, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 160, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁이] (주격 결합형)", "[국] (현대음과 동일)", "[國라] (훈독 표기)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)"], "answer": 3, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 161, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "바다의 옛말"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 162, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 163, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 164, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 165, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 166, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 167, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 168, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)"], "answer": 3, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 169, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 170, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[두] (현대음과 동일)", "[둉이] (주격 결합형)", "[斗라] (훈독 표기)"], "answer": 0, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 171, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "궁궐의 관직 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 172, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 173, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 174, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 175, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[텬이] (주격 결합형)"], "answer": 2, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 176, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "하늘의 별자리 이름", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 177, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["부텻 (부텨 + ㅅ)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 178, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))"], "answer": 3, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 179, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 180, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민이] (주격 결합형)", "[民라] (훈독 표기)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)"], "answer": 2, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 181, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 182, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "므를 (믈 + 을 -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 183, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)"], "answer": 3, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 184, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 185, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[국] (현대음과 동일)", "[國라] (훈독 표기)", "[귁이] (주격 결합형)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)"], "answer": 3, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 186, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 187, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 188, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 189, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 190, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 191, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "궁궐의 관직 이름", "바다의 옛말"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 192, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "나모ᄅᆞᆯ", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 193, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 2, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 194, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 195, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[두] (현대음과 동일)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[둉이] (주격 결합형)"], "answer": 2, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 196, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 197, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "어마니믜 (어마님 + 의)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 198, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)"], "answer": 3, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 199, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 200, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))"], "answer": 3, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 201, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 202, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["구루믈 (구룸 + 을 -> 연철)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 203, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)"], "answer": 3, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 204, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 205, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)", "[민이] (주격 결합형)"], "answer": 1, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 206, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 207, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 208, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 209, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 210, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[國라] (훈독 표기)", "[국] (현대음과 동일)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)"], "answer": 2, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 211, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "하늘의 별자리 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 212, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 213, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 214, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 215, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[왕] (현대음과 동일)", "[王라] (훈독 표기)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 216, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 217, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 218, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 219, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 220, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[斗라] (훈독 표기)", "[두] (현대음과 동일)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 221, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "바다의 옛말"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 222, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "부텻 (부텨 + ㅅ)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 223, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 224, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 225, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)"], "answer": 2, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 226, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 227, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["므를 (믈 + 을 -> 연철)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 228, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 229, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 230, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민이] (주격 결합형)", "[민] (현대음과 동일)"], "answer": 1, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 231, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 232, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 233, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 234, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 235, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[국] (현대음과 동일)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)", "[國라] (훈독 표기)"], "answer": 1, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 236, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 237, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "나모ᄅᆞᆯ", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 238, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 239, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 240, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 241, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "궁궐의 관직 이름", "바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 242, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "어마니믜 (어마님 + 의)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 243, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 244, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 245, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[斗라] (훈독 표기)", "[둉이] (주격 결합형)", "[두] (현대음과 동일)"], "answer": 0, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 246, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 247, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "구루믈 (구룸 + 을 -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 248, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 0, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 249, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 250, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[텬이] (주격 결합형)"], "answer": 1, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 251, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 252, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 253, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 254, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 255, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민이] (주격 결합형)", "[민] (현대음과 동일)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)"], "answer": 3, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 256, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 257, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 258, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))"], "answer": 3, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 259, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 260, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[國라] (훈독 표기)", "[귁이] (주격 결합형)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[국] (현대음과 동일)"], "answer": 2, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 261, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 262, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 263, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 0, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 264, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 265, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ] (규칙: 옛이응 종성 반영)", "[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)"], "answer": 0, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 266, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 267, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "부텻 (부텨 + ㅅ)", "체언과 조사를 띄어 적음"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 268, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 269, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 270, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[둉이] (주격 결합형)", "[두] (현대음과 동일)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 271, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 272, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "므를 (믈 + 을 -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 273, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 274, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 275, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))"], "answer": 3, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 276, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 277, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 278, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 279, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 280, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민이] (주격 결합형)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)", "[民라] (훈독 표기)"], "answer": 1, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 281, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 282, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "나모ᄅᆞᆯ"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 283, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)"], "answer": 3, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 284, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 285, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)", "[국] (현대음과 동일)", "[國라] (훈독 표기)"], "answer": 0, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 286, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 287, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "어마니믜 (어마님 + 의)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 288, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 289, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 290, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[왕] (현대음과 동일)", "[王라] (훈독 표기)"], "answer": 1, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 291, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 292, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "구루믈 (구룸 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 293, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 294, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 295, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[두] (현대음과 동일)", "[둉이] (주격 결합형)", "[斗라] (훈독 표기)"], "answer": 0, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 296, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 297, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 298, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 299, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 300, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[天라] (훈독 표기)"], "answer": 1, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 301, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 302, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 303, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)"], "answer": 3, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 304, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 305, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민이] (주격 결합형)", "[民라] (훈독 표기)", "[민] (현대음과 동일)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 306, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 307, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 308, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 309, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 310, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[國라] (훈독 표기)", "[국] (현대음과 동일)", "[귁이] (주격 결합형)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)"], "answer": 3, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 311, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 312, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["부텻 (부텨 + ㅅ)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 313, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 314, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 315, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ] (규칙: 옛이응 종성 반영)", "[왕] (현대음과 동일)", "[王라] (훈독 표기)", "[와ᇰ이] (주격 결합형)"], "answer": 0, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 316, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 317, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "므를 (믈 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 318, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)"], "answer": 3, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 319, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 320, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[두] (현대음과 동일)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[斗라] (훈독 표기)", "[둉이] (주격 결합형)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 321, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "하늘의 별자리 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 322, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 323, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)"], "answer": 3, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 324, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 325, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[天라] (훈독 표기)", "[천] (현대음과 동일)"], "answer": 1, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 326, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 327, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "나모ᄅᆞᆯ"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 328, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 329, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 330, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민] (현대음과 동일)", "[민이] (주격 결합형)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)"], "answer": 3, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 331, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 332, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["어마니믜 (어마님 + 의)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 333, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 334, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 335, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[國라] (훈독 표기)", "[귁이] (주격 결합형)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[국] (현대음과 동일)"], "answer": 2, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 336, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 337, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["구루믈 (구룸 + 을 -> 연철)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 338, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))"], "answer": 3, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 339, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 340, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[왕] (현대음과 동일)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[王라] (훈독 표기)", "[와ᇰ이] (주격 결합형)"], "answer": 1, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 341, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "하늘의 별자리 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 342, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 343, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 344, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 345, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[두] (현대음과 동일)", "[둉이] (주격 결합형)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[斗라] (훈독 표기)"], "answer": 2, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 346, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 347, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 348, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 349, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 350, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬이] (주격 결합형)", "[천] (현대음과 동일)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[天라] (훈독 표기)"], "answer": 2, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 351, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 352, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 353, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)"], "answer": 3, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 354, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 355, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민이] (주격 결합형)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)"], "answer": 2, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 356, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 357, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "부텻 (부텨 + ㅅ)", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 358, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 359, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 360, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[國라] (훈독 표기)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)", "[국] (현대음과 동일)"], "answer": 1, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 361, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 362, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "므를 (믈 + 을 -> 연철)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 363, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 364, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 365, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[왕] (현대음과 동일)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[와ᇰ이] (주격 결합형)", "[王라] (훈독 표기)"], "answer": 1, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 366, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "궁궐의 관직 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 367, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 368, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 369, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 370, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[두] (현대음과 동일)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)"], "answer": 3, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 371, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 372, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "나모ᄅᆞᆯ"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 373, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)"], "answer": 3, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 374, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 375, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[텬이] (주격 결합형)", "[천] (현대음과 동일)"], "answer": 1, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 376, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 377, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "어마니믜 (어마님 + 의)", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 378, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))"], "answer": 3, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 379, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 380, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[民라] (훈독 표기)", "[민이] (주격 결합형)", "[민] (현대음과 동일)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 381, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "궁궐의 관직 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 382, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "구루믈 (구룸 + 을 -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 383, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 2, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 384, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 385, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁이] (주격 결합형)", "[國라] (훈독 표기)", "[국] (현대음과 동일)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)"], "answer": 3, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 386, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 387, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 388, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 389, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 390, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[왕] (현대음과 동일)", "[王라] (훈독 표기)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 391, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 392, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 393, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 394, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 395, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[두] (현대음과 동일)", "[斗라] (훈독 표기)"], "answer": 1, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 396, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "하늘의 별자리 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 397, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 398, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 399, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 400, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[텬이] (주격 결합형)", "[天라] (훈독 표기)"], "answer": 0, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 401, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 402, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "부텻 (부텨 + ㅅ)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 403, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 404, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 405, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민] (현대음과 동일)", "[민이] (주격 결합형)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)"], "answer": 3, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 406, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 407, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "므를 (믈 + 을 -> 연철)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 408, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 409, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 410, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)", "[國라] (훈독 표기)", "[국] (현대음과 동일)"], "answer": 0, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 411, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 412, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 413, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 2, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 414, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 415, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[왕] (현대음과 동일)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[王라] (훈독 표기)"], "answer": 2, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 416, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 417, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "나모ᄅᆞᆯ"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 418, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 419, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 420, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[두] (현대음과 동일)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)"], "answer": 3, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 421, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 422, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "어마니믜 (어마님 + 의)", "체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 423, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 424, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 425, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[텬이] (주격 결합형)"], "answer": 2, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 426, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "궁궐의 관직 이름", "바다의 옛말"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 427, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["구루믈 (구룸 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 428, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 429, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 430, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (현대음과 동일)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민이] (주격 결합형)", "[民라] (훈독 표기)"], "answer": 1, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 431, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 432, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 433, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 434, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 435, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[귁이] (주격 결합형)", "[國라] (훈독 표기)", "[국] (현대음과 동일)"], "answer": 0, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 436, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 437, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "초성에 'ㆆ'을 덧붙여 결합", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "모음조화와 무관하게 '를'로 통일"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 438, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "일본 가나 문자를 차용하는 방식", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 439, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 440, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[王라] (훈독 표기)", "[왕] (현대음과 동일)", "[와ᇰ이] (주격 결합형)", "[와ᇰ] (규칙: 옛이응 종성 반영)"], "answer": 3, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 441, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "궁궐의 관직 이름", "바다의 옛말"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 442, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 443, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 2, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 444, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 445, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[두] (현대음과 동일)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[둉이] (주격 결합형)"], "answer": 2, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 446, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 447, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "부텻 (부텨 + ㅅ)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 448, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 449, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 450, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[天라] (훈독 표기)", "[텬이] (주격 결합형)", "[천] (현대음과 동일)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))"], "answer": 3, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 451, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["바다의 옛말", "궁궐의 관직 이름", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 452, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["므를 (믈 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 453, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "일본 가나 문자를 차용하는 방식", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 0, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 454, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 455, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[民라] (훈독 표기)", "[민이] (주격 결합형)", "[민] (현대음과 동일)", "[민] (규칙: 순음 'ㅁ' 초성 + 평성)"], "answer": 3, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 456, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 457, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)", "모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆡ (사ᄅᆞᆷ + ᄋᆞㅣ)](으)로 실현됩니다 (평칭 양성 유정명사 관형격 조사 ᄋᆞᆯ)." }, { "id": 458, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))"], "answer": 3, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 459, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 460, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[국] (현대음과 동일)", "[귁이] (주격 결합형)", "[國라] (훈독 표기)"], "answer": 0, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 461, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름"], "answer": 2, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 462, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [나모 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "나모ᄅᆞᆯ"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [나모ᄅᆞᆯ](으)로 실현됩니다 (양성 모음 개음절 체언 + ᄅᆞᆯ)." }, { "id": 463, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '부서법(附書法)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "초성에 모음을 붙여 쓰는 위치 규정 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'부서법(附書法)'은(는) 초성에 모음을 붙여 쓰는 위치 규정을(를) 의미합니다 (ㅗ,ㅏ,ㅛ,ㅑ,ㆍ는 초성 아래/오른쪽 등에 부착)." }, { "id": 464, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 465, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ이] (주격 결합형)", "[王라] (훈독 표기)", "[와ᇰ] (규칙: 옛이응 종성 반영)", "[왕] (현대음과 동일)"], "answer": 2, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 466, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)"], "answer": 3, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 467, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [어마님 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["어마니믜 (어마님 + 의)", "초성에 'ㆆ'을 덧붙여 결합", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 0, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [어마니믜 (어마님 + 의)](으)로 실현됩니다 (평칭 음성 유정명사 관형격 조사 의)." }, { "id": 468, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '각자병서(各자竝書)'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "동일한 자음 2개를 가로로 나란히 씀 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))", "방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법"], "answer": 1, "explanation": "'각자병서(各자竝書)'은(는) 동일한 자음 2개를 가로로 나란히 씀을(를) 의미합니다 (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, ㆅ (전탁음 표기))." }, { "id": 469, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상", "외국인에게만 적용되던 예외 규칙"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 470, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[두] (현대음과 동일)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)"], "answer": 3, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 471, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["궁궐의 관직 이름", "바다의 옛말", "하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)"], "answer": 3, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 472, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [구룸 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "초성에 'ㆆ'을 덧붙여 결합", "구루믈 (구룸 + 을 -> 연철)", "체언과 조사를 띄어 적음"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [구루믈 (구룸 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 473, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '가획(加劃)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "기본자에 획을 더하여 거센 소리를 나타냄 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'가획(加劃)의 원리'은(는) 기본자에 획을 더하여 거센 소리를 나타냄을(를) 의미합니다 (ㄱ->ㅋ, ㄴ->ㄷ->ㅌ, ㅁ->ㅂ->ㅍ 등)." }, { "id": 474, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 475, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[天라] (훈독 표기)", "[천] (현대음과 동일)", "[텬이] (주격 결합형)", "[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))"], "answer": 3, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }, { "id": 476, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말", "하늘의 별자리 이름", "궁궐의 관직 이름"], "answer": 0, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 477, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [사ᄅᆞᆷ + 목적격 조사]이 결합한 올바른 표기는?", "options": ["모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)", "초성에 'ㆆ'을 덧붙여 결합"], "answer": 2, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [사ᄅᆞᄆᆞᆯ (사ᄅᆞᆷ + ᄅᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 478, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '성음법(成音法)'에 대한 정확한 정의는?", "options": ["한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸 (합자해 규정)", "일본 가나 문자를 차용하는 방식"], "answer": 2, "explanation": "'성음법(成音法)'은(는) 초성, 중성, 종성이 합쳐져야 온전한 음절을 이룸을(를) 의미합니다 (합자해 규정)." }, { "id": 479, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["현대 국어와 완전히 동일한 음운 현상", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음"], "answer": 1, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 480, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '民'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[민] (규칙: 순음 'ㅁ' 초성 + 평성)", "[민] (현대음과 동일)", "[民라] (훈독 표기)", "[민이] (주격 결합형)"], "answer": 0, "explanation": "한자 '民'은(는) 동국정운식 표기 원칙에 따라 [민](으)로 기록되었습니다 (순음 'ㅁ' 초성 + 평성)." }, { "id": 481, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "바다의 옛말", "궁궐의 관직 이름"], "answer": 1, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 482, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [하ᄂᆞᆯ + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "하ᄒᆞㄽ (하ᄂᆞᆯ + ㅅ)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [하ᄂᆞᆳ (하ᄂᆞᆯ + ㅅ)](으)로 실현됩니다 (무정명사 관형격 조사 ㅅ)." }, { "id": 483, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '합용병서(合用竝書)'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "서로 다른 자음 2~3개를 가로로 나란히 씀 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식"], "answer": 1, "explanation": "'합용병서(合用竝書)'은(는) 서로 다른 자음 2~3개를 가로로 나란히 씀을(를) 의미합니다 (ㅄ, ㅂㄷ, ㅄㄱ, ㄼ, ㄵ 등)." }, { "id": 484, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "외국인에게만 적용되던 예외 규칙", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 485, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '國'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[귁이] (주격 결합형)", "[國라] (훈독 표기)", "[귁] (규칙: 중고음 원음 '위' 모음 반영)", "[국] (현대음과 동일)"], "answer": 2, "explanation": "한자 '國'은(는) 동국정운식 표기 원칙에 따라 [귁](으)로 기록되었습니다 (중고음 원음 '위' 모음 반영)." }, { "id": 486, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "궁궐의 관직 이름", "'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말"], "answer": 2, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 487, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [손 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)", "체언과 조사를 띄어 적음", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [소ᄂᆞᆯ (손 + ᄋᆞᆯ -> 연철)](으)로 실현됩니다 (양성 모음 자음 체언 + ᄅᆞᆯ)." }, { "id": 488, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '상형(象形)의 원리'에 대한 정확한 정의는?", "options": ["방점을 오른쪽에 3개 찍는 규칙", "한자의 붓글씨 획수를 줄이는 기법", "일본 가나 문자를 차용하는 방식", "발음 기관의 모양과 천지인 삼재의 형태를 본뜸 (초성과 중성의 기본자를 만든 근본 원리)"], "answer": 3, "explanation": "'상형(象形)의 원리'은(는) 발음 기관의 모양과 천지인 삼재의 형태를 본뜸을(를) 의미합니다 (초성과 중성의 기본자를 만든 근본 원리)." }, { "id": 489, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상"], "answer": 0, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 490, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '王'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[와ᇰ] (규칙: 옛이응 종성 반영)", "[왕] (현대음과 동일)", "[王라] (훈독 표기)", "[와ᇰ이] (주격 결합형)"], "answer": 0, "explanation": "한자 '王'은(는) 동국정운식 표기 원칙에 따라 [와ᇰ](으)로 기록되었습니다 (옛이응 종성 반영)." }, { "id": 491, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '아ᅀᆞ'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["'아우/동생' (반치음 'ㅿ'이 탈락하여 '아우'가 됨)", "하늘의 별자리 이름", "바다의 옛말", "궁궐의 관직 이름"], "answer": 0, "explanation": "'아ᅀᆞ'은(는) 현대어 '아우/동생'(을)를 뜻합니다. 반치음 'ㅿ'이 탈락하여 '아우'가 됨." }, { "id": 492, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [부텨 + 관형격 조사]이 결합한 올바른 표기는?", "options": ["초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일", "체언과 조사를 띄어 적음", "부텻 (부텨 + ㅅ)"], "answer": 3, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [부텻 (부텨 + ㅅ)](으)로 실현됩니다 (존칭 유정명사 관형격 조사 ㅅ)." }, { "id": 493, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '연서(連書)'에 대한 정확한 정의는?", "options": ["자음 아래에 'ㅇ'을 세로로 이어 적음 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙", "일본 가나 문자를 차용하는 방식"], "answer": 0, "explanation": "'연서(連書)'은(는) 자음 아래에 'ㅇ'을 세로로 이어 적음을(를) 의미합니다 (순음 아래에 적어 순경음(ㅱ, ㅸ, ㅹ, ㆄ)을 만듦)." }, { "id": 494, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["구두 언어에서만 쓰이고 표기에는 반영되지 않음", "외국인에게만 적용되던 예외 규칙", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)", "현대 국어와 완전히 동일한 음운 현상"], "answer": 2, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 495, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '斗'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[둉이] (주격 결합형)", "[斗라] (훈독 표기)", "[둉] (규칙: 형식 종성 'ㅇ' 부착)", "[두] (현대음과 동일)"], "answer": 2, "explanation": "한자 '斗'은(는) 동국정운식 표기 원칙에 따라 [둉](으)로 기록되었습니다 (형식 종성 'ㅇ' 부착)." }, { "id": 496, "category": "고전문헌과 어휘", "subcategory": "고유어 어휘", "difficulty": "초급", "question": "15세기 중세국어 고유어 단어 '노로'의 현대어 뜻과 설명으로 올바른 것은?", "options": ["하늘의 별자리 이름", "'노루' (모음조화에 따른 '노로' 표기)", "바다의 옛말", "궁궐의 관직 이름"], "answer": 1, "explanation": "'노로'은(는) 현대어 '노루'(을)를 뜻합니다. 모음조화에 따른 '노로' 표기." }, { "id": 497, "category": "중세국어 문법", "subcategory": "모음조화와 조사 결합", "difficulty": "고급", "question": "중세국어 형태론에 따라 [믈 + 목적격 조사]이 결합한 올바른 표기는?", "options": ["체언과 조사를 띄어 적음", "므를 (믈 + 을 -> 연철)", "초성에 'ㆆ'을 덧붙여 결합", "모음조화와 무관하게 '를'로 통일"], "answer": 1, "explanation": "15세기 모음조화 및 연철 원칙에 따라 [므를 (믈 + 을 -> 연철)](으)로 실현됩니다 (음성 모음 자음 체언 + 을)." }, { "id": 498, "category": "훈민정음 해례본", "subcategory": "운용 원리", "difficulty": "중급", "question": "훈민정음 제자 및 운용 원리 중 '이체(異體)의 원리'에 대한 정확한 정의는?", "options": ["일본 가나 문자를 차용하는 방식", "가획의 규칙(소리의 세기)과 무관하게 만들어진 글자 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))", "한자의 붓글씨 획수를 줄이는 기법", "방점을 오른쪽에 3개 찍는 규칙"], "answer": 1, "explanation": "'이체(異體)의 원리'은(는) 가획의 규칙(소리의 세기)과 무관하게 만들어진 글자을(를) 의미합니다 (옛이응(ㆁ), 반설음(ㄹ), 반치음(ㅿ))." }, { "id": 499, "category": "소실 문자와 음운", "subcategory": "음운 규칙", "difficulty": "고급", "question": "15세기 중세국어 음운 특징 중 '사잇소리 'ㅅ'의 기능'에 대한 설명으로 올바른 것은?", "options": ["외국인에게만 적용되던 예외 규칙", "현대 국어와 완전히 동일한 음운 현상", "구두 언어에서만 쓰이고 표기에는 반영되지 않음", "체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)"], "answer": 3, "explanation": "'사잇소리 'ㅅ'의 기능'은(는) 15세기 중세국어의 핵심 음운 특징으로, 체언과 체언 사이에서 관형격 기능 및 뒷소리를 된소리로 유도하는 음운적 기능을(를) 의미합니다 (나랏말ᄊᆞ미, 뎔ㅅ사ᄅᆞᆷ 등)." }, { "id": 500, "category": "동국정운", "subcategory": "한자음 표기 실례", "difficulty": "중급", "question": "한자 '天'의 동국정운식 한자음 표기로 올바른 것은?", "options": ["[텬] (규칙: 형식 종성 필요 없음 (ㄴ 받침 존재))", "[천] (현대음과 동일)", "[天라] (훈독 표기)", "[텬이] (주격 결합형)"], "answer": 0, "explanation": "한자 '天'은(는) 동국정운식 표기 원칙에 따라 [텬](으)로 기록되었습니다 (형식 종성 필요 없음 (ㄴ 받침 존재))." }] };
  const DATA_CORPUS = { "corpus_name": "Middle Korean & Hunminjeongeum Linguistic Dataset", "version": "1.2.0", "created_at": "2026-08-25", "sections": [{ "id": "eonji_preface_1459", "title": "훈민정음 언해본 서문 (1459)", "authentic_unspaced_middle_korean": "나랏말ᄊᆞ미듕귁에달아문ᄍᆞ와로서르ᄉᆞᄆᆞᆺ디아니ᄒᆞᆯᄊᆡ이런젼ᄎᆞ로어린백ᄉᆡᇰ이니르고져홇배이셔도ᄆᆞᄎᆞᆷ내제ᄠᅳ들시러펴디못ᄒᆞᆯ노미하니라내이ᄅᆞᆯ위ᄒᆞ야어엿비너겨새로스믈여듧ᄍᆞᄅᆞᆯ맹ᄀᆞ노니사ᄅᆞᆷ마다ᄒᆡᅇᅧ수ᄫᅵ니겨날로ᄡᅮ메편안킈ᄒᆞ고져ᄒᆞᆯᄯᆞᄅᆞ미니라", "phonetic_spaced_korean": "나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할새 이런 전차로 어린 백성이 니르고져 홀 배 이셔도 마참내 제 뜻을 시러 펴디 못할 노미 하니라 내 이랄 위하야 어엿비 너겨 새로 스믈여덟 자랄 맹가노니 사람마다 해여 수비 니겨 날로 쓰메 편안킈 하고져 할 따라미니라", "modern_korean": "우리나라 말이 중국과 달라 문자와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 쓰는 데 편안하게 하고자 할 따름이니라.", "linguistic_notes": { "무띄어쓰기": "15세기 조선 전기의 모든 국문 문헌은 띄어쓰기 없이 연서(連書)로 기록됨 (1896년 독립신문에서 최초로 띄어쓰기 도입)", "나랏말ᄊᆞ미": "나라 + ㅅ(관형격조사) + 말ᄊᆞᆷ(단어) + 이(주격조사) [연철 표기]", "듕귁": "中國의 15세기 동국정운식 한자음 발음", "문ᄍᆞ": "文字의 15세기 동국정운식 한자음 발음", "ᄉᆞᄆᆞᆺ디": "통(通)하지", "어린": "어리석은 (어리다 -> 15세기: 어리석다, 현대: 나이가 적다)", "백ᄉᆡᇰ": "百姓의 15세기 동국정운식 한자음 발음", "노미": "놈(사람) + 이(주격조사) [15세기: 일반 사람, 현대: 비하어]", "위ᄒᆞ야": "爲(위할 위) + ᄒᆞ야", "어엿비": "불쌍히 (어엿브다 -> 15세기: 가련하다, 현대: 예쁘다)", "수ᄫᅵ": "쉽게 (순경음 ᄫ 표기)", "편안킈": "便安(편안) + 킈" } }, { "id": "dongguk_jeongun_examples", "title": "동국정운식 한자음 대표 예시표", "entries": [{ "hanja": "세상 세 (世)", "dongguk": "솅", "modern": "세", "rule": "형식종성 ㅇ (3성 체계 완비)" }, { "hanja": "나라 국 (國)", "dongguk": "귁", "modern": "국", "rule": "중고음(홍무정운) 원음 '위' 모음 반영" }, { "hanja": "달 월 (月)", "dongguk": "워ᇹ", "modern": "월", "rule": "이영보래 (ㄹ 받침 뒤 여린히읗 ㆆ 덧붙임)" }, { "hanja": "날 일 (日)", "dongguk": "ᅀᅵᇹ", "modern": "일", "rule": "이영보래 + 반치음(ㅿ) 초성 반영" }, { "hanja": "말 두 (斗)", "dongguk": "둉", "modern": "두", "rule": "형식종성 ㅇ 부착" }, { "hanja": "편할 편 (便)", "dongguk": "뼌", "modern": "편", "rule": "전탁 초성 ㅃ 유성음 원음 반영" }] }] };

  // 2. Storage Manager
  const STORAGE_KEYS = {
    STATS: 'mk_quiz_stats',
    BOOKMARKS: 'mk_quiz_bookmarks',
    WRONG_ANSWERS: 'mk_quiz_wrong_answers',
    HISTORY: 'mk_quiz_history'
  };

  const Storage = {
    getStats() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.STATS);
        return raw ? JSON.parse(raw) : { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
      } catch {
        return { totalSolved: 0, totalCorrect: 0, streak: 0, maxStreak: 0 };
      }
    },
    updateStats(isCorrect) {
      const stats = this.getStats();
      stats.totalSolved += 1;
      if (isCorrect) {
        stats.totalCorrect += 1;
        stats.streak += 1;
        stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
      } else {
        stats.streak = 0;
      }
      try {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
      } catch { }
      return stats;
    },
    getBookmarks() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    },
    toggleBookmark(questionId) {
      const bookmarks = this.getBookmarks();
      const idx = bookmarks.indexOf(questionId);
      if (idx > -1) {
        bookmarks.splice(idx, 1);
      } else {
        bookmarks.push(questionId);
      }
      try {
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      } catch { }
      return bookmarks.includes(questionId);
    },
    isBookmarked(questionId) {
      return this.getBookmarks().includes(questionId);
    },
    getWrongAnswers() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    },
    recordWrongAnswer(questionId) {
      const list = this.getWrongAnswers();
      if (!list.includes(questionId)) {
        list.push(questionId);
        try {
          localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
        } catch { }
      }
    },
    removeWrongAnswer(questionId) {
      const list = this.getWrongAnswers();
      const idx = list.indexOf(questionId);
      if (idx > -1) {
        list.splice(idx, 1);
        try {
          localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(list));
        } catch { }
      }
    },
    saveExamResult(result) {
      try {
        const history = this.getExamHistory();
        history.unshift(result);
        if (history.length > 50) history.pop();
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      } catch { }
    },
    getExamHistory() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }
  };

  // 3. Data Manager
  const DataManager = {
    questions: DATA_QUESTIONS.questions || [],
    categories: DATA_QUESTIONS.categories || [],
    corpus: DATA_CORPUS || null,

    getAllQuestions() {
      return this.questions;
    },
    getQuestionById(id) {
      return this.questions.find(q => q.id === id);
    },
    getCategories() {
      return this.categories;
    },
    getByCategory(category) {
      if (!category || category === 'all') return this.questions;
      return this.questions.filter(q => q.category === category);
    },
    getRandomSample(count = 20, category = null) {
      const pool = category ? this.getByCategory(category) : [...this.questions];
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.min(count, shuffled.length));
    },
    searchQuestions(query = '', category = 'all', difficulty = 'all', examType = 'all') {
      let pool = [...this.questions];

      if (category && category !== 'all') {
        pool = pool.filter(q => q.category === category);
      }

      if (difficulty && difficulty !== 'all') {
        if (difficulty === 'Lv. 1' || difficulty === '초급') pool = pool.filter(q => q.difficulty === '초급');
        else if (difficulty === 'Lv. 2' || difficulty === '중급') pool = pool.filter(q => q.difficulty === '중급');
        else if (difficulty === 'Lv. 3' || difficulty === '고급') pool = pool.filter(q => q.difficulty === '고급');
      }

      if (examType && examType !== 'all') {
        pool = pool.filter(q => {
          const mockSource = '2025 훈민정음 평가원 하반기 ' + ((q.id % 3) + 1) + '차';
          return mockSource.includes(examType);
        });
      }

      if (!query || !query.trim()) return pool;
      const qText = query.trim().toLowerCase();
      return pool.filter(item => {
        return (
          item.question.toLowerCase().includes(qText) ||
          item.explanation.toLowerCase().includes(qText) ||
          item.subcategory.toLowerCase().includes(qText) ||
          item.category.toLowerCase().includes(qText) ||
          item.options.some(opt => opt.toLowerCase().includes(qText))
        );
      });
    },
    getCorpus() {
      return this.corpus;
    }
  };

  // 4. Hero Carousel Data (Programmers Exact Typography)
  const HERO_SLIDES = [
    {
      theme: 'theme-dark',
      badge: '국어 역량평가',
      title: '실전으로 증명하는<br />중세국어 500제 완성 과정',
      desc: '훈민정음 해례본부터 동국정운 한자음까지<br />실전 문제 풀이로 완성하는 국어학 경쟁력'
    },
    {
      theme: 'theme-silver',
      badge: '데브코스',
      title: '포트폴리오로 증명하는<br />9주 훈민정음 심화과정',
      desc: '해례본 제자해부터 15세기 원문 강독까지<br />프로젝트로 완성하는 실무 국어학 전문성'
    },
    {
      theme: 'theme-indigo',
      badge: '동국정운 특강',
      title: '3성 체계와 이영보래<br />동국정운 한자음 100제 마스터',
      desc: '순경음·반치음과 15세기 소실 문자의 음운론적 실체<br />핵심 개념을 단번에 정리하는 집중 코스'
    },
    {
      theme: 'theme-teal',
      badge: '실전 모의고사',
      title: '2026학년도 중세국어<br />전국 표준 모의평가 20제',
      desc: '공식 500제 문제은행 기반 실시간 역량 진단<br />백분위 성취도 및 취약 영역 정밀 분석'
    },
    {
      theme: 'theme-amber',
      badge: '원문 아카이브',
      title: '1446 세종 친제 해례본<br />15세기 음성학적 당대 독음 수록',
      desc: '어두자음군 [pt-], 순경음 [β], 구개음화 미적용 [ti]<br />국제음성기호(IPA) 대조표로 확인하는 세종 시대의 발음'
    }
  ];

  // 5. App State Machine
  const State = {
    view: 'dashboard',
    mode: 'exam',
    activeCategory: 'all',
    sessionQuestions: [],
    currentIndex: 0,
    userAnswers: [],
    isAnswered: false,
    selectedOption: null,
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    currentHeroSlide: 0,

    combiner: {
      cho: 'ᄫ',
      jung: 'ᅵ',
      jong: ''
    },

    saveSessionToStorage() {
      try {
        const payload = {
          mode: this.mode,
          activeCategory: this.activeCategory,
          routeSource: this.routeSource,
          questionIds: this.sessionQuestions.map(q => q.id),
          currentIndex: this.currentIndex,
          userAnswers: this.userAnswers,
          isAnswered: this.isAnswered,
          selectedOption: this.selectedOption,
          elapsedSeconds: this.elapsedSeconds
        };
        sessionStorage.setItem('alphagh_active_quiz_session', JSON.stringify(payload));
      } catch (err) {
        console.error('Session save error', err);
      }
    },

    restoreSessionFromStorage() {
      try {
        const raw = sessionStorage.getItem('alphagh_active_quiz_session');
        if (!raw) return false;
        const payload = JSON.parse(raw);
        if (!payload || !payload.questionIds || payload.questionIds.length === 0) return false;

        const questions = payload.questionIds.map(id => DataManager.getQuestionById(id)).filter(Boolean);
        if (questions.length === 0) return false;

        this.mode = payload.mode || 'exam';
        this.activeCategory = payload.activeCategory || 'all';
        this.routeSource = payload.routeSource || '실전 모의고사 (20제)';
        this.sessionQuestions = questions;
        this.currentIndex = Math.min(payload.currentIndex || 0, questions.length - 1);
        this.userAnswers = payload.userAnswers || [];
        this.isAnswered = payload.isAnswered || false;
        this.selectedOption = payload.selectedOption ?? null;
        this.elapsedSeconds = payload.elapsedSeconds || 0;
        this.view = 'quiz';
        this.startTimer();
        return true;
      } catch (err) {
        console.error('Session restore error', err);
        return false;
      }
    },

    clearSessionStorage() {
      sessionStorage.removeItem('alphagh_active_quiz_session');
    },

    startSession(mode, questions, category = 'all', routeSource = null) {
      this.mode = mode;
      this.activeCategory = category;
      this.sessionQuestions = questions;
      this.routeSource = routeSource || {
        exam: '실전 모의고사 (20제)',
        infinite: '전체 문항 챌린지',
        review: '오답노트 & 복습',
        single: '문항 검색 & 색인',
        category: category !== 'all' ? category : '영역별 학습'
      }[mode] || '국어 평가';
      this.currentIndex = 0;
      this.userAnswers = [];
      this.isAnswered = false;
      this.selectedOption = null;
      this.view = 'quiz';
      this.elapsedSeconds = 0;
      this.startTimer();
      this.saveSessionToStorage();
      sessionStorage.setItem('alphagh_current_view', 'quiz');
      window.location.hash = '#quiz';
    },
    startTimer() {
      this.stopTimer();
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const timerEl = document.getElementById('session-timer');
        if (timerEl) {
          const mins = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, '0');
          const secs = String(this.elapsedSeconds % 60).padStart(2, '0');
          timerEl.textContent = `${mins}:${secs}`;
        }
      }, 1000);
    },
    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },
    getCurrentQuestion() {
      return this.sessionQuestions[this.currentIndex] || null;
    },
    answerCurrentQuestion(optionIndex) {
      if (this.isAnswered) return;
      const currentQ = this.getCurrentQuestion();
      if (!currentQ) return;

      this.isAnswered = true;
      this.selectedOption = optionIndex;
      const isCorrect = optionIndex === currentQ.answer;

      this.userAnswers.push({
        questionId: currentQ.id,
        selectedOption: optionIndex,
        isCorrect,
        question: currentQ
      });

      Storage.updateStats(isCorrect);
      if (!isCorrect) {
        Storage.recordWrongAnswer(currentQ.id);
      } else {
        Storage.removeWrongAnswer(currentQ.id);
      }
      this.saveSessionToStorage();
      return isCorrect;
    },
    nextQuestion() {
      if (this.currentIndex + 1 < this.sessionQuestions.length) {
        this.currentIndex += 1;
        this.isAnswered = false;
        this.selectedOption = null;
        this.saveSessionToStorage();
        return true;
      }
      return false;
    },
    finishSession() {
      this.stopTimer();
      this.clearSessionStorage();
      this.view = 'result';

      const total = this.userAnswers.length;
      const correctCount = this.userAnswers.filter((a) => a.isCorrect).length;
      const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

      const record = {
        date: new Date().toISOString(),
        mode: this.mode,
        category: this.activeCategory,
        total,
        correctCount,
        percentage,
        elapsedSeconds: this.elapsedSeconds
      };

      Storage.saveExamResult(record);
      return record;
    }
  };

  // 6. UI Renderers (Programmers 2026 Rich Gradient Architecture)
  const UI = {
    getRoot() {
      return document.getElementById('app-root');
    },
    renderDashboard() {
      const root = this.getRoot();
      if (!root) return;
      const wrongCount = Storage.getWrongAnswers().length;
      const slide = HERO_SLIDES[State.currentHeroSlide];

      root.innerHTML = `
        <!-- Programmers Rich Gradient Hero Banner -->
        <section class="pg-hero-section ${slide.theme}" id="hero-banner-section">
          <div class="pg-hero-inner">
            <div class="pg-hero-content">
              <div class="pg-hero-badge" id="hero-badge">
                <span>${slide.badge}</span>
              </div>
              <h1 class="pg-hero-title" id="hero-title">
                ${slide.title}
              </h1>
              <p class="pg-hero-desc" id="hero-desc">
                ${slide.desc}
              </p>
              <div class="pg-hero-pagination">
                <button id="hero-prev" title="이전 배너" aria-label="이전">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <span class="pagination-current">${State.currentHeroSlide + 1}</span>
                <span class="pagination-slash">/</span>
                <span class="pagination-total">${HERO_SLIDES.length}</span>
                <button id="hero-next" title="다음 배너" aria-label="다음">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <!-- Programmers 3D Isometric Laptop & Study Graphic -->
            <div class="pg-hero-graphic">
              <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Background Atmospheric Glow -->
                <ellipse cx="260" cy="140" rx="140" ry="90" fill="rgba(255,255,255,0.06)" filter="blur(20px)"/>
                
                <!-- 3D Laptop Base -->
                <path d="M120 180L240 230L340 185L220 135L120 180Z" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <path d="M120 180L240 230V242L120 192V180Z" fill="#0f172a"/>
                <path d="M240 230L340 185V197L240 242V230Z" fill="#090d16"/>
                <!-- Laptop Keyboard Glow Grid -->
                <path d="M150 175L235 210L310 178L225 143L150 175Z" fill="#0f172a" stroke="#1e293b"/>
                <path d="M205 198L245 214L255 210L215 194L205 198Z" fill="#3b82f6" opacity="0.8"/>
                
                <!-- Laptop Screen -->
                <path d="M220 135L340 185V75L220 25V135Z" fill="#090d16" stroke="#475569" stroke-width="2"/>
                <!-- Display Area -->
                <path d="M230 130L330 172V85L230 43V130Z" fill="#020617"/>
                <path d="M240 60L310 88" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
                <path d="M240 75L295 97" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M240 90L280 106" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                
                <!-- 3D Floating Study Folder (Yellow/Amber Programmers Style) -->
                <g transform="translate(60, 50)">
                  <path d="M40 70L110 40L140 55L70 85L40 70Z" fill="#f59e0b"/>
                  <path d="M40 70L70 85V130L40 115V70Z" fill="#d97706"/>
                  <path d="M70 85L160 55V100L70 130V85Z" fill="#fbbf24"/>
                  <!-- Folder Tab -->
                  <path d="M45 65L75 52L88 58L58 71L45 65Z" fill="#fef3c7"/>
                  <!-- Floating Magnifying Glass -->
                  <circle cx="120" cy="85" r="24" fill="rgba(255,255,255,0.2)" stroke="#ffffff" stroke-width="3"/>
                  <line x1="138" y1="102" x2="160" y2="124" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <!-- Quick Action Standalone Rounded Square Buttons Grid -->
        <div class="quick-icons-strip">
          <div class="quick-icons-grid">
            <!-- 1. Test / Code & Exam Unified -->
            <div class="quick-icon-item" data-action="exam">
              <div class="quick-icon-sq">
                <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <span class="quick-icon-label">국어평가</span>
            </div>

            <!-- 2. Wrong Notes / Checklist -->
            <div class="quick-icon-item" data-action="review">
              <div class="quick-icon-sq">
                <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <span class="quick-icon-label">오답노트 (${wrongCount})</span>
            </div>

            <!-- 3. Certification Star / Medal -> Hash Placeholder -->
            <div class="quick-icon-item" data-action="cert">
              <div class="quick-icon-sq">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                  <line x1="10" y1="3" x2="8" y2="21"></line>
                  <line x1="16" y1="3" x2="14" y2="21"></line>
                </svg>
              </div>
              <span class="quick-icon-label">###</span>
            </div>
          </div>
        </div>

        </div>
      `;
    },
    renderQuiz() {
      const root = this.getRoot();
      if (!root) return;
      const q = State.getCurrentQuestion();
      if (!q) {
        this.renderDashboard();
        return;
      }

      const totalInSession = State.sessionQuestions.length;
      const currentNum = State.currentIndex + 1;
      const progressPercent = Math.round((currentNum / totalInSession) * 100);
      const isBookmarked = Storage.isBookmarked(q.id);

      let diffBadge = '<span class="badge badge-level-1">Lv.1 초급</span>';
      if (q.difficulty === '중급') diffBadge = '<span class="badge badge-level-2">Lv.2 중급</span>';
      if (q.difficulty === '고급') diffBadge = '<span class="badge badge-level-3">Lv.3 고급</span>';

      // Build dynamic contextual breadcrumb hierarchy
      const routeTitle = State.routeSource || '실전 모의고사 (20제)';
      let routeHtml = '';
      if (State.mode === 'single') {
        routeHtml = `
          <a href="#" class="crumb-link crumb-route" data-crumb="catalog">문제 검색</a>
          <span class="crumb-sep">&rsaquo;</span>
          <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
          <span class="crumb-sep">&rsaquo;</span>
          <span class="crumb-current">${q.subcategory} (${q.id}번 문항)</span>
        `;
      } else if (State.mode === 'category') {
        routeHtml = `
          <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
          <span class="crumb-sep">&rsaquo;</span>
          <span class="crumb-current">${q.subcategory}</span>
        `;
      } else if (State.mode === 'review') {
        routeHtml = `
          <a href="#" class="crumb-link crumb-route" data-crumb="review">오답노트</a>
          <span class="crumb-sep">&rsaquo;</span>
          <span class="crumb-current">${q.category} &middot; ${q.subcategory}</span>
        `;
      } else {
        routeHtml = `
          <span class="crumb-route-badge">${routeTitle}</span>
          <span class="crumb-sep">&rsaquo;</span>
          <a href="#" class="crumb-link crumb-category" data-crumb="category" data-cat="${q.category}">${q.category}</a>
          <span class="crumb-sep">&rsaquo;</span>
          <span class="crumb-current">${q.subcategory}</span>
        `;
      }

      root.innerHTML = `
        <div class="quiz-session-header">
          <nav class="quiz-nav-breadcrumbs" aria-label="문항 위치">
            <a href="#" class="crumb-link crumb-home" data-crumb="dashboard">
              <svg class="crumb-home-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span>홈</span>
            </a>
            <span class="crumb-sep">&rsaquo;</span>
            ${routeHtml}
          </nav>
          <div class="quiz-session-controls">
            <div class="quiz-timer-pill" id="session-timer">00:00</div>
            <button class="btn btn-outline btn-sm" id="btn-toggle-bookmark" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
              ${isBookmarked ? '북마크 해제' : '북마크'}
            </button>
            <button class="btn btn-outline btn-sm" id="btn-back-to-catalog" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
              종료
            </button>
          </div>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="quiz-split-layout">
          <!-- Left Column: Academic Passage & Problem Thesis -->
          <div class="quiz-left-pane">
            <div class="quiz-meta-strip">
              <span class="quiz-question-number">문항 ${currentNum} / ${totalInSession}</span>
              <span class="badge badge-category">${q.category}</span>
              ${diffBadge}
            </div>

            <h2 class="quiz-question-title">${q.question}</h2>

            <div class="quiz-context-bar">
              <span class="context-tag-label">문헌 출처</span>
              <span class="context-tag-value">국립국어원 표준 문헌 DB &middot; KS X 1026-1</span>
              <span class="context-sep">/</span>
              <span class="context-tag-label">평가 영역</span>
              <span class="context-tag-value">${q.subcategory}</span>
            </div>
          </div>

          <!-- Right Column: Unified Options & Academic Commentary -->
          <div class="quiz-right-pane">
            <!-- Unified Option Group -->
            <div class="quiz-unified-options" id="options-container">
              ${q.options
          .map((opt, idx) => {
            let stateClass = '';
            let tagBadge = '';
            if (State.isAnswered) {
              if (idx === q.answer) {
                stateClass = 'option-correct';
                tagBadge = '<span class="option-status-tag tag-correct">정답</span>';
              } else if (idx === State.selectedOption) {
                stateClass = 'option-incorrect';
                tagBadge = '<span class="option-status-tag tag-incorrect">선택 오답</span>';
              } else {
                stateClass = 'option-dimmed';
              }
            }
            const numLabel = ['①', '②', '③', '④', '⑤'][idx] || (idx + 1);
            return `
                    <button class="quiz-option-row ${stateClass}" data-index="${idx}" ${State.isAnswered ? 'disabled' : ''}>
                      <span class="option-circle-num">${numLabel}</span>
                      <span class="option-row-text">${opt}</span>
                      ${tagBadge}
                    </button>
                  `;
          })
          .join('')}
            </div>

            ${State.isAnswered
          ? `
                <!-- Clean Unboxed Editorial Commentary Strip -->
                <div class="quiz-feedback-strip">
                  <div class="feedback-header-line">
                    <div class="feedback-verdict-group">
                      <span class="feedback-verdict-pill ${State.selectedOption === q.answer ? 'pill-correct' : 'pill-incorrect'}">
                        ${State.selectedOption === q.answer ? '정답입니다' : '오답입니다'}
                      </span>
                      ${State.selectedOption !== q.answer
            ? `<span class="feedback-correct-cue">정답: <strong>${['①', '②', '③', '④', '⑤'][q.answer] || (q.answer + 1)}번</strong></span>`
            : ''
          }
                    </div>
                    ${currentNum < totalInSession
            ? `<button class="btn btn-primary" id="btn-next-question" style="padding: 0.5rem 1.15rem; font-size: 0.88rem;">다음 문항 풀기 <kbd class="kbd-inline">Enter ↵</kbd></button>`
            : `<button class="btn btn-primary" id="btn-finish-quiz" style="padding: 0.5rem 1.15rem; font-size: 0.88rem;">평가 결과 리포트 확인 <kbd class="kbd-inline">Enter ↵</kbd></button>`
          }
                  </div>
                  <div class="feedback-commentary-body">${q.explanation}</div>
                </div>
              `
          : ''
        }
          </div>
        </div>


      `;
    },
    renderResult(record) {
      const root = this.getRoot();
      if (!root) return;
      const total = record.total;
      const correct = record.correctCount;
      const pct = record.percentage;
      const mins = Math.floor(record.elapsedSeconds / 60);
      const secs = record.elapsedSeconds % 60;

      const catMap = {};
      State.userAnswers.forEach((ans) => {
        const cat = ans.question.category;
        if (!catMap[cat]) catMap[cat] = { total: 0, correct: 0 };
        catMap[cat].total += 1;
        if (ans.isCorrect) catMap[cat].correct += 1;
      });

      root.innerHTML = `
        <div class="quiz-container">
          <div class="scorecard-hero">
            <span class="badge" style="background: rgba(255,255,255,0.2); color: #ffffff;">2026 중세국어 역량평가 리포트</span>
            <div class="score-number">${pct}점</div>
            <div class="score-label">${total}문항 중 ${correct}문항 정답 | 총 소요시간 ${mins}분 ${secs}초</div>
            <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.75rem; flex-wrap: wrap;">
              <button class="btn-promo-white" id="btn-retry-exam">새 모의고사 응시</button>
              <button class="btn btn-outline" id="btn-review-wrong" style="color: #ffffff; border-color: rgba(255,255,255,0.4);">오답노트 복습</button>
              <button class="btn btn-outline" id="btn-go-home" style="color: #ffffff; border-color: rgba(255,255,255,0.4);">홈으로 이동</button>
            </div>
          </div>

          <div style="background: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow-elevation-1);">
            <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-primary);">
              영역별 성취도 분석
            </h3>
            <div class="category-stats-grid">
              ${Object.entries(catMap)
          .map(([catName, stats]) => {
            const catPct = Math.round((stats.correct / stats.total) * 100);
            return `
                    <div class="cat-stat-card">
                      <div class="cat-stat-header">
                        <span style="font-weight: 700;">${catName}</span>
                        <span style="font-family: var(--font-mono); color: var(--accent-primary);">${stats.correct}/${stats.total} (${catPct}%)</span>
                      </div>
                      <div class="cat-stat-bar">
                        <div class="cat-stat-bar-fill" style="width: ${catPct}%;"></div>
                      </div>
                    </div>
                  `;
          })
          .join('')}
          </div>
        </div>
      `;
    },
    renderCatalog(category = 'all', searchQuery = '', difficulty = 'all', examType = 'all') {
      const root = this.getRoot();
      if (!root) return;
      const categories = DataManager.getCategories();
      const questions = DataManager.searchQuestions(searchQuery, category, difficulty, examType);

      root.innerHTML = `
        <div class="app-container" style="padding-top: 2rem; padding-bottom: 5rem; max-width: 1080px;">
          <!-- Programmers Top Problem Search Bar -->
          <div class="pg-search-container">
            <div class="pg-search-input-wrap">
              <input
                type="search"
                id="catalog-search-input"
                value="${searchQuery}"
                placeholder="풀고 싶은 문제 제목, 기출문제 검색"
                class="pg-search-input"
              />
              <button class="pg-search-btn" id="btn-search-trigger" aria-label="검색">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.2" fill="none">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            <!-- Programmers Dropdown Filter Pills -->
            <div class="pg-filter-dropdowns">
              <div class="pg-filter-select-wrap">
                <select class="pg-filter-select" id="filter-difficulty">
                  <option value="all" ${difficulty === 'all' ? 'selected' : ''}>난이도 전체</option>
                  <option value="Lv. 1" ${difficulty === 'Lv. 1' ? 'selected' : ''}>Lv. 1 (초급)</option>
                  <option value="Lv. 2" ${difficulty === 'Lv. 2' ? 'selected' : ''}>Lv. 2 (중급)</option>
                  <option value="Lv. 3" ${difficulty === 'Lv. 3' ? 'selected' : ''}>Lv. 3 (고급)</option>
                </select>
                <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>

              <div class="pg-filter-select-wrap">
                <select class="pg-filter-select" id="filter-category-select">
                  <option value="all" ${category === 'all' ? 'selected' : ''}>영역 (전체)</option>
                  ${categories
          .map((c) => `<option value="${c}" ${category === c ? 'selected' : ''}>${c}</option>`)
          .join('')}
                </select>
                <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>

              <div class="pg-filter-select-wrap">
                <select class="pg-filter-select" id="filter-type">
                  <option value="all" ${examType === 'all' ? 'selected' : ''}>기출문제 모음</option>
                  <option value="1차" ${examType === '1차' ? 'selected' : ''}>2025 훈민정음 평가원 1차</option>
                  <option value="2차" ${examType === '2차' ? 'selected' : ''}>2025 훈민정음 평가원 2차</option>
                  <option value="3차" ${examType === '3차' ? 'selected' : ''}>2025 훈민정음 평가원 3차</option>
                </select>
                <svg class="select-chevron" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>

          <!-- Problem List Header Counter & Sorter -->
          <div class="pg-list-header">
            <div class="pg-list-count">
              <strong>${questions.length}</strong> 문제
            </div>
            <div class="pg-list-sort">
              <span>최신순</span>
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>

          <!-- Programmers Flat Minimal Table List -->
          <div class="pg-table-card">
            <div class="pg-table-head">
              <div class="col-status">상태</div>
              <div class="col-title">제목</div>
              <div class="col-level">난이도</div>
              <div class="col-solvers">완료한 사람</div>
              <div class="col-accuracy">정답률</div>
            </div>

            <div class="pg-table-body">
              ${questions
          .map((q, idx) => {
            let levelText = 'Lv. 1';
            let levelColor = '#10b981'; // Green
            if (q.difficulty === '중급') {
              levelText = 'Lv. 2';
              levelColor = '#10b981';
            } else if (q.difficulty === '고급') {
              levelText = 'Lv. 3';
              levelColor = '#f59e0b'; // Gold / Orange
            }

            // Simulated realistic solver counts and accuracy percentages based on id & difficulty
            const solvers = (1200 - (q.id * 2) % 950 + 150).toLocaleString();
            const accuracy = Math.max(12, Math.min(88, 92 - (q.id * 3) % 75));
            const mockSource = '2025 훈민정음 평가원 하반기 ' + ((q.id % 3) + 1) + '차';

            return `
                    <div class="pg-table-row" data-id="${q.id}">
                      <div class="col-status">
                        <span class="status-dot"></span>
                      </div>
                      <div class="col-title">
                        <div class="pg-title-row">
                          <a href="#" class="pg-problem-title btn-solve-single" data-id="${q.id}">
                            ${q.question}
                          </a>
                          <span class="pg-level-badge" style="color: ${levelColor};">${levelText}</span>
                        </div>
                        <span class="pg-problem-sub">${mockSource} &middot; ${q.category}</span>
                        <div class="pg-mobile-stats-row">
                          <span class="pg-stat-solvers">${solvers}명</span>
                          <span class="pg-stat-accuracy">정답률 ${accuracy}%</span>
                        </div>
                      </div>
                      <div class="col-level" style="color: ${levelColor};">
                        ${levelText}
                      </div>
                      <div class="col-solvers">
                        ${solvers}명
                      </div>
                      <div class="col-accuracy">
                        ${accuracy}%
                      </div>
                    </div>
                  `;
          })
          .join('')}
          </div>
        </div>
      `;
    },
    renderCombiner() {
      const root = this.getRoot();
      if (!root) return;

      const choList = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㆆ', 'ㆁ', 'ㅿ', 'ᄫ', 'ᄝ', 'ᄬ', 'ᅗ', 'ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ', 'ㆅ'];
      const jungList = ['ㆍ', 'ㅡ', 'ㅣ', 'ㅗ', 'ㅏ', 'ㅜ', 'ㅓ', 'ㅛ', 'ㅑ', 'ㅠ', 'ㅕ', 'ᆡ', 'ㅢ', 'ㅘ', 'ㅝ', 'ㅚ', 'ㅐ', 'ㅔ'];
      const jongList = ['', 'ㄱ', 'ㆁ', 'ㄷ', 'ㄴ', 'ㅂ', 'ㅁ', 'ㅅ', 'ㄹ', 'ᇹ', 'ᇫ', 'ᆮ', 'ᆺ', 'ᆹ', 'ᆶ'];

      const currentCho = State.combiner.cho;
      const currentJung = State.combiner.jung;
      const currentJong = State.combiner.jong;

      const combinedChar = currentCho + currentJung + currentJong;

      const choHex = 'U+' + currentCho.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
      const jungHex = 'U+' + currentJung.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
      const jongHex = currentJong ? ' + U+' + currentJong.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0') : '';

      let ruleExplanation = '훈민정음 합자해(合字解) 성음법: 초성과 중성이 결합하여 온전한 1음절을 구성합니다.';
      if (['ᄫ', 'ᄝ', 'ᄬ', 'ᅗ'].includes(currentCho)) {
        ruleExplanation = '연서(連書)의 원리: 순음(입술소리) 아래에 목구멍소리 ㅇ을 세로로 이어 적어 순경음(입술가벼운소리 [β])을 합성합니다. (예: 수ᄫᅵ, 더ᄫᅥ)';
      } else if (['ᄠ', 'ᄡ', 'ᄯ', 'ᄣ', 'ᄧ'].includes(currentCho)) {
        ruleExplanation = '합용병서(合用竝書)의 원리: 어두자음군으로 서로 다른 자음 2~3개를 가로로 나란히 결합하여 실제 자음군 소리를 발음합니다. (예: ᄠᅳᆮ [ptɯt], ᄡᆞᆯ [psal])';
      } else if (currentJung === 'ㆍ') {
        ruleExplanation = '하서(下書) 및 천(天)의 원리: 둥근 하늘을 본뜬 양성모음 ㆍ(아래아)는 가로 모음 계열로 초성의 아래에 결합합니다. (예: 나랏말ᄊᆞ미)';
      } else if (currentJong === 'ᇹ') {
        ruleExplanation = '동국정운 이영보래(以影補來) 원리: 한자음 ㄹ 받침 뒤에 여린히읗(ㆆ)을 덧붙여 입성(ㄷ받침)의 조음 긴장성을 나타냅니다. (예: 月 워ᇹ, 日 ᅀᅵᇹ)';
      }

      root.innerHTML = `
        <div class="app-container" style="padding-top: 2rem; padding-bottom: 4rem;">
          <div style="margin-bottom: 1.5rem;">
            <span class="badge badge-blue">KS X 1026-1 국립국어원 표준</span>
            <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em;">
              훈민정음 합자해(合字解) 실시간 자모 조합기
            </h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.25rem;">
              초성(첫소리), 중성(가운뎃소리), 종성(끝소리)을 자유롭게 선택하여 15세기 소실 문자가 조합되는 원리와 유니코드 시퀀스를 실시간으로 확인합니다.
            </p>
          </div>

          <div class="combiner-grid">
            <div class="combiner-display-card">
              <span class="badge badge-level-1">LIVE COMPOSITE GLYPH</span>
              <div class="combiner-huge-glyph">${combinedChar}</div>
              
              <div class="combiner-formula">
                <span>${currentCho} (초)</span>
                <span>+</span>
                <span>${currentJung} (중)</span>
                ${currentJong ? `<span>+</span><span>${currentJong} (종)</span>` : ''}
                <span>=</span>
                <span style="color: var(--accent-primary); font-weight: 900;">${combinedChar}</span>
              </div>

              <div class="combiner-hex-badge" style="margin-bottom: 1.25rem;">
                유니코드 시퀀스: [${choHex} + ${jungHex}${jongHex}] (KS X 1026-1)
              </div>

              <div class="combiner-rule-desc">
                <strong>학술 해설:</strong> ${ruleExplanation}
              </div>

              <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
                <button class="btn btn-primary" id="btn-copy-glyph" data-char="${combinedChar}">
                  조합된 글자 복사
                </button>
                <button class="btn btn-outline" id="btn-search-glyph" data-char="${combinedChar}">
                  500제에서 검색
                </button>
              </div>
            </div>

            <div class="jamo-picker-card">
              <div>
                <div class="jamo-section-title">
                  <span>1. 초성 선택 (첫소리: 기본/가획/이체/순경음/병서)</span>
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentCho}</span>
                </div>
                <div class="jamo-tiles-row">
                  ${choList
          .map(
            (c) =>
              `<button class="jamo-tile-btn ${c === currentCho ? 'active' : ''}" data-type="cho" data-val="${c}">${c}</button>`
          )
          .join('')}
                </div>
              </div>

              <div>
                <div class="jamo-section-title">
                  <span>2. 중성 선택 (가운뎃소리: 삼재/초출/재출/합용)</span>
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentJung}</span>
                </div>
                <div class="jamo-tiles-row">
                  ${jungList
          .map(
            (j) =>
              `<button class="jamo-tile-btn ${j === currentJung ? 'active' : ''}" data-type="jung" data-val="${j}">${j}</button>`
          )
          .join('')}
                </div>
              </div>

              <div>
                <div class="jamo-section-title">
                  <span>3. 종성 선택 (끝소리: 8종성 / 이영보래 / 없음)</span>
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary);">${currentJong || '없음'}</span>
                </div>
                <div class="jamo-tiles-row">
                  ${jongList
          .map(
            (f) =>
              `<button class="jamo-tile-btn ${f === currentJong ? 'active' : ''}" data-type="jong" data-val="${f}">${f || 'Ø'}</button>`
          )
          .join('')}
                </div>
              </div>
          </div>
        </div>
      `;
    },
    renderCorpus() {
      const root = this.getRoot();
      if (!root) return;
      root.innerHTML = `
        <div class="app-container" style="padding-top: 2rem; padding-bottom: 4rem;">
          <div style="margin-bottom: 2rem;">
            <span class="badge badge-blue">국립국어원 표준 자료실</span>
            <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em;">
              15세기 훈민정음 및 중세국어 원문 아카이브
            </h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.25rem;">
              1446년 훈민정음 해례본 어제 서문, 1448년 동국정운 한자음 표기 체계, 1459년 월인석보 훈민정음언해를 집대성한 공식 학술 원문입니다.
            </p>
          </div>

          <!-- Section 1: Authentic Text Card -->
          <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1); margin-bottom: 2rem;">
            <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary);">
              훈민정음 언해본 서문 (1459)
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              15세기 원본 목판본 표기 규칙에 따라 띄어쓰기 없이 연서(連書)로 기록된 원형 본문과 학습용 대역입니다.
            </p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                1. 15세기 원본 형태 (무띄어쓰기 연서 정음 원문)
              </span>
              <span class="badge badge-category">연서 원형</span>
            </div>
            <div style="font-family: var(--font-serif); font-size: 1.25rem; line-height: 2; padding: 1.5rem; background-color: var(--surface-2); border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; letter-spacing: 0.02em; word-break: break-all;">
              나랏말ᄊᆞ미듕귁에달아문ᄍᆞ와로서르ᄉᆞᄆᆞᆺ디아니ᄒᆞᆯᄊᆡ이런젼ᄎᆞ로어린백ᄉᆡᇰ이니르고져홇배이셔도ᄆᆞᄎᆞᆷ내제ᄠᅳ들시러펴디못ᄒᆞᆯ노미하니라내이ᄅᆞᆯ위ᄒᆞ야어엿비너겨새로스믈여듧ᄍᆞᄅᆞᆯ맹ᄀᆞ노니사ᄅᆞᆷ마다ᄒᆡᅇᅧ수ᄫᅵ니겨날로ᄡᅮ메편안킈ᄒᆞ고져ᄒᆞᆯᄯᆞᄅᆞ미니라
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">
                2. 현대식 띄어쓰기 & 표준 발음 대역
              </span>
              <span class="badge badge-level-1">학습 대역</span>
            </div>
            <div style="font-family: var(--font-serif); font-size: 1.05rem; line-height: 1.75; padding: 1.25rem; background-color: var(--surface-2); border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem; color: var(--text-secondary);">
              나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할새 이런 전차로 어린 백성이 니르고져 홀 배 이셔도 마참내 제 뜻을 시러 펴디 못할 노미 하니라 내 이랄 위하야 어엿비 너겨 새로 스믈여덟 자랄 맹가노니 사람마다 해여 수비 니겨 날로 쓰메 편안킈 하고져 할 따라미니라
            </div>

            <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.4rem;">
              3. 현대어 의미 풀이
            </div>
            <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7;">
              우리나라 말이 중국과 달라 문자와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 쓰는 데 편안하게 하고자 할 따름이니라.
            </div>
          </div>

          <!-- Section 2: 15th-Century Phonetic Reading Guide -->
          <div style="background-color: var(--surface-1); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-elevation-1); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">
                15세기 세종 당대 음성학적 독음(讀音) 및 발음 규칙 해설
              </h3>
              <span class="badge badge-blue">학술 음운론</span>
            </div>
            
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              15세기 중세국어는 현대 한국어와 조음 위치 및 음운 체계가 완전히 달랐습니다. 훈민정음 창제 당대 15세기 사람들의 실제 발음과 국제음성기호(IPA) 대조표입니다.
            </p>

            <div class="catalog-table-wrapper">
              <table class="catalog-table">
                <thead>
                  <tr>
                    <th style="width: 140px;">원문 어휘</th>
                    <th style="width: 150px;">15세기 당대 독음</th>
                    <th style="width: 150px;">국제음성기호(IPA)</th>
                    <th>15세기 당대 조음 음운 원리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">나랏말ᄊᆞ미</td>
                    <td style="font-weight: 600;">[나랃말싸미]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[na-rat-mal-ssʌ-mi]</td>
                    <td>'ㅅ'은 종성 8종성법에 의해 [t]로 발음, 'ㆍ(아래아)'는 후설 양성모음 [ʌ] 발음</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">듕귁에 달아</td>
                    <td style="font-weight: 600;">[듕귁에 달라]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[tjuŋ-kwik-e tal-a]</td>
                    <td>동국정운식 중고음 '위' 모음 반영, '달아'는 '달라(異)'의 'ㄹ' 탈락 전 원형 연철</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">문ᄍᆞ와로 서르</td>
                    <td style="font-weight: 600;">[문짜와로 서르]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[mun-ts'ʌ-wa-ro sʌ-rɯ]</td>
                    <td>음성모음(ㅓ, ㅡ) 모음조화 철저 적용, 'ᄍᆞ'는 된소리 치음 [ts'] 발음</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">ᄉᆞᄆᆞᆺ디</td>
                    <td style="font-weight: 600;">[사맏디]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[sʌ-mʌt-ti]</td>
                    <td>구개음화 발생 이전이므로 '사맛지'가 아니라 혓소리 그대로 <strong>[ti]</strong>로 파열 발음</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">니르고져</td>
                    <td style="font-weight: 600;">[니르고져]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[ni-rɯ-go-zjʌ]</td>
                    <td>두음법칙 이전이므로 초성 'ㄴ' [ni] 온전 발음</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">ᄠᅳ들</td>
                    <td style="font-weight: 600;">[프뜯을] (ㅂ·ㄷ 연속)</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[ptɯ-dɯl]</td>
                    <td><strong>어두자음군(合用竝書)</strong>: 현대의 된소리가 아니라 [p]와 [t]를 연속 파열!</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">수ᄫᅵ</td>
                    <td style="font-weight: 600;">[수비]·[수위] 중간음</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[su-βi]</td>
                    <td><strong>순경음 비읍(連書)</strong>: 입술 사이로 바람을 내는 유성 양순 마찰음 <strong>[β]</strong> 발음!</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">날로 ᄡᅮ메</td>
                    <td style="font-weight: 600;">[날로 ㅂ쑤메]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[nal-ro psu-me]</td>
                    <td><strong>어두자음군</strong>: [p]와 [s]를 찰나에 연속 조음</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 700; color: var(--accent-primary);">ᄯᆞᄅᆞ미니라</td>
                    <td style="font-weight: 600;">[ㅂ따라미니라]</td>
                    <td style="font-family: var(--font-mono); font-size: 0.82rem;">[pstʌ-rʌ-mi-ni-ra]</td>
                    <td>어두 ㅂ계 자음군 [pst-] 및 아래아 [ʌ] 연속 조음</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      `;
    },
    renderWrongNotes() {
      const root = this.getRoot();
      if (!root) return;

      const wrongIds = Storage.getWrongAnswers();
      const bookmarkIds = Storage.getBookmarks();
      const allIds = Array.from(new Set([...wrongIds, ...bookmarkIds]));
      const wrongQuestions = allIds.map(id => DataManager.getQuestionById(id)).filter(Boolean);

      root.innerHTML = `
        <div class="app-container" style="padding-top: 2rem; padding-bottom: 5rem; max-width: 1080px;">
          <div class="wrong-notes-header">
            <div>
              <span class="badge badge-level-3">취약점 완벽 클리닉</span>
              <h2 style="font-size: 1.85rem; font-weight: 800; margin-top: 0.35rem; letter-spacing: -0.03em; color: #191f28;">
                나의 오답노트 & 북마크
              </h2>
              <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 0.25rem;">
                실전 문제 풀이에서 틀렸거나 북마크한 문항들을 한눈에 모아보고 즉시 집중 복습할 수 있습니다.
              </p>
            </div>
            ${wrongQuestions.length > 0
          ? `
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <button class="btn btn-primary" id="btn-start-all-review" style="font-size: 0.88rem; padding: 0.6rem 1.25rem;">
                    전체 오답 다시 풀기 (${wrongQuestions.length}제)
                  </button>
                  <button class="btn btn-outline" id="btn-clear-wrong-history" style="font-size: 0.82rem; padding: 0.6rem 0.95rem;">
                    오답 기록 비우기
                  </button>
                </div>
              `
          : ''
        }
          </div>

          <!-- Problem List Header Counter -->
          <div class="pg-list-header" style="margin-top: 1.5rem;">
            <div class="pg-list-count">
              <strong>${wrongQuestions.length}</strong> 오답 문항
            </div>
          </div>

          <!-- Programmers Flat Minimal Table List -->
          <div class="pg-table-card">
            ${wrongQuestions.length === 0
          ? `
                <div style="padding: 4rem 2rem; text-align: center;">
                  <div style="width: 56px; height: 56px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: var(--accent-primary);">
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h4 style="font-size: 1.15rem; font-weight: 800; color: #191f28; margin-bottom: 0.5rem;">현재 오답노트가 비어 있습니다</h4>
                  <p style="font-size: 0.88rem; color: #8b95a1; margin-bottom: 1.5rem;">실전 모의고사나 500제 문제 풀이를 진행하면 틀린 문항이 여기에 자동으로 기록됩니다.</p>
                  <button class="btn btn-primary" id="btn-goto-exam-from-empty">실전 문제 풀러 가기</button>
                </div>
              `
          : `
                <div class="pg-table-head">
                  <div class="col-status">유형</div>
                  <div class="col-title">제목</div>
                  <div class="col-level">난이도</div>
                  <div class="col-solvers">영역</div>
                  <div class="col-accuracy">다시 풀기</div>
                </div>

                <div class="pg-table-body">
                  ${wrongQuestions
            .map((q) => {
              let levelText = 'Lv. 1';
              let levelColor = '#10b981';
              if (q.difficulty === '중급') {
                levelText = 'Lv. 2';
                levelColor = '#10b981';
              } else if (q.difficulty === '고급') {
                levelText = 'Lv. 3';
                levelColor = '#f59e0b';
              }

              const isBookmark = bookmarkIds.includes(q.id);
              const typeLabel = isBookmark ? '북마크' : '오답';

              return `
                        <div class="pg-table-row" data-id="${q.id}">
                          <div class="col-status">
                            <span class="badge ${isBookmark ? 'badge-blue' : 'badge-level-3'}" style="font-size: 0.7rem; padding: 0.15rem 0.4rem;">${typeLabel}</span>
                          </div>
                          <div class="col-title">
                            <div class="pg-title-row">
                              <a href="#" class="pg-problem-title btn-solve-single" data-id="${q.id}">
                                ${q.question}
                              </a>
                              <span class="pg-level-badge" style="color: ${levelColor};">${levelText}</span>
                            </div>
                            <span class="pg-problem-sub">${q.category} &middot; ${q.subcategory}</span>
                            <div class="pg-mobile-stats-row">
                              <span class="badge ${isBookmark ? 'badge-blue' : 'badge-level-3'}" style="font-size: 0.68rem; padding: 0.1rem 0.35rem;">${typeLabel}</span>
                              <span style="font-weight: 700; color: var(--accent-primary);">단독 재풀이 &gt;</span>
                            </div>
                          </div>
                          <div class="col-level" style="color: ${levelColor};">
                            ${levelText}
                          </div>
                          <div class="col-solvers" style="font-size: 0.82rem; color: #4e5968;">
                            ${q.category}
                          </div>
                          <div class="col-accuracy">
                            <button class="btn btn-primary btn-solve-single" data-id="${q.id}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
                              풀기
                            </button>
                          </div>
                        </div>
                      `;
            })
            .join('')}
                </div>
              `
        }
          </div>
        </div>
      `;
    },
    transitionHeroSlide(targetIndex) {
      const section = document.getElementById('hero-banner-section');
      const content = document.querySelector('.pg-hero-content');
      const graphic = document.querySelector('.pg-hero-graphic');
      if (!section || !content || !graphic) {
        State.currentHeroSlide = targetIndex;
        this.renderDashboard();
        return;
      }

      // 1. Exit active content
      content.classList.remove('fade-in', 'enter-prep');
      graphic.classList.remove('fade-in', 'enter-prep');
      content.classList.add('fade-out');
      graphic.classList.add('fade-out');

      setTimeout(() => {
        State.currentHeroSlide = targetIndex;
        const slide = HERO_SLIDES[targetIndex];

        section.className = `pg-hero-section ${slide.theme}`;

        const badgeEl = document.getElementById('hero-badge');
        const titleEl = document.getElementById('hero-title');
        const descEl = document.getElementById('hero-desc');
        const counterEl = document.querySelector('.pagination-current');

        if (badgeEl) badgeEl.innerHTML = `<span>${slide.badge}</span>`;
        if (titleEl) titleEl.innerHTML = slide.title;
        if (descEl) descEl.innerHTML = slide.desc;
        if (counterEl) counterEl.textContent = String(targetIndex + 1);

        // 2. Position new content for entrance: text from bottom, graphic from right
        content.classList.remove('fade-out');
        graphic.classList.remove('fade-out');
        content.classList.add('enter-prep');
        graphic.classList.add('enter-prep');

        // Force browser layout reflow
        void content.offsetHeight;

        // 3. Animate into resting position
        content.classList.remove('enter-prep');
        graphic.classList.remove('enter-prep');
        content.classList.add('fade-in');
        graphic.classList.add('fade-in');

        setTimeout(() => {
          content.classList.remove('fade-in');
          graphic.classList.remove('fade-in');
        }, 420);
      }, 200);
    },

    renderBlankPage(pageTitle = '') {
      const root = this.getRoot();
      if (!root) return;
      root.innerHTML = `
        <div style="min-height: calc(100vh - 180px); background: #ffffff; display: flex; align-items: center; justify-content: center; padding: 4rem 1.5rem;">
          ${pageTitle ? `<div style="text-align: center; color: #94a3b8; font-size: 1.1rem; font-weight: 500;">${pageTitle}</div>` : ''}
        </div>
      `;
    },

    getIDEFiles() {
      const defaultFiles = {
        'main.py': ''
      };
      try {
        const saved = localStorage.getItem('python_ide_files');
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            const sanitized = {};
            for (const [k, v] of Object.entries(parsed)) {
              if (k && k !== 'null' && k !== 'undefined' && k.trim()) {
                let content = typeof v === 'string' ? v : '';
                // Auto purge legacy default greeting template if saved in browser storage
                if (content.includes('Python 3.14 프로그래밍 환경') || content.includes('print(greet(')) {
                  content = '';
                }
                sanitized[k.trim()] = content;
              }
            }
            if (sanitized['main.py'] === undefined) {
              sanitized['main.py'] = '';
            }
            return sanitized;
          }
        }
        return defaultFiles;
      } catch (e) {
        return defaultFiles;
      }
    },

    saveIDEFiles(files) {
      const sanitized = {};
      if (files && typeof files === 'object') {
        for (const [k, v] of Object.entries(files)) {
          if (k && k !== 'null' && k !== 'undefined' && k.trim()) {
            sanitized[k.trim()] = typeof v === 'string' ? v : '';
          }
        }
      }
      localStorage.setItem('python_ide_files', JSON.stringify(sanitized));
    },

    getIDEFolders() {
      try {
        const saved = localStorage.getItem('python_ide_folders');
        const list = saved ? JSON.parse(saved) : ['Learn'];
        if (Array.isArray(list)) {
          const sanitized = list.filter(f => f && f !== 'null' && f !== 'undefined' && f.trim()).map(f => f.trim());
          return Array.from(new Set(sanitized));
        }
        return ['Learn'];
      } catch (e) {
        return ['Learn'];
      }
    },

    saveIDEFolders(folders) {
      const sanitized = Array.isArray(folders) ? Array.from(new Set(folders.filter(f => f && f !== 'null' && f !== 'undefined' && f.trim()).map(f => f.trim()))) : ['Learn'];
      localStorage.setItem('python_ide_folders', JSON.stringify(sanitized));
    },

    getOpenIDETabs() {
      const files = this.getIDEFiles();
      try {
        const saved = localStorage.getItem('python_ide_open_tabs');
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed.filter(tab => tab && tab !== 'null' && files[tab] !== undefined);
          }
        }
      } catch (e) { }
      return files['main.py'] !== undefined ? ['main.py'] : Object.keys(files).slice(0, 1);
    },

    saveOpenIDETabs(tabs) {
      try {
        const valid = Array.isArray(tabs) ? tabs.filter(t => t && t !== 'null') : [];
        localStorage.setItem('python_ide_open_tabs', JSON.stringify(valid));
      } catch (e) { }
    },

    getActiveIDEFile() {
      const files = this.getIDEFiles();
      try {
        const saved = localStorage.getItem('python_ide_active_file');
        if (saved !== null) {
          if (saved === '' || saved === 'null') return null;
          if (files[saved] !== undefined) return saved;
        }
      } catch (e) { }
      const openTabs = this.getOpenIDETabs();
      if (openTabs.length && files[openTabs[0]] !== undefined) return openTabs[0];
      return null;
    },

    saveActiveIDEFile(file) {
      try {
        if (file && file !== 'null') {
          localStorage.setItem('python_ide_active_file', file);
        } else {
          localStorage.setItem('python_ide_active_file', '');
        }
      } catch (e) { }
    },

    isFileDirty(filePath) {
      if (!filePath) return false;
      const liveTextarea = document.getElementById('ide-code-input');
      if (liveTextarea && liveTextarea.getAttribute('data-file') === filePath) {
        const savedFiles = this.getIDEFiles();
        if (liveTextarea.value !== (savedFiles[filePath] || '')) return true;
      }
      return !!(this.dirtyFiles && this.dirtyFiles[filePath]);
    },

    isFolderDirty(folderPath) {
      if (!folderPath) return false;
      const prefix = folderPath + '/';
      const files = this.getIDEFiles();
      for (const fname of Object.keys(files)) {
        if (fname.startsWith(prefix) && this.isFileDirty(fname)) {
          return true;
        }
      }
      return false;
    },

    showSafetyToast(message) {
      const existing = document.querySelector('.ide-safety-toast');
      if (existing) existing.remove();
      const toast = document.createElement('div');
      toast.className = 'ide-safety-toast';
      toast.innerHTML = `
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#cca700" style="flex-shrink: 0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.13 2.5a1 1 0 0 1 1.74 0l5.5 10A1 1 0 0 1 13.5 14H2.5a1 1 0 0 1-.87-1.5l5.5-10zM8 5.5v4h-.7v-4H8zm-.7 6.5h1.4V11H7.3v1z"/></svg>
        <span style="font-weight: 500;">${this.escapeHtml(message)}</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 200ms ease, transform 200ms ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 220);
      }, 3400);
    },

    getFileIconSvg(fileName) {
      if (fileName && fileName.endsWith('.py')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" style="flex-shrink: 0; display: inline-block; vertical-align: middle;"><path fill="#387eb8" d="M11.93 0C6.01 0 6.38 2.57 6.38 2.57l-.01 2.66h5.65v.8H3.95S0 5.57 0 11.51c0 5.94 3.45 5.74 3.45 5.74h2.05v-2.88s-.11-3.45 3.39-3.45h5.84s3.28 0 3.28-3.23V3.28S18.36 0 11.93 0zm-3.07 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"/><path fill="#ffe052" d="M12.07 24c5.92 0 5.55-2.57 5.55-2.57l.01-2.66h-5.65v-.8h8.07S24 18.43 24 12.49c0-5.94-3.45-5.74-3.45-5.74h-2.05v2.88s.11 3.45-3.39 3.45H9.27s-3.28 0-3.28 3.23v4.39S5.64 24 12.07 24zm3.07-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/></svg>`;
      }
      return `<svg viewBox="0 0 16 16" width="14" height="14" fill="#858585" style="flex-shrink: 0; display: inline-block; vertical-align: middle;"><path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5L9 1zm3 13H4V2h4v4h4v8z"/></svg>`;
    },

    renderLineNumbersHtml(lineCount, problems = []) {
      const probMap = {};
      (problems || []).forEach(p => {
        if (!probMap[p.line]) probMap[p.line] = p;
      });
      return Array.from({ length: lineCount }, (_, i) => {
        const lineNum = i + 1;
        const p = probMap[lineNum];
        if (p) {
          const markerClass = p.severity === 'warning' ? 'ide-line-warning-marker' : 'ide-line-error-marker';
          return `<span class="${markerClass}" title="${this.escapeHtml(p.message)}"></span>${lineNum}`;
        }
        return `${lineNum}`;
      }).join('<br>');
    },

    lintPythonCode(code, activeFile = 'main.py') {
      if (!code) return [];
      const lines = code.split('\n');
      const diagnostics = [];

      const builtinsSet = new Set([
        'print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'sum', 'min', 'max', 'abs', 'round', 'all', 'any', 'isinstance', 'issubclass', 'open', 'input', 'id', 'dir', 'help', 'repr', 'super', 'type', 'vars', 'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple', 'bytes', 'object', 'Exception', 'ValueError', 'TypeError', 'NameError', 'IndexError', 'KeyError', 'ZeroDivisionError', 'True', 'False', 'None'
      ]);

      const commonTypos = {
        'pirnt': 'print', 'prnt': 'print', 'pritn': 'print', 'prnit': 'print', 'println': 'print',
        'lenght': 'len', 'langth': 'len', 'rang': 'range', 'rangee': 'range', 'inpu': 'input',
        'imput': 'input', 'dfe': 'def', 'deff': 'def', 'calss': 'class', 'clss': 'class',
        'clas': 'class', 'retrun': 'return', 'retun': 'return', 'reutrn': 'return',
        'improt': 'import', 'form': 'from', 'whlie': 'while', 'elseif': 'elif', 'elsif': 'elif'
      };

      const inferLiteralType = (expr) => {
        const tr = (expr || '').trim();
        if (/^["'].*["']$/.test(tr)) return 'str';
        if (/^-?\d+$/.test(tr)) return 'int';
        if (/^-?\d+\.\d+$/.test(tr)) return 'float';
        if (/^(True|False)$/.test(tr)) return 'bool';
        if (/^\[.*\]$/.test(tr)) return 'list';
        if (/^\{.*\}$/.test(tr)) return tr.includes(':') ? 'dict' : 'set';
        if (/^\(.*\)$/.test(tr)) return 'tuple';
        return null;
      };

      const userDefined = new Set(['self', 'cls', 'args', 'kwargs']);
      for (const l of lines) {
        const cm = l.match(/^\s*class\s+([a-zA-Z_]\w*)/);
        if (cm) userDefined.add(cm[1]);
        const dm = l.match(/^\s*def\s+([a-zA-Z_]\w*)/);
        if (dm) userDefined.add(dm[1]);
        const am = l.match(/^\s*([a-zA-Z_]\w*)\s*(?::\s*[a-zA-Z_]\w*)?\s*=/);
        if (am) userDefined.add(am[1]);
        const fm = l.match(/^\s*for\s+([a-zA-Z_]\w*)\s+in/);
        if (fm) userDefined.add(fm[1]);
        const pm = l.match(/^\s*def\s+\w+\(([^)]*)\)/);
        if (pm) {
          pm[1].split(',').forEach(p => {
            const pName = p.trim().split(':')[0].split('=')[0].trim();
            if (pName) userDefined.add(pName);
          });
        }
      }

      lines.forEach((l, idx) => {
        const lineNum = idx + 1;
        const trimmed = l.trim();
        if (!trimmed || trimmed.startsWith('#')) return;

        // Missing colon check
        if (/^(def|class|if|elif|else|for|while|try|except|finally|with|match|case)\b/.test(trimmed) && !trimmed.endsWith(':')) {
          diagnostics.push({
            file: activeFile,
            line: lineNum,
            col: l.length,
            token: ':',
            severity: 'error',
            message: "SyntaxError: expected ':' at end of statement"
          });
        }

        // Static Type Mismatch check: variable: type = value
        const typeAnnotMatch = l.match(/^\s*([a-zA-Z_]\w*)\s*:\s*([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (typeAnnotMatch) {
          const varName = typeAnnotMatch[1];
          const declaredType = typeAnnotMatch[2];
          const valExpr = typeAnnotMatch[3].trim();
          const actualType = inferLiteralType(valExpr);

          if (actualType && declaredType !== actualType) {
            if (!(declaredType === 'float' && actualType === 'int')) {
              diagnostics.push({
                file: activeFile,
                line: lineNum,
                col: l.indexOf(valExpr) + 1,
                token: valExpr,
                severity: 'error',
                message: `TypeError: Expression of type "${actualType}" cannot be assigned to declared type "${declaredType}"`
              });
            }
          }
        }

        // Unclosed string literals
        const singleQuotes = (l.match(/(?<!\\)'/g) || []).length;
        const doubleQuotes = (l.match(/(?<!\\)"/g) || []).length;
        if (singleQuotes % 2 !== 0 && !l.includes("'''")) {
          diagnostics.push({ file: activeFile, line: lineNum, col: l.length, token: "'", severity: 'error', message: "SyntaxError: unterminated single-quoted string literal" });
        } else if (doubleQuotes % 2 !== 0 && !l.includes('"""')) {
          diagnostics.push({ file: activeFile, line: lineNum, col: l.length, token: '"', severity: 'error', message: "SyntaxError: unterminated double-quoted string literal" });
        }

        // Inconsistent indentation check
        const indentSpaces = l.match(/^ +/);
        if (indentSpaces && indentSpaces[0].length % 4 !== 0) {
          diagnostics.push({ file: activeFile, line: lineNum, col: 1, token: 'indent', severity: 'warning', message: "IndentationError: unexpected indent (must be multiple of 4 spaces)" });
        }

        // Unrecognized or mistyped function calls (e.g. pirnt)
        const callMatches = l.matchAll(/\b([a-zA-Z_]\w*)\s*\(/g);
        for (const match of callMatches) {
          const name = match[1];
          const col = match.index + 1;
          const isDef = new RegExp(`^\\s*def\\s+${name}\\b`).test(l);
          const isDotMethod = match.index > 0 && l[match.index - 1] === '.';
          if (isDef || isDotMethod) continue;

          if (commonTypos[name]) {
            diagnostics.push({
              file: activeFile,
              line: lineNum,
              col: col,
              token: name,
              severity: 'error',
              message: `NameError: name '${name}' is not defined. Did you mean '${commonTypos[name]}'?`
            });
          } else if (!builtinsSet.has(name) && !userDefined.has(name)) {
            let closest = null;
            for (let b of builtinsSet) {
              if (Math.abs(b.length - name.length) <= 1 && (b.startsWith(name.slice(0, 2)) || b.endsWith(name.slice(-2)))) {
                closest = b;
                break;
              }
            }
            diagnostics.push({
              file: activeFile,
              line: lineNum,
              col: col,
              token: name,
              severity: 'error',
              message: closest ? `NameError: name '${name}' is not defined. Did you mean '${closest}'?` : `NameError: name '${name}' is not defined`
            });
          }
        }
      });

      return diagnostics;
    },

    highlightPythonCode(code) {
      if (!code) return '';
      const esc = (str) => (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const lines = code.split('\n');
      const controlKeywords = ['return', 'if', 'elif', 'else', 'for', 'while', 'break', 'continue', 'pass', 'try', 'except', 'finally', 'raise', 'with', 'yield', 'await', 'async', 'match', 'case', 'import', 'from', 'as'];
      const otherKeywords = ['def', 'class', 'lambda', 'type', 'global', 'nonlocal', 'assert', 'in', 'is', 'not', 'and', 'or', 'True', 'False', 'None'];
      const typeNames = ['str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple', 'bytes', 'object', 'Any', 'Optional', 'Union', 'Callable', 'List', 'Dict', 'Set', 'Tuple'];
      const builtins = ['print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'sum', 'min', 'max', 'abs', 'round', 'all', 'any', 'isinstance', 'issubclass', 'open', 'input', 'id', 'dir', 'help', 'repr', 'super'];

      const diagnostics = (typeof this.lintPythonCode === 'function') ? this.lintPythonCode(code, this.activeIDEFile || 'main.py') : [];
      this.ideProblems = diagnostics;

      // Monaco-style Pass 1: Compute explicit indentation levels
      const indents = lines.map(l => {
        if (!l.trim()) return -1;
        const m = l.match(/^[ \t]+/);
        if (!m) return 0;
        let count = 0;
        for (let c of m[0]) {
          count += (c === '\t' ? 4 : 1);
        }
        return Math.floor(count / 4);
      });

      // Monaco-style Pass 2: Propagate block indentation across blank lines
      for (let idx = 0; idx < indents.length; idx++) {
        if (indents[idx] === -1) {
          let prev = 0;
          for (let p = idx - 1; p >= 0; p--) {
            if (indents[p] !== -1) { prev = indents[p]; break; }
          }
          let next = 0;
          for (let n = idx + 1; n < indents.length; n++) {
            if (indents[n] !== -1) { next = indents[n]; break; }
          }
          indents[idx] = Math.max(0, Math.min(prev, next));
        }
      }

      return lines.map((line, lineIdx) => {
        let result = '';
        let i = 0;
        const len = line.length;
        const lineNum = lineIdx + 1;
        const lineDiags = (diagnostics || []).filter(d => d.line === lineNum);

        // Render indent guides for empty lines inside active indented blocks
        if (!line.trim()) {
          const virtualIndent = indents[lineIdx] || 0;
          for (let v = 0; v < virtualIndent; v++) {
            result += '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">    </span>';
          }
          return result;
        }

        // Render indent guide lines for leading whitespace (every 4 spaces or tabs)
        const indentMatch = line.match(/^([ \t]+)/);
        if (indentMatch) {
          const indentStr = indentMatch[1];
          let indentHtml = '';
          for (let s = 0; s < indentStr.length;) {
            if (indentStr[s] === '\t') {
              indentHtml += '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">\t</span>';
              s++;
            } else if (indentStr.substring(s, s + 4) === '    ') {
              indentHtml += '<span class="ide-indent-guide" style="border-left: 1px solid rgba(255, 255, 255, 0.12); display: inline-block; width: 4ch; height: 20px;">    </span>';
              s += 4;
            } else {
              indentHtml += esc(indentStr[s]);
              s++;
            }
          }
          result += indentHtml;
          i = indentStr.length;
        }

        while (i < len) {
          // 1. Comment
          if (line[i] === '#') {
            result += `<span style="color: #6a9955;">${esc(line.substring(i))}</span>`;
            break;
          }

          // 2. Strings & f-strings
          const isFPrefix = (line[i] === 'f' || line[i] === 'F' || line[i] === 'r' || line[i] === 'R' || line[i] === 'b' || line[i] === 'B') && (line[i + 1] === '"' || line[i + 1] === "'");
          const isFString = (line[i] === 'f' || line[i] === 'F') && (line[i + 1] === '"' || line[i + 1] === "'");

          if (isFPrefix || line[i] === '"' || line[i] === "'") {
            let prefix = '';
            if (isFPrefix) {
              prefix = line[i];
              i++;
            }
            const quote = line[i];
            const isTriple = (line[i] === quote && line[i + 1] === quote && line[i + 2] === quote);
            const startPos = i;
            if (isTriple) {
              i += 3;
            } else {
              i += 1;
            }

            while (i < len) {
              if (line[i] === '\\') {
                i += 2;
                continue;
              }
              if (isTriple) {
                if (line[i] === quote && line[i + 1] === quote && line[i + 2] === quote) {
                  i += 3;
                  break;
                }
              } else {
                if (line[i] === quote) {
                  i += 1;
                  break;
                }
              }
              i++;
            }

            const fullStr = (prefix ? prefix : '') + line.substring(startPos, i);

            if (isFString && fullStr.includes('{')) {
              let fHtml = `<span style="color: #569cd6;">${prefix}</span><span style="color: #ce9178;">${quote}</span>`;
              const inner = fullStr.substring(prefix.length + quote.length, fullStr.length - (fullStr.endsWith(quote) ? quote.length : 0));
              let segStart = 0;
              let inBrace = false;
              let braceDepth = 0;
              let braceContent = '';

              for (let c = 0; c < inner.length; c++) {
                if (inner[c] === '{' && inner[c + 1] !== '{') {
                  if (braceDepth === 0) {
                    fHtml += `<span style="color: #ce9178;">${esc(inner.substring(segStart, c))}</span>`;
                    fHtml += `<span style="color: #569cd6;">{</span>`;
                    braceContent = '';
                    inBrace = true;
                  }
                  braceDepth++;
                } else if (inner[c] === '}' && inBrace) {
                  braceDepth--;
                  if (braceDepth === 0) {
                    fHtml += `<span style="color: #9cdcfe;">${esc(braceContent)}</span>`;
                    fHtml += `<span style="color: #569cd6;">}</span>`;
                    inBrace = false;
                    segStart = c + 1;
                  }
                } else {
                  if (inBrace) braceContent += inner[c];
                }
              }
              if (segStart < inner.length && !inBrace) {
                fHtml += `<span style="color: #ce9178;">${esc(inner.substring(segStart))}</span>`;
              }
              if (fullStr.endsWith(quote)) {
                fHtml += `<span style="color: #ce9178;">${quote}</span>`;
              }
              result += fHtml;
            } else {
              let strHtml = '';
              if (prefix) {
                strHtml = `<span style="color: #569cd6;">${prefix}</span><span style="color: #ce9178;">${esc(fullStr.substring(prefix.length))}</span>`;
              } else {
                strHtml = `<span style="color: #ce9178;">${esc(fullStr)}</span>`;
              }
              const strDiag = lineDiags.find(d => d.token === fullStr || d.token === `"${fullStr.slice(1, -1)}"` || d.token === `'${fullStr.slice(1, -1)}'`);
              if (strDiag) {
                result += `<span class="ide-squiggly-${strDiag.severity || 'error'}" title="${esc(strDiag.message)}">${strHtml}</span>`;
              } else {
                result += strHtml;
              }
            }
            continue;
          }

          // 3. Numbers
          if (/\d/.test(line[i]) && (i === 0 || !/[a-zA-Z0-9_]/.test(line[i - 1]))) {
            let numStr = '';
            while (i < len && /[0-9a-fA-FxXbBoOeE\._]/.test(line[i])) {
              numStr += line[i];
              i++;
            }
            let numHtml = `<span style="color: #b5cea8;">${esc(numStr)}</span>`;
            const numDiag = lineDiags.find(d => d.token === numStr);
            if (numDiag) {
              result += `<span class="ide-squiggly-${numDiag.severity || 'error'}" title="${esc(numDiag.message)}">${numHtml}</span>`;
            } else {
              result += numHtml;
            }
            continue;
          }

          // 4. Identifiers / Keywords / Functions / Variables
          if (/[a-zA-Z_]/.test(line[i])) {
            let word = '';
            const wordStart = i;
            while (i < len && /[a-zA-Z0-9_]/.test(line[i])) {
              word += line[i];
              i++;
            }

            let isFuncCall = false;
            let k = i;
            while (k < len && (line[k] === ' ' || line[k] === '\t')) k++;
            if (k < len && line[k] === '(') {
              isFuncCall = true;
            }

            const beforeText = line.substring(0, wordStart).trim();
            const isDefName = /\bdef\s+$/.test(line.substring(0, wordStart));
            let tokenHtml = '';

            if (controlKeywords.includes(word)) {
              tokenHtml = `<span style="color: #c586c0; font-weight: 500;">${word}</span>`;
            } else if (otherKeywords.includes(word)) {
              tokenHtml = `<span style="color: #569cd6; font-weight: 500;">${word}</span>`;
            } else if (isDefName || isFuncCall || builtins.includes(word)) {
              tokenHtml = `<span style="color: #dcdcaa;">${word}</span>`;
            } else if (typeNames.includes(word) || (/->\s*$/.test(beforeText) || /:\s*$/.test(beforeText)) && /^[A-Z]/.test(word)) {
              tokenHtml = `<span style="color: #4ec9b0;">${word}</span>`;
            } else {
              tokenHtml = `<span style="color: #9cdcfe;">${word}</span>`;
            }

            const diag = lineDiags.find(d => d.token === word);
            if (diag) {
              result += `<span class="ide-squiggly-${diag.severity || 'error'}" title="${esc(diag.message)}">${tokenHtml}</span>`;
            } else {
              result += tokenHtml;
            }
            continue;
          }

          // 5. Operators & punctuation
          if (line.startsWith('->', i)) {
            result += `<span style="color: #d4d4d4;">-&gt;</span>`;
            i += 2;
            continue;
          }

          result += esc(line[i]);
          i++;
        }

        const colonDiag = lineDiags.find(d => d.token === ':');
        if (colonDiag) {
          result += `<span class="ide-squiggly-error" title="${esc(colonDiag.message)}" style="display: inline-block; width: 6px;">&nbsp;</span>`;
        }

        return result;
      }).join('\n');
    },

    renderPythonIDE() {
      const root = this.getRoot();
      if (!root) return;

      // Persist active in-memory textarea buffer before replacing DOM (only if file still exists in VFS)
      const liveTextarea = document.getElementById('ide-code-input');
      const prevEditingFile = liveTextarea ? liveTextarea.getAttribute('data-file') : null;
      if (liveTextarea && prevEditingFile) {
        const liveFiles = this.getIDEFiles();
        if (liveFiles[prevEditingFile] !== undefined) {
          liveFiles[prevEditingFile] = liveTextarea.value;
          this.saveIDEFiles(liveFiles);
        }
      }

      // Persist active terminal buffers before replacing DOM
      const liveStdout = document.getElementById('ide-terminal-stdout');
      if (liveStdout && this.activeTerminalId) {
        if (!this.terminalOutputs) this.terminalOutputs = {};
        this.terminalOutputs[this.activeTerminalId] = liveStdout.innerHTML;
        try {
          sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
        } catch (e) { }
      }
      const liveStdoutSplit = document.getElementById('ide-terminal-stdout-split');
      if (liveStdoutSplit && this.activeTerminalId) {
        if (!this.terminalOutputs) this.terminalOutputs = {};
        this.terminalOutputs[this.activeTerminalId + '_split'] = liveStdoutSplit.innerHTML;
        try {
          sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
        } catch (e) { }
      }

      document.body.classList.add('in-ide-mode');
      document.documentElement.classList.add('in-ide-mode');
      const footer = document.querySelector('.site-footer');
      if (footer) footer.style.display = 'none';

      const files = this.getIDEFiles();
      const folders = this.getIDEFolders();
      const openTabs = this.openIDETabs !== undefined ? this.openIDETabs : this.getOpenIDETabs();
      let activeFile = this.activeIDEFile !== undefined ? this.activeIDEFile : this.getActiveIDEFile();
      if (!openTabs.length) {
        activeFile = null;
      } else {
        if (!activeFile || !openTabs.includes(activeFile)) {
          activeFile = openTabs[0];
        }
      }
      this.openIDETabs = openTabs;
      this.activeIDEFile = activeFile;
      this.saveOpenIDETabs(openTabs);
      this.saveActiveIDEFile(activeFile);
      this.activeDrawerTab = this.activeDrawerTab || 'terminal';

      if (!this.terminalSessions || this.terminalSessions.length === 0) {
        this.terminalSessions = ['1: pwsh'];
      }
      if (!this.activeTerminalId || !this.terminalSessions.includes(this.activeTerminalId)) {
        this.activeTerminalId = this.terminalSessions[0];
      }
      if (!this.terminalOutputs) {
        try {
          const savedTerm = sessionStorage.getItem('python_ide_terminal_outputs');
          this.terminalOutputs = savedTerm ? JSON.parse(savedTerm) : {};
        } catch (e) {
          this.terminalOutputs = {};
        }
      }

      const isFolderCollapsed = this.isLearnFolderCollapsed || false;
      if (activeFile && files[activeFile] === undefined) {
        files[activeFile] = '';
        this.saveIDEFiles(files);
      }
      const currentCode = activeFile ? (files[activeFile] || '') : '';

      // Initialize Tutorial State
      if (!this.currentTutorialStep) {
        try {
          const savedStep = sessionStorage.getItem('python_tutorial_step');
          this.currentTutorialStep = savedStep ? parseInt(savedStep, 10) : 1;
        } catch (e) {
          this.currentTutorialStep = 1;
        }
      }
      const tutorialChapters = PYTHON_TUTORIAL_DATA.chapters;
      const currentChapter = tutorialChapters.find(c => c.id === this.currentTutorialStep) || tutorialChapters[0];
      const totalChapters = tutorialChapters.length;
      const progressPct = Math.round((this.currentTutorialStep / totalChapters) * 100);

      root.innerHTML = `
        <div class="vscode-dark-shell" style="height: 100%; flex: 1; min-height: 0; background: #181818; display: flex; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, Roboto, sans-serif; color: #cccccc; -webkit-font-smoothing: antialiased; user-select: none; overflow: hidden;">
          <!-- Main Workbench Layout (Sidebar + Center Column + Assistant Full-Height Column) -->
          <div style="display: flex; flex: 1; min-height: 0; overflow: hidden;">

            <!-- Primary Sidebar (Explorer 230px Dark) -->
            <div style="width: 230px; background: #181818; border-right: 1px solid #2b2b2b; display: flex; flex-direction: column; font-size: 13px;">
              <!-- Sidebar Header (Aligned with Editor Tab Strip) -->
              <div style="height: 35px; border-bottom: 1px solid #2b2b2b; padding: 0 10px 0 16px; display: flex; align-items: center; justify-content: space-between; font-size: 11px; font-weight: 700; color: #bbbbbb; letter-spacing: 0.04em; text-transform: uppercase;">
                <span>Explorer</span>
                <div style="display: flex; align-items: center; gap: 2px; color: #cccccc;">
                  <div id="btn-ide-new-file" class="ide-ctrl-btn" title="New File..."><span class="codicon codicon-new-file"></span></div>
                  <div id="btn-ide-new-folder" class="ide-ctrl-btn" title="New Folder..."><span class="codicon codicon-new-folder"></span></div>
                  <div id="btn-ide-refresh" class="ide-ctrl-btn" title="Refresh Explorer"><span class="codicon codicon-refresh"></span></div>
                  <div id="btn-ide-collapse-all" class="ide-ctrl-btn" title="Collapse Folders in Explorer"><span class="codicon codicon-collapse-all"></span></div>
                </div>
              </div>

              <!-- Main Tree Folder: LEARN -->
              <div style="flex: 1; overflow-y: auto;">
                <div id="ide-folder-learn" class="ide-tree-row" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 8px; padding-right: 2px; font-size: 11px; font-weight: 700; color: #cccccc; cursor: pointer;" title="Root Workspace (Learn)">
                  <div style="display: flex; align-items: center; gap: 6px; overflow: hidden;">
                    <svg id="ide-folder-learn-chevron" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="transform: ${isFolderCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; transition: transform 140ms ease;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"/></svg>
                    <span>Learn</span>
                  </div>
                  <div class="ide-tree-actions">
                    <div class="btn-tree-action btn-folder-new-file" data-folder="" title="New File in Root"><span class="codicon codicon-new-file" style="font-size: 13px;"></span></div>
                    <div class="btn-tree-action btn-folder-new-subfolder" data-folder="" title="New Folder in Root"><span class="codicon codicon-new-folder" style="font-size: 13px;"></span></div>
                  </div>
                </div>

                <!-- Tree Content (Folders + Files) -->
                <div id="ide-explorer-file-list" style="display: ${isFolderCollapsed ? 'none' : 'flex'}; flex-direction: column;">
                  <!-- Custom Folders -->
                  ${folders.filter(f => f && f !== 'Learn' && f !== 'null').map(folderName => {
        const isCollapsed = this.collapsedFolders && this.collapsedFolders[folderName];
        const folderFiles = Object.keys(files).filter(f => f && f !== 'null' && f.startsWith(folderName + '/'));
        return `
                      <div class="ide-folder-wrapper">
                        <div class="ide-tree-row ide-folder-item" data-folder="${folderName}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 18px; padding-right: 2px; font-size: 13px; color: #cccccc; cursor: pointer; background: transparent;" title="${folderName}">
                          <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style="transform: ${isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'}; transition: transform 140ms ease;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"/></svg>
                            <span>${folderName.split('/').pop()}</span>
                          </div>
                          <div class="ide-tree-actions">
                            <div class="btn-tree-action btn-folder-new-file" data-folder="${folderName}" title="New File in ${folderName}"><span class="codicon codicon-new-file" style="font-size: 13px;"></span></div>
                            <div class="btn-tree-action btn-folder-new-subfolder" data-folder="${folderName}" title="New Subfolder in ${folderName}"><span class="codicon codicon-new-folder" style="font-size: 13px;"></span></div>
                            <div class="btn-tree-action btn-tree-delete btn-folder-delete" data-folder="${folderName}" title="Delete Folder ${folderName}"><span class="codicon codicon-trash" style="font-size: 13px;"></span></div>
                          </div>
                        </div>
                        <div style="display: ${isCollapsed ? 'none' : 'flex'}; flex-direction: column;">
                          ${folderFiles.length ? folderFiles.map(fn => {
          const shortName = fn.substring(folderName.length + 1);
          const isCurActive = fn === activeFile;
          return `
                              <div class="ide-tree-row ide-file-item ${isCurActive ? 'active' : ''}" data-file="${fn}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 36px; padding-right: 2px; background: transparent; color: ${isCurActive ? '#ffffff' : '#cccccc'}; font-size: 13px; cursor: pointer;" title="${fn}">
                                <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                  ${this.getFileIconSvg(fn)}
                                  <span>${shortName}</span>
                                </div>
                                <div class="ide-tree-actions">
                                  <div class="btn-tree-action btn-tree-delete btn-file-delete" data-file="${fn}" title="Delete File ${shortName}"><span class="codicon codicon-close" style="font-size: 12px;"></span></div>
                                </div>
                              </div>
                            `;
        }).join('') : ''}
                        </div>
                      </div>
                    `;
      }).join('')}

                  <!-- Root Files -->
                  ${Object.keys(files).filter(f => f && f !== 'null' && !f.includes('/')).map(fileName => {
        const isCurActive = fileName === activeFile;
        return `
                      <div class="ide-tree-row ide-file-item ${isCurActive ? 'active' : ''}" data-file="${fileName}" draggable="true" style="height: 24px; display: flex; align-items: center; justify-content: space-between; padding-left: 22px; padding-right: 2px; background: transparent; color: ${isCurActive ? '#ffffff' : '#cccccc'}; font-size: 13px; cursor: pointer;" title="${fileName}">
                        <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          ${this.getFileIconSvg(fileName)}
                          <span>${fileName}</span>
                        </div>
                        <div class="ide-tree-actions">
                          <div class="btn-tree-action btn-tree-delete btn-file-delete" data-file="${fileName}" title="Delete File ${fileName}"><span class="codicon codicon-close" style="font-size: 12px;"></span></div>
                        </div>
                      </div>
                    `;
      }).join('')}
                </div>
              </div>
            </div>

            <!-- Central Editor & Terminal Canvas (Left/Center Column) -->
            <div style="flex: 1; display: flex; flex-direction: column; background: #1e1e1e; min-width: 0; position: relative; overflow: hidden;">
              
              <!-- Tab Header Strip (Height: 35px Dark) -->
              <div style="height: 35px; background: #181818; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between;">
                <!-- Left: Open File Tabs -->
                <div id="ide-tab-strip" style="display: flex; align-items: center; height: 100%; overflow-x: auto;">
                  ${openTabs.map(tabFile => {
        const isTabActive = tabFile === activeFile;
        const isDirty = this.isFileDirty(tabFile);
        return `
                      <div class="ide-editor-tab ${isTabActive ? 'active' : ''}" data-file="${tabFile}" style="height: 100%; background: ${isTabActive ? '#1e1e1e' : '#181818'}; border-right: 1px solid #2b2b2b; border-top: ${isTabActive ? '1px solid #0078d4' : '1px solid transparent'}; padding: 0 8px 0 12px; display: flex; align-items: center; gap: 8px; font-size: 13px; color: ${isTabActive ? '#ffffff' : '#858585'}; cursor: pointer;" title="${tabFile}">
                        ${this.getFileIconSvg(tabFile)}
                        <span>${tabFile.split('/').pop()}</span>
                        <div class="btn-close-ide-tab" data-file="${tabFile}" title="${isDirty ? 'Unsaved changes (Save: Ctrl+S)' : 'Close (Ctrl+W)'}">
                          ${isDirty ? '<span class="ide-tab-dirty-dot"></span>' : '<span class="codicon codicon-close" style="font-size: 12px;"></span>'}
                        </div>
                      </div>
                    `;
      }).join('')}
                </div>

                <!-- Right: Run Python Play Button, Split Editor, Toggle Terminal Drawer Button -->
                <div style="display: flex; align-items: center; padding-right: 12px; gap: 4px;">
                  <div id="btn-run-python" class="ide-ctrl-btn" style="width: 26px; height: 26px;" title="Run Python File (Ctrl+F5)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.5A.5.5 0 0 1 4 2.1l9 5.5a.5.5 0 0 1 0 .8l-9 5.5A.5.5 0 0 1 3.5 13.5v-11zM4.5 3.37v9.26L12.08 8 4.5 3.37z"/></svg>
                  </div>
                  <div id="btn-ide-split-editor" class="ide-ctrl-btn ${this.isSecondarySidebarOpen ? 'active' : ''}" style="width: 26px; height: 26px; ${this.isSecondarySidebarOpen ? 'background: #313233; color: #ffffff;' : ''}" title="Toggle Python Tutorial Assistant (Ctrl+\\)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2h-11C1.67 2 1 2.67 1 3.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM2 3h7v10H2V3zm8 10h4V3h-4v10z"/></svg>
                  </div>
                  <div id="btn-toggle-terminal-drawer" class="ide-ctrl-btn" style="width: 26px; height: 26px;" title="Toggle Terminal Panel (Ctrl+\`)">
                    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2h-11C1.67 2 1 2.67 1 3.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zM2 3h12v10H2V3zm2 2.5l2.5 2.5L4 10.5l.7.7 3.2-3.2-3.2-3.2-.7.7zm5 5h3v1H9v-1z"/></svg>
                  </div>
                </div>
              </div>

              <!-- Editor Breadcrumb Navigation Bar (Dark - only shown when file is open) -->
              ${activeFile ? `
                <div style="height: 22px; background: #1e1e1e; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; padding: 0 16px; font-size: 12px; color: #858585; gap: 6px;">
                  <span>Learn</span>
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor" style="opacity: 0.7;"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 4.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L10.293 8.5 6.646 4.854a.5.5 0 0 1 0-.708z"/></svg>
                  <div style="display: inline-flex; align-items: center; gap: 6px; color: #cccccc;">
                    ${this.getFileIconSvg(activeFile)}
                    <span style="font-size: 12px;">${activeFile}</span>
                  </div>
                </div>
              ` : ''}

              <!-- Code Editor Surface (Dark #1e1e1e) -->
              <div id="ide-editor-container" style="flex: 1; display: ${this.isTerminalMaximized ? 'none' : 'flex'}; position: relative; background: #1e1e1e; min-height: 120px; overflow: hidden;">
                ${activeFile ? `
                  <!-- Left Gutter Line Numbers -->
                  <div id="ide-line-numbers-container" style="width: 44px; background: #1e1e1e; overflow: hidden; padding-top: 12px; border-right: none; user-select: none; flex-shrink: 0;">
                    <div id="ide-line-numbers" style="color: #858585; opacity: 0.65; text-align: right; padding-right: 10px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; will-change: transform;">${this.renderLineNumbersHtml(Math.max(1, (currentCode || '').split('\n').length), this.ideProblems)}</div>
                  </div>

                  <!-- Central Code Canvas (Single Scroll Container) -->
                  <div id="ide-editor-scroll-wrap" style="flex: 1; position: relative; overflow: hidden; background: #1e1e1e; height: 100%;">
                    <pre id="ide-highlight-display" style="margin: 0; padding: 12px 10px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #d4d4d4; pointer-events: none; white-space: pre; tab-size: 4; position: absolute; top: 0; left: 0; min-width: 100%; box-sizing: border-box; will-change: transform;">${this.highlightPythonCode(currentCode || '')}</pre>
                    <textarea id="ide-code-input" data-file="${activeFile}" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0; padding: 12px 10px; border: none; outline: none; background: transparent; color: transparent; caret-color: #ffffff; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; resize: none; white-space: pre; tab-size: 4; overflow: auto; box-sizing: border-box;">${this.escapeHtml(currentCode || '')}</textarea>
                  </div>

                  <div id="ide-autocomplete-popup" style="display: none;"></div>
                ` : `
                  <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #555555; gap: 8px; font-size: 13px; user-select: none;">
                    <svg viewBox="0 0 16 16" width="36" height="36" fill="#3c3c3c"><path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4.5L9 3.5h4a1 1 0 0 1 1 1zM3 2v12h10V4.5H8.5L7 3H3z"/></svg>
                    <span>No open editors</span>
                  </div>
                `}
              </div>

              <!-- Bottom Terminal Drawer (Inside left column, cuts cleanly under Editor) -->
              <div id="ide-terminal-panel" style="display: ${this.isTerminalDrawerClosed ? 'none' : 'flex'}; ${this.isTerminalMaximized ? 'flex: 1; height: 100%; border-top: none;' : `height: ${this.terminalHeight || '210px'}; border-top: 1px solid #2b2b2b;`} background: #181818; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, sans-serif; position: relative;">
                <!-- Terminal Tabs & Controls Strip -->
                <div style="height: 35px; background: #181818; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
                  <!-- Tabs: Problems, Output, Terminal -->
                  <div style="display: flex; align-items: center; gap: 18px; font-size: 11.5px; font-weight: 500;">
                    <span id="tab-terminal-problems" class="ide-term-tab ${this.activeDrawerTab === 'problems' ? 'active' : ''}" data-tab="problems" style="cursor: pointer; color: ${this.activeDrawerTab === 'problems' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'problems' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Problems${this.ideProblems && this.ideProblems.length ? ` <span style="background: #e51400; color: #ffffff; border-radius: 10px; padding: 1px 6px; font-size: 10px;">${this.ideProblems.length}</span>` : ''}</span>
                    <span id="tab-terminal-output" class="ide-term-tab ${this.activeDrawerTab === 'output' ? 'active' : ''}" data-tab="output" style="cursor: pointer; color: ${this.activeDrawerTab === 'output' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'output' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Output</span>
                    <span id="tab-terminal-cmd" class="ide-term-tab ${this.activeDrawerTab === 'terminal' ? 'active' : ''}" data-tab="terminal" style="cursor: pointer; color: ${this.activeDrawerTab === 'terminal' ? '#ffffff' : '#858585'}; border-bottom: ${this.activeDrawerTab === 'terminal' ? '1.5px solid #0078d4' : '1.5px solid transparent'}; padding: 8px 0;">Terminal</span>
                  </div>

                  <!-- Right Terminal Controls -->
                  <div style="display: flex; align-items: center; gap: 4px; color: #cccccc; position: relative;">
                    ${this.activeDrawerTab === 'terminal' ? `
                      <div id="btn-terminal-instance-select" style="display: flex; align-items: center; gap: 5px; height: 24px; padding: 0 6px; background: transparent; border: none; border-radius: 4px; font-size: 12px; cursor: pointer; color: #cccccc; user-select: none;" title="Switch Terminal (${this.activeTerminalId || 'powershell'})">
                        <span class="codicon codicon-terminal" style="font-size: 14px; color: #cccccc;"></span>
                        <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, Roboto, sans-serif; font-size: 12px; color: #cccccc;">${(this.activeTerminalId || 'powershell').includes('cmd') ? 'cmd' : ((this.activeTerminalId || '').includes('python') ? 'python' : 'powershell')}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 1px;">
                        <div id="btn-add-terminal" class="ide-ctrl-btn" style="width: 22px; height: 22px;" title="New Terminal (Ctrl+Shift+\`)"><span class="codicon codicon-add" style="font-size: 14px;"></span></div>
                        <div id="btn-terminal-dropdown-trigger" class="ide-ctrl-btn" style="width: 14px; height: 22px;" title="Select Default Profile"><span class="codicon codicon-chevron-down" style="font-size: 11px; opacity: 0.85;"></span></div>
                      </div>
                      <div id="btn-split-terminal" class="ide-ctrl-btn ${this.isTerminalSplit ? 'active' : ''}" style="background: ${this.isTerminalSplit ? '#313233' : 'transparent'};" title="Split Terminal (Ctrl+Shift+5)"><span class="codicon codicon-split-horizontal" style="font-size: 14px;"></span></div>
                      <div id="btn-clear-terminal" class="ide-ctrl-btn" title="Kill Terminal"><span class="codicon codicon-trash" style="font-size: 14px;"></span></div>
                      <div id="btn-terminal-more" class="ide-ctrl-btn" title="More Actions..."><span class="codicon codicon-ellipsis" style="font-size: 14px;"></span></div>
                      <div style="width: 1px; height: 14px; background: #3c3c3c; margin: 0 4px;"></div>
                    ` : ''}
                    <div id="btn-toggle-terminal-size" class="ide-ctrl-btn" title="${this.isTerminalMaximized ? 'Restore Panel Size' : 'Maximize Panel Size'}"><span class="codicon ${this.isTerminalMaximized ? 'codicon-screen-normal' : 'codicon-screen-full'}" style="font-size: 14px;"></span></div>
                    <div id="btn-close-terminal-panel" class="ide-ctrl-btn" title="Close Panel"><span class="codicon codicon-close" style="font-size: 14px;"></span></div>

                    <!-- Terminal Profiles / Instance Dropdown Menu -->
                    <div id="ide-terminal-dropdown-menu" style="display: ${this.isTerminalMenuOpen ? 'block' : 'none'}; position: absolute; top: 28px; right: 100px; width: 220px; background: #252526; border: 1px solid #454545; box-shadow: 0 4px 18px rgba(0,0,0,0.5); border-radius: 5px; z-index: 1000; padding: 4px; font-size: 12px;">
                      <div style="padding: 4px 8px; font-size: 11px; font-weight: 600; color: #858585; text-transform: uppercase;">Active Sessions</div>
                      ${this.terminalSessions.map(session => `
                        <div class="terminal-menu-item ${session === this.activeTerminalId ? 'active' : ''}" data-session="${session}" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: ${session === this.activeTerminalId ? '#ffffff' : '#cccccc'}; background: ${session === this.activeTerminalId ? '#094771' : 'transparent'}; display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
                          <div style="display: flex; align-items: center; gap: 6px;">
                            <span class="codicon codicon-terminal-powershell" style="font-size: 13px;"></span>
                            <span style="font-size: 12px;">${session}</span>
                          </div>
                          ${this.terminalSessions.length > 1 ? `
                            <span class="btn-delete-terminal-session codicon codicon-close" data-session="${session}" style="font-size: 11px;" title="Kill Terminal"></span>
                          ` : ''}
                        </div>
                      `).join('')}
                      <div style="height: 1px; background: #3c3c3c; margin: 4px 0;"></div>
                      <div style="padding: 4px 8px; font-size: 11px; font-weight: 600; color: #858585; text-transform: uppercase;">New Profile</div>
                      <div class="btn-create-profile-item" data-profile="PowerShell" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal-powershell" style="font-size: 13px; color: #569cd6;"></span>
                        <span>PowerShell</span>
                      </div>
                      <div class="btn-create-profile-item" data-profile="Command Prompt" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal" style="font-size: 13px; color: #dcdcaa;"></span>
                        <span>Command Prompt (cmd)</span>
                      </div>
                      <div class="btn-create-profile-item" data-profile="Python REPL" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-terminal" style="font-size: 13px; color: #4ec9b0;"></span>
                        <span>Python Interactive REPL</span>
                      </div>
                    </div>

                    <!-- More Actions Menu -->
                    <div id="ide-terminal-more-menu" style="display: ${this.isTerminalMoreMenuOpen ? 'block' : 'none'}; position: absolute; top: 28px; right: 50px; width: 170px; background: #252526; border: 1px solid #454545; box-shadow: 0 4px 18px rgba(0,0,0,0.5); border-radius: 5px; z-index: 1000; padding: 4px; font-size: 12px;">
                      <div id="btn-menu-clear-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-trash" style="font-size: 13px;"></span>
                        <span>Clear Terminal</span>
                      </div>
                      <div id="btn-menu-split-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-split-horizontal" style="font-size: 13px;"></span>
                        <span>Split Terminal</span>
                      </div>
                      <div id="btn-menu-kill-term" style="height: 26px; padding: 0 8px; border-radius: 3px; cursor: pointer; color: #cccccc; display: flex; align-items: center; gap: 6px;">
                        <span class="codicon codicon-close" style="font-size: 13px;"></span>
                        <span>Kill Terminal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Terminal Output & Prompt -->
                <div id="ide-terminal-stdout-container" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'terminal' ? 'flex' : 'none'}; flex: 1; overflow: hidden; background: #181818;">
                  <div id="ide-terminal-stdout-wrapper" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; border-right: ${this.isTerminalSplit ? '1px solid #2b2b2b' : 'none'}; cursor: text;">
                    <div id="ide-terminal-scroll-area" style="flex: 1; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto;">
                      <div id="ide-terminal-stdout" style="white-space: pre-wrap;">${(this.terminalOutputs && this.terminalOutputs[this.activeTerminalId]) || ''}</div>
                      <div class="ide-terminal-prompt-line" style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #cccccc; white-space: nowrap;">PS C:\\Learn&gt;</span>
                        <input id="ide-terminal-cli-input" type="text" autocomplete="off" spellcheck="false" style="flex: 1; border: none; outline: none; background: transparent; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #ffffff; padding: 0;" />
                      </div>
                    </div>
                  </div>

                  ${this.isTerminalSplit ? `
                    <div id="ide-terminal-stdout-split-wrapper" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; cursor: text;">
                      <div id="ide-terminal-scroll-area-split" style="flex: 1; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto;">
                        <div id="ide-terminal-stdout-split" style="white-space: pre-wrap;">${(this.terminalOutputs && this.terminalOutputs[this.activeTerminalId + '_split']) || ''}</div>
                        <div class="ide-terminal-prompt-line" style="display: flex; align-items: center; gap: 8px;">
                          <span style="color: #cccccc; white-space: nowrap;">PS C:\\Learn&gt;</span>
                          <input id="ide-terminal-cli-input-split" type="text" autocomplete="off" spellcheck="false" style="flex: 1; border: none; outline: none; background: transparent; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #ffffff; padding: 0;" />
                        </div>
                      </div>
                    </div>
                  ` : ''}
                </div>

                <div id="ide-terminal-output-pane" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'output' ? 'flex' : 'none'}; flex: 1; flex-direction: column; padding: 10px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto; white-space: pre-wrap; background: #181818;">${(this.outputLogs || '[Python Extension] Python 3.14 Language Server Ready.\n[Pyodide Runtime] In-browser WebAssembly worker thread initialized.\n[Workspace] Initialized virtual filesystem.').trim()}</div>

                <div id="ide-terminal-problems-pane" class="ide-terminal-content-pane" style="display: ${this.activeDrawerTab === 'problems' ? 'flex' : 'none'}; flex: 1; flex-direction: column; padding: 12px 16px; font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace; font-size: 13px; line-height: 20px; color: #cccccc; overflow-y: auto; background: #181818;">
                  ${(this.ideProblems && this.ideProblems.length > 0) ? `
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                      ${this.ideProblems.map(p => `
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #cccccc;">
                          <svg viewBox="0 0 16 16" width="14" height="14" fill="#f14c4c"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                          <span style="color: #f14c4c; font-weight: 600;">[Error]</span>
                          <span>${this.escapeHtml(p.message)}</span>
                          <span style="color: #858585; font-size: 11.5px; margin-left: auto;">${p.file} [${p.line}, ${p.col}]</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : `
                    <div style="display: flex; align-items: center; gap: 8px; color: #858585; font-size: 12.5px; padding-top: 4px;">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="#858585"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>
                      <span>No problems have been detected in the workspace.</span>
                    </div>
                  `}
                </div>
              </div>

            </div>

            <!-- Right: Assistant Tutorial / Secondary Sidebar Window (Full Height Column Cuts Entire Right Side) -->
            ${this.isSecondarySidebarOpen ? `
              <div id="ide-secondary-sidebar" style="width: 390px; min-width: 330px; max-width: 520px; background: #181818; border-left: 1px solid #2b2b2b; display: flex; flex-direction: column; z-index: 10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, sans-serif; height: 100%; overflow: hidden;">
                <!-- Assistant Header Strip -->
                <div style="height: 35px; background: #181818; border-bottom: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between; padding: 0 12px 0 16px;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="codicon codicon-book" style="color: #4ec9b0; font-size: 14px;"></span>
                    <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.5px; color: #cccccc; text-transform: uppercase;">Python 3.14 Tutorial</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <div id="btn-close-secondary-sidebar" class="ide-ctrl-btn" style="width: 24px; height: 24px;" title="Close Assistant (Ctrl+\\)">
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.708L8.707 8l3.647-3.646-.708-.708L8 7.293 4.354 3.646l-.708.708L7.293 8l-3.647 3.646.708.708L8 8.707z"/></svg>
                    </div>
                  </div>
                </div>

                <!-- Tutorial Top Bar (Chapter Dropdown & Progress) -->
                <div style="padding: 10px 14px; background: #1f1f1f; border-bottom: 1px solid #2b2b2b; display: flex; flex-direction: column; gap: 8px;">
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 11px; font-weight: 700; color: #858585; text-transform: uppercase; letter-spacing: 0.5px;">Curriculum</span>
                    <span style="font-size: 11px; color: #4ec9b0; font-weight: 600;">Chapter ${this.currentTutorialStep} / ${totalChapters} (${progressPct}%)</span>
                  </div>
                  <select id="select-tutorial-chapter" style="width: 100%; height: 28px; background: #252526; border: 1px solid #3c3c3c; border-radius: 4px; color: #ffffff; font-size: 12px; padding: 0 8px; outline: none; cursor: pointer;">
                    ${tutorialChapters.map(ch => `
                      <option value="${ch.id}" ${ch.id === this.currentTutorialStep ? 'selected' : ''}>${ch.title}</option>
                    `).join('')}
                  </select>
                  <!-- Progress Bar -->
                  <div style="width: 100%; height: 3px; background: #2b2b2b; border-radius: 2px; overflow: hidden;">
                    <div style="width: ${progressPct}%; height: 100%; background: linear-gradient(90deg, #0078d4, #4ec9b0); transition: width 0.3s ease;"></div>
                  </div>
                </div>

                <!-- Tutorial Body Content (Scrollable) -->
                <div id="ide-assistant-chat-stream" style="flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 14px;">
                  <!-- Chapter Header Card -->
                  <div style="background: #1f1f1f; border: 1px solid #2b2b2b; border-radius: 6px; padding: 12px; display: flex; flex-direction: column; gap: 6px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="background: rgba(78, 201, 176, 0.15); color: #4ec9b0; border: 1px solid rgba(78, 201, 176, 0.3); font-size: 10.5px; font-weight: 700; padding: 2px 6px; border-radius: 3px;">${currentChapter.badge}</span>
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: #ffffff;">${currentChapter.title}</div>
                    <div style="font-size: 12.5px; color: #a0a0a0; line-height: 1.5;">${currentChapter.summary}</div>
                  </div>

                  <!-- Concepts Section -->
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 11.5px; font-weight: 700; color: #858585; text-transform: uppercase; letter-spacing: 0.5px;">핵심 문법 개념</div>
                    ${currentChapter.concepts.map(c => `
                      <div style="background: #1e1e1e; border-left: 3px solid #0078d4; padding: 8px 10px; border-radius: 0 4px 4px 0; display: flex; flex-direction: column; gap: 2px;">
                        <div style="font-size: 12px; font-weight: 600; color: #9cdcfe;">${c.title}</div>
                        <div style="font-size: 11.5px; color: #cccccc; line-height: 1.45;">${c.desc}</div>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Practice Code Block -->
                  <div style="display: flex; flex-direction: column; gap: 6px;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                      <div style="font-size: 11.5px; font-weight: 700; color: #858585; text-transform: uppercase; letter-spacing: 0.5px;">실습 코드 (Python 3.14)</div>
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <button id="btn-tutorial-insert-code" data-step="${currentChapter.id}" style="background: #0e639c; border: none; border-radius: 3px; color: #ffffff; padding: 3px 8px; font-size: 11.5px; cursor: pointer; display: flex; align-items: center; gap: 4px;" title="현재 에디터에 이 실습 코드를 채워 넣습니다">
                          <span class="codicon codicon-sign-in"></span>
                          <span>에디터에 코드 삽입</span>
                        </button>
                        <button id="btn-tutorial-copy-code" data-code="${this.escapeHtml(currentChapter.code)}" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 3px; color: #cccccc; padding: 3px 6px; font-size: 11.5px; cursor: pointer;" title="코드 복사">
                          <span class="codicon codicon-copy"></span>
                        </button>
                      </div>
                    </div>
                    <pre style="margin: 0; padding: 10px; background: #141414; border: 1px solid #2b2b2b; border-radius: 4px; font-family: 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 18px; color: #d4d4d4; overflow-x: auto; white-space: pre;">${this.highlightPythonCode(currentChapter.code)}</pre>
                  </div>

                  <!-- Key Takeaways & Checklist -->
                  <div style="background: #1b2228; border: 1px solid #1f3a4d; border-radius: 6px; padding: 10px 12px; display: flex; flex-direction: column; gap: 4px;">
                    <div style="font-size: 11px; font-weight: 700; color: #4fc1ff; display: flex; align-items: center; gap: 5px;">
                      <span class="codicon codicon-info"></span>
                      <span>학습 체크포인트</span>
                    </div>
                    ${currentChapter.takeaways.map(t => `
                      <div style="font-size: 11.5px; color: #9cdcfe; line-height: 1.45; padding-left: 12px; position: relative;">
                        <span style="position: absolute; left: 2px;">•</span> ${t}
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Tutorial Bottom Navigation Toolbar -->
                <div style="padding: 10px 14px; background: #181818; border-top: 1px solid #2b2b2b; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <button id="btn-tutorial-prev" ${this.currentTutorialStep <= 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed;' : 'style="cursor: pointer;'} background: #252526; border: 1px solid #3c3c3c; border-radius: 4px; color: #ffffff; padding: 6px 12px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <span class="codicon codicon-arrow-left"></span>
                    <span>이전 챕터</span>
                  </button>

                  <div style="font-size: 11.5px; color: #858585;">${this.currentTutorialStep} / ${totalChapters}</div>

                  <button id="btn-tutorial-next" ${this.currentTutorialStep >= totalChapters ? 'disabled style="opacity: 0.4; cursor: not-allowed;' : 'style="cursor: pointer;'} background: #0078d4; border: none; border-radius: 4px; color: #ffffff; padding: 6px 12px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <span>${this.currentTutorialStep >= totalChapters ? '완료' : '다음 챕터'}</span>
                    <span class="codicon codicon-arrow-right"></span>
                  </button>
                </div>

              </div>
            ` : ''}
          </div>
        </div>
      `;

      // Mount Real-time Python Editor & IntelliSense Controller
      this.initPythonEditor();
    },

    setTutorialStep(step) {
      const chapters = PYTHON_TUTORIAL_DATA.chapters;
      const targetStep = Math.max(1, Math.min(chapters.length, step));
      this.currentTutorialStep = targetStep;
      try {
        sessionStorage.setItem('python_tutorial_step', String(targetStep));
      } catch (e) {}
      this.renderPythonIDE();
    },

    insertTutorialCodeToEditor(step) {
      const targetStep = step || this.currentTutorialStep || 1;
      const chapter = PYTHON_TUTORIAL_DATA.chapters.find(c => c.id === targetStep);
      if (!chapter) return;

      let files = this.getIDEFiles();
      let activeFile = this.activeIDEFile;

      if (!activeFile) {
        activeFile = 'main.py';
        this.activeIDEFile = activeFile;
        this.saveActiveIDEFile(activeFile);
        let tabs = this.getOpenIDETabs();
        if (!tabs.includes('main.py')) {
          tabs.push('main.py');
          this.openIDETabs = tabs;
          this.saveOpenIDETabs(tabs);
        }
      }

      files[activeFile] = chapter.code;
      this.saveIDEFiles(files);
      this.setFileDirty(activeFile, false);
      this.renderPythonIDE();
      this.showSafetyToast(`[Ch.${targetStep}] 실습 코드가 '${activeFile}'에 삽입되었습니다.`);
    },

    escapeHtml(str) {
      return (str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    },

    getIntelliSenseDatabase() {
      return [
        // Builtin functions (초급자 눈높이 맞춤 설명)
        { name: 'print', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'print(*values, sep=" ", end="\\n")', desc: '화면(콘솔 창)에 글자나 변수 값을 출력합니다.' },
        { name: 'len', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'len(s) -> int', desc: '문자열 글자 수나 리스트 안의 항목 개수를 세어줍니다.' },
        { name: 'range', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'range(stop) 또는 range(start, stop[, step])', desc: '0부터 원하는 숫자까지 차례대로 번호를 만들어줍니다 (for문과 함께 자주 사용).' },
        { name: 'input', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'input(prompt="") -> str', desc: '키보드로 입력한 글자를 한 줄 받아옵니다.' },
        { name: 'enumerate', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'enumerate(iterable, start=0)', desc: '순서 번호(0, 1, 2...)와 항목 값을 짝지어서 함께 꺼내줍니다.' },
        { name: 'zip', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'zip(*iterables)', desc: '여러 개의 리스트를 같은 순서끼리 짝을 맞춰 묶어줍니다.' },
        { name: 'map', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'map(function, iterable, ...)', desc: '리스트 안의 모든 값에 원하는 계산이나 함수를 한 번에 적용합니다.' },
        { name: 'filter', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'filter(function, iterable)', desc: '조건에 맞는(참인) 값들만 쏙 골라냅니다.' },
        { name: 'sorted', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'sorted(iterable, reverse=False) -> list', desc: '숫자나 글자를 순서대로 예쁘게 정렬한 새 리스트를 만듭니다.' },
        { name: 'sum', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'sum(iterable, start=0)', desc: '숫자들을 전부 더해서 총합을 구해줍니다.' },
        { name: 'min', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'min(iterable)', desc: '목록에서 가장 작은 최솟값을 찾아줍니다.' },
        { name: 'max', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'max(iterable)', desc: '목록에서 가장 큰 최댓값을 찾아줍니다.' },
        { name: 'abs', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'abs(x) -> number', desc: '음수를 양수로 바꾼 절댓값을 구합니다 (예: -5 -> 5).' },
        { name: 'round', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'round(number, ndigits=None)', desc: '소수점 숫자를 반올림합니다.' },
        { name: 'all', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'all(iterable) -> bool', desc: '모든 항목이 참(True)이면 True를 반환합니다.' },
        { name: 'any', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'any(iterable) -> bool', desc: '항목 중 하나라도 참(True)이 있으면 True를 반환합니다.' },
        { name: 'isinstance', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'isinstance(object, classinfo) -> bool', desc: '변수가 특정 자료형(문자, 숫자 등)이 맞는지 검사합니다.' },
        { name: 'issubclass', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'issubclass(class, classinfo) -> bool', desc: '클래스가 다른 클래스를 상속받았는지 검사합니다.' },
        { name: 'open', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'open(file, mode="r")', desc: '컴퓨터의 텍스트 파일을 읽거나 쓰기 위해 열어줍니다.' },
        { name: 'type', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'type(object) -> type', desc: '변수의 데이터 종류(str, int 등)가 무엇인지 알려줍니다.' },
        { name: 'id', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'id(object) -> int', desc: '컴퓨터 메모리에서 데이터의 고유 번호(주소)를 확인합니다.' },
        { name: 'dir', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'dir([object]) -> list[str]', desc: '이 데이터에서 사용할 수 있는 기능(함수) 목록을 보여줍니다.' },
        { name: 'help', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'help([object])', desc: '파이썬 설명서나 도움말을 화면에 띄워줍니다.' },
        { name: 'repr', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'repr(object) -> str', desc: '데이터를 화면에 있는 그대로 문자열로 표현해줍니다.' },
        { name: 'super', type: 'function', icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>', sig: 'super()', desc: '부모 클래스에 만들어진 원래 기능을 불러올 때 사용합니다.' },

        // Builtin Types / Classes (자료형)
        { name: 'str', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class str(object="")', desc: '글자나 문장(문자열)을 만듭니다.' },
        { name: 'int', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class int(x=0)', desc: '소수점이 없는 정수(0, 1, -5 등)를 만듭니다.' },
        { name: 'float', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class float(x=0)', desc: '소수점이 있는 실수(3.14, 0.5 등)를 만듭니다.' },
        { name: 'list', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class list([items])', desc: '여러 값을 순서대로 담아두는 목록(리스트)을 만듭니다.' },
        { name: 'dict', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class dict(**kwargs)', desc: '이름(키)과 내용(값)을 한 쌍으로 묶어 저장하는 사전을 만듭니다.' },
        { name: 'set', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class set([items])', desc: '중복 없이 값을 모아두는 집합을 만듭니다.' },
        { name: 'tuple', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class tuple([items])', desc: '한 번 만들면 내용을 바꿀 수 없는 읽기 전용 목록을 만듭니다.' },
        { name: 'bool', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class bool(x=False)', desc: '참(True) 또는 거짓(False) 논리 값을 만듭니다.' },

        // Keywords (키워드/명령문)
        { name: 'def', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'def 함수이름(매개변수):', desc: '나만의 새로운 함수(명령어 묶음)를 만듭니다.' },
        { name: 'class', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'class 클래스이름:', desc: '데이터와 함수를 하나로 묶는 틀(클래스)을 만듭니다.' },
        { name: 'import', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #569cd6;"></span>', sig: 'import 모듈이름', desc: '파이썬 내장 도구 상자나 다른 파일을 불러옵니다.' },
        { name: 'from', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #569cd6;"></span>', sig: 'from 모듈 import 이름', desc: '도구 상자 안에서 필요한 특정 기능만 골라 가져옵니다.' },
        { name: 'as', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #569cd6;"></span>', sig: 'import 모듈 as 별명', desc: '긴 모듈 이름이나 에러를 짧은 별명으로 부를 때 씁니다.' },
        { name: 'return', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'return [결과값]', desc: '함수 실행을 마치고 결과값을 되돌려줍니다.' },
        { name: 'if', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'if 조건:', desc: '만약 조건이 참(True)이면 아래 코드를 실행합니다.' },
        { name: 'elif', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'elif 조건:', desc: '앞 조건이 아닐 때 다른 조건을 추가로 검사합니다.' },
        { name: 'else', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'else:', desc: '위의 조건들이 모두 아닐 때 마지막으로 실행합니다.' },
        { name: 'for', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'for 항목 in 목록:', desc: '목록이나 범위 안의 값들을 하나씩 꺼내며 반복합니다.' },
        { name: 'while', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'while 조건:', desc: '조건이 참인 동안 계속해서 반복 실행합니다.' },
        { name: 'break', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'break', desc: '실행 중인 반복문을 즉시 멈추고 빠져나옵니다.' },
        { name: 'continue', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'continue', desc: '이번 반복만 건너뛰고 바로 다음 반복으로 넘어갑니다.' },
        { name: 'pass', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'pass', desc: '나중에 코드를 채우기 위해 일단 비워둘 때 사용합니다.' },
        { name: 'try', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'try:', desc: '에러가 발생할 가능성이 있는 코드를 안전하게 감쌉니다.' },
        { name: 'except', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'except Exception as e:', desc: '코드 실행 중 에러가 났을 때 해결할 코드를 적습니다.' },
        { name: 'finally', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'finally:', desc: '에러 발생 여부와 상관없이 마지막에 무조건 실행합니다.' },
        { name: 'raise', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'raise 에러종류("메시지")', desc: '원하는 시점에 직접 에러를 발생시킵니다.' },
        { name: 'with', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'with 파일열기 as 변수:', desc: '파일 등을 열고 사용 후 자동으로 안전하게 닫아줍니다.' },
        { name: 'lambda', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #569cd6;"></span>', sig: 'lambda 매개변수: 계산식', desc: '이름 없이 한 줄로 간단하게 만드는 작은 함수입니다.' },
        { name: 'yield', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'yield 값', desc: '함수에서 값을 하나 내보내고 잠시 멈춥니다.' },
        { name: 'async', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'async def 함수이름():', desc: '비동기(동시 처리) 함수를 정의합니다.' },
        { name: 'await', type: 'keyword', icon: '<span class="codicon codicon-symbol-keyword" style="color: #c586c0;"></span>', sig: 'await 비동기작업', desc: '비동기 작업이 끝날 때까지 잠시 기다립니다.' },
        { name: 'True', type: 'constant', icon: '<span class="codicon codicon-symbol-constant" style="color: #569cd6;"></span>', sig: 'True', desc: '참(맞음)을 뜻하는 값' },
        { name: 'False', type: 'constant', icon: '<span class="codicon codicon-symbol-constant" style="color: #569cd6;"></span>', sig: 'False', desc: '거짓(틀림)을 뜻하는 값' },
        { name: 'None', type: 'constant', icon: '<span class="codicon codicon-symbol-constant" style="color: #569cd6;"></span>', sig: 'None', desc: '아무것도 들어있지 않음(비어있음)을 뜻하는 값' },

        // Methods (메서드 / 자주 쓰는 기능)
        { name: 'append', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.append(값)', desc: '리스트의 맨 끝에 새 값을 1개 추가합니다.' },
        { name: 'extend', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.extend(다른리스트)', desc: '리스트 끝에 다른 목록의 모든 값들을 합칩니다.' },
        { name: 'insert', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.insert(위치번호, 값)', desc: '원하는 위치 번호(인덱스)에 새 값을 끼워 넣습니다.' },
        { name: 'pop', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.pop([위치번호]) -> 값', desc: '원하는 위치(기본값: 맨 끝)의 값을 꺼내고 목록에서 지웁니다.' },
        { name: 'remove', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.remove(지울값)', desc: '리스트에서 특정 값을 찾아 1개 삭제합니다.' },
        { name: 'clear', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.clear()', desc: '목록 안의 모든 내용을 깨끗이 비웁니다.' },
        { name: 'index', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.index(찾을값) -> int', desc: '찾으려는 값이 몇 번째 위치에 있는지 알려줍니다.' },
        { name: 'count', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.count(찾을값) -> int', desc: '특정 값이 목록 안에 몇 개 들어있는지 개수를 셉니다.' },
        { name: 'sort', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.sort(reverse=False)', desc: '리스트의 값들을 작은 순서대로 정렬합니다.' },
        { name: 'reverse', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'list.reverse()', desc: '목록에 든 값들의 순서를 거꾸로 뒤집습니다.' },
        { name: 'split', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.split(구분기호) -> list[str]', desc: '문장을 띄어쓰기나 쉼표 기준으로 잘라 리스트로 만듭니다.' },
        { name: 'join', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: '"구분자".join(리스트) -> str', desc: '리스트 안의 단어들을 하나의 문장으로 이어 붙입니다.' },
        { name: 'replace', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.replace(바꿀글자, 새글자) -> str', desc: '문장 속의 특정 글자를 다른 글자로 싹 바꿔줍니다.' },
        { name: 'strip', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.strip() -> str', desc: '문장 앞뒤에 있는 불필요한 공백을 깔끔하게 지워줍니다.' },
        { name: 'lower', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.lower() -> str', desc: '알파벳을 전부 소문자로 바꿉니다.' },
        { name: 'upper', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.upper() -> str', desc: '알파벳을 전부 대문자로 바꿉니다.' },
        { name: 'startswith', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.startswith(시작단어) -> bool', desc: '문장이 특정 단어로 시작하는지(True/False) 확인합니다.' },
        { name: 'endswith', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.endswith(끝단어) -> bool', desc: '문장이 특정 단어로 끝나는지(True/False) 확인합니다.' },
        { name: 'find', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'str.find(찾을글자) -> int', desc: '글자가 몇 번째에 있는지 찾습니다 (없으면 -1).' },
        { name: 'format', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: '"안녕 {}".format(이름) -> str', desc: '문장 속 빈칸({}) 자리에 원하는 값을 쏙 집어넣습니다.' },
        { name: 'keys', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'dict.keys()', desc: '사전(딕셔너리)에 든 이름(키)들만 모아서 보여줍니다.' },
        { name: 'values', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'dict.values()', desc: '사전(딕셔너리)에 든 실제 내용(값)들만 모아서 보여줍니다.' },
        { name: 'items', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'dict.items()', desc: '사전의 (이름, 내용) 쌍을 하나씩 꺼내어 보여줍니다.' },
        { name: 'get', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'dict.get(이름[, 기본값])', desc: '사전에서 값을 안전하게 꺼내옵니다 (없는 이름이어도 에러 안 남).' },
        { name: 'update', type: 'method', icon: '<span class="codicon codicon-symbol-method" style="color: #dcdcaa;"></span>', sig: 'dict.update(다른사전)', desc: '사전에 새로운 이름과 내용을 추가하거나 덮어씁니다.' }
      ];
    },

    extractUserSymbols(text) {
      const symbols = [];
      const seen = new Set();
      if (!text) return symbols;

      // Extract functions: def func_name(...)
      const funcRegex = /def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)/g;
      let match;
      while ((match = funcRegex.exec(text)) !== null) {
        if (!seen.has(match[1])) {
          seen.add(match[1]);
          symbols.push({
            name: match[1],
            type: 'function',
            icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>',
            sig: `def ${match[1]}(${match[2].trim()})`,
            desc: '사용자 정의 함수'
          });
        }
      }

      // Extract classes: class ClassName(...)
      const classRegex = /class\s+([a-zA-Z_]\w*)(?:\(([^)]*)\))?/g;
      while ((match = classRegex.exec(text)) !== null) {
        if (!seen.has(match[1])) {
          seen.add(match[1]);
          symbols.push({
            name: match[1],
            type: 'class',
            icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>',
            sig: `class ${match[1]}${match[2] ? `(${match[2]})` : ''}`,
            desc: '사용자 정의 클래스'
          });
        }
      }

      // Extract variables: var_name = ...
      const varRegex = /(?:^|\n)\s*([a-zA-Z_]\w*)\s*=/g;
      while ((match = varRegex.exec(text)) !== null) {
        if (!seen.has(match[1]) && !['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'with', 'return'].includes(match[1])) {
          seen.add(match[1]);
          symbols.push({
            name: match[1],
            type: 'variable',
            icon: '<span class="codicon codicon-symbol-variable" style="color: #9cdcfe;"></span>',
            sig: match[1],
            desc: '사용자 정의 변수'
          });
        }
      }

      return symbols;
    },

    getCaretCoordinates(textarea, position) {
      const div = document.createElement('div');
      const styles = window.getComputedStyle(textarea);
      for (let i = 0; i < styles.length; i++) {
        const prop = styles[i];
        div.style[prop] = styles.getPropertyValue(prop);
      }
      div.style.position = 'absolute';
      div.style.visibility = 'hidden';
      div.style.whiteSpace = 'pre-wrap';
      div.style.wordBreak = 'break-all';
      div.style.top = '0px';
      div.style.left = '0px';
      div.textContent = textarea.value.substring(0, position);

      const span = document.createElement('span');
      span.textContent = textarea.value.substring(position) || '.';
      div.appendChild(span);
      document.body.appendChild(div);

      const coordinates = {
        top: span.offsetTop,
        left: span.offsetLeft,
        lineHeight: parseInt(styles.lineHeight || '20', 10) || 20
      };
      document.body.removeChild(div);
      return coordinates;
    },

    triggerAutocomplete(textarea, popup) {
      if (!popup || !textarea) return;

      const val = textarea.value;
      const cursorPos = textarea.selectionStart;

      // Selection active or empty text -> immediately close
      if (textarea.selectionEnd !== cursorPos || !val) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      const textBefore = val.substring(0, cursorPos);
      const lines = textBefore.split('\n');
      const curLine = lines[lines.length - 1] || '';

      // 1. If line is empty or whitespace only -> HIDE
      if (!curLine.trim()) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      // 2. If line contains a comment # before the cursor -> HIDE
      if (curLine.includes('#')) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      // 3. If cursor is preceded by space, newline, or syntax delimiter (except dot) -> HIDE
      if (/[\s,;:()[\]{}"']$/.test(curLine)) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      // 4. Extract member dot access (requires a valid receiver before the dot) or identifier
      const dotMatch = curLine.match(/(?:[a-zA-Z0-9_\]\)"'])\.([a-zA-Z_]\w*)?$/);
      let isDot = false;
      let token = '';

      if (dotMatch) {
        isDot = true;
        token = (dotMatch[1] || '').toLowerCase();
      } else {
        // Lone dot without a valid receiver (e.g. '.', ' .', '= .', '( .') -> HIDE
        if (/\.$/.test(curLine)) {
          popup.style.display = 'none';
          this.acMatches = [];
          return;
        }

        const wordMatch = curLine.match(/([a-zA-Z_]\w*)$/);
        if (!wordMatch) {
          popup.style.display = 'none';
          this.acMatches = [];
          return;
        }
        token = wordMatch[1].toLowerCase();
      }

      // Require at least 1 character for identifiers
      if (!isDot && (!token || token.length === 0)) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      // 5. Query candidate symbols
      const builtinDb = this.getIntelliSenseDatabase();
      const userSymbols = this.extractUserSymbols(val);
      const combined = [...userSymbols, ...builtinDb];

      let filtered;
      if (isDot) {
        filtered = combined.filter(item => item.type === 'method' && (!token || item.name.toLowerCase().startsWith(token)));
      } else {
        filtered = combined.filter(item => item.name.toLowerCase().startsWith(token));
      }

      if (!filtered.length) {
        popup.style.display = 'none';
        this.acMatches = [];
        return;
      }

      this.acMatches = filtered.slice(0, 10);
      this.acToken = token;
      this.acIsDot = isDot;
      this.acSelectedIndex = 0;
      this.renderAutocompletePopup(popup);

      // 6. Calculate Caret Coordinates and position popup
      const coords = this.getCaretCoordinates(textarea, cursorPos);
      const parentEl = textarea.parentElement;
      const containerWidth = parentEl ? parentEl.clientWidth : 600;
      const containerHeight = parentEl ? parentEl.clientHeight : 400;
      const popupWidth = 520;
      const popupHeight = 220;

      let topPos = coords.top - textarea.scrollTop + coords.lineHeight + 16;
      if (topPos + popupHeight > containerHeight - 10 && coords.top - textarea.scrollTop > popupHeight) {
        topPos = coords.top - textarea.scrollTop - popupHeight - 4;
      }

      let leftPos = coords.left - textarea.scrollLeft + 16;
      if (leftPos + popupWidth > containerWidth - 20) {
        leftPos = Math.max(16, containerWidth - popupWidth - 20);
      }

      popup.style.top = `${Math.max(16, topPos)}px`;
      popup.style.left = `${Math.max(16, leftPos)}px`;
      popup.style.display = 'flex';
    },

    renderAutocompletePopup(popup) {
      if (!popup || !this.acMatches || !this.acMatches.length) return;
      const activeItem = this.acMatches[this.acSelectedIndex] || this.acMatches[0];

      popup.innerHTML = `
        <div class="ide-ac-list">
          ${this.acMatches.map((item, idx) => {
        const isSelected = idx === this.acSelectedIndex;
        const token = this.acToken || '';
        const matchLen = token.length;
        const name = item.name;
        const labelHtml = matchLen > 0 && name.toLowerCase().startsWith(token) ?
          `<span class="ide-ac-match">${this.escapeHtml(name.substring(0, matchLen))}</span>${this.escapeHtml(name.substring(matchLen))}` :
          this.escapeHtml(name);

        return `
              <div class="ide-ac-item ${isSelected ? 'active' : ''}" data-index="${idx}">
                <div class="ide-ac-icon">${item.icon}</div>
                <div class="ide-ac-label">${labelHtml}</div>
                <div class="ide-ac-type">${item.type}</div>
              </div>
            `;
      }).join('')}
        </div>
        ${activeItem ? `
          <div class="ide-ac-docs">
            <div class="ide-ac-doc-sig">${this.escapeHtml(activeItem.sig || activeItem.name)}</div>
            <div class="ide-ac-doc-desc">${this.escapeHtml(activeItem.desc || '')}</div>
          </div>
        ` : ''}
      `;

      popup.querySelectorAll('.ide-ac-item').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(el.getAttribute('data-index'), 10);
          this.acSelectedIndex = idx;
          const textarea = document.getElementById('ide-code-input');
          if (textarea) this.acceptAutocomplete(textarea, popup);
        });
      });
    },

    navigateAutocomplete(delta) {
      if (!this.acMatches || !this.acMatches.length) return;
      this.acSelectedIndex = (this.acSelectedIndex + delta + this.acMatches.length) % this.acMatches.length;
      const popup = document.getElementById('ide-autocomplete-popup');
      if (popup) {
        this.renderAutocompletePopup(popup);
        const activeEl = popup.querySelector('.ide-ac-item.active');
        if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
      }
    },

    acceptAutocomplete(textarea, popup) {
      if (!this.acMatches || !this.acMatches[this.acSelectedIndex]) return;
      const chosen = this.acMatches[this.acSelectedIndex];
      const cursorPos = textarea.selectionStart;
      const textBefore = textarea.value.substring(0, cursorPos);

      let tokenLen = 0;
      const dotMatch = textBefore.match(/(?:[a-zA-Z0-9_\]\)"'])\.([a-zA-Z_]\w*)$/);
      if (dotMatch) {
        tokenLen = (dotMatch[1] || '').length;
      } else {
        const wordMatch = textBefore.match(/([a-zA-Z_]\w*)$/);
        if (wordMatch) {
          tokenLen = wordMatch[1].length;
        }
      }

      const beforeToken = textBefore.substring(0, textBefore.length - tokenLen);
      const afterToken = textarea.value.substring(cursorPos);

      let insertValue = chosen.name;
      let newCursorOffset = insertValue.length;

      // Smart insert with function call parenthesis
      if (chosen.type === 'function' || chosen.type === 'method') {
        insertValue += '()';
        newCursorOffset = insertValue.length - 1; // place inside ()
      } else if (chosen.type === 'keyword' && ['def', 'class', 'if', 'elif', 'for', 'while', 'import', 'from', 'as', 'return', 'raise', 'with', 'try', 'except', 'finally', 'async', 'await', 'lambda'].includes(chosen.name)) {
        insertValue += ' ';
        newCursorOffset = insertValue.length;
      }

      textarea.value = beforeToken + insertValue + afterToken;
      textarea.selectionStart = textarea.selectionEnd = beforeToken.length + newCursorOffset;
      popup.style.display = 'none';
      this.acMatches = [];
      this.acSuppress = true;
      textarea.focus();
      textarea.dispatchEvent(new Event('input'));
    },

    initPythonEditor() {
      const textarea = document.getElementById('ide-code-input');
      const highlightDisplay = document.getElementById('ide-highlight-display');
      const lineNumbers = document.getElementById('ide-line-numbers');
      const popup = document.getElementById('ide-autocomplete-popup');
      if (!textarea || !highlightDisplay) return;

      const curEditingFile = textarea.getAttribute('data-file') || this.activeIDEFile || 'main.py';
      const files = this.getIDEFiles();
      if (!textarea.value && files[curEditingFile] !== undefined) {
        textarea.value = files[curEditingFile];
      }

      const updateHighlight = () => {
        const text = textarea.value;
        const curActive = textarea.getAttribute('data-file') || this.activeIDEFile || 'main.py';
        const curFiles = this.getIDEFiles();
        curFiles[curActive] = text;
        this.saveIDEFiles(curFiles);

        // Live Syntax & Diagnostic Problem Detector
        const problems = this.lintPythonCode(text, curActive);
        this.ideProblems = problems;

        // Update Line Numbers with Gutter Diagnostic Markers
        const linesArr = text.split('\n');
        const lineCount = Math.max(1, linesArr.length);
        if (lineNumbers) {
          lineNumbers.innerHTML = this.renderLineNumbersHtml(lineCount, problems);
        }

        // Render Problems badge on tab
        const problemsTab = document.getElementById('tab-terminal-problems');
        if (problemsTab) {
          problemsTab.innerHTML = `Problems${problems.length > 0 ? ` <span style="background: #e51400; color: #ffffff; border-radius: 10px; padding: 1px 6px; font-size: 10px;">${problems.length}</span>` : ''}`;
        }

        // Render Problems in Bottom Drawer if panel is open
        const problemsPane = document.getElementById('ide-terminal-problems-pane');
        if (problemsPane) {
          if (problems.length > 0) {
            problemsPane.innerHTML = `
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${problems.map(p => `
                  <div class="btn-problem-item" data-file="${p.file}" data-line="${p.line}" data-col="${p.col}" style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: #cccccc; cursor: pointer; padding: 4px 8px; border-radius: 3px;" title="Click to jump to line ${p.line}">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="${p.severity === 'warning' ? '#cca700' : '#f14c4c'}"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                    <span style="color: ${p.severity === 'warning' ? '#cca700' : '#f14c4c'}; font-weight: 600;">[${p.severity === 'warning' ? 'Warning' : 'Error'}]</span>
                    <span>${this.escapeHtml(p.message)}</span>
                    <span style="color: #858585; font-size: 11.5px; margin-left: auto; font-family: 'JetBrains Mono', Consolas, monospace;">${p.file} [${p.line}, ${p.col}]</span>
                  </div>
                `).join('')}
              </div>
            `;
          } else {
            problemsPane.innerHTML = `
              <div style="display: flex; align-items: center; gap: 8px; color: #858585; font-size: 12.5px; padding-top: 4px;">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="#858585"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>
                <span>No problems have been detected in the workspace.</span>
              </div>
            `;
          }
        }

        highlightDisplay.innerHTML = this.highlightPythonCode(text);
        if (typeof syncScroll === 'function') syncScroll();
        if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
      };

      // Input Event: live highlight & trigger autocomplete
      textarea.addEventListener('input', () => {
        updateHighlight();
        if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
        if (this.acSuppress) {
          this.acSuppress = false;
          return;
        }
        this.triggerAutocomplete(textarea, popup);
      });

      // Synchronize Scroll across Textarea, Highlight Display, and Gutter Line Numbers
      const syncScroll = () => {
        const top = textarea.scrollTop;
        const left = textarea.scrollLeft;

        if (highlightDisplay) {
          highlightDisplay.style.transform = `translate(${-left}px, ${-top}px)`;
        }
        if (lineNumbers) {
          lineNumbers.style.transform = `translateY(${-top}px)`;
        }
      };

      // Auto-scroll viewport to follow active cursor line
      const scrollCursorIntoView = () => {
        if (!textarea) return;
        const pos = textarea.selectionStart || 0;
        const textBefore = textarea.value.substring(0, pos);
        const lineIndex = (textBefore.match(/\n/g) || []).length;
        const lineHeight = 20;
        const paddingTop = 12;

        const cursorTop = lineIndex * lineHeight + paddingTop;
        const cursorBottom = cursorTop + lineHeight;
        const viewportTop = textarea.scrollTop;
        const viewportHeight = textarea.clientHeight;
        const viewportBottom = viewportTop + viewportHeight;

        if (cursorBottom > viewportBottom - 8) {
          textarea.scrollTop = cursorBottom - viewportHeight + 20;
          syncScroll();
        } else if (cursorTop < viewportTop + 8) {
          textarea.scrollTop = Math.max(0, cursorTop - 12);
          syncScroll();
        }
      };

      textarea.addEventListener('scroll', () => {
        syncScroll();
        if (popup) popup.style.display = 'none';
      });

      // Switch cursor to default arrow pointer when hovering over scrollbar area
      textarea.addEventListener('mousemove', (e) => {
        const rect = textarea.getBoundingClientRect();
        if (e.clientX >= rect.right - 14) {
          textarea.style.cursor = 'default';
        } else {
          textarea.style.cursor = 'text';
        }
      });
      textarea.addEventListener('mouseleave', () => {
        textarea.style.cursor = 'text';
      });

      // Keyboard Event: VS Code Smart Keybindings & Autocomplete controls
      textarea.addEventListener('keydown', (e) => {
        // Autocomplete keyboard control
        if (popup && popup.style.display === 'flex') {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateAutocomplete(1);
            return;
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateAutocomplete(-1);
            return;
          }
          if (e.key === 'Tab' || e.key === 'Enter') {
            e.preventDefault();
            this.acceptAutocomplete(textarea, popup);
            return;
          }
          if (e.key === 'Escape') {
            e.preventDefault();
            popup.style.display = 'none';
            return;
          }
        }

        // Ctrl + / : Toggle Comment
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          let lineEnd = val.indexOf('\n', end);
          if (lineEnd === -1) lineEnd = val.length;

          const block = val.substring(lineStart, lineEnd);
          const lines = block.split('\n');
          const allCommented = lines.every(l => l.trim().startsWith('#') || !l.trim());
          const newLines = lines.map(l => {
            if (allCommented) {
              return l.replace(/^(\s*)#\s?/, '$1');
            } else {
              return l.replace(/^(\s*)(.*)$/, '$1# $2');
            }
          });
          const newBlock = newLines.join('\n');
          textarea.value = val.substring(0, lineStart) + newBlock + val.substring(lineEnd);
          textarea.selectionStart = lineStart;
          textarea.selectionEnd = lineStart + newBlock.length;
          updateHighlight();
          return;
        }

        // Tab / Shift + Tab : 4-space Indent / Outdent
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;

          if (start !== end && val.substring(start, end).includes('\n')) {
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            let lineEnd = val.indexOf('\n', end);
            if (lineEnd === -1) lineEnd = val.length;
            const block = val.substring(lineStart, lineEnd);
            const lines = block.split('\n');
            const newLines = lines.map(l => {
              if (e.shiftKey) {
                return l.startsWith('    ') ? l.substring(4) : (l.startsWith('\t') ? l.substring(1) : l.replace(/^\s{1,3}/, ''));
              } else {
                return '    ' + l;
              }
            });
            const newBlock = newLines.join('\n');
            textarea.value = val.substring(0, lineStart) + newBlock + val.substring(lineEnd);
            textarea.selectionStart = lineStart;
            textarea.selectionEnd = lineStart + newBlock.length;
          } else {
            if (e.shiftKey) {
              const lineStart = val.lastIndexOf('\n', start - 1) + 1;
              const curLine = val.substring(lineStart, start);
              if (curLine.startsWith('    ')) {
                textarea.value = val.substring(0, lineStart) + curLine.substring(4) + val.substring(start);
                textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - 4);
              }
            } else {
              textarea.value = val.substring(0, start) + '    ' + val.substring(end);
              textarea.selectionStart = textarea.selectionEnd = start + 4;
            }
          }
          updateHighlight();
          return;
        }

        // Enter : Smart Indentation
        if (e.key === 'Enter') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;
          const lineStart = val.lastIndexOf('\n', start - 1) + 1;
          const currentLine = val.substring(lineStart, start);
          const indentMatch = currentLine.match(/^\s*/);
          let indent = indentMatch ? indentMatch[0] : '';
          if (currentLine.trim().endsWith(':')) {
            indent += '    ';
          }
          textarea.value = val.substring(0, start) + '\n' + indent + val.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length;
          updateHighlight();
          return;
        }

        // Auto-Closing Pairs
        const pairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
        if (pairs[e.key]) {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;
          if (start !== end) {
            e.preventDefault();
            const selected = val.substring(start, end);
            textarea.value = val.substring(0, start) + e.key + selected + pairs[e.key] + val.substring(end);
            textarea.selectionStart = start + 1;
            textarea.selectionEnd = end + 1;
            updateHighlight();
            return;
          } else {
            if (val[start] === e.key && (e.key === '"' || e.key === "'")) {
              e.preventDefault();
              textarea.selectionStart = textarea.selectionEnd = start + 1;
              return;
            }
            e.preventDefault();
            textarea.value = val.substring(0, start) + e.key + pairs[e.key] + val.substring(start);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
            updateHighlight();
            this.triggerAutocomplete(textarea, popup);
            return;
          }
        }

        // Backspace: Delete 4-space tab indent or empty pair
        if (e.key === 'Backspace') {
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const val = textarea.value;

          if (start === end && start > 0) {
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            const beforeOnLine = val.substring(lineStart, start);

            // If preceded by indent spaces on current line, delete 4 spaces (or up to tab stop)
            if (/^ +$/.test(beforeOnLine)) {
              e.preventDefault();
              const col = beforeOnLine.length;
              const deleteCount = (col % 4 === 0) ? 4 : (col % 4);
              textarea.value = val.substring(0, start - deleteCount) + val.substring(start);
              textarea.selectionStart = textarea.selectionEnd = start - deleteCount;
              updateHighlight();
              return;
            }

            // If inside empty auto-closing pair e.g. (), [], {}, "", ''
            const prevChar = val[start - 1];
            const nextChar = val[start];
            if (pairs[prevChar] === nextChar) {
              e.preventDefault();
              textarea.value = val.substring(0, start - 1) + val.substring(start + 1);
              textarea.selectionStart = textarea.selectionEnd = start - 1;
              updateHighlight();
              return;
            }
          }
        }

        // Close autocomplete on navigation keys
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(e.key)) {
          if (popup) popup.style.display = 'none';
        }
      });

      textarea.addEventListener('click', () => {
        if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
        this.triggerAutocomplete(textarea, popup);
      });

      textarea.addEventListener('keyup', (e) => {
        updateHighlight();
        if (typeof scrollCursorIntoView === 'function') scrollCursorIntoView();
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown', 'Escape', 'Enter', 'Tab', 'Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(e.key)) {
          if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'Tab') {
            if (popup) {
              popup.style.display = 'none';
              this.acMatches = [];
            }
          }
        } else {
          if (this.acSuppress) {
            this.acSuppress = false;
            return;
          }
          this.triggerAutocomplete(textarea, popup);
        }
      });
      textarea.addEventListener('change', updateHighlight);
      textarea.addEventListener('blur', () => {
        setTimeout(() => {
          if (popup) popup.style.display = 'none';
        }, 150);
        updateHighlight();
      });

      // Floating VS Code Diagnostic Hover Tooltip
      let tooltipEl = document.getElementById('ide-diagnostics-tooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'ide-diagnostics-tooltip';
        tooltipEl.className = 'ide-diagnostics-tooltip';
        tooltipEl.style.display = 'none';
        document.body.appendChild(tooltipEl);
      }

      const editorContainer = document.getElementById('ide-editor-container');
      if (editorContainer) {
        editorContainer.addEventListener('mousemove', (e) => {
          const target = document.elementFromPoint(e.clientX, e.clientY);
          const squiggly = target ? target.closest('.ide-squiggly-error, .ide-squiggly-warning, .ide-line-error-marker, .ide-line-warning-marker') : null;
          if (squiggly && squiggly.getAttribute('title')) {
            const titleMsg = squiggly.getAttribute('title');
            const isWarning = squiggly.classList.contains('ide-squiggly-warning') || squiggly.classList.contains('ide-line-warning-marker');
            tooltipEl.innerHTML = `
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="${isWarning ? '#cca700' : '#f14c4c'}" style="flex-shrink: 0; margin-top: 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1.2a5.8 5.8 0 1 1 0 11.6A5.8 5.8 0 0 1 8 2.2zm-.7 3.3h1.4v4H7.3v-4zm0 5h1.4v1.4H7.3v-1.4z"/></svg>
                <div style="flex: 1;">
                  <div style="font-weight: 600; color: ${isWarning ? '#cca700' : '#f14c4c'}; font-size: 11px; margin-bottom: 2px;">${isWarning ? 'Warning' : 'Error'} (Python Language Server)</div>
                  <div style="color: #d4d4d4; font-size: 12px; word-break: break-word;">${this.escapeHtml(titleMsg)}</div>
                </div>
              </div>
            `;
            tooltipEl.style.display = 'block';
            tooltipEl.style.left = `${Math.min(window.innerWidth - 390, e.clientX + 12)}px`;
            tooltipEl.style.top = `${Math.min(window.innerHeight - 80, e.clientY + 18)}px`;
          } else {
            tooltipEl.style.display = 'none';
          }
        });

        editorContainer.addEventListener('mouseleave', () => {
          if (tooltipEl) tooltipEl.style.display = 'none';
        });
      }

      // Real-time REPL Interactive Command Bar Event Handlers
      const attachCLI = (inputId, outputId, wrapperId, isSplit) => {
        const cliInput = document.getElementById(inputId);
        const termStdout = document.getElementById(outputId);
        const wrapper = document.getElementById(wrapperId);
        if (!cliInput || !termStdout) return;

        if (wrapper) {
          wrapper.addEventListener('click', () => {
            cliInput.focus();
          });
        }

        cliInput.addEventListener('keydown', async (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const cmd = cliInput.value.trim();
            if (!cmd) return;
            cliInput.value = '';

            const sessionKey = isSplit ? (this.activeTerminalId + '_split') : this.activeTerminalId;
            let outputHtml = `<div><span style="color: #cccccc;">PS C:\\Learn&gt;</span> ${this.escapeHtml(cmd)}</div>`;

            if (cmd === 'clear' || cmd === 'cls') {
              termStdout.innerHTML = '';
              if (!this.terminalOutputs) this.terminalOutputs = {};
              this.terminalOutputs[sessionKey] = '';
              return;
            }

            if (cmd === 'ls' || cmd === 'dir') {
              const files = this.getIDEFiles();
              const folders = this.getIDEFolders();
              let fileListHtml = '<div style="color: #cccccc; padding: 2px 0;">\nDirectory: C:\\Learn\n\nMode         Name\n----         ----\n';
              folders.forEach(f => { fileListHtml += `d-----       ${f}\n`; });
              Object.keys(files).forEach(f => { fileListHtml += `-a----       ${f}\n`; });
              fileListHtml += '</div>';
              outputHtml += fileListHtml;
              termStdout.innerHTML += outputHtml;
              if (!this.terminalOutputs) this.terminalOutputs = {};
              this.terminalOutputs[sessionKey] = termStdout.innerHTML;
              const scrollContainer = termStdout.parentElement;
              if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
              return;
            }

            termStdout.innerHTML += outputHtml;
            const scrollContainer = termStdout.parentElement;
            if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

            let codeToRun = cmd;
            if (cmd.startsWith('python ') || cmd.startsWith('py ')) {
              const targetFile = cmd.replace(/^(python|py)\s+/, '').trim();
              const files = this.getIDEFiles();
              if (files[targetFile] !== undefined) {
                codeToRun = files[targetFile];
              }
            }

            if (typeof loadPyodide !== 'undefined') {
              try {
                if (!this.pyodideInstance) {
                  this.pyodideInstance = await loadPyodide();
                }
                // Ensure current directory in Python sys.path
                try {
                  await this.pyodideInstance.runPythonAsync('import sys\nif "." not in sys.path:\n    sys.path.insert(0, ".")');
                } catch (spErr) { }

                // Sync all virtual files into pyodide virtual filesystem with directory creation
                const files = this.getIDEFiles();
                for (const [fname, fcontent] of Object.entries(files)) {
                  try {
                    if (fname.includes('/')) {
                      const parts = fname.split('/');
                      parts.pop();
                      let currentDir = '';
                      for (const part of parts) {
                        currentDir = currentDir ? `${currentDir}/${part}` : part;
                        try { this.pyodideInstance.FS.mkdir(currentDir); } catch (dirErr) { }
                      }
                    }
                    this.pyodideInstance.FS.writeFile(fname, fcontent);
                  } catch (fsErr) { }
                }

                let out = '';
                const decoder = new TextDecoder('utf-8');
                this.pyodideInstance.setStdout({
                  raw: (byte) => {
                    out += decoder.decode(new Uint8Array([byte]), { stream: true });
                  }
                });
                this.pyodideInstance.setStderr({
                  raw: (byte) => {
                    out += decoder.decode(new Uint8Array([byte]), { stream: true });
                  }
                });
                if (typeof this.pyodideInstance.setStdin === 'function') {
                  try {
                    this.pyodideInstance.setStdin({
                      stdin: () => window.prompt('Python input():') || ''
                    });
                  } catch (inErr) { }
                }

                const res = await this.pyodideInstance.runPythonAsync(codeToRun);
                try {
                  await this.pyodideInstance.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
                } catch (fErr) { }
                out += decoder.decode();
                if (out) termStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(out)}</div>`;
                if (res !== undefined) termStdout.innerHTML += `<div style="color: #4fc1ff;">${this.escapeHtml(String(res))}</div>`;
              } catch (err) {
                termStdout.innerHTML += `<div style="color: #f14c4c;">${this.escapeHtml(err.message)}</div>`;
              }
            } else {
              try {
                if (codeToRun.startsWith('print(')) {
                  let inner = codeToRun.slice(6, -1);
                  let endChar = '\n';
                  const endMatch = inner.match(/,\s*end\s*=\s*(["'])(.*?)\1/);
                  if (endMatch) {
                    endChar = endMatch[2];
                    inner = inner.replace(/,\s*end\s*=\s*(["'])(.*?)\1/, '');
                  }
                  const textVal = inner.trim().replace(/^["']|["']$/g, '');
                  termStdout.innerHTML += `<div style="white-space: pre-wrap;">${this.escapeHtml(textVal + endChar)}</div>`;
                } else {
                  termStdout.innerHTML += `<div style="color: #cccccc;">${this.escapeHtml(codeToRun)}</div>`;
                }
              } catch (err) {
                termStdout.innerHTML += `<div style="color: #f14c4c;">${this.escapeHtml(err.message)}</div>`;
              }
            }
            if (!this.terminalOutputs) this.terminalOutputs = {};
            this.terminalOutputs[sessionKey] = termStdout.innerHTML;
            try {
              sessionStorage.setItem('python_ide_terminal_outputs', JSON.stringify(this.terminalOutputs));
            } catch (e) { }
            if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
          }
        });
      };

      attachCLI('ide-terminal-cli-input', 'ide-terminal-stdout', 'ide-terminal-stdout-wrapper', false);
      attachCLI('ide-terminal-cli-input-split', 'ide-terminal-stdout-split', 'ide-terminal-stdout-split-wrapper', true);

      // Auto-scroll terminal to bottom after mounting
      const termScroll = document.getElementById('ide-terminal-scroll-area');
      if (termScroll) termScroll.scrollTop = termScroll.scrollHeight;
      const termScrollSplit = document.getElementById('ide-terminal-scroll-area-split');
      if (termScrollSplit) termScrollSplit.scrollTop = termScrollSplit.scrollHeight;

      updateHighlight();
    },

    navigateToProblem(file, line, col) {
      if (file && file !== this.activeIDEFile) {
        this.activeIDEFile = file;
        const tabs = this.getOpenIDETabs();
        if (!tabs.includes(file)) tabs.push(file);
        this.openIDETabs = tabs;
        this.saveOpenIDETabs(tabs);
        this.saveActiveIDEFile(file);
        this.renderPythonIDE();
      }
      setTimeout(() => {
        const textarea = document.getElementById('ide-code-input');
        if (!textarea) return;
        textarea.focus();
        const lines = textarea.value.split('\n');
        let charIndex = 0;
        for (let i = 0; i < Math.min(line - 1, lines.length); i++) {
          charIndex += lines[i].length + 1;
        }
        charIndex += Math.min(col - 1, (lines[line - 1] || '').length);
        textarea.selectionStart = textarea.selectionEnd = charIndex;
        const lineHeight = 20;
        textarea.scrollTop = Math.max(0, (line - 3) * lineHeight);
      }, 60);
    },

    async runPythonCode() {
      const textarea = document.getElementById('ide-code-input');
      const terminalStdout = document.getElementById('ide-terminal-stdout');
      if (!textarea || !terminalStdout) return;

      const code = textarea.value;
      const activeFile = this.activeIDEFile || 'main.py';
      terminalStdout.innerHTML += `<div><span style="color: #cccccc;">PS C:\\Learn&gt;</span> python ${activeFile}</div>`;
      const scrollContainer = terminalStdout.parentElement;
      if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

      // Check if Pyodide WebAssembly is available
      if (typeof loadPyodide !== 'undefined') {
        let logs = '';
        const decoder = new TextDecoder('utf-8');
        try {
          if (!this.pyodideInstance) {
            this.pyodideInstance = await loadPyodide();
          }

          // Ensure current directory in Python sys.path
          try {
            await this.pyodideInstance.runPythonAsync('import sys\nif "." not in sys.path:\n    sys.path.insert(0, ".")');
          } catch (spErr) { }

          // Sync all virtual files into pyodide virtual filesystem with directory creation
          const files = this.getIDEFiles();
          for (const [fname, fcontent] of Object.entries(files)) {
            try {
              if (fname.includes('/')) {
                const parts = fname.split('/');
                parts.pop();
                let currentDir = '';
                for (const part of parts) {
                  currentDir = currentDir ? `${currentDir}/${part}` : part;
                  try { this.pyodideInstance.FS.mkdir(currentDir); } catch (dirErr) { }
                }
              }
              this.pyodideInstance.FS.writeFile(fname, fcontent);
            } catch (fsErr) { }
          }

          this.pyodideInstance.setStdout({
            raw: (byte) => {
              logs += decoder.decode(new Uint8Array([byte]), { stream: true });
            }
          });
          this.pyodideInstance.setStderr({
            raw: (byte) => {
              logs += decoder.decode(new Uint8Array([byte]), { stream: true });
            }
          });
          if (typeof this.pyodideInstance.setStdin === 'function') {
            try {
              this.pyodideInstance.setStdin({
                stdin: () => window.prompt('Python input():') || ''
              });
            } catch (inErr) { }
          }

          await this.pyodideInstance.runPythonAsync(code);
          try {
            await this.pyodideInstance.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
          } catch (flushErr) { }
          logs += decoder.decode();

          if (logs) terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(logs)}</div>`;

          if (!this.outputLogs) this.outputLogs = `[Python Extension] Python 3.14 Language Server Ready.\n[Pyodide Runtime] In-browser WebAssembly worker thread initialized.\n[Workspace] Initialized virtual filesystem.`;
          this.outputLogs += `\n[Runner] Executed ${activeFile} successfully (${new Date().toLocaleTimeString()})`;
        } catch (err) {
          try {
            await this.pyodideInstance.runPythonAsync('import sys\nsys.stdout.flush()\nsys.stderr.flush()');
          } catch (flushErr) { }
          logs += decoder.decode();
          if (logs) terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(logs)}</div>`;

          const errMsg = err.message || String(err);
          terminalStdout.innerHTML += `<div style="color: #f14c4c; font-weight: 500; white-space: pre-wrap;">Traceback (most recent call last):\n${this.escapeHtml(errMsg)}</div>`;

          // Parse error line number from traceback
          const lineMatch = errMsg.match(/line\s+(\d+)/i) || errMsg.match(/<exec>",\s*line\s+(\d+)/i);
          const errLine = lineMatch ? parseInt(lineMatch[1], 10) : 1;
          this.ideProblems = [{ file: activeFile, line: errLine, col: 1, message: `RuntimeError: ${errMsg.split('\n').pop()}` }];
        }
      } else {
        // Fallback Client-side Python 3.14 Sandbox Evaluator
        try {
          const printMatches = code.matchAll(/print\(([\s\S]*?)\)/g);
          for (const match of printMatches) {
            let inner = match[1];
            let endChar = '\n';
            const endMatch = inner.match(/,\s*end\s*=\s*(["'])(.*?)\1/);
            if (endMatch) {
              endChar = endMatch[2];
              inner = inner.replace(/,\s*end\s*=\s*(["'])(.*?)\1/, '');
            }
            const textVal = inner.trim().replace(/^["']|["']$/g, '');
            terminalStdout.innerHTML += `<div style="color: #cccccc; white-space: pre-wrap;">${this.escapeHtml(textVal + endChar)}</div>`;
          }
        } catch (err) {
          terminalStdout.innerHTML += `<div style="color: #f14c4c;">Error: ${this.escapeHtml(err.message)}</div>`;
        }
      }

      if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
    },

    renderInfoHome() {
      const root = this.getRoot();
      if (!root) return;
      root.innerHTML = `
        <div class="app-container" style="padding-top: 3.5rem; padding-bottom: 5rem; max-width: var(--max-width-app); margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem;">
          <!-- Section Title -->
          <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; letter-spacing: -0.02em;">
              프로그래밍 언어 배우기
            </h2>
          </div>

          <!-- Course Card Grid (3 Cards per row on PC/Tablet, nicely scaled on Mobile) -->
          <div class="info-course-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
            <div class="info-course-card" data-action="python-learn" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; cursor: pointer; transition: transform 160ms ease, box-shadow 160ms ease; display: flex; flex-direction: column;">
              
              <!-- Dark Rich Gradient Thumbnail with Official Python Logo -->
              <div class="info-card-thumb" style="width: 100%; aspect-ratio: 16 / 10; background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%); display: flex; align-items: center; justify-content: center; position: relative; border-top-left-radius: 16px; border-top-right-radius: 16px; overflow: hidden;">
                <!-- Subtle glowing ambient spotlight -->
                <div style="position: absolute; width: 170px; height: 170px; background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(250, 204, 21, 0.1) 50%, transparent 70%); filter: blur(18px); pointer-events: none;"></div>
                
                <!-- Official Python Vector Logo (1:1 Exact IDE Geometry) -->
                <svg viewBox="0 0 24 24" width="96" height="96" style="position: relative; z-index: 1; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.45));">
                  <defs>
                    <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#38bdf8" />
                      <stop offset="100%" stop-color="#0284c7" />
                    </linearGradient>
                    <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#fde047" />
                      <stop offset="100%" stop-color="#eab308" />
                    </linearGradient>
                  </defs>
                  <!-- Blue Snake Top Half -->
                  <path fill="url(#py-blue)" d="M11.93 0C6.01 0 6.38 2.57 6.38 2.57l-.01 2.66h5.65v.8H3.95S0 5.57 0 11.51c0 5.94 3.45 5.74 3.45 5.74h2.05v-2.88s-.11-3.45 3.39-3.45h5.84s3.28 0 3.28-3.23V3.28S18.36 0 11.93 0zm-3.07 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z"/>
                  <!-- Yellow Snake Bottom Half -->
                  <path fill="url(#py-yellow)" d="M12.07 24c5.92 0 5.55-2.57 5.55-2.57l.01-2.66h-5.65v-.8h8.07S24 18.43 24 12.49c0-5.94-3.45-5.74-3.45-5.74h-2.05v2.88s.11 3.45-3.39 3.45H9.27s-3.28 0-3.28 3.23v4.39S5.64 24 12.07 24zm3.07-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z"/>
                </svg>
              </div>

              <!-- Card Body (Exact Reference Typography & Layout) -->
              <div style="padding: 1.25rem 1.1rem 1.25rem 1.1rem; display: flex; flex-direction: column; justify-content: space-between; flex: 1; min-height: 120px;">
                <div>
                  <h3 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; line-height: 1.45; letter-spacing: -0.02em; margin-bottom: 0.5rem;">
                    Python 배우기
                  </h3>
                </div>

                <div style="margin-top: auto; padding-top: 0.8rem;">
                  <span style="font-size: 0.82rem; font-weight: 700; color: #475569; letter-spacing: -0.01em;">
                    기초 코스
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      `;
    }
  };

  // 7. Main Controller & Router
  const App = {
    heroTimer: null,

    init() {
      // 0. Restore site header collapsed state from localStorage
      const savedHeaderCollapsed = localStorage.getItem('site_header_collapsed');
      const header = document.querySelector('.site-header');
      const chevronIcon = document.getElementById('icon-collapse-chevron');
      if (header && savedHeaderCollapsed === 'true') {
        header.classList.add('header-collapsed');
        if (chevronIcon) {
          chevronIcon.innerHTML = '<polyline points="6 9 12 15 18 9"/>';
        }
      } else if (chevronIcon) {
        chevronIcon.innerHTML = '<polyline points="18 15 12 9 6 15"/>';
      }

      requestAnimationFrame(() => {
        document.documentElement.classList.remove('header-initially-collapsed');
      });

      this.bindEvents();
      this.bindKeyboardShortcuts();

      window.addEventListener('hashchange', () => {
        this.routeFromHash();
      });

      // Route according to URL hash or last saved view
      this.routeFromHash();
    },

    routeFromHash() {
      const rawHash = window.location.hash.replace('#', '').trim();

      // 1. If hash is explicitly #quiz, attempt restore
      if (rawHash === 'quiz') {
        const restored = State.restoreSessionFromStorage();
        if (restored) {
          UI.renderQuiz();
          return;
        }
      }

      // 2. If no hash or hash is dashboard (Home), always display dashboard and clear stale session
      if (!rawHash || rawHash === 'dashboard') {
        State.clearSessionStorage();
        sessionStorage.setItem('alphagh_current_view', 'dashboard');
        this.switchTab('dashboard', false);
        return;
      }

      // 3. Direct route matching
      if (rawHash === 'korean-home' || rawHash === 'korean') {
        this.switchTab('korean-home', false);
      } else if (rawHash === 'info-home' || rawHash === 'info') {
        this.switchTab('info-home', false);
      } else if (rawHash === 'python-learn' || rawHash === 'python') {
        this.switchTab('python-learn', false);
      } else if (rawHash.startsWith('exam')) {
        this.switchTab('korean-home', false);
      } else if (rawHash.startsWith('catalog') || rawHash === 'problems') {
        this.switchTab('catalog', false);
      } else if (rawHash.startsWith('combiner')) {
        this.switchTab('combiner', false);
      } else if (rawHash.startsWith('corpus')) {
        this.switchTab('corpus', false);
      } else if (rawHash.startsWith('wrong') || rawHash.startsWith('review')) {
        this.switchTab('wrong', false);
      } else {
        this.switchTab('dashboard', false);
      }
    },
    startHeroAutoPlay() {
      this.stopHeroAutoPlay();
      this.heroTimer = setInterval(() => {
        if (State.view === 'dashboard') {
          const nextIndex = (State.currentHeroSlide + 1) % HERO_SLIDES.length;
          UI.transitionHeroSlide(nextIndex);
        }
      }, 3000);
    },
    stopHeroAutoPlay() {
      if (this.heroTimer) {
        clearInterval(this.heroTimer);
        this.heroTimer = null;
      }
    },
    bindEvents() {
      document.addEventListener('keydown', (e) => {
        if (document.body.classList.contains('in-ide-mode')) {
          // Ctrl + S -> Save Current Active File Buffer & Clear Dirty Indicator
          if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            const curTextarea = document.getElementById('ide-code-input');
            if (curTextarea) {
              const curFile = curTextarea.getAttribute('data-file') || UI.activeIDEFile;
              if (curFile) {
                const curFiles = UI.getIDEFiles();
                curFiles[curFile] = curTextarea.value;
                UI.saveIDEFiles(curFiles);
                if (UI.dirtyFiles) delete UI.dirtyFiles[curFile];
                const tabCloseBtn = document.querySelector(`.ide-editor-tab[data-file="${curFile}"] .btn-close-ide-tab`);
                if (tabCloseBtn) {
                  tabCloseBtn.innerHTML = '<span class="codicon codicon-close" style="font-size: 12px;"></span>';
                  tabCloseBtn.setAttribute('title', 'Close (Ctrl+W)');
                }
              }
            }
            return;
          }

          // Ctrl + ` (Backquote) -> Toggle Terminal Drawer
          if (e.ctrlKey && (e.key === '`' || e.key === '~' || e.code === 'Backquote')) {
            e.preventDefault();
            UI.isTerminalDrawerClosed = !UI.isTerminalDrawerClosed;
            if (!UI.isTerminalDrawerClosed) {
              UI.activeDrawerTab = 'terminal';
            }
            UI.renderPythonIDE();
            return;
          }
          // Ctrl + F5 or F5 -> Run Python Code
          if (e.key === 'F5') {
            e.preventDefault();
            if (UI.isTerminalDrawerClosed) {
              UI.isTerminalDrawerClosed = false;
              UI.activeDrawerTab = 'terminal';
              UI.renderPythonIDE();
            }
            UI.runPythonCode();
            return;
          }
        }
      });

      // Drag and Drop Handlers for File & Folder Movement
      document.addEventListener('dragstart', (e) => {
        if (!document.body.classList.contains('in-ide-mode')) return;
        const fileItem = e.target.closest('.ide-file-item');
        const folderItem = e.target.closest('.ide-folder-item');
        if (!fileItem && !folderItem) return;

        if (fileItem) {
          const filePath = fileItem.getAttribute('data-file');
          if (UI.isFileDirty(filePath)) {
            e.preventDefault();
            UI.showSafetyToast(`'${filePath}' 파일에 저장되지 않은 변경사항이 있어 이동할 수 없습니다. 먼저 Ctrl+S로 저장해 주세요.`);
            return;
          }
          e.dataTransfer.setData('application/json', JSON.stringify({ type: 'file', path: filePath }));
          fileItem.classList.add('is-dragging');
        } else if (folderItem) {
          const folderPath = folderItem.getAttribute('data-folder');
          if (UI.isFolderDirty(folderPath)) {
            e.preventDefault();
            UI.showSafetyToast(`'${folderPath}' 폴더 내에 저장되지 않은 파일이 있어 이동할 수 없습니다. 먼저 파일을 저장해 주세요.`);
            return;
          }
          e.dataTransfer.setData('application/json', JSON.stringify({ type: 'folder', path: folderPath }));
          folderItem.classList.add('is-dragging');
        }
      });

      document.addEventListener('dragend', () => {
        document.querySelectorAll('.is-dragging').forEach(el => el.classList.remove('is-dragging'));
        document.querySelectorAll('.drag-over-folder').forEach(el => el.classList.remove('drag-over-folder'));
      });

      document.addEventListener('dragover', (e) => {
        if (!document.body.classList.contains('in-ide-mode')) return;
        const folderRow = e.target.closest('.ide-folder-item') || e.target.closest('#ide-folder-learn');
        if (folderRow) {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
          folderRow.classList.add('drag-over-folder');
        }
      });

      document.addEventListener('dragleave', (e) => {
        const folderRow = e.target.closest('.ide-folder-item') || e.target.closest('#ide-folder-learn');
        if (folderRow && !folderRow.contains(e.relatedTarget)) {
          folderRow.classList.remove('drag-over-folder');
        }
      });

      document.addEventListener('drop', (e) => {
        if (!document.body.classList.contains('in-ide-mode')) return;
        const folderRow = e.target.closest('.ide-folder-item') || e.target.closest('#ide-folder-learn');
        if (!folderRow) return;
        e.preventDefault();
        folderRow.classList.remove('drag-over-folder');

        let payload;
        try {
          payload = JSON.parse(e.dataTransfer.getData('application/json'));
        } catch (err) { return; }

        if (!payload || !payload.path) return;
        const targetFolder = folderRow.getAttribute('data-folder') || ''; // empty string = root (Learn)

        if (payload.type === 'file') {
          const srcFile = payload.path;
          if (UI.isFileDirty(srcFile)) {
            UI.showSafetyToast(`'${srcFile}' 파일에 저장되지 않은 변경사항이 있어 이동할 수 없습니다.`);
            return;
          }
          const baseName = srcFile.split('/').pop();
          const destFile = targetFolder ? (targetFolder + '/' + baseName) : baseName;
          if (srcFile === destFile) return;

          const files = UI.getIDEFiles();
          files[destFile] = files[srcFile] || '';
          delete files[srcFile];
          UI.saveIDEFiles(files);

          const liveTextarea = document.getElementById('ide-code-input');
          if (liveTextarea && liveTextarea.getAttribute('data-file') === srcFile) {
            liveTextarea.setAttribute('data-file', destFile);
          }

          let tabs = UI.getOpenIDETabs();
          tabs = tabs.map(t => t === srcFile ? destFile : t);
          UI.openIDETabs = tabs;
          UI.saveOpenIDETabs(tabs);

          if (UI.activeIDEFile === srcFile) {
            UI.activeIDEFile = destFile;
            UI.saveActiveIDEFile(destFile);
          }
          UI.renderPythonIDE();
        } else if (payload.type === 'folder') {
          const srcFolder = payload.path;
          if (UI.isFolderDirty(srcFolder)) {
            UI.showSafetyToast(`'${srcFolder}' 폴더 내에 저장되지 않은 파일이 있어 이동할 수 없습니다.`);
            return;
          }
          if (targetFolder === srcFolder || targetFolder.startsWith(srcFolder + '/')) {
            UI.showSafetyToast('폴더를 자기 자신 또는 하위 폴더로 이동할 수 없습니다.');
            return;
          }
          const folderBase = srcFolder.split('/').pop();
          const destFolder = targetFolder ? (targetFolder + '/' + folderBase) : folderBase;
          if (srcFolder === destFolder) return;

          const files = UI.getIDEFiles();
          const newFiles = {};
          const srcPrefix = srcFolder + '/';
          const destPrefix = destFolder + '/';

          for (const [k, v] of Object.entries(files)) {
            if (k.startsWith(srcPrefix)) {
              const subPath = k.substring(srcPrefix.length);
              newFiles[destPrefix + subPath] = v;
            } else {
              newFiles[k] = v;
            }
          }
          UI.saveIDEFiles(newFiles);

          const liveTextarea = document.getElementById('ide-code-input');
          if (liveTextarea) {
            const curEditing = liveTextarea.getAttribute('data-file');
            if (curEditing && curEditing.startsWith(srcPrefix)) {
              liveTextarea.setAttribute('data-file', destPrefix + curEditing.substring(srcPrefix.length));
            }
          }

          let folders = UI.getIDEFolders();
          folders = folders.map(f => {
            if (f === srcFolder) return destFolder;
            if (f.startsWith(srcPrefix)) return destPrefix + f.substring(srcPrefix.length);
            return f;
          });
          if (targetFolder && !folders.includes(targetFolder)) folders.push(targetFolder);
          if (!folders.includes(destFolder)) folders.push(destFolder);
          UI.saveIDEFolders(folders);

          let tabs = UI.getOpenIDETabs();
          tabs = tabs.map(t => {
            if (t.startsWith(srcPrefix)) return destPrefix + t.substring(srcPrefix.length);
            return t;
          });
          UI.openIDETabs = tabs;
          UI.saveOpenIDETabs(tabs);

          if (UI.activeIDEFile && UI.activeIDEFile.startsWith(srcPrefix)) {
            UI.activeIDEFile = destPrefix + UI.activeIDEFile.substring(srcPrefix.length);
            UI.saveActiveIDEFile(UI.activeIDEFile);
          }
          UI.renderPythonIDE();
        }
      });

      document.addEventListener('mouseover', (e) => {
        if (e.target.closest('#hero-banner-section')) {
          this.stopHeroAutoPlay();
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target.closest('#hero-banner-section')) {
          this.startHeroAutoPlay();
        }
      });

      document.addEventListener('click', (e) => {
        const target = e.target;

        // Header Wrong Notes Link
        if (target.closest('#btn-header-wrong')) {
          e.preventDefault();
          this.switchTab('wrong');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Wrong Notes Start All Review Button
        if (target.closest('#btn-start-all-review')) {
          e.preventDefault();
          this.startReviewSession();
          return;
        }

        // Wrong Notes Clear History
        if (target.closest('#btn-clear-wrong-history')) {
          e.preventDefault();
          if (confirm('오답 기록과 북마크를 모두 비우시겠습니까?')) {
            Storage.clearUserData();
            this.switchTab('wrong');
          }
          return;
        }

        // Wrong Notes Empty CTA
        if (target.closest('#btn-goto-exam-from-empty')) {
          e.preventDefault();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Slide Next/Prev Button Click
        if (target.closest('#hero-next')) {
          const nextIndex = (State.currentHeroSlide + 1) % HERO_SLIDES.length;
          UI.transitionHeroSlide(nextIndex);
          this.startHeroAutoPlay();
          return;
        }
        if (target.closest('#hero-prev')) {
          const prevIndex = (State.currentHeroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
          UI.transitionHeroSlide(prevIndex);
          this.startHeroAutoPlay();
          return;
        }

        // Mobile Drawer Menu Open/Close
        if (target.closest('#btn-mobile-menu')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.add('active');
          return;
        }

        if (target.closest('#btn-mobile-close')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');
          return;
        }

        // Mobile Drawer Left Tab Switching & Direct Navigation
        const mobileNavItem = target.closest('.mobile-nav-item');
        if (mobileNavItem) {
          e.preventDefault();
          const targetSectionId = mobileNavItem.getAttribute('data-target');
          document.querySelectorAll('.mobile-nav-item').forEach(el => el.classList.remove('active'));
          document.querySelectorAll('.mobile-panel-section').forEach(el => el.classList.remove('active'));

          mobileNavItem.classList.add('active');
          const targetSection = document.getElementById(targetSectionId);
          if (targetSection) targetSection.classList.add('active');

          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');

          if (targetSectionId === 'm-cat-korean') {
            this.switchTab('exam');
          } else if (targetSectionId === 'm-cat-social') {
            this.switchTab('social');
          } else if (targetSectionId === 'm-cat-english') {
            this.switchTab('english');
          } else if (targetSectionId === 'm-cat-info') {
            this.switchTab('info');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mobile Drawer Action Links & Promo Buttons
        const mobileActionLink = target.closest('.mobile-menu-link') || target.closest('.mobile-promo-btn');
        if (mobileActionLink) {
          e.preventDefault();
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');

          const action = mobileActionLink.getAttribute('data-action');
          if (action === 'korean-home') {
            this.switchTab('exam');
          } else if (action === 'social-home') {
            this.switchTab('social');
          } else if (action === 'english-home') {
            this.switchTab('english');
          } else if (action === 'info-home') {
            this.switchTab('info');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        if (target.closest('#btn-mobile-login-action')) {
          const drawer = document.getElementById('mobile-drawer');
          if (drawer) drawer.classList.remove('active');
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Brand Logo Click (Go to Home Dashboard)
        const brandBtn = target.closest('.brand-block');
        if (brandBtn) {
          e.preventDefault();
          this.switchTab('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Nav Tab Button Click (국어 탭 누르면 국어 홈, 정보 탭 누르면 정보 홈으로 이동)
        const navBtn = target.closest('.nav-tab-btn');
        if (navBtn) {
          const tab = navBtn.getAttribute('data-tab');
          if (tab === 'exam' || tab === 'korean-home') {
            this.switchTab('korean-home');
          } else if (tab === 'info' || tab === 'info-home') {
            this.switchTab('info-home');
          } else {
            this.switchTab(tab);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mega Dropdown Title Link Click (국어 홈 / 정보 홈)
        const megaTitleLink = target.closest('.mega-col-title-link');
        if (megaTitleLink) {
          e.preventDefault();
          const action = megaTitleLink.getAttribute('data-action');
          if (action === 'info-home') {
            this.switchTab('info-home');
          } else {
            this.switchTab('korean-home');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Info Course Card Click (Python 배우기 -> IDE 화면 진입)
        const courseCard = target.closest('.info-course-card');
        if (courseCard) {
          e.preventDefault();
          this.switchTab('python-learn');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Site Header Collapse / Expand Handle Click (Chevron Tab)
        if (target.closest('#btn-header-collapse-handle')) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const chevronIcon = document.getElementById('icon-collapse-chevron');
          if (header) {
            const isCollapsed = header.classList.toggle('header-collapsed');
            localStorage.setItem('site_header_collapsed', isCollapsed ? 'true' : 'false');
            if (chevronIcon) {
              chevronIcon.innerHTML = isCollapsed
                ? '<polyline points="6 9 12 15 18 9"/>'
                : '<polyline points="18 15 12 9 6 15"/>';
            }
          }
          return;
        }

        // Python IDE Exit Button
        if (target.closest('#btn-exit-python-ide')) {
          e.preventDefault();
          const header = document.querySelector('.site-header');
          const chevronIcon = document.getElementById('icon-collapse-chevron');
          if (header) {
            header.classList.remove('header-collapsed');
            localStorage.setItem('site_header_collapsed', 'false');
            if (chevronIcon) {
              chevronIcon.innerHTML = '<polyline points="18 15 12 9 6 15"/>';
            }
          }
          this.switchTab('info-home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Python IDE Run Button -> Execute Real Python 3.14 Code
        if (target.closest('#btn-run-python')) {
          e.preventDefault();
          UI.runPythonCode();
          return;
        }

        // Terminal Delete Session Button in Dropdown
        const delSessionBtn = target.closest('.btn-delete-terminal-session');
        if (delSessionBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetSession = delSessionBtn.getAttribute('data-session');
          if (targetSession && UI.terminalSessions && UI.terminalSessions.length > 1) {
            delete UI.terminalOutputs[targetSession];
            UI.terminalSessions = UI.terminalSessions.filter(s => s !== targetSession);
            if (UI.activeTerminalId === targetSession) {
              UI.activeTerminalId = UI.terminalSessions[UI.terminalSessions.length - 1];
            }
            UI.renderPythonIDE();
          }
          return;
        }

        // Terminal Clear / Kill Active Session Button
        if (target.closest('#btn-clear-terminal')) {
          e.preventDefault();
          if (!UI.terminalSessions) UI.terminalSessions = ['1: pwsh'];
          if (UI.terminalSessions.length > 1) {
            const current = UI.activeTerminalId;
            delete UI.terminalOutputs[current];
            UI.terminalSessions = UI.terminalSessions.filter(s => s !== current);
            UI.activeTerminalId = UI.terminalSessions[UI.terminalSessions.length - 1];
            UI.renderPythonIDE();
          } else {
            const terminalStdout = document.getElementById('ide-terminal-stdout');
            if (terminalStdout) {
              terminalStdout.innerHTML = '';
              UI.terminalOutputs[UI.activeTerminalId] = '';
            }
          }
          return;
        }

        // Terminal Instance Selector Pill Click -> Toggle Dropdown Menu
        // Toggle Terminal Dropdown Menu (Pill or Chevron Trigger)
        if (target.closest('#btn-terminal-instance-select') || target.closest('#btn-terminal-dropdown-trigger')) {
          e.preventDefault();
          UI.isTerminalMenuOpen = !UI.isTerminalMenuOpen;
          UI.isTerminalMoreMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Toggle Terminal More Actions Menu
        if (target.closest('#btn-terminal-more')) {
          e.preventDefault();
          UI.isTerminalMoreMenuOpen = !UI.isTerminalMoreMenuOpen;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Terminal More Actions Menu Item Clicks
        if (target.closest('#btn-menu-clear-term')) {
          e.preventDefault();
          if (!UI.terminalOutputs) UI.terminalOutputs = {};
          UI.terminalOutputs[UI.activeTerminalId] = '';
          UI.isTerminalMoreMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }
        if (target.closest('#btn-menu-split-term')) {
          e.preventDefault();
          UI.isTerminalSplit = !UI.isTerminalSplit;
          UI.isTerminalMoreMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }
        if (target.closest('#btn-menu-kill-term') || target.closest('#btn-clear-terminal')) {
          e.preventDefault();
          if (!UI.terminalSessions) UI.terminalSessions = ['1: pwsh'];
          if (UI.terminalSessions.length > 1) {
            const curIdx = UI.terminalSessions.indexOf(UI.activeTerminalId);
            UI.terminalSessions = UI.terminalSessions.filter(s => s !== UI.activeTerminalId);
            if (UI.terminalOutputs && UI.terminalOutputs[UI.activeTerminalId]) {
              delete UI.terminalOutputs[UI.activeTerminalId];
            }
            UI.activeTerminalId = UI.terminalSessions[Math.max(0, curIdx - 1)];
          } else {
            if (!UI.terminalOutputs) UI.terminalOutputs = {};
            UI.terminalOutputs[UI.activeTerminalId] = '';
          }
          UI.isTerminalMoreMenuOpen = false;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Create New Terminal from Profile Item
        const profileItem = target.closest('.btn-create-profile-item');
        if (profileItem) {
          e.preventDefault();
          const prof = profileItem.getAttribute('data-profile') || 'PowerShell';
          if (!UI.terminalSessions) UI.terminalSessions = ['1: pwsh'];
          const maxNum = UI.terminalSessions.reduce((max, s) => {
            const num = parseInt(s.split(':')[0], 10);
            return !isNaN(num) && num > max ? num : max;
          }, 0);
          const shortProf = prof.includes('PowerShell') ? 'pwsh' : (prof.includes('Command') ? 'cmd' : 'python');
          const nextSession = `${maxNum + 1}: ${shortProf}`;
          UI.terminalSessions.push(nextSession);
          UI.activeTerminalId = nextSession;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Toggle Secondary Sidebar (Python Tutorial Assistant Panel)
        if (target.closest('#btn-ide-split-editor')) {
          e.preventDefault();
          UI.isSecondarySidebarOpen = !UI.isSecondarySidebarOpen;
          UI.renderPythonIDE();
          return;
        }

        // Close Secondary Sidebar Button
        if (target.closest('#btn-close-secondary-sidebar')) {
          e.preventDefault();
          UI.isSecondarySidebarOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Tutorial Prev Chapter Button
        if (target.closest('#btn-tutorial-prev')) {
          e.preventDefault();
          UI.setTutorialStep((UI.currentTutorialStep || 1) - 1);
          return;
        }

        // Tutorial Next Chapter Button
        if (target.closest('#btn-tutorial-next')) {
          e.preventDefault();
          UI.setTutorialStep((UI.currentTutorialStep || 1) + 1);
          return;
        }

        // Tutorial Insert Code into Editor Button
        const insertCodeBtn = target.closest('#btn-tutorial-insert-code');
        if (insertCodeBtn) {
          e.preventDefault();
          const step = parseInt(insertCodeBtn.getAttribute('data-step') || UI.currentTutorialStep || '1', 10);
          UI.insertTutorialCodeToEditor(step);
          return;
        }

        // Tutorial Copy Code Button
        const copyCodeBtn = target.closest('#btn-tutorial-copy-code');
        if (copyCodeBtn) {
          e.preventDefault();
          const curStep = UI.currentTutorialStep || 1;
          const ch = PYTHON_TUTORIAL_DATA.chapters.find(c => c.id === curStep);
          if (ch && ch.code) {
            navigator.clipboard.writeText(ch.code).then(() => {
              UI.showSafetyToast('실습 코드가 클립보드에 복사되었습니다.');
            }).catch(() => {
              UI.showSafetyToast('클립보드 복사에 실패했습니다.');
            });
          }
          return;
        }

        // Run Python Code Play Button Action
        if (target.closest('#btn-run-python')) {
          e.preventDefault();
          if (UI.isTerminalDrawerClosed) {
            UI.isTerminalDrawerClosed = false;
            UI.activeDrawerTab = 'terminal';
            UI.renderPythonIDE();
          }
          UI.runPythonCode();
          return;
        }

        // Toggle Terminal Panel Drawer Button Action
        if (target.closest('#btn-toggle-terminal-drawer')) {
          e.preventDefault();
          UI.isTerminalDrawerClosed = !UI.isTerminalDrawerClosed;
          if (!UI.isTerminalDrawerClosed) {
            UI.activeDrawerTab = 'terminal';
          }
          UI.renderPythonIDE();
          return;
        }

        // Status Bar Problems Indicator Click -> Open Problems Tab in Drawer
        if (target.closest('#btn-status-problems')) {
          e.preventDefault();
          if (UI.isTerminalDrawerClosed && UI.activeDrawerTab === 'problems') {
            UI.isTerminalDrawerClosed = false;
          } else if (!UI.isTerminalDrawerClosed && UI.activeDrawerTab === 'problems') {
            UI.isTerminalDrawerClosed = true;
          } else {
            UI.isTerminalDrawerClosed = false;
            UI.activeDrawerTab = 'problems';
          }
          UI.renderPythonIDE();
          return;
        }

        // Status Bar Terminal / Interpreter Click -> Open Terminal Tab in Drawer
        if (target.closest('#btn-status-terminal')) {
          e.preventDefault();
          if (UI.isTerminalDrawerClosed && UI.activeDrawerTab === 'terminal') {
            UI.isTerminalDrawerClosed = false;
          } else if (!UI.isTerminalDrawerClosed && UI.activeDrawerTab === 'terminal') {
            UI.isTerminalDrawerClosed = true;
          } else {
            UI.isTerminalDrawerClosed = false;
            UI.activeDrawerTab = 'terminal';
          }
          UI.renderPythonIDE();
          return;
        }

        // Terminal Panel Close Action
        if (target.closest('#btn-close-terminal-panel')) {
          e.preventDefault();
          UI.isTerminalDrawerClosed = true;
          UI.renderPythonIDE();
          return;
        }

        // Terminal Dropdown Menu Item Click
        const menuItem = target.closest('.terminal-menu-item');
        const deleteSessionBtn = target.closest('.btn-delete-terminal-session');
        if (deleteSessionBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delSession = deleteSessionBtn.getAttribute('data-session');
          if (delSession && UI.terminalSessions.length > 1) {
            UI.terminalSessions = UI.terminalSessions.filter(s => s !== delSession);
            if (UI.activeTerminalId === delSession) {
              UI.activeTerminalId = UI.terminalSessions[0];
            }
            UI.renderPythonIDE();
          }
          return;
        } else if (menuItem) {
          e.preventDefault();
          const session = menuItem.getAttribute('data-session');
          if (session) {
            UI.activeTerminalId = session;
            UI.isTerminalMenuOpen = false;
            UI.renderPythonIDE();
          }
          return;
        }

        // Add Terminal (+) Action -> dynamically adds next session
        if (target.closest('#btn-add-terminal')) {
          e.preventDefault();
          if (!UI.terminalSessions) UI.terminalSessions = ['1: pwsh'];
          const maxNum = UI.terminalSessions.reduce((max, s) => {
            const num = parseInt(s.split(':')[0], 10);
            return !isNaN(num) && num > max ? num : max;
          }, 0);
          const nextSession = `${maxNum + 1}: pwsh`;
          UI.terminalSessions.push(nextSession);
          UI.activeTerminalId = nextSession;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Split Terminal Action
        if (target.closest('#btn-split-terminal')) {
          e.preventDefault();
          UI.isTerminalSplit = !UI.isTerminalSplit;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Terminal Size Toggle Action (Maximize vs Default)
        if (target.closest('#btn-toggle-terminal-size')) {
          e.preventDefault();
          UI.isTerminalDrawerClosed = false;
          UI.isTerminalMaximized = !UI.isTerminalMaximized;
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
          return;
        }

        // Bottom Drawer Tab Switch (Problems, Output, Terminal)
        const drawerTab = target.closest('.ide-term-tab');
        if (drawerTab) {
          e.preventDefault();
          const tabKey = drawerTab.getAttribute('data-tab');
          if (tabKey) {
            UI.isTerminalDrawerClosed = false;
            UI.activeDrawerTab = tabKey;
            UI.renderPythonIDE();
          }
          return;
        }

        // Problem List Item Click -> Jump to line and focus editor
        const problemItem = target.closest('.btn-problem-item');
        if (problemItem) {
          e.preventDefault();
          const pFile = problemItem.getAttribute('data-file');
          const pLine = parseInt(problemItem.getAttribute('data-line'), 10) || 1;
          const pCol = parseInt(problemItem.getAttribute('data-col'), 10) || 1;
          UI.navigateToProblem(pFile, pLine, pCol);
          return;
        }

        // Learn Folder Collapse / Expand Toggle
        if (target.closest('#ide-folder-learn') && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          UI.isLearnFolderCollapsed = !UI.isLearnFolderCollapsed;
          UI.selectedExplorerFolder = '';
          UI.renderPythonIDE();
          return;
        }

        // Inline File Delete Action [X]
        const delFileBtn = target.closest('.btn-file-delete');
        if (delFileBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delFile = delFileBtn.getAttribute('data-file');
          if (delFile) {
            const liveTextarea = document.getElementById('ide-code-input');
            if (liveTextarea && liveTextarea.getAttribute('data-file') === delFile) {
              liveTextarea.removeAttribute('data-file');
            }

            const files = UI.getIDEFiles();
            delete files[delFile];
            UI.saveIDEFiles(files);

            let tabs = UI.getOpenIDETabs().filter(t => t !== delFile);
            UI.openIDETabs = tabs;
            UI.saveOpenIDETabs(tabs);

            if (UI.activeIDEFile === delFile) {
              UI.activeIDEFile = tabs.length ? tabs[tabs.length - 1] : Object.keys(files)[0] || null;
              UI.saveActiveIDEFile(UI.activeIDEFile);
            }
            if (UI.dirtyFiles) delete UI.dirtyFiles[delFile];
            UI.renderPythonIDE();
          }
          return;
        }

        // Inline Folder Delete Action [X]
        const delFolderBtn = target.closest('.btn-folder-delete');
        if (delFolderBtn) {
          e.preventDefault();
          e.stopPropagation();
          const delFolder = delFolderBtn.getAttribute('data-folder');
          if (delFolder) {
            const files = UI.getIDEFiles();
            const prefix = delFolder + '/';
            const matchCount = Object.keys(files).filter(k => k.startsWith(prefix)).length;
            if (matchCount > 0) {
              if (!confirm(`폴더 '${delFolder}' 및 내부 ${matchCount}개 파일을 모두 삭제하시겠습니까?`)) {
                return;
              }
            }

            const liveTextarea = document.getElementById('ide-code-input');
            if (liveTextarea) {
              const curEditing = liveTextarea.getAttribute('data-file');
              if (curEditing && curEditing.startsWith(prefix)) {
                liveTextarea.removeAttribute('data-file');
              }
            }

            const newFiles = {};
            for (const [k, v] of Object.entries(files)) {
              if (!k.startsWith(prefix)) newFiles[k] = v;
            }
            UI.saveIDEFiles(newFiles);

            let folders = UI.getIDEFolders().filter(f => f !== delFolder && !f.startsWith(prefix));
            UI.saveIDEFolders(folders);

            let tabs = UI.getOpenIDETabs().filter(t => !t.startsWith(prefix));
            UI.openIDETabs = tabs;
            UI.saveOpenIDETabs(tabs);

            if (UI.activeIDEFile && UI.activeIDEFile.startsWith(prefix)) {
              UI.activeIDEFile = tabs.length ? tabs[tabs.length - 1] : Object.keys(newFiles)[0] || null;
              UI.saveActiveIDEFile(UI.activeIDEFile);
            }
            if (UI.selectedExplorerFolder === delFolder) UI.selectedExplorerFolder = null;
            UI.renderPythonIDE();
          }
          return;
        }

        // Inline Folder New File Action
        const folderNewFileBtn = target.closest('.btn-folder-new-file');
        if (folderNewFileBtn) {
          e.preventDefault();
          e.stopPropagation();
          const targetFolder = folderNewFileBtn.getAttribute('data-folder') || '';
          const prefix = targetFolder ? `${targetFolder}/` : '';
          const fileName = prompt(`새 파일 이름을 입력하세요 (${prefix || 'Learn/'}filename.py):`, 'helper.py');
          if (fileName && fileName.trim()) {
            let cleanName = fileName.trim();
            if (!cleanName.includes('.')) cleanName += '.py';
            const fullPath = targetFolder ? `${targetFolder}/${cleanName}` : cleanName;
            const files = UI.getIDEFiles();
            if (!files[fullPath]) {
              files[fullPath] = '';
              UI.saveIDEFiles(files);
            }
            if (targetFolder) {
              const folders = UI.getIDEFolders();
              if (!folders.includes(targetFolder)) {
                folders.push(targetFolder);
                UI.saveIDEFolders(folders);
              }
              if (UI.collapsedFolders) UI.collapsedFolders[targetFolder] = false;
            }
            UI.activeIDEFile = fullPath;
            const tabs = UI.getOpenIDETabs();
            if (!tabs.includes(fullPath)) tabs.push(fullPath);
            UI.openIDETabs = tabs;
            UI.saveOpenIDETabs(tabs);
            UI.saveActiveIDEFile(fullPath);
            UI.selectedExplorerFolder = targetFolder;
            UI.renderPythonIDE();
          }
          return;
        }

        // Inline Folder New Subfolder Action
        const folderNewSubBtn = target.closest('.btn-folder-new-subfolder');
        if (folderNewSubBtn) {
          e.preventDefault();
          e.stopPropagation();
          const parentFolder = folderNewSubBtn.getAttribute('data-folder') || '';
          const prefix = parentFolder ? `${parentFolder}/` : '';
          const subName = prompt(`새 폴더 이름을 입력하세요 (${prefix || 'Learn/'}folderName):`, 'components');
          if (subName && subName.trim()) {
            const cleanSub = subName.trim().replace(/[\\\/]/g, '');
            if (cleanSub) {
              const fullFolder = parentFolder ? `${parentFolder}/${cleanSub}` : cleanSub;
              const folders = UI.getIDEFolders();
              if (!folders.includes(fullFolder)) {
                folders.push(fullFolder);
                UI.saveIDEFolders(folders);
              }
              if (parentFolder && UI.collapsedFolders) UI.collapsedFolders[parentFolder] = false;
              UI.selectedExplorerFolder = fullFolder;
              UI.renderPythonIDE();
            }
          }
          return;
        }

        // IDE Explorer File Click -> Open File in Tab & Editor
        const fileItem = target.closest('.ide-file-item');
        if (fileItem && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          const fileName = fileItem.getAttribute('data-file');
          if (fileName) {
            // Flush current buffer before switching
            const curTextarea = document.getElementById('ide-code-input');
            if (curTextarea) {
              const prevFile = curTextarea.getAttribute('data-file') || UI.activeIDEFile;
              if (prevFile) {
                const curFiles = UI.getIDEFiles();
                curFiles[prevFile] = curTextarea.value;
                UI.saveIDEFiles(curFiles);
                if (UI.dirtyFiles) delete UI.dirtyFiles[prevFile];
              }
            }
            UI.activeIDEFile = fileName;
            const openTabs = UI.openIDETabs || UI.getOpenIDETabs();
            if (!openTabs.includes(fileName)) openTabs.push(fileName);
            UI.openIDETabs = openTabs;
            UI.saveOpenIDETabs(openTabs);
            UI.saveActiveIDEFile(fileName);
            UI.renderPythonIDE();
          }
          return;
        }

        // Dismiss Terminal Dropdown Menu on outside click
        if (UI.isTerminalMenuOpen && !target.closest('#btn-terminal-instance-select') && !target.closest('#ide-terminal-dropdown-menu')) {
          UI.isTerminalMenuOpen = false;
          UI.renderPythonIDE();
        }

        // IDE Editor Tab Click -> Switch Active File
        const editorTab = target.closest('.ide-editor-tab');
        const closeTabBtn = target.closest('.btn-close-ide-tab');
        if (closeTabBtn) {
          e.preventDefault();
          e.stopPropagation();
          const closeFile = closeTabBtn.getAttribute('data-file');
          if (closeFile) {
            let openTabs = UI.openIDETabs || UI.getOpenIDETabs();
            openTabs = openTabs.filter(f => f !== closeFile);
            UI.openIDETabs = openTabs;
            UI.saveOpenIDETabs(openTabs);
            if (UI.activeIDEFile === closeFile) {
              UI.activeIDEFile = openTabs.length > 0 ? openTabs[openTabs.length - 1] : null;
              UI.saveActiveIDEFile(UI.activeIDEFile);
            }
            UI.renderPythonIDE();
          }
          return;
        } else if (editorTab) {
          e.preventDefault();
          const tabFile = editorTab.getAttribute('data-file');
          if (tabFile) {
            // Flush current buffer before switching
            const curTextarea = document.getElementById('ide-code-input');
            if (curTextarea) {
              const prevFile = curTextarea.getAttribute('data-file') || UI.activeIDEFile;
              if (prevFile) {
                const curFiles = UI.getIDEFiles();
                curFiles[prevFile] = curTextarea.value;
                UI.saveIDEFiles(curFiles);
                if (UI.dirtyFiles) delete UI.dirtyFiles[prevFile];
              }
            }
            UI.activeIDEFile = tabFile;
            UI.saveActiveIDEFile(tabFile);
            UI.renderPythonIDE();
          }
          return;
        }

        // Subfolder Click -> Select Target Folder and Toggle Collapse
        const folderItem = target.closest('.ide-folder-item');
        if (folderItem && !target.closest('.ide-tree-actions')) {
          e.preventDefault();
          const fName = folderItem.getAttribute('data-folder');
          if (fName) {
            UI.selectedExplorerFolder = fName;
            if (!UI.collapsedFolders) UI.collapsedFolders = {};
            UI.collapsedFolders[fName] = !UI.collapsedFolders[fName];
            UI.renderPythonIDE();
          }
          return;
        }

        // IDE Explorer Header New File Action
        if (target.closest('#btn-ide-new-file')) {
          e.preventDefault();
          const curTargetFolder = UI.selectedExplorerFolder || '';
          const prefix = curTargetFolder ? `${curTargetFolder}/` : '';
          const fileName = prompt(`새 파일 이름을 입력하세요 (${prefix || 'Learn/'}filename.py):`, 'utils.py');
          if (fileName && fileName.trim()) {
            let cleanName = fileName.trim();
            if (!cleanName.includes('.')) cleanName += '.py';
            const fullPath = curTargetFolder ? `${curTargetFolder}/${cleanName}` : cleanName;
            const files = UI.getIDEFiles();
            if (!files[fullPath]) {
              files[fullPath] = '';
              UI.saveIDEFiles(files);
            }
            if (curTargetFolder) {
              const folders = UI.getIDEFolders();
              if (!folders.includes(curTargetFolder)) {
                folders.push(curTargetFolder);
                UI.saveIDEFolders(folders);
              }
              if (UI.collapsedFolders) UI.collapsedFolders[curTargetFolder] = false;
            }
            UI.activeIDEFile = fullPath;
            const openTabs = UI.openIDETabs || UI.getOpenIDETabs();
            if (!openTabs.includes(fullPath)) openTabs.push(fullPath);
            UI.openIDETabs = openTabs;
            UI.saveOpenIDETabs(openTabs);
            UI.saveActiveIDEFile(fullPath);
            UI.renderPythonIDE();
          }
          return;
        }

        // IDE Explorer Header New Folder Action
        if (target.closest('#btn-ide-new-folder')) {
          e.preventDefault();
          const curTargetFolder = UI.selectedExplorerFolder || '';
          const prefix = curTargetFolder ? `${curTargetFolder}/` : '';
          const folderName = prompt(`새 폴더 이름을 입력하세요 (${prefix || 'Learn/'}folderName):`, 'src');
          if (folderName && folderName.trim()) {
            const cleanFolder = folderName.trim().replace(/[\\\/]/g, '');
            if (cleanFolder) {
              const fullFolder = curTargetFolder ? `${curTargetFolder}/${cleanFolder}` : cleanFolder;
              const folders = UI.getIDEFolders();
              if (!folders.includes(fullFolder)) {
                folders.push(fullFolder);
                UI.saveIDEFolders(folders);
              }
              if (curTargetFolder && UI.collapsedFolders) UI.collapsedFolders[curTargetFolder] = false;
              UI.selectedExplorerFolder = fullFolder;
              UI.renderPythonIDE();
            }
          }
          return;
        }

        // IDE Explorer Refresh Action
        if (target.closest('#btn-ide-refresh')) {
          e.preventDefault();
          UI.renderPythonIDE();
          return;
        }

        // IDE Explorer Collapse All Folders Action
        if (target.closest('#btn-ide-collapse-all')) {
          e.preventDefault();
          UI.isLearnFolderCollapsed = true;
          const folders = UI.getIDEFolders();
          if (!UI.collapsedFolders) UI.collapsedFolders = {};
          folders.forEach(f => {
            if (f) UI.collapsedFolders[f] = true;
          });
          UI.renderPythonIDE();
          return;
        }

        // Footer Nav Link
        const footerBtn = target.closest('.nav-tab-btn-footer');
        if (footerBtn) {
          e.preventDefault();
          const tab = footerBtn.getAttribute('data-tab');
          this.switchTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Mega Dropdown Link Click
        const megaLink = target.closest('.mega-link');
        if (megaLink) {
          e.preventDefault();
          document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
          megaLink.classList.add('active');

          const action = megaLink.getAttribute('data-action');
          if (action === 'all-problems') {
            this.switchTab('catalog');
          } else if (action === 'basic-problems' || action === 'exam-20') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else if (action === 'intro-problems') {
            const easyQuestions = DataManager.getAllQuestions().filter(q => q.difficulty === '초급' || q.difficulty === '중급');
            State.startSession('category', easyQuestions.slice(0, 20), '입문 문제');
            UI.renderQuiz();
          } else if (action === 'haerye') {
            const catQuestions = DataManager.getByCategory('훈민정음 해례본');
            State.startSession('category', catQuestions, '훈민정음 해례본');
            UI.renderQuiz();
          } else if (action === 'dongguk') {
            const catQuestions = DataManager.getByCategory('동국정운');
            State.startSession('category', catQuestions, '동국정운');
            UI.renderQuiz();
          } else if (action === 'sosill') {
            const catQuestions = DataManager.getByCategory('소실 문자');
            State.startSession('category', catQuestions, '소실 문자');
            UI.renderQuiz();
          } else if (action === 'grammar') {
            const catQuestions = DataManager.getByCategory('중세국어 문법');
            State.startSession('category', catQuestions, '중세국어 문법');
            UI.renderQuiz();
          } else if (action === 'cert' || action === 'infinite') {
            const allShuffled = DataManager.getRandomSample(500);
            State.startSession('infinite', allShuffled);
            UI.renderQuiz();
          } else if (action === 'review' || action === 'weakness') {
            this.startReviewSession();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        if (target.closest('#btn-mega-goto-stats')) {
          e.preventDefault();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Header Wrong Answers -> Show Wrong Problem List Page
        if (target.closest('#btn-header-wrong')) {
          this.switchTab('wrong');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Start / Quick Start
        if (target.closest('#btn-hero-start') || target.closest('#btn-quick-start') || target.closest('#btn-promo-start')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Hero Catalog / All Curriculum
        if (target.closest('#btn-hero-catalog') || target.closest('#link-all-curriculum')) {
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Quick Icon Items
        const quickItem = target.closest('.quick-icon-item');
        if (quickItem) {
          const action = quickItem.getAttribute('data-action');
          if (action === 'exam') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else if (action === 'catalog') {
            this.switchTab('catalog');
          } else if (action === 'combiner') {
            this.switchTab('combiner');
          } else if (action === 'corpus') {
            this.switchTab('corpus');
          } else if (action === 'review' || action === 'wrong') {
            this.switchTab('wrong');
          } else if (action === 'cert') {
            const allShuffled = DataManager.getRandomSample(500);
            State.startSession('infinite', allShuffled);
            UI.renderQuiz();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Curriculum Card Click
        const currCard = target.closest('.curr-card');
        if (currCard) {
          const cat = currCard.getAttribute('data-cat');
          if (cat === 'all') {
            const sample = DataManager.getRandomSample(20);
            State.startSession('exam', sample);
            UI.renderQuiz();
          } else {
            const catQuestions = DataManager.getByCategory(cat);
            State.startSession('category', catQuestions, cat);
            UI.renderQuiz();
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Cert Promo Action
        if (target.closest('#btn-cert-action')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Combiner Jamo Tile Click
        const jamoTile = target.closest('.jamo-tile-btn');
        if (jamoTile) {
          const type = jamoTile.getAttribute('data-type');
          const val = jamoTile.getAttribute('data-val');
          if (type === 'cho') State.combiner.cho = val;
          if (type === 'jung') State.combiner.jung = val;
          if (type === 'jong') State.combiner.jong = val;
          UI.renderCombiner();
          return;
        }

        // Combiner Copy Button
        const copyBtn = target.closest('#btn-copy-glyph');
        if (copyBtn) {
          const char = copyBtn.getAttribute('data-char');
          if (navigator.clipboard) {
            navigator.clipboard.writeText(char).then(() => {
              copyBtn.textContent = '복사 완료!';
              setTimeout(() => (copyBtn.textContent = '조합된 글자 복사'), 1500);
            });
          }
          return;
        }

        // Combiner Search in Catalog
        const searchBtn = target.closest('#btn-search-glyph');
        if (searchBtn) {
          const char = searchBtn.getAttribute('data-char');
          this.switchTab('catalog');
          const input = document.getElementById('catalog-search-input');
          if (input) {
            input.value = char;
            UI.renderCatalog('all', char);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Quiz Option Selection
        const optionBtn = target.closest('.quiz-option-row, .quiz-option-tile, .option-item');
        if (optionBtn && !State.isAnswered) {
          const index = parseInt(optionBtn.getAttribute('data-index'), 10);
          State.answerCurrentQuestion(index);
          UI.renderQuiz();
          return;
        }

        // Next Question
        if (target.closest('#btn-next-question')) {
          State.nextQuestion();
          UI.renderQuiz();
          return;
        }

        // Finish Quiz -> View Diagnostic Result Report
        if (target.closest('#btn-finish-quiz')) {
          const record = State.finishSession();
          UI.renderResult(record);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Breadcrumbs Click Navigation
        const crumbLink = target.closest('.crumb-link');
        if (crumbLink) {
          e.preventDefault();
          const crumbType = crumbLink.getAttribute('data-crumb');
          State.stopTimer();
          State.clearSessionStorage();
          if (crumbType === 'dashboard') {
            this.switchTab('dashboard');
          } else if (crumbType === 'category') {
            const cat = crumbLink.getAttribute('data-cat') || 'all';
            this.switchTab('catalog');
            UI.renderCatalog(cat, '');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Back to Catalog / Dashboard
        if (target.closest('#btn-back-to-catalog') || target.closest('#btn-quit-quiz')) {
          State.stopTimer();
          State.clearSessionStorage();
          this.switchTab('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Retry Exam
        if (target.closest('#btn-retry-exam')) {
          const sample = DataManager.getRandomSample(20);
          State.startSession('exam', sample);
          UI.renderQuiz();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Go Home
        if (target.closest('#btn-go-home')) {
          State.stopTimer();
          State.clearSessionStorage();
          this.switchTab('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        // Toggle Bookmark
        if (target.closest('#btn-toggle-bookmark')) {
          const q = State.getCurrentQuestion();
          if (q) {
            Storage.toggleBookmark(q.id);
            UI.renderQuiz();
          }
          return;
        }

        // Single Question Solve from Catalog (Row or Title Click)
        const solveBtn = target.closest('.btn-solve-single') || target.closest('.pg-table-row');
        if (solveBtn && !target.closest('.cat-btn') && !target.closest('.pg-filter-select')) {
          e.preventDefault();
          const qIdAttr = solveBtn.getAttribute('data-id');
          if (qIdAttr) {
            const qId = parseInt(qIdAttr, 10);
            const q = DataManager.getQuestionById(qId);
            if (q) {
              State.startSession('single', [q]);
              UI.renderQuiz();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
          return;
        }

        // Category filter in Catalog
        const catBtn = target.closest('.cat-btn');
        if (catBtn) {
          const cat = catBtn.getAttribute('data-cat');
          const input = document.getElementById('catalog-search-input');
          const query = input ? input.value : '';
          UI.renderCatalog(cat, query);
          return;
        }

        // Virtual Keyboard Click in Catalog
        const vkKey = target.closest('.vk-key');
        if (vkKey) {
          const char = vkKey.getAttribute('data-char');
          const input = document.getElementById('catalog-search-input');
          if (input) {
            input.value += char;
            input.focus();
            const activeCatBtn = document.querySelector('.cat-btn.active');
            const currentCat = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
            UI.renderCatalog(currentCat, input.value);
          }
          return;
        }
      });

      const triggerCatalogFilter = (maintainFocus = false) => {
        const searchInput = document.getElementById('catalog-search-input');
        const catSelect = document.getElementById('filter-category-select');
        const diffSelect = document.getElementById('filter-difficulty');
        const typeSelect = document.getElementById('filter-type');

        const query = searchInput ? searchInput.value : '';
        const cat = catSelect ? catSelect.value : 'all';
        const diff = diffSelect ? diffSelect.value : 'all';
        const examType = typeSelect ? typeSelect.value : 'all';

        const cursorPos = searchInput ? searchInput.selectionStart : 0;
        UI.renderCatalog(cat, query, diff, examType);

        if (maintainFocus) {
          const nextInput = document.getElementById('catalog-search-input');
          if (nextInput) {
            nextInput.focus();
            nextInput.setSelectionRange(cursorPos, cursorPos);
          }
        }
      };

      document.addEventListener('input', (e) => {
        if (e.target.id === 'catalog-search-input') {
          triggerCatalogFilter(true);
        }
      });

      document.addEventListener('change', (e) => {
        if (e.target.id === 'select-tutorial-chapter') {
          const step = parseInt(e.target.value, 10);
          if (!isNaN(step)) {
            UI.setTutorialStep(step);
          }
          return;
        }
        if (
          e.target.id === 'filter-category-select' ||
          e.target.id === 'filter-difficulty' ||
          e.target.id === 'filter-type'
        ) {
          triggerCatalogFilter(false);
        }
      });
    },
    switchTab(tab, updateHistory = true) {
      const header = document.querySelector('.site-header');
      const footer = document.querySelector('.site-footer');
      if (tab === 'python-learn') {
        document.body.classList.add('in-ide-mode');
        document.documentElement.classList.add('in-ide-mode');
        if (header) header.classList.add('ide-mode-active');
        if (footer) footer.style.display = 'none';
      } else {
        document.body.classList.remove('in-ide-mode');
        document.documentElement.classList.remove('in-ide-mode');
        if (header) {
          header.classList.remove('ide-mode-active');
          header.classList.remove('header-collapsed');
        }
        if (footer) footer.style.display = '';
      }

      document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
        const btnTab = btn.getAttribute('data-tab');
        const isActive = btnTab === tab ||
          (tab === 'korean-home' && btnTab === 'exam') ||
          (tab === 'info-home' && btnTab === 'info');
        btn.classList.toggle('active', isActive);
      });

      State.stopTimer();
      sessionStorage.setItem('alphagh_current_view', tab);

      if (updateHistory) {
        if (tab === 'dashboard') {
          if (window.location.hash) history.pushState(null, '', window.location.pathname + window.location.search);
        } else {
          window.location.hash = '#' + tab;
        }
      }

      if (tab === 'dashboard') {
        document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
        State.view = 'dashboard';
        State.clearSessionStorage();
        sessionStorage.setItem('alphagh_current_view', 'dashboard');
        UI.renderDashboard();
        this.startHeroAutoPlay();
      } else {
        this.stopHeroAutoPlay();
        if (tab === 'exam' || tab === 'korean-home') {
          State.view = 'korean-home';
          UI.renderBlankPage();
        } else if (tab === 'info' || tab === 'info-home') {
          State.view = 'info-home';
          UI.renderInfoHome();
        } else if (tab === 'python-learn') {
          State.view = 'python-learn';
          UI.renderPythonIDE();
        } else if (tab === 'social' || tab === 'english') {
          State.view = tab;
          UI.renderBlankPage();
        } else if (tab === 'catalog') {
          document.querySelectorAll('.mega-link').forEach(el => el.classList.remove('active'));
          const allProbLink = document.querySelector('.mega-link[data-action="all-problems"]');
          if (allProbLink) allProbLink.classList.add('active');
          State.view = 'catalog';
          UI.renderCatalog('all', '');
        } else if (tab === 'combiner') {
          State.view = 'combiner';
          UI.renderCombiner();
        } else if (tab === 'corpus') {
          State.view = 'corpus';
          UI.renderCorpus();
        } else if (tab === 'wrong') {
          State.view = 'wrong';
          UI.renderWrongNotes();
        }
      }
    },
    startReviewSession() {
      const wrongIds = Storage.getWrongAnswers();
      const bookmarkIds = Storage.getBookmarks();
      const combinedIds = Array.from(new Set([...wrongIds, ...bookmarkIds]));

      if (combinedIds.length === 0) {
        alert('현재 저장된 오답 또는 북마크 문항이 없습니다. 먼저 문제를 풀어보세요.');
        return;
      }

      const reviewQuestions = combinedIds
        .map((id) => DataManager.getQuestionById(id))
        .filter(Boolean);

      State.startSession('review', reviewQuestions);
      UI.renderQuiz();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (State.view === 'quiz') {
          if (['Enter', ' '].includes(e.key) && State.isAnswered) {
            e.preventDefault();
            const currentNum = State.currentIndex + 1;
            const total = State.sessionQuestions.length;
            if (currentNum < total) {
              State.nextQuestion();
              UI.renderQuiz();
            } else {
              const record = State.finishSession();
              UI.renderResult(record);
            }
            return;
          }

          if (e.key.toLowerCase() === 'b') {
            const q = State.getCurrentQuestion();
            if (q) {
              Storage.toggleBookmark(q.id);
              UI.renderQuiz();
            }
            return;
          }

          if (e.key === 'Escape') {
            State.stopTimer();
            State.view = 'dashboard';
            this.switchTab('dashboard');
            return;
          }
        }
      });
    }
  };

  // 8. Auto-Launch Guarantee
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
  } else {
    App.init();
  }

})();
