# Bienes de función y bienes competitivos: por qué la abundancia no basta para eliminar la desigualdad

## Planteamiento

Existe una intuición extendida: si la IA llega a ser lo bastante capaz, el software y los servicios automatizables se volverán prácticamente gratuitos, y con ello desaparecerá una parte sustancial de la desigualdad económica. Este ensayo sostiene que la intuición es acertada **solo para una parte de los bienes**, y propone una hipótesis sobre cuál.

La distinción relevante no está en lo difícil que sea producir un bien, sino en **cómo se define su éxito**:

- contra un **umbral absoluto**: ¿funciona o no funciona?
- contra **el resto de participantes**: ¿es mejor que el del rival?

No son dos cajas, sino los dos polos de un continuo. Para situar un bien en él basta una pregunta: **si todos los rivales obtuvieran la misma mejora que yo, ¿cuánto valor conservaría la mía?** Si conserva casi todo, el bien está cerca del polo de función. Si no conserva casi nada, está cerca del polo competitivo. A esa proporción la llamaremos *dependencia posicional*.

La hipótesis es que, bajo abundancia de inteligencia artificial, el precio de los bienes cercanos al primer polo tiende a colapsar hacia el coste de producirlos, y el de los cercanos al segundo no, porque allí lo que se paga no es el bien sino la ventaja.

## El polo de función

Aquí están los bienes de los que solo se espera que **cumplan una función**: un formulario de reservas, una herramienta interna de inventario, un trámite administrativo, el software de contabilidad de una asociación, un script que ordena archivos.

Su criterio de aceptación es **binario y saturable**. La reserva se registra o no se registra. Una vez cruzado el umbral, la calidad adicional apenas aporta: una aplicación de reservas dos veces mejor no genera el doble de reservas, porque el techo lo pone la demanda del negocio.

De ello se derivan tres consecuencias encadenadas:

1. **Basta con cualquier solución que resuelva.** No hay incentivo para pagar por una versión superior, porque «superior» significa poco una vez alcanzado el umbral.
2. **El coste de la siguiente copia a medida se acerca al de la inferencia.** No es cero: siguen pesando la integración con otros sistemas, el mantenimiento y la responsabilidad cuando algo falla. Pero la parte que hoy domina el precio, el trabajo de desarrollo, es la que más se abarata.
3. **Un precio muy por encima de ese coste es difícil de sostener**, porque el cliente puede generar una alternativa por poco.

En este polo la promesa de la abundancia se cumple en lo esencial: lo que hoy cuesta decenas de miles de euros en desarrollo pasa a estar al alcance de casi cualquiera, y el excedente se reparte entre los antiguos clientes.

Conviene, sin embargo, no exagerar su tamaño. **El polo de función puro es más estrecho de lo que parece.** La web de un restaurante cumple una función (mostrar la carta, aceptar reservas), pero también compite por la atención de quien está eligiendo dónde cenar. La parte funcional se abarata; la parte que compite por atención, no. La mayoría de los bienes reales son mezclas así, y la pregunta útil no es «¿de qué tipo es?», sino «¿qué fracción de su valor es posicional?».

## El polo competitivo

Aquí están los bienes que **compiten contra los de otros**, cuyo desempeño se mide por **cuánto mejores son que los del rival**: un robot de trading, un sistema de precios dinámicos, un algoritmo de puja publicitaria, un detector de fraude, un motor logístico, una herramienta de descubrimiento de fármacos.

No hay umbral de saturación, porque **el listón es el percentil de los demás**. Un robot de trading no es «bueno»: es bueno *frente a* los que hay al otro lado de la operación.

Supóngase que un usuario pide a una IA «dame un robot de trading para generar ingresos» e invierte 200 $ de cómputo. Su robot se enfrenta a los de quienes invirtieron 10 $ y a los de quienes invirtieron 20.000 $. La pregunta ya no es si funciona, sino **en qué lugar de esa distribución cae**.

### El cómputo es una fuente de ventaja, no la única

Sería tentador concluir que el cómputo se convierte en *el* nuevo capital. Es más preciso decir que es **una de las formas de capital que reaparecen**. En trading pesan también la latencia y la cercanía física a la bolsa; en detección de fraude, los datos propietarios de años de transacciones; en logística, la flota y los almacenes; en fármacos, el acceso regulatorio y los ensayos clínicos; en casi todos, la distribución y la marca.

