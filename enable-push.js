f();function f(){if(!1 in navigator){console.log("Service worker isn't supported.");return}if(!1 in window){console.log("Push notifications aren't supported.");return}navigator.serviceWorker.register("sw.js").then(()=>{console.log("Service worker installed!"),y()}).catch(t=>{console.log(t)})}function b(){if(!navigator.serviceWorker.ready)return;(localStorage.getItem("notification")==="granted"||localStorage.getItem("notification")==="denied")&&console.log(`The user ${localStorage.getItem("notification")} to receive notifications`),console.log(localStorage.getItem("subscribe")?"The user is subscribed":"The user isn't subscribed");let t=document.querySelector("head"),e=document.createElement("style");e.textContent=`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        .prompt {
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            left: 0;
            right: 0;
            top: -50vh;
            border-radius: 10px;
            width: 50vw;
            height: 40vh;
            background: #ffffff;
            box-shadow: 0px 0px 12px 4px #000000;
            transition: 200ms;
            z-index: 100;
        }

        .notification-text {
            text-align: center;
            padding: 1vh 0;
            font-size: 1.5rem;
            font-weight: 500;
            font-family: 'Poppins';
            color: #778899;
        }

        .btn-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            padding: 1vh 0;
        }

        .btn {
            width: 30%;
            padding: 1vh 2vw;
            color: #ffffff;
            font-weight: 600;
            border-radius: 10px;
            text-transform: uppercase;
            font-family: 'Poppins';
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .btn-blue {
            background: #0000ff99;
        }

        .btn-red {
            background: #ff000099;
        }

        .show {
            top: 1vh;
            transition: 200ms;
        }

        @media screen and (max-width: 500px) {
            .prompt {
                width: 100vw;
                height: 20vh;
                border-radius: 10px 10px 0 0;
                box-shadow: 0 0 0 transparent;
                top: unset;
                bottom: -20vh;
            }

            .notification-text {
                font-size: 1rem;
            }

            .btn-container {
                justify-content: space-around;
                gap: unset;
            }

            .btn {
                width: 45%;
                padding: 1vh 1vw;
            }

            .show {
                bottom: 0vh;
                box-shadow: 0 0px 12px 4px #000000;
                transition: 200ms;
            }
        }
    `,t.appendChild(e);let o=document.querySelector("body"),n=document.createElement("div");n.classList.add("prompt");let i=document.createElement("p");i.classList.add("notification-text"),i.textContent=`\xBFDeseas recibir notificaciones de ${SITE}?`;let r=document.createElement("div");r.classList.add("btn-container");let c=document.createElement("div");c.classList.add("btn","btn-blue"),c.textContent="aceptar";let l=document.createElement("div");l.classList.add("btn","btn-red"),l.textContent="denegar",r.appendChild(l),r.appendChild(c),n.appendChild(i),n.appendChild(r),o.appendChild(n);let d=document.querySelector(".prompt"),u=document.querySelector(".btn-blue"),g=document.querySelector(".btn-red");localStorage.getItem("prompt")===null&&localStorage.getItem("subscribe")===null&&setTimeout(()=>{d.classList.toggle("show")},5e3),g.addEventListener("click",()=>{localStorage.setItem("prompt","dismissed"),localStorage.setItem("notification","denied"),d.classList.toggle("show"),console.log("Denied")}),u.addEventListener("click",()=>{localStorage.setItem("prompt","dismissed"),localStorage.setItem("notification","granted"),d.classList.toggle("show"),console.log("Granted"),new Promise(function(s,h){const p=Notification.requestPermission(function(m){s(m)});p&&p.then(s,h)}).then(s=>{if(s!=="granted")throw new Error("We weren't granted permission.");console.log("Subscribing user"),x()})})}function a(t){let e=String.fromCharCode.apply(null,t);return btoa(e)}function y(){navigator.serviceWorker.ready.then(t=>{t.pushManager.getSubscription().then(e=>{if(e!==null&&localStorage.getItem("subscribe")===null){let o=new Uint8Array(e.getKey("auth")),n=new Uint8Array(e.getKey("p256dh"));const i={endpoint:e.endpoint,expirationTime:e.expirationTime,siteKey:PUBLIC_KEY,url:document.URL,keys:{auth:a(o),p256dh:a(n)}};return console.log("Resubscribing user."),v(i)}console.log("Asking request from user."),b()})})}function x(){navigator.serviceWorker.ready.then(t=>{const e={userVisibleOnly:!0,applicationServerKey:PUBLIC_KEY};return t.pushManager.subscribe(e)}).then(t=>{let e=new Uint8Array(t.getKey("auth")),o=new Uint8Array(t.getKey("p256dh"));const n={endpoint:t.endpoint,expirationTime:t.expirationTime,siteKey:PUBLIC_KEY,url:document.URL,keys:{p256dh:a(o),auth:a(e)}};w(n)})}function w(t){localStorage.setItem("subscribe",!0),fetch({}.'https://push.passar.io/api/store',{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}function v(t){localStorage.setItem("subscribe",!0),fetch({}.'https://push.passar.io/api/resubscribe',{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}
