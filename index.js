
const submitBtn = document.querySelector(".submit");
const resetBtn = document.querySelector(".reset");
let values = document.querySelectorAll(".box_container > div");

const linearSearch = (num) => {
    

    const listArr = [];
    values.forEach((item) => {
        const value = item.textContent;
        listArr.push(parseInt(value));
    })
    console.log(listArr);

    if(!listArr.includes(num)){
        console.log(`it is not part of the list`)
        values.forEach((value) => {
            setInterval(() => {
                value.classList.add("searched");
            }, 2000)
        })
    }else {

        for(i = 0; i < listArr.length; i++){
            if(listArr[i] === num){
                console.log(`Number has been found ${listArr[i]}`);
                setTimeout(() => {
                    values[i].classList.add("selected");
                }, 1000)
                break;
            }
            else{
                console.log(`moving on to the next one`);
                    values[i].classList.add('searched');
            }
        }

    }


}


const runCode = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector(".item").value;
    let num = parseInt(inputValue);
    console.log(inputValue);
    linearSearch(num);
    
}

const resetCode = (e) => {
    e.preventDefault();
    const valueSel = document.querySelector(".selected");
    const valueSea = document.querySelectorAll(".searched");
    const inputValue = document.querySelector(".item");
    valueSea.forEach((val) => {
        val.classList.remove("searched");
    })
    valueSel.classList.remove("selected");
    inputValue.value = '';
}


submitBtn.addEventListener("click", runCode);
resetBtn.addEventListener("click", resetCode);
