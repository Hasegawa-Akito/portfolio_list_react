import React from 'react'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    render () {
        
        if(this.props.show){
        return (
            <div className="overlay">
                <div class="card mb-4 rounded-3 shadow-sm ">
                    <div class="card-header py-3 text-center">
                        <h4 class="my-0 fw-normal">チャット型掲示板</h4>
                    </div>
                    <div class="card-body" className="modalContent">
                        <ul className="list-unstyled mt-4 detail">
                            <li class="my-3"><h4><b>フロントエンド:</b>　Vue.js, Vuetify</h4></li>
                            <li class="my-3"><h4><b>バックエンド:</b>　Laravel</h4></li>
                            <li class="my-3"><h4><b>その他:</b>　Docker, AWS使用</h4></li>
                            <li><h4><b>説明:</b>　Vue.jsでの非同期通信を用いたチャットイメージの掲示板です。<br></br>Dockerを用いての開発やAWSの無料枠を用いてのデプロイを行いました。</h4></li>
                            
                        </ul>
                        <ul class="list-unstyled mb-4">
                            <li><h4><a href="https://github.com/Hasegawa-Akito/portfolio_list_react">github</a></h4></li>
                            <li class="my-3"><h4><a href="http://54.248.47.219/home">アプリURL</a></h4></li>
                        </ul>
                        <button type="button" class="w-70 mb-3 btn btn-lg btn-outline-secondary  text-center">close</button>
                    </div>
                </div>
            </div>
           );
           }
           else{
               return "";
           }
    }
    
}

export default Detail