export function template (){
    const html = `
                    <h1>留言板</h1>
                    <form action="" class="form">
                        <label for="name">名字</label>
                        <input type="text" id="name">
                        <label for="text">內文</label>
                        <textarea id="text" name="" id="" cols="30" rows="10"></textarea>
                        <input type="submit" value="新增留言">
                    </form>
                    <div class="comments"></div>
                    <button class="more-btn" hidden>
                        載入更多
                    </button>
                `;
    return html;
};

export function appendToDOM (container, comment, isPrepend) {
    const html = `
                <div class="comment">
                    <h3>${escapeDOM(comment.name)}</h3>
                    <p>${escapeDOM(comment.text)}</p>
                </div>`; 
    if(isPrepend){
        container.prepend(html);
    }else{
        container.append(html);
    }
};

export function escapeDOM(str){
    return str.replace(/\&/g, '&amp;')
            .replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#x27;')
            .replace(/\//g, '&#x2F;')
            
};