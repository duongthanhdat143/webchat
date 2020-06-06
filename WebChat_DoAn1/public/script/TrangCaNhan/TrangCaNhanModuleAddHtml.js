function newMesNotSeenAdd(data){
    var idConver=data.idConver
    var avatarSender=data.avatarSender
    var lastMes=data.lastMes
    var html=`<div class="conversation" id="${idConver}">
                <div id="hinhanh">
                    <img src="/HinhAnh/${avatarSender}">
                </div>
                <div id="thongtin">
                    <div id="${idConver}" hidden="true"></div>
                    <div id="ten">${idConver}</div>
                    <div id="lastMes">${lastMes}</div>
                </div>
            </div>`;
    return html;
}


function AddNewMesNotSeen(htmlNewConver,idNewConver){
    var selector='#Header #TinNhan #MesNotSeen #'+xulySelectorID(idNewConver)+'.conversation';
    var element=$(selector);
    element.remove();
    $('#Header #TinNhan #MesNotSeen').prepend(htmlNewConver);
    if(element.length==0){
        console.log('haha');
        var numberMesNotSeen=parseInt($('#Header #TinNhan #numberMesNotSeen').html());
        numberMesNotSeen=numberMesNotSeen+1;
        $('#Header #TinNhan #numberMesNotSeen').html(numberMesNotSeen);
    }
}


