const dateElement = document.querySelector(".date");
const body = document.querySelector("body");
const btn = document.querySelector("button");
const ans = document.querySelector(".ans")
const rfs = document.querySelector("#rfs")


btn.addEventListener("click", () => {
 


  birthdate = new Date(dateElement.value)
  const y1 = birthdate.getFullYear()
  const m1 = birthdate.getMonth() + 1
  const d1 = birthdate.getDate()



  const currentDate = new Date();
  const y2 = currentDate.getFullYear()
  const m2 = currentDate.getMonth() + 1
  const d2 = currentDate.getDate()
  // console.log(d,m,y);


 





    let y3, m3, d3
    y3 = y2 - y1
    if (m2 >= m1) {
      m3 = m2 - m1
    }
    else {
      y3--
      m3 = 12 + m2 - m1
    }
    if (d2 >= d1) {
      d3 = d2 - d1
    }
    else {
      m3--
      d3 = 30 + d2 - d1
    }
    if (m3 < 0) {
      m3 = 11;
      y3--
    }


    console.log(y3, m3, d3);





    ans.innerHTML = `you are  ${y3} years, ${m3} months , ${d3} days old`
  

});

rfs.addEventListener("click", () => {
 location.reload()
})