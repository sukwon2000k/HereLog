const createRoom = document.querySelector('.create-room');
const createBox = document.querySelector('.create-box');
const cancelBtn = document.querySelector('#cancelBtn')
//새방만들기 누르면 창이 뜸
createRoom.onclick = () => {
    createBox.classList.add('show');
};

//방생성 누르면 방이 만들어짐

//취소 누르면 입력창 사라짐, 이미지 입력한것도 사라짐
cancelBtn.onclick = () => {
    createBox.classList.remove('show');

    document.querySelector('#room-name').value = '';
    document.querySelector('#room-img').value = '';

    const img = document.querySelector('#preimg');
    img.src = '';
    img.style.display = 'none';
}
//이미지 미리보기
function changeImg(){
    const file=document.getElementById('room-img').files;
    const fr = new FileReader();
    const img = document.querySelector('#preimg');
    fr.onload=function(){
        document.getElementById('preimg').src=fr.result;
    }
    fr.readAsDataURL(file[0]);
    img.style.display = 'block';
}

        document.querySelector('#createBtn').onclick = () => {
        location.href='./room.html'; //#########나중에 제출로해서 삭제할거
        };