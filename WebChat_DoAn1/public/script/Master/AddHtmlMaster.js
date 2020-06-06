function HtmlUserFilterSearch(userInfo){
    var result=`<a href="/tim-nguoi/${userInfo.ID}">
                    <div class="friend" id="${userInfo.ID}">
                        <div id="hinhanh">
                            <img src="/HinhAnh/${userInfo.AVATAR}">
                        </div>
                        <div id="thongtin">
                            <div id="ten">${userInfo.ID}</div>						
                        </div>
                    </div>
                </a>`
    return result;
}

function showUserFilterSearchLikeID(html){
    $('#Header #TimKiem #filterTimKiem').append(html);
}

function emptyFilterSearch(){
    $('#Header #TimKiem #filterTimKiem').empty();
}