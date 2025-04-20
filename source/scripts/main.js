$(document).ready(function(){
  
  $('#telefone').mask('(00) 00000-0000',{
    placeholder: '(__) _____-____'
  })

  $('.form-container').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      tel: {
        required: true
      }
    },
    messages: {
      name: 'Este campo é obrigatório',
      email: 'Este campo é obrigatório',
      tel: 'Este campo é obrigatório'
    }
  })

})