encryption.addEventListener("click",run);

function run(){
  console.log(CryptoJS.AES.encrypt(SrcText.value, KeyText.value).toString(CryptoJS.enc.Utf8);
}
