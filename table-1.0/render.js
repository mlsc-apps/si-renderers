class TableRenderer {

    beginRender(data) {
        let rows = Object.keys(data);
        let html = '';
        html += '<table class="table table-dark">';
        rows.forEach(row => {
            let columns = data[row];
            html += `<tr>`;
            columns.forEach( column => {
                html += `<td>${column}</td>`
            });
        });
        return html;
    }

    endRender(data) {
        return '</table>';
    }
}