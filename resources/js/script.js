const recipes = [
    {
    title: "moka",
    type: "percolation",
    difficulty: "medium",
    step1:"",
    step2:"",
    step3:"",
    step4:"",
    step5:"",
    fulltime:"",
    ratio:"",
    temp:""
   },
   {
    title: "aeropress",
    type: "infusion",
    difficulty: "easy",
    step1:"MEDIUM FINE GRIND THE COFFEE - PREPARE DOUBLE FILTER",
    step2:"FP 20g @ 0:30",
    step3:"SP 200g @ 1:00",
    step4:"AW until @ 1:30",
    step5:"Plunge for 30s",
    fulltime:"2:00",
    ratio:"1:11 ratio",
    temp:"85ªC",
    imageSrc: "/resources/img/aeropress.jpg"
   },
   {
    title: "koar",
    type:"percolation",
    difficulty:"easy",
    step1:"MEDIUM ROUGH GRIND THE COFFEE - Rinse the filter and discard the water",
    step2:"SP 40g @ 0:30",
    step3:"SP 160g until 200g @ 1:00' ",
    step4:"SP 50g until 250g @ 1:30' ",
    step5:"SP 50g until 300g @ 2:00' and await until 3:00 and finish the extraction",
    fulltime:"3:10'",
    ratio:"1:15 ratio",
    temp:"92º",
    imageSrc: "resources/img/koar.jpg" 
   },
   {
     title:"french press",
     type:"infusion",
     difficulty:"easy",
     step1:"ROUGH GRIND THE COFFEE - Scald the vessel",
     step2:"FP 200g of water @ 0:30'.",
     step3:"Mix the Hydrated coffee for 15s until @ 0:45s",
     step4:"FP 200g of water and wait @3:30'",
     step5:"FE @ 4:15' ",
     fulltime:"4:15",
     ratio:"1:14 ratio",
     temp:"95º C",
     imageSrc: "resources/img/french press.jpg" 
   }
  ];
  let result = [];
  let type = "";
  let difficulty = "";
  
  const typeResultPercolation = document.getElementById("typefilter1percolation");
  const typeResultInfusion = document.getElementById("typefilter2infusion")
  const difficultyFieldEasy = document.getElementById("difficultyfilter1easy");
  const difficultyFieldMedium = document.getElementById("difficultyfilter2medium");
  const difficultyFieldHard = document.getElementById("difficultyfilter3hard");
  const recipeSection = document.getElementById("recipeSection");
  
  
  const htmlInserter = (result) => {
    for (const r of result) {
      recipeSection.insertAdjacentHTML('afterbegin',`<figure class='recipe__card'><div class='recipe__hero'><img src='${r.imageSrc}' alt='${r.type}' class='recipe__img'/></div> <div class='recipe__content'> <div class='recipe__title'> <h1 class='recipe__heading'>'${r.title}'</h1> <div class='recipe__tag recipe__tag--1'>${r.difficulty}</div> <div class='recipe__tag recipe__tag--2'>${r.type}</div> </div> <ul class='recipe__steps'> <li>${r.step1}</li><li>${r.step2}</li> <li>${r.step3}</li> <li>${r.step4}</li> <li>${r.step5}</li> </ul> <div class='recipe__details'> <ion-icon class='recipes__detail--icons'name='stopwatch-outline'></ion-icon> <p class='recipe__detail'>${r.fulltime}</p> <ion-icon class='recipes__detail--icons'name='scale-outline'></ion-icon><p class='recipe__detail'>${r.ratio}</p> <ion-icon class='recipes__detail--icons'name='thermometer-outline'></ion-icon><p class='recipe__detail'>${r.temp}</p> </div> </div> <div class='recipe__price'>${r.type}</div></figure>`);
    };
  } //logic for replicating the html that contains the recipe card 
  
  const btnFilter = document.getElementById("#btnFilter")
  btnFilter.addEventListener("click", () => {
    let list = [...recipes];
    if (type) {
      list = list.filter(r => r.type === type);
    }
    if (difficulty) {
      list = list.filter(r => r.difficulty === difficulty);
    }
    result = list;
    console.log(result)
    htmlInserter(result)
    return result
  }); //logic for filtering the results of the checkboxes
  
  const btnReset = document.getElementById("#resetButton")
  btnReset.addEventListener("click", ()=> {
    type=""
    difficulty=""
    recipeSection.innerHTML=""
  })
  
  typeResultPercolation.addEventListener("change", () => {
  type = "percolation";
  console.log(type)
  });
    
  typeResultInfusion.addEventListener("change", () => {
  type = "infusion";
  console.log(type)
  });
    
  difficultyFieldEasy.addEventListener("change", () => {
  difficulty = "easy";
  console.log(difficulty)
  });
    
  difficultyFieldMedium.addEventListener("change", () => {
  difficulty = "medium";
  console.log(difficulty)
  });
    
  difficultyFieldHard.addEventListener("change", () => {
  difficulty = "hard";
  console.log(difficulty)
  });
    





let recipeCardHTML = `<figure class='recipe_card'><div class='recipe__hero'><img src='resources/img/frenchpress.jpg' alt='frenchpress' class='recipe__img'/></div> <div class='recipe__content'> <div class='recipe__title'> <h1 class='recipe__heading'>FRENCH PRESS</h1> <div class='recipe__tag recipe__tag--1'>#infusion</div> <div class='recipe__tag recipe__tag--2'>#easy</div> </div> <ul class='recipe__steps'> <li>Scald the vessel</li><li>preinfuse 200g of water for 30s.</li> <li>mix the hydrated coffee for 15s.</li> <li>put 200g of water and wait for 3:30'</li> <li>push the plunger,stop the extraction</li> </ul> <div class='recipe__details'> <ion-icon class='recipes__detail--icons'name='stopwatch-outline'></ion-icon> <p class='recipe__detail'>4 minutes</p> <ion-icon class='recipes__detail--icons'name='scale-outline'></ion-icon><p class='recipe__detail'>1:14 ratio</p> <ion-icon class='recipes__detail--icons'name='thermometer-outline'></ion-icon><p class='recipe__detail'>95ºC</p> </div> </div> <div class='recipe_price'>INFUSION</div></figure>`

