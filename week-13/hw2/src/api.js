// 獲取API留言
export function getCommentsAPI (API, before, cb) {
    API += 'get_comment.php';
    if(before){
        API += `?before=${before}`;
    }
    $.ajax({
        url: API,
        method: 'GET'
    }).done(data=>{
        cb(data);
    })
}

// 新增API留言

export function addComment(API, newData, cb){
    API += 'add_comment.php';
    $.ajax({
        url: API,
        method: 'POST',
        data: newData
    }).done(data=>{
        cb(data);
    })
}