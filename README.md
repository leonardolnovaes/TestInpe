# Simple WebGIS - Brazil Data Cube

## Enunciado

Sua atividade será desenvolver uma aplicação web básica para visualização de layers em um mapa.

## Requisitos

- O BackEnd:
  - Utilize o Python e Flask para servir o JSON dos layers via REST. Estes layers apontam para nossa instância do GeoServer;
  - Um layer pode ser definido abreviadamente pela a seguinte estrutura:
    * `layer` Nome real do layer. No GeoServer, é definido na seguinte estrutura: `workspace:layerName`. Por exemplo: *grids:ibge_biomas*;
    * `description` Informação extra relacionada ao layer (OPCIONAL). Por exemplo: *IBGE Biomas*
    * `url` URL para disponibilização do layer.
    * `projection` Projeção espacial do layer. Por exemplo: *EPSG:4326*

   Os layers podem ser encontrados neste [`link`](https://github.com/brazil-data-cube/test-dev/blob/master/layers.json)

- O FrontEnd:
  - Utilize um dos frameworks a seguir para desenvolvimento do aplicativo: Angular 8+, React ou VueJS.
  - Para plotagem de mapas, fique a vontade para utilizar o Leaflet, OpenLayers ou outros.
  - Desenvolva um sidebar menu para exibir e ocultar os layers;

- Desenvolver casos de teste para seus respectivos modulos.

- Faça um fork desse repositório no seu GitHub e nos envie o link por e-mail.

## Observações

Este é um pequeno exercício. Sinta-se a vontade para adicionar novas funcionalidades em seu aplicativo. O foco principal é identificar e analisar como você se planeja e utiliza os recursos das tecnologias para resolver o problema.

## Deadline

O prazo final para entrega do projeto será no dia 29/11/2019.

## Bônus

O candidato se destacará caso implemente um ou mais requisitos sugeridos abaixo:

- Container Docker com o ambiente;
- Criar componente(s) para edição do estilo de uma layer.
- Upload de sua aplicação na nuvem (AWS, Google Cloud).

## Referências

- [`Brazil Data Cube`](http://www.brazildatacube.org)
- [`Leaflet`](https://leafletjs.com/)
- [`OpenLayers`](https://openlayers.org/)
- [`Angular`](https://angular.io/)
