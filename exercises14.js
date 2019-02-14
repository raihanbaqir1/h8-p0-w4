function naikAngkot(arrPenumpang) {
    if(arrPenumpang.length===0){
        return [];
    }
    var result = [];
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    // console.log(rute);
    var harga = 2000;
    var bayar = 0;
    for(var i = 0; i < arrPenumpang.length; i++){
        var ongkos = 0;
        // console.log(arrPenumpang[i]);
        // var counter = 0;
        var object = {
            penumpang: "",
            naikDari: "",
            tujuan: "",
            bayar: "",
        }
        object.penumpang = arrPenumpang[i][0];
        object.naikDari = arrPenumpang[i][1];
        object.tujuan = arrPenumpang[i][2];
        var rute1 = 0;
        var rute2 = 0;
        for(var j = 0; j < rute.length; j++){
            if(arrPenumpang[i][1]===rute[j]){
                rute1 = j;
            } else if(arrPenumpang[i][2]===rute[j]){
                rute2 = j;
            }
        } 
        ongkos = rute2 - rute1;
        bayar = harga * ongkos;
        object.bayar = bayar; 
        // console.log(object);
        result.push(object);
    }
    return result;    
}

    




  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
//   console.log(naikAngkot([])); //[]