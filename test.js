function funcionAxios(number) {
  alert ("Test");
var config = {
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
    'Access-Control-Allow-Origin': '*'}
};
    axios({
    method: 'get',
    url: 'https://ijxswbp5jh.execute-api.us-east-2.amazonaws.com/dev/v1/get-allowed-tokens-to-swap/0xb1d6285a525f82abff5e1136ee5bb7ea7f0b3ecb8940de4bd5074fabca9ea6b711acc685de139ce33b41966680494c0ca21c98252ecce977fed90546c59c359f1c/0x4666E4f3f4A00D06c918A188378Dfd450a210333',
    responseType: 'text',
    },config)
    .then(function (response) {
      console.log(response.data);
      //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });

  return number * number;
}
