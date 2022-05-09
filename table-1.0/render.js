class TableRenderer {

    beginRender(data) {
        let rows = Object.keys(data);
        let html = '';
        html += '<table style="border:1px solid">';
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