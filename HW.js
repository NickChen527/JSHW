const rows = document.querySelectorAll(".row");
const rowArray = Array.apply(null,rows);
const avgArray = [];

rowArray.forEach(function(elemr,indexr){
    
    if(indexr===0){
        let avg = document.createElement("div");
        avg.className = "col";
        avg.textContent = "AVG";
        elemr.append(avg);
        let rank = document.createElement("div");
        rank.className = "col";
        rank.textContent = "Rank";
        elemr.append(rank);
        return;
    }
    
    let avg = document.createElement("div");
    avg.className = "col";
    elemr.append(avg);
    let rank = document.createElement("div");
    rank.className = "col";
    elemr.append(rank);

    const cols = elemr.querySelectorAll(".col");
    const colArray = Array.apply(null,cols);
    let sum=0;
    colArray.forEach(function(elemc, indexc){
        if(indexc>=2 && indexc<=5){
            let score = Number.parseInt(elemc.textContent,10);
            sum = sum+score;
            if(score<60){
                elemc.style.color = "#DC0501";
            }
            if(score===100){
                elemc.style.backgroundColor = "#FFFF77";
            }
        }
        if(indexc===6){
            let avg = sum/4;
            elemc.textContent = avg;
            avgArray.push({elemr,avg});
        }
    })

})

avgArray.sort((a, b) => b.avg - a.avg);
avgArray.forEach((elem, index) => {
    const a = document.querySelector();
});