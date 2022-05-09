class FormRenderer {

    beginRender(data) {
        return `
        <form style="${data.css}">
        <div>${data.name}</div>
        <input type='button' value='${data.submitLabel}' onclick="location.href='${data.submit}';"/>
        <input type='button' value='${data.cancelLabel}' onclick="location.href='${data.cancel}';"/>`
    }

    endRender(data) {
        return '</form>';
    }
}