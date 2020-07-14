export const validate = (values) => {
    const errors = {}
    
    // if (!values.email) {
    //   errors.email = 'Ce champ est requis'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Email invalide'
    // }

    // if (!values.phone_number1) {
    //   errors.phone_number1 = 'Ce champ est requis'
    // } else if (values.phone_number1.length < 13 || values.phone_number1.length > 13) {
    //   errors.phone_number1 = 'Le numéro de télephone doit être constirué de 13 caractères'
    // }

    if( !values.ref ){
      errors.ref = {
        error: true,
        errorMessage: "Le champ ne doit pas être vide"
      }
    }
    if( !values.name ){
      errors.name = {
        error: true,
        errorMessage: "Le champ ne doit pas être vide"
      }
    }
    if( !values.description ){
      errors.description = {
        error: true,
        errorMessage: "Le champ ne doit pas être vide"
      }
    }
    if( !values.price ){
      errors.price = {
        error: true,
        errorMessage: "Le champ ne doit pas être vide"
      }
    }
    if( !values.material ){
      errors.material = {
        error: true,
        errorMessage: "Le champ ne doit pas être vide"
      }
    }
    if( !values.catalog ){
      errors.catalog = {
        error: true,
        errorMessage: "Veuillez selectionner un élement"
      }
    }
    if( !values.category ){
      errors.category = {
        error: true,
        errorMessage: "Veuillez selectionner un élement"
      }
    }
    if( !values.group ){
      errors.group = {
        error: true,
        errorMessage: "Veuillez selectionner un élement"
      }
    }

    return errors
};
