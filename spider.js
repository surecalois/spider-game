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
var game_four = [
    [8,1,false],[4,2,false],[12,0,false],[7,3,false],[5,0,false],[10,0,false],[8,3,false],[10,1,false],[1,2,false],[10,2,false],
    [12,2,false],[7,3,false],[6,3,false],[4,3,false],[9,0,false],[6,0,false],[9,3,false],[5,2,false],[8,0,false],[10,3,false],
    [3,0,false],[7,0,false],[2,1,false],[11,3,false],[11,1,false],[11,3,false],[13,2,false],[10,1,false],[4,0,false],[1,0,false],
    [7,1,false],[2,1,false],[2,0,false],[1,1,false],[2,2,false],[4,3,false],[6,2,false],[1,0,false],[1,1,false],[7,2,false],
    [1,3,false],[12,1,false],[11,1,false],[10,2,false],[8,0,false],[8,2,false],[8,1,false],[3,2,false],[7,0,false],[6,0,false],
    [3, 3, false], [11, 0, false], [3, 1, false], [5, 1, false], [12, 0, false], [3, 0, false],
    [2, 2, false], [12, 1, false], [4, 1, false], [2, 3, false], [11, 0, false],
    [12, 3, false], [3, 1, false], [5, 2, false], [6, 2, false], [5, 1, false],
    [9, 3, false], [1, 2, false], [7, 1, false], [13, 0, false], [4, 2, false], [12, 3, false],
    [10, 3, false], [3, 2, false], [13, 3, false], [6, 1, false], [13, 1, false],
    [11, 2, false], [9, 2, false], [13, 1, false], [8, 3, false], [13, 0, false],
    [12, 2, false], [6, 1, false], [2, 0, false], [9, 1, false], [9, 2, false], [9, 1, false],
    [4, 0, false], [4, 1, false], [6, 3, false], [11, 2, false], [5, 3, false],
    [8, 2, false], [7, 2, false], [2, 3, false], [10, 0, false], [9, 0, false],
    [5, 3, false], [5, 0, false], [1, 3, false], [13, 2, false], [3, 3, false], [13, 3, false]
]

var game_two = [
    [8,2,false],[4,2,false],[12,3,false],[7,3,false],[5,3,false],[10,3,false],[8,3,false],[10,2,false],[1,2,false],[10,2,false],
    [12,2,false],[7,3,false],[6,3,false],[4,3,false],[9,3,false],[6,3,false],[9,3,false],[5,2,false],[8,3,false],[10,3,false],
    [3,3,false],[7,3,false],[2,2,false],[11,3,false],[11,2,false],[11,3,false],[13,2,false],[10,2,false],[4,3,false],[1,3,false],
    [7,2,false],[2,2,false],[2,3,false],[1,2,false],[2,2,false],[4,3,false],[6,2,false],[1,3,false],[1,2,false],[7,2,false],
    [1,3,false],[12,2,false],[11,2,false],[10,2,false],[8,3,false],[8,2,false],[8,2,false],[3,2,false],[7,3,false],[6,3,false],
    [3,3,false],[11,3,false],[3,2,false],[5,2,false],[12,3,false],[3,3,false],
    [2,2,false],[12,2,false],[4,2,false],[2,3,false],[11,3,false],
    [12,3,false],[3,2,false],[5,2,false],[6,2,false],[5,2,false],
    [9,3,false],[1,2,false],[7,2,false],[13,3,false],[4,2,false],[12,3,false],
    [10,3,false],[3,2,false],[13,3,false],[6,2,false],[13,2,false],
    [11,2,false],[9,2,false],[13,2,false],[8,3,false],[13,3,false],
    [12,2,false],[6,2,false],[2,3,false],[9,2,false],[9,2,false],[9,2,false],
    [4,3,false],[4,2,false],[6,3,false],[11,2,false],[5,3,false],
    [8,2,false],[7,2,false],[2,3,false],[10,3,false],[9,3,false],
    [5,3,false],[5,3,false],[1,3,false],[13,2,false],[3,3,false],[13,3,false]
]


