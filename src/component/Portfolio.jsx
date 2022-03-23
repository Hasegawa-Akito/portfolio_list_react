import React from 'react'

class Portfolio extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    //各ポートフォリオがクリックされたとき詳細を表示
    clickPortfolio () { 
        this.setState({show: true});
    }

    //closeボタンが押されたとき
    clickClose(){
        this.setState({show: false});
        console.log(this.state.show);
    }

    render () {
       let modal;

       //各ポートフォリオが押されたらモーダル表示
       if(this.state.show){

        modal = (
            <div className="overlay">
                <div class="card mb-4 rounded-3 shadow-sm ">
                    <div class="card-header py-3 text-center">
                        <h4 class="my-0 fw-normal">チャット型掲示板</h4>
                    </div>
                    <div class="card-body" className="modalContent">
                        <ul className="list-unstyled mt-4 detail">
                            <li class="my-3 text-muted"><h4><b>フロントエンド:</b>{this.props.frontend}</h4></li>
                            <li class="my-3 text-muted"><h4><b>バックエンド:</b>{this.props.backend}</h4></li>
                            <li class="my-3 text-muted"><h4><b>その他:</b>{this.props.other}</h4></li>
                            <li class="text-muted"><h4><b>説明:</b>{this.props.explanation}</h4></li>
                        </ul>
                        <ul class="list-unstyled mb-4">
                            <li><h4><a href={this.props.github}>github</a></h4></li>
                            <li class="my-3"><h4><a href={this.props.appURL}>アプリURL</a></h4></li>
                        </ul>
                        <button type="button" onClick={()=>{this.clickClose()}} class="w-70 mb-3 btn btn-lg btn-outline-secondary  text-center">close</button>
                    </div>
                </div>
            </div>
        );

       }

       return (
        <div class="col-md-4 shadow-sm">
            {modal}
            <div onClick={()=>{this.clickPortfolio()}}>
                <span class="fa-6x">
                    <i class={this.props.icon}></i>
                </span>
                <h4 class="my-3">{this.props.name}</h4>
                
                {this.props.shortSent}
            </div>
        </div>
       );
    }
    
}

export default Portfolio