¿Refuerzan o atenúan la concentración? En su mayoría la refuerzan, porque tienden a estar en las mismas manos que el cómputo y se retroalimentan: más datos mejoran el modelo, un modelo mejor atrae más clientes, más clientes producen más datos. Algunos la atenúan: datos de nicho, relaciones locales, conocimiento específico de un dominio que no se compra con cómputo. Abaratar el modelo no elimina estas ventajas; en algunos mercados hace que pasen a ser lo único que distingue a un competidor de otro.

### No todo es suma cero

La competencia en este polo no es siempre un juego de suma cero, y la intensidad del diagnóstico debe ajustarse a cada caso.

- **Suma cero o cercana a cero.** En el trading especulativo o en las pujas publicitarias, lo que uno gana lo pierde otro. Aquí se aplican con toda su fuerza el **efecto Reina Roja** (el gasto agregado crece mientras las posiciones relativas apenas cambian) y la **disipación del excedente** (el gasto colectivo en cómputo reasigna rentas sin crear valor nuevo, y consume energía y silicio en el proceso).
- **Suma positiva.** En el descubrimiento de fármacos, la detección de fraude o la logística, la competencia también produce algo: un tratamiento, menos fraude, envíos más baratos. Parte del gasto se duplica entre rivales y se pierde, pero no todo; el resultado social puede ser positivo aunque la carrera sea cara.

La desigualdad puede reproducirse en ambos casos. El despilfarro, en cambio, es característico del primero.

## Dos curvas, no una

El argumento depende de dos relaciones empíricas que conviene separar.

> **Curva 1: ¿cuánta calidad compra cada unidad adicional de cómputo?**
>
> **Curva 2: ¿cuánta cuota de mercado o beneficio compra cada unidad adicional de calidad?**

La primera puede **saturar pronto** (gastar cien veces más da un resultado apenas mejor, y el usuario de 200 $ queda cerca del de 20.000 $) o **no saturar** (cada orden de magnitud de cómputo compra una mejora sostenida, aunque sea logarítmica).

La segunda depende de la estructura del mercado. En mercados donde **el ganador se lleva casi todo** (una búsqueda, una red con efectos de red, el mejor precio en un mercado transparente), una ventaja mínima basta para concentrar. En mercados **diferenciados** (por geografía, por nicho, por preferencias), una ventaja de calidad se traduce en una ventaja de cuota modesta.

La concentración depende de la combinación:

| | **Mercado diferenciado** | **El ganador se lleva casi todo** |
| :--- | :--- | :--- |
| **La curva 1 satura** | Competencia abierta: el polo competitivo se comporta casi como el de función. | Concentración por factores distintos del cómputo: datos, distribución, marca. |
| **La curva 1 no satura** | Ventaja del capital, pero acotada: varios actores grandes conviven. | Concentración fuerte: quien más gasta, más gana, y quien más gana, más puede gastar. |

Solo la casilla inferior derecha justifica la imagen de una espiral hacia el **control centralizado** y el **tecnofeudalismo**. La casilla superior izquierda empuja hacia la **competencia descentralizada**. Las otras dos son mixtas, y es probable que distintos sectores caigan en casillas distintas.

Lo que esto sugiere es que **quién tiene el poder podría depender en buena medida de hechos técnicos y de estructura de mercado**, y no solo de decisiones políticas. Si en un sector la curva 1 no satura y el ganador se lleva casi todo, regular el acceso a los modelos sirve de poco, porque lo escaso no es el modelo. La política no desaparece: puede actuar sobre la curva 2 (portabilidad de datos, interoperabilidad, competencia), que es más maleable que la primera.

## ¿Qué pasa si el cómputo sigue abaratándose?

El coste por unidad de cómputo ha caído de forma sostenida durante décadas. Esto admite dos lecturas, y ambas son plausibles.

- **Efecto igualador.** Si el umbral a partir del cual la curva 1 se aplana queda pronto al alcance de cualquiera, lo que hoy da ventaja a quien gasta 20.000 $ mañana lo obtendrá quien gaste 200 $.
- **Efecto Reina Roja.** Si la curva no se aplana, el abaratamiento solo sube el nivel de la subasta: todos compran más con el mismo dinero, y las posiciones relativas quedan donde estaban.

Cuál domina depende, de nuevo, de la forma de la curva 1. El precio del cómputo no resuelve la pregunta; la desplaza.

## Dos dinámicas de segundo orden

