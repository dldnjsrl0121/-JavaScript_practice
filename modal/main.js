const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const btn_description = {
  1 : {"title" : "Button 1", "description":"Button 1의 설명입니다."},
  2 : {"title" : "Button 2", "description":"Button 2의 설명입니다."},
  3 : {"title" : "Button 3", "description":"Button 3의 설명입니다."}
}
//close button func
closeBtn.onclick = function(){
  modal.style.display = "none";
}
//빈 여백 클릭 시 모달창 닫힘 func
window.onclick = function(){
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//모달창 오픈 func
function explain(n){
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  title.innerText = btn_description[n]["title"];
  description.innerText = btn_description[n]["description"];
  modal.style.display = "block";
}
