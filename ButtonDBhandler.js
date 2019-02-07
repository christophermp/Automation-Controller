var jsonObj = {
  myObject: [
    {
      title: "JAVA",
      id: "JAVAsubj",
      path: "json/data.json"
    },
    {
      title: "C#",
      id: "JAVAsubj",
      path: "json/data1.json"
    },
    {
      title: "C++",
      id: "JAVAsubj",
      path: "json/data2.json"
    }
  ]
};
var count = Object.keys(jsonObj.myObject).length;
//alert(count);
var container = document.getElementById("buttons");
for (var i = 0; i < count; i++) {
  //console.log(jsonObj.myObject[i]);
  var obj = jsonObj.myObject[i];
  var button = "<input type='button' value=" + obj.title + "></input>";
  container.innerHTML += button;
}
