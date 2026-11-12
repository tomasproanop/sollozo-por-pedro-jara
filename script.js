'use strict';

/* ============================================================
   texto completo del poema (original, 1978)
   parts[p][variant][line]
   ============================================================ */
const PARTES = [
  {
    num: '1',
    variantes: [
      ['el radiograma decía','tu hijo nació. cómo hemos de llamarlo','yo andaba entonces por las islas','dispersa procesión del basalto','coágulos del estupor','secos ganglios de la eternidad','eslabones de piedra en la palma del océano','rostros esculpidos por el fuego sin edad','soledad','terquedad relampagueante de la duración','enconado olor seminal de los esteros','andaba','anduve','y dije','mientras vociferaban la sangre y las gaviotas','se llamará pedro','pedrohuesosdepedernal','pedrorrisadepiedra','piedra inflamada por la lumbre de meteoros de la vida'],
      ['el radiograma decía','tu hijo nació. envía su nombre','yo andaba entonces por el archipiélago','renegrida osamenta de basalto','sílabas de silencio','sillares de la eternidad','guirnalda de piedra en el pecho del océano','coloquio de cíclopes sin edad','soledad','orfandad deslumbrante del espacio','desgarramiento de túnicas del viento','andaba','anduve','y dije','en tanto aullaban el sexo y las focas','te llamarás pedro','pedrovenasderroca','pedrollamadepiedra','piedra enardecida por el aliento de leones de la vida'],
      ['el radiograma decía','tu hijo nació. cómo lo llamaremos','yo andaba entonces por las galápagos','cetrinas encías del basalto','alvéolos del desamparo','dentadura de la eternidad','diadema de piedra en la testa del océano','mantos de lava sin edad','soledad','oquedad fulgurante del tiempo','hervor continuo de astros al pie de los acantilados','andaba','anduve','y dije','entre el bramido de los sueños y las olas','te llamaré pedro','pedroespinazodepeña','pedropiedrasinedad','piedra tenaz e incandescente que ha de sobrevivirme']
    ]
  },
  {
    num: '2',
    variantes: [
      ['¡hijo mío!','mordido implacablemente por los nitratos de los días','parecías tallado en diamante','hechoparaempiedradurar','hechoparaperdurar','entre las proliferaciones de herrumbre del tiempo','pero todo cuanto arde en la sangre o la inteligencia','suena a caída de hojas y aniquilamiento','ay cinceles de piedra para hendir la roca','ay impacto sordo de fruto del golpe de las mazas','ay facciones abrasadas por la lengua de la caducidad','rostro de piedra','rastros de piedra','semblantes de piedra de rapa-nui','pómulos curtidos por la soledad del mundo','friso del desamparo','cuencas imperturbables donde se agazapa el tiempo','como un pequeño animal despavorido','sienes de piedra','mandíbulas de piedra','pedrobasalto o pedroisladepascua','piedras contaminadas por la pasión del hombre','piedras corroídas por las sales del exterminio','piedras que han ido aligerando el volumen','en el polvo sollozante de los adioses'],
      ['¡hijo mío!','azotado salvajemente por la desesperación de las olas','parecías cincelado en granito','hechoparaempiedraendurar','hechoparaperdurar','entre la frenética agitación de las aguas','pero todo cuanto se enciende en el corazón o el tacto','se infecta de perecimiento','ay puntas de obsidiana de las armas de mis abuelos','ay graznido de halcón de las hachas arrojadizas','ay lajas de las calzadas imperiales','rótulas de piedra','vértebras de piedra','escalones de piedra de machu-picchu','cresta en la que afilan su alfanje las centellas','balcón arisco del cóndor','goterón de silencio donde anida el tiempo','como flor entre los costillares triturados del trueno','fémures de piedra','párpados de piedra','pedroasperón o pedromachu-picchu','piedras dejadas de la mano del hombre','piedras caldeadas por los tizones de la agonía','piedras que han ido desvaneciendo el afuera','en el polvo de las despedidas'],
      ['¡hijo mío!','desgarrado despiadadamente por las uñas de la sombra','parecías labrado en pedernal','hechoparaempiedramadurar','hechoparaperdurar','entre la silenciosa violencia de las cenizas','pero todo cuanto toca la mano o el amor','empieza a vacilar y desmenuzarse','ay guijarros vueltos silbo de dardo por la honda','ay hornacinas de donde el cierzo expulsó al guerrero','ay volúmenes arrancados al sueño de la geología','muros de piedra','hombros de piedra','dinteles de piedra de inga-pirca','proa despedazada en los arrecifes de lo perecedero','encordadura del aguacero','gran ábside donde golpea el viento','como un muñón de cólera','torso de piedra','cejas de piedra','pedropórfido o pedroinga-pirca','piedras contagiadas por el desvelo del hombre','piedras carcomidas por los líquenes del exterminio','piedras que han ido consumiendo su presencia','devoradas por la supuración de la muerte']
    ]
  },
  {
    num: '3',
    variantes: [
      ['desesperado revoloteo del instante','nosotros','los insensatos','los alimentadores de desmesuras y de tumbas','los que nos desvelamos','por saber qué hacemos aquí','anhelamos la inmensidad del océano','y sólo nos pertenece la indecisión de la lágrima','pedropiélago te quise','te tuve pedrogota','pedromar te ansié','te perdí pedroespuma','como a la playa la marea debías sobrepasarme','pero tu muerte crecía más rápido que mi amor','delicada espina de erizo','sombrilla errante de la medusa','agonía de terciopelos del deslizamiento del pez','chillido de la gaviota entre el fragor de la rompiente','todo se ahonda','se hunde','se difunde','parecías forjado con la tenacidad del arrecife','farallón olvidado del tiempo','indeclinable jabalina del albatros','¡pero fuiste aleteo de golondrina en el vendaval!','imaginé disparándose tus huesos','con la gracia tenaz de las columnas','con la agresiva terquedad de las madréporas','¡pero fuiste apenas resplandeciente estertor','del róbalo aventado en las arenas!','ay pedroesteladealgas','ay pedrosalpicaduradeola','en el rutilante acantilado de la vida'],
      ['fulminante incandescencia de lo efímero','nosotros','los desatinados','los alimentados con desvaríos y frustraciones','los que nos obstinamos','por justificar el júbilo de estar aquí','codiciamos la vastedad del bosque','y sólo nos pertenece la vacilación de la hoja','pedroselva te quise','te retuve pedropecíolo','pedrofronda te ansié','te perdí pedrohojarasca','como al girasol la semilla debías sobrevivirme','pero tu sangre corría más rápido que mi desvelo','quebradiza aguja de pino','titubeante pupila de la resina','frenesí de mariposas de la lámpara del polen','trino del ruiseñor entre el estruendo de la catarata','todo se ahonda','se hunde','se refunde','parecías erguido con la reciedumbre del olivo','encina olvidada del tiempo','orla inabarcable del vuelo del gavilán','¡pero fuiste colibrí en el embudo del huracán!','concebí perfilándose tu frente','con la dulce pertinacia de las cortezas','con el agria avidez de las raíces','¡pero fuiste apenas crujido de ala de ángel','de la espiga pisoteada por el casco!','ay pedrohuelladegarza','ay pedrorrasguñodeviento','en el resplandeciente promontorio de la vida'],
      ['incesante remolino del ahora','nosotros','los obcecados','los urdidores de discordias y silogismos','los que nos desesperamos','por descifrar los signos de la incertidumbre','ambicionamos la imperturbabilidad de la montaña','y sólo nos pertenece la postración del polvo','pedromegalito te quise','te tuve pedroguija','pedrorroca te ansié','te perdí pedroarena','como a la colina la luna debías desbordarme','pero tu angustia cundía más rápido que mi dolor','trizada lámina de lapizlázuli','deslumbradora llaga del diamante','relampagueante éxtasis de la vena aurífera','arrullo de paloma entre la vociferación del alud','todo se hunde','se funde','se confunde','parecías implantado con la serenidad del nevado','filón olvidado del tiempo','majestuosa rúbrica del vuelo del gerifalte','¡pero fuiste empeño de mariposa en la tempestad!','pretendí recortándose tus hombros','con la poderosa simplicidad de las cumbres','con la perseverancia de las murallas','¡pero fuiste apenas súbito centelleo','del guijarro machacado en el torrente!','ay pedrocráterextinguido','ay pedrodesmoronamientodearena','en el desfiladero de la vida']
    ]
  },
  {
    num: '4',
    variantes: [
      ['en verdad','¿fue verdad?','¿eras tú el que pendía de la cadena del higiénico','como seco mechón de sauce sobre el río?','ser ido','ser herido','sal diluida','suicida','ah surco de paloma del pensamiento','borrado por el sonido atronador del desdén','ah soberbia del astro que manda al diablo su órbita','ah pertinaz repudiador de lo establecido','pedrogorralrevés','pedromuertealospájaros','pedrorrompelosvidrios','y el eterno brazo entablillado','pedro fermentación de las vísceras de la vida','¡sólo que ya no estás!','sólo que al cerrarte los párpados','para velar el relámpago congelado en tus ojos','ya no te reconocía','¿eras tú en verdad?','¿eso de la helada indolencia del témpano?','¿eso de las pavesas que la desesperación insta a soplar?','¿eso que se desmorona en las tinieblas para siempre?'],
      ['en verdad','¿fue verdad?','¿eras tú quien colgaba de la cadena del higiénico','como polea inútil de una construcción abandonada?','ser ido','ser sido','sol de huída','suicida','ah recinto de espejos del pensamiento','empañado por el vaho de amapolas de la pasión','ah fascinación sinisetra por el ojo del remolino del vacío','ah sempiterno impugnador de los acatamientos','pedrocalzoncillos al revés','pedrocabezarrasurada','pedroceroengramática','y los faldones de la camisa afuera','pedro ofuscación de enredaderas de la vida','¡sólo que ya no estás!','sólo que al ponerte las manos sobre el pecho','para devolverte a la inocencia delirante de la materia','ya no te reconocía','¿eras tú en verdad?','¿eso de vana crispación de mano de náufrago?','¿eso de cenizas que el viento no tardará en dispersar?','¿eso que devoró su reserva de lumbre en una sola fulguración?'],
      ['en verdad','¿fue verdad?','¿eras tú el suspendido de la cadena del higiénico','como un péndulo paralizado en la eternidad?','ser ido','ser sido','ser huída','suicida','ah palacio de cristal de la inteligencia','invadido por las emanaciones coléricas del instinto','ah obstinación de mariposa por el otro lado del espejo','ah perpetuo opositor a lo constituido','pedrocalcetinesalrevés','pedroojosemplomados','pedrochaquetasestrafalarias','y los cuadernos extraviados','pedro exasperación de jaguares de la vida','¡sólo que ya no estás!','sólo que al mirarte por última vez','antes de entregarte a la humedad y a la disipación','ya no te reconocía','¿eras tú en verdad?','¿eso de melancolía de estandartes abatidos?','¿eso de inmovilidad que antecede al furor subterráneo?','¿eso de luto y gérmenes ya alimento de los tréboles?']
    ]
  },
  {
    num: '5',
    variantes: [
      ['pedro ya no','tan sólo piedra','grumo devuelto a las opresivas láminas del esquisto','al congelado silencio de la cantera','nunca más la aventura','únicamente a la ventura','al ensañamiento vesánico de las depredaciones','a lo que sólo deja residuos','nunca huellas','nunca sonido de enramadas y raíces en el pecho','estela de tizones del tiempo','pero refulges en mí','como una espada al fondo de un arroyo','pero respiras en mí','amas todavía en mí','golpeas en el corazón','como un animal anhelante de otra oportunidad','¡hijo mío!','somos hervor de espuma de un piélago insondable'],
      ['pedro ya no','tan sólo estalactita','mineral devuelto a la rapacidad del polvo','a la vulva de huracán de las metamorfosis','nunca más la aventura','únicamente a la desventura','a la vengativa eficacia de la disgregación','a lo que sólo exige espacio','nunca tiempo','nunca aleteo de petreles y golondrinas en las sienes','reguero de brasas de la perseverancia','pero rutilas en mí','como una ola que por fin hace playa en el corazón','pero parpadeas en mí','alientas todavía en mí','animas en la sangre','como una semilla ávida de nuevas germinaciones','¡hijo mío!','somos el murmullo de un follaje inmarcesible'],
      ['pedro ya no','tan sólo cuarzo','bloque devuelto al estupor de palomas de la roca','a la desaforada perversidad de los ácidos','nunca más la aventura','únicamente a la envoltura','a la tozudez metálica de lo inerte','a lo que sólo impone sombras','nunca formas','nunca arterias de diamantes y de rosas en la frente','pisada de ascuas de la duración','pero fosforeces en mí','como el meteoro cuando irrumpe en la atmósfera','pero sueñas en mí','vives todavía en mí','ardes en la memoria','como las viejas tonadas de la tribu en los labios de los adolescentes','¡hijo mío!','somos los ecos de un tañido inextinguible']
    ]
  }
];

