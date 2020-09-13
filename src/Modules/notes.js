function Note(subject, body) {
    let title = subject;
    let text = body;
    const setTitle = newTitle => title = newTitle;
    const setText = newText => text = newText;
    const getTitle = () => title;
    const getText = () => text;
    return {setTitle, setText, getTitle, getText}
}

module.exports = Note;