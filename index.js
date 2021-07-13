
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-K0EYK7ZWBNRU-2");

function validate(username)
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
    const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
    
    if(username!=""){
        if((username=="vinesh.gandhe@gmail.com" || username=="gvk7663@gmail.com" || username=="vgande@gainsight.com"||username=="demouser7663@gmail.com")&& password=="user" )
        {
            alert("valid user");
            b = username.substr(6, 5);
            var id = b;
            if (username=="vinesh.gandhe@gmail.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username,
                            "gender": "male",
                            "customAttributes" : {
                                                
                                                "Useractive" :"yes"
                                              }

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a4, //Required
                            "name": myaccount.a4,
                            // flat custom attributes
                        });
                } else if (username=="gvk7663@gmail.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a3, //Required
                            "name": myaccount.a3,
                            // flat custom attributes
                        });
                } else if (username=="vgande@gainsight.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a2, //Required
                            "name": myaccount.a2,
                            // flat custom attributes
                        });
                } else {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a1, //Required
                            "name": myaccount.a1,
                            // flat custom attributes
                        });
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
            window.location = "https://vineshgvk.github.io/Basic_Website/home.html";
      
            return false;

        }
        else
        {
            alert("login failed");
        }
    }
        else{
            alert("enter 'demouser7663@gmail.com'");
        }


}

function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}


// const a=document.querySelector(".beginbtn");
// a.addEventListener('click',onclicked);
// function onclicked(e){
//     console.log(e.eventtype);
// }

// const contbtn= document.querySelector(".btn-sendmail");
// contbtn.addEventListener("click",runevent);
// function runevent(e){
//     console.log(e);
    
// }


// script for payment page


var Productname = "mobile";
var Productbrand = "apple";
var Productprice = 78000;
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {
    detail: {
        itemName: this.Productname,
        itemBrand: this.Productbrand
    }
})
let transactionsuccess = new CustomEvent('transactionsuccess', {
    detail: {
        Amountdeducted: this.Productprice,
        Paymentstatus: this.transactionStatus
    }
})
document.addEventListener('DOMContentLoaded', function () {
    let m = document.getElementById('paymentbtn');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Pay Now";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Donot Refresh..." + "  Transaction is in Progress...";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 3000);


}
function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {
        itemName: ev.detail.itemName,
        itemBrand: ev.detail.itemBrand
    });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', {
        Amountdeducted: ev1.detail.Amountdeducted,
        Paymentstatus: ev1.detail.Paymentstatus
    });
}



