import React from 'react'
import profileImage from "../Images/myImage.jpg";
import Detail from './Detail';


class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    //各ポートフォリオがクリックされたとき詳細を表示
    handleClick () { 
        this.setState({show: true});
    }

    render () {
       return (
        <div>
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
                <section class="page-section border-top pt-3">
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

          
            {/* 詳細表示コンポーネント */}
            <Detail show={this.state.show}/>

            <div class="container">
                <div class="row text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col-md-4 shadow-sm" onClick={()=>{this.handleClick()}}>
                        <span class="fa-6x">
                            <i class="fa-regular fa-calendar-days"></i>
                        </span>
                        <h4 class="my-3">予定共有アプリ</h4>
                        <p class="text-muted">
                            簡単にグループを作成でき、そのグループ内で自分のアカウントを作成して予定を入力、閲覧することができます。<br></br>
                            基本的なMVCについて理解を深めるために作成しました。
                        </p>
                    </div>
                    <div class="col-md-4 shadow-sm">
                        <span class="fa-6x">
                            <i class="fa-regular fa-comments"></i>
                        </span>
                        <h4 class="my-3">チャット型掲示板</h4>
                        <p class="text-muted">
                            非同期でやりとりが行えるチャット型の掲示板です。<br></br>
                            Vue.jsを用いた非同期通信を学ぶために作成しました。Dockerを使用して開発を行いました。
                        </p>
                    </div>
                    <div class="col-md-4 shadow-sm">
                        <span class="fa-6x">
                            <i class="fa-solid fa-gamepad"></i>
                        </span>
                        <h4 class="my-3">動物お世話アプリ</h4>
                        <p class="text-muted">
                            一緒に開発をしたペットロボットと連携してアプリ上でペットのお世話できます。
                            Unityを使用しiPhoneアプリを開発しました。
                        </p>
                    </div>

                    <div class="col-md-4 shadow-sm">
                        <span class="fa-6x">
                            <i class="fa-solid fa-laptop-code"></i>
                        </span>
                        <h4 class="my-3">ポートフォリオ一覧</h4>
                        <p class="text-muted">
                            自分が作成したポートフォリオを紹介するwebサイトです。
                        </p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
       );
    }
    
}

export default MainContent