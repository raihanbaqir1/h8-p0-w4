function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyza';
    var result = '';
    for(var i = 0; i < kata.length; i++){
        for(var j = 0; j < kamus.length-1; j++){
            if(kata[i]===kamus[j]){
                result = result + kamus[j+1];
                // break;
                // console.log(result);
            }
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu