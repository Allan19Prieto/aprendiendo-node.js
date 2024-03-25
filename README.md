# aprendiendo-node.js

El curso de Midu --> https://www.youtube.com/watch?v=yB4n_K7dZV8

Necesitas instalar rust --> https://www.rust-lang.org/learn/get-started
![image](https://github.com/Allan19Prieto/aprendiendo-node.js/assets/47021762/8e5e0cfc-c08b-4286-bf80-0008c2e78065)

## Los comandos necesarios
Probar que se ha instalado de la forma correcta
```bash 
rustup
```

Ver la versión instalada
```bash 
cargo --version
```

## Recomendación
instalar scoop, para intalar el paquete fnm de una forma mas simple en windows 
Puede seguir el siguiente post --> https://tecnonucleous.com/2021/05/23/como-instalar-scoop-en-windows/

```bash 
scoop install fnm
```

Luego puedes instalar mvm o fnm,
en mi caso usare fnm --> https://github.com/Schniz/fnm
![image](https://github.com/Allan19Prieto/aprendiendo-node.js/assets/47021762/a84aea5f-f64d-48d2-97bd-189c985868f9)

Ver la lista de versiones de node que tienes
```bash 
fnm list
```

Instalar una nueva versión de node
```bash 
fnm install <version que se quiere>
```

Usar una nueva versión de node
```bash 
fnm use <version que se quiere usar>

```
En caso de tener problemas con las variables de entorno
y no se reconoce node
```bash 
fnm env --use-on-cd | Out-String | Invoke-Expression
```
