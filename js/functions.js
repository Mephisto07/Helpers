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

//This function valid multiples <form></form> containing required fields and return a validate status.
//NOTE: This example is using an AngularJS $scope to validate the form.
function validForms(){            
            //get all forms 
            var arrForms = {};
            $("form").each(function () { arrForms[$(this).attr('name')] = {}; });

            //check if all forms has values and are valid
            for (var key in arrForms) {            
                arrForms[key].hasValue = false;
                arrForms[key].valid = $scope[key].$valid; //AngularJS $scope
              
                //If form and a prime form are valid
                if (arrForms[key].valid && $scope.formItems.$valid) {
                    return true;
                } else { //if for is not valid but has values
                    $('form[name=' + key + '] input').each(function () {
                        if ($(this).val() != '') {
                            arrForms[key].hasValue = true;
                        }
                    });

                    if (arrForms[key].hasValue) { 
                        return false;
                    } else { //if form has no values, set prime form validation
                        return $scope.formItems.$valid;
                    }
                }                                    
            };
        }
