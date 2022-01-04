/**
第一次的javascript的测试 段落改写。
*/
changeFlag=true;
function test0930001ChangeContent(){
    ele=document.getElementById("test0930001")
    if(changeFlag){
        ele.innerText='>段落已经被修改了！';
        changeFlag=false;
    }
    else{
        ele.innerText="段落又改回来了！"
        changeFlag=true;
    }
}

$(document).ready(function(){
    $("#testHide20210118").click(
        function(){
            $("#testJquery20210118001").hide(500,"linear");
        }
    );
    $("#testShow20210118").click(
        function(){
            $("#testJquery20210118001").show(500,"linear");
        }
    );
    $("#testToggle20210118").click(
        function(){
            $("#testJquery20210118001").toggle(500,"linear");
        }
    );
    
})