/* ============================================================
   Traducción de Dra. Cecilia Mafla-Bustamante
   ("Weeping for Pedro Jara (Structures for an Elegy)",
   ISLE: Interdisciplinary Studies in Literature and Environment, 1998)
   ============================================================ */
const PARTES_EN = [
  {
    num: '1',
    variantes: [
      ['the radiogram said','"Your son was born. What should we call him?"','I was then in the islands','scattered procession of basalt','clots of astonishment','dry ganglions of eternity','chain of rocks in the ocean\'s palm','faces sculpted by the ageless flames','loneliness','gleaming stubborn duration','bitter seminal odor of the tidelands','wandering','wondering','I said','while blood and seagulls shouted','he will be called pedro','pedrobonesofstone','pedrolaughterofrock','rock inflamed by the fire of life\'s meteors'],
      ['the radiogram said','"Your son was born. Send his name"','I was then in the archipelago','blackened bones of basalt','syllables of silence','ashlars of eternity','garland of stone on the ocean\'s breast','colloquium of ageless cyclops','loneliness','glimmering orphaned space','ripping of the wind\'s tunics','wandering','wondering','I said','while sex and seals howled','you will be named pedro','pedroveinsofstone','pedroflameofrock','rock fired by the breath of life\'s lions'],
      ['the radiogram said','"Your son was born. What do we name him?"','I was then in the galapagos','jaundiced gums of basalt','alveoli of abandonment','teeth of eternity','stone tiara on the ocean\'s head','cloaks of ageless lava','loneliness','glowing hollow time','continuous boiling of stars at the foot of the cliff','wandering','wondering','I said','amidst the roar of dreams and waves','I will name you pedro','pedrospineofthesteep','pedroagelessrock','tough and incandescent rock that will outlive me']
    ]
  },
  {
    num: '2',
    variantes: [
      ['Beloved son!','relentlessly bitten by caustic days','you seemed sculpted in diamond','madetolastamidstthestones','madetoendure','among the proliferations of time\'s rust','but everything that burns in blood or intelligence','sounds like leaves falling and annihilation','oh stone chisels for cleaving rocks','oh muted impact of the blow of the masses','oh factions burned by expiration\'s tongue','faces of stone','traces of stone','stone visage of rapa-nui','cheek bones weathered by the world\'s solitude','frieze of abandonment','unruffled hollows where time crouches','like a tiny terrified animal','temples of stone','jaws of stone','pedrobasalt or pedroeasterisland','stones polluted by the passion of man','stones eroded by the salts of extermination','stones that have slowly lost their substance','in the weeping dust of farewells'],
      ['Beloved son!','savagely whipped by desperate waves','you seemed engraved in granite','madetostrengthenamidstthestones','madetolast','in the frantic agitation of water','but everything that flares in the heart or upon touching','gets infected and perishes','oh obsidian tips of my ancestors\' weapons','oh falcon\'s cry of thrown hatchets','oh sandstones of the imperial roads','knees of stone','vertebrae of stone','stone stairway of machu-picchu','crest where a spark sharpens its cutlass','wild balcony of condors','raindrop of silence where time makes its nest','like a flower amongst the crushed ribs of thunder','femurs of stone','eyelids of stone','pedrosandstone or pedromachu-picchu','stones abandoned by the hand of man','stones overheated by firebrands of agony','stones whose surface has slowly vanished','in the dust of departures'],
      ['Beloved son!','heartlessly torn by the shadows\' nails','you seemed carved in flint','madetogrowamidstthestones','madetolast','in the silent violence of ashes','but everything that is touched by hand or love','starts to hesitate and crumble','oh pebbles turned whistles of darts from a sling','oh niche where the north wind expelled the warrior','oh volumes torn from geology\'s dreams','walls of stone','shoulders of stone','stone lintels of inga-pirca','shattered bow on the reefs of extinction','sheets of drenching rain','great apse where strikes the wind','like a pivot of rage','trunk of stone','eyebrows of stone','pedroporphyry or pedroinga-pirca','stones infected by the anxiety of man','stones decayed by the lichens of extermination','stones that have slowly consumed their presence','devoured by the suppuration of death.']
    ]
  },
  {
    num: '3',
    variantes: [
      ['desperate flutter of an instant','we','the senseless','feeders of excess and graves','we who lie awake','pondering our existence','we long for the immensity of the ocean','but we only own the indecision of a tear','I loved you pedroocean','I had you pedrodrop','I yearned for you pedrosea','I lost you pedrofoam','you should have surpassed me as the tide does the beach','but your death grew faster than my love','delicate spine of a sea urchin','errant umbrella of a jellyfish','velvet agony of an escaping fish','screech of a seagull amidst the reef\'s roar','everything\'s falling','sinking','disseminating','you seemed forged with the toughness of the reef','time\'s forgotten cliff','unswervable javelin of the albatross','but you were the flap of a swallow\'s wings in a gale!','I imagined your bones developing','with the tough gracefulness of columns','with the aggressive stubbornness of coral reefs','but you were barely the last glittering gasp','of a sea bass thrown upon the sand!','oh pedroseaweedtrail','oh pedrowavesplash','on the sparkling cliff of life'],
      ['fulminant incandescence of the ephemeral','we','the fools','fed with absurdity and frustrations','we who persist','in justifying the joy of being here','we covet the vastness of the forest','but we only own the hesitation of a leaf','I loved you pedroforest','I kept you pedropetiole','I yearned for you pedrofrond','I lost you pedrofallenleaf','you should have outlived me as the seed does the sunflower','but your blood ran faster than my vigil','brittle pine needle','tottering resin pupil','frenzy of butterflies at the sight of pollen','warble of a nightingale amidst the waterfall clamor','everything\'s falling','sinking','disappearing','you seemed built with the vigor of the olive','time\'s forgotten oak','limitless fringe of the hawk\'s flight','but you were a hummingbird in the funnel of a tornado!','I conceived the shaping of your forehead','with the sweet persistence of bark','with the sour lust of roots','but you were barely the rustle of an angel\'s wing','of a wheat spike trampled by hooves!','oh pedroheron\'sfootprint','oh pedrocaressofwind','on the gleaming promontory of life'],
      ['incessant whirl of today','we','the stubborn','warpers of discord and syllogism','we who despair','to decipher the signs of uncertainty','we strive for the imperturbability of the mountain','but we only own the prostration of the dust','I loved you pedromegalith','I had you pedropebble','I yearned for you pedrorock','I lost you pedrosand','you should have passed beyond me as the moon does the hill','but your anguish expanded faster than my pain','fragmented sheet of lapis lazuli','dazzling wound of diamonds','gleaming ecstasy of a gold-bearing vein','cooing of a dove amidst the roar of an avalanche','everything\'s sinking','fading','blurring','you seemed implanted with the serenity of a snow-capped mountain','time\'s forgotten lode','majestic signature of the falcon\'s flight','but you were the struggle of a butterfly in a storm!','I visualized your shoulders standing out','with the powerful simplicity of summits','with the perseverance of ramparts','but you were barely a sudden sparkle','of a pebble crushed by a rushing stream!','oh pedroextinguishedcrater','oh pedrocrumblingsand','in the bottomless gorge of life']
    ]
  },
  {
    num: '4',
    variantes: [
      ['truly','was it true?','was it you who dangled from the toilet chain','like a dry willow wisp over a river','vanished being','wounded being','receding tide','suicide','oh dove\'s furrow of thought','erased by the deafening sound of scorn','oh arrogance of the star that sends its orbit to hell','oh obstinate repudiator of convention','pedrobackwardcap','pedrobirdshooter','pedrowindowbreaker','and your eternally splinted arm','pedro fermentation of life\'s entrails','but you are no longer here!','when I closed your eyelids','to veil the frozen thunder in your eyes','I no longer recognized you','was it really you?','that frozen indolence of an ice floe?','that ember that desperation urges one to blow?','that which crumbles in the darkness forever?'],
      ['truly','was it true?','was it you who hung from the toilet chain','like a useless pulley in an abandoned unfinished building','vanished being','ceased being','no sun outside','suicide','oh mirrored precinct of thought','steamed up by the vapor of the poppies of passion','oh sinister fascination with the whirlwind of emptiness','oh perpetual attacker of obedience','pedroinsideoutunderwear','pedroshavenhead','pedrozeroingrammar','and shirttails untucked','pedro bewilderment of life\'s ivy','but you are no longer here!','when I put your hands on your chest','to return you to the delirious innocence of matter','I no longer recognized you','was it really you?','that vain contracted hand of the shipwrecked?','that ash that the wind will soon disperse?','that which devoured the last bit of fire with a single flash?'],
      ['truly','was it true?','was it you who was suspended from the toilet chain','like a paralyzed pendulum for eternity','vanished being','ceased being','brushed aside','suicide','oh crystal palace of intelligence','invaded by furious surges of instinct','oh butterfly\'s obsession with the other side of the mirror','oh perpetual opposer of the established','pedroinsideoutsocks','pedroleadedeyes','pedroeccentricjackets','and lost notebooks','pedro exasperation of life\'s jaguars','but you are no longer here!','when I looked at you for the last time','before I returned you to moisture and disintegration','I no longer recognized you','was it really you?','that melancholy of fallen banners?','that stillness that precedes the underground rage?','that mourning and germ now food for clover?']
    ]
  },
  {
    num: '5',
    variantes: [
      ['pedro no longer','only rock','lump returned to the oppressive layers of land','to the freezing silence of quarry','never again adventure','only venture','to the insane rage of depredation','to what leaves only remains','never traces','never the sounds of vines or roots in the chest','trail of brands of time','but you shine within me','like a sword in the bottom of a stream','but you sigh within me','you still love within me','you knock on my heart','like an animal panting for one more chance','beloved son!','we are the seething foam on a fathomless sea'],
      ['pedro no longer','only stalactite','mineral returned to the greed of dust','to the vulva of the hurricane of metamorphosis','never again fortune','only misfortune','to the vindictive efficiency of separation','to what demands only space','never time','never the flapping of petrels and swallows in the mind','trickle of hot coals of perseverance','but you glow within me','like a wave that finally breaks on the beach of the heart','but you blink within me','you still breathe within me','you thrive in my blood','like a seed eager for a new germination','beloved son!','we are the whisper of an everlasting foliage'],
      ['pedro no longer','only quartz','block returned to the astonished doves in the rocks','to the violent perversity of acid','never again adventure','only a shroud','to the metallic obstinance of the inert','to what imposes only shadows','never shapes','never the arteries of diamonds and flowers in the forehead','imprints of the embers of duration','but you sparkle within me','like a shooting star entering the atmosphere','but you dream within me','you still live within me','you burn in my memory','like old tribal songs on the lips of youth','beloved son!','we are the echo of an eternal tune']
    ]}
];

