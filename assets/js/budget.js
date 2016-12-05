define(['jquery', 'jquery.validation'], function ($) {
    return {
        initialize: function () {
            var $form = $("#budget-form");

            $.validator.addMethod('onecheck', function() {
                return $form.find('input:checked').length >= 1;
            }, 'Selecione ao menos uma opção acima');

            $form.find('.icheck-label').on('click', function(){
                $form.validate().element('[name=services]');
            });

            $form.validate({
                rules: {
                    services: {
                        onecheck: true
                    }
                },
                errorPlacement: function(error, element) {
                    error.appendTo(element.parents('.form-group').find('.error'));
                },
                submitHandler: function(form) {
                    var data = $(form).serialize(),
                        $feedback = $form.find('.form-feedback'),
                        $submit = $form.find('[type=submit]');

                    $form.find('[name=services]').each(function(){
                        var $this = $(this);

                        if($this.is(':checked'))
                            data += '&' + $this.attr('id') + '=on';
                    });

                    $feedback.find('.alert').hide().html('');
                    $submit.attr('disabled', 'disabled').find('i').css({display: 'inline-block'});

                    $.get('server/budget.php', data)
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