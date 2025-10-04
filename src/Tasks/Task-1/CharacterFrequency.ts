const freq: Record<string, number> = {};
const char = "character frequency";

for (let ch of char){
    if(ch === ' '){
        continue;
    }
    freq[ch] = (freq[ch] || 0) + 1;

    }

console.log(freq);