/* ================= i18n de la interfaz ================= */
const I18N = {
  es: {
    sub: 'efraín jara idrovo — sollozo por pedro jara (estructuras para una elegía) · cuenca, 1978',
    vistaGenerativa: 'lectura generativa',
    pliego: 'pliego completo',
    langBtnLabel: 'english',
    luz: 'luz', sombra: 'sombra',
    partitura: 'partitura de lectura',
    modoLibre: 'lectura combinatoria',
    modoVecinos: 'salto entre campos adjacentes',
    modoCorrida: 'corrida (texto íntegro)',
    semilla: 'semilla',
    semillaPh: '(vacío = azar)',
    semillaHint: 'misma semilla → misma lectura',
    densidad: 'densidad',
    densidadHint: 'variantes en circulación por parte',
    tempo: 'tempo',
    tempoVerso: 'ms / verso',
    tempoInstantaneo: 'revelación instantánea',
    ruta: 'ruta',
    rutaCheck: 'anotar la variante de origen de cada verso',
    generar: 'generar lectura',
    seedPrefix: 'semilla de esta lectura: ',
    seedSuffix: ' (anótala para repetirla)',
    pliegoNota: 'las quince subsecciones en disposición de pliego — la progresión numérica permite saltar entre variantes. imprime en horizontal.',
    imprimir: 'imprimir pliego',
    bioTitulo: 'sobre el poeta',
    bio1: 'Julio Efraín Jara Idrovo (Cuenca, Ecuador, 26 de febrero de 1926 – 8 de abril de 2018). Poeta, ensayista y catedrático universitario; se formó en jurisprudencia en la Universidad de Cuenca.',
    bio2: 'Fundador de la revista El Guacamayo y la Serpiente, es reconocido sobre todo por Sollozo por Pedro Jara (1978), publicado como un solo pliego amplio para que el lector viera la totalidad ante sus ojos y pudiera leerlo «en innumerables combinaciones»: siempre distinto y siempre el mismo.',
    bio3: 'Traducción al inglés: Dra. Cecilia Mafla Bustamante. "Weeping for Pedro Jara." Interdisciplinary Studies in Literature and Environment, Vol. 5, Issue 1, Winter 1998, pp. 89–98.',
    footer: 'un homenaje al poeta Efraín Jara Idrovo y a su familia. 12 de Noviembre de 2026. Por TPP',
    fin: 'efraín jara idrovo, 1978',
    fuente: 'Efraín Jara Idrovo, «sollozo por pedro jara (estructuras para una elegía)», Cuenca, Ecuador: Casa de la Cultura, 1978.',
    biblio: 'bibliografía',
    biblioIntro: 'referencias sobre el poema y el poeta.',
    biblioTitulos: 'Bibliografía',
    biblioItems: [
      'Badillo Coronado, Carla. «Efraín Jara Idrovo, El poeta de la estructura infinita». 2014. <a href="https://www.eltelegrafo.com.ec/noticias/carton/1/efrain-jara-idrovo-el-poeta-de-la-estructura-infinita">El Telégrafo</a>',
      'Castelo, Hernán. <em>Lírica ecuatoriana del siglo XX</em>. Quito, 2003.',
      'Jara Idrovo, Efraín. <em>El mundo de las evidencias</em>. Cuenca: Casa de la Cultura Ecuatoriana «Benjamín Carrión», Núcleo del Azuay, 1984.',
      '—. «Obra reunida (Tomo I): Poesía». Ed. María Augusta Vintimilla. Cuenca: Universidad de Cuenca, Ecuador, 2025, <a href="https://editorial.ucuenca.edu.ec/omp/index.php/ucp/catalog/view/146/360/759">https://editorial.ucuenca.edu.ec/omp/index.php/ucp/catalog/view/146/360/759</a>.',
      '—. «Obra reunida (Tomo II): Ensayos, discursos y correspondencia». Ed. Cristóbal Zapata. Cuenca: Universidad de Cuenca, Ecuador, 2025, <a href="https://editorial.ucuenca.edu.ec/omp/index.php/ucp/catalog/view/147/361/762">https://editorial.ucuenca.edu.ec/omp/index.php/ucp/catalog/view/147/361/762</a>.',
      '—. «Weeping for Pedro Jara (Structures for an Elegy)». Trad. Cecilia Mafla Bustamante. <em>Interdisciplinary Studies in Literature and Environment</em> Vol. 5, Issue 1, Winter 1998, Pages 89–98, doi:<a href="https://doi.org/10.1093/isle/5.1.89">10.1093/isle/5.1.89</a>.',
      'Mafla Bustamante, Cecilia. «Efraín Jara Idrovo: la eufonía y el sentido en la poesía». <em>Kipus: Revista Andina de Letras</em> 33 (2013).',
      'Montesinos, Jaime. «Efraín Jara Idrovo: su evolución poética». <em>Revista Iberoamericana</em> LVI, 144–145 (1988): 851–863.',
      'Oquendo Troncoso, Xavier. «Estudio: poetas siglo XX Ecuador». <em>Ómnibus, Revista Intercultural</em> 43 (2013).',
      'Torres Armas, Andrea. «sollozo por pedro jara (estructuras para una elegía), de Efraín Jara Idrovo: entre la matemática y la literatura potencial». Universidad de las Artes, Escuela de Literatura, Guayaquil-Ecuador, 2021.',
      'Vintimilla, María Augusta. <em>El tiempo, la muerte, la memoria: la poética de Efraín Jara Idrovo</em>. Quito: Universidad Andina Simón Bolívar, 1999.',
      '—. <em>Magia, erotismo y lenguaje: las zonas sagradas en la poética de Efraín Jara Idrovo</em>. Quito: Universidad Andina Simón Bolívar, 1996.'
    ],
    issueLink: 'reporta un problema · github'
  },
  en: {
    sub: 'efraín jara idrovo — sollozo por pedro jara (structures for an elegy) · cuenca, 1978',
    vistaGenerativa: 'generative reading',
    pliego: 'full broadside',
    langBtnLabel: 'español',
    luz: 'light', sombra: 'shadow',
    partitura: 'reading score',
    modoLibre: 'combinatorial reading',
    modoVecinos: 'jump between adjacent fields',
    modoCorrida: 'straight through (full text)',
    semilla: 'seed',
    semillaPh: '(empty = random)',
    semillaHint: 'same seed → same reading',
    densidad: 'density',
    densidadHint: 'variants in rotation per part',
    tempo: 'tempo',
    tempoVerso: 'ms / line',
    tempoInstantaneo: 'instant reveal',
    ruta: 'path',
    rutaCheck: 'annotate the source variant of each line',
    generar: 'generate reading',
    seedPrefix: 'seed of this reading: ',
    seedSuffix: ' (write it down to repeat it)',
    pliegoNota: 'the fifteen subsections laid out as a broadside — the numbering lets you jump between variants. print in landscape.',
    imprimir: 'print broadside',
    bioTitulo: 'about the poet',
    bio1: 'Julio Efraín Jara Idrovo (Cuenca, Ecuador, February 26, 1926 – April 8, 2018). Poet, essayist and university professor; trained in law at the University of Cuenca.',
    bio2: 'Co-founder of the journal El Guacamayo y la Serpiente, he is best known for Sollozo por Pedro Jara (1978), published as a single broadsheet so the reader could see the whole at a glance and read it "in countless combinations": always different and always the same.',
    bio3: 'English translation: Dr. Cecilia Mafla-Bustamante. "Weeping for Pedro Jara." Interdisciplinary Studies in Literature and Environment, Vol. 5, Issue 1, Winter 1998, Pages 89–98.',
    footer: 'an hommage to the poet Efraín Jara Idrovo and his family. November 12th, 2026. By TPP',
    fin: 'efraín jara idrovo, 1978 · transl. dr. cecilia mafla-bustamante, interdisciplinary studies in literature and environment (isle) 5, no. 1, pp. 89-98 (1998).',
    fuente: 'Efraín Jara Idrovo, "sollozo por pedro jara (estructures for an elegy)", Cuenca, Ecuador: Casa de la Cultura, 1978. English translation by Dr. Cecilia Mafla-Bustamante, ISLE: Interdisciplinary Studies in Literature and Environment Vol. 5, no. 1, Oxford University Press, 1998.',
    biblio: 'bibliography',
    biblioIntro: 'references on the poem and the poet.',
    issueLink: 'report a problem · github'
  }
};

