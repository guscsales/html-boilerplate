define(['jquery', 'jquery.validation'], function ($) {
    return {
        initialize: function () {
            var $form = $("#contact-form");

            $form.validate({
                errorPlacement: function(error, element) {
                    return false;
                },
                submitHandler: function(form) {
                    var data = $(form).serialize(),
                        $feedback = $form.find('.form-feedback'),
                        $submit = $form.find('[type=submit]');

                    $feedback.find('.alert').hide().html('');
                    $submit.attr('disabled', 'disabled').find('i').css({display: 'inline-block'});

                    $.get('server/contact.php', data)
                        .done(function(data){
                            $submit.removeAttr('disabled').find('i').hide();

                            if(data.success){
                                $feedback.find('.alert-success').html('<strong>Muito bem! :)</strong> Responderemos o quanto antes.').show();

                                form.reset();
                                $('.icheck-label > div').removeClass('checked');
                            }else
                                $feedback.find('.alert-danger').html('<strong>Atenção: </strong>' + data.message).show();
                        })
                        .fail(function(){
                            $submit.removeAttr('disabled').find('i').hide();
                            
                            $feedback.find('.alert-danger').html('<strong>Atenção: Um erro ocorreu, tente novamente.</strong>').show();
                        });               
                }
            });             
        }
    };
});