function run(){
  let a = CryptoJS.AES.encrypt(SrcText.value, KeyText.value, { iv: 0, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
  console.log(a);
}

encryption.addEventListener("click",run);
