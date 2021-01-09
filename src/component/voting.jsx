import React, { Component } from 'react';

class Voting extends Component {

    voteNow = (e) =>{
        if(e.target.value === 'bjp'){
            var bjp = this.props.voteState.bjp;
            bjp +=1;
            this.props.voteState.bjp = bjp;
        }
        else if(e.target.value === 'congress'){
            var cong = this.props.voteState.congress;
            cong +=1;
            this.props.voteState.congress = cong;
        }
        else if(e.target.value === 'aap'){
            var ap = this.props.voteState.aap;
            ap +=1;
            this.props.voteState.aap = ap;
        }
        else if(e.target.value === 'rjd'){
            var rjd = this.props.voteState.rjd;
            rjd +=1;
            this.props.voteState.rjd = rjd;
        }
    }
    render(props) {
        return (
            <div>
            <div className="row mt-2">
                <h2 className="bg-light text-dark mb-3 py-2">Online Voting System</h2>
            <div className="col-md-3">
                    <div className="card bg-light ml-2">
                        <div className="card-title text-light bg-dark"><h3>BJP</h3></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="./img/bjp.webp" className="img-fluid" alt="bjp"/>
                                </div>
                                <div className="col-md-6 text-dark">
                                    <button value="bjp" onClick={this.voteNow} className="btn btn-outline-success px-1">Vote</button>
                                </div>
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
                                    <img src="./img/congress.png" className="img-fluid" alt="bjp"/>
                                </div>
                                <div className="col-md-6 text-dark">
                                <button value="congress" onClick={this.voteNow} className="btn btn-outline-success px-1">Vote</button>
                                </div>
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
                                    <img src="./img/aap.png" className="img-fluid" alt="bjp"/>
                                </div>
                                <div className="col-md-6 text-dark">
                                <button value="aap" onClick={this.voteNow} className="btn btn-outline-success px-1">Vote</button>
                                </div>
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
                                    <img src="./img/rjd.png" className="img-fluid" alt="bjp"/>
                                </div>
                                <div className="col-md-6 text-dark">
                                <button value="rjd" onClick={this.voteNow} className="btn btn-outline-success px-1">Vote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Voting;