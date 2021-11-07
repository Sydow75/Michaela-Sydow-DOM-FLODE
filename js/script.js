    //mina rader i "gröna" loopen.
    for (let i = 1; i < 6; i++) { 

        // text in div rad 1 rad 2 osv. Loop
        let text = document.createTextNode("Rad " + i);
       
        // lägg till div med text. 
        let div = document.createElement("div");
        div.appendChild(text);
       
         console.log('rad') //får fram att jag har fem rader.
       
        //fem rader läggs till med text utan style. 
        document.querySelector("body").appendChild(div);
        
        let textAlign = "center"; //centrerar min text.
        let color = "hsl(225, 66%, 70%)"; //färg på text se https://www.w3schools.com/colors/colors_hsl.asp
        let fontSize = 10 + i * 6 + "px"; //sätter olika strl på rad1,rad2 osv.
        let backgroundColor = ""; //denna är typ multi så lägger man nedan för extra styling.
        let margin = "2rem"; // bredden mellan kolumnerna.
              
        //färg o strl olika på olika rader. Else or if.
        //ex om rad 1 loopar igenom skall den ha en viss 
        //färg annars skall den vidare till nästa osv.
        //tills den kommer runt mitt varv då stannar den. 
        if (i == 1) {
            backgroundColor = "hsl(117, 47%, 70%)"; //rad 1
        }
        else if (i == 2) {
            backgroundColor = "hsl(136, 29%, 70%)"; //rad 2
        }
        else if (i == 3) {
            backgroundColor = "hsl(163, 29%, 70%)"; //rad 3
        }
        else if (i == 4) {
            backgroundColor = "hsl(187, 46%, 70%)"; //rad 4
        }
        else {
            backgroundColor = "hsl(201, 46%, 70%)"; //rad 5
        }
    
        //obs denna text måste ligga längst ner för annars funkar inget!!!! den är kopplad till 
        div.style.textAlign = textAlign; //centrera text
        div.style.color = color; //färg på siffror
        div.style.fontSize = fontSize; //strl på font
        div.style.backgroundColor = backgroundColor;
        div.style.margin = margin; //flyttar alla gröna rader in mot mitten. 
            
    }
//-----------------------------------------------------------
     //container för mina siffror 3 st inkl 1 st border.
     //nytt div läggs till i body.
       let container = document.createElement('div'); 
      //lägger till en container i min body
      let bodyElement = document.querySelectorAll("body")[0].appendChild(container);

       let display = "flex";
       let border = "2px solid black"; //border runt min container
       let justifyContent = "space-around"; //mellanrum mellan mina boxar
       let textAlign = "center";
       let padding = "2rem"; //flyttar mina boxar till mitten. 
       let margin = "2rem";
       
      container.id = "container";
      container.style.display = display;// display flexen
      container.style.border = border;
      container.style.justifyContent = justifyContent;
      container.style.textAlign = textAlign;
      container.style.padding = padding;
      container.style.margin = margin; //flyttar hela boxen med innehållet mot mitten. 
       
      

       //for gör att jag nu har tre kolumner = loop.
       for (let i = 1; i < 4; i++) {
       let box = document.createElement("div"); //denna måste läggas in loop för att funka
       let id = "box_" + i; //måste skapa ett id för mina kolumner
       let backgroundColor = "hsl(247, 27%, 74%)";
       let padding = "10px"; 
      
       box.id = id;
       box.style.backgroundColor = backgroundColor;
       box.style.padding = padding;
       

       //lägg till ny box i container för siffrorna
       document.getElementById("container").appendChild(box);

    }
   //------------------------------------------------------------   

  //fixa boxarna 1,2,3. Även dom läggs i loops.
  //BOX1
  for (let i=0; i<10; i++){   //får fram tio siffror

  
    let text = document.createTextNode(i);
     let box = document.createElement("div");
     box.appendChild(text); //gör div
     
     let width = "30px"; //bredden på kolumnen där siffrorna finns.
     console.log(width)
     let backgroundColor = "white"; //knyter samman färger på if.
     let color = "black";

    //lägger till if och or.      
     if(i % 2 == 0){  //varannan svart varannan vit. 
        backgroundColor = "black";
        color = "white";
     }
     if (i == 4) {  //den svarta skall ha annan färg, lila. 
        backgroundColor = "hsl(279, 9%, 50%)"; //lila färg
    }

    //denna måste finnas under if statements för att funka.
    box.style.width = width;
    box.style.backgroundColor = backgroundColor;
    box.style.color = color;
   

    //lägger till box_1 till min box. obs denna måste vara längst ner för att funka.
    let containerElement = document.getElementById("box_1");
    containerElement.appendChild(box);   
  }

//---------------------------------------------------------
//lägger till box_2
  
    for (let i=9; i>=0; i--){   //får fram tio siffror
    let text = document.createTextNode(i);
    let box = document.createElement("div");
    box.appendChild(text); //gör div
     
     let width = "30px"; //bredden på kolumnen där siffrorna finns.
     console.log(width)
     let backgroundColor = "white"; //knyter samman färger på if.
     let color = "black";

    //lägger till if och or.      
     if(i % 2 == 0){  //varannan svart varannan vit. 
        backgroundColor = "black";
        color = "white";
     }
     if (i == 8) {  //den svarta skall ha annan färg, lila. 
        backgroundColor = "hsl(279, 9%, 50%)"; //lila färg
    }

    //denna måste finnas under if statements för att funka.
    box.style.width = width;
    box.style.backgroundColor = backgroundColor;
    box.style.color = color;
   

    //lägger till box_1 till min box. obs denna måste vara längst ner för att funka.
    let containerElement = document.getElementById("box_2");
    containerElement.appendChild(box);   
  }

  //-------------------------------------------------
   //lägger till box_3
    
   //detta är en ARRAY
   let numbers = ["ett","två","tre","fyra","fem","sex","sju","åtta","nio","tio"];
  
    for (let i = 0; i < numbers.length; i++){   //får fram tio siffror
    let text = document.createTextNode(numbers[i]);
    let box = document.createElement("div");
    box.appendChild(text); //gör div
     
     let width = "30px"; //bredden på kolumnen där siffrorna finns.
     console.log(width)
     let backgroundColor = "white"; //knyter samman färger på if.
     let color = "black";

    //lägger till if och or.      
    if(i % 2 == 0){  //varannan svart varannan vit. 
        backgroundColor = "black";
        color = "white";
     }
     if (i == '5') {  //den svarta skall ha annan färg, lila. 
        backgroundColor = "hsl(279, 9%, 50%)"; //lila färg
    }
    //denna måste finnas under if statements för att funka.
    box.style.width = width;
    box.style.backgroundColor = backgroundColor;
    box.style.color = color;
   

    //lägger till box_1 till min box. obs denna måste vara längst ner för att funka.
    let containerElement = document.getElementById("box_3");
    containerElement.appendChild(box);   
  }


  
  

    
   








   

       




