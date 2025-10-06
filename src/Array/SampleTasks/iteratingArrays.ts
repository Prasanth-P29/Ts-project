let skills = ["Selenium", "PlayWright","API","Cypress"];

//for Loop
for(let i = 0; i <= skills.length; i++){
    console.log(`Skills: ${i+1} => ${skills[i]}`);
}

//for-of loop
for(let skill of skills){
    console.log(`Using Skill: `,skill);
}

//for-in loop(indexes)
for(let index in skills){
    console.log(`Index: ${index} = ${skills[index]}`);
}

//for-each method
skills.forEach((skill,i) => {
    console.log(`forEach[${i}] : ${skill}`);
});

