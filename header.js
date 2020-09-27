function buildHeader() {
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div id="navBar" class="ui left inverted fluid menu"> \
        <a href="index.html" class="ui simple item">HOME</a> \
        <a href="data.html" class="ui simple item">DATA</a> \
        <a href="tools.html" class="ui simple item">TOOLS & LIBRARIES</a> \
        <a href="contact.html" class="ui simple item">CONTACT</a> \
        <a href="https://github.com/kathleen808/cholera" target="_blank" class="ui simple right item"> \
            <img src="./images/GitHub-Mark-Light-120px-plus.png" style="height: 30px; width: 30px;"> \
        </a> \
    </div>'
    header.appendChild(element);
}
