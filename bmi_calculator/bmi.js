const weight=document.querySelector('#w')
const height=document.querySelector('#h')
const btn=document.querySelector('.btn')

function bmi(w,hinCm){
    const hinM=hinCm/100
    let bmi = w / (hinM * hinM)
    return bmi.toFixed(2)

}

btn.addEventListener('click',()=>{
    const w =parseFloat(weight.value);
    const h =parseFloat(height.value);

    if(!w || !h ){
        alert('Please enter both values')
    }
    else{
        const res = bmi(w,h)
        if (res<18.5){
            alert(`your bmi is ${res} and you are Underweight`)
        }
        else if (res>=18.5 && res<=24.5){
            alert(`your bmi is ${res} and you are Normal`)
        }
        else if (res>=25 && res<=29.9){
            alert(`your bmi is ${res} and you are Overweight`)
        }
    }
})