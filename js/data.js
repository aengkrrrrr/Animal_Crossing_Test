const qnaList = [
    {
        "q": "1. 오랜만에 생긴 휴가다!<br>당신은 무엇을 하실 건가요?",
        "a": [
            { "answer": { "a": "아 피곤해~ 오늘은 집에서 유튜브나 보자", "b": "야호! 일단 어디든 놀러 나가보자!" } }
        ]
    },
    {
        "q": "2. 밖에 나와보니 햇빛이 쨍쨍하고,<br> 하늘이 매우 예쁘다.",
        "a": [
            { "answer": { "a": "오늘 날씨 너무 좋다! 사진 찰칵찰칵!!", "b": "선크림 안 발랐는데 살 타겠네" } }
        ]
    },
    {
        "q": "3. 업무 실수로 인해<br>상사에게 혼이 난 당신",
        "a": [
            { "answer": { "a": "내 잘못이지만 기분이 별로야.. 우울하니까 맛있는 거 먹을래", "b": "다음부터는 실수하지않도록 더 꼼꼼하게 체크하자" } }
        ]
    },
    {
        "q": "4. 친구와 만나기로 약속했는데, <br> 약속 시간이 지나도 연락이 되지 않는다.",
        "a": [
            { "answer": { "a": "화가 나고 지친 나머지 집으로 돌아가버린다.", "b": "피치 못 할 사정이 있겠지 하며 조금 더 기다려본다." } }
        ]
    },
    {
        "q": "5. 영화관에 온 당신,<br> 어떤 영화를 보실 건가요?",
        "a": [
            { "answer": { "a": "영화는 귀신과 괴물이 튀어나오는 공포 스릴러지!!", "b": "나는 현실에 있을법한 잔잔하고 감동적인 로맨스가 좋더라~" } }
        ]
    },
    {
        "q": "6. 누군가가 나에 대한 <br>뒷담을 하는 것을 알아버린 당신",
        "a": [
            { "answer": { "a": "나도 너 싫거든?", "b": "헐...내가 뭔가 잘못한 걸까?.." } }
        ]
    }
]


