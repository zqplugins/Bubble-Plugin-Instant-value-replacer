function(properties, context) {

  let observedInput = document.getElementById(properties.input_id);
  
  let replacement = properties.new_character_to_be_placed;

  if (replacement === null) {
    replacement = ''; 
  }
  
  observedInput.setAttribute("oninput", `this.value = this.value.replace('${properties.value_to_look_for}', '${replacement}')`);

}