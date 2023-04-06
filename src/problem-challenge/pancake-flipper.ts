export function happyPancakesFlipper(input: string) {
  const matchResult = input.match(/\d/g);

  if (matchResult) {
    const strings = input
      .split(/\d/g)
      .filter((item) => item)
      .map((item) => item.trim());

    const result = strings.reduce((acc, s, index) => {
      const k = Number(matchResult[index]);
      // stores the line to be flipped
      let stringSection;
      // stores the result of the flip process
      let finalString = s;
      // stores the amount of flips needed to make all happy faced pancakes
      let flipCounter = 0;
      // stores the current case number
      const caseNumber = index + 1;
      // blank pacakes to match in the string
      const blankPankekes = Array.from({ length: k }, () => "-").join("");

      for (let i = 1; i <= k; i++) {
        if (i < 3) {
          // from first to k (left to right) | from  last to k (right to left)
          stringSection = i === 1 ? String(s).slice(0, k) : String(s).slice(-k);

          const hasBlank = stringSection.includes("-");

          if (hasBlank) {
            flipCounter++;

            const flipped: any = Array.from(stringSection)
              .map((pancake) => (pancake === "-" ? "+" : "-"))
              .join("");

            if (i === 1) {
              finalString = `${flipped}${finalString.substring(k)}`;
            } else {
              const substring = finalString.substring(
                0,
                finalString.length - k
              );

              finalString = `${substring}${flipped}`;
            }
          }
        }
        // flip pancakes in the center of the line
        else if (finalString?.includes(blankPankekes)) {
          const flippedPancakes = Array.from({ length: k }, () => "+").join("");

          finalString = finalString.replace(blankPankekes, flippedPancakes);

          flipCounter++;
        }
      }

      if (finalString.includes("-")) {
        return (acc += `case #${index + 1}: IMPOSSIBLE `);
      }

      return (acc += `case #${index + 1}: ${flipCounter} `);
    }, "");

    return result;
  }
}

console.log(happyPancakesFlipper("3 -+-+- 4 ---+-++- 3 +++++ 4"));
