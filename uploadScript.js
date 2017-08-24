function loadImage(e) {
    var reader = new FileReader();
    reader.onload = function(){
        var elementToAttack = $('#'+e.target.id).data('target'); 

        var f = e.target.files[0]; 
        var fileType = f.type;
        var outputDom = $('#'+elementToAttack)[0];
        var outJquery = $('#'+elementToAttack);

        if(fileType.indexOf("image") != 0) {
            var parentId = outJquery.closest('div').attr('id');
            $("#" +parentId).css('visibility','hidden');
            $("#" +parentId).css('display', 'none');
        }
        else {
            outJquery.css('visibility','visible');
            outputDom.src = reader.result;
        }
        
        var image = new Image();
        image.onload = function() {
            web.custom.setImageParams(image.width, image.height, outJquery);
        };
    };
    reader.readAsDataURL(e.target.files[0]);
}

function setImageParams(iWidth, iHeigh, image) {
    if(iWidth>iHeigh) {
        switch(true) {
            case ((iWidth<6000) && (iWidth>3000)):
                var resultW = (5/ 100) * iWidth;
                var resultH = (5/100) * iHeigh;
                image.css('width', resultW);
                image.css('height', resultH);
                break;
        }
    }
    else {
        switch (true) {
            case ((height<2000) && (height>2000)):
                var resultW = (5/ 100) * iWidth;
                var resultH = (5/100) * iHeigh;
                image.css('width', resultW);
                image.css('height', resultH);
                break;
        }
    }
}
