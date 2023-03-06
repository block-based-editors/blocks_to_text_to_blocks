Blockly.Blocks['match_replace'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Match:");
      this.appendStatementInput("MATCH")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("Replace all matches by:");
      this.appendStatementInput("REPLACE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    },
  
  /*
   * Create XML to represent the output type.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var field;
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var dropdown = Blockly.utils.xml.createElement('dropdown');
          dropdown.setAttribute('field', field.name);
        
          container.appendChild(dropdown)
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option = Blockly.utils.xml.createElement('option');
            option.setAttribute('text', options[i][0]);
            option.setAttribute('id', options[i][1]);
            dropdown.appendChild(option);
          }
        }
      }
    }
    return container;
  },
  saveExtraState: function() {
    var field;
    var state = {'dropdowns':[]};
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var field_state = {'field':field.name, 'options' : []}
          state.dropdowns.push(field_state);
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option_state = {'text': options[i][0], 'id':options[i][1]}
            field_state.options.push(option_state)
          }
        }
      }
    }
    return state;
  },
  
  /**
   * Parse XML to restore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
  
    for (var i = 0, childNode; (childNode = xmlElement.childNodes[i]); i++) {
      if (childNode.nodeName.toLowerCase() == 'dropdown') {
        var field_name = childNode.getAttribute('field');
        var field = this.getField(field_name);
    
        var options = field.getOptions(false)
        var ids = options.map(option => option[1]);
        
        for (var j = 0, optionsElement; (optionsElement = childNode.childNodes[j]); j++) {
          if (optionsElement.nodeName.toLowerCase() == 'option') {
            var text = optionsElement.getAttribute('text');
            var id = optionsElement.getAttribute('id');
            if (!ids.includes(id)) {
              options.push([text,id])
            }
          }
        }
        field.savedOptionsSet = true;     
      }
    }
  },
  loadExtraState: function(state) {
    for (var i=0; i<state.dropdowns.length; i++)
    {
      var field_name = state.dropdowns[i].field;
      var field = this.getField(field_name);
      if (field.getOptions && !field.variable_) // is dropdown and not a variable
      { 
         var options = field.getOptions(false);
      }
      else
      {
        var options = []
      }
      var ids = options.map(option => option[1]);
      for (var j =0; j<state.dropdowns[i].options.length;j++)
      {
        var text = state.dropdowns[i].options[j].text;
        var id = state.dropdowns[i].options[j].id;
        if (!ids.includes(id)) {
          options.push([text,id])
        }
      }
      field.savedOptionsSet = true;
    }
  }
  
  
  
  };
  
  Blockly.Blocks['match_tree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("$tree", null, ), "TREE");
    this.setPreviousStatement(true, null);
    this.setColour(290);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  
  /*
   * Create XML to represent the output type.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var field;
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var dropdown = Blockly.utils.xml.createElement('dropdown');
          dropdown.setAttribute('field', field.name);
        
          container.appendChild(dropdown)
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option = Blockly.utils.xml.createElement('option');
            option.setAttribute('text', options[i][0]);
            option.setAttribute('id', options[i][1]);
            dropdown.appendChild(option);
          }
        }
      }
    }
    return container;
  },
  saveExtraState: function() {
    var field;
    var state = {'dropdowns':[]};
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var field_state = {'field':field.name, 'options' : []}
          state.dropdowns.push(field_state);
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option_state = {'text': options[i][0], 'id':options[i][1]}
            field_state.options.push(option_state)
          }
        }
      }
    }
    return state;
  },
  
  /**
   * Parse XML to restore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
  
    for (var i = 0, childNode; (childNode = xmlElement.childNodes[i]); i++) {
      if (childNode.nodeName.toLowerCase() == 'dropdown') {
        var field_name = childNode.getAttribute('field');
        var field = this.getField(field_name);
    
        var options = field.getOptions(false)
        var ids = options.map(option => option[1]);
        
        for (var j = 0, optionsElement; (optionsElement = childNode.childNodes[j]); j++) {
          if (optionsElement.nodeName.toLowerCase() == 'option') {
            var text = optionsElement.getAttribute('text');
            var id = optionsElement.getAttribute('id');
            if (!ids.includes(id)) {
              options.push([text,id])
            }
          }
        }
        field.savedOptionsSet = true;     
      }
    }
  },
  loadExtraState: function(state) {
    for (var i=0; i<state.dropdowns.length; i++)
    {
      var field_name = state.dropdowns[i].field;
      var field = this.getField(field_name);
      if (field.getOptions && !field.variable_) // is dropdown and not a variable
      { 
         var options = field.getOptions(false);
      }
      else
      {
        var options = []
      }
      var ids = options.map(option => option[1]);
      for (var j =0; j<state.dropdowns[i].options.length;j++)
      {
        var text = state.dropdowns[i].options[j].text;
        var id = state.dropdowns[i].options[j].id;
        if (!ids.includes(id)) {
          options.push([text,id])
        }
      }
      field.savedOptionsSet = true;
    }
  }
  
  
  
  };
  
  Blockly.Blocks['match_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("$tree", null, ), "TREE");
    this.setOutput(true, null);
    this.setColour(290);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  
  /*
   * Create XML to represent the output type.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var field;
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var dropdown = Blockly.utils.xml.createElement('dropdown');
          dropdown.setAttribute('field', field.name);
        
          container.appendChild(dropdown)
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option = Blockly.utils.xml.createElement('option');
            option.setAttribute('text', options[i][0]);
            option.setAttribute('id', options[i][1]);
            dropdown.appendChild(option);
          }
        }
      }
    }
    return container;
  },
  saveExtraState: function() {
    var field;
    var state = {'dropdowns':[]};
    for (var b = 0, input; input = this.inputList[b]; b++)
    {
      for (var d = 0, field; field = input.fieldRow[d]; d++)
      {  
        if (field.getOptions && !field.variable_) // is dropdown and not a variable
        {
          var field_state = {'field':field.name, 'options' : []}
          state.dropdowns.push(field_state);
          var options = field.getOptions()
          for (var i = 0; i < options.length; i++) {
            var option_state = {'text': options[i][0], 'id':options[i][1]}
            field_state.options.push(option_state)
          }
        }
      }
    }
    return state;
  },
  
  /**
   * Parse XML to restore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
  
    for (var i = 0, childNode; (childNode = xmlElement.childNodes[i]); i++) {
      if (childNode.nodeName.toLowerCase() == 'dropdown') {
        var field_name = childNode.getAttribute('field');
        var field = this.getField(field_name);
    
        var options = field.getOptions(false)
        var ids = options.map(option => option[1]);
        
        for (var j = 0, optionsElement; (optionsElement = childNode.childNodes[j]); j++) {
          if (optionsElement.nodeName.toLowerCase() == 'option') {
            var text = optionsElement.getAttribute('text');
            var id = optionsElement.getAttribute('id');
            if (!ids.includes(id)) {
              options.push([text,id])
            }
          }
        }
        field.savedOptionsSet = true;     
      }
    }
  },
  loadExtraState: function(state) {
    for (var i=0; i<state.dropdowns.length; i++)
    {
      var field_name = state.dropdowns[i].field;
      var field = this.getField(field_name);
      if (field.getOptions && !field.variable_) // is dropdown and not a variable
      { 
         var options = field.getOptions(false);
      }
      else
      {
        var options = []
      }
      var ids = options.map(option => option[1]);
      for (var j =0; j<state.dropdowns[i].options.length;j++)
      {
        var text = state.dropdowns[i].options[j].text;
        var id = state.dropdowns[i].options[j].id;
        if (!ids.includes(id)) {
          options.push([text,id])
        }
      }
      field.savedOptionsSet = true;
    }
  }
  
  
  
  };