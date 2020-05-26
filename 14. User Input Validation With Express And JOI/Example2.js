// Validating Nested Object and Arrays using Joi
const Joi = require('joi');
const arrayString = ['banana', 'bacon', 'cheese'];


// suppose this is the input that we got from user
const userInput1 = {
  personalInfo: {
    streetAddress: '12312312334',
    city: 'Recife',
    state: 'PE'
  },
  preferences: arrayString
};

const personalInfoSchema = Joi.object().keys({
  streetAddress: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required()
});

// items is a helper method that take in other schema
const preferencesSchema1 = Joi.array().items(Joi.string()); // checking if all the items in the array are string

// combining these 2 schemas
const schema1 = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema1
});

Joi.validate(userInput1, schema1, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
});



const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];
const userInput2 = {
    personalInfo: {
      streetAddress: '12312312334',
      city: 'Recife',
      state: 'PE'
    },
    preferences: arrayObjects
  };

// items is a helper method that take in other schema
const preferencesSchema2 = Joi.array().items(Joi.object().keys({ 
    example: Joi.string().required()
}));

// combining these 2 schemas
const schema2 = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema2
});

Joi.validate(userInput2, schema2, (error, result) => {
    if (error) {
    console.log(error);
    } else {
    console.log(result);
    }
});



// const preferencesSchema = Joi.array().items(Joi.object().keys({ 
//   example: Joi.string().required()
// }));

// const userInputschema = Joi.object().keys({
//   personalInfo: personalInfoSchema,
//   preferences: preferencesSchema
// });

// Joi.validate(userInput, userInputschema, (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });
