window.onload =function () {
    let headImage =document.querySelectorAll('img[id]');
    let prev =0 ;
    for(let i = 0; i<headImage;i++){
        headImage[i].onclick =function () {
            headImage[prev].style.opacity = 0.7;
            this.style.opacity=1;
            prev = i;
        }
    }
    let form =document.forms.myform;
    let userName =document.querySelector('input[name=name]');
    let textarea = document.querySelector('textarea');
    let already = document.querySelector('#already');
    let left =document.querySelector('#left');
    let max =25;
    already.innerText = 0;
    left.innerText=max;
    textarea.onkeyup=function () {
        let value = this.value;
        already.innerText=value.length;
        left.innerText=max - value.length;
    };

    let message =document.querySelector('.message');
    let messageBox=document.querySelector('form>ul>li:last-child');

    let submit = document.querySelector('input[type=submit]');

    submit.onclick = function (e) {
        e.preventDefault();
        let thumbs = headImage[prev].src;
        let users = userName.value.trim();
        let time = new Date().toLocaleDateString();
        let content = textarea.value;
        let obj ={thumbs , users , time ,content};
        form.reset();
        insertMessage(obj);
    };


    function insertMessage({thumbs,users,time,content}) {
        let str = `
        <ul class="message">
        <li>
        <div class="thum"><img src="${thumbs}" alt="fail"></div>
        <div class="text">
        <p><b>${users}</b> <span>S{time}</span></p>
        <p>${content}</p>
        </div>
        </li>
        </ul>
            `;
        messageBox.innerHTML = str +messageBox.innerHTML;
    }
    function init() {
        headImage[prev].style.opacity = 0.7;
        prev = 0;
    }

};