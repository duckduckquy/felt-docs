---
sidebar_position: 6
---

# Filters

Filters are defined as strings and always return a `boolean` value. If that value is `true`, the feature is rendered.

Filters have the following form `operand1 operator operand2` where the operator is one of `<`, `>`, `<=`, `>=`, `==`, and `!=`, and operands can be either a numerical value, a string value, or a boolean value. Operators `&&`, `||`, `AND`, and `OR` can be used to chain multiple filters. Parentheses are not supported at this moment. Operands and operators need to be separated by a space.

Feature properties can be referenced using the `$` symbol in front of the attribute's name. 

If the same operator is to be applied to multiple operands, you can use the following array notation: `[operand1_1, operand1_2, operand1_3] operator [operand2_1, operand2_2, operand2_3]` This filter is equivalent to `operand1_1 operator operand2_1 AND operand1_2 operator operand2_2 AND operand1_3 operator operand2_3`. 

If one side of the operator is an array and the other isn’t, the single value operator is used multiple times. `operand1 operator [operand2_1, operand2_2]` is equivalent to operand1 `operator operand2_1 AND operand1 operator operand2_2`

Let’s take a look at some examples:

```
"$acres < 50000" // Will filter out features with a value in the attribute
                 // "acres" higher than 50000
"$acres >= 50000 && $acres <= 70000"// Will filter out features with a value in       
																		// the attribute "acres" not in the [50000, 
																		// 7000] interval
"$class == [rail, tram]"          // Will filter out features that have a
																	// class value of neither "rail" or "tram"
"$class == \"class one\""         // Will filter out features that have a
																	// class value different than "class one"
"true"           // All features will pass this filter check
"false"          // No features will pass this filter check
```

Examples of the filter syntax