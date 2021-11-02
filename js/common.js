(function ($){
	function shuffle(array) { array.sort(() => Math.random() - 0.5); } 
	
    var venues =  [
        {
			"name": "등촌샤브칼국수",
			"type": "면",
			"descc": "고기추가 안하면 서운함"
		  },
		  {
			"name": "후암편백",
			"type": "고기",
			"descc": "편백찜도 있지만 샤브샤브가 더 맛있음"
		  },
		  {
			"name": "유키사키",
			"type": null,
			"descc": "가츠동, 스테이키동 빼고는 맛이없음"
		  },
		  {
			"name": "오제제",
			"type": null,
			"descc": "돈까스 맛집. But 10시에 대기 걸어야함"
		  },
		  {
			"name": "바스버거",
			"type": null,
			"descc": "맛있는 수제버거. 토핑이 풍부함"
		  },
		  {
			"name": "죠우",
			"type": null,
			"descc": "깔끔한 일본 가정식"
		  },
		  {
			"name": "가마솥족발순대국",
			"type": null,
			"descc": "국물이 아주 맑은 순대국집! 맛집이라 웨이팅이 있을지도 몰라요"
		  },
		  {
			"name": "후암연어식당",
			"type": null,
			"descc": "연어삼합이 베스트이지만 점심땐 초밥이랑 파스타도 있어요"
		  },
		  {
			"name": "오지차돌박이",
			"type": null,
			"descc": "차돌박이 정식 굿굿. 점심에도 고기를 구워먹을 수 있어요"
		  },
		  {
			"name": "도동집",
			"type": null,
			"descc": "일명 이영자 맛집. 일찍가야 먹을 수 있는 곳!"
		  },
		  {
			"name": "교동짬뽕",
			"type": null,
			"descc": "해장이 필요할 때!"
		  },
		  {
			"name": "대독장",
			"type": null,
			"descc": "맛있는 김치찌개집! 세트메뉴가 좋아요"
		  },
		  {
			"name": "서브웨이",
			"type": null,
			"descc": "다이어트 결심이 드는 날?"
		  },
		  {
			"name": "홍콩중국요리",
			"type": null,
			"descc": "짜장면이 맛있는 곳"
		  },
		  {
			"name": "메시야",
			"type": null,
			"descc": "다양한 돈까스를 만날 수 이는 곳. 대표메뉴는 김치돈까스!"
		  },
		  {
			"name": "양귀비짬뽕",
			"type": null,
			"descc": "짬뽕과 마늘탕수육이 맛있는 곳"
		  },
		  {
			"name": "동해오징어보쌈",
			"type": null,
			"descc": "매콤한게 땡기는날! 오징어보쌈과 오징어불고기가 맛있는 곳"
		  },
		  {
			"name": "스시Zip",
			"type": null,
			"descc": "다양한 스시를 맛볼 수 있는 곳"
		  },
		  {
			"name": "은하수닭갈비",
			"type": null,
			"descc": "맛있는 철판닭갈비! 볶음밥 필수"
		  },
		  {
			"name": "모모키친",
			"type": null,
			"descc": "깔끔한 돈까스 맛집"
		  },
		  {
			"name": "미니네칼국수",
			"type": null,
			"descc": "칼제비와 들깨칼국수가 인기!"
		  },
		  {
			"name": "충무칼국수",
			"type": null,
			"descc": "칼국수집인데 보쌈이 맛있는 곳"
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

                if (console){ console.log((wheel.frames / duration * 1000) + " FPS"); }
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
				alert('Wheel is not loaded ' + exceptionData);
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

			console.log(wheel.segments[i])
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