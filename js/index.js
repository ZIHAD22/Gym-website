function showPfanction(){
    let btn = document.querySelector(".allpass")
    if (btn.type === "password") {
        btn.type = "text";
      } else {
        btn.type = "password";
      }
}
function showCpfanction(){
  let btn = document.querySelector(".Cfpass")
  if (btn.type === "password") {
      btn.type = "text";
    } else {
      btn.type = "password";
    }
}