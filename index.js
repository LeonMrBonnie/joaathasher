#!/usr/bin/env node

const hash = process.argv[2];
if(!hash) console.error("Invalid hash given");
else console.log(`${joaat(hash.toLowerCase())}`);

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
