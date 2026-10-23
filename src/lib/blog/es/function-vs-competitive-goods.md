# Bienes de función y bienes competitivos: por qué la abundancia no elimina la desigualdad

## Planteamiento

Existe una intuición extendida según la cual, si la IA llega a ser lo bastante capaz, todo el software y todos los servicios automatizables se volverán prácticamente gratuitos, y con ello desaparecerá una parte sustancial de la desigualdad económica. Esta intuición es correcta, pero **solo para la mitad de los bienes**.

La distinción decisiva no está en la dificultad técnica de producir el bien, sino en **cómo se define su éxito**. Y hay dos definiciones posibles, mutuamente excluyentes:

- Un bien cuyo éxito se mide contra un **umbral absoluto**: ¿funciona o no funciona?
- Un bien cuyo éxito se mide contra **el resto de participantes**: ¿es mejor que el suyo?

Estas dos categorías se comportan de forma radicalmente distinta bajo abundancia de inteligencia artificial. La primera colapsa hacia el coste marginal. La segunda no colapsa jamás.

## Tipo 1: bienes de función

Son aquellos productos o servicios de los que únicamente se espera que **cumplan una función**, y cuyo desempeño no está ligado a la rentabilidad ni a la posición competitiva de quien los emplea.

**Ejemplos:** la aplicación de gestión de un pequeño negocio, la web de un restaurante, un formulario de reservas, la herramienta interna de control de inventario, un trámite administrativo, el software de contabilidad de una asociación, un script que ordena archivos.

El criterio de aceptación de estos bienes es **binario y saturable**. La reserva se registra o no se registra; la factura se emite o no se emite. Una vez cruzado el umbral de funcionamiento correcto, la calidad adicional no aporta valor marginal apreciable: una aplicación de reservas dos veces mejor no genera el doble de reservas, porque el techo no lo pone la aplicación sino la demanda del negocio.

De ello se derivan tres consecuencias encadenadas:

1. **Basta con cualquier solución que resuelva.** No existe incentivo para pagar por una versión superior, porque «superior» no significa nada aquí una vez alcanzado el umbral.
2. **El coste marginal de producción es cero.** Si la IA puede generarla bajo demanda, el coste de la siguiente copia —adaptada, específica, hecha a medida— es el de la propia inferencia, que tiende a cero.
3. **Un precio positivo es insostenible.** Cuando el bien es saturable y su réplica es gratuita, ningún proveedor puede sostener un precio por encima del coste de generarlo de nuevo desde cero.

**Conclusión:** en esta categoría la profecía de la abundancia se cumple literalmente. **Todo el mundo obtiene, gratis y a medida, lo que hoy cuesta decenas de miles de euros en desarrollo.** El excedente se socializa por completo. Se destruye una industria entera —la del software de encargo y la de la gestión estandarizada— y el beneficio se reparte de forma difusa entre todos sus antiguos clientes.

## Tipo 2: bienes competitivos

Son aquellos productos o servicios que desempeñan un rol central en una actividad comercial y que, por su propia naturaleza, **compiten contra los de otros**. Su desempeño no se mide en absoluto, sino en **cuánto mejores son que los del rival**.

**Ejemplos:** un robot de trading, un sistema de fijación dinámica de precios, un motor de asignación de recursos logísticos, un algoritmo de puja publicitaria, un sistema de detección de fraude, una herramienta de descubrimiento de fármacos, o cualquier optimizador de rendimiento en un sector disputado.

Aquí no existe umbral de saturación, porque el listón no es fijo: **el listón es el percentil de los demás.** Un robot de trading no es «bueno»; es bueno *frente a* los que hay al otro lado de la operación. Si todos mejoran, ninguno mejora.

Considérese el caso concreto: un usuario pide a una IA «dame un robot de trading para generar ingresos» e invierte en esa sesión 200 $ de cómputo y energía. Su robot no se enfrenta a un problema abstracto: se enfrenta a los robots de todos los demás usuarios que hicieron lo mismo. Algunos invirtieron 10 $. Otros invirtieron 20.000 $. La pregunta relevante ya no es si su robot funciona, sino **en qué lugar de esa distribución cae**.

De ello se derivan cuatro consecuencias:

1. **El cómputo se convierte directamente en ventaja competitiva.** El gasto en inferencia deja de ser un coste operativo y pasa a ser una inversión en posición relativa. Lo que se compra no es la herramienta, es el percentil.
2. **El mercado degenera en una subasta de cómputo.** Si el rendimiento es una función creciente de los recursos invertidos, todos los participantes tienen incentivo para escalar su gasto hasta el punto en que el beneficio marginal esperado iguala el coste marginal. La competencia se desplaza desde el talento hacia el capital.
3. **Efecto Reina Roja.** Como en la carrera armamentística clásica, el gasto agregado crece sin límite mientras las posiciones relativas permanecen inalteradas. Todos corren más, nadie avanza.
4. **Disipación del excedente.** En los casos de suma cero —el trading es el ejemplo puro— el gasto colectivo en cómputo no crea valor social alguno: solo redistribuye el existente, consumiendo energía y silicio en el proceso. El sector entero puede acabar quemando miles de millones para reasignar las mismas rentas.

