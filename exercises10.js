function changeMe(arr) {
    // var object = { firstName:
      //  console.log(arr.length)
    // }
    if(arr.length===0){
      return ""
    }
    for(var i = 0; i < arr.length; i++){
      var str = "";
      // console.log(i);
      object = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 0,
      }  
      str = str +(i+1)+". "+arr[i][0]+" "+arr[i][1]+":";
      console.log(str);
      console.log(object);
    }  
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  console.log(changeMe([])); // ""