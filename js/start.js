const start_btn = document.querySelector('.start_btn');
const intro = document.querySelector('.intro');
const qna = document.querySelector('.qna');
const result = document.querySelector('.result');
const qPoint = 4;
const select = [];

function showResult(){
    qna.style.display='none';
    result.style.display='block';

    console.log(select);
}

function addAnswer(answerText, qIdx, idx){
  const a = document.querySelector('.aArea');
  const answer = document.createElement('button');

  answer.classList.add('answerList');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener('click', function(){
    const children = document.querySelectorAll('.answerList');
    for(let i = 0; i<children.length; i++){
      children[i].disabled = true;
      children[i].style.display='none';
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i<children.length; i++){
        children[i].style.display='none';
      }
    });
    next(++qIdx);
  }, false)
}

function next(qIdx){
  if(qIdx+1 === qPoint){
    showResult();
  }

  const q = document.querySelector('.qArea');
  const a = document.querySelector('.aArea');
  
  // 기존에 있는 답변 버튼들 모두 제거
  a.innerHTML = '';

  // 질문 텍스트 업데이트
  q.innerHTML = qnaList[qIdx].q;
  
  // 새로운 답변 버튼들 추가
  for (let i = 0; i < qnaList[qIdx].a.length; i++){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  const status = document.querySelector('.status_bar');
  status.style.width = (100/qPoint) * (qIdx+1) + '%';
}

function start(){
  start_btn.addEventListener('click', ()=>{
    intro.style.display='none';
    qna.style.display='block';
    
    let qIdx = 0;
    next(qIdx);
  } , false);
}
