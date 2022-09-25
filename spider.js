var board = [
    [[3, 3, true], [11, 0, false], [3, 1, false], [5, 1, false], [12, 0, false], [3, 0, false]],
    [[2, 2, true], [12, 1, false], [4, 1, false], [2, 3, false], [11, 0, false]],
    [[12, 3, true], [3, 1, false], [5, 2, false], [6, 2, false], [5, 1, false]],
    [[9, 3, true], [1, 2, false], [7, 1, false], [13, 0, false], [4, 2, false], [12, 3, false]],
    [[10, 3, true], [3, 2, false], [13, 3, false], [6, 1, false], [13, 1, false]],
    [[11, 2, true], [9, 2, false], [13, 1, false], [8, 3, false], [13, 0, false]],
    [[12, 2, true], [6, 1, false], [2, 0, false], [9, 1, false], [9, 2, false], [9, 1, false]],
    [[4, 0, true], [4, 1, false], [6, 3, false], [11, 2, false], [5, 3, false]],
    [[8, 2, true], [7, 2, false], [2, 3, false], [10, 0, false], [9, 0, false]],
    [[5, 3, true], [5, 0, false], [1, 3, false], [13, 2, false], [3, 3, false], [13, 3, false]]
]
/*[11,3,t] 11-> Q 3-> heart true -> visuable*/

var collection =[];

var cards_to_deal = [
    [8,1,false],[4,2,false],[12,0,false],[7,3,false],[5,0,false],[10,0,false],[8,3,false],[10,1,false],[1,2,false],[10,2,false],
    [12,2,false],[7,3,false],[6,3,false],[4,3,false],[9,0,false],[6,0,false],[9,3,false],[5,2,false],[8,0,false],[10,3,false],
    [3,0,false],[7,0,false],[2,1,false],[11,3,false],[11,1,false],[11,3,false],[13,2,false],[10,1,false],[4,0,false],[1,0,false],
    [7,1,false],[2,1,false],[2,0,false],[1,1,false],[2,2,false],[4,3,false],[6,2,false],[1,0,false],[1,1,false],[7,2,false],
    [1,3,false],[12,1,false],[11,1,false],[10,2,false],[8,0,false],[8,2,false],[8,1,false],[3,2,false],[7,0,false],[6,0,false]
]
var n_run =0;

var hist_board =[];

document.onkeydown = function(event) {
    if (event.key === 'z' ||event.key === 'Z' ) {
        undo_it()
      }
    if(event.key === ' '){
        deal_cards()
    }
}

function undo_it(){
    if(hist_board.length>0){
        var tmp = JSON.parse(hist_board.pop());
        if(typeof(tmp)=='number'){
            n_run=tmp
            board = JSON.parse(hist_board.pop());
        }else{
            board = tmp;
        }
        board_to_html()
    } 
}

function deal_cards(){
    if(cards_to_deal.length >=10){
        var new_cards = cards_to_deal.slice(n_run,n_run+10);
        hist_board.push(JSON.stringify(board));
        hist_board.push(JSON.stringify(n_run));
        n_run=n_run+10;
        board.forEach((it,k) =>{
            new_cards[k][2]=true;
            it.unshift(new_cards[k])
        })
        board_to_html();
    }
}

cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(elem => {
    dragElement(elem)
})
var columns = Array.from(document.getElementsByClassName("col"))
var col_lefts = columns.map(cur => cur.offsetLeft)



function which_column(mid) {
    //why do i have to run the columns and col_lefts again
    var columns = Array.from(document.getElementsByClassName("col"))
    var col_lefts = columns.map(cur => cur.offsetLeft)
    var k = col_lefts.findIndex(x => x > mid)

    if (k == -1) {
        k = col_lefts.length
    }
    if (k == 0) {
        k = 1
    }
    return (k - 1)
}

