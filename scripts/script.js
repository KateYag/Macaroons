'use strict'


document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

let loader = $('.loader');
$('#submit').click(function (){
    let ord = $('#ord');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;


    $('.error-input').hide();

    if(!ord.val()) {
        ord.next().show();
        hasError = true;
    }
    if(!name.val()) {
        name.next().show();
        hasError = true;
    }
    if(!phone.val()) {
        phone.next().show();
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: " https://testologia.ru/checkout",
            data: { product: ord.val(), name: name.val(), phone: phone.val() }
        })

            .done(function( msg ) {

                if(msg.success) {
                    loader.hide();
                    document.getElementById("orderForm").style.display = "none";
                    document.getElementById("successMessage").style.display = "block";
                    console.log(msg);


                } else {
                    loader.hide();
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                    console.log(msg);
                }



            });

    }
})
