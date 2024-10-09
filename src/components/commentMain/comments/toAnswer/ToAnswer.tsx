import React, { FC, useState } from "react";

const ToAnswer:FC = () => {

    const [formHide, setFormHide] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<{name: string, comment: string}>({ name: '', comment: '', });

    function handleAnswer() {
        (formHide) ? setFormHide(false) : setFormHide(true);
    };

    return ( 
        <>
            <section>
                <section>
                    <button onClick={handleAnswer}>answer</button>
                </section>

                <form style={{display: (formHide) ? 'block' : 'none'}}>
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
            </section>
        </>
     );
};
 
export default ToAnswer;