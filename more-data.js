const localMedia={fz:'https://m.fz.bendibao.com/tour/50056.shtm',fzBooks:'https://zx.fuzhou.gov.cn/zz/csfz/tpxw/202404/t20240425_4814382.htm',fzCafe:'https://www.sohu.com/a/779306136_121124458',qz:'https://www.quanzhou.gov.cn/lyb/lyxw/202601/t20260119_3258243.htm',qzCafe:'https://m.qz.bendibao.com/meishi/5712.shtm',cz:'https://www.sohu.com/a/679902788_120271802',st:'https://www.shantou.gov.cn/cnst/yxst/cszn/lyzn/jqjd/index.html',stTrip:'https://cn.tripadvisor.com/Tourism-g297414-Shantou_Guangdong-Vacations.html'};
const add=(id,city,category,name,rating,reason,url,region,budget,time,heat=4.2)=>{
  const item=p(id,city,category,name,'conditional_recommendation',reason,{},lean('适合作为文化旅行中的日常体验或弹性停留。',time),{rating,dateSensitive:['bookstore','cafe','food','restaurant'].includes(category),note:'经营类地点需出发前复核营业状态。',sources:[D('本地媒体、旅行平台或公开攻略收录','多平台口碑入口',url)]});
  Object.assign(item,{region,budget,time,heatScore:heat});
  places.push(item);
};
add('fz-dream','fuzhou','bookstore','大梦书屋（西湖店）',4.5,'轻学术选书、文化沙龙与西湖环境结合，是福州阅读文化的代表性空间。',localMedia.fz,'鼓楼','¥¥','下午',4.5);
add('fz-xiaofeng','fuzhou','bookstore','晓风书屋',4.6,'老牌人文书店，以历史、社科、典籍和小众杂志见长。',localMedia.fz,'鼓楼','¥','下午',4.4);
add('fz-lusen','fuzhou','bookstore','鹿森书店（上下杭店）',4.6,'书店、餐饮与文化活动复合空间，曾获全国最美书店相关荣誉。',localMedia.fzBooks,'台江','¥¥','下午',4.6);
add('fz-wuyong','fuzhou','bookstore','无用空间',4.4,'位于文儒坊的独立哲思书店，适合与三坊七巷慢走串联。','https://fz.bendibao.com/tour/2024821/74903.shtm','鼓楼','¥¥','下午',4.3);
add('fz-qilin','fuzhou','bookstore','麒麟书局',4.2,'位于大光里，适合作为坊巷路线里的短暂停留。','https://fz.bendibao.com/tour/2024821/74903.shtm','鼓楼','¥','下午',4.0);
add('fz-pears','fuzhou','cafe','PEARS COFFEE',4.5,'社区型平价咖啡代表，适合观察福州独立咖啡的日常消费方式。','https://www.yinpinjie.com/news/202211/24/66871.html','台江','¥','下午',4.6);
add('fz-dan','fuzhou','cafe','咖啡DAN',4.5,'福州较早的一批精品独立咖啡馆，在本地咖啡地图中被频繁提及。',localMedia.fzCafe,'鼓楼','¥¥','下午',4.6);
add('fz-greasy','fuzhou','cafe','RGREASY HANDS 油手咖啡',4.3,'独立烘焙与鲜明主理人风格，适合希望继续探索福州精品咖啡的人。',localMedia.fzCafe,'鼓楼','¥¥','下午',4.3);
add('fz-poseidon','fuzhou','cafe','POSEIDON 赖塞冬',4.3,'被本地咖啡地图作者列入独立咖啡样本，适合作为坊巷之外的弹性停留。',localMedia.fzCafe,'鼓楼','¥¥','下午',4.2);
add('fz-bestcoffee','fuzhou','cafe','最咖啡',4.2,'咖啡与少儿阅读结合，适合作为亲子或雨天休息点。',localMedia.fz,'鼓楼','¥¥','下午',4.0);
add('fz-lin','fuzhou','museum','林则徐纪念馆',4.7,'在三坊七巷之外补足福州近代史人物与城市记忆。','https://wlt.fujian.gov.cn/','鼓楼','免费','白天',4.7);
add('fz-gushan','fuzhou','park','鼓山—涌泉寺',4.6,'山林、摩崖石刻与寺院文化结合，适合留出半天。','https://wlt.fujian.gov.cn/','晋安','¥','上午',4.6);
add('fz-xichan','fuzhou','attraction','西禅寺',4.3,'城市中的古寺空间，适合与大学城或西湖片区组合。','https://wlt.fujian.gov.cn/','鼓楼','¥','上午',4.1);
add('fz-meiyabo','fuzhou','food','没牙伯花生汤',4.5,'花生汤、芋泥等甜食能体现福州口味中的甜润一面。','https://www.sohu.com/a/862751842_121911505','台江','¥','夜晚',4.7);
add('fz-tongli','fuzhou','food','同利肉燕',4.4,'百年肉燕老字号，游客较多但仍是理解福州小吃的直接入口。','https://fz.bendibao.com/tour/202397/70659.shtm','鼓楼','¥','早餐',4.8);
add('fz-juchun','fuzhou','restaurant','聚春园',4.6,'适合系统品尝佛跳墙、荔枝肉等闽菜，而非只吃街边小吃。','https://wlt.fujian.gov.cn/','鼓楼','¥¥¥','正餐',4.5);
add('qz-tianhou','quanzhou','world_heritage','天后宫与德济门遗址',4.8,'海洋信仰与港口城市空间的重要节点。','https://whc.unesco.org/en/list/1561/','鲤城','免费','上午',4.7);
add('qz-wenmiao','quanzhou','world_heritage','泉州府文庙',4.7,'儒学空间与古城公共文化生活结合。','https://whc.unesco.org/en/list/1561/','鲤城','免费','白天',4.5);
add('qz-zongzheng','quanzhou','museum','南外宗正司考古遗址公园',4.6,'用考古遗址理解南宋皇族管理与城市制度。','https://quanzhou.gov.cn/zfb/xxgk/ztxxgk/ggwhty/whycbh/','鲤城','免费','白天',4.3);
add('qz-qingyuan','quanzhou','park','清源山',4.6,'老君岩、山林与城市视野结合，适合半日。','https://www.quanzhou.gov.cn/','丰泽','¥¥','上午',4.6);
add('qz-xijie','quanzhou','neighborhood','西街—中山路慢走',4.7,'从游客密集段走到居民与传统店铺混合段，体验古城层次。','https://itf.mafengwo.cn/client/note.php/info/?id=24038524','鲤城','免费','傍晚',4.9);
add('qz-niaoan','quanzhou','bookstore','鸟岸书店',4.3,'书店、咖啡与新门街文化空间结合。','https://sg.trip.com/moments/theme/destination-quanzhou-243-recreation-998219/','鲤城','¥¥','下午',4.2);
add('qz-damao','quanzhou','cafe','大猫咖啡',4.4,'百源路巷内独立咖啡馆，在本地咖啡地图中口碑较突出。','https://www.sohu.com/a/484670487_121124406','鲤城','¥¥','下午',4.4);
add('qz-yinji','quanzhou','cafe','印迹咖啡',4.1,'早期泉州本地咖啡品牌，可作为城市咖啡文化样本。',localMedia.qzCafe,'丰泽','¥¥','下午',4.0);
add('qz-sidan','quanzhou','food','斯丹姜母鸭',4.6,'古城代表性姜母鸭，适合与关岳庙片区组合。',localMedia.qz,'鲤城','¥¥','正餐',4.8);
add('qz-shuimen','quanzhou','food','水门国仔面线糊',4.6,'泉州早餐与夜宵代表，可自行选择配料。',localMedia.qz,'鲤城','¥','早餐',4.8);
add('qz-haochengcai','quanzhou','food','好成财牛排馆',4.4,'闽南式牛排与咸饭组合，适合体验泉州日常口味。',localMedia.qz,'鲤城','¥¥','正餐',4.5);
add('cz-kaiyuan','chaozhou','attraction','潮州开元寺',4.7,'古城宗教与建筑文化骨架，适合与牌坊街错峰串联。','https://www.chaozhou.gov.cn/','湘桥','免费','上午',4.7);
add('cz-xufu','chaozhou','national_key_relic','许驸马府',4.6,'宋代宅第格局是理解潮州传统住宅的重要样本。','https://www.chaozhou.gov.cn/','湘桥','¥','白天',4.3);
add('cz-jilue','chaozhou','national_key_relic','己略黄公祠',4.5,'潮州木雕与宗祠建筑的集中呈现。','https://www.chaozhou.gov.cn/','湘桥','¥','白天',4.2);
add('cz-westlake','chaozhou','park','潮州西湖—涵碧楼',4.3,'城市公园、革命史与居民日常休闲叠加。','https://www.chaozhou.gov.cn/','湘桥','免费','傍晚',4.3);
add('cz-xuelin','chaozhou','bookstore','学林书店',4.4,'西马路老书店，以文史和潮汕地方文化选书见长。',localMedia.cz,'湘桥','¥','下午',4.3);
add('cz-zaoyang','chaozhou','cafe','载阳茶馆',4.4,'比普通咖啡馆更能体现潮州工夫茶与潮曲体验。','https://www.chaozhou.gov.cn/','湘桥','¥¥','下午',4.5);
add('cz-zhenji','chaozhou','food','镇记牛杂',4.4,'牛杂与粿条是古城日常小吃组合，适合非正餐时段。','https://www.amap.com/','湘桥','¥','早餐',4.6);
add('cz-guantang','chaozhou','restaurant','官塘兄弟牛肉火锅',4.6,'牛肉部位丰富、现切现涮，是潮州饮食体验中的重点。','https://cn.tripadvisor.com/Restaurants-g303698-Chaozhou_Guangdong.html','湘桥','¥¥','正餐',4.7);
add('cz-laobing','chaozhou','food','老炳甘草水果',4.3,'甘草水果体现潮汕酸甜咸香的街头味觉。','https://www.amap.com/','湘桥','¥','下午',4.5);
add('cz-shuangsheng','chaozhou','food','双生肠粉',4.3,'适合早餐体验潮州酱汁肠粉。','https://www.amap.com/','湘桥','¥','早餐',4.5);
add('st-kaibu','shantou','museum','汕头开埠文化陈列馆',4.7,'与小公园、汕头旅社串联理解近代商埠。',localMedia.st,'金平','免费','白天',4.6);
add('st-qiaopi','shantou','museum','侨批文物馆',4.7,'侨批是理解海外潮人网络与家庭经济的核心材料。','https://www.gdfao.gov.cn/zwgk/zdly/sts/content/post_1333373.html','金平','免费','白天',4.5);
add('st-zhongshan','shantou','park','汕头中山公园',4.3,'老城公共公园，适合与博物馆组合。',localMedia.stTrip,'金平','免费','傍晚',4.4);
add('st-queshi','shantou','park','礐石风景区',4.3,'山海视野与轮渡体验结合。',localMedia.st,'濠江','¥','上午',4.3);
add('st-xidi','shantou','park','西堤公园—观海长廊',4.5,'港口、海风与侨乡记忆交织的日落散步线。',localMedia.st,'金平','免费','傍晚',4.6);
add('st-moji','shantou','bookstore','合胜墨集书店',4.1,'商场内的复合阅读空间，适合雨天休息。','https://m.st.bendibao.com/tour/2843.shtm','龙湖','¥','下午',4.0);
add('st-lai','shantou','cafe','来·公社',4.2,'小公园城市漫游中常被提及的咖啡与文化空间。','https://post.smzdm.com/p/aqrpx467/','金平','¥¥','下午',4.3);
add('st-youli','shantou','cafe','友鲤',4.1,'适合作为小公园步行的弹性咖啡停留。','https://post.smzdm.com/p/aqrpx467/','金平','¥¥','下午',4.2);
add('st-ririxiang','shantou','restaurant','日日香鹅肉饭店',4.4,'卤鹅是潮汕饮食代表，海外旅行者平台也有稳定收录。',localMedia.stTrip,'金平','¥¥','正餐',4.5);
add('st-jinxin','shantou','food','金新肠粉（金新南路店）',4.3,'适合体验汕头早餐肠粉与本地酱汁。',localMedia.stTrip,'金平','¥','早餐',4.6);
add('st-jianye','shantou','restaurant','建业酒家',4.5,'适合多人系统品尝潮菜，海外旅行者评分表现较好。',localMedia.stTrip,'龙湖','¥¥¥','正餐',4.4);
add('st-xinghua','shantou','restaurant','杏花吴记牛肉火锅',4.6,'高热度牛肉火锅代表，适合能接受排队的人。','https://www.amap.com/','金平','¥¥','正餐',4.9);

