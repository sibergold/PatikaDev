const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Lütfen yarıçapı giriniz: ', (radius) => {

    const r = parseFloat(radius);

    const area = Math.PI * r * r;

    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);

    rl.close();
});
