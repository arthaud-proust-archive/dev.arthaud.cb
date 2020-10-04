class CB {
    constructor() {
        this.init()
    }

    init() {
        console.log(document.querySelector('.cb-card'));
        document.querySelector('.cb-card').addEventListener('click', function(e){
            if (e.target.nodeName !=="DIV") return
            e.target.closest('.cb-card').classList.toggle("turn")
        })

        document.querySelectorAll('.cb-card-code-input').forEach(function(elem) {
            elem.addEventListener('keyup', function(e) {
                e.target.value = e.target.value.replace(/\D/g,'')
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                if (e.target.value.length == 4 && n<5) {
                    document.querySelector(`.cb-card-code-input[data-n="${n}"]`).focus()
                }
            });
        });
        
        document.querySelectorAll('.cb-card-expiration-input').forEach(function(elem) {
            elem.addEventListener('keyup', function(e) {
                e.target.value = e.target.value.replace(/\D/g,'')
                let n= parseInt(e.target.getAttribute('data-n'))+1;
                if (e.target.value.length == 2 && n<3) {
                    document.querySelector(`.cb-card-expiration-input[data-n="${n}"]`).focus()
                }
            });
        });

        document.querySelector('.cb-card-crypto').addEventListener('keyup', function(e) {
            e.target.value = e.target.value.replace(/\D/g,'')
        });
        
        
        // function(e){
        //     console.log(e.keyCode);
        //     if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode==8 || e.keyCode==9 || e.keyCode==46 || e.keyCode==35 || e.keyCode==36 || e.keyCode==37 || e.keyCode==39) {
        //         return true
        //     } else {
        //         console.log('false')
        //         e.preventDefault(); 
        //         return false
        //     }
        // });

    }
}