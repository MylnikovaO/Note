function Main() {
    return (
        <div className='main_wrap'>
            <h1 className='title_main'>Обменяйтесь зашифрованным сообщением</h1>
            <p className='text_main'>Создайте заметку, после чего отправьте полученную ссылку своему другу, и он сможет ее просмотреть.
                После просмотра заметка будет удалена.</p>
            <div className='button_container_main'>
                <button className='button_main'>
                    <a href="/create" className='main_link'>Создать note</a>
                </button>
                <button className='button_main'>
                    <a href="/note" className='main_link'>Просмотреть note</a>
                </button>
            </div>
        </div>
    );
}

export default Main;