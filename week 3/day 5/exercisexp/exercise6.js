const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let resultString = '';
  
  for (const key in details) {
    resultString += details[key] + ' ';
  }
  
  console.log(resultString.trim());
  