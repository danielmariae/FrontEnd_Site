var stateObject = {
    "Goiás": {
        "Goiânia":[],
        "Aparecida de Goiânia":[],
        "Anápolis":[],
        "Rio Verde":[],
        "Águas Lindas":[]
    },
    "Maranhão": {
        "São Luís":[],
        "Imperatriz":[],
        "São José de Ribamar":[],
        "Timon":[],
        "Caxias":[]
    },
    "Tocantins": {
        "Palmas":[],
        "Araguaína":[],
        "Gurupi":[],
        "Porto Nacional":[],
        "Paraíso":[]
    }
}

window.onload = function(){
    var stateSel = document.getElementById("states");
    var citySel = document.getElementById("cities");
    
    for(var x in stateObject){
        stateSel.options[stateSel.options.length] = new Option(x, x);
    }	
    
    stateSel.onchange = function(){
        citySel.length = 1;
        
        for(var y in stateObject[this.value]){
            citySel.options[citySel.options.length] = new Option(y, y);
        }
    }
}
