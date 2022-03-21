import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/myImage.jpg";

const MainContent = () => {
  return (
    <div class="album bg-light">
        <section class="text-center container">
            <div class="py-5">
                <h1>Hasegawa-Akito</h1>

                <img src={profileImage} className="profileImage" />

                <p class="my-3">
                    名古屋の大学に通う理系大学院生です。<br></br>
                    研究ではpythonを使ったデバイスのソフトウェア開発を行なっています。
                    webアプリ開発などにも興味を持ち、いくつかポートフォリオを作ってみたりしています。<br></br>
                    完成像を思い描きながらコードを書く時間がたまらなく好きです。
                </p>
            </div>
            <section class="page-section">
                <div className="service">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
                        <h3 class="section-subheading text-muted">
                        私が作った作品一覧です
                        </h3>
                    </div>

                </div>
            </section>
        </section>
        
        <div class="container">
            <div class="row text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                <div class="col-md-4">
                    <span class="fa-stack fa-6x">
                        <i class="fa-regular fa-calendar-days"></i>
                    </span>
                    <h4 class="my-3">予定共有アプリ</h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                        maxime quam architecto quo inventore harum ex magni, dicta
                        impedit.
                    </p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-6x">
                        <i class="fa-regular fa-comments"></i>
                        <i class="fa-regular fa-clipboard"></i>
                    </span>
                    <h4 class="my-3">チャット型掲示板</h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                        maxime quam architecto quo inventore harum ex magni, dicta
                        impedit.
                    </p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-6x">
                        <i class="fa-solid fa-dog"></i>
                        <i class="fa-solid fa-gamepad"></i>
                    </span>
                    <h4 class="my-3">動物お世話アプリ</h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                        maxime quam architecto quo inventore harum ex magni, dicta
                        impedit.
                    </p>
                </div>

                <div class="col-md-4">
                    <span class="fa-stack fa-6x">
                        <i class="fa-solid fa-laptop-code"></i>
                    </span>
                    <h4 class="my-3">ポートフォリオ一覧</h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                        maxime quam architecto quo inventore harum ex magni, dicta
                        impedit.
                    </p>
                </div>
                
                
            </div>
        </div>
        
    </div>
    
  )
}

export default MainContent