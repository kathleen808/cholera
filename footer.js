function buildFooter() {
    let footer = document.getElementById('footer');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div id="footer" class="footer-background"> \
        <div class="ui two column grid container"> \
            <div class="column"> \
                <h3>QUICK LINKS</h3> \
                <hr/> \
                <div class="ui inverted link list"> \
                    <a href="index.html" class="item">Home</a> \
                    <a href="data.html" class="item">Data</a> \
                    <a href="tools.html" class="item">Tools & Libraries</a> \
                </div> \
            </div> \
            <div class="column"> \
                <h3>CONNECT</h3> \
                <hr/> \
                <div class="ui inverted link list"> \
                    <a href="contact.html" class="item">Contact</a> \
                    <a href="https://github.com/kathleen808/cholera" target="_blank" class="item">Github</a> \
                </div> \
            </div> \
        </div> \
    </div>'
    footer.appendChild(element);
}
