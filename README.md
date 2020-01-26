# Pein
>  Pein é uma Lib que vai ajudar o pessaol a trabalhar com menos codigo no js . 

[![NPM Version][npm-image]][npm-url]




![](chatbot-o-que-e-para-que-serve-como-funciona-e-como-criar-o-seu.jpg)

## Instalação

Windows, OS X & Linux:

```sh
clone https://github.com/HamiltonMassango/LIB-JS
```


## Exemplo de uso

* Pode ser usada em pequenos projectos  :man_technologist:

## Configuração para Desenvolvimento

Windows, OS X & Linux:
- Na pagina HTML add a lib dessa forma : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pain</title>
    <style>
    .bt{
        border: 1px solid red;
    }
    </style>
</head>
<body>
    <button class="bt" data-js="bt">Click</button>
    <button class="bt" data-js="bt">Click 2</button>
    <script src="./dom.js"></script>
    <script>
        var bt = new dom('[data-js="bt"]');
        bt.on('click', () => {
            alert('Hello World ! ');
        }); // Add eventento no botão       
    </script>
</body>
</html>
```

## Meta

Seu Nome – [@Hamilton Sila](https://facebook.com/tiohs.u) – hamiltonsilva@gmail.com

#### OBS : Em construção ! 

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
