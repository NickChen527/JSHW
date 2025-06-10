const rows = document.querySelectorAll(".row");
const rowArray = Array.from(rows);
const rankArray = [];

rowArray.forEach(function(elemr,indexr){
    
    //建立兩個表頭
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
    
    //把下面的 col 也建一下
    let avg = document.createElement("div");
    avg.className = "col";
    elemr.append(avg);
    
    let rank = document.createElement("div");
    rank.className = "col";
    elemr.append(rank);

    //跑 foreach 去抓 row 裡面的 col
    const cols = elemr.querySelectorAll(".col");
    const colArray = Array.from(cols);
    let sum=0;
    colArray.forEach(function(elemc, indexc){
        if(indexc>=2 && indexc<=5){
            let score = Number.parseInt(elemc.textContent,10);
            sum = sum+score;
            //小於60用紅色
            if(score<60){
                elemc.style.color = "#DC0501";
            }
            //等於100背景用金色
            if(score===100){
                elemc.style.backgroundColor = "#FFFF77";
            }
        }
        //把avg算出來順便塞到rankArray裡面
        if(indexc===6){
            let avg = sum/4;
            elemc.textContent = avg;
            rankArray.push({id:indexr,avg:avg}); //這邊要塞物件，排序完之後要用 id 來辨認是哪個 row
        }
    })

})

//依照平均分數大到小排
rankArray.sort(function(a,b){
    return b.avg-a.avg;
});

//幫 rankArray 的每個物件新增一個 rank 屬性
rankArray.forEach(function(elem,index){
    elem.rank = index+1;
})

//把 rank 值放到對應的 row
rowArray.forEach(function(elemr,indexr){
    const rankcol = elemr.querySelector(".col:nth-child(8)");
    //跑 rankArray，如果 id 跟 index 一樣就代表是同個 row
    //因為從頭到尾沒有動過 rowArray 的排序，所以如果是相同 row，這邊的 indexr 跟放到 rankArray 的 indexr 會一樣
    rankArray.forEach(function(elem){
        if(elem.id===indexr){
            rankcol.textContent = elem.rank;
        }
    })
})