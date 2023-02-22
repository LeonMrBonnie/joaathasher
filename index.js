#!/usr/bin/env node
const fs = require("fs");

const hash = process.argv[2];
const file = process.argv[3];
if(!hash) console.error("Invalid hash given");
else {
    let hashed = joaat(hash.toLowerCase()) >>> 0;
    let hashedHex = hashed.toString(16).toUpperCase();
    console.log(`Decimal: ${hashed}\nHex: ${hashedHex}`);
    if(file) fs.writeFileSync(file, hashed.toString());
}

function joaat(key) {
    let hash = 0;
    for (let i = 0, length = key.length; i < length; i++) {
        hash += key.charCodeAt(i);
        hash += (hash << 10);
        hash ^= (hash >>> 6);
    }
    hash += (hash << 3);
    hash ^= (hash >>> 11);
    hash += (hash << 15);

    return hash;
}