const HINTS = {
  libre: {
    es: 'un verso por línea, elegido al azar entre las variantes de cada parte',
    en: 'one line per row, chosen at random among each part\'s variants'
  },
  vecinos: {
    es: 'como en el Klavierstück XI de Stockhausen: tras cada campo se salta a un campo adjacente (±1)',
    en: 'as in Stockhausen\'s Klavierstück XI: after each group, jump to an adjacent group (±1)'
  },
  corrida: {
    es: 'las tres variantes de cada parte, seguidas, sin azar',
    en: 'the three variants of each part, in sequence, no chance'
  }
};

/* ================= estado ================= */
const IDIOMAS = { es: PARTES, en: PARTES_EN };
let lang = 'es';
let ultimaLectura = null;    // { modo, densidad, mostrarRuta, ms, seed }
let ultimaSemillaTexto = '';

/* ---------------- seeded PRNG ---------------- */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* ---------------- DOM refs ---------------- */
const $ = id => document.getElementById(id);
const poema = $('poema'), btn = $('generar'),
      semillaInput = $('semilla'), semillaUsada = $('semillaUsada'),
      tempoInput = $('tempo'), tempoHint = $('tempoHint'),
      rutaChk = $('ruta'), modoHint = $('modoHint'),
      vistaGenerativa = $('vistaGenerativa'), pliego = $('pliego'),
      btnVistaLectura = $('vistaLectura'), btnVistaPliego = $('vistaPliego'),
      langBtn = $('langBtn'), temaBtn = $('temaBtn'),
      pliegoGrid = $('pliegoGrid');

