import React from 'react';
import Button from 'react-bootstrap/Button';


function TopicButton({ topicName, setChosenTopic, variantName }) {

    return (
        <div>
           <Button
                variant={variantName}
                onClick={() => {
                    setChosenTopic(topicName);
                }}
            >{topicName}</Button>

        </div>
    );
}

export default TopicButton;