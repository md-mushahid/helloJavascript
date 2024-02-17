for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }

for (let step = 0; step < 10; step++) {
    if(step % 2 == 0){ 
    continue;
    }
    else if(step == 7){ 
    break;
    }
    else{ 
    console.log(step);
    }
  }

// While Loop 

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}