**1. La migración del polo de función al competitivo.** La frontera se mueve. Cuando un bien de función se vuelve gratuito y todos los competidores lo tienen, deja de diferenciar, y la competencia se traslada a otra dimensión. Un restaurante que hoy destaca por tener una web decente mañana no destacará por ello, y competirá en precios dinámicos, en optimización de compras o en reputación. **La competencia no desaparece: se traslada al siguiente eslabón no saturado.** Cada colapso de precio en el polo de función tiende a abrir un nuevo frente en el competitivo.

**2. La desigualdad se vuelve más posicional que material.** El resultado combinado puede ser un mundo en el que las necesidades funcionales estén cubiertas para la mayoría a un coste muy bajo, y en el que la competencia por las posiciones relativas sea más intensa y más cara que nunca. Esta forma de desigualdad tiene una propiedad lógica que no depende de ningún dato: **un mecanismo que da lo mismo a todos no altera las posiciones relativas.** Una renta básica universal es eficaz contra la escasez, pero si todos reciben lo mismo, todos pueden invertir lo mismo en cómputo, y los percentiles quedan donde estaban. Puede ampliar quién participa; no cambia quién gana.

## Las objeciones más fuertes

**El optimista tecnológico** diría: la IA no abarata solo el cómputo, abarata también los demás factores. Hace más fácil generar datos sintéticos, construir distribución, crear marca. Además, cada mercado que se satura abre otros nuevos, y siempre hay nichos donde un pequeño actor gana. *Respuesta:* es posible, y es exactamente el escenario de la casilla superior izquierda. Pero no se deduce de la capacidad de la IA, sino de la forma de las dos curvas, y algunos factores (latencia, infraestructura física, acceso regulatorio) no se abaratan con software.

**El escéptico de la concentración** diría: las ventajas tecnológicas se han erosionado siempre. Los monopolios se debilitan, los rivales imitan, la regulación antimonopolio interviene, y la historia está llena de líderes desplazados. *Respuesta:* también es posible, y empuja hacia las casillas de la izquierda. La diferencia es que la erosión clásica dependía de que imitar fuera más barato que innovar. Si la ventaja reside en el volumen de cómputo y datos acumulados, imitar puede salir tan caro como competir. Es una hipótesis, no una certeza, y los indicadores de la sección siguiente sirven para comprobarla.

## Cómo sabremos hacia dónde vamos

La hipótesis es falsable. Estos indicadores permitirían saber qué casilla describe cada sector:

- **Márgenes del software de encargo y de la gestión estandarizada.** Si caen de forma sostenida, el polo de función se comporta como se espera.
- **Concentración del gasto en cómputo.** Qué fracción del gasto mundial en entrenamiento e inferencia corresponde a los mayores compradores, y cómo evoluciona.
- **Rendimientos marginales en benchmarks competitivos.** Cuánto mejora el resultado al doblar el cómputo en tareas donde se compite contra otros sistemas: es una medida directa de la curva 1.
- **Relación entre gasto en cómputo e I+D y cuota de mercado.** Si la cuota sigue al gasto con poca dispersión, la curva 2 es empinada.
- **Rotación de líderes.** Con qué frecuencia cambia quién ocupa los primeros puestos en sectores intensivos en IA.

## Síntesis comparada

| | **Polo de función** | **Polo competitivo, suma positiva** | **Polo competitivo, suma cero** |
| :--- | :--- | :--- | :--- |
| **Criterio de éxito** | Absoluto: ¿funciona? | Relativo, pero con valor creado | Relativo: ¿mejor que el rival? |
| **¿Satura?** | Sí, en el umbral de utilidad | Depende de la curva 1 | Depende de la curva 1 |
| **Coste** | Tiende al de inferencia e integración | Gasto creciente, en parte productivo | Gasto creciente, en gran parte disipado |
| **Fuentes de ventaja** | Casi ninguna una vez cruzado el umbral | Cómputo, datos, infraestructura, acceso regulatorio | Cómputo, latencia, datos, distribución |
| **Destino del excedente** | Se reparte entre los usuarios | Repartido entre usuarios y ganadores | Se concentra en quien gana la carrera |
| **Efecto sobre la desigualdad** | Tiende a reducirla | Depende de la curva 2 | Tiende a reproducirla |
| **Empuja el poder hacia** | Descentralización | Depende de la casilla | Centralización, si la curva 1 no satura |

## Conclusión: dos lógicas superpuestas

La IA avanzada no produce una sola economía, sino al menos dos lógicas superpuestas que conviven dentro de casi cada bien.

