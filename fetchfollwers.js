var axios = require('axios');





const apiResponse = require("./apiresponse");

module.exports ={
viewOne: async function(req, res){
  console.log("req",req.body)





   

let allExtractedDataArr = []


// let cases = document.querySelector(".cases");
let userid = req.body.userid
let twitterApiBaseUrl = req.body.apiUrl
    // You find twitterApiBaseUrl in dev tool > network tab > find request example https://twitter.com/i/api/graphql/WlnOSEvcu8DEExmFAn_vJA/Favoriters

let x_csrf_token = req.body.csrftoken 
// You find x_csrf_token token in dev tool > network tab > find request like https://twitter.com/i/api/graphql/WlnOSEvcu8DEExmFAn_vJA/Favoriters look for headers and find this token

let bearerToken = req.body.bearer
// You find bearerToken token in dev tool > network tab > find request like https://twitter.com/i/api/graphql/WlnOSEvcu8DEExmFAn_vJA/Favoriters look for headers and find this token

/* ------------- Variable need to change END -------------------- */

let loopTill = 0

await startRequest()
async function startRequest (nextCursor){

  loopTill++;
  let reqUrl

        if (nextCursor) {
            reqUrl = `%7B%22userId%22%3A%22${userid}%22%2C%22count%22%3A20%2C%22cursor%22%3A%22${encodeURIComponent(nextCursor)}%22%2C%22includePromotedContent%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Atrue%2C%22withDownvotePerspective%22%3Atrue%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withSuperFollowsTweetFields%22%3Atrue%7D&features=%7B%22dont_mention_me_view_api_enabled%22%3Atrue%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_uc_gql_enabled%22%3Afalse%2C%22vibe_tweet_context_enabled%22%3Afalse%2C%22responsive_web_edit_tweet_api_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D`
        } else {
            reqUrl = `%7B%22userId%22%3A%22${userid}%22%2C%22count%22%3A20%2C%22includePromotedContent%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Atrue%2C%22withDownvotePerspective%22%3Atrue%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withSuperFollowsTweetFields%22%3Atrue%7D&features=%7B%22dont_mention_me_view_api_enabled%22%3Atrue%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_uc_gql_enabled%22%3Afalse%2C%22vibe_tweet_context_enabled%22%3Afalse%2C%22responsive_web_edit_tweet_api_enabled%22%3Afalse%2C%22standardized_nudges_misinfo%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D`
        }
// ************* IMPORTANT NOTE:: This script should run while you logged in twitter otherwise request will get fail *************//

/* ------------- Variable need to change START ------------------ */

/* Change following variable as per requirement */


// You can find this id in url box example https://twitter.com/{{account username}}/status/1536726802466344961 << here




var config = {
  method: 'get',
  url: `${twitterApiBaseUrl}?variables=${reqUrl}`,
  headers: { 
    'authority': 'twitter.com', 
    'accept': '*/*', 
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 
    'authorization': `${bearerToken}`, 
    'cache-control': 'no-cache', 
    'content-type': 'application/json', 
    'cookie': 'guest_id_marketing=v1%3A165571697613501993; guest_id_ads=v1%3A165571697613501993; personalization_id="v1_hqIHqwkzmnEeooW5ATIgzA=="; guest_id=v1%3A165571697613501993; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; _ga=GA1.2.829288957.1655716981; kdt=TZTGhIp3riW1htSpqCvgvSwewNXrWLOoynJnOYbh; auth_token=eaa50179e80155d6aa61a4bf8118cb3eaa33bbd1; twid=u%3D1538814109877055489; ct0=232ec371f33a91a34a04d4888481f65d93961d54b0949febf7eb9b069fdcea5b4d4727898f19eb7f8c7c85209e39ffe710f4dc249f5d5c900933fd168cfe27518a936598c6c38a43c9c4f498c4b73082; _gid=GA1.2.1830956494.1655966779', 
    'pragma': 'no-cache', 
    // 'referer': 'https://twitter.com/sanjayleo/followers', 
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-origin', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36', 
    'x-csrf-token':  `${x_csrf_token}`, 
    'x-twitter-active-user': 'yes', 
    'x-twitter-auth-type': 'OAuth2Session', 
    'x-twitter-client-language': 'en'
  }
};

axios(config)
.then(async function (response) {
  console.log(JSON.stringify(response.data.data));

 if ( response.data.data.user.result.timeline.timeline &&
    response.data.data.user.result.timeline.timeline.instructions
    && response.data.data.user.result.timeline.timeline.instructions[0]) {


    

  let entries = response.data.data.user.result.timeline.timeline.instructions[response.data.data.user.result.timeline.timeline.instructions.length -1].entries;
    let cursorBtm = entries.find(item => item.entryId.indexOf("cursor-bottom") > -1);

    let nextCursor = cursorBtm.content.value
    // cases.textContent = nextCursor;
for (let i = 0; i < response.data.data.user.result.timeline.timeline.instructions[response.data.data.user.result.timeline.timeline.instructions.length -1].entries.length - 2; i++) {
   allExtractedDataArr.push(response.data.data.user.result.timeline.timeline.instructions[response.data.data.user.result.timeline.timeline.instructions.length -1].entries[i].content.itemContent.user_results.result.legacy.screen_name)


  }
if(response.data.data.user.result.timeline.timeline.instructions[response.data.data.user.result.timeline.timeline.instructions.length -1].entries.length < 20){
// saveIt(); 


return apiResponse.successResponseWithData(res, "sucess", allExtractedDataArr);
// res.send('user' + allExtractedDataArr);
// return allExtractedDataArr;
}
        if(loopTill%10 == 0) await delay(10000);
        else await delay(1000);
        await startRequest(nextCursor);
    
    // else {
    //     saveIt();
    // }

} else {
    saveIt()
}
  // alert(response.data.data.user.result.timeline.timeline.instructions[response.data.data.user.result.timeline.timeline.instructions.length -1].entries.length)
  // let filename = "twitter.json"
  // saveTemplateAsFile(filename, response.data.data);
})
.catch(function (error) {
  console.log(error);
});
}
function saveIt() {
  let filename = "twitter_likebyusers_data.json"
  saveTemplateAsFile(filename, allExtractedDataArr);
}

function saveTemplateAsFile(filename, dataObjToWrite) {
  console.log(filename, dataObjToWrite)
  console.log("Blob", Blob)
  const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
  const link = document.createElement("a");

  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false,
  });

  link.dispatchEvent(evt);
  link.remove()
};
const delay = ms => new Promise(res => setTimeout(res, ms));


}
};



  

