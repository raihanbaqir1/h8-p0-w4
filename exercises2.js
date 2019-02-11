function fpb(angka1, angka2) {
    var pembagi = 0;
    var faktor = 0;
    var faktor2 = 0;
    if(angka1 < angka2){
        faktor = angka1;
        faktor2 = angka2;
    } else{
        faktor = angka2;
        faktor2 = angka1;
    }
    // console.log(faktor);
    var result = 0;
    while(pembagi < faktor){
        // result = [];
        pembagi = pembagi + 1
        if(faktor%pembagi===0 && faktor2%pembagi===0){
            result = pembagi;
            // console.log(result)
        }   
    }
            
    return result;
  }
  
  // TEST CASES
//   console.log(fpb(12, 16)); // 4
//   console.log(fpb(50, 40)); // 10
//   console.log(fpb(22, 99)); // 11
//   console.log(fpb(24, 36)); // 12
//   console.log(fpb(17, 23)); // 1
  console.log(fpb(11, 99)); // 11