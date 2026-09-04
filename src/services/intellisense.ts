// Python IntelliSense Code Completion Engine

export interface SymbolItem {
  name: string;
  type: 'function' | 'class' | 'keyword' | 'constant' | 'method' | 'variable';
  icon: string;
  sig?: string;
  desc?: string;
}

export interface CaretCoordinates {
  top: number;
  left: number;
  lineHeight: number;
}

const BUILTIN_INTELLISENSE_DB: SymbolItem[] = [
  // Builtin functions
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

  // Builtin Types / Classes
  { name: 'str', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class str(object="")', desc: '글자나 문장(문자열)을 만듭니다.' },
  { name: 'int', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class int(x=0)', desc: '소수점이 없는 정수(0, 1, -5 등)를 만듭니다.' },
  { name: 'float', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class float(x=0)', desc: '소수점이 있는 실수(3.14, 0.5 등)를 만듭니다.' },
  { name: 'list', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class list([items])', desc: '여러 값을 순서대로 담아두는 목록(리스트)을 만듭니다.' },
  { name: 'dict', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class dict(**kwargs)', desc: '이름(키)과 내용(값)을 한 쌍으로 묶어 저장하는 사전을 만듭니다.' },
  { name: 'set', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class set([items])', desc: '중복 없이 값을 모아두는 집합을 만듭니다.' },
  { name: 'tuple', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class tuple([items])', desc: '한 번 만들면 내용을 바꿀 수 없는 읽기 전용 목록을 만듭니다.' },
  { name: 'bool', type: 'class', icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>', sig: 'class bool(x=False)', desc: '참(True) 또는 거짓(False) 논리 값을 만듭니다.' },

  // Keywords
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

  // Methods
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

export function getIntelliSenseDatabase(): SymbolItem[] {
  return BUILTIN_INTELLISENSE_DB;
}

let cachedUserSymbolsText = '';
let cachedUserSymbols: SymbolItem[] = [];

export function extractUserSymbols(text: string): SymbolItem[] {
  if (!text) return [];
  if (text === cachedUserSymbolsText) {
    return cachedUserSymbols;
  }

  const symbols: SymbolItem[] = [];
  const seen = new Set<string>();

  const funcRegex = /def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = funcRegex.exec(text)) !== null) {
    const symName = match[1];
    const params = match[2];
    if (symName && !seen.has(symName)) {
      seen.add(symName);
      symbols.push({
        name: symName,
        type: 'function',
        icon: '<span class="codicon codicon-symbol-function" style="color: #dcdcaa;"></span>',
        sig: `def ${symName}(${(params || '').trim()})`,
        desc: '사용자 정의 함수'
      });
    }
  }

  const classRegex = /class\s+([a-zA-Z_]\w*)(?:\(([^)]*)\))?/g;
  while ((match = classRegex.exec(text)) !== null) {
    const symName = match[1];
    const bases = match[2];
    if (symName && !seen.has(symName)) {
      seen.add(symName);
      symbols.push({
        name: symName,
        type: 'class',
        icon: '<span class="codicon codicon-symbol-class" style="color: #4ec9b0;"></span>',
        sig: `class ${symName}${bases ? `(${bases})` : ''}`,
        desc: '사용자 정의 클래스'
      });
    }
  }

  const varRegex = /(?:^|\n)\s*([a-zA-Z_]\w*)\s*=/g;
  while ((match = varRegex.exec(text)) !== null) {
    const symName = match[1];
    if (
      symName &&
      !seen.has(symName) &&
      !['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'with', 'return'].includes(symName)
    ) {
      seen.add(symName);
      symbols.push({
        name: symName,
        type: 'variable',
        icon: '<span class="codicon codicon-symbol-variable" style="color: #9cdcfe;"></span>',
        sig: symName,
        desc: '사용자 정의 변수'
      });
    }
  }

  cachedUserSymbolsText = text;
  cachedUserSymbols = symbols;
  return symbols;
}

let caretMirrorDiv: HTMLDivElement | null = null;
let caretMirrorSpan: HTMLSpanElement | null = null;

export function getCaretCoordinates(textarea: HTMLTextAreaElement, position: number): CaretCoordinates {
  const text = textarea.value || '';
  const safePos = Math.max(0, Math.min(position, text.length));
  const textBefore = text.substring(0, safePos);

  const lastNewline = textBefore.lastIndexOf('\n');
  const lineIndex = (textBefore.match(/\n/g) || []).length;
  const currentLineText = lastNewline === -1 ? textBefore : textBefore.substring(lastNewline + 1);

  if (!caretMirrorDiv) {
    const div = document.createElement('div');
    div.id = 'ide-caret-mirror';
    div.style.cssText =
      'position: absolute; top: -9999px; left: -9999px; visibility: hidden; white-space: pre; font-family: "JetBrains Mono", "Fira Code", Consolas, monospace; font-size: 13px; line-height: 20px; tab-size: 4; box-sizing: border-box; padding: 0 10px; margin: 0;';
    
    const span = document.createElement('span');
    div.appendChild(span);
    document.body.appendChild(div);

    caretMirrorDiv = div;
    caretMirrorSpan = span;
  }

  if (caretMirrorSpan) {
    caretMirrorSpan.textContent = currentLineText;
  }

  const leftOffset = caretMirrorSpan ? caretMirrorSpan.offsetWidth + 10 : currentLineText.length * 7.8 + 10;
  const topOffset = lineIndex * 20 + 12;

  return {
    top: topOffset,
    left: leftOffset,
    lineHeight: 20
  };
}
