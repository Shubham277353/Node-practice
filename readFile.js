const { Utf8Stream } = require('node:fs');
const fs = require('node:fs/promises');

async function example () {
    try{
        const data = await fs.readFile('./test.txt',{encoding: 'utf-8'});
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

example();