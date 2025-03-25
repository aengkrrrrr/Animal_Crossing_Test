const start_btn = document.querySelector('.start_btn');
const intro = document.querySelector('.intro');
const qna = document.querySelector('.qna');
const result = document.querySelector('.result');
const qPoint = qnaList.length; // 질문 개수
const answerList = []; // 사용자의 선택 기록

function calResult() {
  let countA = 0;
  let countB = 0;

  // answerList에서 A, B 개수 세기
  answerList.forEach(choice => {
    if (choice === 'a') countA++;
    else if (choice === 'b') countB++;
  });

  console.log(`A 선택 개수: ${countA}, B 선택 개수: ${countB}`);

  // A 선택이 많으면 0번 결과, B가 많으면 1번 결과, 동률이거나 그 외는 2번 결과
  if (countA > countB) return 0;
  else if (countB > countA) return 1;
  else return 2;
}

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
  resultImg.src = `img/image-${point}.png`;
  resultImg.alt = `결과 ${point}`;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
}

function showResult() {
  qna.style.display = 'none';
  result.style.display = 'block';
  setResult();
}

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

function next(qIdx) {
  if (qIdx === qPoint) {
    showResult();
    return;
  }

  const q = document.querySelector('.qArea');
  const a = document.querySelector('.aArea');

  // 기존 답변 버튼 제거
  a.innerHTML = '';

  // 질문 업데이트
  q.innerHTML = qnaList[qIdx].q;

  // 답변 버튼 추가
  addAnswer(qnaList[qIdx].a[0].answer, qIdx);

  // 진행 바 업데이트
  const status = document.querySelector('.status_bar');
  status.style.width = (100 / qPoint) * (qIdx + 1) + '%';
}

function start() {
  start_btn.addEventListener('click', () => {
    intro.style.display = 'none';
    qna.style.display = 'block';

    let qIdx = 0;
    next(qIdx);
  }, false);
}
