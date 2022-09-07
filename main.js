const jsConfetti = new JSConfetti()
        

const start = () =>
 {
    setTimeout(function() {
        jsConfetti.addConfetti()
    });
 };

const button = document.getElementById('btn')

button.addEventListener("click", myFunction);
function myFunction() {

    document.getElementById("btn").innerHTML = "Happy BirthDay Jana";
    btn.classList.toggle("active");
    start() ;
}