import React, { useState, useEffect } from 'react';
import DetailsItem from './DetailsItem';

const Details = () => {
    const [details, setDetails] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {


    fetch('https://api.tvmaze.com/search/shows?q=avengers')
    .then(response => response.json())
    .then(data => setDetails(data));
        // eslint-disable-next-line
    }, []);

    const  handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.tvmaze.com/search/shows?q=${text}`)
        .then(response => response.json())
        .then(data => setDetails(data));

        setText('');
      }

    const handleChange = (e) => {setText(e.target.value)};

    return(
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <h2 className="text-center">Search</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} value={text} />
            </form>

            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-5">


            { details.map(detail => <DetailsItem key={detail.id} detail={detail} /> ) }

                {/* <DetailsItems />
                <DetailsItems />
                <DetailsItems />
                <DetailsItems />
                <DetailsItems />
                <DetailsItems /> */}
            </div>
        </div>
    </section>

    );
}

export default Details;