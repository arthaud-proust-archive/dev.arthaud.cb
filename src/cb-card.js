


/* By Arthaud Proust */



class CB {
    constructor(params) {
        this.parent = params.parent;
        this.id = params.id || Math.random().toString(36).substring(2);
    }

    els(el) {
        return document.querySelectorAll(el)
    }
    el(el) {
        return document.querySelector(el)
    }

    checkFrontFills() {
        var a = true;
        this.els(`#cb${this.id} .cbcff input[maxlength]`).forEach(el=>{
            if(!(el.getAttribute('maxlength') == el.value.length))a=false
        });
        if(a && /\w/g.test(this.el(`#cb${this.id} .cbcff .cbcp`).value)) {
            this.el('.cbc').closest('.cbc').classList.add("turn")
            this.el(`#cb${this.id} .cbccr`).focus()
        }
    }

    get data() {
        return {
            code: [1,2,3,4].map(n=>this.el(`#cb${this.id} .cbcc-input[data-n="${n}"]`).value).join(''),
            expiration: [1,2].map(n=>this.el(`#cb${this.id} .cbcexp-input[data-n="${n}"]`).value).join('/'),
            name: this.el(`#cb${this.id} .cbcp`).value,
            crypto: this.el(`#cb${this.id} .cbccr`).value.toUpperCase()
        }
    }

    init() {
        if(!this.el('style[data-imported-by="cb-card"]')) {
            this.el("head").innerHTML += `<style data-imported-by="cb-card">@import url(https://fonts.googleapis.com/css2?family=Miriam+Libre&family=Open+Sans+Condensed:wght@300&display=swap);.cbbox{padding:50px 0 20px 0;display:flex;flex-direction:column;align-items:center}.cbc{position:relative;display:block;height:200px;width:320px;font-family:Arial,Helvetica,sans-serif;perspective:600px}span.cbtip{font-family:Arial,Helvetica,sans-serif;font-size:13px;color:silver;margin-top:40px;user-select:none}.cbcinner{position:relative;width:100%;height:100%;text-align:center;transform-style:preserve-3d;transition:transform 1s;-webkit-transition:transform 1s;-moz-transition:transform 1s;-ms-transition:transform 1s;-o-transition:transform 1s}.cbc.turn .cbcinner{transform:rotateY(180deg);-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);-o-transform:rotateY(180deg)}.cbcbf,.cbcff{cursor:pointer;position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px;box-shadow:hsla(0,0%,24%,.6) 0 5px 25px}.cbcff{background:linear-gradient(190deg,#e66465,rgba(255,0,0,0) 70.71%),linear-gradient(-50deg,#b45eb7,#2c59ed),linear-gradient(300deg,rgba(0,0,255,.8),rgba(0,0,255,0) 70.71%)}.cbcff::after{position:absolute;content:' ';display:block;top:70px;left:35px;width:40px;height:30px;background:#e7c450;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.cbcbf{transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);-moz-transform:rotateY(180deg) translateZ(1px);-ms-transform:rotateY(180deg) translateZ(1px);-o-transform:rotateY(180deg) translateZ(1px);background:#1c1f24}.cbcbf::after{position:absolute;content:' ';display:block;top:25px;left:0;width:100%;height:25px;background:#c4c4c4}.cbc input{display:block;background:rgba(0,0,0,0);border:none;height:auto;box-sizing:content-box;padding:2px 5px;line-height:1.2}.cbc input:focus{border:none;outline-color:#fff;outline-width:.5px!important}.cbc input::placeholder{color:#adadad}.cbc .cbcc{position:absolute;top:105px;left:30px}.cbc .cbcc,.cbc .cbcexp{display:flex;flex-direction:row;flex-wrap:nowrap}.cbc .cbcc input{font-size:28px;font-family:'Open Sans Condensed',sans-serif;color:#fff;text-transform:uppercase;width:4ch!important;margin-right:5px}.cbc .cbcexp{position:absolute;bottom:20px;right:30px}.cbc .cbcexp span{color:#fff}.cbc .cbcexp input{color:#fff;text-transform:uppercase;font-family:'Miriam Libre',sans-serif;width:2ch!important;padding-top:4px}.cbc .cbcp{position:absolute;color:#fff;text-transform:uppercase;bottom:20px;left:30px;font-family:'Miriam Libre',sans-serif;width:20ch;padding-top:4px}.cbc .cbccr{position:absolute;color:#fff;text-transform:uppercase;top:60px;right:40px;font-family:'Miriam Libre',sans-serif;z-index:100;font-size:20px;width:3ch!important}`
        }
        this.el(this.parent).innerHTML += 
        `<div class="cbbox" id="cb${this.id}">
            <div class="cbc">
                <div class="cbcinner">
                    <div class="cbcff">
                        <div class="cbcc">
                            <input class="cbcc-input" autofocus data-n="1" placeholder="0000" type="text" maxlength="4">
                            <input class="cbcc-input" data-n="2" placeholder="0000" type="text" maxlength="4">
                            <input class="cbcc-input" data-n="3" placeholder="0000" type="text" maxlength="4">
                            <input class="cbcc-input" data-n="4" placeholder="0000" type="text" maxlength="4">
                        </div>
                        <input class="cbcp" placeholder="PROUST ARTHAUD" type="text">
                        <div class="cbcexp">
                            <input class="cbcexp-input" data-n="1" placeholder="M" type="text" maxlength="2">
                            <span>/</span>
                            <input class="cbcexp-input" data-n="2" placeholder="Y" type="text" maxlength="2">
                        </div>
                    </div>
                    <div class="cbcbf">
                        <input class="cbccr" placeholder="000" maxlength="3">
                    </div>
                </div>
            </div>
            <span class="cbtip">Click on the card to turn it</span>
        </div>`

        this.el(`#cb${this.id} .cbc`).addEventListener('click', function(e){
            if (e.target.nodeName !=="DIV") return
            e.target.closest('.cbc').classList.toggle("turn")
        })

        this.els(`#cb${this.id} .cbcc-input`).forEach((el)=>{
            el.addEventListener('keyup', (e)=>{
                e.target.value = e.target.value.replace(/\D/g,'').slice(0,4)
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                this.checkFrontFills();
                if (e.target.value.length == 4 && n<5) {
                    this.el(`#cb${this.id} .cbcc-input[data-n="${n}"]`).focus()
                } else if (e.target.value.length == 4 && n==5) {
                    this.el(`#cb${this.id} .cbcp`).focus()
                }
                
            });
        });
        
        this.els(`#cb${this.id} .cbcexp-input`).forEach((el)=>{
            el.addEventListener('keyup', (e)=>{
                e.target.value = e.target.value.replace(/\D/g,'').slice(0,2)
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                this.checkFrontFills()
                if (e.target.value.length == 2 && n<3 ) {
                    this.el(`#cb${this.id} .cbcexp-input[data-n="${n}"]`).focus()
                }
            });
        });
        
        this.el(`#cb${this.id} .cbcp`).addEventListener('keyup', function(e) {
            e.target.value = e.target.value.replace(/ +/g, ' ').replace(/[^a-zA-Z ]/g,'')
        });

        this.el(`#cb${this.id} .cbccr`).addEventListener('keyup', function(e) {
            e.target.value = e.target.value.replace(/\D/g,'')
            if (e.target.value.length == 3) {
                e.target.closest('.cbc').classList.remove("turn")
            }
        });
    }
}