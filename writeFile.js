const fs = require('node:fs/promises');
const { execArgv } = require('node:process');


async function example (){
    try{
        const content = 'wassup bro';
        await fs.appendFile('./test.txt', content);
    }catch (err){
        console.log(err);
    }
}

example();