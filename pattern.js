function pattern() {
    const n = 7;
    const word = "welcome";

    for (let i = 1; i <= n; i++) {
        let rowpattern = '';
        for (let j = 1; j <= n; j++) {
            if (j == i || i + j == n + 1) {
                rowpattern += word[i - 1] + ' ';
            }
            else {
                rowpattern += " ";
            }
        }
        console.log(rowpattern);

    }
}
pattern();