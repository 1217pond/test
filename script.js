function run(){
  let a = CryptoJS.AES.encrypt(SrcText.value, KeyText.value).toString();
  console.log(a);
}

encryption.addEventListener("click",run);
