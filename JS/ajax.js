
function loadData(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function(){
        if(this.status == 200){
            var res = this.responseText;
            res = JSON.parse(res);
            res = res.data;
            // console.log(res);
            // for(var i=0; i<res.length; i++){
            //     console.log(res[i].email);
            // }
            var cnt = '<option value="--">---------------</option>';
            res.forEach(element => {
                // console.log(element.email);
                cnt += '<option value="'+ element.email +'">'+ element.email +'</option>';
            });

            document.getElementById('email').innerHTML = cnt;
        }
    }

    // xmlhttp.open('GET', 'data.txt');
    xmlhttp.open('GET', 'http://beyont.in/angularapi/getuser.php');
    xmlhttp.send();
}

// http://beyont.in/angularapi/getuser.php

