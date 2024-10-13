import React, { FC, useState, MouseEvent, Dispatch, SetStateAction } from "react";
import { arrayComments } from '../../../../server/CommentData.ts';

interface IdProps {
    id: number,
};

interface CommentsAnswerProps {
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

type Props = IdProps | CommentsAnswerProps; 

const ToAnswer:FC<Props> = ( props ) => {

    const [formHide, setFormHide] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<{name: string, comment: string}>({ name: '', comment: '', });
    const [commentsArr, setCommentsArr] = useState(arrayComments);

    function handleAnswer() {
        (formHide) ? setFormHide(false) : setFormHide(true);
    };

    function addAnswer(event: MouseEvent<HTMLElement>) {
        
        if(props['answer'].length > 0) {
            
            props['answer'].push({ idAnswer: props['answer'][0].idAnswer + 1, 
                name: inputValue.name, 
                comment: inputValue.comment 
            });
        } else  {
            props['answer'].push({ idAnswer: 1, name: inputValue.name, comment: inputValue.comment });
        }

       //console.log(props['answer']);
       arrayComments.forEach((obj) => {
            if(obj.idComment === Number(event.currentTarget.getAttribute('data-id')) ) {
                console.log(obj.answer);
                
            }
       })
        

    };

    return ( 
        <>
            <section>
                <section>
                    <button onClick={handleAnswer}>answer</button>
                </section>

                <div style={{display: (formHide) ? 'block' : 'none'}}>
                    <form>
                        <fieldset>
                                <legend>Your Answer</legend>
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
                    <button onClick={addAnswer} data-id={props['id']}>add answer</button>
                </div>
            </section>
        </>
     );
};
 
export default ToAnswer;