const data = "0e2g0c3f3d2f1f0b3f3d0d4b0g3d1a0g3e3f3g3d3b3d0a2g4a0h3f0c4b1e1g3d4a1b1f3d0b2g3d2f0f3f2h2b3f1g3d3e1e3d3e3f3h1f3d1a3f1d2c3d1a3f1c1e3d1a1h1b2e4b2d3d2a2c3e3d2g2b2f2g2h4b3f2b3f3g3d3b3d3a3f3c3d3e3f3h4a4b4c4d4d4d";

const dictionary = ["KtnsŻręh", "mzłjey,ó", "Mdą?gpow", "T-k ża:b", "ciu."];

let result  = [];
 let y = "";
 let m = 0;

for(let x in data){
    if((x % 2) === 0){
        y = dictionary[data[x]];
    }else {
        switch(data[x]){
            case "a": 
              m = 0;
              break;
            case "b": 
              m = 1;
              break;
            case "c": 
              m = 2;
              break;
            case "d": 
              m = 3;
              break;
            case "e": 
              m = 4;
              break;
            case "f": 
              m = 5;
              break;
            case "g": 
              m = 6;
              break;
            case "h": 
              m = 7;
              break;
        };
      result.push(y.slice(m, m + 1));
    }
};
result = result.join('')
console.log(result)
