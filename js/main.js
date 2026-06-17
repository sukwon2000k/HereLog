const createRoom = document.querySelector('.create-room');
const createBox = document.querySelector('.create-box');
const cancelBtn = document.querySelector('#cancelBtn')
//새방만들기 누르면 창이 뜸
createRoom.onclick = () => {
    createBox.classList.add('show');
};

//방생성 누르면 방이 만들어짐

//취소 누르면 입력창 사라짐
cancelBtn.onclick = () => {
    createBox.classList.remove('show');
}