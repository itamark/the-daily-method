import React, { Component } from 'react';
import DateDisplay from '../DateDisplay';
import Method from '../Method';
import methods from '../../data/methods';
import { getDay, incrementDate, decrementDate } from '../../helpers/dateHelper';
import './style.css';

export default class Calendar extends Component {
    state = {
        date: new Date(),
        day: getDay(this.date),
        method: {},
    };

    updateMethod = () => {
        this.setState({ method: methods(this.state.day) });
    }

    updateDay = () => {
        this.setState({ day: getDay(this.state.date) }, this.updateMethod);
    }

    increment = () => {
        this.setState({ date: incrementDate(this.state.date) }, this.updateDay);
    }

    decrement = () => {
        this.setState({ date: decrementDate(this.state.date) }, this.updateDay);
    }

    componentDidMount(){
        this.updateMethod();
    }

    render() {
        const { date, method } = this.state;
        return (
            <div className="CalendarContainer">
                <header>
                    <button onClick={this.decrement}>-</button>
                    <DateDisplay date={date} />
                    <button onClick={this.increment}>+</button>
                </header>
                <section>
                    <Method method={method} />
                </section>
            </div>
        );
    }
}