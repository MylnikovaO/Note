import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');


    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div>
            <form onSubmit={loadDataFromForm} className={formClass} >
                <div className='create_container'>
                    <div><label htmlFor="" className='create_label'>Введите заметку</label></div>
                    <div className='create_wrap'>
                        <textarea name="note" id="note" placeholder="Введите заметку" className='create_textarea'></textarea>
                        <button type="submit" className='create_button'>Создать</button>
                    </div>
                </div>
            </form>
            <div className={lineClass}>
                <div className='lineClass_wrap'>
                    <div className='url_lineClass'>{url}</div>
                    <div><button onClick={function () { window.location.reload() }} className='button_lineClass'>Cоздать новую заметку</button></div>
                </div>
            </div>

        </div>
    );
}
export default Create;
