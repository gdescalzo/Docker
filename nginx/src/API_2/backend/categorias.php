<?php

class categorias{

    public $id;
    public $nombre;
    
    function __construct(){
    }

    public function guardar(){
    }

    static public function listar() {

        $categorias = array(

            "0"=> array(
                "nombre"=> "Monitores",
                "id"=> "1"
            ),
            "1"=> array(
                "nombre"=> "Teclados",
                "id"=> "2"
            ),
            "2"=> array(
                "nombre"=> "Audio",
                "id"=> "3"
            ),
        );

        return $categorias;

    }
}

?>