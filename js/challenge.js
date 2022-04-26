let intervalID 
const timer = function() {
        intervalID = setInterval(function() {
            var a = document.getElementById("counter"),
                b = parseInt(a.innerText);
            a.innerText = b + 1
        }, 1000)
    }
timer()

minus = document.getElementById("minus")
plus = document.getElementById("plus")
heart = document.getElementById("heart")
pause = document.getElementById("pause")
commentForm = document.getElementsByTagName("form")[0];    





minus.addEventListener("click", function() {
    const a = document.getElementById("counter");
    const b = parseInt(a.innerText);
    a.innerText = b - 1
}) 

plus.addEventListener("click", function() {
    const a = document.getElementById("counter")
    const b = parseInt(a.innerText);
    a.innerText = b + 1
})


heart.addEventListener("click", function () {
    const a = document.getElementById("counter")
    const b = parseInt(a.innerText)
    const c = document.querySelector(".likes")
    function onClick() {

        return clicks += 1;
    }
    const d = document.getElementById(`${b}`)
        if(d === null) {
        clicks = 0
        let likes = document.createElement(`li`)
        likes.innerHTML = `${b} has been clicked ` +  onClick() + " times!"
        likes.id = `${b}`
        c.append(likes)
    } else {
        d.innerHTML = `${b} has been clicked ` +  onClick() + " times!"
    }
console.log(d)
})

pause.addEventListener(`click`, function() {
  if (pause.innerText === "pause") {
      pause.innerText = "resume";
      const disabledIDs = document.querySelectorAll("#minus, #heart, #plus, #submit")
      console.log(disabledIDs);
      disabledIDs.forEach(ID => {
          ID.disabled = true
      })
      console.log(disabledIDs.disabled)
      clearInterval(intervalID)
    } else {
        const disabledIDs = document.querySelectorAll("#minus, #heart, #plus, #submit")
        disabledIDs.forEach(ID => {
            ID.disabled = false
        })
        timer()
        pause.innerText = "pause"
    }
    
})

commentForm.addEventListener("submit", function(a) {
    a.preventDefault();
    var b = this.children[0],
        c = b.value;
    b.value = "";
    var d = document.querySelector(".comments"),
        e = document.createElement("p");
    e.innerText = c, d.appendChild(e)
});