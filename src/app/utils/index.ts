/**
 * 스크롤 포인트
 */
export const IS_SCROLL_HEIGHT = 50;

/**
 * progress 총 레벨
 */
export const WEIGHT = 3;

/**
 * web share api 함수
 */
//TODO ios+chrome 예외 처리
export const shareHandler = () => {
  if (navigator.share) {
    navigator.share({
      title: 'memoire',
      text: '타인에게서 자신의 이야기를 발견하세요.',
      url: 'http://localhost:3000/main',
    });
  } else {
    alert('공유하기가 지원되지 않는 환경 입니다.');
  }
};
