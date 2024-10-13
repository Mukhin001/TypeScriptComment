import React, { FC } from "react";

interface CommentsAnswerProps {
    answer?: 
        {
            idAnswer: number,
            nameAnswer: string,
            answerComment: string,
            date: string,
        }
};

const CommentsAnswer:FC<CommentsAnswerProps> = ({ answer }) => {
    
    return ( 
            <article style={{marginLeft: 50}} data-answer='answer'>
                <h4>{answer?.nameAnswer}</h4>
                <p>{answer?.answerComment}</p>
                <strong>{answer?.idAnswer}</strong>
                <section>
                    <time>{answer?.date}</time>
                </section>
            </article>
     );
};
 
export default CommentsAnswer;