let scores = [90,85,-1,78,100]; // -1 means absent

for(let score of scores) 
{
    if(score === -1) 
    {
        console.log("Student absent, skipping...");
        continue;
    }
    if(score === 0)
    {
        console.log("Invalid data, stopping !");
        break;
    }
    console.log("Score:", score);
}