document.addEventListener("DOMContentLoaded", () => {
  fillTable(jlpt5Kanji);
  fillStatuses("5");

  const jlptSelect = document.querySelector(".js-main-page-select");

  jlptSelect.addEventListener("change", () => {
    const jlptLevel = jlptSelect.options[jlptSelect.selectedIndex].value;
    purgeTable(".table");
    fillTable(eval(`jlpt${jlptLevel}Kanji`));
    fillStatuses(jlptLevel);
  });
});


function purgeTable(selector) {
  const table = document.querySelector(selector);
  while(table.hasChildNodes()) {
     table.removeChild(table.firstChild);
  };
}

function fillStatuses(jlptLevel){
  const table = document.querySelector(".table");
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      let savedValue = Storage.get(table.rows[i].cells[j].textContent);
      
      if(savedValue && savedValue["grade"] === "well" && jlptLevel === savedValue["jlptLevel"]){
        table.rows[i].cells[j].classList.add("table__td_know-well");
      } else if(savedValue && savedValue["grade"] === "bad" && jlptLevel === savedValue["jlptLevel"]){
        table.rows[i].cells[j].classList.add("table__td_know-bad");
      };
    };
  };
};

function fillTable(kanjiArray) {
  console.log(kanjiArray);
  const table = document.querySelector(".table");

  for(let i = 0; i < kanjiArray.length; i++ ) {
    if(i == 0){
      var tr = document.createElement("tr");
    };

    if( i % 8 == 0 && i != 0) {
      table.appendChild(tr);
      var tr = document.createElement("tr");
    };

    let td = document.createElement("td");
    td.className = "table__td";
    td.appendChild(document.createTextNode(kanjiArray[i]));
    tr.appendChild(td);

    if(i == kanjiArray.length - 1 ){
      table.appendChild(tr);
    };
  }

  initEventHandlers();
};

function initEventHandlers() {
  document.querySelectorAll(".table__td").forEach((el) => {
      el.addEventListener("click", (e) => {
        el.classList.add("table__td_clicked");
        el.classList.remove("table__td_know-well");
        el.classList.remove("table__td_know-bad");
      });
  });
}



const jlpt5Kanji = ["一","七","万","三","上","下","中","九","二",
"五","人","今","休","会","住","何","先","入","八","六","円","出",
"分","前","北","十","千","午","半","南","友","口","古","右","名",
"四","国","土","夕","外","多","夜","大","天","女","子","学","安",
"家","小","少","山","川","左","年","広","店","後","思","手","新",
"日","昼","時","書","月","有","朝","木","本","来","東","校","歩",
"母","毎","気","水","火","父","生","男","白","百","目","知","社",
"私","空","立","紙","耳","聞","花","行","西","見","言","話","語",
"読","買","赤","走","足","車","近","週","道","金","銀","長","間",
"雨","電","食","飲","駅","高","魚"]

const jlpt4Kanji = ["不","世","主","乗","事","京","仕","代","以",
"伝","低","体","作","使","便","借","働","元","兄","光","全","公",
"内","写","冬","切","別","利","力","勉","動","区","医","去","取",
"受","台","合","同","味","呼","品","員","問","回","困","図","園",
"地","堂","場","声","売","変","夏","太","好","妹","姉","始","字",
"室","寒","寝","屋","工","市","席","帰","度","座","建","引","弟",
"弱","強","待","心","忘","急","悪","意","所","押","拾","持","捨",
"教","文","料","方","旅","族","早","明","映","春","暑","暗","曜",
"服","村","林","森","業","楽","歌","止","正","死","残","民","池",
"決","注","泳","洋","洗","海","消","漢","牛","物","特","犬","理",
"産","用","田","町","画","界","病","発","県","真","着","短","研",
"祖","秋","究","第","答","終","続","線","練","習","考","者","肉",
"自","色","英","茶","菜","落","薬","親","計","試","説","調","貸",
"質","起","転","軽","返","送","通","連","進","遅","運","遠","部",
"都","重","野","鉄","門","閉","開","降","院","集","青","音","頭",
"題","顔","風","飯","館","首","験","鳥","黒"]

