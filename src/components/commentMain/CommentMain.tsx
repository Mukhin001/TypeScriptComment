import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { arrayComments } from '../../server/CommentData.ts';
import Comments from "./comments/Comments.tsx";
import { setDateFn } from '../../function/getDate.ts';

const CommentMain: FC = () => {

    const [commentsArr, setCommentsArr] = useState(arrayComments);
    const [idComment, setIdComment] = useState<number>(arrayComments.length + 1);
    const [inputValue, setInputValue] = useState<{name: string, comment: string}>({ name: '', comment: '', });


    function addComment(e: FormEvent ) {
        e.preventDefault();
        
        const getDateFn = setDateFn();

        setIdComment(idComment + 1);

        setCommentsArr([...commentsArr, {  
            idComment: idComment,
            name: inputValue.name,
            comment: inputValue.comment,
            date: `${getDateFn.day}.${getDateFn.month}.${getDateFn.year}`,
            answer: [
               
            ],
        }]); 
            
            setInputValue(prev => ({...prev, name: '', comment: ''}));
    };
    // name: string, comment: string
    function handleChange(value: ChangeEvent) {
        
        if(value.target.getAttribute('name') === 'name') {
            setInputValue(prev => ({...prev, name: (value.target as HTMLInputElement).value }));
        } else if(value.target.getAttribute('name') === 'comment') {
            setInputValue(prev => ({...prev, comment: (value.target as HTMLInputElement).value }))
        }
    }
    
    return ( 
        
        <div>
            {/* <CommentFofm addComment={addComment}/> */}
            <form onSubmit={addComment}>
               <fieldset>
                    <legend>Your Comment</legend>
                    <div>
                        <label htmlFor="name">your name</label>
                        <input id="name" name="name" value={inputValue.name} onChange={handleChange}/> 
                        {/* onChange={(value) => setInputValue(prev => ({...prev, name: value.target.value}))} */}
                    </div>

                    <div>
                        <label htmlFor="comment">your coment</label>
                        <input id="comment" name="comment" value={inputValue.comment} onChange={handleChange}/>
                        {/* onChange={(value) => setInputValue(prev => ({...prev, comment: value.target.value}))} */}
                    </div>
               </fieldset>
               <button type="submit">add</button>
            </form>
           

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
                            setCommentsArr={setCommentsArr}
                            />
                    )
                })} 
            </article>
        </div>
        
     );
};
 
export default CommentMain;