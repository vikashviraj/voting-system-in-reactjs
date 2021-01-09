import React from 'react';

const Home = (props) => {
    var bjp = props.voteState.bjp;
    var cong = props.voteState.congress;
    var aap = props.voteState.aap;
    var rjd = props.voteState.rjd;

    var arr = [bjp,cong,aap,rjd];
    var arr1 = ['bjp','cong','aap','rjd'];
    var list = [];

    for(var i = 0; i<4; i++){
        for(var j = 0; j<4; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
                
            }
        }
    }
    for(i=0; i<4; i++){
        if(arr1[i] === 'bjp'){
            list.push(<p><img src="./img/bjp.webp" alt="bjp" /> <b className="text-dark">BJP</b> <span className="text-dark">{props.voteState.bjp}</span></p>);
        }
        else if(arr1[i] === 'cong'){
            list.push(<p><img src="./img/congress.png" alt="cong" /> <b className="text-dark">Congress</b> <span className="text-dark">{props.voteState.congress}</span></p>);
        }else if(arr1[i] === 'aap'){
            list.push(<p><img src="./img/aap.png" alt="cong" /> <b className="text-dark">APP</b> <span className="text-dark">{props.voteState.aap}</span></p>);
        }else if(arr1[i] === 'rjd'){
            list.push(<p><img src="./img/rjd.png" alt="cong" /> <b className="text-dark">RJD</b> <span className="text-dark">{props.voteState.rjd}</span></p>);
        }
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-md-3">
                    <div className="card bg-light ml-2">
                        <div className="card-title text-light bg-dark"><h3>BJP</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="./img/bjp.webp" className="img-fluid" alt="bjp" />
                                </div>
                                <div className="col-md-6 text-dark"><h3>{props.voteState.bjp}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-light ml-2">
                        <div className="card-title text-light bg-dark"><h3>Congress</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="./img/congress.png" className="img-fluid" alt="bjp" />
                                </div>
                                <div className="col-md-6 text-dark"><h3>{props.voteState.congress}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-light ml-2">
                        <div className="card-title text-light bg-dark"><h3>AAP</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="./img/aap.png" className="img-fluid" alt="bjp" />
                                </div>
                                <div className="col-md-6 text-dark"><h3>{props.voteState.aap}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-light ml-2">
                        <div className="card-title text-light bg-dark"><h3>RJD</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="./img/rjd.png" className="img-fluid" alt="bjp" />
                                </div>
                                <div className="col-md-6 text-dark"><h3>{props.voteState.rjd}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-3 px-2 py-2 offset-md-4 bg-light vote-rank">
                        {list}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;