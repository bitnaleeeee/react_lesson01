import React, { useState } from 'react';
import './Login.scss';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const App = () => {

  const [val, setVal] = useState('비활성');
  const [id, idValue] = useState('');
  const [pw, pwValue] = useState('');

  function saveUserld(e) {

    idValue(test);
    pwValue(e.target.value);

    if (idValue.length >= 5 && pwValue.length >= 5) {

      setVal('활성');


    } else {


      setVal('비활성');

    }
  }
  const navigate = useNavigate();                     // 2

  const goToMain = () => {                            // 3
    navigate('/main');

  };


  return (
    <div className="login">
      <article className="article">

        <div className="logo">
          westargram

        </div>



        <div className="inputBox">
          <input type="text" id="id" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={saveUserld} />
          <input type="password" id="pw" placeholder="비밀번호" onChange={saveUserld} />
          <button type="button" id="button" disabled={val == '활성' ? false : true}
            onClick={goToMain}>로그인</button>
        </div>

        <div className="forget">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>


      </article>

    </div>
  )

};

export default App;