$(document).ready(function(){
    var url = document.URL; // Get current url
    var stuff = url.split('=');
    var id = stuff[stuff.length-1];
    $.ajax({
        type: 'POST',
        data: 'id='+id,
        dataType: 'json',
        //cache: false,
        url: 'http://tunisieshopping.orgfree.com/mobile/listprodmobile/listprod/',
        //   url: 'http://localhost:8081/mobile/listprodmobile/listprod',
                     
        success: function(data){ 
            if (data['produit'].length == 0) {
                $('#commentaire').append('<li data-role="fieldcontain"><p style="white-space: normal;"> Aucun Avis Existant</p></li>');
            }
            else{
                for (key in data['produit'])
                {
                    var prod = data['produit'][key]['idproduit'];
                    var urlimg = 'http://tunisieshopping.orgfree.com/uploads/';
                    //  var chaine = "produitdetail( " + prod + " )";
                    $('#list').append(
                        '<li><a data-ajax="false" href="detailprod.html?id=' + prod + '" >'+
                        '<img style="width: 100%;height: 100%" src="'+ urlimg+ data['produit'][key]['photo']  
                        +'"/><h2>'+ data['produit'][key]['libelle']  +
                        '</h2></a></li>');
                }
                $('#list').listview('refresh');
            }
        },
        error: function(data){
            alert(data['produit']);
            alert('il y a un probleme!!');                        
        } 
    });

});