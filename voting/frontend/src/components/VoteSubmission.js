// src/components/VoteSubmission.js
import React, { useState } from 'react';
import axios from 'axios';

const VoteSubmission = () => {
    const [voterId, setVoterId] = useState('');
    const [vote, setVote] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/votes/', {
                voter_id: voterId,
                vote: vote
            });
            setResponse(res.data.status);
        } catch (error) {
            console.error('Error submitting vote', error);
            setResponse('Error submitting vote');
        }
    };

    return (
        <div>
            <h2>Vote Submission</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Voter ID:</label>
                    <input
                        type="text"
                        value={voterId}
                        onChange={(e) => setVoterId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Vote:</label>
                    <input
                        type="text"
                        value={vote}
                        onChange={(e) => setVote(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Vote</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default VoteSubmission;
