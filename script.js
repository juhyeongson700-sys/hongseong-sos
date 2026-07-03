let latitude = "";
let longitude = "";

window.onload = function () {
    getLocation();
};

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition, showError);

    } else {

        document.getElementById("status").innerHTML = "GPS를 지원하지 않는 기기입니다.";

    }

}

function showPosition(position){

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    document.getElementById("status").innerHTML="위치 확인 완료";

    document.getElementById("lat").innerHTML="위도 : "+latitude;

    document.getElementById("lng").innerHTML="경도 : "+longitude;

}

function showError(){

    document.getElementById("status").innerHTML="위치를 가져올 수 없습니다.";

}

function speakLocation(){

    let msg=new SpeechSynthesisUtterance();

    msg.lang="ko-KR";

    msg.text="현재 위치를 확인했습니다. 긴급 상황이면 아래 버튼을 이용해 신고하세요.";

    speechSynthesis.speak(msg);

}

function sendSMS119(){

    let text=
`[119 긴급신고]

현재 위치

위도 : ${latitude}

경도 : ${longitude}

구조를 요청합니다.`;

    location.href="sms:119?body="+encodeURIComponent(text);

}

function sendSMS112(){

    let text=
`[112 긴급신고]

현재 위치

위도 : ${latitude}

경도 : ${longitude}

신고합니다.`;

    location.href="sms:112?body="+encodeURIComponent(text);

}