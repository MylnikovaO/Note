import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    return (
        <div>
            <div className={lineClass}>
                <div className='note_wrap'>
                    <div className='note_title'><h4>Note:</h4></div>
                    <div>
                        <div className='noteText'>{noteText}</div>
                        <div><button className='button_noteText' onClick={function () { window.location.href = env.url }} > Посмотреть еще один note</button></div>
                    </div>
                </div>
            </div>
            <div className={errorClass}>
                <p className='error_note'>Ошибка! Такой note не найден. Проверьте правильность написания!</p>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <div className='formClass_container'>
                        <div><label htmlFor="url" className='label_note'>Введите hash заметки</label>  </div>
                        <div className='note'>
                            <input type="text" name="url" id="url" className="input_note" />
                            <button type="submit" className="button_note">Искать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Note;