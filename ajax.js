const s=document.getElementById("button");
const check=document.getElementById("siya");
const xhr = new XMLHttpRequest();
s.onclick = function getInputValue() {
	const id=document.getElementById("movie_id").value;
    xhr.open("Get","https://www.omdbapi.com/?t="+id+"&apikey=62f0ed46");
    xhr.onloadend = detailsAjaxResponse;
    xhr.send();
};

let detailsAjaxResponse = function() {
    if (xhr.status===200) {
        let response=JSON.parse(xhr.responseText);
        console.log(response)
   } else {
    	check.innerHTML="Something went wrong";
   }
};
