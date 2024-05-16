/**
 * 스크롤 포인트
 */
export const IS_SCROLL_HEIGHT = 50;

/**
 * progress 총 레벨
 */
export const WEIGHT = 2;

/**
 * web share api 함수
 */
//TODO ios+chrome 예외 처리
export const shareHandler = (url: string) => {
  if (navigator.share) {
    navigator.share({
      title: 'memoire',
      text: '타인에게서 자신의 이야기를 발견하세요.',
      url: `https://7a07848e.memoire-web.pages.dev${url}`,
    });
  } else {
    copyHandler(`https://7a07848e.memoire-web.pages.dev${url}`);
  }
};
/**
 * 복사하기 기능 컴포넌트
 */
export const copyHandler = async (data: string) => {
  try {
    await navigator.clipboard.writeText(data);
    alert('📑 클립보드에 복사되었습니다.');
  } catch (error) {
    console.error('Failed to copy:', error);
    alert('클립보드 복사에 실패하였습니다.');
  }
};