En la de **función**, la promesa de la abundancia se cumple en lo esencial: el coste cae hacia el de producir, y la sobreinversión no da ventaja. Es una economía de post-escasez para una parte del consumo, y es real.

En la **competitiva**, la promesa no se cumple por sí sola: el criterio relativo impide la saturación, y el cómputo se suma a los datos, la infraestructura y la distribución como fuentes de ventaja. Si eso reproduce la desigualdad, y con qué intensidad, depende de dos curvas que hoy no conocemos bien y que pueden ser distintas en cada sector.

El error analítico más frecuente es extrapolar una de las dos lógicas al conjunto. Quien observa la primera anuncia el fin de la escasez; quien observa la segunda anuncia el feudalismo definitivo. Ambos describen bien una parte del fenómeno, y ambos se equivocan al presentarla como el todo.

Lo más probable es que el desenlace no se decida en los bienes de función, donde la dirección parece clara, sino **en el reparto del cómputo y de los demás factores que alimentan a los bienes competitivos**, y en la forma que tengan, sector a sector, las dos curvas.

## Dónde entra Celaut

Lo que sigue es nuestra lectura de cómo se relaciona un proyecto concreto con este argumento, y conviene leerla como tal.

Celaut es una arquitectura *peer-to-peer* para diseñar y distribuir software: servicios reproducibles que cualquier nodo puede ejecutar, anunciar o pagar, sin una autoridad central. Toca el argumento en cuatro puntos.

**1. La parte funcional es lo que una red así distribuye con coste casi nulo.** Un servicio es una unidad reproducible y direccionable por contenido; una vez publicado, cualquier nodo puede ejecutarlo. El registro de Unstoppable Skills permite, además, buscar por el problema y no por el proveedor, con *benchmarks* y reputación. Cuando lo único que importa es que algo funcione, lo que hace falta es encontrarlo y ejecutarlo, no comprarlo.

**2. El cómputo es una de las fuentes de ventaja del polo competitivo, y Celaut es, entre otras cosas, un mercado de cómputo.** Cualquiera puede [alquilar su equipo](/depin) cuando no lo usa y fijar su precio en función de lo que le cuesta la electricidad; los nodos negocian el coste entre pares y liquidan en Ergo o en Bitcoin. Un mercado abierto, en el que entrar no requiere permiso, reduce la dependencia de unos pocos proveedores, y alquilar capacidad por ráfagas permite a un actor pequeño competir sin poseer silicio. Celaut actúa sobre ese factor y no sobre los demás: no aporta datos propietarios, ni latencia, ni distribución.

**3. Game of Prompts es un laboratorio de la curva 1.** En esa plataforma, construida con servicios Celaut, los creadores diseñan servicios-juego que evalúan a los robots, y los jugadores escriben servicios-solucionador que intentan maximizar su puntuación; los resultados y los premios se registran en Ergo. Es un caso competitivo explícito y medible: permite observar cuánto mejora la posición de un solucionador cuando se le dedica más cómputo, que es exactamente uno de los indicadores de la sección anterior.

**4. La reputación importa más en el polo competitivo.** En un bien de función, usted comprueba por sí mismo si funciona. En uno competitivo, saber si un servicio es realmente mejor que otro exige mediciones comparables y un historial que cueste falsificar. El diseño de Celaut, con una capa de reputación en la que nadie hace spam sin arriesgar algo, apunta en esa dirección, aunque sea una pieza y no una solución.

### Lo que Celaut no resuelve

Celaut **no cambia la forma de ninguna de las dos curvas**. Si la curva 1 no satura y el mercado premia al ganador, quien tenga más capital seguirá comprando más cómputo, también en un mercado abierto. Tampoco corrige la desigualdad posicional. Lo que sí puede hacer es empujar en la dirección descentralizadora en el factor sobre el que actúa: que la infraestructura de cómputo no tenga un dueño, que la parte funcional de los bienes circule como bien común, y que la competencia se libre en un terreno donde participar no requiera permiso.

Si el desenlace depende en buena medida del reparto del cómputo, construir una red abierta donde ese cómputo se ofrece, se paga y se verifica entre pares no es un detalle de ingeniería. Es una apuesta por una de las casillas.

## Para seguir leyendo

- El [paradigma de Celaut](/paradigm), con la especificación formal.
- [Alquila tu PC](/depin), para el lado de la oferta de cómputo.
