import {template, appendToDOM} from './template.js';
import {getCommentsAPI, addComment} from './api.js';
import $ from 'jquery';
let container;
let comment;
let API;
let lastId;
let isEnd;


export function init(API) {
    // 1. 將html渲染留言模板DOM
    $('.container').append(template());

    // 2. 渲染取得的留言資料，及內容是否還有的判斷
    function getComment (){
        if(isEnd){
            return;
        }
        getCommentsAPI(API, lastId, (data)=>{
            if(!data.ok){
                alert(data.message);
                return;
            }
            let length = data.data.length;
            if(length < 5){
                data.data.forEach(i=>{
                    appendToDOM($('.comments'), i);
                })
                $('.more-btn').hide();
            }else{
                for(let i=0; i<length-1;i++){
                    appendToDOM($('.comments'), data.data[i]);
                }
                $('.more-btn').removeAttr('hidden');
                lastId = data.data[length-1].id;
            }

        })
    }

    getComment();

    // 3. 監聽載入更多事件
    $('.more-btn').on('click', getComment);

    // 4. 監聽submit，新增留言內容
    $('.form').on('submit', (e)=>{
        e.preventDefault();
        let newData = {
            name: $('#name').val(),
            text: $('#text').val()
        };
        addComment(API, newData,(data)=>{
            if(!data.ok){
                alert(data.message);
                return;
            }
            appendToDOM($('.comments'), newData, true);
            $('#name').val('');
            $('#text').val('');
        })
    })


}