var game_one = [
    [8,3,false],[4,3,false],[12,3,false],[7,3,false],[5,3,false],[10,3,false],[8,3,false],[10,3,false],[1,3,false],[10,3,false],
    [12,3,false],[7,3,false],[6,3,false],[4,3,false],[9,3,false],[6,3,false],[9,3,false],[5,3,false],[8,3,false],[10,3,false],
    [3,3,false],[7,3,false],[2,3,false],[11,3,false],[11,3,false],[11,3,false],[13,3,false],[10,3,false],[4,3,false],[1,3,false],
    [7,3,false],[2,3,false],[2,3,false],[1,3,false],[2,3,false],[4,3,false],[6,3,false],[1,3,false],[1,3,false],[7,3,false],
    [1,3,false],[12,3,false],[11,3,false],[10,3,false],[8,3,false],[8,3,false],[8,3,false],[3,3,false],[7,3,false],[6,3,false],
    [3,3, false], [11,3, false], [3,3, false], [5,3, false], [12,3, false], [3,3, false],
    [2,3, false], [12,3, false], [4,3, false], [2,3, false], [11,3, false],
    [12,3, false], [3,3, false], [5,3, false], [6,3, false], [5,3, false],
    [9,3, false], [1,3, false], [7,3, false], [13,3, false], [4,3, false], [12,3, false],
    [10,3, false], [3,3, false], [13,3, false], [6,3, false], [13,3, false],
    [11,3, false], [9,3, false], [13,3, false], [8,3, false], [13,3, false],
    [12,3, false], [6,3, false], [2,3, false], [9,3, false], [9,3, false], [9,3, false],
    [4,3, false], [4,3, false], [6,3, false], [11,3, false], [5,3, false],
    [8,3, false], [7,3, false], [2,3, false], [10,3, false], [9,3, false],
    [5,3, false], [5,3, false], [1,3, false], [13,3, false], [3,3, false], [13,3, false]
]



var game00 = game_four;


const cd_height = 120;
const cd_width = 80;
const c_n = 13;
const r_n = 5;
const a_p = 3;
var keep_moving = true;
var autoid;
var deal_btn = document.getElementById("deal");


function new_game(){

    var board0 = JSON.parse(JSON.stringify(game00.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)));

    board0.forEach(it => {it[2] = false})

    cards_to_deal = board0.splice(0,cards_to_deal.length);
    var lns = [6,5,5,6,5,5,6,5,5,6]; //4x6 and 6x5
    board = lns.map(it => {
        var tmp =  board0.splice(0,it);
        tmp[0][2] = true;
        return tmp;
    });

    board0=JSON.parse(JSON.stringify(cards_to_deal.concat(board.flatMap(it=>it))));
    board0.forEach(it => {it[2] = false})

    board_to_html();
    hist_board =[];
    n_run =0;
    hint();
    deal_btn.dataset.badge = (cards_to_deal.length-n_run)/10;
    document.getElementById("new").blur();
}


function new_game_one(){
    game00 = game_one;
    new_game();
}

function new_game_two(){
    game00 = game_two;
    new_game();
}

function new_game_four(){
    game00 = game_four;
    new_game();
}


document.onkeydown = function(event) {
    if (event.key === 'z' ||event.key === 'Z'|| event.key=='u'|| event.key=='U') {
        undo_it()
      }
    if(event.key === ' '){
        deal_cards()
    }
    if(event.key === 'N'){
        new_game()
    }
    if(event.key === 'H'||event.key === 'h'){
        show_hint()
    }

    if(event.key === '1' & event.ctrlKey){
        new_game_one()
    }

    if(event.key === '2' & event.ctrlKey){
        new_game_two()
    }

    if(event.key === '4' & event.ctrlKey){
        new_game_four()
    }

    if(event.key === 'm'||event.key === 'M'){
        if(keep_moving){
            auto_move();
        }else{
            clearInterval(autoid);
        }
        keep_moving = !keep_moving;
    }
}