**Conclusión:** en esta categoría la abundancia de IA **no reduce la desigualdad: la reconstruye sobre una base nueva.** El acceso al modelo se democratiza, pero el acceso al *cómputo* no. Y cuando la calidad de la solución es una función monótona del cómputo invertido, la ventaja del capital reaparece intacta, solo que ahora expresada en FLOPs en lugar de en fábricas.

## La variable que decide todo: la forma de la curva

Todo el argumento anterior descansa sobre una única incógnita empírica, que es probablemente **la variable económica más importante de la próxima década**:

> **¿Qué forma tiene la curva que relaciona el cómputo invertido con la calidad del resultado?**

Caben dos posibilidades, y las consecuencias sociales son opuestas:

- **Curva con saturación temprana (rendimientos fuertemente decrecientes).** Si a partir de cierto punto gastar cien veces más produce un resultado apenas un 5 % mejor, entonces el usuario de 200 $ queda a una distancia insignificante del de 20.000 $. La ventaja del capital se vuelve marginal, el Tipo 2 se comporta *de facto* como el Tipo 1, y la abundancia sí es genuinamente igualadora. Este escenario empuja hacia un **paradigma de competencia descentralizada**.
- **Curva sin saturación (rendimientos sostenidos, aunque sean logarítmicos).** Si cada orden de magnitud de cómputo compra una mejora consistente, y esa mejora se traduce en captura de mercado, entonces la concentración es matemáticamente inevitable: quien más gasta, más gana; quien más gana, más puede gastar. Este escenario empuja directamente hacia un **paradigma de control centralizado** y, con él, hacia el **tecnofeudalismo**.

Nótese lo que esto implica: **quién tiene el poder podría no ser una decisión política, sino la consecuencia mecánica de un hecho técnico.** Si la curva no satura, ninguna regulación del acceso a los modelos evita la concentración, porque lo escaso no es el modelo sino el cómputo. Y si satura, la descentralización ocurre por gravedad, casi con independencia de lo que decida el legislador.

## Dos dinámicas de segundo orden

**1. La migración de Tipo 1 a Tipo 2.** La frontera entre ambas categorías no es fija. Cuando un bien de función se vuelve universalmente gratuito y todos los competidores lo tienen, la diferenciación se desplaza a otra dimensión —y esa nueva dimensión se convierte en el nuevo terreno competitivo. Un restaurante que hoy se diferencia por tener una web decente mañana no se diferenciará en nada por ello, y la competencia se trasladará a su sistema de precios dinámicos, su optimización de compras o su gestión de reputación. **La competencia no desaparece: se traslada al siguiente eslabón no saturado.** Cada colapso de precio en Tipo 1 crea un nuevo frente de Tipo 2.

**2. La desigualdad se vuelve posicional, no material.** El resultado combinado de ambas categorías es un mundo donde las necesidades funcionales están cubiertas para todos a coste cero, y donde simultáneamente la competencia por las posiciones relativas es más intensa y más cara que nunca. Es un régimen en el que **nadie carece de nada, y sin embargo la distancia entre el primero y el último no ha hecho sino aumentar.** Ningún modelo de redistribución basado en garantizar el acceso a bienes materiales —la renta básica universal en primer lugar— aborda esta forma de desigualdad, porque lo que se disputa no es un bien: es un puesto. Si todos reciben lo mismo, todos pueden invertir lo mismo en cómputo, y los percentiles quedan exactamente donde estaban. La renta básica universal es eficaz contra la escasez y esencialmente inerte contra la desigualdad posicional.

## Síntesis comparada

| | **Tipo 1: bienes de función** | **Tipo 2: bienes competitivos** |
| :--- | :--- | :--- |
| **Criterio de éxito** | Absoluto: ¿funciona? | Relativo: ¿mejor que el rival? |
| **¿Satura?** | Sí, en el umbral de utilidad | No, el listón se mueve solo |
| **Coste marginal** | Tiende a cero | Tiende a cero por unidad, pero el gasto agregado tiende a infinito |
| **Efecto del gasto extra** | Nulo | Determinante |
| **Destino del excedente** | Se socializa entre los usuarios | Se concentra en quien posee el cómputo |
| **Efecto sobre la desigualdad** | La reduce | La reproduce sobre una base nueva |
| **Empuja el poder hacia** | Descentralización | Centralización |

## Conclusión: dos economías simultáneas

La IA avanzada no produce una economía, sino dos, superpuestas y regidas por lógicas incompatibles.