let revealTimer = null;

/* ---------------- DOM refs bibliografía ---------------- */
const biblio = $('biblio'), btnVistaBiblio = $('vistaBiblio'),
      biblioLista = $('biblioLista'), biblioIntro = $('biblioIntro'),
      fuenteImpresa = $('fuenteImpresa');

/* ---------------- idioma ---------------- */
function aplicarIdioma() {
  const t = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  langBtn.textContent = t.langBtnLabel;
  temaBtn.textContent = document.documentElement.dataset.theme === 'dark' ? t.luz : t.sombra;

  const modoActual = document.querySelector('input[name="modo"]:checked').value;
  modoHint.textContent = HINTS[modoActual][lang];

  tempoHint.textContent = tempoInput.value === '0'
    ? t.tempoInstantaneo
    : tempoInput.value + ' ' + t.tempoVerso;

  if (ultimaSemillaTexto) {
    semillaUsada.textContent = t.seedPrefix + ultimaSemillaTexto + t.seedSuffix;
  }

  pliegoGrid.innerHTML = '';
  construirPliego();
  construirBiblio();

  if (fuenteImpresa) fuenteImpresa.textContent = t.fuente;

  if (ultimaLectura) {
    const { modo, densidad, mostrarRuta, ms, seed } = ultimaLectura;
    render(buildTokens(modo, densidad, mulberry32(seed), mostrarRuta), ms);
  }
}

