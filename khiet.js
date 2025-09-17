var Khiet = {
    QUAI: [
        [1, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0]
    ],
    LUCTHAN: [
        ["TA", "H", "Q", "T", "T'", "C", "P", "P'"],
        ["H", "TA", "Q", "T", "T'", "C", "P", "P'"],
        ["T", "T'", "TA", "P", "P'", "Q", "C", "C'"],
        ["Q", "Q'", "C", "TA", "H", "P", "T", "T'"],
        ["Q", "Q'", "C", "H", "TA", "P", "T", "T'"],
        ["P", "P'", "T", "C", "C'", "TA", "Q", "Q'"],
        ["C", "C'", "P", "Q", "Q'", "T", "TA", "H"],
        ["C", "C'", "P", "Q", "Q'", "T", "H", "TA"]
    ],
    QUAINAME: {
        "11": "BA'T THUA^`N KIE^`N",
        "12": "THIE^N TRA.CH LY'",
        "13": "THIE^N HO~A DDO^`NG NHA^N",
        "14": "THIE^N LO^I VO^ VO.NG",
        "15": "THIE^N PHONG CA^'U",
        "16": "THIE^N THU?Y TU.NG",
        "17": "THIE^N SO+N DDO^.N",
        "18": "THIE^N DDI.A BI?",
        "21": "TRA.CH THIE^N QUA'I",
        "22": "BA'T THUA^N DDOA`I",
        "23": "TRA.CH HO?A CA'CH",
        "24": "TRA.CH LO^I TU`Y",
        "25": "TRA.CH PHONG DDI.A QUA'",
        "26": "TRA.CH THU?Y KHO^'N",
        "27": "TRA.CH SO+N HA`M",
        "28": "TRA.CH DDI.A TU.Y",
        "31": "HO?A THIE^N DDA.I HU+~U",
        "32": "HO?A TRA.CH KHUE^",
        "33": "BA'T THUA^N LY",
        "34": "HO?A LO^I PHE^. HA.P",
        "35": "HO?A PHONG DDI?NH",
        "36": "HO?A THU?Y VI. TE^'",
        "37": "HO?A SO+N LU+~",
        "38": "HO~A DDI.A TA^'N",
        "41": "LO^I THIE^N DDA.I TRA'NG",
        "42": "LO^I TRA.CH QUI MUO^.I",
        "43": "LO^I HO?A PHONG",
        "44": "BA'T THUA^N CHA^'N",
        "45": "LO^I PHONG HA(`NG",
        "46": "LO^I THU?Y GIA?I",
        "47": "LO^I SO+N TIE^?U QUA'",
        "48": "LO^I DDI.A DU+.",
        "51": "PHONG THIE^N TIE^?U SU'C",
        "52": "PHONG TRA.CH TRUNG PHU",
        "53": "PHONG HO?A GIA NHA^N",
        "54": "PHONG LO^I I'CH",
        "55": "BA'T THUA^N PHONG",
        "56": "PHONG THU?Y HOA'N",
        "57": "PHONG SO+N TIE^.M",
        "58": "PHONG DDI.A QUA'N",
        "61": "THU?Y THIE^N NHU",
        "62": "THU?Y TRA.CH TIE^'T",
        "63": "THU?Y HO?A KY? TE^'",
        "64": "VA^N LO^I TRUA^N",
        "65": "THU?Y PHONG TI~NH",
        "66": "BA'T THUA^N KHA?M",
        "67": "THU?Y SO+N KIE^`N",
        "68": "THU?Y DDI.A TI?",
        "71": "SO+N THIE^N DDI.A SU'C",
        "72": "SO+N TRA.CH TO^?N",
        "73": "SO+N HO?A BI'",
        "74": "SO+N LO^I DI",
        "75": "SO+N PHONG CO^?",
        "76": "SO+N THU?Y MO^NG",
        "77": "BA'T THUA^N CA^'N",
        "78": "SO+N DDI.A BA'C",
        "81": "DDI.A THIE^N THA'S",
        "82": "DDI.A TRA.CH LA^M",
        "83": "DDI.A HO?A MINH SAN",
        "84": "DDI.A LO^I PHU.C",
        "85": "DDI.A PHONG THA(NG",
        "86": "DDI.A THU?Y SU+",
        "87": "DDI.A SO+N KHIE^M",
        "88": "BA'T THUA^N KHO^N"
    },
	THAPNHI: [
		"TY'", "SU+~U", "DA^`N", "ME.O", "THI`N", "TY.", "NGO.",
		"MU`I", "THA^N", "DA^.U", "TUA^'T", "HO+.I"
	],
	
    // @public
    clone: function(p) {
        var json = JSON.stringify(p);
        return JSON.parse(json);
    },

    // @public
    don: function (phai, trai, dong, next) {
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        dong = parseFloat(dong);
        next = next === true ? true : false;

        if (isNaN(phai)) throw "Invalid @phai";
        if (isNaN(trai)) throw "Invalid @trai";
        if (next && isNaN(dong)) throw "Invalid @dong";

        var qlen = 8, dlen = 6,
            p, t, d;

        if (next) {
            p = (phai % qlen + 4) % qlen;
            t = (trai % qlen + 6) % qlen;
            d = (dong % dlen + 4) % dlen;
        }
        else {
            p = phai % qlen;
            t = trai % qlen;
            d = isNaN(dong) ? (phai + trai) % dlen 
                : dong % dlen;
        }

        var ret = {
            phai: p == 0 ? qlen : p,
            trai: t == 0 ? qlen : t,
            dong: d == 0 ? dlen : d
        }
        ret.dongTren = ret.dong >= 4;

        return ret;
    },

    // @public
    getQuai: function(phai, trai) {
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        var ret = {
            quaiPhai: this.QUAI[phai - 1],
            quaiTrai: this.QUAI[trai - 1]
        };
        return this.clone(ret);
    },

    // @public
    getQuaiNumber: function(quai){
        if (this.__quaiLib == null) {
            this.__quaiLib = {};
            for (var i=0; i<this.QUAI.length; i++) {
                var iquai = this.QUAI[i];
                var key = iquai.join("");
                this.__quaiLib[key] = i + 1;
            }
        }
        var key = quai.join("");
        return this.__quaiLib[key];
    },

    // @public
    getLucThan: function(quaiNumber){
        ta = parseFloat(quaiNumber);
        var index = quaiNumber - 1;
        var lucThan = this.LUCTHAN[index];
        return lucThan;
    },

    // @public
    getBien: function(phai, trai, dong) {
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        dong = dong == null ? null : parseFloat(dong);

        var quai = this.getQuai(phai, trai);
        var ret = {
            quaiPhai: quai.quaiPhai,
            quaiTrai: quai.quaiTrai
        };

        var fnDong = function(quai, dong) {
            var d = dong % 3;
            d = d == 0 ? 3 : d;
            var index = d - 1;
            var r = quai.reverse();
            r[index] = r[index] == 1 ? 0 : 1;
            return r.reverse();
        }

        if (dong >= 4) ret.quaiPhai = fnDong(ret.quaiPhai, dong);
        else ret.quaiTrai = fnDong(ret.quaiTrai, dong);

        return ret;
    },

    // @public
    getHo: function(phai, trai){
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        var quai = this.getQuai(phai, trai);
        var j = quai.quaiPhai.concat(quai.quaiTrai).reverse();
        return {
            quaiPhai: [j[5-1], j[4-1], j[3-1]],
            quaiTrai: [j[4-1], j[3-1], j[2-1]]
        }
    },

    // @public
    getChanh: function(phai, trai) {
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        return this.getQuai(phai, trai);
    },

    // @public
    computeKhongThoi: function(phai, trai, dong, giaKhongThoi) {
		giaKhongThoi = giaKhongThoi == false ? false : true;
		
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        dong = parseFloat(dong);

        var ktArray = [];

        var p = phai,
            t = trai,
            d = isNaN(dong) ? null : dong,
            next = false;

        var lucThan;

        while (true){
            var don = this.don(p, t, d, next);

            var kt = {
                p: don.phai,
                t: don.trai,
                d: don.dong,
                dongTren: don.dongTren
            };

            var chanh = this.getChanh(kt.p, kt.t);
            kt.pChanh = chanh.quaiPhai;
            kt.tChanh = chanh.quaiTrai;

            var ho = this.getHo(kt.p, kt.t);
            kt.pHo = ho.quaiPhai;
            kt.tHo = ho.quaiTrai;

            var bien = this.getBien(kt.p, kt.t, kt.d);
            kt.pBien = bien.quaiPhai;
            kt.tBien = bien.quaiTrai;

            if (lucThan == null) {
                var ta = kt.dongTren ? kt.tBien : kt.pBien,
                    quaiNumber = this.getQuaiNumber(ta);
                lucThan = this.getLucThan(quaiNumber);
            }
            kt.lucThan = lucThan;

            // add to array
            ktArray.push(kt);

            // set variables to compute next
            p = kt.p;
            t = kt.t;
            d = kt.d;
            next = true;

            // Whether to break out the loop
            if (ktArray.length > 1) {
                var iKt = ktArray[0];
                if (iKt.p == kt.p && iKt.t == kt.t && iKt.dongTren == kt.dongTren) {
                    break;
                }
            }
			
			// Tiep tuc gia khong thoi
			if (!giaKhongThoi) {
				break;
			}

        }

        return ktArray;
    },

    splitKtIntoPages: function(ktArray) {
        var ktLen = ktArray.length;
        if (ktLen > 5){
            var half = Math.ceil(ktLen / 2),
                page1 = ktArray.slice(0, half),
                page2 = ktArray.slice(half, ktLen);
            return [page1, page2];
        }
        else {
            return [ktArray];
        }
    },

	initProps: function(ktWidth, maxItemsPerPage, totalPages){
		var minKtWidth = 100;
        ktWidth = parseFloat(ktWidth);
        ktWidth = isNaN(ktWidth) ? minKtWidth : ktWidth;
        ktWidth = ktWidth < minKtWidth ? minKtWidth : ktWidth;
		
		var p = this.PROPS = {
            KT_WIDTH: ktWidth,
            KT_HEIGHT: Math.ceil(ktWidth * 0.3442),
            KT_SPACER_X: Math.ceil(ktWidth * 0.0700),
            KT_SPACER_Y: Math.ceil(ktWidth * 0.1000),
            KT_START_X: Math.ceil(ktWidth * 0.0500),
            KT_START_Y: Math.ceil(ktWidth * 0.6084),
            KT_FONT_SIZE: Math.ceil(ktWidth * 0.066667),
            KT_BULLET_RADIUS: Math.ceil(ktWidth * 0.0550)
        };
		p.KT_OUTER_WIDTH = p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_WIDTH + 30 + p.KT_SPACER_X;
        p.KT_OUTER_HEIGHT = p.KT_HEIGHT + p.KT_SPACER_Y * 1.2;
        p.canvasHeight = maxItemsPerPage * p.KT_OUTER_HEIGHT + p.KT_START_Y + p.KT_SPACER_Y,
        p.canvasWidth = p.KT_START_X * 2 + p.KT_OUTER_WIDTH * totalPages + p.KT_SPACER_X;
		
		return p;
	},
	
	createPaper: function(canvasId, width, height){
		// reset
        var $canvas = $('#' + canvasId);
        $canvas.html('');
		
        var paper = Raphael(canvasId, width, height);
        paper.canvas.setAttribute('style', 'background-color: #ffffff;');
		return paper;
	},
	
	getDrawingArray: function(){
		var fnArray = [
            this.drawKtHeaders,
            this.drawKtFrame,
            this.drawKtBullet,
            this.drawKtCurlyBacket,
            this.drawKtArrow,
            this.drawKtNumber,
            this.drawKtQuai,
            this.drawKtLucThan,
            this.drawKtBox
        ];
		return fnArray;
	},
	
    // @public
    drawKhongThoi: function(canvasId, trai, phai, dong, ktWidth){
		
        // parse
        phai = parseFloat(phai);
        trai = parseFloat(trai);
        if (isNaN(phai) || isNaN(trai) || phai <= 0 || trai <= 0) {
            throw "Please phai & trai must be a valid number > 0";
        }

        //compute kt;
        var ktArray = this.computeKhongThoi(trai, phai, dong);

		// Draw khong thoi
        this.doDrawKhongThoi(canvasId, ktArray, ktWidth);
    },
	
	doDrawKhongThoi: function(canvasId, ktArray, ktWidth, doSimple){
		doSimple = doSimple == true ? true : false;
		
        var ktPages = this.splitKtIntoPages(ktArray);

        // define scale properties
		var maxItemsPerPage = ktPages[0].length;
		var totalPages = ktPages.length;
		var cfg = this.initProps(ktWidth, maxItemsPerPage, totalPages);

        // create paper
		var paper = this.createPaper(canvasId, cfg.canvasWidth, cfg.canvasHeight);

        // start drawing
        var fnArray = this.getDrawingArray();
        var seq = 0;
		
        for (var p=0; p<ktPages.length; p++) {
            var iPage = ktPages[p];
            for (var i=0; i<iPage.length; i++) {
                var iKt = iPage[i];
                seq++;
                for (var j=0; j<fnArray.length; j++){
					var pagePos = p;
					var ktPos = i;
					var ktName = doSimple ? this.viqrToUnicode(this.THAPNHI[seq-1]) : seq;
                    fnArray[j].call(this, paper, pagePos, ktPos, iKt, ktName, doSimple);
                }
            }
        }
	},
	
	//@public
	drawKhongThoiMaiHoa: function(canvasId, namThangNgaySum, ktWidth) {
		
		// parse
        phai = parseFloat(namThangNgaySum);
        if (isNaN(phai) || phai <= 0) {
            throw "Please @namThangNgaySum must be a valid number > 0";
        }
		
		// compute khong thoi
		var ktArray = [];
		for (var i=1; i<=12; i++){
			var phai = namThangNgaySum;
			var trai = namThangNgaySum + i;
			var iKt = this.computeKhongThoi(phai, trai, trai, false)[0];
			ktArray.push(iKt);
		}
		
		// draw khong thoi
		this.doDrawKhongThoi(canvasId, ktArray, ktWidth, true);
	},

    drawKtHeaders: function(paper, pagePos, ktPos, kt, seq, doSimple) {
		doSimple = doSimple == true ? true : false;
		
        if (pagePos > 0 || ktPos > 0) {
            return;
        }

        var p = this.PROPS;
        var x = p.canvasWidth / 2,
            y = p.KT_SPACER_Y * 0.9,
            h = p.KT_START_Y - p.KT_SPACER_Y * 2,
            bh =  Math.ceil(h * 0.622)
            ;

        // header bar
        paper.rect(0, 0, p.canvasWidth, bh)
            .attr({ 'fill': '#000'});

        var textCfg = {
            'fill': '#fff',
            'stroke': '#fff',
            'font-family': 'Taviraj, serif'
        };

        // quai kien lien hoa
		var headerText = doSimple ? "MAI HOA" : "QUA'I KIE^.N LIE^N HOA";
        var text = this.viqrToUnicode(headerText);
        var header = paper.text(x, y, text)
            .attr(textCfg)
            .attr({
                'font-size': (p.KT_FONT_SIZE + 6) + 'px',
				'letter-spacing': '1px'
            });

        // nguyenk che tac
        y += p.KT_SPACER_Y;
		var cheTacText = doSimple ? "THA^.P NHI. THO+`I THI`" : "NGUYE^NK CHE^' TA'C";
        var text = this.viqrToUnicode(cheTacText);
        var cheTac = paper.text(x, y, text)
            .attr(textCfg)
            .attr({
                'font-size': (p.KT_FONT_SIZE - 0) + 'px',
				'letter-spacing': '2px'
            });
        
        // quai name
        textCfg['fill'] = '#000';
        textCfg['stroke'] = '#000';
        y = bh  + p.KT_SPACER_Y;
        var text = this.viqrToUnicode(this.QUAINAME[kt.p + '' + kt.t] || 'UNTITLED');
		if (doSimple) {
			text =  this.viqrToUnicode("MU+O+`I HAI GIO+` TRONG NGA`Y");
		}
        var quaiName = paper.text(x, y, text)
            .attr(textCfg)
            .attr({
                'font-size': (p.KT_FONT_SIZE + 4) + 'px'
            });
        
        // dong hao
		if (!doSimple){
			y += p.KT_SPACER_Y;
			var text = this.viqrToUnicode("DDO^.NG HA`O ");
			var quaiName = paper.text(x, y, text + kt.d)
				.attr(textCfg)
				.attr({
					'font-size': (p.KT_FONT_SIZE - 4) + 'px'
				});
		}
    },

    drawKtFrame: function(paper, pagePos, ktPos, kt){
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333)
            ;

        var rect1 = paper.rect(
            x + hs,
            y,
            hs2 * 3,
            vs * 2
        );

        var rect2 = paper.rect(
            x + hs + hs2,
            y,
            hs2,
            vs * 2
        );

        var line1 = paper.path(["M", x, y, "L", x+p.KT_WIDTH, y]);
        var line2 = paper.path(["M", x, y + vs, "L", x+p.KT_WIDTH, y+vs]);
        var line3 = paper.path(["M", x, y + vs + vs, "L", x+p.KT_WIDTH, y + vs + vs]);
        var line4 = paper.path(["M", x + hs, y, "L", x + hs, y + p.KT_HEIGHT]);
    },

    drawKtBullet: function(paper, pagePos, ktPos, kt, valueToDraw, doSimple) {
		doSimple = doSimple == true ? true : false;
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH - hs) * 0.33333333333),
            fs = Math.floor(p.KT_FONT_SIZE) + 2
            ;

		if (!doSimple) {
			paper.circle(x, y + vs, p.KT_BULLET_RADIUS)
				.attr({ 'fill': '#000' });
		}

        paper.text(x, y + vs, valueToDraw)
            .attr({
                'fill': doSimple ? '#000' : '#fff',
                'stroke': doSimple ? '#000' : '#fff',
                'font-size': fs + 'px'
            });

    },

    drawKtCurlyBacket: function(paper, pagePos, ktPos, kt) {
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333)
            ;

        var arrowLength = vs * 2 + 8;
        var arrowPart = arrowLength / 2;

        x += hs + hs2 * 3 + 4;
        y -= 4;

        var path = ["M", x, y];

        x += 6; y += 3;
        path = path.concat(["L", x, y]);

        y += arrowPart - 6;
        path = path.concat(["L", x, y]);

        x += 6; y += 3;
        path = path.concat(["L", x, y]);

        x -= 6; y += 3;
        path = path.concat(["L", x, y]);

        y += arrowPart - 6;
        path = path.concat(["L", x, y]);

        x -= 6; y += 3;
        path = path.concat(["L", x, y]);

        // Draw
        paper.path(path);
    },

    drawKtArrow: function(paper, pagePos, ktPos, kt) {
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH - hs) * 0.33333333333)
            ;

        var startAngle = 66,
            endAngle = startAngle + (90 - startAngle) * 2,
            radius = p.KT_HEIGHT * 2,
            path;

        x += (hs2 * 3) / 2 + hs - Math.ceil(hs2 * 0.20);

        if (kt.dongTren == true) {
            y += p.KT_HEIGHT * 2 - p.KT_HEIGHT * 0.26;
            startAngle = 270 - (90 - startAngle);
            endAngle = 270 + (270 - startAngle);
            path = this.arc([x, y], radius, startAngle, endAngle);
            var arrowHeadStart = path.split("L")
        }
        else {
            y -= p.KT_HEIGHT + p.KT_HEIGHT * 0.05;
            path = this.arc([x, y], radius, startAngle, endAngle);
        }
        // draw arch
        paper.path(path);


        // draw arrow head
        var sp = path.split(" L ");
        if (kt.dongTren == true) {
            var arrowHeadStart = sp[sp.length - 1];
            var coord = arrowHeadStart.split(" ");
            var xy = [parseFloat(coord[0]), parseFloat(coord[1])];
            paper.path([
                "M", xy[0], xy[1],
                "L", xy[0] - 10, xy[1] - 10,
                "L", xy[0], xy[1],
                "L", xy[0] - 13, xy[1],
            ]);
        }
        else {
            var arrowHeadStart = sp[0];
            var coord = arrowHeadStart.split(" ");
            var xy = [parseFloat(coord[1]), parseFloat(coord[2])];
            paper.path([
                "M", xy[0], xy[1],
                "L", xy[0] - 10, xy[1] + 10,
                "L", xy[0], xy[1],
                "L", xy[0] - 14, xy[1],
            ]);
        }


    },

    drawKtNumber: function(paper, pagePos, ktPos, kt){
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333),
            fs = Math.ceil(p.KT_FONT_SIZE)
            ;

        var pText = paper.text(x + hs/2, y + vs/2, kt.p);
        var tText = paper.text(x + hs/2, y + vs + vs/2, kt.t);
        var dText = paper.text(x + hs/2, y + vs + vs + vs/2, kt.d);

        pText.attr('font-size', fs + 'px');
        tText.attr('font-size', fs + 'px');
        dText.attr('font-size', fs + 'px');
    },

    drawKtQuai: function(paper, pagePos, ktPos, kt) {
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333)
            ;

        var fnDrawQuai = function(x, y, quai){
            var h = vs * 0.0741;
            var oneWidth = hs2 * 0.40;
            var zeroSpacer = oneWidth * 0.20;
            var zeroPartWidth = (oneWidth - zeroSpacer) / 2;
            var spacer = vs / 2 - h * 5 / 2 - 1;

            x += hs2 * 0.13 + 1;
            y += spacer;


            if (quai[0] == 1) {
                paper.rect(x, y, oneWidth, h).attr('fill', '#000');
            } else {
                paper.rect(x, y, zeroPartWidth, h).attr('fill', '#000');
                paper.rect(x + zeroPartWidth + zeroSpacer, y, zeroPartWidth, h).attr('fill', '#000');
            }

            y += h * 2 + 2;
            if (quai[1] == 1) {
                paper.rect(x, y, oneWidth, h).attr('fill', '#000');
            } else {
                paper.rect(x, y, zeroPartWidth, h).attr('fill', '#000');
                paper.rect(x + zeroPartWidth + zeroSpacer, y, zeroPartWidth, h).attr('fill', '#000');
            }

            y += h * 2 + 2;
            if (quai[2] == 1) {
                paper.rect(x, y, oneWidth, h).attr('fill', '#000');
            } else {
                paper.rect(x, y, zeroPartWidth, h).attr('fill', '#000');
                paper.rect(x + zeroPartWidth + zeroSpacer, y, zeroPartWidth, h).attr('fill', '#000');
            }
        };

        // pChanh
        fnDrawQuai(x + hs, y, kt.pChanh);
        // tChanh
        fnDrawQuai(x + hs, y + vs, kt.tChanh);
        // pHo
        fnDrawQuai(x + hs + hs2, y, kt.pHo);
        // tHo
        fnDrawQuai(x + hs + hs2, y + vs, kt.tHo);
        // pBien
        fnDrawQuai(x + hs + hs2 + hs2, y, kt.pBien);
        // tBien
        fnDrawQuai(x + hs + hs2 + hs2, y + vs, kt.tBien);
    },

    drawKtLucThan: function(paper, pagePos, ktPos, kt) {
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333),
            fs = Math.floor(p.KT_FONT_SIZE)
            ;

        var arr = [
            [kt.pChanh, kt.pHo, kt.pBien],
            [kt.tChanh, kt.tHo, kt.tBien]
        ];

        var cfg = {
            'stroke': '#ff0000',
            'font-size': fs + 'px',
            'fill': '#ff0000',
            'letter-spacing': '2px'
        };

        for (var j=0; j<arr.length; j++) {
            var iItem = arr[j];
            for (var k=0; k<iItem.length; k++) {
                var quai = iItem[k],
                    quaiNumber = this.getQuaiNumber(quai),
                    index = quaiNumber - 1,
                    lucThan = kt.lucThan[index];

                var iX = x + hs + hs2 * k + hs2 * 0.76;
                var iY = y + vs * j + vs * 0.50;
                paper.text(iX, iY, lucThan)
                    .attr(cfg);
            }
        }

        // draw conclusion luc than
        var quai = kt.dongTren ? kt.tBien : kt.pBien,
            quaiNumber = this.getQuaiNumber(quai),
            index = quaiNumber - 1,
            lucThan = kt.lucThan[index];

        var t = paper.text(
            x + p.KT_WIDTH + 20,
            y + vs,
            lucThan);

        t.attr(cfg).attr('text-anchor', 'start');

        // save conclusion to kt
        kt.ktLucThan = lucThan;

    },

    drawKtBox: function(paper, pagePos, ktPos, kt) {
        var p = this.PROPS;
        var x = p.KT_START_X + p.KT_SPACER_X + p.KT_BULLET_RADIUS * 2 + p.KT_SPACER_X + p.KT_OUTER_WIDTH * pagePos,
            y = ktPos * p.KT_OUTER_HEIGHT + p.KT_START_Y,
            vs = Math.ceil(p.KT_HEIGHT * 0.34),
            hs = Math.ceil(p.KT_WIDTH * 0.16),
            hs2 = Math.ceil((p.KT_WIDTH-hs) * 0.33333333333)
            ;

        if (kt.ktLucThan == 'TA') {
            var shapes = [];
            var shx = p.KT_WIDTH * 0.0586;
            var shy = p.KT_WIDTH * 0.03;

            x += hs + hs2;
            y += kt.dongTren ? vs : 0;
            shapes.push(
                paper.path([
                    "M", x, y,
                    "L", x + shx, y,
                    "L", x, y + shy,
                    "L", x, y
                ])
            );
            shapes.push(
                paper.path([
                    "M", x + hs2 - shx, y,
                    "L", x + hs2, y,
                    "L", x + hs2, y + shy,
                    "L", x + hs2 - shx, y
                ])
            );

            y += vs;
            shapes.push(
                paper.path([
                    "M", x, y,
                    "L", x + shx, y,
                    "L", x, y - shy,
                    "L", x, y
                ])
            );
            shapes.push(
                paper.path([
                    "M", x + hs2 - shx, y,
                    "L", x + hs2, y,
                    "L", x + hs2, y - shy,
                    "L", x + hs2 - shx, y
                ])
            );

            // fill
            for (var j=0; j<shapes.length; j++){
                shapes[j].attr('fill', '#000');
            }
        }
    },

    arc: function (center, radius, startAngle, endAngle) {
        angle = startAngle;
        coords = this.toCoords(center, radius, angle);
        path = "M " + coords[0] + " " + coords[1];
        while (angle <= endAngle) {
            coords = this.toCoords(center, radius, angle);
            path += " L " + coords[0] + " " + coords[1];
            angle += 1;
        }
        return path;
    },

    toCoords: function (center, radius, angle) {
        var radians = (angle / 180) * Math.PI;
        var x = center[0] + Math.cos(radians) * radius;
        var y = center[1] + Math.sin(radians) * radius;
        return [x, y];
    },

    viqrToUnicode: function(text){
        // var charset = [
        //     ["A`", "\u00C0"],
        //     ["A'", "\u00C1"],
        //     ["A^", "\u00C2"],
        //     ["A~", "\u00C3"],
        //     ["E`", "\u00C8"],
        //     ["E'", "\u00C9"],
        //     ["E^", "\u00CA"],
        //     ["I`", "\u00CC"],
        //     ["I'", "\u00CD"],
        //     ["O`", "\u00D2"],
        //     ["O'", "\u00D3"],
        //     ["O^", "\u00D4"],
        //     ["O~", "\u00D5"],
        //     ["U`", "\u00D9"],
        //     ["U'", "\u00DA"],
        //     ["Y'", "\u00DD"],
        //     ["a`", "\u00E0"],
        //     ["a'", "\u00E1"],
        //     ["a^", "\u00E2"],
        //     ["a~", "\u00E3"],
        //     ["e`", "\u00E8"],
        //     ["e'", "\u00E9"],
        //     ["e^", "\u00EA"],
        //     ["i`", "\u00EC"],
        //     ["i'", "\u00ED"],
        //     ["o`", "\u00F2"],
        //     ["o'", "\u00F3"],
        //     ["o^", "\u00F4"],
        //     ["o~", "\u00F5"],
        //     ["u`", "\u00F9"],
        //     ["u'", "\u00FA"],
        //     ["y'", "\u00FD"],
        //     ["A(", "\u0102"],
        //     ["a(", "\u0103"],
        //     ["DD", "\u0110"],
        //     ["dd", "\u0111"],
        //     ["I~", "\u0128"],
        //     ["i~", "\u0129"],
        //     ["U~", "\u0168"],
        //     ["u~", "\u0169"],
        //     ["O+", "\u01A0"],
        //     ["o+", "\u01A1"],
        //     ["U+", "\u01AF"],
        //     ["u+", "\u01B0"],
        //     ["A.", "\u1EA0"],
        //     ["a.", "\u1EA1"],
        //     ["A?", "\u1EA2"],
        //     ["a?", "\u1EA3"],
        //     ["A^'", "\u1EA4"],
        //     ["a^'", "\u1EA5"],
        //     ["A^`", "\u1EA6"],
        //     ["a^`", "\u1EA7"],
        //     ["A^?", "\u1EA8"],
        //     ["a^?", "\u1EA9"],
        //     ["A^~", "\u1EAA"],
        //     ["a^~", "\u1EAB"],
        //     ["A^.", "\u1EAC"],
        //     ["a^.", "\u1EAD"],
        //     ["A('", "\u1EAE"],
        //     ["a('", "\u1EAF"],
        //     ["A(`", "\u1EB0"],
        //     ["a(`", "\u1EB1"],
        //     ["A(?", "\u1EB2"],
        //     ["a(?", "\u1EB3"],
        //     ["A(~", "\u1EB4"],
        //     ["a(~", "\u1EB5"],
        //     ["A(.", "\u1EB6"],
        //     ["a(.", "\u1EB7"],
        //     ["E.", "\u1EB8"],
        //     ["e.", "\u1EB9"],
        //     ["E?", "\u1EBA"],
        //     ["e?", "\u1EBB"],
        //     ["E~", "\u1EBC"],
        //     ["e~", "\u1EBD"],
        //     ["E^'", "\u1EBE"],
        //     ["e^'", "\u1EBF"],
        //     ["E^`", "\u1EC0"],
        //     ["e^`", "\u1EC1"],
        //     ["E^?", "\u1EC2"],
        //     ["e^?", "\u1EC3"],
        //     ["E^~", "\u1EC4"],
        //     ["e^~", "\u1EC5"],
        //     ["E^.", "\u1EC6"],
        //     ["e^.", "\u1EC7"],
        //     ["I?", "\u1EC8"],
        //     ["i?", "\u1EC9"],
        //     ["I.", "\u1ECA"],
        //     ["i.", "\u1ECB"],
        //     ["O.", "\u1ECC"],
        //     ["o.", "\u1ECD"],
        //     ["O?", "\u1ECE"],
        //     ["o?", "\u1ECF"],
        //     ["O^'", "\u1ED0"],
        //     ["o^'", "\u1ED1"],
        //     ["O^`", "\u1ED2"],
        //     ["o^`", "\u1ED3"],
        //     ["O^?", "\u1ED4"],
        //     ["o^?", "\u1ED5"],
        //     ["O^~", "\u1ED6"],
        //     ["o^~", "\u1ED7"],
        //     ["O^.", "\u1ED8"],
        //     ["o^.", "\u1ED9"],
        //     ["O+'", "\u1EDA"],
        //     ["o+'", "\u1EDB"],
        //     ["O+`", "\u1EDC"],
        //     ["o+`", "\u1EDD"],
        //     ["O+?", "\u1EDE"],
        //     ["o+?", "\u1EDF"],
        //     ["O+~", "\u1EE0"],
        //     ["o+~", "\u1EE1"],
        //     ["O+.", "\u1EE2"],
        //     ["o+.", "\u1EE3"],
        //     ["U.", "\u1EE4"],
        //     ["u.", "\u1EE5"],
        //     ["U?", "\u1EE6"],
        //     ["u?", "\u1EE7"],
        //     ["U+'", "\u1EE8"],
        //     ["u+'", "\u1EE9"],
        //     ["U+`", "\u1EEA"],
        //     ["u+`", "\u1EEB"],
        //     ["U+?", "\u1EEC"],
        //     ["u+?", "\u1EED"],
        //     ["U+~", "\u1EEE"],
        //     ["u+~", "\u1EEF"],
        //     ["U+.", "\u1EF0"],
        //     ["u+.", "\u1EF1"],
        //     ["Y`", "\u1EF2"],
        //     ["y`", "\u1EF3"],
        //     ["Y.", "\u1EF4"],
        //     ["y.", "\u1EF5"],
        //     ["Y?", "\u1EF6"],
        //     ["y?", "\u1EF7"],
        //     ["Y~", "\u1EF8"],
        //     ["y~", "\u1EF9"]
        // ];

        var charset = [
            ["A`", "\u00C0"],
            ["A'", "\u00C1"],
            ["A\\^", "\u00C2"],
            ["A~", "\u00C3"],
            ["E`", "\u00C8"],
            ["E'", "\u00C9"],
            ["E\\^", "\u00CA"],
            ["I`", "\u00CC"],
            ["I'", "\u00CD"],
            ["O`", "\u00D2"],
            ["O'", "\u00D3"],
            ["O\\^", "\u00D4"],
            ["O~", "\u00D5"],
            ["U`", "\u00D9"],
            ["U'", "\u00DA"],
            ["Y'", "\u00DD"],
            ["a`", "\u00E0"],
            ["a'", "\u00E1"],
            ["a\\^", "\u00E2"],
            ["a~", "\u00E3"],
            ["e`", "\u00E8"],
            ["e'", "\u00E9"],
            ["e\\^", "\u00EA"],
            ["i`", "\u00EC"],
            ["i'", "\u00ED"],
            ["o`", "\u00F2"],
            ["o'", "\u00F3"],
            ["o\\^", "\u00F4"],
            ["o~", "\u00F5"],
            ["u`", "\u00F9"],
            ["u'", "\u00FA"],
            ["y'", "\u00FD"],
            ["A\\(", "\u0102"],
            ["a\\(", "\u0103"],
            ["DD", "\u0110"],
            ["dd", "\u0111"],
            ["I~", "\u0128"],
            ["i~", "\u0129"],
            ["U~", "\u0168"],
            ["u~", "\u0169"],
            ["O\\+", "\u01A0"],
            ["o\\+", "\u01A1"],
            ["U\\+", "\u01AF"],
            ["u\\+", "\u01B0"],
            ["A\\.", "\u1EA0"],
            ["a\\.", "\u1EA1"],
            ["A\\?", "\u1EA2"],
            ["a\\?", "\u1EA3"],
            ["A\\^'", "\u1EA4"],
            ["a\\^'", "\u1EA5"],
            ["A\\^`", "\u1EA6"],
            ["a\\^`", "\u1EA7"],
            ["A\\^\\?", "\u1EA8"],
            ["a\\^\\?", "\u1EA9"],
            ["A\\^~", "\u1EAA"],
            ["a\\^~", "\u1EAB"],
            ["A\\^\\.", "\u1EAC"],
            ["a\\^\\.", "\u1EAD"],
            ["A\\('", "\u1EAE"],
            ["a\\('", "\u1EAF"],
            ["A\\(`", "\u1EB0"],
            ["a\\(`", "\u1EB1"],
            ["A\\(\\?", "\u1EB2"],
            ["a\\(\\?", "\u1EB3"],
            ["A\\(~", "\u1EB4"],
            ["a\\(~", "\u1EB5"],
            ["A\\(\\.", "\u1EB6"],
            ["a\\(\\.", "\u1EB7"],
            ["E\\.", "\u1EB8"],
            ["e\\.", "\u1EB9"],
            ["E\\?", "\u1EBA"],
            ["e\\?", "\u1EBB"],
            ["E~", "\u1EBC"],
            ["e~", "\u1EBD"],
            ["E\\^'", "\u1EBE"],
            ["e\\^'", "\u1EBF"],
            ["E\\^`", "\u1EC0"],
            ["e\\^`", "\u1EC1"],
            ["E\\^\\?", "\u1EC2"],
            ["e\\^\\?", "\u1EC3"],
            ["E\\^~", "\u1EC4"],
            ["e\\^~", "\u1EC5"],
            ["E\\^\\.", "\u1EC6"],
            ["e\\^\\.", "\u1EC7"],
            ["I\\?", "\u1EC8"],
            ["i\\?", "\u1EC9"],
            ["I\\.", "\u1ECA"],
            ["i\\.", "\u1ECB"],
            ["O\\.", "\u1ECC"],
            ["o\\.", "\u1ECD"],
            ["O\\?", "\u1ECE"],
            ["o\\?", "\u1ECF"],
            ["O\\^'", "\u1ED0"],
            ["o\\^'", "\u1ED1"],
            ["O\\^`", "\u1ED2"],
            ["o\\^`", "\u1ED3"],
            ["O\\^\\?", "\u1ED4"],
            ["o\\^\\?", "\u1ED5"],
            ["O\\^~", "\u1ED6"],
            ["o\\^~", "\u1ED7"],
            ["O\\^\\.", "\u1ED8"],
            ["o\\^\\.", "\u1ED9"],
            ["O\\+'", "\u1EDA"],
            ["o\\+'", "\u1EDB"],
            ["O\\+`", "\u1EDC"],
            ["o\\+`", "\u1EDD"],
            ["O\\+\\?", "\u1EDE"],
            ["o\\+\\?", "\u1EDF"],
            ["O\\+~", "\u1EE0"],
            ["o\\+~", "\u1EE1"],
            ["O\\+\\.", "\u1EE2"],
            ["o\\+\\.", "\u1EE3"],
            ["U\\.", "\u1EE4"],
            ["u\\.", "\u1EE5"],
            ["U\\?", "\u1EE6"],
            ["u\\?", "\u1EE7"],
            ["U\\+'", "\u1EE8"],
            ["u\\+'", "\u1EE9"],
            ["U\\+`", "\u1EEA"],
            ["u\\+`", "\u1EEB"],
            ["U\\+\\?", "\u1EEC"],
            ["u\\+\\?", "\u1EED"],
            ["U\\+~", "\u1EEE"],
            ["u\\+~", "\u1EEF"],
            ["U\\+\\.", "\u1EF0"],
            ["u\\+\\.", "\u1EF1"],
            ["Y`", "\u1EF2"],
            ["y`", "\u1EF3"],
            ["Y\\.", "\u1EF4"],
            ["y\\.", "\u1EF5"],
            ["Y\\?", "\u1EF6"],
            ["y\\?", "\u1EF7"],
            ["Y~", "\u1EF8"],
            ["y~", "\u1EF9"]
        ];

        // sort desceding
        charset.sort(function(a, b) {
            if (a[0].length < b[0].length) return 1;
            if (a[0].length > b[0].length) return -1;
            return 0;
        });

        for (var i=0; i<charset.length; i++) {
            var viqr = charset[i][0];
            var uniq = charset[i][1];
            var re = new RegExp(viqr, "g");
            text = text.replace(re, uniq);
        }
        return text;
    }


}