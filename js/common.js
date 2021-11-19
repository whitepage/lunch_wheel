(function ($){
	function shuffle(array) { array.sort(() => Math.random() - 0.5); }
    var venues =  [
		{
		"name": "등촌샤브칼국수",
		"type": "칼국수, 만두",
		"desc": "고기추가 안하면 서운함",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134630.70757525,4516548.906717762,%EB%93%B1%EC%B4%8C%EC%83%A4%EB%B8%8C%EC%B9%BC%EA%B5%AD%EC%88%98%20%EC%84%9C%EC%9A%B8%EC%97%AD%EC%A0%90,1095511713,PLACE_POI/-/walk?c=14134331.4362562,4516358.8835756,16,0,0,0,dh"
		},
		{
		"name": "후암편백",
		"type": "일식당",
		"desc": "편백찜도 있지만 샤브샤브가 더 맛있음",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135003.883904237,4516195.120740607,%ED%9B%84%EC%95%94%ED%8E%B8%EB%B0%B1,1166904528,PLACE_POI/-/walk?c=14134673.2427527,4516146.9738594,17,0,0,0,dh"
		},
		{
		"name": "유키사키",
		"type": "일식당",
		"desc": "가츠동, 스테이키동 빼고는 맛이없음",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135003.883904237,4516195.120740607,%ED%9B%84%EC%95%94%ED%8E%B8%EB%B0%B1,1166904528,PLACE_POI/-/walk?c=14133768.4601954,4516223.8208242,14,0,0,0,dh"
		},
		{
		"name": "오제제",
		"type": "돈가스",
		"desc": "돈까스 맛집. But 10시에 대기 걸어야함",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134438.892960664,4516184.0703869555,%EC%98%A4%EC%A0%9C%EC%A0%9C,1327043034,PLACE_POI/-/walk?c=14134532.6907636,4516149.8663167,19,0,0,0,dh"
		},
		{
		"name": "바스버거",
		"type": "햄버거",
		"desc": "맛있는 수제버거. 토핑이 풍부함",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134688.304279786,4516083.255755212,%EB%B0%94%EC%8A%A4%EB%B2%84%EA%B1%B0%20%ED%9B%84%EC%95%94%EC%A0%90,1411095343,PLACE_POI/-/walk?c=14134557.8489685,4516118.9058322,18,0,0,0,dh"
		},
		{
		"name": "죠우",
		"type": "일식당",
		"desc": "깔끔한 일본 가정식",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134754.060702998,4516529.094049895,%EC%A3%A0%EC%9A%B0,255740392,PLACE_POI/-/walk?c=14134413.9685267,4516310.5534044,16,0,0,0,dh"
		},
		{
		"name": "가마솥족발순대국",
		"type": "한식",
		"desc": "국물이 아주 맑은 순대국집! 맛집이라 웨이팅이 있을지도 몰라요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135031.546797697,4516254.41654788,%EA%B0%80%EB%A7%88%EC%86%A5%EC%A1%B1%EB%B0%9C%EC%88%9C%EB%8C%80%EA%B5%AD,18124922,PLACE_POI/-/walk?c=14134680.7011586,4516164.7638886,17,0,0,0,dh"
		},
		{
		"name": "후암연어식당",
		"type": "퓨전음식",
		"desc": "연어삼합이 베스트이지만 점심땐 초밥이랑 파스타도 있어요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135020.158813793,4516313.0948749725,%ED%9B%84%EC%95%94%EC%97%B0%EC%96%B4%EC%8B%9D%EB%8B%B9,37384008,PLACE_POI/-/walk?c=14134665.9290621,4516194.0957391,17,0,0,0,dh"
		},
		{
		"name": "오지차돌박이",
		"type": "육류,고기요리",
		"desc": "차돌박이 정식 굿굿. 점심에도 고기를 구워먹을 수 있어요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134691.710656207,4516198.8978019,%EC%98%A4%EC%A7%80%EC%B0%A8%EB%8F%8C%EB%B0%95%EC%9D%B4,1537132449,PLACE_POI/-/walk?c=14134730.6279502,4516184.9970998,18,0,0,0,dh"
		},
		{
		"name": "도동집",
		"type": "한식",
		"desc": "일명 이영자 맛집. 일찍가야 먹을 수 있는 곳!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134982.08754794,4516470.990212614,%EB%8F%84%EB%8F%99%EC%A7%91,37641712,PLACE_POI/-/walk?c=14134559.5744206,4516334.1989338,16,0,0,0,dh"
		},
		{
		"name": "교동짬뽕",
		"type": "중식당",
		"desc": "해장이 필요할 때!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134632.74472193,4516537.659408439,%EA%B5%90%EB%8F%99%EC%A7%AC%EB%BD%95,1774264423,PLACE_POI/-/walk?c=14134332.4492636,4516358.8835756,16,0,0,0,dh"
		},
		{
		"name": "대독장",
		"type": "찌개, 전골",
		"desc": "맛있는 김치찌개집! 세트메뉴가 좋아요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134632.74472193,4516537.659408439,%EA%B5%90%EB%8F%99%EC%A7%AC%EB%BD%95,1774264423,PLACE_POI/-/walk?c=14134332.4492636,4516358.8835756,16,0,0,0,dh"
		},
		{
		"name": "서브웨이",
		"type": "샌드위치",
		"desc": "다이어트 결심이 드는 날?",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134623.805766825,4516530.680746933,%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4%20%EC%84%9C%EC%9A%B8%EC%97%AD%EB%8F%99%EC%9E%90%EC%A0%90,31139486,PLACE_POI/-/walk?c=14134327.9853520,4516358.8835756,16,0,0,0,dh"
		},
		{
		"name": "홍콩중국요리",
		"type": "중식당",
		"desc": "짜장면이 맛있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134454.689196412,4516239.378436614,%ED%99%8D%EC%BD%A9%EC%A4%91%EA%B5%AD%EC%9A%94%EB%A6%AC,1398794378,PLACE_POI/-/walk?c=14134438.9486204,4516197.2409496,18,0,0,0,dh"
		},
		{
		"name": "메시야",
		"type": "돈가스",
		"desc": "다양한 돈까스를 만날 수 이는 곳. 대표메뉴는 김치돈까스!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134484.71206307,4516062.755962841,%EB%A9%94%EC%8B%9C%EC%95%BC,37001327,PLACE_POI/-/walk?c=14134440.7853920,4516157.6731472,18,0,0,0,dh"
		},
		{
		"name": "양귀비짬뽕",
		"type": "중식당",
		"desc": "짬뽕과 마늘탕수육이 맛있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135101.889583927,4515941.442944996,%EC%96%91%EA%B7%80%EB%B9%84%EC%A7%AC%EB%BD%95,1231153639,PLACE_POI/-/walk?c=14134587.8829671,4516045.9349303,16,0,0,0,dh"
		},
		{
		"name": "동해오징어보쌈",
		"type": "오징어요리",
		"desc": "매콤한게 땡기는날! 오징어보쌈과 오징어불고기가 맛있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134929.199657861,4515970.366985932,%EB%8F%99%ED%95%B4%20%EC%98%A4%EC%A7%95%EC%96%B4%20%EB%B3%B4%EC%8C%88,38712484,PLACE_POI/-/walk?c=14134679.6881512,4516058.5296408,17,0,0,0,dh"
		},
		{
		"name": "스시Zip",
		"type": "초밥,롤",
		"desc": "다양한 스시를 맛볼 수 있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14135104.416536372,4516061.604605831,%EC%8A%A4%EC%8B%9C%EC%A7%91,1998287373,PLACE_POI/-/walk?c=14134589.1408774,4516104.3453095,16,0,0,0,dh"
		},
		{
		"name": "은하수닭갈비",
		"type": "닭갈비",
		"desc": "맛있는 철판닭갈비! 볶음밥 필수",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134985.382604871,4516094.123469647,%EC%9D%80%ED%95%98%EC%88%98%EB%8B%AD%EA%B0%88%EB%B9%84,1245225469,PLACE_POI/-/walk?c=14134672.2965370,4516106.0442702,17,0,0,0,dh"
		},
		{
		"name": "모모키친",
		"type": "돈가스",
		"desc": "깔끔한 돈까스 맛집",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134784.328472544,4516093.379297627,%EB%AA%A8%EB%AA%A8%ED%82%A4%EC%B9%9C%20%EC%97%94%EB%B9%84,20858927,PLACE_POI/-/walk?c=14134623.8168988,4516109.2034952,18,0,0,0,dh"
		},
		{
		"name": "미니네칼국수",
		"type": "칼국수, 만두",
		"desc": "칼제비와 들깨칼국수가 인기!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134910.420059767,4515931.488038719,%EB%AF%B8%EB%8B%88%EB%84%A4%EC%B9%BC%EA%B5%AD%EC%88%98,38243608,PLACE_POI/-/walk?c=14134608.5883924,4516036.4432745,17,0,0,0,dh"
		},
		{
		"name": "충무칼국수",
		"type": "칼국수, 만두",
		"desc": "칼국수집인데 보쌈이 맛있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134718.115639422,4516082.750280397,%EC%B6%A9%EB%AC%B4%EC%B9%BC%EA%B5%AD%EC%88%98,13160676,PLACE_POI/-/walk?c=14134658.7155591,4516033.1296215,18,0,0,0,dh"
		},
		{
		"name": "약초마을",
		"type": "백숙,삼계탕",
		"desc": "괜히 몸보신 하고싶은 날, 삼계탕 한그릇",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134687.981453259,4516125.56127559,%EC%95%BD%EC%B4%88%EB%A7%88%EC%9D%84%20%EC%A4%91%EC%95%99%EC%A0%90,13156064,PLACE_POI/-/walk?c=14134570.1831681,4516123.2866299,18,0,0,0,dh"
		},
		{
		"name": "마부마라탕",
		"type": "중식당",
		"desc": "마라탕과 마라샹궈가 맛있는 곳! 공기밥 무료 제공이 짱이쥬",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134844.240622487,4516070.618892154,%EA%B8%88%EC%82%B0%20%EB%A7%88%EB%9D%BC%ED%83%95,1340447535,PLACE_POI/-/walk?c=14134622.1137106,4516093.2248468,18,0,0,0,dha"
		},
		{
		"name": "후암김밥",
		"type": "분식",
		"desc": "분식이 생각날 때! 김밥과 라면, 김치볶음밥이 아주 맛있어요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134855.43936326,4516092.42451096,%ED%9B%84%EC%95%94%EA%B9%80%EB%B0%A5,1290532551,PLACE_POI/-/walk?c=14134615.7128398,4516102.4076523,17,0,0,0,dh"
		},
		{
		"name": "우미우가",
		"type": "한식",
		"desc": "메뉴가 많지는 않지만 깔끔한 바싹 소불고기를 먹을 수 있는 곳",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134775.2002743,4516092.775535461,%EC%9A%B0%EB%AF%B8%EC%9A%B0%EA%B0%80,38522602,PLACE_POI/-/walk?c=14134602.8220428,4516123.2866299,18,0,0,0,dh"
		},
		{
		"name": "모이정",
		"type": "한식",
		"desc": "로제돈까스가 있는 곳! 비빔국수와 국수도 있어요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134842.904788602,4516096.103248298,%EB%AA%A8%EC%9D%B4%EC%A0%95,1797231611,PLACE_POI/-/walk?c=14134590.4878432,4516116.1959166,17,0,0,0,dh"
		},
		{
		"name": "산소",
		"type": "한식",
		"desc": "수제비와 김치수제비, 제육덮밥 등이 인기인 곳! 가성비 굿굿",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134740.635572407,4516099.487126151,%EC%82%B0%EC%86%8C,1273425972,PLACE_POI/-/walk?c=14134646.3034359,4516117.3894027,18,0,0,0,dh"
		},
		{
		"name": "카니발피자",
		"type": "피자",
		"desc": "바삭한 감자튀김과 치즈폭탄 피자가 훌륭한 곳! 파스타 메뉴도 많아서 여러명이 방문하기 좋아요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134634.648285221,4516825.361237124,%EC%B9%B4%EB%8B%88%EB%B0%9C%ED%94%BC%EC%9E%90%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,36208670,PLACE_POI/-/walk?c=14134386.2277096,4516489.9602796,16,0,0,0,dh"
		},
		{
		"name": "제일제면소",
		"type": "국수",
		"desc": "임직원할인으로 애사심이 조금 생겨날 수 있는 곳. 면과 밥 종류가 많아요!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134679.53230391,4516818.705348693,%EC%A0%9C%EC%9D%BC%EC%A0%9C%EB%A9%B4%EC%86%8C%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,1836466504,PLACE_POI/-/walk?c=14134386.2277096,4516486.7728567,16,0,0,0,dh"
		},
		{
		"name": "더플레이스",
		"type": "이탈리아음식",
		"desc": "임직원할인으로 애사심이 조금 생겨날 수 있는 곳. 파스타, 피자, 스테이크 등 이탈리안이 생각날때!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134665.595103662,4516824.9961460885,%EB%8D%94%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,37935355,PLACE_POI/-/walk?c=14134386.2277096,4516489.7777400,16,0,0,0,dh"
		},
		{
		"name": "돈수백",
		"type": "국밥",
		"desc": "부산 돼지국밥이 생각날 때! 수육도 있어요~~",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134665.595103662,4516824.9961460885,%EB%8D%94%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,37935355,PLACE_POI/-/walk?c=14134157.1099336,4516530.8211626,15,0,0,0,dh"
		},
		{
		"name": "신당동즉석떡볶이",
		"type": "떡볶이",
		"desc": "후암동에 몇 안되는 즉석떡볶이 집! 가게가 좁아서 소규모로 일찍 가야해요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134755.307481293,4516510.7838643305,%EC%8B%A0%EB%8B%B9%EB%8F%99%EC%A6%89%EC%84%9D%EB%96%A1%EB%B3%B6%EC%9D%B4,1720454110,PLACE_POI/-/walk?c=14134393.7306432,4516360.6106602,16,0,0,0,dh"
		},
		{
		"name": "봉추찜닭",
		"type": "찜닭",
		"desc": "믿고먹는 봉추찜닭! 서울스퀘어에 있어요",
		"map": "https://map.naver.com/v5/directions/14134539.65963728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134640.51482239,4516834.6429789085,%EB%B4%89%EC%B6%94%EC%B0%9C%EB%8B%AD%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,38305507,PLACE_POI/-/walk?c=14134153.3362029,4516494.5939800,15,0,0,0,dh"
		},
		{
		"name": "사위식당",
		"type": "곱창,막창,양",
		"desc": "낙곱새 맛집 사위식당! 서울스퀘어에 있어요",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134655.175599325,4516822.580928782,%EC%82%AC%EC%9C%84%EC%8B%9D%EB%8B%B9%20%EC%84%9C%EC%9A%B8%EC%8A%A4%ED%80%98%EC%96%B4%EC%A0%90,1620650456,PLACE_POI/-/walk?c=14134386.2277096,4516488.5701699,16,0,0,0,dh"
		},
		{
		"name": "토끼정",
		"type": "일식당",
		"desc": "서울역사에 있어서 시간 여유가 있는날이 좋겠어요!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134312.066664804,4516686.599476952,%ED%86%A0%EB%81%BC%EC%A0%95%20KTX%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC,38274444,PLACE_POI/-/walk?c=14134192.9659416,4516420.5813933,17,0,0,0,dh"
		},
		{
		"name": "빌라 드 스파이시",
		"type": "떡볶이",
		"desc": "즉석떡볶이로 Flex 하고싶은 날!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134811.657407533,4516971.047619367,%EB%B9%8C%EB%9D%BC%20%EB%93%9C%20%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8B%9C%20%EC%84%9C%EC%9A%B8%EB%A1%9C%ED%85%8C%EB%9D%BC%EC%8A%A4,521431611,PLACE_POI/-/walk?c=14134189.0140997,4516576.1755254,15,0,0,0,dh"
		},
		{
		"name": "산들바다",
		"type": "비빔밥",
		"desc": "다양한 종류의 돌솥 비빔밥이 있는 곳!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134695.37306745,4516436.897536088,%EC%82%B0%EB%93%A4%EB%B0%94%EB%8B%A4%20%EC%84%9C%EC%9A%B8%EC%97%AD%EC%A0%90,59626099,PLACE_POI/-/walk?c=14134496.1223109,4516680.6317234,17,0,0,0,dh"
		},
		{
		"name": "윤가네의정부부대찌개",
		"type": "찌개, 전골",
		"desc": "후암동 부대찌개 맛집!?",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134728.15665749,4516331.334508143,%EC%9C%A4%EA%B0%80%EB%84%A4%EC%9D%98%EC%A0%95%EB%B6%80%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C,1179888418,PLACE_POI/-/walk?c=14134517.4622573,4516241.5688604,17,0,0,0,dh"
		},
		{
		"name": "정가네황태해장국",
		"type": "한식",
		"desc": "황태가 들어간 다양한 음식이 있는 곳! 황태미역국, 황태떡국, 황태해장국!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134708.976309229,4516266.688561318,%EC%A0%95%EA%B0%80%EB%84%A4%ED%99%A9%ED%83%9C%ED%95%B4%EC%9E%A5%EA%B5%AD,37445415,PLACE_POI/-/walk?c=14134561.6672271,4516239.7013837,18,0,0,0,dh"
		},
		{
		"name": "만리장성",
		"type": "중식당",
		"desc": "중국음식이 땡길 때! 짜장면과 탕수육이 맛있는 곳!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134486.504306879,4516038.984678542,%EB%A7%8C%EB%A6%AC%EC%9E%A5%EC%84%B1,38238351,PLACE_POI/-/walk?c=14134547.4962559,4516164.3286152,18,0,0,0,dh"
		},
		{
		"name": "정선할매 곤드레밥",
		"type": "한식",
		"desc": "깔끔한 곤드레밥 정식!",
		"map": "https://map.naver.com/v5/directions/14134539.659363728,4516154.556030715,%ED%8A%B8%EC%9C%88%EC%8B%9C%ED%8B%B0%EB%82%A8%EC%82%B0,31104190,PLACE_POI/14134548.353415962,4516053.713601435,%EC%A0%95%EC%84%A0%ED%95%A0%EB%A7%A4%EA%B3%A4%EB%93%9C%EB%A0%88%EB%B0%A5%20%EB%8F%99%EC%9E%90%EB%8F%99%EC%A0%90,1539369147,PLACE_POI/-/walk?c=14134504.8274951,4516099.1641834,18,0,0,0,dh"
		}
    ];
    
	shuffle(venues);
	
    // Helpers
    var blackHex = '#333',
        whiteHex = '#fff',
        shuffle = function(o) {
            for ( var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
                ;
            return o;
        },
        halfPI = Math.PI / 2,
        doublePI = Math.PI * 2;

	String.prototype.hashCode = function(){
		// See http://www.cse.yorku.ca/~oz/hash.html		
		var hash = 5381,
            i;
		for (i = 0; i < this.length; i++) {
			char = this.charCodeAt(i);
			hash = ((hash<<5)+hash) + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

	Number.prototype.mod = function(n) {
		return ((this%n)+n)%n;
    };
    
// WHEEL!
	var wheel = {
		timerHandle : 0,
		timerDelay : 20,

		angleCurrent : 0,
		angleDelta : 0,

		size : 160,

		canvasContext : null,

		colors : [ '#003366','#FF6600','#CCCC00','#006600','#3333CC','#CC0066','#FF3300','#009900','#6600CC','#33CC33','#0066CC','#FF0066','#3300FF','#00CC00','#FFCC00' ],

		segments : [],

		seg_colors : [], // Cache of segments to colors
		
		maxSpeed : Math.PI / 10,

		upTime : 1000, // How long to spin up for (in ms)
		downTime : 5000, // How long to slow down for (in ms)

		spinStart : 0,

		frames : 0,

		centerX : 180,
		centerY : 180,

		spin : function() {
			//$("#desc").hide();
			DeactivateConfetti();
			// Start the wheel only if it's not already spinning
			if (wheel.timerHandle == 0) {
				wheel.spinStart = new Date().getTime();
				wheel.maxSpeed = Math.PI / (16 + Math.random()); // Randomly vary how hard the spin is
				wheel.frames = 0;
				//wheel.sound.play();

				wheel.timerHandle = setInterval(wheel.onTimerTick, wheel.timerDelay);
			}
		},

		onTimerTick : function() {
            var duration = (new Date().getTime() - wheel.spinStart),
                progress = 0,
                finished = false;

			wheel.frames++;
			wheel.draw();

			if (duration < wheel.upTime) {
				progress = duration / wheel.upTime;
				wheel.angleDelta = wheel.maxSpeed
						* Math.sin(progress * halfPI);
			} else {
				progress = duration / wheel.downTime;
				wheel.angleDelta = wheel.maxSpeed
						* Math.sin(progress * halfPI + halfPI);
                if (progress >= 1){
                    finished = true;
                }
			}

			wheel.angleCurrent += wheel.angleDelta;
            while (wheel.angleCurrent >= doublePI){
				// Keep the angle in a reasonable range
				wheel.angleCurrent -= doublePI;
            }
			if (finished) {
				clearInterval(wheel.timerHandle);
				wheel.timerHandle = 0;
				wheel.angleDelta = 0;

                if (console){ 
					console.log((wheel.frames / duration * 1000) + " FPS");
			 	}

				wheel.end();
			}

			/*
			// Display RPM
			var rpm = (wheel.angleDelta * (1000 / wheel.timerDelay) * 60) / (Math.PI * 2);
			$("#counter").html( Math.round(rpm) + " RPM" );
			 */
		},

		init : function(optionList) {
			try {
				wheel.initWheel();
				// wheel.initAudio();
				wheel.initCanvas();
				wheel.draw();

				$.extend(wheel, optionList);

			} catch (exceptionData) {
				// alert('Wheel is not loaded ' + exceptionData);
			}

		},

		initAudio : function() {
			var sound = document.createElement('audio');
			sound.setAttribute('src', 'wheel.mp3');
			wheel.sound = sound;
		},

		initCanvas : function() {
			var canvas = $('#canvas')[0];
			canvas.addEventListener("click", wheel.spin, false);
			wheel.canvasContext = canvas.getContext("2d");
		},

		initWheel : function() {
			shuffle(wheel.colors);
		},

		// Called when segments have changed
		update : function() {
			// Ensure we start mid way on a item
			//var r = Math.floor(Math.random() * wheel.segments.length);
			var r = 0,
                segments = wheel.segments,
			    len      = segments.length,
                colors   = wheel.colors,
			    colorLen = colors.length,
                seg_color = [], // Generate a color cache (so we have consistant coloring)
                i
            wheel.angleCurrent = ((r + 0.5) / wheel.segments.length) * doublePI;
            
            for (i = 0; i < len; i++){
				seg_color.push( colors [ segments[i].hashCode().mod(colorLen) ] );
            }
			wheel.seg_color = seg_color;

			wheel.draw();
		},

		end : function(i) {
			//$("#desc").show();
			RestartConfetti();
			$('#myModal').modal('show');
		},

		draw : function() {
			wheel.clear();
			wheel.drawWheel();
			wheel.drawNeedle();
		},

		clear : function() {
			wheel.canvasContext.clearRect(0, 0, 1000, 800);
		},

		drawNeedle : function() {
			var ctx = wheel.canvasContext,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size = wheel.size,
                i,
                centerSize = centerX + size,
                len = wheel.segments.length,
                winner;

			ctx.lineWidth = 4;
			ctx.strokeStyle = blackHex;
			ctx.fillStyle = whiteHex;

			ctx.beginPath();

			//ctx.moveTo(centerX - 10, 20 - 10);
			//ctx.lineTo(centerX + 10, 20 - 10);
			//ctx.lineTo(centerX, 20 + 10);
			ctx.moveTo(centerX + size - 20, centerY);
			ctx.lineTo(centerX + size + 15, centerY - 10);
			ctx.lineTo(centerX + size + 15, centerY + 10);
			ctx.closePath();

			ctx.stroke();
			ctx.fill();

			// Which segment is being pointed to?
			i = len - Math.floor((wheel.angleCurrent / doublePI) * len) - 1;

			// Now draw the winning name
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = blackHex;
			ctx.font = "1.5em Noto Sans KR";
            winner = wheel.segments[i] || 'Choose at least 1 Venue';
			ctx.fillText(winner, centerY, 380);

			//console.log(wheel.segments[i]);
			//$("#desc").html(venues[i].desc);

			$('#myModalLabel').text(winner);

			function isName(element) {
				if(element.name === winner) {
					return true;
				}
			}
			
			let win = venues.filter(isName);
			$(".modal-body").html(win[0].desc);
		},

		drawSegment : function(key, lastAngle, angle) {
			var ctx = wheel.canvasContext,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size = wheel.size,
                colors = wheel.seg_color,
                value = wheel.segments[key];
			
			//ctx.save();
			ctx.beginPath();

			// Start in the centre
			ctx.moveTo(centerX, centerY);
			ctx.arc(centerX, centerY, size, lastAngle, angle, false); // Draw an arc around the edge
			ctx.lineTo(centerX, centerY); // Now draw a line back to the centre

			// Clip anything that follows to this area
			//ctx.clip(); // It would be best to clip, but we can double performance without it
			ctx.closePath();

			ctx.fillStyle = colors[key];
			ctx.fill();
			ctx.stroke();

			// Now draw the text
			ctx.save(); // The save ensures this works on Android devices
			ctx.translate(centerX, centerY);
			ctx.rotate((lastAngle + angle) / 2);

			ctx.fillStyle = whiteHex;
			ctx.fillText(value.substr(0, 20), size-15, 0);
			ctx.restore();
		},

		drawWheel : function() {
			var ctx = wheel.canvasContext,
                angleCurrent = wheel.angleCurrent,
                lastAngle    = angleCurrent,
                len       = wheel.segments.length,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size    = wheel.size,
                angle,
                i;

			ctx.lineWidth    = 2;
			ctx.strokeStyle  = blackHex;
			ctx.textBaseline = "middle";
			ctx.textAlign    = "right";
			ctx.font         = "1em Noto Sans KR";

			for (i = 1; i <= len; i++) {
				angle = doublePI * (i / len) + angleCurrent;
				wheel.drawSegment(i - 1, lastAngle, angle);
				lastAngle = angle;
			}
            
			// Draw a center circle
			ctx.beginPath();
			ctx.arc(centerX, centerY, 20, 0, doublePI, false);
			ctx.closePath();

			ctx.fillStyle   = whiteHex;
			//ctx.strokeStyle = blackHex;
			ctx.fill();
			ctx.stroke();

			// Draw outer circle
			ctx.beginPath();
			ctx.arc(centerX, centerY, size, 0, doublePI, false);
			ctx.closePath();

			ctx.lineWidth   = 10;
			//ctx.strokeStyle = blackHex;
			ctx.stroke();
		}
	};
    $(function() {
        var $venues = $('#venues'),
            $venueName = $('#name'),
            $venueType = $('#types'),
            venueTypes = [],
            $list = $('<ul class="list-group" />'),
            $types = $('<ul class="list-group" />'),
            $filterToggler = $('#filterToggle'),
            arrayUnique = function(a) {
                return a.reduce(function(p, c) {
                    if (p.indexOf(c) < 0) { p.push(c); }
                    return p;
                }, []);
            };

		$.each(venues, function(index, venue) {
			$list.append(
		        $('<li class="list-group-item" />')
		        .append(
	                $('<input class="form-check-input" />').attr({
                         id:    'venue-' + index
                        ,name:  venue.name
                        ,value: venue.name
                        ,type:  'checkbox'
                        ,checked:true
	                })
	                .change( function() {
	                	var cbox = this,
                            segments = wheel.segments,
                            i = segments.indexOf(cbox.value);

	                	if (cbox.checked && i === -1) {
	                		segments.push(cbox.value);
	                	} else if ( !cbox.checked && i !== -1 ) {
	                		segments.splice(i, 1);
	                	}

	                	segments.sort();
	                	wheel.update();
	                })

		        ).append(
	                $('<label />').attr({
	                    'for':  'venue-' + index
	                })
	                .text( venue.name )
		        )
		    );
            venueTypes.push(venue.type);
		});
        $.each(arrayUnique(venueTypes), function (index, venue){
            $types.append(
		        $('<li class="list-group-item" />')
		        .append(
	                $('<input class="form-check-input" />').attr({
                         id:    'venue-type-' + index
                        ,name:  venue
                        ,value: venue
                        ,type:  'checkbox'
                        ,checked:true
	                })
	                .change( function() {
                        var $this = $(this), i;
                        for(i=0; i<venues.length;i++){
                            if (venues[i].type === $this.val()){
                                $('[name="'+venues[i].name+'"]').prop("checked",$this.prop('checked')).trigger('change');
                            }
                        }
	                })

		        ).append(
	                $('<label />').attr({
	                    'for':  'venue-type-' + index
	                })
	                .text( venue )
		        )
		    )
        });
        
        $venueName.append($list);
        $venueType.append($types);
        // Uses the tinysort plugin, but our array is sorted for now.
		//$list.find('>li').tsort("input", {attr: "value"});
        
        wheel.init();

		$.each($venueName.find('ul input:checked'), function(key, cbox) {
			wheel.segments.push( cbox.value );
		});

		wheel.update();
        $venues.slideUp().data("open",false);
        $filterToggler.on("click", function (){
            if($venues.data("open")){
                $venues.slideUp().data("open",false);
            }else{
                $venues.slideDown().data("open",true);
            }
        });
        
        $('.checkAll').on("click", function (){
            $(this).parent().next('div').find('input').prop('checked',$(this).prop('checked')).trigger("change");
        });
	});
}(jQuery));