document.querySelectorAll('input[name="modo"]').forEach(r =>
  r.addEventListener('change', () => { modoHint.textContent = HINTS[r.value][lang]; }));

tempoInput.addEventListener('input', () => {
  const t = I18N[lang];
  tempoHint.textContent = tempoInput.value === '0'
    ? t.tempoInstantaneo
    : tempoInput.value + ' ' + t.tempoVerso;
});

/* ---------------- vistas ---------------- */
function mostrarVista(qual) {
  pliego.classList.toggle('visible', qual === 'pliego');
  biblio.classList.toggle('visible', qual === 'biblio');
  vistaGenerativa.style.display = qual === 'lectura' ? '' : 'none';
  btnVistaPliego.classList.toggle('activo', qual === 'pliego');
  btnVistaBiblio.classList.toggle('activo', qual === 'biblio');
  btnVistaLectura.classList.toggle('activo', qual === 'lectura');
  document.body.classList.toggle('en-pliego', qual === 'pliego');
  window.scrollTo(0, 0);
}
btnVistaLectura.addEventListener('click', () => mostrarVista('lectura'));
btnVistaPliego.addEventListener('click', () => mostrarVista('pliego'));
btnVistaBiblio.addEventListener('click', () => mostrarVista('biblio'));

/* ---------------- tema ---------------- */
const raiz = document.documentElement;

