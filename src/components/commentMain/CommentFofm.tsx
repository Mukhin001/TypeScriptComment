import React, { FC, useState } from "react";
import { arrayComments } from '../../server/CommentData.ts';
import Comments from "./comments/Comments.tsx";
import { setDateFn } from '../../function/getDate.ts';

const CommentFofm: FC = () => {

    const [commentsArr, setCommentsArr] = useState(arrayComments);
    const [idComment, setIdComment] = useState<number>(arrayComments.length + 1);
    const [inputValue, setInputValue] = useState<{name: string, comment: string}>({ name: '', comment: '', });

    function addComment() {

        const getDateFn = setDateFn();

        setIdComment(idComment + 1);

        setCommentsArr([...commentsArr, {  
            idComment: idComment,
            name: inputValue.name,
            comment: inputValue.comment,
            date: `${getDateFn.day}.${getDateFn.month}.${getDateFn.year}`,
            // answer: [
            //     {
            //         idAnswer: 5,
            //         nameAnswer: 'Egor',
            //         answerComment: 'hi',
            //     }
            // ],
        }]); 
            
            setInputValue(prev => ({...prev, name: '', comment: ''}));
    };
    
    return ( 
        
        <div>
            <form>
               <fieldset>
                    <legend>Your Comment</legend>
                    <div>
                        <label htmlFor="name">your name</label>
                        <input id="name" name="name" value={inputValue.name} onChange={(value) => setInputValue(prev => ({...prev, name: value.target.value}))}/>
                    </div>

                    <div>
                        <label htmlFor="comment">your coment</label>
                        <input id="comment" name="comment" value={inputValue.comment} onChange={(value) => setInputValue(prev => ({...prev, comment: value.target.value}))}/>
                    </div>
               </fieldset>
            </form>
            <button onClick={addComment}>add</button>

            <article>
                {commentsArr.map((e) => {
                    return (
                        <Comments 
                            key={e.idComment}
                            id={e.idComment}
                            name={e.name}
                            comment={e.comment}
                            date={e.date}
                            answer={e.answer}
                            />
                    )
                })}
            </article>
        </div>
        
     );
};
 
export default CommentFofm;