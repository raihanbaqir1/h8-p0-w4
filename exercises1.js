function angkaPrima(angka){
    // var result = false;
    // var pembagi = 235;
    if(angka===2||angka===3){
        return true;
    }
    if(angka%1===0 && angka%angka===0){
        if(angka%2===0 && angka%3===0){
            return false;
        } else if(angka%angka===0 && angka%3===0){
            return false;
        } else if(angka%angka===0 && angka%2===0){
            return false;
        } else{
            return true;
        }
    }
    //  return result;
}
    

// TEST CASES
// console.log(angkaPrima(2));
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false