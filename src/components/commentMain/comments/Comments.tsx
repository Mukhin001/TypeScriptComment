import React, { FC } from "react";
import CommentsAnswer from "./commentsAnswer/CommentsAnswer.tsx";
import ToAnswer from "./toAnswer/ToAnswer.tsx";

interface CommentsProps {
    id: number,
    name: string,
    comment: string,
    date: string,
    answer?: [
        {
            idAnswer: number,
            nameAnswer: string,
            answerComment: string,
            date: string,
        }
    ],
};

const Comments: FC<CommentsProps> = ({ id, name, comment, date, answer }) => {
    
    return ( 
        <>
            <article>
                <h4>{name}</h4>
                <p>{comment}</p>
                <strong>{id}</strong>
                <section>
                    <time>{date}</time>
                </section>

               <ToAnswer />

                {answer?.map((e) => {
                    return (
                        <CommentsAnswer 
                            key={e.idAnswer + e.nameAnswer}
                            answer={e}
                        />
                    )
                })}
            </article>
        </>
     );
}; 
 
export default Comments;