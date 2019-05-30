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
        bannerPointer[i].onclick = function () {
            rightBtn.onclick();
        }
    }

    let diaryList = document.getElementsByClassName("diaryList")[0];
    let listLi= diaryList.getElementsByTagName('li');
    for(let i=0;i<listLi.length;i++){
        listLi[i].onclick = function () {
            for(let j=0;j<listLi.length;j++){
                listLi[j].style.borderBottom="none";
            }
            this.style.borderBottom="1px solid #000";

        }
    }


    //bannerImg

    //tabList
    // let tabList = document.querySelector(`.tabList > li`);

    //方法一
    // let tabLists = document.querySelectorAll(`.tabList > li `);
    //
    // tabLists.forEach(function (elem,index) {
    //     elem.onmouseenter = function () {
    //         for(let i =0 ;i<tabLists.length;i++){
    //             tabLists[i].classList.remove('hot');
    //         }
    //         this.classList.add('hot');
    //     }
    // })

    //方法二
    let tabLists =document.querySelectorAll(`.tabList > li`);
    for(var i=0;i<tabLists.length;i++) {

        tabLists[i].onmouseenter = (function(i){
        return function () {
            for(let j=0;j<tabLists.length;j++){
                tabLists[j].classList.remove('hot');
            }
            tabLists[i].classList.add('hot');
        }
    })(i)
}


    //轮播图 bannerImg
    /*
    * index 保存窗口中显示图片下标
    *
    * */
    let index = 0;
    let leftBtn =document.querySelector(`.leftBtn`);
    let rightBtn = document.querySelector(`.rightBtn`);
    let bannerImg = document.querySelectorAll(`.bannerImg > li`);
    // let btnLists =document.querySelectorAll(`btnList > li`);

    leftBtn.onclick = function(){
        if(index==0){
            index=bannerImg.length;
        }
        index--;
        bannerImg.forEach(function (ele) {
            ele.style.zIndex=1;
        });
        bannerImg[index].style.zIndex=99;
    };

    setInterval(rightBtn.onclick=function () {
        index++;
        if(index==bannerImg.length){
            index=0;
        }
        bannerImg.forEach(function (ele) {
            ele.style.zIndex = 1;
        });
        bannerImg[index].style.zIndex=99;
    },5000)
    //每隔5000毫秒执行一次
/*               end              */

    /*    btnList     */
    // for(let i=0;i<bannerPointer.length;i++) {
    //     bannerPointer[i].onclick = function () {
    //         for(let i=0;i<4;i++){
    //             bannerImg[i]=style.visibility="hidden";
    //         }
    //         bannerImg[i]=style.visibility="visble";
    //     };
    // }



};

