<?php
    header('Content-Type:text/html; charset=utf-8');

    $id=$_POST['id'];
    $password=$_POST['password'];
    if($id == "" || $password == ""){
        echo "<script>
            alert('모든 항목을 입력해주세요. 빈 칸은 허용되지 않습니다.');
            history.back(); // 사용자가 입력하던 창으로 뒤로가기
        </script>";
        exit; // 코드 실행 종료
    }

    $db=mysqli_connect('localhost','hello2026','a1s2d3f4!','hello2026');
    mysqli_query($db,'set names utf8');
    $sql="SELECT * FROM HereLog WHERE id='$id'";
    $result=mysqli_query($db,$sql);

    if(mysqli_num_rows($result)>0){
        $row= mysqli_fetch_assoc($result);

    }

    if(password_verify($password, $row['password'])){
            echo "<script>alert('{$row['nickname']} 님 환영합니다!');
                  location.href='../main.html';
                  </script>";
        }else{
            echo "<script>alert('비밀번호가 틀렸습니다. 다시 확인하세요.');
                  location.href='../index.html';
                  </script>";
        }









?>