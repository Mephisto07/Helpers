//This function remove all repeated keys from a JSON object. 
//Params: "json" - JSON object
//        "keyToDel" - common key in JSON to delete
function remove (json, keyToDel) {
  delete json[key];
  var removeKey = function (arr) {
      $.each(arr, function (key, value) {
          $.each(value, function (k, v) {
              if (k == keyToDel) {
                  delete value[k];
              } else {
                  if (v instanceof Array) {
                      removeKey(v);
                  }
              }
          });
      });
  }
  
  $.each(json, function (key, value) {
      if (value instanceof Array) {
          removeKey(value);
      }
  });
  
  return json;
}
