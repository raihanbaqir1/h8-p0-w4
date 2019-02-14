function angkaPrima(angka){
    var pembagi = 2;
    
    var flag = true;
    while(pembagi < angka){
        if(angka%pembagi===0){
            return false;
        }
        pembagi = pembagi + 1;
        // if(pembagi > angka){
        //     flag = false;
        // }
           
      
    }
    return flag;
    
}
    

// TEST CASES
console.log(angkaPrima(2)); //true
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(25)); // false
console.log(angkaPrima(49)); //false