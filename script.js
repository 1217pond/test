function run(){
  let a = CryptoJS.AES.encrypt(SrcText.value, KeyText.value);
  console.log('Crypto :' + a);
}

encryption.addEventListener("click",run);
