
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
                            "customAttributes" : {
                                                "DOB": 909426600000
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


const a=document.querySelector(".beginbtn");
a.addEventListener('click',onclicked);
function onclicked(e){
    console.log(e.eventtype);
}

const contbtn= document.querySelector(".btn-sendmail");
contbtn.addEventListener("click",runevent);
function runevent(e){
    console.log(e);
    
}


