const container=document.getElementById('map');

var options={
    center: new kakao.maps.LatLng(37.48659493110084 , 126.92926104080061),
    level: 3, //1~25
}

// 지도객체를 만들고 보여주기
var map=new kakao.maps.Map(container, options);

document.querySelector('.add-photo').onclick = () => {
    location.href = './post.html';
}

document.querySelector('.backBtn').onclick = () => {
        location.href='./main.html'; 
        };