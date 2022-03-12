function run(){
  console.log(CryptoJS.AES.encrypt(SrcText.value, KeyText.value));
}

encryption.addEventListener("click",run);
