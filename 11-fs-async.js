const { readFile, writeFile } = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return err;
    }

    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }

        const second = result;
        writeFile(
            './content/result-async.txt'
            , `Acesta este rezultat async ${first}, ${second}`,
            { flag: 'a' },
            (err, result) => { //calback
                // do something with result
                if (err) {
                    console.log(err);
                    return err;
                }

                console.log('done with this task');
            });
    });
});

console.log('starting next task');