const resultConditions = [
    { answers: ['a', 'a', 'a', 'a', 'a', 'a'], result: 0 },// 시베리아
    { answers: ['a', 'a', 'a', 'a', 'a', 'b'], result: 1 },// 귀오미
    { answers: ['a', 'a', 'a', 'a', 'b', 'a'], result: 2 },// 너굴
    { answers: ['a', 'a', 'a', 'a', 'b', 'b'], result: 3 },// 스트로베리
    { answers: ['a', 'a', 'a', 'b', 'a', 'a'], result: 4 },// 부엉
    { answers: ['a', 'a', 'a', 'b', 'a', 'b'], result: 5 },// 호떡
    { answers: ['a', 'a', 'a', 'b', 'b', 'a'], result: 6 },// 타코
    { answers: ['a', 'a', 'a', 'b', 'b', 'b'], result: 7 }, // 사이다
    { answers: ['a', 'a', 'b', 'a', 'a', 'a'], result: 5 },
    { answers: ['a', 'a', 'b', 'a', 'a', 'b'], result: 6 },
    { answers: ['a', 'a', 'b', 'a', 'b', 'a'], result: 4 },
    { answers: ['a', 'a', 'b', 'a', 'b', 'b'], result: 3 },
    { answers: ['a', 'a', 'b', 'b', 'a', 'a'], result: 2 },
    { answers: ['a', 'a', 'b', 'b', 'a', 'b'], result: 1 },
    { answers: ['a', 'a', 'b', 'b', 'b', 'a'], result: 0 },
    { answers: ['a', 'a', 'b', 'b', 'b', 'b'], result: 1 },
    { answers: ['a', 'b', 'a', 'a', 'a', 'a'], result: 2 },
    { answers: ['a', 'b', 'a', 'a', 'a', 'b'], result: 3 },
    { answers: ['a', 'b', 'a', 'a', 'b', 'a'], result: 4 },
    { answers: ['a', 'b', 'a', 'a', 'b', 'b'], result: 5 },
    { answers: ['a', 'b', 'a', 'b', 'a', 'a'], result: 6 },
    { answers: ['a', 'b', 'a', 'b', 'a', 'b'], result: 7 },
    { answers: ['a', 'b', 'a', 'b', 'b', 'a'], result: 0 },
    { answers: ['a', 'b', 'a', 'b', 'b', 'b'], result: 1 },
    { answers: ['a', 'b', 'b', 'a', 'a', 'a'], result: 2 },
    { answers: ['a', 'b', 'b', 'a', 'a', 'b'], result: 3 },
    { answers: ['a', 'b', 'b', 'a', 'b', 'a'], result: 4 },
    { answers: ['a', 'b', 'b', 'a', 'b', 'b'], result: 5 },
    { answers: ['a', 'b', 'b', 'b', 'a', 'a'], result: 6 },
    { answers: ['a', 'b', 'b', 'b', 'a', 'b'], result: 7 },
    { answers: ['a', 'b', 'b', 'b', 'b', 'a'], result: 0 },
    { answers: ['a', 'b', 'b', 'b', 'b', 'b'], result: 1 },
    { answers: ['b', 'a', 'a', 'a', 'a', 'a'], result: 2 },
    { answers: ['b', 'a', 'a', 'a', 'a', 'b'], result: 4 },
    { answers: ['b', 'a', 'a', 'a', 'b', 'a'], result: 3 },
    { answers: ['b', 'a', 'a', 'a', 'b', 'b'], result: 6 },
    { answers: ['b', 'a', 'a', 'b', 'a', 'a'], result: 5 },
    { answers: ['b', 'a', 'a', 'b', 'a', 'b'], result: 7 },
    { answers: ['b', 'a', 'a', 'b', 'b', 'a'], result: 2 },
    { answers: ['b', 'a', 'a', 'b', 'b', 'b'], result: 1 },
    { answers: ['b', 'a', 'b', 'a', 'a', 'a'], result: 0 },
    { answers: ['b', 'a', 'b', 'a', 'a', 'b'], result: 5 },
    { answers: ['b', 'a', 'b', 'a', 'b', 'a'], result: 2 },
    { answers: ['b', 'a', 'b', 'a', 'b', 'b'], result: 3 },
    { answers: ['b', 'a', 'b', 'b', 'a', 'a'], result: 4 },
    { answers: ['b', 'a', 'b', 'b', 'a', 'b'], result: 6 },
    { answers: ['b', 'a', 'b', 'b', 'b', 'a'], result: 7 },
    { answers: ['b', 'a', 'b', 'b', 'b', 'b'], result: 5 },
    { answers: ['b', 'b', 'a', 'a', 'a', 'a'], result: 4 },
    { answers: ['b', 'b', 'a', 'a', 'a', 'b'], result: 3 },
    { answers: ['b', 'b', 'a', 'a', 'b', 'a'], result: 3 },
    { answers: ['b', 'b', 'a', 'a', 'b', 'b'], result: 6 },
    { answers: ['b', 'b', 'a', 'b', 'a', 'a'], result: 5 },
    { answers: ['b', 'b', 'a', 'b', 'a', 'b'], result: 4 },
    { answers: ['b', 'b', 'a', 'b', 'b', 'a'], result: 4 },
    { answers: ['b', 'b', 'a', 'b', 'b', 'b'], result: 5 },
    { answers: ['b', 'b', 'b', 'a', 'a', 'a'], result: 7 },
    { answers: ['b', 'b', 'b', 'a', 'a', 'b'], result: 7 },
    { answers: ['b', 'b', 'b', 'a', 'b', 'a'], result: 1 },
    { answers: ['b', 'b', 'b', 'a', 'b', 'b'], result: 0 },
    { answers: ['b', 'b', 'b', 'b', 'a', 'a'], result: 4 },
    { answers: ['b', 'b', 'b', 'b', 'a', 'b'], result: 6 },
    { answers: ['b', 'b', 'b', 'b', 'b', 'a'], result: 3 },
    { answers: ['b', 'b', 'b', 'b', 'b', 'b'], result: 6 }
];
    
