import React, { FC, Dispatch, SetStateAction } from "react";
import CommentsAnswer from "./commentsAnswer/CommentsAnswer.tsx";
import ToAnswer from "./toAnswer/ToAnswer.tsx";

interface CommentsProps {
    id: number,
    name: string,
    comment: string,
    date: string,
    answer: [
        {
            idAnswer: number,
            nameAnswer: string,
            answerComment: string,
            date: string,
        }
    ] | [],
};

interface setCommentsArrProps {
    setCommentsArr: Dispatch<SetStateAction<any>> 
};

type Props = CommentsProps | setCommentsArrProps; 

const Comments: FC<Props> = ( props ) => {
    
    return ( 
        <>
            <article>
                <h4>{props['name']}</h4>
                <p>{props['comment']}</p>
                <strong>{props['id']}</strong>
                <section>
                    <time>{props['date']}</time>
                </section>

               <ToAnswer id={props['id']}  answer={props['answer']} />

                {props['answer'].map((e) => {
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