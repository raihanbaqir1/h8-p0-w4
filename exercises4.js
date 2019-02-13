function cariModus(arr) {
    var numUnique = [];
    for(var i = 0; i < arr.length; i++){
        var flag = true;
        for(var j = 0; j < numUnique.length; j++){
            if(numUnique[j]===arr[i]){
                flag = false;
            }
            
        }
        if(flag=== true){
            numUnique.push(arr[i]);
        }
    }
    // console.log(numUnique);
    var counts = [];
    for(var k = 0; k < numUnique.length; k++){
        var counter = 0;
        for(var l = 0; l < arr.length; l++){
            if(numUnique[k]===arr[l]){
                counter++
            }
        }
        counts.push(counter);
    }
    // console.log(numUnique);
    // console.log(counts);
    var maxCounter = counts[0];
    var maxValue = numUnique[0];
    for(var m = 0; m < counts.length; m++){
        if(counts[m]>maxCounter){
            maxCounter = counts[m];
            maxValue = numUnique[m];
        }
    }
    // console.log(maxCounter, maxValue);
    //kondisi jawaban
    if(maxCounter===1){
        return -1
    } else if(maxCounter===arr.length){
        return -1;
    } else {
        return maxValue;
    }
    // return numUnique
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1