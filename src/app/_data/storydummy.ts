export interface Story {
  title: string;
  author: string;
  content: string;
}

export const story: Story[] = [
  {
    title: '아름다운 추억',
    author: '고광서',
    content: `추억은 커피를 마실 때처럼 처음엔 씁쓸하지만 뒷맛을 천천히 음미하면서 지속시키면 순수하고 향기로워진다. 
        이처럼 청춘의 책 한권에도 추억이 내용으로 되면 풍요로워 질 것이며 그 단순하고 아름답던 좋은 기억들이 잊혀지지 않을 
        것이다. 과거는 영원히 굳어져 있고 많은 것을 잊게 한다. 그러나 젊은 시절의 많은 것들이 행복한 추억으로 남는다. 나는 또 한번 내가 걸어온 인생행로를 뒤돌아 본다. 
        시간의 흐름 위에 나는 나의 꿈을 그리였다. 그러나 나는 그 많은 꿈들을 이룩할 수 없다. 내 마음 속에서 고등학교와 대학에서 겪었던 체험들이 모든 옛추억과 함께 떠나버렸다.
        고등학교 교정과 대학의 캠퍼스와 풍경은 변한것 없지만 우리는 뒤바뀌는 계절에서 자신이 천천히 성장하였음을 보게 된다. 어느 봄날, 나는 오솔길을 걸었다. 
        고등학교의 봄, 봄의 꽃, 우리가 부르던 노래들이 생생히 기억된다. 
        지금은 청춘의 봄, 고등학생이 가장 매력적인, 그러나 바베큐 (통째로 불에 구운고기) 요리를 배우는 것이 더 유혹적이다. 게임을 하면 기분이 한층 더 돋구어 진다. 
        우리는 나무그늘 아래에 앉아 하늘을 바라보면서 하늘은 푸른 하늘이고 버드나무는 해마다 성장하고 우리는 봄 햇살에 목욕하면서 번화한 도시를 내려다 보았다. 
        그것은 평소 대자연과 접촉할 시간이 없고 기회가 적은 우리들을 환희에 넘치게 하였고 청춘의 활기를 되찾아 주는듯 싶었다.
        나는 새 봄의 신록이 무르녹는 계절(시즌)을 거쳐 여름에 록음이 짙은 고등학교 캠퍼스를 연상해 본다. 우리 학교 캠퍼스의 곳곳에서 화려하게 핀 꽃과 잔디의 키돋움을 볼 수 있다. 
        여린 녹색잔디는 꽃보다 더 화려한 꽃침대에 흩어져 있는 꽃, 그것들은 비록 부드럽고 아름다운 모란이 되지 않으며 향기가 있지만 그들은 여전히 매우 사랑스러운 점이 있다. 
        어떤 날에 오후 방과후 우리는 남자들의 놀이인 농구를 치기도 하고 함께 악기를 연주하기도 하고 배드민턴을 치기도 했다.
        시계, 여자, 캠퍼스는 활력으로 가득 넘치고 우리는 피로하고 몸과 마음이 긴장해지게 하는 학습생활에서 해탈된듯 하다. 고등학교때의 내가 그립다. 
        동창들과 그때 한반 친구들 사이는 그야 말로 무공해라고 비유할 수도 있었다. 우리는 같이 공부하고 함께 놀았으며 함께 아침에 달리기를 하였다. 
        때때로 작은 갈등이 생기기도 했지만 며칠만 지나면 언제 그런 일이 있었느냐는 듯이 인차 화해하고 다시 친해졌다.
        그래서 그 시절의 친구들이 더 그리운가보다.`,
  },
];

export interface Feedback {
  content: string;
}

export const feedback: Feedback[] = [
  { content: '글 가독성 높은' },
  { content: '표현력 아쉬운 가독성 낮은' },
  { content: '이독성 높은 표현력 낮은' },
];

export const feedbackTag = [
  '글',
  '주제',
  '이독성',
  '가독성',
  '좋은',
  '아쉬운',
  '달콤한',
  '어울리는',
  '호응',
  '문장구조',
  '내용',
  '맞지않는',
  '단어',
];

export interface AssistantContent {
  title: string;
  desc: string;
}

export const assistantContent: AssistantContent[] = [
  {
    title: '제안',
    desc: '우리 학교 캠퍼스는 마치 봄의 화가가 펼친 거대한 캔버스 같다. 곳곳에는 다채로운 색으로 물든 튤립과 장미가 화려하게 핀 꽃잎을 펼쳐 마치 무지개를 뿌린 듯하다.',
  },
  {
    title: '표현력을 높인 문장 제안',
    desc: '우리 학교 캠퍼스는 마치 봄의 화가가 펼친 거대한 캔버스 같다. 곳곳에는 다채로운 색으로 물든 튤립과 장미가 화려하게 핀 꽃잎을 펼쳐 마치 무지개를 뿌린 듯하다.',
  },
  {
    title: '다른 스토리에서 영감 얻기',
    desc: '우리 학교 캠퍼스는 마치 봄의 화가가 펼친 거대한 캔버스 같다. 곳곳에는 다채로운 색으로 물든 튤립과 장미가 화려하게 핀 꽃잎을 펼쳐 마치 무지개를 뿌린 듯하다.',
  },
];