function board_from_html() {
    board = board0;
    var cols = cards.map(elmnt => {
        var rect = elmnt.getClientRects()[0]
        var mid = rect.left + rect.width / 2;
        var k = which_column(mid);
        var card_data = elmnt.dataset.sth;
        board[k].push(JSON.parse(card_data))
    })
    console.log(board)
}

var card_img = 'https://raw.githubusercontent.com/GNOME/aisleriot/master/cards/gnomangelo.svg';
// var card_img_local = 'gnomangelo.svg';
/*[11,3,t] 11-> Q 3-> heart true -> visuable*/
function make_card(card_data, k) {
    const cd_height = 150;
    const cd_width = 100;
    const c_n = 13;
    const r_n = 5;
    const a_p = 3;

    var it;
    if (card_data[2]) {
        it = `
        <div class="card" data-sth="${card_data}"
        style = "background-image: url(${card_img});background-size: ${cd_width*c_n}px  ${cd_height*r_n}px;background-position: ${cd_width*c_n - (card_data[0] - 1) * cd_width}px ${(r_n - card_data[1]) * cd_height}px;"
        >
        </div>
        `;
    } else {
        it = `
        <div class="card" data-sth="${card_data}"
        style = "background-image: url(${card_img});background-size: ${cd_width*c_n}px  ${cd_height*r_n}px;background-position: ${cd_width*c_n - (a_p - 1) * cd_width}px ${cd_height}px;"
        >
        </div>
        `;
    }
    return it
}

function get_top(total_n, visible_n, k) {
    var top;
    const hidden_n = total_n - visible_n
    const height = 600
    const card_height = 200
    var visible_top = 30
    var hidden_top = visible_top / 2
    var total_length = card_height + 1 + hidden_top * hidden_n + (visible_n - 1) * visible_top
    if (total_length > height) {

        visible_top = (height - card_height - 1) / (hidden_n / 2 + visible_n - 1)
        hidden_top = visible_top / 2
        //total_length = card_height+1+hidden_top*hidden_n+ (visible_n-1)*visible_top
    }
    if (k < hidden_n) {
        top = 1 + hidden_top * k;
    } else {
        top = 1 + hidden_top * hidden_n + (k - hidden_n) * visible_top
    }
    return top;
}

function board_to_html() {
    columns.forEach((it, k) => {
        it.innerHTML = ""
        for (j = board[k].length; j > 0; j--) {
            it.innerHTML = it.innerHTML + make_card(board[k][j - 1])
        }
    })
    columns.forEach((it, ck) => {
        var col_cards = Array.from(it.children)

        const col_n = board[ck].length
        const vis_n = board[ck].filter(it => it[2]).length
        col_cards.forEach((iit, k) => {
            dragElement(iit);
            iit.style.top = get_top(col_n, vis_n, k) + "px";
        })
    })

}

function update_column(k) {
    columns[k].innerHTML = ""
    for (j = board[k].length; j > 0; j--) {
        columns[k].innerHTML = columns[k].innerHTML + make_card(board[k][j - 1])
    }

    var col_cards = Array.from(columns[k].children)

    const col_n = board[k].length
    const vis_n = board[k].filter(it => it[2]).length
    col_cards.forEach((iit, k) => {
        dragElement(iit);
        iit.style.top = get_top(col_n, vis_n, k) + "px";
    })
}

function move_to_col_k(from_j, k, m) {
    var bl_j = board[from_j].length;
    var a = board[from_j][bl_j - m - 1];
    var b;
    if (board[k].length != 0) {
        b = board[k][0];
    }
    //console.log("connect "+a + " to "+ b)
    if (board[k].length == 0 || a[0] == (b[0] - 1)) {
        hist_board.push(JSON.stringify(board));
        var sth = board[from_j].splice(0, bl_j - m);
        if (board[from_j].length > 0) {
            board[from_j][0][2] = true
        }
        board[k] = sth.concat(board[k])
        things_to_clear(k);
    }
}

