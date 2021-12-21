// getRandomSample 함수로 하나의 데이터를 생성하는 예제

function getRandomSample() {
    // 독립변수 x, 종속변수 y 생성
    let x, y
    // x의 값은 [x1, x2] 이렇게 생성 
    // x의 값은 -1 ~ 1 사이의 값을 생성하도록 합니다. 
    x = [Math.random() * 2 - 1, Math.random() * 2 - 1]
  
    // xor에 맞게 변수를 생성 
    // x1  x2  y
    // 0   0   0
    // 1   0   1
    // 0   1   1
    // 1   1   0
  
    // 만약 x1(x[0]), x2(x[1])의 값이 둘다 양수 혹은 둘다 음수라면 
    if ((x[0] > 0 && x[1] > 0) || (x[0] < 0 && x[1] < 0 )){
      y = 0 // y 값은 0 이 됩니다. 
    } else {
      y = 1 // 위 조건이 아니라면 즉, 
            // 한쪽이라도 값의 부호가 다르다면 y값은 1이 됩니다. 
    }
    // 그리고 x값과 y값을 반환합니다. 
    return [x, y]
  }
  
  // getNRandomSamples 함수는 다수의 무작위 값을 생성합니다.
  function getNRandomSamples(n) {
    // 다수의 데이터를 받을 변수를 let 예약어로 생성합니다. 
    let xs = []; // 이 변수에는 사용자가 원하는 수 만큼의 데이터를 저장할 것입니다. 
    let ys = [];
  
    // 반복문 구조를 활용하여 사용자가 함수에 입력한 n값 만큼 반복
    for (let iter = 0; iter < n; iter++){
      let x, y // 하나 생성된 변수를 받기위한 변수 선언  
      // 상단에서 정의한 XOR GATE 구조에 맞게 독립변수와 종속변수를 생성하는 
      // 함수를 불러와줍니다.그리고 함수의 반환값을 [x,y]에 저장합니다. 
      [x,y] = getRandomSample() 
      
      // push()를 활용해 생성된 변수x,y를 각각 xs, ys의
      // 맨 끝에 저장합니다. 
      // 만약 맨 앞에 저장하고자 한다면 unshift()를 사용합니다.
      xs.push(x)   
      ys.push(y)
    }
    // 반복을 모두 마쳤다면 return을 통해 반환시켜줍니다. 
    return [xs, ys]
  }
  
  xor_data = getNRandomSamples(10);
  console.log(`무작위로 생성된 데이터입니다.`);
  console.log(xor_data);