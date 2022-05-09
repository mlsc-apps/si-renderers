class ListRenderer {

    beginRender(data) {
        let css = data.css;
        let html = `<ul style="padding: 25px;" class="${css.listStyle}">`;
        data.list.forEach( item => {
            html += `<li>${item}</li>`
        });
        return html;
    }

    endRender(data) {
        return '</ul>';
    }
}