function aplicarTema(theme) {
  raiz.dataset.theme = theme;
  temaBtn.textContent = theme === 'dark' ? I18N[lang].luz : I18N[lang].sombra;
  try { localStorage.setItem('pedro-tema', theme); } catch (e) {}
}
function temaInicial() {
  let guardado = null;
  try { guardado = localStorage.getItem('pedro-tema'); } catch (e) {}
  if (guardado === 'dark' || guardado === 'light') return guardado;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
aplicarTema(temaInicial());
temaBtn.addEventListener('click', () => {
  aplicarTema(raiz.dataset.theme === 'dark' ? 'light' : 'dark');
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  let guardado = null;
  try { guardado = localStorage.getItem('pedro-tema'); } catch (err) {}
  if (!guardado) aplicarTema(e.matches ? 'dark' : 'light');
});

/* ---------------- idioma: toggle ---------------- */
langBtn.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  aplicarIdioma();
});

/* ---------------- bibliografía ---------------- */
function construirBiblio() {
  const t = I18N[lang];
  biblioIntro.textContent = t.biblioIntro || I18N.es.biblioIntro;
  const items = t.biblioItems || I18N.es.biblioItems;
  biblioLista.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item; // <em> y <a> de las citas
    biblioLista.appendChild(li);
  });
}