function undo_it(){
    if(hist_board.length>0){
        var tmp = JSON.parse(hist_board.pop());
        if(typeof(tmp)=='number'){
            n_run=tmp
            deal_btn.dataset.badge = (cards_to_deal.length-n_run)/10;
            board = JSON.parse(hist_board.pop());
        }else{
            board = tmp;
        }
        board_to_html()
    }else{
        n_run = 0;
        deal_btn.dataset.badge = (cards_to_deal.length-n_run)/10;
    }
}

function deal_cards(){
    var empty = board.map(it => it.length).indexOf(0);
    if((n_run+10) <= cards_to_deal.length && empty ==-1){
        var new_cards = cards_to_deal.slice(n_run,n_run+10);
        hist_board.push(JSON.stringify(board));
        hist_board.push(JSON.stringify(n_run));
        n_run=n_run+10;

        board.forEach((it,k) =>{
            new_cards[k][2]=true;
            it.unshift(new_cards[k])
        })
        board_to_html();
        deal_btn.dataset.badge = (cards_to_deal.length-n_run)/10;
    }
}

var columns = Array.from(document.getElementsByClassName("col"))

function which_column(mid) {
    //why do i have to run the columns and col_lefts again
    //var columns = Array.from(document.getElementsByClassName("col"))
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

//var card_img = 'https://raw.githubusercontent.com/GNOME/aisleriot/master/cards/gnomangelo.svg';
 var card_img = 'gnomangelo.svg';
/*[11,3,t] 11-> Q 3-> heart true -> visuable*/
function make_card(card_data, k) {
    var it;
    if (card_data[2]) {
        it = `
        <div class="card" data-sth="${JSON.stringify(card_data)}"
        style = "background-image: url(${card_img});background-size: ${cd_width*c_n}px  ${cd_height*r_n}px;background-position: ${cd_width*c_n - (card_data[0] - 1) * cd_width}px ${(r_n - card_data[1]) * cd_height}px;"
        >
        </div>
        `;
    } else {
        it = `
        <div class="card" data-sth="${JSON.stringify(card_data)}"
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
        // it.innerHTML = ""
        // for (j = board[k].length; j > 0; j--) {
        //     it.innerHTML = it.innerHTML + make_card(board[k][j - 1])
        // }
        update_column(k);
    })
    // columns.forEach((it, ck) => {
    //     var col_cards = Array.from(it.children)

    //     const col_n = board[ck].length
    //     const vis_n = board[ck].filter(it => it[2]).length
    //     col_cards.forEach((iit, k) => {
    //         dragElement(iit);
    //         iit.style.top = get_top(col_n, vis_n, k) + "px";
    //     })
    // })

}

/*
- some cards were added to the column
- some cards were removed from the column
*/
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
        iit.style.zIndex = 100+k;
    })
    hint();
}

function make_visiable(card){
    var card_data = JSON.parse(card.dataset.sth);
    var ans =`${cd_width*c_n - (card_data[0] - 1) * cd_width}px ${(r_n - card_data[1]) * cd_height}px`;
    card.style.backgroundPosition = ans;
    card_data[2] = true;
    card.dataset.sth = JSON.stringify(card_data);
}

function make_hidden(card){
    var card_data = JSON.parse(card.dataset.sth);
    var ans =`${cd_width*c_n - (a_p - 1) * cd_width}px ${cd_height}px`;
    card.style.backgroundPosition = ans;
    card_data[2] = true;
    card.dataset.sth = JSON.stringify(card_data);
}



function column_remove(k,a){
    var col_cards = Array.from(columns[k].children)
    var l = col_cards.length;
    var out_cards =[];
    for(i = a; i < l; i++){
        out_cards.push(columns[k].removeChild(col_cards[i]));
    }
    const col_n = board[k].length
    const vis_n = board[k].filter(it => it[2]).length

    Array.from(col_cards).forEach((it,k) => {
        it.style.top = get_top(col_n, vis_n,k) + "px";
        it.style.zIndex = 100+k;
    })

    //check to make the last card visiable
    if(a > 0){
        make_visiable(columns[k].children[a-1])
    }
    return out_cards;
}

function column_append(k,cards){

    cards.forEach(it =>columns[k].appendChild(it));
    var col_cards = Array.from(columns[k].children)

    const col_n = board[k].length
    const vis_n = board[k].filter(it => it[2]).length

    Array.from(col_cards).forEach((it,k) => {
        it.style.top = get_top(col_n, vis_n,k) + "px";
        it.style.zIndex = 100+k;
    })
}

function swap_cards(from_j,to_k,row_i){
    var tmp = column_remove(from_j,row_i)
    column_append(to_k,tmp)
}

//row_i is the div index
function move_to_col_k(from_j, k, row_i) {
    var bl_j = board[from_j].length;
    var a = board[from_j][bl_j - row_i - 1];
    var b;
    if (board[k].length != 0) {
        b = board[k][0];
    }
    //console.log("connect "+a + " to "+ b)
    if (board[k].length == 0 || a[0] == (b[0] - 1)) {
        hist_board.push(JSON.stringify(board));
        var sth = board[from_j].splice(0, bl_j - row_i);
        if (board[from_j].length > 0) {
            board[from_j][0][2] = true
        }
        board[k] = sth.concat(board[k])
        swap_cards(from_j,k,row_i)
        things_to_clear(k);
        hint();
    }
}

function nice(sth) {
    return all_visiable(sth)&&same_color(sth)&&right_order(sth)
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
            // board_to_html();
            column_remove(j,l-wl);
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

function column_pickable(k){
    var the_column = JSON.parse(JSON.stringify(board[k]));
    var ans = []
    the_column.every((it,i) =>{
        var tmp = the_column.slice(0,i+1)
        if(nice(tmp)){
            ans.push(tmp[i])
            return true;
        }else{
            return false;
        }
    })
    return ans;
}

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
var all_movable =[]
var hint_index = 0
function hint(){
    all_movable =[];
    var ends = board.map(it => { 
        if(it.length >0) { 
            return it[0] ;
        } else { 
            return [0,4,false] ;
        } })

    var next = ends.map(it => it[0] -1 )
    //if next:0 no acceptable things, -1 accepts anything
    //console.log(next)
    var pickable=[];
    for(i = 0; i<10;i++){
        pickable.push(column_pickable(i));
    }
    //console.log(pickable)
    pickable.forEach((w,i)=>{
        w.forEach(it =>{
            var to_i = indexOfAll(next,it[0]);
            if(to_i.length>0){
                to_i.forEach(toi => {
                    var row_i= board[i].findIndex(itz => JSON.stringify(itz)==JSON.stringify(it));
                    all_movable.push([it,i,toi,it[1]==ends[toi][1],row_i]);
                    /**the card, from_column,to_column,color_match,from_row */
                })
            }
        })
    })
    all_movable.sort((a,b)=>{return b[3]-a[3]})
    hint_index = 0

    var hint_btn = document.getElementById("hint");
    hint_btn.dataset.badge = all_movable.length;
    //console.log("hints are reday!")
}


function html_hint(hint_from,hint_row,hint_to){
    if(hint_row ==-1){
        console.log("something is wrong")
        console.log(board[hint_from])
    }

    var target = columns[hint_to].children[board[hint_to].length-1];
    var source = columns[hint_from].children[board[hint_from].length-1-hint_row];
    target.classList.add("hint");
    source.classList.add("hint");
    function clear_hint_style(){
        target.classList.remove("hint");
        source.classList.remove("hint");
    }
    setTimeout(clear_hint_style, 1000);
}

function show_hint(){

    if(all_movable.length >0){
        var hint_thing = all_movable[hint_index];
        //var hint_card = hint_thing[0];
        var hint_from = hint_thing[1];
        var hint_to = hint_thing[2];
        // var hint_row = board[hint_from].findIndex(it => hint_card.every((z,k)=> z=it[k]));
        var hint_row = hint_thing[4];
        //console.log(hint_card)
        //console.log("move card ",hint_card, "at column ",hint_from," row ",hint_row, " to column ", hint_to);
        hint_index = (hint_index+1) % all_movable.length;
        html_hint(hint_from,hint_row,hint_to);
    }else{
        var lns = board.map(it => it.length);
        if(lns.indexOf(0)!=-1){
            console.log("use the empty slot")
        }else{
            console.log("no hint")
        }
    }
}


function save(){
    var json_game = JSON.stringify(
        {
            cards_to_deal:cards_to_deal,
            current_board:board,
            current_deal:n_run,
            history_board:hist_board
        }
    )

    var flag = board.map(it => it.length).filter(it => it !=0).length; 

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json_game);
    var tmp_node = document.createElement('a');
    tmp_node.setAttribute("href", dataStr);
    if(flag == 0){
        tmp_node.setAttribute("download", "spider_"+Date.now() + ".json");
    }else{
        tmp_node.setAttribute("download", "spider_"+Date.now() + "_not_finished.json");
    }
    document.body.appendChild(tmp_node); // required for firefox
    tmp_node.click();
    tmp_node.remove();
    document.getElementById("save").blur();
}

function load(){
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var fileSelected = document.getElementById("txtfiletoread");
        fileSelected.click();
        fileSelected.addEventListener(
          "change",
          function (e) {
            //Set the extension for the file
            var fileExtension = /json|txt/;
            //Get the file object
            var fileTobeRead = fileSelected.files[0];
            //Check of the extension match
            if (fileTobeRead.type.match(fileExtension)) {
              //Initialize the FileReader object to read the 2file
              var fileReader = new FileReader();
              fileReader.onload = function (e) {
                    load_game(JSON.parse(fileReader.result));
                    
              };
              fileReader.readAsText(fileTobeRead);
            } else {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    load_ans(fileReader.result);                      
                };
                fileReader.readAsText(fileTobeRead);
            //   alert("This file has type: " + fileTobeRead.type + ", not handeled");
            }
          },
          false
        );
      } else {
        alert("Files are not supported");
      }
    document.getElementById("load").blur();
}

function load_game(game_loaded){

    if('cards' in game_loaded){
        game_loaded = plspider_loader(game_loaded);
    }

    board = JSON.parse(JSON.stringify(game_loaded.current_board));
    cards_to_deal = JSON.parse(JSON.stringify(game_loaded.cards_to_deal));
    n_run = JSON.parse(JSON.stringify(game_loaded.current_deal));
    hist_board = JSON.parse(JSON.stringify(game_loaded.history_board));
    board_to_html();
}

function suit_map(x){
    if(x == 0x00) return 0
    if(x == 0x10) return 3
    if(x == 0x20) return 2
    if(x == 0x30) return 1
}

function plspider_loader(pl){
    var cards = pl.cards;
    var g_cards = cards.map(its =>{
        return its.map(it =>{
            return [Math.abs(it) & 0xf, suit_map(Math.abs(it) & 0xf0) , it >0]
        })
    })
    
    var out ={
        "cards_to_deal": g_cards[0].reverse(),
        "current_board": g_cards.slice(1,11),
        "current_deal":0,
        "history_board":[]
    }

    out.current_board.forEach(it => {
        it = it.reverse()
    });
    return out    
}
var ans0 = [];

function load_ans(ansstr_raw){
    var ans = ansstr_raw.split("\n");
    var ansstr = ans[0];
    //const start = ans.match(/\d+:\d+>\d+/).index //what if you need to deal a round first
    const start = ansstr.indexOf("GMT ")+ "GMT ".length
    var flag = ansstr.indexOf("#");
    var ansarr = ansstr.slice(start,ansstr.length).split(" ")
    ans0 = ansarr.map(it =>{
        var itz = it.replaceAll(/\s+/g,"")
        if(itz.length > 3){
            var r = '['+itz.replace(/[^\w]/g,',')+']';
            var ok = JSON.parse(r);
            if(flag!=-1){
                ok[1] = -ok[1]
            }
            return ok;
        }else{
            return itz;
        }
    })
    //return(ans0)
}



function auto_move(){
    if(ans0.length == 0){
        clearInterval(autoid);
        return 0;
    }
    const sth = ans0.shift();
    if(typeof(sth) != "string"){
        const from_j = sth[0]-1;
        const to_k = sth[2]-1;
        var row_i;
        if(sth[1]<0){
            row_i = board[from_j].length + sth[1];
        }else{
            row_i = sth[1]-1
        }

        if(ok_to_pickup(from_j,row_i)){
            move_to_col_k(from_j, to_k, row_i);
        }else{
            console.log("something is wrong")
        }
    }else if(sth == "D"){
        deal_cards();
    }
    if(keep_moving){
        autoid = setInterval(auto_move,250);
    }
}


var timestamp=0;
function dragElement(elmnt) {
    //var elmnt = e.target;
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var mx=0,my=0;
    var from_j;
    var row_i;
    var c_cards;
    elmnt.onmousedown = dragMouseDown;

    function semi_auto_move(){
        if(ok_to_pickup(from_j,row_i)){
            var entry = all_movable.findIndex(it => JSON.stringify(it[0])==elmnt.dataset.sth
            && from_j == it[1]
           )
           
           if(entry !=-1){
               var mv = all_movable[entry];
               /**the card, from_column,to_column,color_match,from_row */
               from_j=mv[1];
               row_i = board[from_j].length-1- mv[4]; //row_i is div, mv[4] is the borad
               //console.log(mv)
               return mv[2];
           }else{
               var empty=board.map(it=>it.length).indexOf(0);
               return empty;
           }
        }else{

            return -1;
        }
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        var rect = elmnt.getClientRects()[0]
        var mid = rect.left + rect.width / 2;
        from_j = which_column(mid);

        var etime = e.timeStamp
        var delta_t = etime - timestamp;
        timestamp = etime;
        //console.log(delta_t+"  ,  " + timestamp)
        if(delta_t < 300){
            // console.log("like double click")
            var to_k = semi_auto_move();
            if(to_k!=-1){
                // console.log("automove:"+from_j+"," +p+", "+row_i)
                move_to_col_k(from_j, to_k, row_i)
                // update_column(p)
                // update_column(from_j)
                //closeDragElement(e,p);
                return 0;
            }
            //timestamp = 0;
        }
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        mx = e.clientX - elmnt.offsetLeft;
        my = e.clientY - elmnt.offsetTop;

        var rect = elmnt.getClientRects()[0]
        var mid = rect.left + rect.width / 2;
        from_j = which_column(mid);
        row_i = Array.from(columns[from_j].children).indexOf(elmnt) //.findIndex((it) => it == elmnt)
        //console.log(row_i)
        if (!ok_to_pickup(from_j, row_i)) {
            document.onmouseup = null;
            document.onmousemove = null;
            return 0;
        }

        c_cards = Array.from(columns[from_j].children).slice(row_i)
        c_cards.forEach((it, z) => {
            it.style.zIndex = 1000 + z;
        })

        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        var dd = Math.abs(pos1)+Math.abs(pos2)
        if(dd < 10){return 0}
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
        var to_k = which_column(mid);
        if (from_j != to_k) {
            move_to_col_k(from_j, to_k,row_i)
        }else{
            c_cards.forEach((it, z) => {
                it.style.zIndex = 100 + z+row_i;
            }) 
        }

        c_cards.forEach((it,k) => {
            // it.style.top = (it.offsetTop - pos2) + "px";
            // it.style.left = (it.offsetLeft - pos1) + "px";
            it.style.transform = "none";
            // it.style.transition = "0s"; //set it directly in css
        })

        // update_column(k)
        // update_column(from_j)

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        //dragElement(elmnt)
    }

}

window.onload = new_game;