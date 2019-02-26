var elm = document.getElementById('search');
var span = document.getElementById('searchKey');

function printSearchKey()
{
  span.innerHTML = elm.value;
}
var query = window.location.search.substring(3);
if(query.length)
{
  elm.value = decodeURIComponent(query);
  printSearchKey();
}

(function createList()
{
  var searchResults = document.getElementById("search_results");
  for(var i=0;i<data.length;i++)
  {
    var article = document.createElement('article');
    article.innerHTML = data[i].desc;
    searchResults.appendChild(article);
  }
})();
