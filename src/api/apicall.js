import axios from 'axios'

var baseurl = 'https://hacker-news.firebaseio.com/v0/'

export function getTopNews() {
    return axios.get(baseurl+'topstories.json')
    .then( function(response) {
      console.log(response);
      return response.data;
    })
    .catch( function(error) {
      console.log(error);
    });
}

export function getNewsItem(newsId) {
  return axios.get(baseurl+'/item/'+newsId+'.json')
  .then(function(response) {
    console.log(response);
    return response.data;
  })
  .catch(function(error) {
    console.log(error);
  })
}