En la primera, la de los **bienes de función**, se cumple íntegramente la promesa de la abundancia: el coste marginal cero y la ausencia de ventaja por sobreinversión hacen que el bien se vuelva efectivamente gratuito y universal. Es la economía del post-escasez, y es real.

En la segunda, la de los **bienes competitivos**, no se cumple en absoluto: el criterio relativo impide la saturación, convierte el cómputo en capital y reproduce la desigualdad con una eficiencia posiblemente mayor que la del sistema actual, porque el silicio es más concentrable y más móvil que una fábrica.

El error analítico más frecuente —presente tanto en el optimismo tecnológico como en el catastrofismo— consiste en extrapolar la lógica de una de estas economías al conjunto. Quien observa el Tipo 1 anuncia el fin de la escasez; quien observa el Tipo 2 anuncia el feudalismo definitivo. Ambos describen correctamente una mitad del fenómeno, y ambos se equivocan al presentarla como el todo.

El futuro no se decidirá, por tanto, en el terreno de los bienes de función, donde el desenlace ya está escrito. Se decidirá **en el reparto del cómputo que alimenta a los bienes competitivos** —y, muy posiblemente, en si la curva de rendimientos satura o no.

## Dónde entra Celaut

Hasta aquí, el argumento general. Lo que sigue es nuestra lectura de cómo se relaciona con él un proyecto concreto, y conviene leerla como tal.

Celaut es una arquitectura *peer-to-peer* para diseñar y distribuir software: servicios reproducibles que cualquier nodo puede ejecutar, anunciar o pagar, sin una autoridad central. Puesta al lado de las dos economías, toca a ambas en cuatro puntos.

**1. Los bienes de función son lo que una red así distribuye con coste casi nulo.** Un servicio es una unidad reproducible y direccionable por contenido; una vez publicado, cualquier nodo puede ejecutarlo. El registro de Unstoppable Skills permite, además, buscar por el problema y no por el proveedor, con *benchmarks* y reputación. Eso encaja con el Tipo 1: cuando lo único que importa es que algo funcione, lo que hace falta es encontrarlo y ejecutarlo, no comprarlo.

**2. El cómputo es el recurso escaso del Tipo 2, y Celaut es, entre otras cosas, un mercado de cómputo.** Cualquiera puede [alquilar su equipo](/depin) cuando no lo usa y fijar su precio en función de lo que le cuesta la electricidad; los nodos negocian el coste entre pares y liquidan en Ergo o en Bitcoin. Si lo escaso no es el modelo sino el cómputo, conviene que ese cómputo se ofrezca en un mercado abierto en el que entrar no requiera permiso, y no solo en los catálogos de unos pocos proveedores. Alquilar capacidad por ráfagas es, además, una forma de que un actor pequeño compita sin poseer silicio.

**3. Game of Prompts es una arena de Tipo 2 hecha a propósito.** En esa plataforma, construida con servicios Celaut, los creadores diseñan servicios-juego que evalúan a los robots, y los jugadores escriben servicios-solucionador que intentan maximizar su puntuación; los resultados y los premios se registran en Ergo. Es exactamente el escenario del robot de trading: el valor de un solucionador es su posición frente a los demás, y el cómputo que se le dedica tiene un efecto visible en esa posición. Sirve como laboratorio pequeño y medible de la curva de la que depende todo: si doblar el cómputo mejora poco el resultado, o mucho.

**4. La reputación importa más en el Tipo 2 que en el Tipo 1.** En un bien de función, usted comprueba por sí mismo si funciona. En uno competitivo, saber si un servicio es realmente mejor que otro exige mediciones comparables y un historial que cueste falsificar. El diseño de Celaut, con una capa de reputación en la que nadie hace spam sin arriesgar algo, apunta en esa dirección, aunque sea una pieza y no una solución.

### Lo que Celaut no resuelve

Sería deshonesto presentarlo como respuesta al problema. Celaut **no cambia la forma de la curva**, y si esta no satura, quien tenga más capital seguirá comprando más cómputo, también en un mercado abierto. Tampoco corrige la desigualdad posicional: abrir el mercado reduce las barreras de entrada y evita que el cómputo dependa de un puñado de proveedores, pero no impide que el que más gasta gane más. Lo que sí puede hacer es empujar en la dirección descentralizadora: que la infraestructura no tenga un dueño, que los bienes de función circulen como bien común y que la competencia por posiciones se libre en un terreno donde participar no requiera permiso.

Si es cierto que el futuro se decide en el reparto del cómputo, construir una red abierta donde ese cómputo se ofrece, se paga y se verifica entre pares no es un detalle de ingeniería. Es una apuesta por uno de los dos desenlaces.

## Para seguir leyendo

- El [paradigma de Celaut](/paradigm), con la especificación formal.
- [Alquila tu PC](/depin), para el lado de la oferta de cómputo.