const resultList = [
    {
        name: '🌟 타고난 리더이자 통솔자 <시베리아>',
        desc: '분석적이고 객관적이며, 주변 세계에 자신만의 질서를 부여하는 것을 좋아하는 당신! 문제 해결 능력이 뛰어나며, 어려운 상황에서도 냉철한 판단을 내리는 편이에요. 가끔 완벽함을 추구하느라 스트레스를 받을 수도 있지만, 주변 사람들은 당신을 믿고 따르는 경우가 많아요!',
        img: "url('../images/image-1.jpg')"
    },
    {
        name: '🌞 봄날의 햇살 <귀오미>',
        desc: '항상 긍정적이고 따뜻한 분위기를 풍기는 당신! 누구와도 쉽게 친해지고, 상대방의 감정을 잘 이해하는 공감력이 뛰어난 성격이에요. 감성적인 면도 강해 예술이나 창작 활동에 관심이 많을 가능성이 높아요. 친구들에게 위로가 되는 존재랍니다!',
        img: "url('../images/image-2.jpg')"
    },
    {
        name: '🦝 사기꾼(?) <너굴>',
        desc: '사업 수완이 뛰어나고 기회를 잘 포착하는 타입! 야망이 크고 목표를 위해 노력하는 성격이라 어디서든 성공할 가능성이 높아요. 하지만 때로는 너무 이성적으로 계산적으로 보일 수 있으니 인간미를 잃지 않도록 주의하세요!',
        img: "url('../images/image-3.jpg')"
    },
    {
        name: '🌸 차분한 힐링러 <스트로베리>',
        desc: '친절하고 성실한 당신! 맡은 일은 끝까지 해내는 책임감 있는 성격이에요. 타인을 잘 배려하고, 조용히 주변을 돕는 경우가 많아요. 하지만 너무 희생하는 성향이 강하면 스스로 지칠 수 있으니 가끔은 자신을 위한 시간을 가져보세요!',
        img: "url('../images/image-4.jpg')"
    },
    {
        name: '🦉 지적인 도서관장 <부엉>',
        desc: '지식에 대한 탐구심이 강하고, 새로운 것을 배우는 걸 좋아하는 타입! 논리적으로 사고하는 능력이 뛰어나며, 가끔은 남들이 모르는 재미있는 사실들을 늘어놓기도 해요. 하지만 감정보다는 이성을 우선시하는 경향이 있으니 인간관계에서 너무 논리적으로만 접근하지 않도록 주의하세요!',
        img: "url('../images/image-5.jpg')"
    },
    {
        name: '🔥 열정적인 모험가 <호떡>',
        desc: '도전 정신이 강하고, 늘 새로운 것을 찾는 모험가 타입! 가만히 있는 걸 싫어하며, 호기심이 많아 다양한 경험을 하고 싶어하는 성격이에요. 때론 충동적으로 행동할 수도 있지만, 그만큼 삶을 다채롭고 활기차게 살아가죠!',
        img: "url('../images/image-6.jpg')"
    },
    {
        name: '🌿 평온한 자연주의자 <타코>',
        desc: '자연과 평화를 사랑하는 당신! 도시의 번잡함보다는 한적하고 조용한 분위기를 선호하며, 차분한 성격 덕분에 주변 사람들에게 안정감을 주는 편이에요. 하지만 때로는 너무 수동적으로 보일 수 있으니, 스스로의 의견을 좀 더 표현해보는 것도 좋아요!',
        img: "url('../images/image-7.jpg')"
    },
    {
        name: '🎭 다재다능한 만능 엔터테이너 <사이다>',
        desc: '사교적이고 에너지가 넘치는 당신! 어디서든 분위기를 주도하는 성격이라 사람들과 어울리는 걸 좋아하고, 재미있는 이야기를 많이 하는 타입이에요. 다재다능한 재능을 가지고 있으며, 창의력도 뛰어난 편이죠. 하지만 가끔 너무 즉흥적일 수 있으니 장기적인 계획도 세워보세요!',
        img: "url('../images/image-8.jpg')"
    }
];

