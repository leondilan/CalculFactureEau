$(document).ready(function () {
    let nouveau=$('#nouveau')
    let ancien=$('#ancien')
    let nbre=$('#nbre')

    setInterval(() => {
        if (nouveau.val()!=='' && ancien.val()!=='' && nbre.val()!=='') {
            $('button').removeAttr('disabled');
        }else{
            $('button').attr('disabled', true);
        }
    }, 100);

    $('form button').click(function (e) { 
        e.preventDefault();
        let a=parseFloat(nouveau.val())
        let b=parseFloat(ancien.val())
        let c=parseFloat(nbre.val())

        $('.consoTotal').text(a-b);
        d=(a-b)*364
        e=d*0.1925
        f=780/c
        g=f*0.1925
        total=parseFloat(d)+parseFloat(e)+parseFloat(f)+parseFloat(g)

        $('.HT').text(d.toFixed(2));
        $('.TVAC').text(e.toFixed(2));
        $('.COMP').text(f.toFixed(2));
        $('.TVACOMP').text(g.toFixed(2));
        $('.total').text(Math.ceil(total));
    });
});