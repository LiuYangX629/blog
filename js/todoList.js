window.addEventListener('load',function () {
    let tab =document.querySelectorAll(".tab>li");
    let prev =0;
    let content =document.querySelector(".content");
    let todolist =[
        {
            id:1, content:"端午节要交作业" , ctime:"2019/5/29" ,status:false
        },
        {
            id:2, content:"不想交作业" , ctime:"2019/5/30" ,status:false
        },
        {
            id:3, content:"企业文档" , ctime:"2019/6/10" ,status:true
        },
        {
            id:4, content:"端午节要交作业" , ctime:"2019/6/12" ,status:false
        }
    ];

    tab.forEach(function (ele,index) {
        ele.onclick = function () {
            tab[prev].classList.remove('hot');
            this.classList.add('hot');
            prev=index;
            let type =this.getAttribute('type');
            let arr =[];
            
            switch (type) {
                case 'all':
                    arr = todolist;
                    break;
                case 'done':
                    arr =todolist.filter(function (ele) {return ele.status;});
                    break;
                case 'doing':
                    arr = todolist.filter(function (ele) {return !ele.status});
                    break;
            }
            render(arr);
        }
    });
    tab[0].onclick();

    // render(dotolist);
    // let doing =todolist.filter(function (ele) {
    //     return !ele.status;
    // });
    // render(doing);

    //渲染列表
    function render(arr) {
        let html = "";
        arr.forEach(function (elem,index) {
            if(elem.status){
                html+=`
            <li>
            <input type="checkbox" checked> <p>${elem.content}</p> <time>${elem.ctime}</time>
        </li>
            `;
            }else{
                html+=`
            <li>
            <input type="checkbox"> <p>${elem.content}</p> <time>${elem.ctime}</time>
        </li>
            `;
            }
        });
        content.innerHTML=html;
    }
});
