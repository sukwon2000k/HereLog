<?php
    header('Content-Type:text/html; charset=utf-8');
    //회원가입 경로가 아니라 링크를 타고온거면 쫒아내기
    if($_SERVER['REQUEST_METHOD'] != 'POST'){
    header("Location: ../index.html");
    exit;
    }
    

    $name=$_POST['name'];
    $nickname=$_POST['nickname'];
    $id=$_POST['id'];
    $password=$_POST['password'];
    
    if($name == "" || $nickname == "" || $id == "" || $password == ""){
        echo "<script>
            alert('모든 항목을 입력해주세요. 빈 칸은 허용되지 않습니다.');
            history.back(); // 사용자가 입력하던 창으로 뒤로가기
        </script>";
        exit; // 코드 실행 종료
    }
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    

    $db= mysqli_connect('localhost','hello2026','a1s2d3f4!','hello2026');
    mysqli_query($db, 'set names utf8');
    //아이디 중복 체크
    $checksql="SELECT * FROM HereLog WHERE id='$id'";
    $nicknamechecksql="SELECT * FROM HereLog WHERE nickname='$nickname'";
    $result=mysqli_query($db,$checksql);
    $nickresult=mysqli_query($db,$nicknamechecksql);
    
    if(mysqli_num_rows($result)>0){//아이디 중복이면 쫒아내기
        echo "<script>alert('이미 등록된 아이디입니다. 다시 입력해 주세요.');
            location.href='../index.html';
            </script>";
        
    }else if(mysqli_num_rows($nickresult)>0){// 닉네임 중복이면 쫒아내기
        echo "<script>alert('이미 등록된 닉네임입니다. 다시 입력해 주세요.');
            location.href='../index.html';
            </script>";

    }else{
        $sql="INSERT INTO HereLog(name,nickname,id,password) VALUES('$name','$nickname','$id','$password')";
        $result=mysqli_query($db,$sql);

        mysqli_close($db);
        echo "<script>alert('$nickname 님 환영합니다!');
            location.href='../index.html';
            </script>";
        
    }


?>