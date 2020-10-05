


/* By Arthaud Proust */



class CB {
    constructor(parent, id=Math.random().toString(36).substring(2)) {
        this.parent = parent;
        this.id = id;
    }

    els(el) {
        return document.querySelectorAll(el)
    }
    el(el) {
        return document.querySelector(el)
    }

    checkFrontFills() {
        var a = true;
        this.els(`#cb-${this.id} .cb-card-frontface input[maxlength]`).forEach(el=>{
            if(!(el.getAttribute('maxlength') == el.value.length))a=false
        });
        if(a && /\w/g.test(this.el(`#cb-${this.id} .cb-card-frontface .cb-card-person`).value)) {
            this.el('.cb-card').closest('.cb-card').classList.add("turn")
        }
    }

    get data() {
        return {
            code: [1,2,3,4].map(n=>this.el(`#cb-${this.id} .cb-card-code-input[data-n="${n}"]`).value).join(''),
            expiration: [1,2].map(n=>this.el(`#cb-${this.id} .cb-card-expiration-input[data-n="${n}"]`).value).join('/'),
            name: this.el(`#cb-${this.id} .cb-card-person`).value,
            crypto: this.el(`#cb-${this.id} .cb-card-crypto`).value.toUpperCase()
        }
    }

    init() {
        this.el('head').innerHTML+=`<style>@import url(https://fonts.googleapis.com/css2?family=Miriam+Libre&family=Open+Sans+Condensed:wght@300&display=swap);div.cb-box{padding:50px 0px 20px 0px;display:flex;flex-direction:column;align-items:center}div.cb-card{position:relative;display:block;height:200px;width:320px;font-family:Arial,Helvetica,sans-serif;perspective:600px}span.cb-tip{font-family:Arial,Helvetica,sans-serif;font-size:13px;color:silver;margin-top:40px;user-select:none}.cb-card-inner{position:relative;width:100%;height:100%;text-align:center;transform-style:preserve-3d;transition:transform 1s;-webkit-transition:transform 1s;-moz-transition:transform 1s;-ms-transition:transform 1s;-o-transition:transform 1s}.cb-card.turn .cb-card-inner{transform:rotateY(180deg)}.cb-card-backface,.cb-card-frontface{cursor:pointer;position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px;box-shadow:hsla(0,0%,24%,.6) 0 5px 25px}.cb-card-frontface{background:linear-gradient(190deg,#e66465,rgba(255,0,0,0) 70.71%),linear-gradient(-50deg,#b45eb7,#2c59ed),linear-gradient(300deg,rgba(0,0,255,.8),rgba(0,0,255,0) 70.71%)}div.cb-card-frontface::after{position:absolute;content:' ';display:block;top:70px;left:35px;width:40px;height:30px;background:#e7c450;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}div.cb-card-backface{transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);-moz-transform:rotateY(180deg) translateZ(1px);-ms-transform:rotateY(180deg) translateZ(1px);-o-transform:rotateY(180deg) translateZ(1px);background:#1c1f24}div.cb-card-backface::after{position:absolute;content:' ';display:block;top:25px;left:0;width:100%;height:25px;background:#c4c4c4}div.cb-card input{display:block;background:rgba(0,0,0,0);border:none;height:auto;box-sizing:content-box;padding:2px 5px}div.cb-card input:focus{border:none;outline-color:#fff;outline-width:.5px!important}div.cb-card input::placeholder{color:#adadad}div.cb-card .cb-card-code{position:absolute;top:105px;left:30px;display:flex;flex-direction:row;flex-wrap:nowrap}div.cb-card .cb-card-code input{font-size:28px;font-family:'Open Sans Condensed',sans-serif;color:#fff;text-transform:uppercase;width:4ch!important;margin-right:5px}div.cb-card .cb-card-expiration{position:absolute;display:flex;flex-direction:row;flex-wrap:nowrap;bottom:20px;right:30px}div.cb-card .cb-card-expiration span{color:#fff}div.cb-card .cb-card-expiration input{color:#fff;text-transform:uppercase;font-family:'Miriam Libre',sans-serif;width:2ch!important}div.cb-card .cb-card-person{position:absolute;color:#fff;text-transform:uppercase;bottom:20px;left:30px;font-family:'Miriam Libre',sans-serif;width:20ch}div.cb-card .cb-card-crypto{position:absolute;color:#fff;text-transform:uppercase;top:60px;right:40px;font-family:'Miriam Libre',sans-serif;z-index:100;font-size:20px;width:3ch!important}</style>`
        this.el(this.parent).innerHTML += 
        `<div class="cb-box" id="cb-${this.id}">
            <div class="cb-card">
                <div class="cb-card-inner">
                    <div class="cb-card-frontface">
                        <div class="cb-card-code">
                            <input class="cb-card-code-input" data-n="1" placeholder="0000" type="text" maxlength="4">
                            <input class="cb-card-code-input" data-n="2" placeholder="0000" type="text" maxlength="4">
                            <input class="cb-card-code-input" data-n="3" placeholder="0000" type="text" maxlength="4">
                            <input class="cb-card-code-input" data-n="4" placeholder="0000" type="text" maxlength="4">
                        </div>
                        <input class="cb-card-person" placeholder="PROUST ARTHAUD" type="text">
                        <div class="cb-card-expiration">
                            <input class="cb-card-expiration-input" data-n="1" placeholder="01" type="text" maxlength="2">
                            <span>/</span>
                            <input class="cb-card-expiration-input" data-n="2" placeholder="01" type="text" maxlength="2">
                        </div>
                    </div>
                    <div class="cb-card-backface">
                        <input class="cb-card-crypto" placeholder="000" maxlength="3">
                    </div>
                </div>
            </div>
            <span class="cb-tip">Click on the card to turn it</span>
        </div>`

        this.el(`#cb-${this.id} .cb-card`).addEventListener('click', function(e){
            if (e.target.nodeName !=="DIV") return
            e.target.closest('.cb-card').classList.toggle("turn")
        })

        this.els(`#cb-${this.id} .cb-card-code-input`).forEach((el)=>{
            el.addEventListener('keyup', (e)=>{
                e.target.value = e.target.value.replace(/\D/g,'').slice(0,4)
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                this.checkFrontFills();
                if (e.target.value.length == 4 && n<5) {
                    this.el(`#cb-${this.id} .cb-card-code-input[data-n="${n}"]`).focus()
                }
                
            });
        });
        
        this.els(`#cb-${this.id} .cb-card-expiration-input`).forEach((el)=>{
            el.addEventListener('keyup', (e)=>{
                e.target.value = e.target.value.replace(/\D/g,'').slice(0,2)
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                this.checkFrontFills()
                if (e.target.value.length == 2 && n<3) {
                    this.el(`#cb-${this.id} .cb-card-expiration-input[data-n="${n}"]`).focus()
                }
            });
        });
        
        this.el(`#cb-${this.id} .cb-card-person`).addEventListener('keyup', function(e) {
            e.target.value = e.target.value.replace(/ +/g, ' ').replace(/[^a-zA-Z ]/g,'')
        });

        this.el(`#cb-${this.id} .cb-card-crypto`).addEventListener('keyup', function(e) {
            e.target.value = e.target.value.replace(/\D/g,'')
            if (e.target.value.length == 3) {
                e.target.closest('.cb-card').classList.remove("turn")
            }
        });
    }
}