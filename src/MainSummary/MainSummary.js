import React, {Component} from 'react';
import SummaryList from "../SummaryList/SummaryList";
import SummaryTotal from './SummaryTotal/SummaryTotal'

class MainSummary extends Component {

    render() {

        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];

            return (
                <SummaryList
                    key={featureHash} value={selectedOption.name}  cost={selectedOption.cost}
                />
            )
        });

        const total = Object.keys(this.state.selected).reduce( (acc, curr) => acc + this.state.selected[curr].cost,
            0
        );




        return (
            <div>
                <section className="main__summary">
                    <h2>Your cart</h2>
                    {summary}
                <SummaryTotal total={total}/>
                </section>
            </div>
        );
    }
}

export default MainSummary;