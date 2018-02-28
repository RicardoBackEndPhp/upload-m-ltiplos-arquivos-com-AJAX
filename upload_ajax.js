$(function(){
        $('#nome_formulario').on('submit', function (e) {
            e.preventDefault(); //anula o submit
            
            var data;
            var contentType = "application/x-www-form-urlencoded";
            var processData = true;

            //verifico o tipo do enctype
            if ($(this).attr('enctype') == 'multipart/form-data') {
                data = new FormData($('.form-horizontal').get(0));//seleciona classe form-horizontal adicionada na tag form do html
                
                var arquivosF = $('#nome_input_file')[0].files;
                //console.log(arquivosF); //teste para ver os arquivos recebidos
                
                //quantidade de arquivos for maior que 1
                if(arquivosF.length > 1) 
                {
                    for (var i = 0; i < arquivosF.length; i++) 
                    {
                        data.append('nome_input_file['+i+']', arquivosF[i]);
                    }
                }
                
                contentType = false;
                processData = false;
            } else {
                data = $(this).serialize();
            }
            $.ajax({
                data: data,
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                contentType: contentType,
                processData: processData,
                success: function (response) {
                    //seu código após sucesso
                    console.log(response);
                },
                error: function (exr, sender) {
                        alert('Erro ao carregar pagina');
                }
            });
        });
    });