const jlpt3Kanji = ["両","丸","久","予","争","交","仏","他","付",
"令","仲","件","任","似","位","余","例","係","信","個","倒","候",
"停","側","備","像","優","兆","共","具","再","冷","刊 ","列","初",
"判","制","刷 ","刻","則","副","割","加","助","努","労","務","勝",
"勢","包","化","卒","協","単","印","危 ","厚","原 ","参","反","可",
"史","号","各","向","君","吸","吹","告","周","命","和","商","喜",
"営","器","因","団","囲","固","在","坂","型","報","境","増","夢",
"夫","失","妻","婚 ","婦","季","孫 ","守","完","官","定","実","客",
"害","容","宿","寄","富","察","寺","対","導","局","居","岩","岸",
"島","州","差","布","希 ","師","帯","常","平","幸","底","府","庫",
"庭","式","当","形","役","彼","徒","得","御","必","忙 ","念","怒",
"性","息","悲","情","想","愛","感","慣","成","戦","戸","戻","才",
"打","払 ","技","投","折","招","指","探","接","支","改","放","政",
"敗","散","数","断","易","昔","星","昨","晩 ","景","晴","曲","最",
"望","期","未","末","材","束","板","果","査","栄","根","格","検",
"極","構","様","横","橋","機","欠","次","武","歯","段 ","殺","比",
"毛","氷","求","河","油","治","法","波","泣","活","流","浴","深",
"混","温","測","港","湖","湯","満","準","演","点","無","然","焼",
"熱","犯","状","独","率","玉","王","現","球","由","申","留","略",
"番","疲","痛","登","的","皆 ","皮","皿","直","相","省","石","破",
"確","示","礼","祝","神","祭","禁","科","移","程","種","積","章",
"競","竹","笑","筆","等","算","管","箱","築","米","精","糸","約",
"級","細","組","経","結","給","絵","絶","緑","編","績","罪","置",
"美","羽","老","職","育","胃","背","能","臣","航","船","良 ","芸",
"若 ","苦","草","荷","葉","虫","血","術","表","製","複","要","規",
"覚","観","角","解","訓","記","許","認  ","課","談","論 ","講","識",
"議","谷","豊","象","負","財","責","費","資","賛","路","身","軍","輪",
"農","辺","迷","追","退","速","遊","過","達","違 ","適","選","配","酒",
"録","関","限","陸","険","陽","階","際","雑","雪","雲","静","非","面",
"願","類","飛","馬","鳴","鼻"]

const jlpt2Kanji = ["与","並","乱","乳","乾","了","互","亡","介","伸",
"伺","供","依","倍","値","偉","偶","傾","億","児","党","兵","冊","凍",
"処","到","倍","券","刺","劇","効","勇","募","勤","匹","占","卵","双",
"収","叫","召","否","含","咲","喫","圧","均","坊","埋","城","域","塔",
"塗","塩","央","奥","姓","委","娘","存","宅","宇","宝","封","専","将",
"尊","届","層","巨","巻","帽","幅","干","幼","幾","庁","床","延","律",
"復","快","怖","恋","恐","恥","患","悩","憎","承","抜","抱","担","拝",
"挟","捕","捜","掃","掘","掛","採","換","損","救","敬","旧","昇","普",
"暮","暴","曇","更","替","札","机","杯","枚","枝","枯","柔","柱","械",
"棒","植","権","欧","欲","歳","歴","殿","毒","永","汗","汚","沈","沸",
"況","泉","泊","泥","浅","浮","涙","液","涼","清","済","減","渡","湾",
"湿","溶","滴","漁","濃","濯","灯","灰","炭","煙","照","燃","燥","爆",
"片","版","猫","珍","瓶","甘","畑","畜","畳","疑","療","盗","眠","砂",
"硬","磨","祈","福","秒","税","突","窓","童","符","筒","簡","籍","粉",
"粒","紅","純","紹","絡","綿","総","緒","缶","署","群","翌","耕","肌",
"肩","肯","胸","脂","脳","腕","腰","腹","膚","臓","舞","舟","般","荒",
"菓","著","蒸","蔵","薄","衣","袋","被","装","裏","補","触","訪","設",
"詞","詰","誌","誤","諸","警","貝","貧","貨","販","貯","貿","賞","賢",
"贈","超","越","跡","踊","軒","軟","輸","辛","辞","込","迎","述","逃",
"逆","途","造","郊","郵","量","針","鈍","鉱","銅","鋭","防","除","隅",
"隻","雇","難","零","震","革","靴","頂","順","預","領","頼","額","香",
"駐","骨","髪","麦","黄","齢"]

const jlpt1Kanji = jlpt5Kanji.concat(jlpt4Kanji).concat(jlpt3Kanji).concat(jlpt2Kanji)
