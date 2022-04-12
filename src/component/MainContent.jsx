import React from 'react'
import profileImage from "../Images/myImage.jpg";
import Portfolio from './Portfolio';


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
       const portfolioList = [
            {
                name: "ありがとう可視化アプリ",
                shortSent: (<p class="text-muted justify">ありがとうをハートで表現し可視化することができます。リアルタイムでの他デバイスとのやりとりが可能です。</p>),
                icon: "fa-regular fa-heart",
                frontend: "　React, bootstrap",
                backend: "　node.js",
                other: "　",
                explanation: "　ありがとうを含むメッセージの投稿でハートを大きくできます。socket.ioを用いているのでリアルタイムでのメッセージやハートの変化を確認できます。",
                github: "https://github.com/Hasegawa-Akito/node_heartApp",
                appURL: "https://thanks-app-node.herokuapp.com/heart",
            },
            {
                name: "ポートフォリオ一覧",
                shortSent: (<p class="text-muted justify">本サイトです。自分が作成したポートフォリオを紹介するwebサイトです。</p>),
                icon: "fa-solid fa-laptop-code",
                frontend: "　React, bootstrap",
                backend: "　",
                other: "　",
                explanation: "　本サイトになります。Vue.jsとの比較としてReactを用いて作成しました。",
                github: "https://github.com/Hasegawa-Akito/portfolio_list_react",
                appURL: "https://hasegawa-akito.github.io/portfolio_list_react/",
            },
            {
                name: "動物お世話アプリ",
                shortSent: (<p class="text-muted justify">一緒に開発をしたペットロボットと連携してアプリ上でペットのお世話できます。<br></br>Unityを使用しiPhoneアプリを開発しました。</p>),
                icon: "fa-solid fa-gamepad",
                frontend: "　",
                backend: "　",
                other: "　Unity/C#を用いたiosアプリ開発",
                explanation: "　名古屋市主催の名古屋ブーストにてチームで開発を行なったソリューションです。アプリURLはソリューション説明のためのHPのURLとなっています。こちらのHP自体は作成していません",
                github: "https://github.com/Hasegawa-Akito/famimal-unity-cs",
                appURL: "https://famimal.nob-log.com/famimal/",
            },
            {
                name: "チャット型掲示板",
                shortSent: (<p class="text-muted justify">非同期でやりとりが行えるチャット型の掲示板です。<br></br>Vue.jsを用いた非同期通信を学ぶために作成しました。Dockerを使用して開発を行いました。</p>),
                icon: "fa-regular fa-comments",
                frontend: "　Vue.js, bootstrap",
                backend: "　Laravel",
                other: "　Docker, AWS使用",
                explanation: "　Axiosの非同期通信を用いたチャットイメージの掲示板です。Dockerを用いての開発やAWSの無料枠を用いてのデプロイを行いました。",
                github: "https://github.com/Hasegawa-Akito/docker-bulletin-board",
                appURL: "http://54.248.47.219/home",
            },
           {name: "予定共有アプリ",
            shortSent: (<p class="text-muted justify">簡単にグループを作成でき、そのグループ内で自分のアカウントを作成して予定を入力、閲覧することができます。<br></br>基本的なMVCについて理解を深めるために作成しました。</p>),
            icon: "fa-regular fa-calendar-days",
            frontend: "　Vue.js, bootstrap",
            backend: "　Laravel",
            other: "　heroku使用",
            explanation: "　MVCモデルについて理解を深めることを意識してLarvelを使用し作成しました。",
            github: "https://github.com/Hasegawa-Akito/scheduler",
            appURL: "https://scheduler-management-app.herokuapp.com/roomlogin",
            }

       ];
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


            <div class="container">
                <div class="row text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {/* portfolioの情報を順に取り出す */}
                    {portfolioList.map((portfolioItem) => {
                        return (
                            <Portfolio
                                name={portfolioItem.name}
                                shortSent={portfolioItem.shortSent}
                                icon={portfolioItem.icon}
                                frontend={portfolioItem.frontend}
                                backend={portfolioItem.backend}
                                other={portfolioItem.other}
                                explanation={portfolioItem.explanation}
                                github={portfolioItem.github}
                                appURL={portfolioItem.appURL}
                            />
                        );
                    })}
                    
                    
                </div>
            </div>
            
        </div>
       );
    }
    
}

export default MainContent