const endDate = " 14 january 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;//milisec to second

if(diff<0)return
  input[0].value = Math.floor(diff/3600/24)
  input[1].value=Math.floor(diff/24/3600)%24
  input[2].value=Math.floor(diff/60)%60
  input[3].value=Math.floor(diff)%60
//convert days
}
clock()

setInterval(()=>{
    clock()
},1000)