# Dos economías bajo la IA: bienes de función, bienes competitivos y el lugar de Celaut

*Octubre de 2026 · Basado en [«Bienes de función y bienes competitivos»](https://github.com/cosas-varias/posibles-escenarios-sobre-ia/blob/master/bienes-de-funcion-y-bienes-competitivos.md), del repositorio [posibles-escenarios-sobre-ia](https://github.com/cosas-varias/posibles-escenarios-sobre-ia).*

Existe una intuición extendida: si la IA llega a ser lo bastante capaz, casi todo el software y los servicios automatizables se volverán gratuitos, y con ellos desaparecerá buena parte de la desigualdad económica. El documento que comentamos aquí sostiene que esa intuición es cierta, pero **solo para la mitad de los bienes**. Esta entrada resume su argumento y, después, intenta ser honesta sobre qué tiene que ver Celaut con él, y qué no.

## La distinción: cómo se define el éxito

La clave no es lo difícil que sea producir un bien, sino **contra qué se mide su éxito**. Hay dos posibilidades, y se excluyen entre sí:

- Un **umbral absoluto**: ¿funciona o no funciona?
- **El resto de participantes**: ¿es mejor que el del rival?

Bajo abundancia de inteligencia artificial, la primera categoría colapsa hacia el coste marginal. La segunda no colapsa nunca.

## Tipo 1: bienes de función

Son los que solo tienen que cumplir una función: la aplicación de gestión de un pequeño negocio, la web de un restaurante, un formulario de reservas, un script que ordena archivos. Su criterio de aceptación es **binario y saturable**: la reserva se registra o no se registra. Una vez cruzado el umbral, una aplicación dos veces mejor no genera el doble de reservas, porque el techo lo pone la demanda del negocio y no la herramienta.

De ahí se sigue que basta con cualquier solución que resuelva, que el coste marginal de producir la siguiente copia a medida tiende a cero (el de la inferencia), y que ningún proveedor puede sostener un precio por encima del de generarla de nuevo. En esta mitad la promesa de la abundancia **se cumple literalmente**: lo que hoy cuesta decenas de miles de euros en desarrollo pasa a ser gratis y a medida, y el excedente se reparte entre todos los antiguos clientes.

## Tipo 2: bienes competitivos

Son los que compiten contra los de otros: un robot de trading, un sistema de precios dinámicos, un algoritmo de puja publicitaria, un detector de fraude, una herramienta de descubrimiento de fármacos. Aquí no hay umbral, porque **el listón es el percentil de los demás**. Un robot de trading no es «bueno»: es bueno *frente a* los que hay al otro lado de la operación.

Si usted invierte 200 $ de cómputo en pedirle a una IA un robot de trading, ese robot se enfrenta a los de quienes invirtieron 10 $ y a los de quienes invirtieron 20.000 $. La pregunta ya no es si funciona, sino en qué lugar de esa distribución cae. De ahí cuatro consecuencias:

1. **El cómputo se convierte en ventaja competitiva.** Lo que se compra no es la herramienta, es el percentil.
2. **El mercado degenera en una subasta de cómputo.** La competencia se desplaza del talento al capital.
3. **Efecto Reina Roja.** El gasto agregado crece sin límite mientras las posiciones relativas quedan donde estaban.
4. **Disipación del excedente.** En juegos de suma cero, el gasto colectivo no crea valor: solo reasigna el existente, quemando energía y silicio.

El acceso al *modelo* se democratiza; el acceso al *cómputo* no. Y si la calidad es una función creciente del cómputo, la ventaja del capital reaparece intacta, expresada ahora en FLOPs en lugar de en fábricas.

## La variable que lo decide todo

Todo esto descansa en una incógnita empírica: **¿qué forma tiene la curva que relaciona el cómputo invertido con la calidad del resultado?**

- Si **satura pronto** (gastar cien veces más da un resultado apenas un 5 % mejor), el usuario de 200 $ queda a una distancia insignificante del de 20.000 $, el Tipo 2 se comporta *de facto* como el Tipo 1 y la abundancia sí iguala. Es el escenario que empuja hacia la competencia descentralizada.
- Si **no satura** (cada orden de magnitud compra una mejora sostenida), quien más gasta más gana, y quien más gana más puede gastar. La concentración es mecánica, y empuja hacia el control centralizado.

Dos dinámicas más complican el cuadro. La frontera entre tipos **migra**: cuando un bien de función se vuelve gratis para todos, la competencia se traslada al siguiente eslabón no saturado. Y la desigualdad se vuelve **posicional, no material**: nadie carece de nada, y sin embargo la distancia entre el primero y el último puede crecer. Una renta básica universal es eficaz contra la escasez, pero apenas toca la disputa por un puesto, porque si todos reciben lo mismo todos pueden invertir lo mismo en cómputo y los percentiles no se mueven.

Conclusión del documento: la IA avanzada no produce una economía, sino dos, y el futuro **se decide en el reparto del cómputo que alimenta a los bienes competitivos**.

## Dónde entra Celaut

Hasta aquí, el documento. Lo que sigue es nuestra lectura, no parte de él, y conviene leerla como tal.

Celaut es una arquitectura *peer-to-peer* para diseñar y distribuir software: servicios reproducibles que cualquier nodo puede ejecutar, anunciar o pagar, sin una autoridad central. Si se la pone al lado de las dos economías, aparecen cuatro puntos de contacto.

**1. Los bienes de función son lo que una red así distribuye con coste casi nulo.** Un servicio es una unidad reproducible y direccionable por contenido; una vez publicado, cualquier nodo puede ejecutarlo. El registro de Unstoppable Skills permite, además, buscar por el problema y no por el proveedor, con *benchmarks* y reputación. Eso encaja con el Tipo 1: cuando lo único que importa es que algo funcione, lo que hace falta es encontrarlo y ejecutarlo, no comprarlo.

**2. El cómputo es el recurso escaso del Tipo 2, y Celaut es, entre otras cosas, un mercado de cómputo.** Cualquiera puede [alquilar su equipo](/depin) cuando no lo usa y fijar su precio en función de lo que le cuesta la electricidad; los nodos negocian el coste entre pares y liquidan en Ergo o en Bitcoin. Si «lo escaso no es el modelo sino el cómputo», conviene que ese cómputo se ofrezca en un mercado abierto en el que entrar no requiera permiso, y no solo en los catálogos de unos pocos proveedores. Alquilar capacidad por ráfagas es, además, una forma de que un actor pequeño compita sin poseer silicio.

**3. Game of Prompts es una arena de Tipo 2 hecha a propósito.** En esa plataforma, construida con servicios Celaut, los creadores diseñan servicios-juego que evalúan a los robots, y los jugadores escriben servicios-solucionador que intentan maximizar su puntuación; los resultados y los premios se registran en Ergo. Es exactamente el escenario del robot de trading: el valor de un solucionador es su posición frente a los demás, y el cómputo que se le dedica tiene un efecto visible en esa posición. Sirve como laboratorio pequeño y medible de la curva de la que depende todo: si doblar el cómputo mejora poco el resultado, o mucho.

**4. La reputación importa más en el Tipo 2 que en el Tipo 1.** En un bien de función, usted comprueba por sí mismo si funciona. En uno competitivo, saber si un servicio es realmente mejor que otro exige mediciones comparables y un historial que cueste falsificar. El diseño de Celaut, con una capa de reputación en la que nadie hace spam sin arriesgar algo, apunta en esa dirección, aunque sea una pieza y no una solución.

### Lo que Celaut no resuelve

Sería deshonesto presentarlo como respuesta al problema. Celaut **no cambia la forma de la curva**, y si esta no satura, quien tenga más capital seguirá comprando más cómputo, también en un mercado abierto. Tampoco corrige la desigualdad posicional: abrir el mercado reduce las barreras de entrada y evita que el cómputo dependa de un puñado de proveedores, pero no impide que el que más gasta gane más. Lo que sí puede hacer es mover el eje del documento en la dirección descentralizadora: que la infraestructura no tenga un dueño, que los bienes de función circulen como bien común y que la competencia por posiciones se libre en un terreno donde participar no requiera permiso.

Si el documento acierta en que el futuro se decide en el reparto del cómputo, entonces construir una red abierta donde ese cómputo se ofrece, se paga y se verifica entre pares no es un detalle de ingeniería. Es una apuesta por uno de los dos desenlaces.

## Para seguir leyendo

- El documento original: [Bienes de función y bienes competitivos](https://github.com/cosas-varias/posibles-escenarios-sobre-ia/blob/master/bienes-de-funcion-y-bienes-competitivos.md).
- El [paradigma de Celaut](/paradigm), con la especificación formal.
- [Alquila tu PC](/depin), para el lado de la oferta de cómputo.
