document.body.style.backgroundColor = "yellow";
var searchInputElement = document.getElementById("query");
var minPrice = document.getElementsByClassName("flatinput min");
var maxPrice = document.getElementsByClassName("flatinput max");
var ownershipState = document.getElementsByClassName("searchgroup buttongroup purveyor");
var resultContent = document.getElementsByClassName("rows");
var interestedResult = resultContent[0].getElementsByClassName("result-row")[0];



function getInterestedResults(thisresultContent) {
    searchTerms = searchInputElement.value?.split(" ");
    console.log(searchTerms);
    var arraray = [];
    for (const ele of thisresultContent[0].children) {
        if (ele.getElementsByClassName("result-title hdrlnk")[0]?.textContent?.toUpperCase().includes(searchTerms[0]?.toUpperCase()) &&
            ele.getElementsByClassName("result-title hdrlnk")[0]?.textContent?.toUpperCase().includes(searchTerms[1]?.toUpperCase())) {
            arraray.push(ele);
        }
    }
    console.log(arraray);
    return arraray;
};

function FavoriteInterestedResults(interestedResults) {
    for (const ir of interestedResults){
        ir.getElementsByClassName("icon icon-star")[0].click();
    }
};

if (resultContent !== null) {
    var interestedResults = getInterestedResults(resultContent);
    FavoriteInterestedResults(interestedResults);
}

// (function FilterResults() {
//     //three tile select
//     ownershipState[0].children[1].children[0]
//     //price range
//     minPrice[0].value = 50;
//     maxPrice[0].value = 500;
// })();
