var numposts = 5;
var showpostthumbnails = false;
var showpostdate = false;
var relatedTitles=new Array();
var relatedTitlesNum=0;
var relatedUrls=new Array();
function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];
relatedTitles[relatedTitlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if(d.link[a].rel=="alternate"){relatedUrls[relatedTitlesNum]=d.link[a].href;relatedTitlesNum++;break}}}}
function removeRelatedDuplicates(){var b=new Array(0);
var c=new Array(0);for(var a=0;a<relatedUrls.length;a++){if(!contains(b,relatedUrls[a])){b.length+=1;b[b.length-1]=relatedUrls[a];c.length+=1;c[c.length-1]=relatedTitles[a]}}relatedTitles=c;relatedUrls=b}
function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}
function printRelatedLabels(a){for(var b=0;b<relatedUrls.length;b++){if(relatedUrls[b]==a){relatedUrls.splice(b,1);relatedTitles.splice(b,1)}}
var c=Math.floor((relatedTitles.length-1)*Math.random());
var b=0;if(relatedTitles.length>1)document.write("<ul>");while(b<relatedTitles.length&&b<20&&b<maxresults){document.write('<li><a href="'+relatedUrls[c]+'">'+relatedTitles[c]+"</a></li>");if(c<relatedTitles.length-1){c++}else{c=0}b++}document.write("</ul>");relatedUrls.splice(0,relatedUrls.length);relatedTitles.splice(0,relatedTitles.length)};
