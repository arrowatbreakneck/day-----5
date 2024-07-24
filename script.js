
//resume:
var resume = [{
    "name":"raghav srinivas",
    "age":30,
    "nationality":"indian",
    "profissional summary":"making my self as software developer"
}];
//for loop :
for(var i=0;i<resume.length;i++){
    console.log(i,resume[i]);
}

var resumeTwo = {
    "name":"raghav srinivas",
    "age":30,
    "nationality":"indian",
    "profissional summary":"making my self as software developer"
};
// for in :
for(var i in resumeTwo){
    console.log(resumeTwo[i]);
};
 
// for of : 
var res = object.keys(resumeTwo);
for(var elements of res){
    console.log(resumeTwo[element]);
} ;
// for each:
res.forEach(element => { console.log(resumeTwo[element])});
    