function nice(sth) {
    var l = sth.length;

    //check the color
    var ans = sth.findIndex(it => it[1] != sth[l - 1][1])
    if (ans != -1) {
        return false;
    }
    //check the order
    var u = sth.map(it => it[0]);
    // console.log(u)
    var t = u.shift();
    ans = true;
    while (u.length != 0 & ans) {
        // console.log(u);
        ans = t == u[0] - 1;
        t = u.shift();
    }
    return ans;
}

function same_color(sth){
    var ans = sth.findIndex(it => it[1] != sth[0][1])
    if (ans != -1) {
        return false;
    }else{
        return true;
    }
}

function all_visiable(sth){
    var ans = sth.findIndex(it => !it[2])
    if (ans != -1) {
        return false;
    }else{
        return true;
    }
}

function right_order(sth){
    var u = sth.map(it => it[0]);
    // console.log(u)
    var t = u.shift();
    ans = true;
    while (u.length != 0 & ans) {
        // console.log(u);
        ans = t == u[0] - 1;
        t = u.shift();
    }
    return ans;
}

function things_to_clear(j) {
    const wl = 13;
    var l = board[j].length;
    if (board[j][0][0] == 1 && l >= wl) {
        var sth = board[j].slice(0, wl);
        if(all_visiable(sth)&&same_color(sth)&&right_order(sth)){
            collection =collection.concat(board[j].splice(0,wl)) ;
            if (board[j].length > 0) {
                board[j][0][2] = true
            }
        }
    }
}

function ok_to_pickup(from_j, m) {
    var bl_j = board[from_j].length;
    var sth = board[from_j].slice(0, bl_j - m);
    //console.log(sth)
    if (sth[bl_j - m - 1][2]) {
        return nice(sth);
    } else {
        return false;
    }
}


function dragElement(elmnt) {
    //var elmnt = e.target;
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var mx=0,my=0;
    var from_j;
    var row_i;
    var c_cards;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        mx = e.clientX - elmnt.offsetLeft;
        my = e.clientY - elmnt.offsetTop;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        //console.log(pos3)
        // console.log(elmnt.dataset.sth)
        var rect = elmnt.getClientRects()[0]
        var mid = rect.left + rect.width / 2;
        from_j = which_column(mid);
        row_i = Array.from(columns[from_j].children).findIndex((it) => it == elmnt)
        if (!ok_to_pickup(from_j, row_i)) {
            document.onmouseup = null;
            document.onmousemove = null;
            return 0;
        }
        //console.log("col:" + from_j +", row:"+row_i)

        //   var child_n = columns[from_j].children.length
        //   for(z = row_i; z< child_n;z++){ //the borad index and columns row index are revered
        //     columns[from_j].children[z].style.zIndex = 100+z
        //   }
        c_cards = Array.from(columns[from_j].children).slice(row_i)
        c_cards.forEach((it, z) => {
            it.style.zIndex = 100 + z;
        })
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        var tx = pos3-elmnt.offsetLeft-mx;
        c_cards.forEach((it,k) => {
            // it.style.top = (it.offsetTop - pos2) + "px";
            // it.style.left = (it.offsetLeft - pos1) + "px";
            it.style.transform = `translate(${tx}px, ${pos4 -it.offsetTop-my+k*30}px)`;
            // it.style.transition = "0s"; //set it directly in css
        })
    }

    function closeDragElement() {
        // set the element's new position:
        var rect = elmnt.getClientRects()[0]
        var mid = rect.left + rect.width / 2;
        k = which_column(mid);
        if (from_j != k) {
            move_to_col_k(from_j, k, row_i)
        }
        // var col_k = col_lefts[k]
        // console.log(top_pos)
        // elmnt.style.top =  top_pos + "px";
        // elmnt.style.left = 1+col_k + "px";
        update_column(k)
        update_column(from_j)

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        //dragElement(elmnt)
    }

}

window.onload = board_to_html;