import React, {Component} from 'react';

class SummaryList extends Component {

    render()  {

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];


    });



        return (
            <div>
                return (
                <div className="summary__option" key={key}>
                <div className="summary__option__label">{name} </div>
                <div className="summary__option__value">{value}</div>
                <div className="summary__option__cost">
                {USCurrencyFormat.format(cost)}
                </div>
                </div>
            </div>
        );
    }
}

export default SummaryList;