// v9: add evidence-backed cultural experiences, old-city food clusters and lodging.
// These records are recommendations rather than copied platform rankings.
const addCurated=(o)=>{
  const item=p(o.id,o.city,o.category,o.name,o.status||'conditional_recommendation',o.reason,o.heritage||{},lean(o.localReason||'适合纳入文化旅行的弹性行程。',o.time||'白天'),{
    rating:o.rating,cultural:o.cultural||4.4,experience:o.experience||4.3,risk:o.risk||'low',duration:o.duration||'1–2 小时',bestTime:o.time||'白天',dateSensitive:o.dateSensitive!==false,note:o.note||'开放、预约或营业状态请在出发前复核。',sources:o.sources
  });
  Object.assign(item,{region:o.region,budget:o.budget,time:o.time,heatScore:o.heat||o.rating,signature:o.signature||'',booking:o.booking||'',closedDay:o.closedDay||'',recordType:'place'});
  places.push(item);
};
const official={
  fzIh:'https://wlj.fuzhou.gov.cn/zzbz/tzgg/202505/t20250523_5023101.htm',
  fzTea:'https://www.fuzhou.gov.cn/zgfzzt/lswhmcgwh/zwgk/ztzl/bhqy/202504/t20250408_5001214.htm',
  qzIh:'https://www.quanzhou.gov.cn/zfb/xxgk/ztxxgk/ggwhty/whycbh/202304/t20230426_2874228.htm',
  qzStage:'https://www.quanzhou.gov.cn/zfb/xxgk/zfxxgkzl/qzdt/qzyw/202401/t20240118_2995670.htm',
  czIh:'https://www.chaozhou.gov.cn/slhwz/czxw/content/post_3950634.html',
  stHall:'https://www.shantou.gov.cn/hqsyq/hqxx/content/post_2199940.html',
  stIh:'https://rd.shantou.gov.cn/rd/gzdt/202412/a490d2123948458b949ca27cbf681bd9.shtml',
  stHat:'https://stgsl.shantou.gov.cn/stgsl/tpxw/202604/22c635186e9e4546acb590721105932c.shtml',
  stFood:'https://www.shantou.gov.cn/cnst/ywdt/content/post_2298525.html'
};
const gov=(claim,name,url)=>A(claim,name,url);
const platform=(claim,name,url)=>D(claim,name,url);

