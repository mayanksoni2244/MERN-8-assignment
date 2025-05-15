const input = document.querySelector("#num");
const button = document.querySelector(".sumbit");
const query1 = document.querySelector(".query1");
const tc = document.querySelector(".tc");
const query2 = document.querySelector(".query2");
const tc1 = document.querySelector(".tc1");
const res = document.querySelector(".res");
const r = document.querySelector(".randomgen");
const arr = [];
button.addEventListener("click", function () {
  const random = Math.round(Math.random() * 9 + 1);
  arr.push(input.value);
  tc.textContent=(arr[arr.length-1])
  r.textContent=random;
  if (Number(input.value) === random) {
    res.textContent='You entered a correct number , Congratulation';
    res.style.color='darkgreen';
    return(tc1.textContent=5)
  }
  else if (input.value===''){
    res.textContent='please, enter a number';
    res.style.color='red';
  }
  else{
    res.textContent='Sorry, Better luck next time';
    res.style.color='red';
    tc1.textContent=Number(tc1.textContent)-1;
    if (Number(tc1.textContent)===0){
      res.textContent='Game Over';
      res.style.color='red';
      input.disabled=true;
      button.style.cursor='not-allowed';
      button.disabled=true;
    }
  }
});

