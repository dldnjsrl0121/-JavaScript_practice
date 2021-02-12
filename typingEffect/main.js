const txtElement = document.querySelector('.txt-type');
const words = ["Front-end", "성장하는", "소통하는", "즐기는"];
let txt="";
let index = 0;
let wait = 3000;
let isDeleting = false;

const type = function(){
    const current = index % words.length;
    const fullTxt = words[current];
    //기본 스피드 설정 - 글씨 작성 시
    let speed = 200;
    
    //단어를 쓰는 중인지 지우는 확인
    if(!isDeleting){
        //단어를 쓰는 중이라면
        txt = fullTxt.substring(0, txt.length +1);
        //fullTxt에서 현재 단어에 1글자 추가하여 추출
    }else{
        //단어를 지우는 중
        txt = fullTxt.substring(0,txt.length - 1);
        //1글자 적게 추출 
        //지우는 중에는 속도 더 빠르게
        speed /=2;
    }

    //새로 추출한 단어로 엘리먼트 변경
    txtElement.innerHTML = `<span class="txt">${txt}</span>`;


    if(!isDeleting&&txt==fullTxt){
        //현재 단어를 모두 완성했다면
        speed = wait;
        isDeleting = true;
    }else if(isDeleting && txt == ""){
        //모두 다 지웠다면
        isDeleting = false;
        index++; //다음단어로 전환
        speed = 500; //잠시 기다린 후 다음 단어 타이핑 시작하도록 설정
    }

    setTimeout(()=>type(), speed);
}

document.addEventListener('DOMContentLoaded', type);