window.addEventListener('load',function () {
    let tab =document.querySelectorAll(".tab>li");
    let prev =0;
    let content =document.querySelector(".content");
    let type ="all";
    let flag ={all:'all',done:true,doing:false};
    let todolist =[
        {
            id: 1, content:"端午节要交作业" , ctime:"2019/5/29" ,status:false
        },
        {
            id: 4, content:"不想交作业" , ctime:"2019/6/12" ,status:false
        },
        {
            id:3, content:"企业文档" , ctime:"2019/6/10" ,status:true
        },
        {
            id:2, content:"123" , ctime:"2019/5/30" ,status:true
        }
    ];

    tab.forEach(function (ele,index) {
        ele.onclick = function () {
            tab[prev].classList.remove('hot');
            this.classList.add('hot');
            prev=index;

            type =this.getAttribute('type');

            render(filterData(type));
        }
    });
    tab[0].onclick();

    // render(dotolist);
    // let doing =todolist.filter(function (ele) {
    //     return !ele.status;
    // });
    // render(doing);


    content.onclick =function (e) {
      let target =e.target;
      let id = target.parentNode.id;

      if(target.nodeName=="DEL"){
          // id
          // splice() -> index -> findIndex()
          //变异方法 非变异方法
          // todolist = todolist.filter(ele=>ele.id==id)
            let index =todolist.findIndex(ele=>ele.id==id);
            todolist.splice(index,1);
            render(filterData(type));
        }else if(target.nodeName=="INPUT"){
          //id -> 数组元素 -> true false (input checked)
          //1. findIndex
          //2. find
          //3. filter
          let ele =todolist.filter(ele=>ele.id==id)[0];
          ele.status = target.checked;
          //ele.status
      }
      render( filterData(type) );
    };

    ///////////////////createObj//////////////////////
    let forms = document.forms[0];
    let textBtn = forms.elements["content"];
    let submitBtn =forms.elements[1];

    submitBtn.onclick=function (e) {
        e.preventDefault();
        let obj = createObj();
        todolist.push(obj);
        forms.reset();
        render(filterData(type));
    };


    ///////////////////////////////////////

    function createObj() {
        let id =todolist[todolist.length-1].id + 1;
        let content =textBtn.value;
        let ctime =new Date().toLocaleDateString();
        let status =false;
        return {id,content,ctime,status};
    }

    /////////////////////////////////////////////
    function filterData(type) {
        let arr=[];
        switch (type){
            case "all":
              arr=todolist;
              break;
            case "done":
               arr=todolist.filter(ele=>ele.status);
               break;
            case "doing":
                arr =todolist.filter(ele=>!ele.status);
                break;
        }
        return arr;
    }

    //渲染列表
    function render(arr) {
        let html = "";
        arr.forEach(function (elem,index) {
            if(elem.status){
                html+=`
            <li id="${elem.id}">
            <input type="checkbox" checked>
             <p>${elem.content}</p>
             <del>X</del>
             <time>${elem.ctime}</time>

        </li>
            `;
            }else{
                html+=`
            <li id="${elem.id}">
            <input type="checkbox"> 
            <p>${elem.content}</p>
             <del>X</del>
             <time>${elem.ctime}</time>
        </li>
            `;
            }
        });
        content.innerHTML=html;
    }
});




