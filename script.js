console.log("script running!")


const dragon = document.querySelector(".dragon");
const writing = document.querySelector(".center-writing")


const changeImage = (e)=> {

    dragon.classList.toggle("hidden");
    writing.classList.toggle("hidden");
    console.log("hello world!");
}
dragon.addEventListener("click", changeImage)
writing.addEventListener("click", changeImage)

// const y = document.querySelector("#centerWriting");


// const clickMeNow = (e) => {
//     console.log(e.target)
//     e.target.innerHTML = '<img id = "dragon" src="https://ui-ex.com/images/chinse-clipart-easy-6.png">'

// }

// y.addEventListener('click', clickMeNow)
