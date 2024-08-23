const start_btn = document.querySelector('.start_btn');
const intro = document.querySelector('.intro');
const qna = document.querySelector('.qna');
const qPoint = 10;

function addAnswer(answerText, qIdx){
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
    next(++qIdx);
  }, false)
}

function next(qIdx){
  const q = document.querySelector('.qArea');
  const a = document.querySelector('.aArea');
  
  // 기존에 있는 답변 버튼들 모두 제거
  a.innerHTML = '';

  // 질문 텍스트 업데이트
  q.innerHTML = qnaList[qIdx].q;
  
  // 새로운 답변 버튼들 추가
  for (let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
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
