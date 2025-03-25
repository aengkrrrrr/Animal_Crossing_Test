const start_btn = document.querySelector('.start_btn');
const intro = document.querySelector('.intro');
const qna = document.querySelector('.qna');
const result = document.querySelector('.result');
const qPoint = qnaList.length; // 질문 개수
const answerList = []; // 사용자의 선택 기록

// 결과 계산 함수
function calResult() {
  // resultConditions에서 answers와 answerList를 비교하여 일치하는 결과 인덱스를 찾음
  const resultIndex = resultConditions.find(condition => {
    // answerList의 선택과 resultConditions의 answers 배열이 일치하는지 확인
    return condition.answers.every((answer, idx) => answer === answerList[idx]);
  });

  // 결과가 존재하면 그에 해당하는 result 값 반환
  if (resultIndex) {
    return resultIndex.result;
  } else {
    console.error('결과를 찾을 수 없습니다.');
    return 0; // 기본값을 0으로 설정 (예시)
  }
}

// 결과 설정 함수
function setResult() {
  let point = calResult();
  console.log("결과 인덱스: ", point);

  const resultName = document.querySelector('.resultName');
  const resultDesc = document.querySelector('.resultDesc');

  if (resultList[point]) {
    resultName.innerHTML = resultList[point].name;
    resultDesc.innerHTML = resultList[point].desc;
  } else {
    console.error("잘못된 결과 인덱스: ", point);
  }

  // 결과 이미지 설정
  const imgDiv = document.querySelector('.resultImg');
  imgDiv.innerHTML = ''; // 기존 이미지 제거
  let resultImg = document.createElement('img');
  resultImg.src = `/animal_crossing/images/members/image-${point}.jpg`;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
}

// 결과 페이지로 이동
function showResult() {
  qna.style.display = 'none';
  result.style.display = 'block';
  setResult();
}

// 답변 버튼을 추가하는 함수
function addAnswer(answerObj, qIdx) {
  const a = document.querySelector('.aArea');
  Object.keys(answerObj).forEach(key => {
    const answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.innerHTML = answerObj[key];
    a.appendChild(answer);

    answer.addEventListener('click', function() {
      answerList[qIdx] = key; // 사용자가 선택한 값 저장
      console.log(`질문 ${qIdx + 1}: ${key} 선택`);

      // 다음 질문 이동
      next(qIdx + 1);
    });
  });
}

// 질문을 넘어가는 함수
function next(qIdx) {
  if (qIdx === qPoint) {
    showResult(); // 모든 질문을 다 진행한 후 결과 표시
    return;
  }

  const q = document.querySelector('.qArea');
  const a = document.querySelector('.aArea');

  // 기존 답변 버튼 제거
  a.innerHTML = '';

  // 질문 텍스트 업데이트
  q.innerHTML = qnaList[qIdx].q;

  // 답변 버튼 추가 (각 질문에 맞는 답변 버튼)
  addAnswer(qnaList[qIdx].a[0].answer, qIdx);

  // 진행 상태 바 업데이트
  const status = document.querySelector('.status_bar');
  status.style.width = (100 / qPoint) * (qIdx + 1) + '%';
}

// 퀴즈 시작 함수
function start() {
  start_btn.addEventListener('click', () => {
    intro.style.display = 'none';
    qna.style.display = 'block';

    let qIdx = 0;
    next(qIdx); // 첫 번째 질문으로 시작
  }, false);
}
