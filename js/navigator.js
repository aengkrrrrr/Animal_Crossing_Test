const share_btn = document.querySelector('.share_btn');

if (typeof navigator.share !== "undefined") {
	window.navigator.share({
	  title: '동물의 숲 심리테스트입니다', // 공유될 제목
	  text: '나와 닮은 주민은 누구일끼? 지금 당장 테스트 해보세요!', // 공유될 설명
	  url: 'http://srimm3399.dothome.co.kr/animal_crossing/index.html', // 공유될 URL
	  files: [], // 공유할 파일 배열
	});
}

//  카카오톡 공유
Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "", // 공유될 제목
      description: "", // 공유될 설명
      imageUrl: "", // 공유될 이미지 url
      link: {
        mobileWebUrl: "", // 공유될 모바일 URL
        webUrl: "", // 공유될 웹 URL
      },
    },
  });

//   트위터 공유
const sendText = ""; // 공유할 텍스트
const sendUrl = ""; // 공유할 URL
window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`);


// title: '동물의 숲 심리테스트입니다.', // 공유될 제목
// text: '나와 닮은 주민은 누구일끼? 지금 당장 테스트 해보세요!', // 공유될 설명
// url: 'http://srimm3399.dothome.co.kr/animal_crossing/index.html', // 공유될 URL