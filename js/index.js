window.onload = function () {
    let home =document.getElementById("home");
    let btnList = document.getElementsByClassName("btnList");
    let bannerPointer = btnList[0].getElementsByTagName("li");
    let activeColor ="#00c1de" , disactiveColor = "#fff";
    console.log(home);

    /*
    * 谁  什么时候  干什么
    * 事件源  事件类型  事件处理函数
    * */
    home.onmouseenter = function () {
        home.style.color ="#00c1de";
        // console.log(home.style);
    };

    home.onmouseleave = function () {
        home.style.color = "#ffffff";
    };

    for(var i=0;i<bannerPointer.length;i++){
        bannerPointer[i].onmouseenter = function () {
            this.style.backgroundColor=activeColor;
        };
        bannerPointer[i].onmouseleave =function () {
            this.style.backgroundColor=disactiveColor;
        }
    }

    let diaryList = document.getElementsByClassName("diaryList");
    let listLi= diaryList.getElementsByTagName("li");
    for(let i=0;i<listLi.length;i++){
        listLi[i].onclick = function () {
            for(let j=0;j<listLi.length;j++){
                listLi[j].style.borderBottom="none";
            }
            this.style.borderBottom="1px solid #000";

        }
    }

};