/* ---------------- pliego ---------------- */
function construirPliego() {
  const frag = document.createDocumentFragment();
  IDIOMAS[lang].forEach(parte => {
    const num = document.createElement('div');
    num.className = 'pliego-num';
    num.textContent = parte.num;
    frag.appendChild(num);

    parte.variantes.forEach((variante, vIdx) => {
      const sub = document.createElement('div');
      const titulo = document.createElement('div');
      titulo.className = 'sub-titulo';
      titulo.textContent = parte.num + ' · ' + (vIdx + 1);
      sub.appendChild(titulo);

      variante.forEach((linea, lIdx) => {
        const fila = document.createElement('div');
        fila.className = 'linea';
        const n = document.createElement('span');
        n.className = 'ln';
        n.textContent = lIdx + 1;
        const tx = document.createElement('span');
        tx.className = 'texto';
        tx.textContent = linea;
        fila.appendChild(n);
        fila.appendChild(tx);
        sub.appendChild(fila);
      });
      frag.appendChild(sub);
    });
  });
  pliegoGrid.appendChild(frag);
}

$('imprimir').addEventListener('click', () => window.print());

/* ---------------- tokens de una lectura ---------------- */
function buildTokens(modo, densidad, rng, mostrarRuta) {
  const tokens = [];
  const partes = IDIOMAS[lang];

  partes.forEach((parte, pIdx) => {
    tokens.push({ tipo: 'parte', texto: parte.num });

    if (modo === 'corrida') {
      parte.variantes.forEach((vari, vIdx) => {
        vari.forEach(l => tokens.push({
          tipo: 'verso', texto: l,
          ruta: mostrarRuta ? parte.num + '·' + (vIdx + 1) : null
        }));
        if (vIdx < parte.variantes.length - 1) tokens.push({ tipo: 'blank' });
      });
    } else {
      const todos = [0, 1, 2];
      for (let i = todos.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [todos[i], todos[j]] = [todos[j], todos[i]];
      }
      const circulo = todos.slice(0, densidad);
      let actual = circulo[Math.floor(rng() * circulo.length)];
      const lineas = parte.variantes[0].length;

      for (let i = 0; i < lineas; i++) {
        if (modo === 'vecinos') {
          const vecinos = circulo.filter(v => Math.abs(v - actual) <= 1);
          actual = vecinos[Math.floor(rng() * vecinos.length)];
        } else {
          actual = circulo[Math.floor(rng() * circulo.length)];
        }
        tokens.push({
          tipo: 'verso', texto: parte.variantes[actual][i],
          ruta: mostrarRuta ? parte.num + '·' + (actual + 1) : null
        });
      }
    }
    if (pIdx < partes.length - 1) tokens.push({ tipo: 'blank' });
  });

  tokens.push({ tipo: 'fin', texto: I18N[lang].fin });
  return tokens;
}

/* ---------------- render ---------------- */
function render(tokens, msPerLine) {
  poema.innerHTML = '';
  let i = 0;

  const put = tok => {
    if (tok.tipo === 'parte') {
      const d = document.createElement('div');
      d.className = 'parte';
      const pn = document.createElement('span');
      pn.className = 'pn';
      pn.textContent = tok.texto;
      const pl = document.createElement('span');
      pl.className = 'pl';
      d.appendChild(pn);
      d.appendChild(pl);
      poema.appendChild(d);
    } else if (tok.tipo === 'blank') {
      const b = document.createElement('div'); b.className = 'blank';
      poema.appendChild(b);
    } else if (tok.tipo === 'fin') {
      const f = document.createElement('div');
      f.className = 'versiculo';
      f.textContent = '— ' + tok.texto;
      poema.appendChild(f);
    } else {
      const v = document.createElement('div');
      v.className = 'verso';
      v.style.transition = 'opacity .35s ease';
      v.style.opacity = '0';
      v.textContent = tok.texto;
      if (tok.ruta) {
        const r = document.createElement('span');
        r.className = 'ruta'; r.textContent = tok.ruta;
        v.appendChild(r);
      }
      poema.appendChild(v);
      requestAnimationFrame(() => { v.style.opacity = '1'; });
    }
  };

  if (msPerLine === 0) {
    tokens.forEach(put);
  } else {
    clearInterval(revealTimer);
    revealTimer = setInterval(() => {
      if (i >= tokens.length) { clearInterval(revealTimer); return; }
      put(tokens[i++]);
    }, msPerLine);
  }
}

/* ---------------- acción principal ---------------- */
btn.addEventListener('click', () => {
  const modo = document.querySelector('input[name="modo"]:checked').value;
  const densidad = parseInt(document.querySelector('input[name="densidad"]:checked').value, 10);
  const mostrarRuta = rutaChk.checked && modo !== 'corrida';
  const ms = parseInt(tempoInput.value, 10);

  let semillaTexto = semillaInput.value.trim();
  let seed;
  if (semillaTexto === '') {
    seed = Math.floor(Math.random() * 2 ** 31);
    semillaTexto = String(seed);
  } else {
    seed = parseInt(semillaTexto, 10);
    if (isNaN(seed)) seed = 0;
  }
  ultimaSemillaTexto = semillaTexto;
  semillaUsada.textContent = I18N[lang].seedPrefix + semillaTexto + I18N[lang].seedSuffix;
  semillaInput.placeholder = '';

  ultimaLectura = { modo, densidad, mostrarRuta, ms, seed };
  render(buildTokens(modo, densidad, mulberry32(seed), mostrarRuta), ms);
});

/* ---------------- init ---------------- */
aplicarIdioma();
