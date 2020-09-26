function buildHeader() {
    let header = document.getElementById('header');
    let element = document.createElement('div');
    element.innerHTML +=
    '<div id="navBar" class="ui left inverted fluid menu"> \
        <a href="index.html" class="my-menu-item ui simple item">HOME</a> \
        <a href="data.html" class="my-menu-item ui simple item">DATA</a> \
        <a href="tools.html" class="my-menu-item ui simple item">TOOLS & LIBRARIES</a> \
        <a href="contact.html" class="my-menu-item ui simple item">CONTACT</a> \
        <a href="https://github.com/kathleen808/cholera" class="my-menu-item ui simple right item"> \
            <img src="./images/GitHub-Mark-Light-120px-plus.png" style="height: 30px; width: 30px;"> \
        </a> \
    </div>'
    header.appendChild(element);
}
