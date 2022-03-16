var elList = document.querySelector(".list")


for (var i of pokemons) {
    var newItem = document.createElement("li");
    var newImg = document.createElement("img");
    var newTitle = document.createElement("h3");
    var newDiv = document.createElement("div");
    // var newText = document.createElement("p");
    
    var newTime = document.createElement("time")
    var newSubList = document.createElement("ul")



    // for(var j of i.weaknesses){
    //     var newSubItem = document.createElement("li")
    //     newSubItem.textContent = weakness;
    //     newSubItem.setAttribute("class", "sub__item")
    //     newSubList.appendChild(newSubItem);
    // }

    for(var weak of i.weaknesses){
        var newSubItem = document.createElement("li");
        newSubItem.textContent = weak;
        newSubList.appendChild(newSubItem);


        newSubList.setAttribute("class", "lists")
        newSubItem.setAttribute("class", "lists__items")
    }




    

    newItem.textContent = i.num;
    newTitle.textContent = i.name;
    newDiv.textContent = i.type;
    // newText.textContent = i.next_evolution[0];
    
    newTime.textContent = formatDate(i.spawn_time)


    newImg.setAttribute("src" , i.img);
    newImg.setAttribute("class" , "list__img");
    newItem.setAttribute("class", "list__item")
    newTitle.setAttribute("class", "list__title");
    newDiv.setAttribute("class", "list__box");




    
    newItem.appendChild(newImg)
    newItem.appendChild(newTitle)
    newItem.appendChild(newDiv)
    
    // newDiv.appendChild(newText)
   
    newItem.appendChild(newTime)
    newItem.appendChild(newSubList)
    elList.appendChild(newItem)
}