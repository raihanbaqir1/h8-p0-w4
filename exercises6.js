function digitPerkalianMinimum(angka) {
    var pembagi = 1;
    var tampungPembagi = [];
    var str = "";
    var tampungResult = [];
    var result = 0;
    while(pembagi <= angka){
        if(angka%pembagi===0){
            tampungPembagi.push(pembagi);
        }
        pembagi++
    }
    // console.log(tampungPembagi.length);
    // console.log(tampungPembagi);
    for(var i = 0; i < tampungPembagi.length; i++){
        str = ""+tampungPembagi[i]+tampungPembagi[(tampungPembagi.length-1)-i];
        // console.log(str);
        tampungResult.push(str);
    }
    // console.log(tampungResult);
    var min = tampungResult[0].length;
    for(var j = 0; j < tampungResult.length; j++){
        if(tampungResult[j].length < min){
            min = tampungResult[j].length;
        }
    }
    // console.log(min);
    return min;
}
   
 
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2