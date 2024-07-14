// array of sentences
    var sentences = [
      ">> 判断の扉のように、剣の道",
      ">> Моя душа трескается в ночь, моё меч - моя защита",
      ">> Enveloppé dans l'obscurité, un deuil pour l'âme bannie.",
      ">> Strike into my ground-my cruel intent",
      ">> Que la pantalla secular cante una sinfonía de estática.",
      ">> شغل من خلال الإطارات الشرسة في هذا العالم، رغبتي الجسدية في كلمة مقدسة!",
      ">> Der Betonspine, lineare Markierung des Endes.",
      ">> 腐败指挥家嗡嗡心脏中蕴含的哭泣交响乐",
      ">> Quale vento viene dalla polvere dei nostri sogni",
      ">> 해당 지문을 자른 것처럼 피가 춤을 추며, 절대로 멈추지 않을까?",
      ">> Världen går fort- och jag är fortfarande",
      ">> Rüzgar izliyor- gökyüzündeki tüm gözleriyle",
      ">> अंधेरे में चिपकते हुए- दरवाजे की तकलीफ की तर",
      ">> Det uendelige syklus av lys til mørke- en sirkelbevegelse",
      ">> olhando pela janela, eu sou livre de todo o meu peso",
      ">> kekosongan melalui mata kita- barrier reflektif yang memantul kembali pada kita",
      ">> آزادی سے سانس لینے کی خواہش - روشنی سے نیچے غرق، ہم پانی میں گروہ ہیں",
      ">> wakati huisha kliniki- kuendelea nyuma kupitia sehemu za kijivu",
      ">> சூரியின் பிறந்த இல்லையாக, பெருக்கக்கூடிய பழையம்- வெளிவந்துவிடுவதற்கு ஒலி/பூச்சிக்குள்",
      ">> hơi sương làm cho tĩnh mạch - hơi trắng thấm vào mắt chúng ta, tức giận.",
      ">> ความตายที่นินจน - ช่องว่างของคลื่น",
      ">> زنجیر این دنیا، پایین رهایی پرانام- متصل به نامیدگی",
      ">> płacz świata, zamazane- na zawsze pozostaje obserwatorem",
      ">> takot namin ay nakatago, nakakandado- walang malinaw na pananaw",
      ">> picurând în interiorul strâmt al puțului- un ecou nesfârșit",
      ">> við drifum frá ljósinu- sem dimm ættbarn",
      ">> mustan peiton, joka ui alla- hiljaisen yön rituaali",
      ">> Я часто задумуюся, чи це тут народжуються хмари",
      ">> Fleeting schemering, loerend boven het landschap - onze opgeschorte poort",
      ">> 一個純粹的變形- 把黑暗脫下來為無盡",
      ">> mögulegt sælu, líflausu laufi- og leita svefn skógar",
      ">> flosante super la pejzaĝo, sub la elektra reto- senlima paso",
      ">> nostrum archaica monumentum, ex triumphans- et cyclic corruptionem",
      ">> et tyndt slør skjuler vores tie storherre, holder en hvisken- hun stråler i tomheden",
      ">> minu varju, piiratud selle isiku taga, unustan uuesti lõpuks",
      ">> we folgian our englas, gefangen in the void- our yfel in sēarch of the end",
      ">> 私の目に会うために急いで、前の世界",
      ">> die zornigen Augen des Nichts, schweigend erstreckend, unser Richter des Erbarmens",
      ">> naše jemné klouzání po bezbřehém prostoru, žijeme, abychom zemřeli jako slepí pasažéři.",
      ">> the stream of time, a constant flow of motion",
      ">> kis hullámok törnek ki a szintetikus fenyegetésekből a sekély vizekben",
      ">> zasidrana v praznini in zavrača vlogo izmišljene meje.",
      ">> logo desaparecendo, nosso tambor em decadência bate o padrão do ar",
      ">> ένα συρρικνωμένο πτώμα, η αποσυντιθέμενη αθωότητα του ψυχισμού μας- το σωματικά κενό σύμφωνο",
      ">> geblendet von ihrer eigenen Überzeugung, vergessen sie zu beobachten und zu reflektieren",
      ">> 私たちは100万人の声なき声であり、翼もなく漂っている。",
      ">> w oczach piekielnego demona pojawia się błysk strachu, plugawe, przesuwające się przerażenie",
      ">> gravé dans notre empreinte éruptive, décapant les cercles de feu - peau sans fin du passé",
      ">> Сумеречный предатель, танцующий в пустынном воздухе.",
      ">> the black smog is cotton in our eyes and mouth, coal inside our purity",
      ">> 孤立于凋零的弦--一个孤独的奇迹",
      ">> Cette liberté, solennellement sacrée, s'épanouit à la veille de la chaleur",
      ">> 汝の父の炎の旅団の人質として、殻のような檻に入れられた。",
      ">> Беспокойные провода охотятся, чтобы найти наше потерянное лицо в темноте- !",
      ">> Сред бурята, от писъци по пътя!",
      ">> Gefangen zwischen einer Spiegelwand, schlittere ich durch die engen Gänge der Bahn",
      ">> Zīdaiņu runas izslīd no mazām ūdens pasaulēm",
      ">> наша разорванная личность, потерянная между жесткими линиями истерии, спиралью желания",
      ">> bağlanmış mutluluk sistemimize ruh ve deri veririz",
      ">> Colliding currents in tandem, thy eternal echoes of harmony",
      ">> brillando en la oscuridad, adiestradas por un pecado hambriento, nuestras manos alcanzan una nada estrellada",
      ">> そのとき、このきらびやかな足取りは、角を曲がってやってきた-ドアを叩く不吉な音",
      ">> Den hylende sorthed ryster subtilt i knoglerne i den brændende ende",
      ">> La terra perduta sibila dall'alto della sepoltura - bruciatura sterile!",
      ">> Τρία φόβηθηκα την ραγδαιότητα του μαύρου άνοιξης, ένα βρόμο στο σκοτεινό ανέμο."
    ];

    // function to display the sentence one character at a time
    function displaySentence(sentence) {
      var i = 0;
      var interval = setInterval(function() {
        document.getElementById("sentence").innerHTML += sentence.charAt(i);
        i++;
        if (i > sentence.length) {
          clearInterval(interval);
        }
      }, Math.floor(Math.random() * (300 - 50 + 1) + 50));
    }
    function writeSentence(sentence) {
      var i = 0;
      var interval = setInterval(function () {
        document.getElementById("sentence").innerHTML += sentence.charAt(i);
        i++;
        if (i === sentence.length) {
          clearInterval(interval);
        }
      }, Math.floor(Math.random() * (300 - 50 + 1) + 50));
    }

    // function to get a random sentence
    function getRandomSentence() {
      var randomIndex = Math.floor(Math.random() * sentences.length);
      var randomSentence = sentences[randomIndex];
      document.getElementById("sentence").innerHTML = "";
      writeSentence(randomSentence);
    }

    // call the getRandomSentence function on page load
    window.onload = getRandomSentence;