addCurated({id:'fz-ih-hall',city:'fuzhou',category:'experience',name:'福州市非物质文化遗产展示馆',rating:4.7,reason:'把闽都工艺、传统美术与民俗放进同一认知框架，适合在逛坊巷前先建立背景。',region:'鼓楼',budget:'免费',time:'白天',signature:'先看常设展，再按兴趣寻找寿山石、漆艺或软木画专题。',booking:'团体讲解与临展活动需预约。',sources:[gov('官方公布的非遗展示与公共文化空间','福州市文化和旅游局',official.fzIh)]});
addCurated({id:'fz-jasmine-hall',city:'fuzhou',category:'experience',name:'福州茉莉花茶文化馆',rating:4.6,reason:'从种植、窨制与贸易理解福州茉莉花茶，而不只是把它当作伴手礼。',region:'仓山',budget:'免费',time:'下午',signature:'适合与烟台山或仓山老街区串联。',sources:[gov('文化馆保护利用与展示信息','福州市历史文化名城管委会',official.fzTea)]});
addCurated({id:'fz-gulou-ih',city:'fuzhou',category:'experience',name:'鼓楼区非遗文创馆',rating:4.3,reason:'体量不大，但能集中接触福州传统工艺及当代转化，适合作为坊巷路线补充。',region:'鼓楼',budget:'免费',time:'下午',signature:'更适合顺路停留，不必单独跨城前往。',sources:[gov('列入福州市非遗特色展示空间','福州市文化和旅游局',official.fzIh)]});
addCurated({id:'fz-anlan',city:'fuzhou',category:'experience',name:'安澜会馆',rating:4.4,reason:'会馆建筑与商贸文化相结合，有活动时能补足上下杭一带的行业组织与江海贸易线索。',region:'台江',budget:'免费',time:'白天',signature:'优先选择有展览、讲解或非遗活动的日期。',booking:'活动场次以官方公告为准。',sources:[gov('列入福州市非遗特色展示空间','福州市文化和旅游局',official.fzIh)]});
addCurated({id:'fz-antai',city:'fuzhou',category:'oldbrand',name:'安泰楼·闽菜传习所',rating:4.5,reason:'比随机扫街更适合系统认识闽菜与福州小吃，也能观察老字号如何做技艺展示。',region:'鼓楼',budget:'¥¥',time:'正餐',signature:'适合多人分食，避免一次点齐全部名菜。',sources:[gov('列入福州市非遗特色展示空间','福州市文化和旅游局',official.fzIh)]});
addCurated({id:'fz-stay-shuxiang',city:'fuzhou',category:'stay',name:'福州三坊七巷书香文儒酒店',rating:4.6,reason:'位置适合清晨和夜间进入坊巷，空间气质也比标准商务酒店更贴近本次文化旅行主题。',region:'鼓楼',budget:'¥¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'优势是步行可达；代价是核心景区周边价格与人流。',booking:'订房时确认房型朝向、停车与取消政策。',sources:[platform('近期房型、住客反馈与可订状态','携程酒店','https://hotels.ctrip.com/hotels/26445164.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});
addCurated({id:'fz-stay-manxin',city:'fuzhou',category:'stay',name:'福州三坊七巷漫心酒店',rating:4.5,reason:'适合希望兼顾古城步行便利与连锁服务稳定性的旅行者。',region:'鼓楼',budget:'¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'作为交通和古城之间的折中选择。',booking:'核对具体门店地址、房型与早餐政策。',sources:[platform('近期房型、住客反馈与可订状态','携程酒店','https://hotels.ctrip.com/hotels/55235698.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});

addCurated({id:'qz-puppet',city:'quanzhou',category:'experience',name:'泉州木偶剧院',rating:4.8,reason:'提线木偶不是背景装饰；看一次正式演出，能直观理解泉州戏曲、音乐与操偶技艺。',region:'鲤城',budget:'¥',time:'演出时段',signature:'优先正式剧场演出，不用街头快闪替代。',booking:'热门场次可能需提前预约或购票。',sources:[gov('官方列出的古城戏曲展演场所','泉州市人民政府',official.qzStage),gov('泉州木偶与非遗概况','泉州市人民政府',official.qzIh)]});
addCurated({id:'qz-nanyin-yiyuan',city:'quanzhou',category:'experience',name:'泉州南音艺苑',rating:4.7,reason:'在相对正式的场域聆听南音，比把它当作古城路演更能理解曲牌、唱腔与乐器。',region:'鲤城',budget:'¥',time:'演出时段',signature:'适合提前了解节目时长与是否有导赏。',booking:'以场馆当周排期为准。',sources:[gov('官方列出的南音展演场所','泉州市人民政府',official.qzStage),gov('南音等国家级非遗介绍','泉州市人民政府',official.qzIh)]});
addCurated({id:'qz-liyuan',city:'quanzhou',category:'experience',name:'梨园古典剧院',rating:4.6,reason:'梨园戏保存古老剧种传统，适合希望把泉州的“活态遗产”看得更深入的人。',region:'鲤城',budget:'¥',time:'演出时段',signature:'若时间有限，与木偶剧二选一即可。',booking:'演出日期与票务以官方排期为准。',sources:[gov('官方列出的古城戏曲展演场所','泉州市人民政府',official.qzStage)]});
addCurated({id:'qz-overseas',city:'quanzhou',category:'museum',name:'泉州华侨历史博物馆',rating:4.5,reason:'用侨乡迁徙、社会网络与家乡建设补足世界海洋商贸中心之后的近现代故事。',region:'丰泽',budget:'免费',time:'白天',signature:'适合与海交馆形成“古代海贸—近现代华侨”对照。',sources:[gov('泉州华侨文化公共场馆信息','泉州市人民政府','https://www.quanzhou.gov.cn/') ]});
addCurated({id:'qz-dongcai',city:'quanzhou',category:'market',name:'泉州东菜市场',rating:4.2,reason:'观察闽南家庭食材、熟食与早市节奏，比只在西街吃网红小吃更接近日常。',region:'鲤城',budget:'¥',time:'上午',signature:'以观察和少量尝鲜为主，不堵住摊位通道。',sources:[platform('地点与近期用户到访线索','高德地图','https://www.amap.com/'),platform('市场与周边餐饮口碑入口','大众点评','https://www.dianping.com/') ]});
addCurated({id:'qz-stay-qixu',city:'quanzhou',category:'stay',name:'泉州七栩钟楼酒店',rating:4.7,reason:'由老百货建筑更新而来，地处古城核心，适合把清晨和夜间留给钟楼、西街与中山路。',region:'鲤城',budget:'¥¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'文化位置强，但应接受古城交通和价格溢价。',booking:'确认停车、接驳、房型噪声与取消条款。',sources:[platform('建筑改造、房型与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/111386202.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});
addCurated({id:'qz-stay-yuanshi',city:'quanzhou',category:'stay',name:'泉州古城圆石静舍（西街店）',rating:4.5,reason:'体量较小、靠近古城步行区，适合偏好在地尺度住宿而非大型酒店的人。',region:'鲤城',budget:'¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'小体量住宿更需仔细核对隔音、楼梯和服务时段。',booking:'确认准确门牌、行李搬运与取消政策。',sources:[platform('房型、位置与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/122362948.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});

addCurated({id:'cz-dawu',city:'chaozhou',category:'experience',name:'大吴泥塑博物馆',rating:4.6,reason:'大吴泥塑以戏曲人物与民俗题材见长，是理解潮州民间美术体系的具体入口。',region:'潮安',budget:'免费',time:'白天',signature:'不在古城核心，适合与潮安方向的专题行程组合。',sources:[gov('纳入潮州非遗主题线路','潮州市人民政府',official.czIh)]});
addCurated({id:'cz-qianci',city:'chaozhou',category:'experience',name:'潮州嵌瓷博物馆',rating:4.5,reason:'把祠庙屋脊上远看见到的嵌瓷，拆解为材料、题材与工序来理解。',region:'湘桥',budget:'免费',time:'白天',signature:'看完后再回到祠庙观察屋脊装饰，体验更完整。',sources:[gov('纳入潮州非遗主题线路','潮州市人民政府',official.czIh)]});
addCurated({id:'cz-tea-museum',city:'chaozhou',category:'experience',name:'凤凰单丛茶博物馆',rating:4.6,reason:'从茶树品系、凤凰山环境和制作技艺理解单丛茶，适合真正关注茶文化的人。',region:'潮安',budget:'免费',time:'白天',signature:'与凤凰镇、茶园或正规工夫茶体验串联。',sources:[gov('纳入潮州非遗主题线路','潮州市人民政府',official.czIh)]});
addCurated({id:'cz-she-hall',city:'chaozhou',category:'experience',name:'凤凰山畲族文化馆',rating:4.4,reason:'补足古城汉族府城叙事之外的凤凰山族群文化与区域文化层次。',region:'潮安',budget:'免费',time:'白天',signature:'更适合自驾或凤凰山专题日。',sources:[gov('纳入潮州非遗主题线路','潮州市人民政府',official.czIh)]});
addCurated({id:'cz-xima',city:'chaozhou',category:'market',name:'西马路传统小吃街区',rating:4.4,reason:'比只停留牌坊街更适合按时段观察粿品、甜汤、牛杂等古城日常饮食。',region:'湘桥',budget:'¥',time:'上午或傍晚',signature:'它是街区型选择，不代表沿街每家店都同样值得吃。',sources:[platform('街区位置与近期商户线索','高德地图','https://www.amap.com/'),platform('潮州古城小吃口碑入口','大众点评','https://www.dianping.com/') ]});
addCurated({id:'cz-stay-hanting',city:'chaozhou',category:'stay',name:'潮州韩庭别院度假酒店',rating:4.5,reason:'靠近广济桥与古城东侧，适合把韩江清晨、城墙和夜间步行纳入住宿体验。',region:'湘桥',budget:'¥¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'位置优先型选择，节假日价格波动可能较大。',booking:'确认是否含早餐、停车与景区交通限制。',sources:[platform('房型、位置与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/28763242.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});
addCurated({id:'cz-stay-youxiong',city:'chaozhou',category:'stay',name:'潮州古城有熊酒店',rating:4.6,reason:'将传统空间语汇与当代设计结合，适合愿意为建筑和安静院落付费的文化旅行者。',region:'湘桥',budget:'¥¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'更偏体验型住宿，先确认自己是否重视空间胜过配套。',booking:'确认房型、无障碍条件、接送与取消条款。',sources:[platform('房型、位置与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/108846358.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});

addCurated({id:'st-chaoshan-center',city:'shantou',category:'experience',name:'潮汕历史文化博览中心',rating:4.7,reason:'用大型公共文化综合体一次建立潮汕历史、华侨、非遗与城市发展的整体框架。',region:'濠江',budget:'免费',time:'白天',signature:'体量较大，先选两至三个馆，不追求全部看完。',booking:'不同馆开放日可能不同。',sources:[gov('中心内公共文化场馆构成与开放信息','汕头华侨试验区',official.stHall)]});
addCurated({id:'st-ih-hall',city:'shantou',category:'experience',name:'汕头市非物质文化遗产展示馆',rating:4.6,reason:'集中了解潮剧、潮州音乐、工夫茶与传统工艺，适合作为饮食和老城体验的知识底座。',region:'濠江',budget:'免费',time:'白天',signature:'可与潮汕历史文化博览中心同日安排。',sources:[gov('场馆展陈与公共文化活动信息','汕头市人大常委会',official.stIh),gov('场馆设置与展陈内容','汕头华侨试验区',official.stHall)]});
addCurated({id:'st-hat-factory',city:'shantou',category:'experience',name:'制帽厂美食文旅综合体',rating:4.3,reason:'工业遗存更新、潮汕饮食与当代城市消费叠加，可观察老建筑如何进入新的公共生活。',region:'金平',budget:'¥¥',time:'傍晚',signature:'新项目仍在形成口碑，适合作为小公园附近的弹性段。',risk:'medium',sources:[gov('2026年正式开业及项目定位','汕头市工商联',official.stHat)]});
addCurated({id:'st-overseas-museum',city:'shantou',category:'museum',name:'潮汕华侨博物馆',rating:4.6,reason:'把侨批之外的移民、社团、商业与家乡联系放进更完整的华侨史脉络。',region:'濠江',budget:'免费',time:'白天',signature:'适合与小公园侨批文物馆形成由微观书信到宏观侨史的对照。',sources:[gov('博览中心内华侨博物馆设置','汕头华侨试验区',official.stHall)]});
addCurated({id:'st-zhenbang',city:'shantou',category:'market',name:'镇邦美食街区',rating:4.4,reason:'由老城街巷与一批有名有姓的潮汕小吃构成，适合小份分食而非只排一家热门店。',region:'金平',budget:'¥',time:'傍晚',signature:'把它当作选店范围，不把整条街默认评为同一质量。',sources:[gov('美食街区建设及代表商户信息','汕头市人民政府',official.stFood)]});
addCurated({id:'st-stay-suding',city:'shantou',category:'stay',name:'汕头小公园宿町酒店',rating:4.5,reason:'步行进入小公园开埠区非常方便，适合把老城清晨和夜景留给住宿时段。',region:'金平',budget:'¥¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'新开业酒店，近期反馈有参考价值，但长期稳定性仍需观察。',booking:'核对停车、临街噪声与取消政策。',sources:[platform('房型、位置与近期住客反馈','携程酒店','https://3g.ctrip.com/html5/hotel/hoteldetail/125330822.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});
addCurated({id:'st-stay-xinhua',city:'shantou',category:'stay',name:'汕头新华酒店（小公园店）',rating:4.3,reason:'更偏实用型的老城落脚点，适合把预算留给饮食与文化体验。',region:'金平',budget:'¥¥',time:'入住',duration:'住宿',risk:'medium',signature:'选择重点是位置与性价比，不以设计度取胜。',booking:'确认翻新房型、隔音、停车与早餐。',sources:[platform('房型、位置与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/2230550.html'),platform('位置与导航复核入口','高德地图','https://www.amap.com/') ]});

// Routes are useful itinerary products, but they are not venues and should never
// compete with museums, shops or hotels in the same star ranking.
const routeMeta={
  'fz-walk':['上下杭','苍霞','闽江北岸'],
  'fz-westlake':['西湖公园','福建博物院'],
  'qz-wh':['开元寺','西街','钟楼','中山路','府文庙'],
  'qz-xijie':['西街','钟楼','中山路'],
  'cz-walk':['广济桥','广济门','牌坊街','开元寺'],
  'cz-han':['韩文公祠','韩江东岸','广济桥'],
  'st-park':['小公园','开埠文化陈列馆','侨批文物馆']
};
places.forEach(x=>{if(routeMeta[x.id]){x.recordType='route';x.category='route';x.routeStops=routeMeta[x.id];x.ratingEligible=false}else{x.recordType=x.recordType||'place';x.ratingEligible=true}});
places.filter(x=>['qz-nanyin','st-market'].includes(x.id)).forEach(x=>x.recommendationStatus='candidate_only');
const mustPlayByCity={
  fuzhou:['fz-sfqx','fz-ship','fz-museum','fz-yantai','fz-gushan'],
  quanzhou:['qz-kaiyuan','qz-qingjing','qz-tianhou','qz-sea','qz-puppet'],
  chaozhou:['cz-gj','cz-kaiyuan','cz-xufu','cz-jilue','cz-zaoyang'],
  shantou:['st-park','st-kaibu','st-qiaopi','st-xidi','st-chaoshan-center']
};
const extraPickByCity={fuzhou:'fz-jasmine-hall',quanzhou:'qz-luoyang',chaozhou:'cz-tea-museum',shantou:'st-zhenbang'};
Object.entries(mustPlayByCity).forEach(([city,ids])=>ids.forEach((id,index)=>{const x=places.find(y=>y.id===id);if(x){x.mustPlay=true;x.mustRank=index+1}}));
Object.entries(extraPickByCity).forEach(([city,id])=>{const x=places.find(y=>y.id===id);if(x)x.extraPick=true});

// v11: replace the earlier boutique-hotel shortlist with two H Rewards options
// per city. Price is expressed as a relative tier because dates are not fixed.
const huazhuCity={fuzhou:'https://m.huazhu.com/huazhu-FUZHOU',quanzhou:'https://m.huazhu.com/huazhu-QUANZHOU',chaozhou:'https://m.huazhu.com/huazhu-CHAOZHOU',shantou:'https://m.huazhu.com/huazhu-SHANTOU'};
const stayProfiles={
  'fz-stay-shuxiang':{name:'福州上下杭桔子水晶酒店',brand:'桔子水晶',rating:4.8,region:'台江',budget:'¥¥¥',priceTier:'桔子水晶档',reason:'五一南路靠近上下杭和达道地铁站，更适合把台江、上下杭和烟台山放在同一段行程。',locationFit:'台江区五一南路189号；达道地铁站约750米。相比住三坊七巷，这里更方便衔接上下杭、烟台山和闽江南北两岸。',roomAdvice:'两人携带大件行李，优先豪华大床／双床；需要办公与更宽洗漱空间再考虑套房。订房页未统一展示全部面积，付款前核对具体房型面积与窗户。',decorStyle:'桔子水晶2.5产品，以六边形、水晶反射、深色材质和暖光营造偏都市的精致感，不是传统福州古厝风。',stayExperience:'2026年新店，硬件、卫生和服务反馈较好，带健身房、洗衣房和停车；新店长期稳定性仍需继续观察。',signature:'首选台江文化线路的住宿；希望住得新、空间感好，比“住进古城”更重要时选它。',booking:'确认房型面积、是否临街、停车规则及华住会员价。',sources:[C('华住会门店与品牌复核','华住会',huazhuCity.fuzhou),D('地址、设施、房型线索与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/133458601.html')]},
  'fz-stay-manxin':{name:'福州三坊七巷漫心酒店',brand:'漫心',rating:4.7,region:'鼓楼',budget:'¥¥¥',priceTier:'漫心档',reason:'八一七北路靠近南门兜和三坊七巷，适合第一次到福州、主要依靠步行与地铁的人。',locationFit:'鼓楼区八一七北路211号；靠近南门兜地铁站，三坊七巷、乌山和五一广场步行衔接方便。',roomAdvice:'核心城区门店更应重视朝向而非最低价：优先高楼层、非临街房；想要浴缸必须在房型说明中明确确认，不要默认所有房间都有。',decorStyle:'漫心的多彩现代设计中加入属地元素，公共空间偏活泼，文化感来自位置和局部细节，不是古宅式住宿。',stayExperience:'优势是位置、服务和含福州小吃的早餐；代价是核心城区公共空间和部分基础房型可能不如新建桔子水晶宽松。',signature:'首选古城步行便利；不想每天打车、希望晚上继续逛坊巷时选它。',booking:'确认安静朝向、房型面积、浴缸配置与停车条件。',sources:[C('华住会门店与品牌复核','华住会',huazhuCity.fuzhou),D('地址、交通、设施与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/55235698.html')]},
  'qz-stay-qixu':{name:'桔子酒店（泉州西街九一街店）',brand:'桔子',rating:4.8,region:'鲤城',budget:'¥¥',priceTier:'低于桔子水晶档',reason:'九一街位于古城核心，步行串联府文庙、关岳庙、清净寺、开元寺的效率在华住门店中最突出。',locationFit:'鲤城区九一街39号；至府文庙约390米、关岳庙约470米、清净寺约680米、开元寺约810米。',roomAdvice:'基础大床约20㎡，高档房约23–27㎡；两人带行李建议豪华大床／双床，亲子房约34㎡。不要仅因“都在古城”选择最小基础房。',decorStyle:'桔子品牌的明快橙色、简约现代和智能化路线，视觉活泼，但不会刻意仿古。',stayExperience:'最大优势是几乎可以步行完成泉州古城主线；代价是核心城区可能有人流和街道噪声，建议要求高楼层或安静朝向。',signature:'泉州文化行程的首选华住门店；把省下的交通时间留给古城和夜间散步。',booking:'优先25㎡以上房型，并确认安静朝向、停车和儿童证件要求。',sources:[C('华住会泉州门店名录','华住会',huazhuCity.quanzhou),D('地址、设施与订房政策','携程酒店','https://hotels.ctrip.com/hotels/131638367.html'),D('房型面积与古城距离','永安旅游','https://www.wingontravel.com/hotel/detail-quanzhou-131638367/orange-hotel-ninetyonest-street-quanzhou-ancient-city/')]},
  'qz-stay-yuanshi':{name:'桔子酒店（泉州丰泽广场田安北路店）',brand:'桔子',rating:4.7,region:'丰泽',budget:'¥¥',priceTier:'低于桔子水晶档',reason:'步行可达海外交通史博物馆和东湖公园，住宿环境比西街核心区安静，适合博物馆优先的行程。',locationFit:'丰泽区田安北路305号；海交馆步行约3分钟、东湖公园约2分钟，打车到西街／开元寺通常约10分钟。',roomAdvice:'优先非临街、非角落且面积较大的房型；两人带行李建议高档或豪华房。若前台提出“加价升级”，先确认是否实际包含会员购买。',decorStyle:'简约暖橙、智能客控和清新香氛，风格统一、明亮，属于稳定的现代连锁体验。',stayExperience:'新店、洗烘和停车便利，周边更安静；代价是古城夜游需要打车或公交，不适合追求开门即西街的人。',signature:'海交馆与安静睡眠优先；适合自驾或不介意每天短程打车。',booking:'确认非临街朝向、具体面积、早餐和会员升级条款。',sources:[C('华住会泉州门店名录','华住会',huazhuCity.quanzhou),D('地址、周边距离与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/125236217.html')]},
  'cz-stay-hanting':{name:'潮州古城牌坊街桔子水晶酒店',brand:'桔子水晶',rating:4.7,region:'湘桥',budget:'¥¥¥',priceTier:'桔子水晶档',reason:'城新路距古城核心约1公里，兼顾步行可达、较大客房、泳池与停车，综合硬件是潮州两家华住候选中更强的一家。',locationFit:'湘桥区城新路35-2号；西马路约1.1公里，适合步行或短程骑行进入古城，又避开牌坊街最拥挤的一段。',roomAdvice:'酒店94间客房、平均约35㎡，基础房已相对宽松；临街房的隔音反馈尚可，敏感人群仍建议注明安静朝向。亲子出行先确认儿童设施所在房型。',decorStyle:'桔子水晶的深色质感、暖光和智能设备，偏精致都市风，与潮州传统建筑形成对照。',stayExperience:'2025年开业，配泳池、健身、洗烘、停车和较大的早餐空间，适合连续住两晚；大型配套也意味着它更像完整酒店，而非古城小院。',signature:'房间面积和完整设施优先；带行李、自驾或亲子旅行首选。',booking:'确认安静朝向、泳池开放、停车、早餐和不可加床政策。',sources:[C('华住会潮州门店与品牌复核','华住会',huazhuCity.chaozhou),D('地址、客房规模、设施与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/131799075.html')]},
  'cz-stay-youxiong':{name:'潮州古城牌坊街漫心酒店',brand:'漫心',rating:4.7,region:'湘桥',budget:'¥¥¥',priceTier:'漫心档',reason:'南较路距离牌坊街、广济桥和开元寺约一段轻松步行，位置比直接住牌坊街主轴更安静。',locationFit:'湘桥区南较路45号；酒店资料称步行约10分钟可达古城主要景点，青龙古庙约452米、甲第巷约857米。',roomAdvice:'优先非临街、高楼层房；家庭出行可选明确标注儿童设施的亲子房。智能客控和双层隔音玻璃是优势，但仍应在订单备注安静需求。',decorStyle:'以多彩现代漫心风格融合潮汕纹样和属地元素，比桔子水晶更活泼、更强调“城市个性”。',stayExperience:'步行效率、免费停车和本地早餐兼顾，适合第一次来潮州；公共空间强调氛围感，不等同于传统院落酒店。',signature:'古城步行和闹中取静优先；想少打车、晚上继续逛古城时选它。',booking:'确认安静朝向、亲子设施对应房型、停车与充电位。',sources:[C('华住会潮州门店与品牌复核','华住会',huazhuCity.chaozhou),D('地址、设计、房型线索与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/126903373.html')]},
  'st-stay-suding':{name:'汕头新一城黄河路桔子水晶酒店',brand:'桔子水晶',rating:4.8,region:'龙湖',budget:'¥¥¥',priceTier:'桔子水晶档',reason:'处在新一城、黄河路和中心城区餐饮之间，前往龙眼南路、万象城与老城都较均衡，是汕头城市旅行更实用的华住选择。',locationFit:'龙湖区科技中路2号汇逸商务大厦；靠近新一城商圈，去龙眼南路美食区和万象城比东海岸店方便，去小公园仍需打车。',roomAdvice:'优先高楼层、远离高架或主路一侧；两人带行李选择面积更大的高档／豪华房。付款前向酒店确认具体房型朝向，不能只看“城景”。',decorStyle:'桔子水晶2.0，以深色材质、暖光、智能客控和“水晶”细节为主，氛围沉稳，适合重视睡眠与质感的人。',stayExperience:'2024年开业、94间房，健身和洗烘齐全，餐饮区位比东海岸更实用；城市道路交通和部分朝向噪声是主要取舍。',signature:'四处吃和跨片区移动的首选；文化行程、餐饮和睡眠之间最均衡。',booking:'明确备注远离高架／主路，确认房型面积、停车和华住会员早餐。',sources:[C('华住会汕头门店名录','华住会',huazhuCity.shantou),D('地址、开业时间与客房规模','携程酒店','https://hotels.ctrip.com/hotels/123679527.html'),D('商圈、设施与近期口碑概览','携程酒店','https://m.ctrip.com/webapp/hotel/shantou447/h1541')]},
  'st-stay-xinhua':{name:'汕头东海岸万象汇桔子水晶酒店',brand:'桔子水晶',rating:4.7,region:'龙湖',budget:'¥¥¥',priceTier:'桔子水晶档',reason:'高层海景与东海岸散步体验突出，适合把住宿本身当作休息和看海的一部分。',locationFit:'龙湖区泰星路9号；位于东海岸新城，步行约10分钟到东海岸观光大道，距汕头站约4.4公里。去龙眼南路和老城文化区需要打车。',roomAdvice:'这家店的价值主要在高层海景，优先明确标注海景的高楼层房；带孩子可看亲子主题房。若只订普通无景观房，性价比可能不如黄河路店。',decorStyle:'现代水晶风、65寸电视、智能客控、智能马桶、手冲咖啡和香氛，整体比传统商务酒店更有度假感。',stayExperience:'22–25层部分房型可看内海湾与日落，环境新、安静；周边本地餐饮密度不如中心城区，公开住客反馈提到热门美食街约7–8公里。',signature:'看海、日落和安静休息优先；自驾、亲子或愿意打车的人更合适。',booking:'必须确认是否为真正海景房、高楼层、早餐、停车及不可加床政策。',sources:[C('华住会汕头门店名录','华住会',huazhuCity.shantou),D('地址、楼层、设备与近期住客反馈','携程酒店','https://hotels.ctrip.com/hotels/124263928.html')]}
};
Object.entries(stayProfiles).forEach(([id,profile])=>{const x=places.find(y=>y.id===id);if(x){Object.assign(x,profile,{recommendationReason:profile.reason,editorialRating:profile.rating,heatScore:profile.rating,time:'入住',suggestedDuration:'住宿',dateSensitive:true,commercialRisk:'medium',signature:profile.signature,booking:profile.booking});x.sources=profile.sources}});

const regionRules={fuzhou:[['马尾船政','马尾'],['烟台山','仓山'],['上下杭','台江'],['PEARS','台江'],['鹿森','台江'],['鼓山','晋安']],quanzhou:[['洛阳桥','洛江'],['清源山','丰泽'],['印迹','丰泽']],chaozhou:[],shantou:[['南澳','南澳'],['妈屿','龙湖'],['陈慈黉','澄海'],['礐石','濠江'],['建业','龙湖'],['合胜','龙湖']]};
places.forEach(x=>{if(!x.region){x.region=x.city==='fuzhou'?'鼓楼':x.city==='quanzhou'?'鲤城':x.city==='chaozhou'?'湘桥':'金平';for(const [key,value] of regionRules[x.city]||[])if(x.name.includes(key))x.region=value}if(!x.budget)x.budget=['museum','park','walk','route','world_heritage','national_key_relic','attraction','neighborhood'].includes(x.category)?'免费':['food'].includes(x.category)?'¥':(['restaurant'].includes(x.category)?'¥¥':'¥¥');if(!x.time)x.time=x.bestTime.includes('早餐')?'早餐':x.bestTime.includes('傍晚')||x.bestTime.includes('日落')?'傍晚':x.bestTime.includes('晚')||x.bestTime.includes('夜')?'夜晚':x.bestTime.includes('上午')||x.bestTime.includes('清晨')||x.bestTime.includes('雨天')?'上午':'白天';x.heatScore=x.heatScore||Math.min(5,x.editorialRating+(x.sources.some(s=>/Tripadvisor|马蜂窝|本地宝|高德|平台/.test(s.sourceName+s.claim))?.1:0));x.foreignScore=x.sources.some(s=>/Tripadvisor/.test(s.sourceName+s.claim))?x.editorialRating:Math.max(2.5,x.editorialRating-.7);const levels=x.sources.map(s=>s.sourceLevel),hasAuthority=levels.some(l=>l==='A'||l==='B'),independentPublishers=new Set(x.sources.map(s=>s.publisher)).size;x.confidence=hasAuthority&&independentPublishers>1?'high':hasAuthority||independentPublishers>1?'medium':'low';x.mapUrl=`https://uri.amap.com/search?keyword=${encodeURIComponent(x.name)}&city=${encodeURIComponent(cityGuides[x.city].name)}&src=minchao-guide&callnative=0`});
places.forEach(x=>{if(x.recordType==='route')return;const nearby=places.filter(y=>y.id!==x.id&&y.city===x.city&&y.region===x.region&&y.recordType!=='route'&&y.recommendationStatus!=='candidate_only').sort((a,b)=>b.editorialRating-a.editorialRating).slice(0,3);x.nearby=nearby.map(y=>y.name)});
