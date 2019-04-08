function goPage(page) {
    let p = document.getElementById('content');
    switch (page) {
        case 1:
            p.innerHTML = '<iframe width="800" height="700" src="p1/div.html" frameborder=0>';
            break;
        case 2:
            p.innerHTML = '<iframe width=100% height="600" src="p2/tku60.html" frameborder=0>';
            break;
        case 3:
            p.innerHTML = '<iframe width="800" height="700" src="p3/mytravel.html" frameborder=0>';
            break;
    }
}