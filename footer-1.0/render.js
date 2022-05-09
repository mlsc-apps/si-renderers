class FooterRenderer {

    beginRender(data) {
        return `<div>${data.main}<br>${data.copyright}`;
    }

    endRender(data) {
        return '</div>';
    }
}