/**
 *
 * @param {number[]}  championsId - 로테이션 ID가 담긴 배열
 * @param {Champion[]} champions - 전체 챔피언 리스트
 * @returns {Champion[]} - 로테이션 ID로 필터된 리스트
 */

const conversionFreeChampion = (
  championsId: number[],
  champions: Champion[]
) => {
  return championsId
    .map((id) => {
      return champions.filter((champion) => {
        return champion.key === id.toString();
      });
    })
    .flat();
};

export default conversionFreeChampion;
