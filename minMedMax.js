const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let min;
  let mid;
  let max;
  if(n1 < n2 && n1 < n3){
    min=n1;
  }else if(n2 < n1 && n2 < n3){
    min=n2;
  }else if(n3 < n1 && n3 < n2){
    min=n3;
  }
  if(n1 > n2 && n1 > n3){
    max=n1;
  }else if(n2 > n1 && n2 > n3){
    max=n2;
  }else if(n3 > n2 && n3 > n1){
    max=n3;
  }
  if(n1>n2&&n1<n3){
    mid=n1;
  }else if(n1>n3&&n1<n2){
    mid=n1;
  }else if(n2>n1&&n2<n3){
    mid=n2;
  }else if(n2>n3&&n2<n1){
    mid=n2;
  }else if(n3>n1&&n3<n2){
    mid=n3;
  }else if(n3>n2&&n3<n1){
    mid=n3;
  }
  return {min: min,mid: mid,max: max}
}

module.exports = minMedMax
