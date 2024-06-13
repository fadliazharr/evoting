// src/components/ResultsDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResultsDisplay = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/votes/');
                setResults(res.data);
            } catch (error) {
                console.error('Error fetching results', error);
            }
        };

        fetchResults();
    }, []);

    return (
        <div>
            <h2>Results Display</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        {result.voter_id}: {result.encrypted_vote}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsDisplay;
