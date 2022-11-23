const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
	.setName("챔피언")
	.setDescription("마법의 문철사마 챔프을 정해주세요")
	.addStringOption(option =>
		option.setName('라인')
			.setDescription("선택된 라인의 챔프가 선택됩니다")
			.setRequired(false)
			.addChoices(
				{ name: '탑',   value: "line_top" },
				{ name: '미드', value: "line_mid" },
				{ name: '정글', value: "line_jug" },
				{ name: '원딜', value: "line_ad"  },
				{ name: '서폿', value: "line_sup" })),
				async execute(interaction){
					const stroption =interaction.options.getString('라인')
					if (stroption == "line_top"){
						const Champ = ["가렌","갱플랭크","그라가스","그웬","나르","나서스","다리우스","라이즈","람머스","럼블","레넥톤","렐","렝가","루시안","리븐","릴리아","마스터 이","마오카이","말파이트","모데카이저","문도","베인","볼리베어","블라디미르","빅토르","뽀삐","사이온","세주아니","신지드","아칼리","아트록스","야스오","오공","오른","올라프","요네","요릭","우디르","우르곳","워윅","이렐리아","일라오이","자크","잭스","제이스","초가스","카밀","카시오페아","칼리스타","케넨","케일","퀸","클레드","탐켄치","트런들","트린다미어","티모","피오라","하이머딩거"]      
						const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
					} else if (stroption == "line_mid"){
					    const Champ = ["갈리오","그라가스","니코","다이에나","라이즈","럭스","럼블","레넥톤","루시안","르블랑","리산드라","말자하","말파이트","모데카이저","베이가","벡스","벨코즈","브렌드","블라디미르","빅토르","사일러스","세트","스웨인","신드라","아리","아우솔","아지르","아칼리","아크샨","아트록스","애니","애니비아","야스오","에코","오리아나","요네","이렐리아","제드","제라스","제이스","조이","직스","카사딘","카시오페아","카타리나","코르키","키아나","탈론","탈리야","트린다미어","트페","판테온","피즈","하이머딩거"]      
						const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
				    } else if (stroption == "line_jug"){
						const Champ = ["그라가스","그레이브즈","그웬","나서스","녹턴","누누와 윌럼프","니달리","다이에나","람머스","렉사이","렝가","리신","릴리아","마스터 이","마오카이","모데카이저","바이","벨베스","볼리베어","블리츠크랭크","비에고","뽀삐","샤코","세주아니","쉬바나","신짜오","아무무","아이번","에코","앨리스","오공","올라프","우디르","워윅","이블린","자르반4세","자크","잭스","제드","카서스","카직스","케인","킨드레드","탈론","탈리야","트런들","트린다미어","트위치","판테온","피들스틱","헤카림"]
						const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
					} else if (stroption == "line_ad"){
						const Champ = ["닐라","드레이븐","루시안","미스포츈","베인","바루스","사미라","세나","시비르","아펠리오스","애쉬","이즈리얼","자야","제리","진","직스","징크스","카이사","칼리스타","케이틀린","코그모","트리스타나","트위치"]
						const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
					} else if (stroption == "line_sup"){
                        const Champ = ["갈리오","그라가스","나미","노틸러스","니코","라칸","록스","레나타글라스크","레오나","렐","룰루","마오카이","말파이트","모르가나","미스포츈","바드","베이가","벡스","벨코즈","브라움","브랜드","블리츠크랭크","샤코","세나","세라핀","세트","소나","소라카","쉔","스웨인","쓰레쉬","아무무","아이번","알리스타","애니","애니비아","애쉬","오른","유미","자이라","자크","잔나","제라스","질리언","카르마","타릭","탐켄치","파이크","판테온","피들스틱","하이머딩거"]
						const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
					} else if (stroption == undefined){
						const Champ  = ["가렌","갈리오","갱플랭크","그라가스","그레이브즈","그웬","나르","나미","나서스","노틸러스","녹턴","누누와윌럼프","니달리","니코","닐라","다리우스","다이애나","드레이븐","라이즈","라칸","람머스","럭스","럼블","레나타글라스크","레넥톤","레오나","렉사이","렐","렝가","루시안","룰루","르블랑","리신","리븐","리산드라","릴리아","마스터이","마오카이","말자하","말파이트","모데카이저","모르가나","문도박사","미스포츈","바드","바루스","바이","베이가","베인","벡스","벨코즈","벨베스","볼리베어","브라움","브랜드","블라디미르","블리츠크랭크","비에고","빅토르","뽀삐","사미라","사이온","사일러스","샤코","세나","세라핀","세주아니","세트","소나","소라카","쉔","쉬바나","스웨인","스카너","시비르","신짜오","신드라","신지드","쓰레쉬","아리","아무무","아우렐리온솔","아이번","아지르","아칼리","아크샨","아트록스","아펠리오스","알리스타","애니","애니비아","애쉬","야스오","에코","엘리스","오공","오른","오리아나","올라프","요네","요릭","우디르","우르곳","워윅","유미","이렐리아","이블린","이즈리얼","일라오이","자르반4세","자야","자이라","자크","잔나","잭스","제드","제라스","제리","제이스","조이","직스","진","질리언","징크스","초가스","카르마","카밀","카사딘","카서스","카시오페아","카이사","카직스","카타리나","칼리스타","케넨","케이틀린","케인","케일","코그모","코르키","퀸","클레드","키아나","킨드레드","타릭","탈론","탈리야","탐켄치","트런들","트리스타나","트린다미어","트위스티드페이트","트위치","티모","파이크","판테온","피들스틱","피오라","피즈","하이머딩거","헤카림"] //괄호안에 메세지 더 추가하시거나 수정하시면됩니다
                        const randomChamp = Math.floor(Math.random() * Champ.length)
						await interaction.reply({ content: `당신의 챔프는 ${Champ[randomChamp]}` })
					}
					

				}
			}
