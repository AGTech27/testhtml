function hello() {
    alert("Hello how are you doing?");
  }
  
  function showtime() {
    var now = new Date();
    alert(now);
  }
  const button=document.getElementById("button")
  console.log(button)
  button.addEventListener("click",showtime)