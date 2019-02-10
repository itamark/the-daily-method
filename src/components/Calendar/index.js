import React, { useState, useEffect } from 'react';
import DateDisplay from '../DateDisplay';
import Method from '../Method';
import methods from '../../data/methods';
import { getDay, incrementDate, decrementDate } from '../../helpers/dateHelper';
import './style.css';

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState(getDay(date));
    const [method, setMethod] = useState({});

    useEffect(() => {
        setMethod(methods(day));
    }, [day]);

    useEffect(() => {
        setDay(getDay(date));
    }, [date]);

    return (
        <div className="CalendarContainer">
            <header>
                <button onClick={() => setDate(decrementDate(date))}>-</button>
                <DateDisplay date={date} />
                <button onClick={() => setDate(incrementDate(date))}>+</button>
            </header>
            <section>
                <Method method={method} />
            </section>
        </div>
    );
}
