type IconAvailable = { [key: string]: number }
function checkCoins(
  coinAvailable: { [key: string]: number },
  participantsRequested: string[]
): string[][] | null {
  const results: string[][] = [];

  function backtrack(
    index: number,
    distribution: string[]
  ): void {
    if (index === participantsRequested.length) {
      results.push([...distribution]);
      return;
    }

    const coins = participantsRequested[index].split('/');

    for (const coin of coins) {
      if (coinAvailable[coin] > 0) {
        distribution.push(coin);
        coinAvailable[coin]--;
        backtrack(index + 1, distribution);
        coinAvailable[coin]++;
        distribution.pop();
      }
    }
  }

  backtrack(0, []);
    if(!results.length){
        console.log('невозможно распределить монеты!')
        return null
    }
  return results;
}

// Пример использования




const coinAvailable:IconAvailable ={ ETH: 4, TRON: 5, MATIC: 1 };
const participantsRequested:string[] = ["ETH", "ETH", "ETH/TRON", "TRON/ETH", "TRON/MATIC", "TRON", "MATIC"];
const result: string[][] | null = checkCoins(
  coinAvailable,
  participantsRequested
);
console.log(result);
