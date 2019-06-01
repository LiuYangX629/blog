window.onload = function () {
    let home =document.getElementById("home");
    let btnList = document.getElementsByClassName("btnList");
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

        //轮播点
    let bannerPointer = btnList[0].getElementsByTagName("li");
    for(var i=0;i<bannerPointer.length;i++){
        bannerPointer[i].onmouseenter = function () {
            this.style.backgroundColor=activeColor;
        };
        bannerPointer[i].onmouseleave =function () {
            this.style.backgroundColor=disactiveColor;
        }
        // bannerPointer[i].onclick = function () {
        //     rightBtn.onclick();
        // }
    }
    //轮播图 bannerImg
    /*current 保存窗口中显示图片下标
    * index 保存窗口中显示图片下标
    *next 下一张图片
    * */
    let current = 0,next = 0;
    let leftBtn =document.querySelector(`.leftBtn`);
    let rightBtn = document.querySelector(`.rightBtn`);
    let bannerImg = document.querySelectorAll(`.bannerImg > li`);
    let w =bannerImg[0].offsetWidth;
    // let btnLists =document.querySelectorAll(`btnList > li`);

    // leftBtn.onclick = function(){
    //     if(index==0){
    //         index=bannerImg.length;
    //     }
    //     index--;
    //     bannerImg.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     });
    //     Array.prototype.forEach.call(bannerPointer,function (elem) {
    //         elem.classList.remove("hot");
    //     });
    //     bannerPointer[index].classList.add("hot");
    //     bannerImg[index].style.zIndex=99;
    // };
    //
//         rightBtn.onclick=function () {
//         index++;
//         if(index==bannerImg.length){
//             index=0;
//         }
//         bannerImg.forEach(function (ele) {
//             ele.style.zIndex = 1;
//             animate(ele,{opacity: 0})
//         });
//         Array.prototype.forEach.call(bannerPointer,function (elem) {
//             elem.classList.remove("hot");
//         });
//         bannerPointer[index].classList.add("hot");
//         bannerImg[index].style.zIndex=99;
//         animate(bannerImg[index],{opacity:1})
//     };
//     //每隔5000毫秒执行一次
//     let t = setInterval(rightBtn.onclick,1000);
// /*               end              */

    /*    btnList     */
    // for(let i=0;i<bannerPointer.length;i++) {
    //     bannerPointer[i].onclick = function () {
    //         for(let i=0;i<4;i++){
    //             bannerImg[i]=style.visibility="hidden";
    //         }
    //         bannerImg[i]=style.visibility="visble";
    //     };
    // }

    rightBtn.onclick = function(){
        next++;

        if(next == bannerImg.length){
            next = 0;
        }
        bannerImg[next].style.left = w+ 'px';

        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0});
        current = next;
    };

    leftBtn.onclick = function(){
        next--;
        if(next<0){
            next = bannerImg.length -1;
        }
        bannerImg[next].style.left = -w+ 'px';

        animate(bannerImg[current],{left:+w});
        animate(bannerImg[next],{left:0});
        current = next;
    };

    let t = setInterval(rightBtn.onclick,3000);
    //每3000毫秒执行一次

    /*
    * 轮播移入和移出（鼠标在图上时停止轮播）
    * */
    let bannerLeft = document.querySelector('.bannerLeft');
    // bannerLeft.onmouseenter=function () {
    //     clearInterval(t);
    // };
    // bannerLeft.onmouseleave = function () {
    //     t= setInterval(rightBtn.onclick,1000);
    // };
    //
    // for(var i=0;i<bannerPointer.length;i++){
    //     bannerPointer[i].lxy=i;
    //     bannerPointer[i].onclick=function () {
    //         index=this.lxy;
    //         Array.prototype.forEach.call(bannerPointer,function (elem) {
    //             elem.classList.remove("hot");
    //         });
    //         bannerImg.forEach(function (ele) {
    //             ele.style.zIndex=1;
    //         });
    //         this.classList.add("hot");
    //         // console.log(i);
    //         bannerImg[this.lxy].style.zIndex=99;
    //
    //
    //     }
    // }

};

