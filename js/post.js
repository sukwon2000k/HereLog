const textarea =
            document.querySelector('#content');

        const count =
            document.querySelector('#count');

        textarea.addEventListener('input', () => {

            count.innerHTML =
                textarea.value.length;

        });

        function previewImage(){

            const fileInput =
                document.querySelector('#file-input');

            const previewArea =
                document.querySelector('#preview-area');

            const previewImg =
                document.querySelector('#preview-img');

            const uploadBtn =
                document.querySelector('.upload-btn');

            const file =
                fileInput.files[0];

            if(!file) return;

            const fr = new FileReader();

            fr.onload = function(e){

                previewImg.src =
                    e.target.result;

                previewArea.classList.add('show');
            }

            fr.readAsDataURL(file);

            uploadBtn.classList.add('small');
            document.querySelector('#uploadIcon').innerHTML = '📷';
            document.querySelector('#uploadText').innerHTML = '사진 변경하기';


        }

        document
        .querySelector('#removeImg')
        .onclick = () => {

            document.querySelector('#file-input').value = '';

            document.querySelector('#preview-img').src = '';

            document.querySelector('.upload-btn').classList.remove('small');

            document.querySelector('#uploadIcon').innerHTML = '＋';
            document.querySelector('#uploadText').innerHTML = '사진 등록하기';

            document
            .querySelector('#preview-area')
            .classList.remove('show');
        };
        
        

        document
        .querySelector('#submitBtn')
        .onclick = function(){

            this.disabled = true;

            this.innerHTML = '저장 중...';

            // form submit
        };

        document.querySelector('.backBtn').onclick = () => {
            location.href='./room.html';
        };

        document.querySelector('#submitBtn').onclick = () => {
            location.href='./room.html'; //###########나중에 폼제출하면 삭제할거
        };
