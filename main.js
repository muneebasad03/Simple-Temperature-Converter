let a = document.getElementById('cel');
let b = document.getElementById('far');

a.addEventListener("input", function() {
            let c = this.value;
            let y = (c * 9/5) + 32 ;
            b.value= y;

});


b.addEventListener("input", function() {
     let f   = this.value; 
    let o = (f - 32  ) * 5/9 ;
    a.value = o;
});