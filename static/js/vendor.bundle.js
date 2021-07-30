/* jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function(c, d) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = c.document ? d(c, !0) : function(
		b) {
		if (!b.document) {
			throw new Error("jQuery requires a window with a document")
		}
		return d(b)
	} : d(c)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = [],
		d = a.document,
		e = c.slice,
		f = c.concat,
		g = c.push,
		h = c.indexOf,
		i = {},
		j = i.toString,
		k = i.hasOwnProperty,
		l = {},
		m = "1.12.4",
		n = function(a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function() {
			return e.call(this)
		},
		get: function(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
		},
		pushStack: function(a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function(a) {
			return n.each(this, a)
		},
		map: function(a) {
			return this.pushStack(n.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function() {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n
			.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
			if (null != (e = arguments[h])) {
				for (d in e) {
					a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ?
						(b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
						g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c))
				}
			}
		}
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(a) {
			throw new Error(a)
		},
		noop: function() {},
		isFunction: function(a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray || function(a) {
			return "array" === n.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			var b = a && a.toString();
			return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) {
				return !1
			}
			return !0
		},
		isPlainObject: function(a) {
			var b;
			if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) {
				return !1
			}
			try {
				if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype,
						"isPrototypeOf")) {
					return !1
				}
			} catch (c) {
				return !1
			}
			if (!l.ownFirst) {
				for (b in a) {
					return k.call(a, b)
				}
			}
			for (b in a) {}
			return void 0 === b || k.call(a, b)
		},
		type: function(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] ||
				"object" : typeof a
		},
		globalEval: function(b) {
			b && n.trim(b) && (a.execScript || function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b) {
			var c, d = 0;
			if (s(a)) {
				for (c = a.length; c > d; d++) {
					if (b.call(a[d], d, a[d]) === !1) {
						break
					}
				}
			} else {
				for (d in a) {
					if (b.call(a[d], d, a[d]) === !1) {
						break
					}
				}
			}
			return a
		},
		trim: function(a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function(a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c,
				a)), c
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (h) {
					return h.call(b, a, c)
				}
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
					if (c in b && b[c] === a) {
						return c
					}
				}
			}
			return -1
		},
		merge: function(a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) {
				a[e++] = b[d++]
			}
			if (c !== c) {
				while (void 0 !== b[d]) {
					a[e++] = b[d++]
				}
			}
			return a.length = e, a
		},
		grep: function(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f])
			}
			return e
		},
		map: function(a, b, c) {
			var d, e, g = 0,
				h = [];
			if (s(a)) {
				for (d = a.length; d > g; g++) {
					e = b(a[g], g, c), null != e && h.push(e)
				}
			} else {
				for (g in a) {
					e = b(a[g], g, c), null != e && h.push(e)
				}
			}
			return f.apply([], h)
		},
		guid: 1,
		proxy: function(a, b) {
			var c, d, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(
				arguments, 2), d = function() {
				return a.apply(b || this, c.concat(e.call(arguments)))
			}, d.guid = a.guid = a.guid || n.guid++, d) : void 0
		},
		now: function() {
			return +new Date
		},
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each(
		"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(a, b) {
			i["[object " + b + "]"] = b.toLowerCase()
		});

	function s(a) {
		var b = !!a && "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 &&
			b - 1 in a
	}
	var t = function(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ga(),
			z = ga(),
			A = ga(),
			B = function(a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function(a, b) {
				for (var c = 0, d = a.length; d > c; c++) {
					if (a[c] === b) {
						return c
					}
				}
				return -1
			},
			K =
			"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L +
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
			O = ":(" + M +
			")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N +
			")*)|.*)\\)|)",
			P = new RegExp(L + "+", "g"),
			Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			R = new RegExp("^" + L + "*," + L + "*"),
			S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			U = new RegExp(O),
			V = new RegExp("^" + M + "$"),
			W = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + N),
				PSEUDO: new RegExp("^" + O),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L +
					"*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)",
					"i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L +
					"*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_ = /[+~]/,
			aa = /'|\\/g,
			ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			ca = function(a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 |
					55296, 1023 & d | 56320)
			},
			da = function() {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (ea) {
			H = {
				apply: E.length ? function(a, b) {
					G.apply(a, I.call(b))
				} : function(a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]) {}
					a.length = c - 1
				}
			}
		}

		function fa(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
				x = b ? b.nodeType : 9;
			if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
				return d
			}
			if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== x && (o = $.exec(a))) {
					if (f = o[1]) {
						if (9 === x) {
							if (!(j = b.getElementById(f))) {
								return d
							}
							if (j.id === f) {
								return d.push(j), d
							}
						} else {
							if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
								return d.push(j), d
							}
						}
					} else {
						if (o[2]) {
							return H.apply(d, b.getElementsByTagName(a)), d
						}
						if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
							return H.apply(d, b.getElementsByClassName(f)), d
						}
					}
				}
				if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== x) {
						w = b, s = a
					} else {
						if ("object" !== b.nodeName.toLowerCase()) {
							(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u),
								r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
							while (h--) {
								r[h] = l + " " + qa(r[h])
							}
							s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
						}
					}
					if (s) {
						try {
							return H.apply(d, w.querySelectorAll(s)), d
						} catch (y) {} finally {
							k === u && b.removeAttribute("id")
						}
					}
				}
			}
			return i(a.replace(Q, "$1"), b, d, e)
		}

		function ga() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ha(a) {
			return a[u] = !0, a
		}

		function ia(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ja(a, b) {
			var c = a.split("|"),
				e = c.length;
			while (e--) {
				d.attrHandle[c[e]] = b
			}
		}

		function ka(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) {
				return d
			}
			if (c) {
				while (c = c.nextSibling) {
					if (c === b) {
						return -1
					}
				}
			}
			return a ? 1 : -1
		}

		function la(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function ma(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function na(a) {
			return ha(function(b) {
				return b = +b, ha(function(c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					}
				})
			})
		}

		function oa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = fa.support = {}, f = fa.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fa.setDocument = function(a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(
					n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener(
					"unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes =
				ia(function(a) {
					return a.className = "i", !a.getAttribute("className")
				}), c.getElementsByTagName = ia(function(a) {
					return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
				}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(
					function(a) {
						return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u)
							.length
					}), c.getById ? (d.find.ID = function(a, b) {
					if ("undefined" != typeof b.getElementById && p) {
						var c = b.getElementById(a);
						return c ? [c] : []
					}
				}, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						return a.getAttribute("id") === b
					}
				}) : (delete d.find.ID, d.filter.ID = function(a) {
					var b = a.replace(ba, ca);
					return function(a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode(
							"id");
						return c && c.value === b
					}
				}), d.find.TAG = c.getElementsByTagName ? function(a, b) {
					return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c
						.qsa ? b.querySelectorAll(a) : void 0
				} : function(a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						while (c = f[e++]) {
							1 === c.nodeType && d.push(c)
						}
						return d
					}
					return f
				}, d.find.CLASS = c.getElementsByClassName && function(a, b) {
					return "undefined" != typeof b.getElementsByClassName && p ? b
						.getElementsByClassName(a) : void 0
				}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
					o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u +
						"-\r\\' msallowcapture=''><option selected=''></option></select>", a
						.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" +
							L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q
						.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" +
							u + "-]").length || q.push("~="), a.querySelectorAll(":checked")
						.length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*")
						.length || q.push(".#.+[+~]")
				}), ia(function(a) {
					var b = n.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name",
						"D"), a.querySelectorAll("[name=d]").length && q.push("name" + L +
							"*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(
							":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
				})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o
					.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(
				a) {
					c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
				}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")),
				b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a
						.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function(a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return !0
							}
						}
					}
					return !1
				}, B = b ? function(a, b) {
					if (a === b) {
						return l = !0, 0
					}
					var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a
						.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b
						.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v,
							a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k,
						a) - J(k, b) : 0 : 4 & d ? -1 : 1)
				} : function(a, b) {
					if (a === b) {
						return l = !0, 0
					}
					var c, d = 0,
						e = a.parentNode,
						f = b.parentNode,
						g = [a],
						h = [b];
					if (!e || !f) {
						return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
					}
					if (e === f) {
						return ka(a, b)
					}
					c = a;
					while (c = c.parentNode) {
						g.unshift(c)
					}
					c = b;
					while (c = c.parentNode) {
						h.unshift(c)
					}
					while (g[d] === h[d]) {
						d++
					}
					return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
				}, n) : n
		}, fa.matches = function(a, b) {
			return fa(a, null, null, b)
		}, fa.matchesSelector = function(a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p &&
				!A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
				try {
					var d = s.call(a, b);
					if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
						return d
					}
				} catch (e) {}
			}
			return fa(b, n, null, [a]).length > 0
		}, fa.contains = function(a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fa.attr = function(a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(
				b)) && f.specified ? f.value : null
		}, fa.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fa.uniqueSort = function(a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f))
				}
				while (e--) {
					a.splice(d[e], 1)
				}
			}
			return k = null, a
		}, e = fa.getText = function(a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) {
						return a.textContent
					}
					for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a)
					}
				} else {
					if (3 === f || 4 === f) {
						return a.nodeValue
					}
				}
			} else {
				while (b = a[d++]) {
					c += e(b)
				}
			}
			return c
		}, d = fa.selectors = {
			cacheLength: 50,
			createPseudo: ha,
			match: W,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba,
						ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[
							0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] ||
							"odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa
						.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c = !a[6] && a[2];
					return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(
							c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) &&
						(a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					var b = a.replace(ba, ca).toLowerCase();
					return "*" === a ? function() {
						return !0
					} : function(a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function(a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a,
						function(a) {
							return b.test("string" == typeof a.className && a.className ||
								"undefined" != typeof a.getAttribute && a.getAttribute(
								"class") || "")
						})
				},
				ATTR: function(a, b, c) {
					return function(d) {
						var e = fa.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" ===
								b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ?
								c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) ===
								c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 :
								"|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) :
							!0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function(a) {
						return !!a.parentNode
					} : function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if (q) {
							if (f) {
								while (p) {
									m = b;
									while (m = m[p]) {
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
											return !1
										}
									}
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m
										.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1],
									t = n && j[2], m = n && q.childNodes[n];
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
								}
							} else {
								if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m
											.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[
										1], t = n), t === !1) {
									while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
										if ((h ? m.nodeName.toLowerCase() === r : 1 === m
											.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k =
												l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [
													w, t
												]), m === b)) {
											break
										}
									}
								}
							}
							return t -= e, t === d || t % d === 0 && t / d >= 0
						}
					}
				},
				PSEUDO: function(a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error(
						"unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(
						a.toLowerCase()) ? ha(function(a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) {
							d = J(a, f[g]), a[d] = !(c[d] = f[g])
						}
					}) : function(a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ha(function(a) {
					var b = [],
						c = [],
						d = h(a.replace(Q, "$1"));
					return d[u] ? ha(function(a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f))
						}
					}) : function(a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ha(function(a) {
					return function(b) {
						return fa(a, b).length > 0
					}
				}),
				contains: ha(function(a) {
					return a = a.replace(ba, ca),
						function(b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ha(function(a) {
					return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba,
							ca).toLowerCase(),
						function(b) {
							var c;
							do {
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute(
										"lang")) {
									return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
								}
							} while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === o
				},
				focus: function(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a
						.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) {
							return !1
						}
					}
					return !0
				},
				parent: function(a) {
					return !d.pseudos.empty(a)
				},
				header: function(a) {
					return Y.test(a.nodeName)
				},
				input: function(a) {
					return X.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a
						.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: na(function() {
					return [0]
				}),
				last: na(function(a, b) {
					return [b - 1]
				}),
				eq: na(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: na(function(a, b) {
					for (var c = 0; b > c; c += 2) {
						a.push(c)
					}
					return a
				}),
				odd: na(function(a, b) {
					for (var c = 1; b > c; c += 2) {
						a.push(c)
					}
					return a
				}),
				lt: na(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) {
						a.push(d)
					}
					return a
				}),
				gt: na(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) {
						a.push(d)
					}
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) {
			d.pseudos[b] = la(b)
		}
		for (b in {
				submit: !0,
				reset: !0
			}) {
			d.pseudos[b] = ma(b)
		}

		function pa() {}
		pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) {
				return b ? 0 : k.slice(0)
			}
			h = a, i = [], j = d.preFilter;
			while (h) {
				c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (
					e = S.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(Q, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) {
					!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
						value: c,
						type: g,
						matches: e
					}), h = h.slice(c.length))
				}
				if (!c) {
					break
				}
			}
			return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
		};

		function qa(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) {
				d += a[b].value
			}
			return d
		}

		function ra(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function(b, c, f) {
				while (b = b[d]) {
					if (1 === b.nodeType || e) {
						return a(b, c, f)
					}
				}
			} : function(b, c, g) {
				var h, i, j, k = [w, f];
				if (g) {
					while (b = b[d]) {
						if ((1 === b.nodeType || e) && a(b, c, g)) {
							return !0
						}
					}
				} else {
					while (b = b[d]) {
						if (1 === b.nodeType || e) {
							if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[
									d]) && h[0] === w && h[1] === f) {
								return k[2] = h[2]
							}
							if (i[d] = k, k[2] = a(b, c, g)) {
								return !0
							}
						}
					}
				}
			}
		}

		function sa(a) {
			return a.length > 1 ? function(b, c, d) {
				var e = a.length;
				while (e--) {
					if (!a[e](b, c, d)) {
						return !1
					}
				}
				return !0
			} : a[0]
		}

		function ta(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) {
				fa(a, b[d], c)
			}
			return c
		}

		function ua(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
				(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)))
			}
			return g
		}

		function va(a, b, c, d, e, f) {
			return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ta(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : ua(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ua(r, n), d(j, [], h, i), k = j.length;
					while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
					}
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--) {
								(l = r[k]) && j.push(q[k] = l)
							}
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--) {
							(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
						}
					}
				} else {
					r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
				}
			})
		}

		function wa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0,
					k = ra(function(a) {
						return a === b
					}, h, !0), l = ra(function(a) {
						return J(b, a) > -1
					}, h, !0), m = [function(a, c, d) {
						var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
						return b = null, e
					}]; f > i; i++) {
				if (c = d.relative[a[i].type]) {
					m = [ra(sa(m), c)]
				} else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) {
							if (d.relative[a[e].type]) {
								break
							}
						}
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
								value: " " === a[i - 2].type ? "*" : ""
							})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(
							e)), f > e && qa(a))
					}
					m.push(c)
				}
			}
			return sa(m)
		}

		function xa(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function(f, g, h, i, k) {
					var l, o, q, r = 0,
						s = "0",
						t = f && [],
						u = [],
						v = j,
						x = f || e && d.find.TAG("*", k),
						y = w += null == v ? 1 : Math.random() || 0.1,
						z = x.length;
					for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
						if (e && l) {
							o = 0, g || l.ownerDocument === n || (m(l), h = !p);
							while (q = a[o++]) {
								if (q(l, g || n, h)) {
									i.push(l);
									break
								}
							}
							k && (w = y)
						}
						c && ((l = !q && l) && r--, f && t.push(l))
					}
					if (r += s, c && s !== r) {
						o = 0;
						while (q = b[o++]) {
							q(t, u, g, h)
						}
						if (f) {
							if (r > 0) {
								while (s--) {
									t[s] || u[s] || (u[s] = F.call(i))
								}
							}
							u = ua(u)
						}
						H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
					}
					return k && (w = y, j = v), t
				};
			return c ? ha(f) : f
		}
		return h = fa.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = A[a + " "];
				if (!f) {
					b || (b = g(a)), c = b.length;
					while (c--) {
						f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
					}
					f = A(a, xa(e, d)), f.selector = a
				}
				return f
			}, i = fa.select = function(a, b, e, f) {
				var i, j, k, l, m, n = "function" == typeof a && a,
					o = !f && g(a = n.selector || a);
				if (e = e || [], 1 === o.length) {
					if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 ===
						b.nodeType && p && d.relative[j[1].type]) {
						if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
							return e
						}
						n && (b = b.parentNode), a = a.slice(j.shift().value.length)
					}
					i = W.needsContext.test(a) ? 0 : j.length;
					while (i--) {
						if (k = j[i], d.relative[l = k.type]) {
							break
						}
						if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b
								.parentNode) || b))) {
							if (j.splice(i, 1), a = f.length && qa(j), !a) {
								return H.apply(e, f), e
							}
							break
						}
					}
				}
				return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
			}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c
			.sortDetached = ia(function(a) {
				return 1 & a.compareDocumentPosition(n.createElement("div"))
			}), ia(function(a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || ja("type|href|height|width", function(a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), c.attributes && ia(function(a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild
					.getAttribute("value")
			}) || ja("value", function(a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), ia(function(a) {
				return null == a.getAttribute("disabled")
			}) || ja(K, function(a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d
					.specified ? d.value : null
			}), fa
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text =
		t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function(a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType) {
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) {
						break
					}
					d.push(a)
				}
			}
			return d
		},
		v = function(a, b) {
			for (var c = []; a; a = a.nextSibling) {
				1 === a.nodeType && a !== b && c.push(a)
			}
			return c
		},
		w = n.expr.match.needsContext,
		x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		y = /^.[^:#\[\.,]*$/;

	function z(a, b, c) {
		if (n.isFunction(b)) {
			return n.grep(a, function(a, d) {
				return !!b.call(a, d, a) !== c
			})
		}
		if (b.nodeType) {
			return n.grep(a, function(a) {
				return a === b !== c
			})
		}
		if ("string" == typeof b) {
			if (y.test(b)) {
				return n.filter(b, a, c)
			}
			b = n.filter(b, a)
		}
		return n.grep(a, function(a) {
			return n.inArray(a, b) > -1 !== c
		})
	}
	n.filter = function(a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ?
			[d] : [] : n.find.matches(a, n.grep(b, function(a) {
				return 1 === a.nodeType
			}))
	}, n.fn.extend({
		find: function(a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) {
				return this.pushStack(n(a).filter(function() {
					for (b = 0; e > b; b++) {
						if (n.contains(d[b], this)) {
							return !0
						}
					}
				}))
			}
			for (b = 0; e > b; b++) {
				n.find(a, d[b], c)
			}
			return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this
				.selector + " " + a : a, c
		},
		filter: function(a) {
			return this.pushStack(z(this, a || [], !1))
		},
		not: function(a) {
			return this.pushStack(z(this, a || [], !0))
		},
		is: function(a) {
			return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
		}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = n.fn.init = function(a, b, c) {
			var e, f;
			if (!a) {
				return this
			}
			if (c = c || A, "string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B
					.exec(a), !e || !e[1] && b) {
					return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
				}
				if (e[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b
							.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
						for (e in b) {
							n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
						}
					}
					return this
				}
				if (f = d.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) {
						return A.find(a)
					}
					this.length = 1, this[0] = f
				}
				return this.context = d, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ?
				"undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a
					.selector, this.context = a.context), n.makeArray(a, this))
		};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/,
		E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.fn.extend({
		has: function(a) {
			var b, c = n(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++) {
					if (n.contains(this, c[b])) {
						return !0
					}
				}
			})
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a,
					b || this.context) : 0; e > d; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find
							.matchesSelector(c, a))) {
						f.push(c);
						break
					}
				}
			}
			return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a,
				this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(a, b) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function F(a, b) {
		do {
			a = a[b]
		} while (a && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return u(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return u(a, "parentNode", c)
		},
		next: function(a) {
			return F(a, "nextSibling")
		},
		prev: function(a) {
			return F(a, "previousSibling")
		},
		nextAll: function(a) {
			return u(a, "nextSibling")
		},
		prevAll: function(a) {
			return u(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return u(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return u(a, "previousSibling", c)
		},
		siblings: function(a) {
			return v((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return v(a.firstChild)
		},
		contents: function(a) {
			return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([],
				a.childNodes)
		}
	}, function(a, b) {
		n.fn[a] = function(c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d,
				e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())),
				this.pushStack(e)
		}
	});
	var G = /\S+/g;

	function H(a) {
		var b = {};
		return n.each(a.match(G) || [], function(a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function(a) {
		a = "string" == typeof a ? H(a) : n.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function() {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) {
						f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
					}
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function() {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						n.each(b, function(b, c) {
							n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c
								.length && "string" !== n.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function() {
					return n.each(arguments, function(a, b) {
						var c;
						while ((c = n.inArray(b, f, c)) > -1) {
							f.splice(c, 1), h >= c && h--
						}
					}), this
				},
				has: function(a) {
					return a ? n.inArray(a, f) > -1 : f.length > 0
				},
				empty: function() {
					return f && (f = []), this
				},
				disable: function() {
					return e = g = [], f = c = "", this
				},
				disabled: function() {
					return !f
				},
				lock: function() {
					return e = !0, c || j.disable(), this
				},
				locked: function() {
					return !!e
				},
				fireWith: function(a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function() {
					return j.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return j
	}, n.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return n.Deferred(function(c) {
							n.each(b, function(b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function() {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a
										.promise().progress(c.notify).done(c
											.resolve).fail(c.reject) : c[f[
											0] + "With"](this === d ? c
											.promise() : this, g ? [a] :
											arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = e.call(arguments),
				d = c.length,
				f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function(a, b, c) {
					return function(d) {
						b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ?
							g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (d > 1) {
				for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
					c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b,
						k, c)).fail(g.reject) : --f
				}
			}
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var I;
	n.fn.ready = function(a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 ||
				(I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off(
					"ready"))))
		}
	});

	function J() {
		d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d
			.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}

	function K() {
		(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
	}
	n.ready.promise = function(b) {
		if (!I) {
			if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d
				.documentElement.doScroll) {
				a.setTimeout(n.ready)
			} else {
				if (d.addEventListener) {
					d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K)
				} else {
					d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
					var c = !1;
					try {
						c = null == a.frameElement && d.documentElement
					} catch (e) {}
					c && c.doScroll && ! function f() {
						if (!n.isReady) {
							try {
								c.doScroll("left")
							} catch (b) {
								return a.setTimeout(f, 50)
							}
							J(), n.ready()
						}
					}()
				}
			}
		}
		return I.promise(b)
	}, n.ready.promise();
	var L;
	for (L in n(l)) {
		break
	}
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
			var a, b, c, e;
			c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d
				.createElement("div"), e.style.cssText =
				"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e)
				.appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText =
					"display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l
					.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c
				.removeChild(e))
		}),
		function() {
			var a = d.createElement("div");
			l.deleteExpando = !0;
			try {
				delete a.test
			} catch (b) {
				l.deleteExpando = !1
			}
			a = null
		}();
	var M = function(a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		},
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(O, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(
						c) ? n.parseJSON(c) : c
				} catch (e) {}
				n.data(a, b, c)
			} else {
				c = void 0
			}
		}
		return c
	}

	function Q(a) {
		var b;
		for (b in a) {
			if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) {
				return !1
			}
		}
		return !0
	}

	function R(a, b, d, e) {
		if (M(a)) {
			var f, g, h = n.expando,
				i = a.nodeType,
				j = i ? n.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
				return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
						toJSON: n.noop
					}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k]
						.data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data),
					void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n
						.camelCase(b)])) : f = g, f
			}
		}
	}

	function S(a, b, c) {
		if (M(a)) {
			var d, e, f = a.nodeType,
				g = f ? n.cache : a,
				h = f ? a[n.expando] : n.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b =
						b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) {
						delete d[b[e]]
					}
					if (c ? !Q(d) : !n.isEmptyObject(d)) {
						return
					}
				}(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g
					.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	n.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(a) {
				return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
			},
			data: function(a, b, c) {
				return R(a, b, c)
			},
			removeData: function(a, b) {
				return S(a, b)
			},
			_data: function(a, b, c) {
				return R(a, b, c, !0)
			},
			_removeData: function(a, b) {
				return S(a, b, !0)
			}
		}), n.fn.extend({
			data: function(a, b) {
				var c, d, e, f = this[0],
					g = f && f.attributes;
				if (void 0 === a) {
					if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
						c = g.length;
						while (c--) {
							g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(
								5)), P(f, d, e[d])))
						}
						n._data(f, "parsedAttrs", !0)
					}
					return e
				}
				return "object" == typeof a ? this.each(function() {
					n.data(this, a)
				}) : arguments.length > 1 ? this.each(function() {
					n.data(this, a, b)
				}) : f ? P(f, a, n.data(f, a)) : void 0
			},
			removeData: function(a) {
				return this.each(function() {
					n.removeData(this, a)
				})
			}
		}), n.extend({
			queue: function(a, b, c) {
				var d;
				return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n
					._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
			},
			dequeue: function(a, b) {
				b = b || "fx";
				var c = n.queue(a, b),
					d = c.length,
					e = c.shift(),
					f = n._queueHooks(a, b),
					g = function() {
						n.dequeue(a, b)
					};
				"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"),
					delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
			},
			_queueHooks: function(a, b) {
				var c = b + "queueHooks";
				return n._data(a, c) || n._data(a, c, {
					empty: n.Callbacks("once memory").add(function() {
						n._removeData(a, b + "queue"), n._removeData(a, c)
					})
				})
			}
		}), n.fn.extend({
			queue: function(a, b) {
				var c = 2;
				return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[
					0], a) : void 0 === b ? this : this.each(function() {
					var c = n.queue(this, a, b);
					n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this,
						a)
				})
			},
			dequeue: function(a) {
				return this.each(function() {
					n.dequeue(this, a)
				})
			},
			clearQueue: function(a) {
				return this.queue(a || "fx", [])
			},
			promise: function(a, b) {
				var c, d = 1,
					e = n.Deferred(),
					f = this,
					g = this.length,
					h = function() {
						--d || e.resolveWith(f, [f])
					};
				"string" != typeof a && (b = a, a = void 0), a = a || "fx";
				while (g--) {
					c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
				}
				return h(), e.promise(b)
			}
		}),
		function() {
			var a;
			l.shrinkWrapBlocks = function() {
				if (null != a) {
					return a
				}
				a = !1;
				var b, c, e;
				return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d
					.createElement("div"), e.style.cssText =
					"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e)
					.appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText =
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
						b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth),
					c.removeChild(e), a) : void 0
			}
		}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
		V = ["Top", "Right", "Bottom", "Left"],
		W = function(a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ? function() {
				return d.cur()
			} : function() {
				return n.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
			k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do {
				f = f || ".5", k /= f, n.style(a, b, k + j)
			} while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d
			.end = e)), e
	}
	var Y = function(a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) {
					Y(a, b, h, c[h], !0, f, g)
				}
			} else {
				if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j =
						b, b = function(a, b, c) {
							return j.call(n(a), c)
						})), b)) {
					for (; i > h; h++) {
						b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
					}
				}
			}
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		Z = /^(?:checkbox|radio)$/i,
		$ = /<([\w:-]+)/,
		_ = /^$|\/(?:java|ecma)script/i,
		aa = /^\s+/,
		ba =
		"abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function ca(a) {
		var b = ba.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement) {
			while (b.length) {
				c.createElement(b.pop())
			}
		}
		return c
	}! function() {
		var a = d.createElement("div"),
			b = d.createDocumentFragment(),
			c = d.createElement("input");
		a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace =
			3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a
			.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav")
			.cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c
			.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild
			.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c
			.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a
			.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1,
			l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

	function ea(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !=
			typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f) {
			for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
				!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b))
			}
		}
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}

	function fa(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) {
			n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
		}
	}
	var ga = /<|&#?\w+;/,
		ha = /<tbody/i;

	function ia(a) {
		Z.test(a.type) && (a.defaultChecked = a.checked)
	}

	function ja(a, b, c, d, e) {
		for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
			if (g = a[r], g || 0 === g) {
				if ("object" === n.type(g)) {
					n.merge(q, g.nodeType ? [g] : g)
				} else {
					if (ga.test(g)) {
						i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1]
						.toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
							f = m[0];
						while (f--) {
							i = i.lastChild
						}
						if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l
							.tbody) {
							g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i
								.firstChild, f = g && g.childNodes.length;
							while (f--) {
								n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
							}
						}
						n.merge(q, i.childNodes), i.textContent = "";
						while (i.firstChild) {
							i.removeChild(i.firstChild)
						}
						i = p.lastChild
					} else {
						q.push(b.createTextNode(g))
					}
				}
			}
		}
		i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
		while (g = q[r++]) {
			if (d && n.inArray(g, d) > -1) {
				e && e.push(g)
			} else {
				if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
					f = 0;
					while (g = i[f++]) {
						_.test(g.type || "") && c.push(g)
					}
				}
			}
		}
		return i = null, p
	}! function() {
		var b, c, e = d.createElement("div");
		for (b in {
				submit: !0,
				change: !0,
				focusin: !0
			}) {
			c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1)
		}
		e = null
	}();
	var ka = /^(?:input|select|textarea)$/i,
		la = /^key/,
		ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		na = /^(?:focusinfocus|focusoutblur)$/,
		oa = /^([^.]*)(?:\.(.+)|)/;

	function pa() {
		return !0
	}

	function qa() {
		return !1
	}

	function ra() {
		try {
			return d.activeElement
		} catch (a) {}
	}

	function sa(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) {
				sa(a, h, c, d, b[h], f)
			}
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d =
				void 0) : (e = d, d = c, c = void 0)), e === !1) {
			e = qa
		} else {
			if (!e) {
				return a
			}
		}
		return 1 === f && (g = e, e = function(a) {
			return n().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
			n.event.add(this, b, e, d, c)
		})
	}
	n.event = {
		global: {},
		add: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r
					.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
					return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n
						.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
				while (h--) {
					f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n
						.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event
						.special[o] || {}, l = n.extend({
							type: o,
							origType: q,
							data: d,
							handler: c,
							guid: c.guid,
							selector: e,
							needsContext: e && n.expr.match.needsContext.test(e),
							namespace: p.join(".")
						}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup
							.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !
								1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add
							.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m
							.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0)
				}
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(G) || [""], j = b.length;
				while (j--) {
					if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[
							o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") +
								"(\\.|$)"), i = f = m.length;
						while (f--) {
							g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g
								.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (
								m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove
								.call(a, g))
						}
						i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n
							.removeEvent(a, o, r.handle), delete k[o])
					} else {
						for (o in k) {
							n.event.remove(a, o + b[j], c, d, !0)
						}
					}
				}
				n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
			}
		},
		trigger: function(b, c, e, f) {
			var g, h, i, j, l, m, o, p = [e || d],
				q = k.call(b, "type") ? b.type : b,
				r = k.call(b, "namespace") ? b.namespace.split(".") : [];
			if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event
				.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q
					.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" ==
						typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b
					.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b
					.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]),
					l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
				if (!f && !l.noBubble && !n.isWindow(e)) {
					for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i
						.parentNode) {
						p.push(i), m = i
					}
					m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
				}
				o = 0;
				while ((i = p[o++]) && !b.isPropagationStopped()) {
					b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n
						._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b
							.result = g.apply(i, c), b.result === !1 && b.preventDefault())
				}
				if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(),
						c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
					m = e[h], m && (e[h] = null), n.event.triggered = q;
					try {
						e[q]()
					} catch (s) {}
					n.event.triggered = void 0, m && (e[h] = m)
				}
				return b.result
			}
		},
		dispatch: function(a) {
			a = n.event.fix(a);
			var b, c, d, f, g, h = [],
				i = e.call(arguments),
				j = (n._data(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
						a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g
							.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f
								.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
								a.stopPropagation()))
					}
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
				for (; i != this; i = i.parentNode || this) {
					if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
						for (d = [], c = 0; h > c; c++) {
							f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e,
									this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d
								.push(f)
						}
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
				}
			}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function(a) {
			if (a[n.expando]) {
				return a
			}
			var b, c, e, f = a.type,
				g = a,
				h = this.fixHooks[f];
			h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
				e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
			while (b--) {
				c = e[b], a[c] = g[c]
			}
			return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a
				.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
			.split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
				.split(" "),
			filter: function(a, b) {
				var c, e, f, g = b.button,
					h = b.fromElement;
				return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e
					.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c
						.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b
					.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c
						.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ?
					b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 &
					g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== ra() && this.focus) {
						try {
							return this.focus(), !1
						} catch (a) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === ra() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this
						.click(), !1) : void 0
				},
				_default: function(a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c) {
			var d = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0
			});
			n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = d.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, n.Event = function(a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this
				.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a
				.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp =
			a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: qa,
		isPropagationStopped: qa,
		isImmediatePropagationStopped: qa,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a
				.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a
				.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler
					.apply(this, arguments), a.type = b), c
			}
		}
	}), l.submit || (n.event.special.submit = {
		setup: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.add(this,
				"click._submit keypress._submit",
				function(a) {
					var b = a.target,
						c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") :
						void 0;
					c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
						a._submitBubble = !0
					}), n._data(c, "submit", !0))
				})
		},
		postDispatch: function(a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event
				.simulate("submit", this.parentNode, a))
		},
		teardown: function() {
			return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
		}
	}), l.change || (n.event.special.change = {
		setup: function() {
			return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n
				.event.add(this, "propertychange._change", function(a) {
					"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
				}), n.event.add(this, "click._change", function(a) {
					this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event
						.simulate("change", this, a)
				})), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b,
					"change._change",
					function(a) {
						!this.parentNode || a.isSimulated || a.isTrigger || n.event
							.simulate("change", this.parentNode, a)
					}), n._data(b, "change", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b
				.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return n.event.remove(this, "._change"), !ka.test(this.nodeName)
		}
	}), l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = function(a) {
			n.event.simulate(b, a.target, n.event.fix(a))
		};
		n.event.special[b] = {
			setup: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b);
				e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
			},
			teardown: function() {
				var d = this.ownerDocument || this,
					e = n._data(d, b) - 1;
				e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
			}
		}
	}), n.fn.extend({
		on: function(a, b, c, d) {
			return sa(this, a, b, c, d)
		},
		one: function(a, b, c, d) {
			return sa(this, a, b, c, d, 1)
		},
		off: function(a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) {
				return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d
					.namespace : d.origType, d.selector, d.handler), this
			}
			if ("object" == typeof a) {
				for (e in a) {
					this.off(e, b, a[e])
				}
				return this
			}
			return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this
				.each(function() {
					n.event.remove(this, a, c, b)
				})
		},
		trigger: function(a, b) {
			return this.each(function() {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g,
		ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
		va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		wa = /<script|<style|<link/i,
		xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ya = /^true\/(.*)/,
		za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Aa = ca(d),
		Ba = Aa.appendChild(d.createElement("div"));

	function Ca(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a
			.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function Da(a) {
		return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
	}

	function Ea(a) {
		var b = ya.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function Fa(a, b) {
		if (1 === b.nodeType && n.hasData(a)) {
			var c, d, e, f = n._data(a),
				g = n._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h) {
					for (d = 0, e = h[c].length; e > d; d++) {
						n.event.add(b, c, h[c][d])
					}
				}
			}
			g.data && (g.data = n.extend({}, g.data))
		}
	}

	function Ga(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
				e = n._data(b);
				for (d in e.events) {
					n.removeEvent(b, d, e.handle)
				}
				b.removeAttribute(n.expando)
			}
			"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (
					b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b
					.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a
					.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b
				.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a
					.defaultValue)
		}
	}

	function Ha(a, b, c, d) {
		b = f.apply([], b);
		var e, g, h, i, j, k, m = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = n.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) {
			return a.each(function(e) {
				var f = a.eq(e);
				r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
			})
		}
		if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e),
				e || d)) {
			for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
				g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m)
			}
			if (h) {
				for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
					g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n
						._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML ||
							"").replace(za, "")))
				}
			}
			k = e = null
		}
		return a
	}

	function Ia(a, b, c) {
		for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
			c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(
				ea(d, "script")), d.parentNode.removeChild(d))
		}
		return a
	}
	n.extend({
		htmlPrefilter: function(a) {
			return a.replace(va, "<$1></$2>")
		},
		clone: function(a, b, c) {
			var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
			if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!
				0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l
					.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n
					.isXMLDoc(a))) {
				for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
					d[g] && Ga(e, d[g])
				}
			}
			if (b) {
				if (c) {
					for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
						Fa(e, d[g])
					}
				} else {
					Fa(a, f)
				}
			}
			return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null,
				f
		},
		cleanData: function(a, b) {
			for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event
					.special; null != (d = a[h]); h++) {
				if ((b || M(d)) && (f = d[i], g = f && j[f])) {
					if (g.events) {
						for (e in g.events) {
							m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle)
						}
					}
					j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 :
						d.removeAttribute(i), c.push(f))
				}
			}
		}
	}), n.fn.extend({
		domManip: Ha,
		detach: function(a) {
			return Ia(this, a, !0)
		},
		remove: function(a) {
			return Ia(this, a)
		},
		text: function(a) {
			return Y(this, function(a) {
				return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0]
					.ownerDocument || d).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function() {
			return Ha(this, arguments, function(a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return Ha(this, arguments, function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && n.cleanData(ea(a, !1));
				while (a.firstChild) {
					a.removeChild(a.firstChild)
				}
				a.options && n.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return n.clone(this, a, b)
			})
		},
		html: function(a) {
			return Y(this, function(a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) {
					return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0
				}
				if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (
						l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1]
						.toLowerCase()]) {
					a = n.htmlPrefilter(a);
					try {
						for (; d > c; c++) {
							b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b
								.innerHTML = a)
						}
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function() {
			var a = [];
			return Ha(this, arguments, function(b) {
				var c = this.parentNode;
				n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		n.fn[a] = function(a) {
			for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
				c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get())
			}
			return this.pushStack(e)
		}
	});
	var Ja, Ka = {
		HTML: "block",
		BODY: "block"
	};

	function La(a, b) {
		var c = n(b.createElement(a)).appendTo(b.body),
			d = n.css(c[0], "display");
		return c.detach(), d
	}

	function Ma(a) {
		var b = d,
			c = Ka[a];
		return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n(
				"<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0]
				.contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja
			.detach()), Ka[a] = c), c
	}
	var Na = /^margin/,
		Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
		Pa = function(a, b, c, d) {
			var e, f, g = {};
			for (f in b) {
				g[f] = a.style[f], a.style[f] = b[f]
			}
			e = c.apply(a, d || []);
			for (f in b) {
				a.style[f] = g[f]
			}
			return e
		},
		Qa = d.documentElement;
	! function() {
		var b, c, e, f, g, h, i = d.createElement("div"),
			j = d.createElement("div");
		if (j.style) {
			j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style
				.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l
				.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style
				.cssText =
				"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j
				.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style
				.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
					reliableHiddenOffsets: function() {
						return null == b && k(), f
					},
					boxSizingReliable: function() {
						return null == b && k(), e
					},
					pixelMarginRight: function() {
						return null == b && k(), c
					},
					pixelPosition: function() {
						return null == b && k(), b
					},
					reliableMarginRight: function() {
						return null == b && k(), g
					},
					reliableMarginLeft: function() {
						return null == b && k(), h
					}
				});

			function k() {
				var k, l, m = d.documentElement;
				m.appendChild(i), j.style.cssText =
					"-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
					b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l ||
						{}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
							width: "4px"
						}).width, j.style.marginRight = "50%", c = "4px" === (l || {
							marginRight: "4px"
						}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style
						.cssText =
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
						k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a
							.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none",
					f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML =
						"<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse =
						"separate", k = j.getElementsByTagName("td"), k[0].style.cssText =
						"margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style
							.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m
					.removeChild(i)
			}
		}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function(b) {
		var c = b.ownerDocument.defaultView;
		return c && c.opener || (c = a), c.getComputedStyle(b)
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n
			.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(
			g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h
				.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g :
			g + ""
	}) : Qa.currentStyle && (Ra = function(a) {
		return a.currentStyle
	}, Sa = function(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !
			Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle
					.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f &&
				(e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function Ua(a, b) {
		return {
			get: function() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Va = /alpha\([^)]*\)/i,
		Wa = /opacity\s*=\s*([^)]*)/i,
		Xa = /^(none|table(?!-c[ea]).+)/,
		Ya = new RegExp("^(" + T + ")(.*)$", "i"),
		Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		$a = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		_a = ["Webkit", "O", "Moz", "ms"],
		ab = d.createElement("div").style;

	function bb(a) {
		if (a in ab) {
			return a
		}
		var b = a.charAt(0).toUpperCase() + a.slice(1),
			c = _a.length;
		while (c--) {
			if (a = _a[c] + b, a in ab) {
				return a
			}
		}
	}

	function cb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
			d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c ||
				(d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay",
					Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ?
				c : n.css(d, "display"))))
		}
		for (g = 0; h > g; g++) {
			d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display =
				b ? f[g] || "" : "none"))
		}
		return a
	}

	function db(a, b, c) {
		var d = Ya.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function eb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
			"margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" +
				V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n
				.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !
					0, e)))
		}
		return g
	}

	function fb(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) {
				return e
			}
			d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = Sa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[
						h], void 0 === c) {
					return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
				}
				if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f =
						"number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n
							.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b
						.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (
							c = g.set(a, c, d))))) {
					try {
						i[b] = c
					} catch (j) {}
				}
			}
		},
		css: function(a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[
				h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)),
				"normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !
					0 || isFinite(e) ? e || 0 : f) : f
		}
	}), n.each(["height", "width"], function(a, b) {
		n.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za,
				function() {
					return fb(a, b, d)
				}) : fb(a, b, d) : void 0
			},
			set: function(a, c, d) {
				var e = d && Ra(a);
				return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a,
					"boxSizing", !1, e), e) : 0)
			}
		}
	}), l.opacity || (n.cssHooks.opacity = {
		get: function(a, b) {
			return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ?
				0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute &&
				(c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f
					.replace(Va, e) : f + " " + e)
		}
	}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
		return b ? Pa(a, {
			display: "inline-block"
		}, Sa, [a, "marginRight"]) : void 0
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
		return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a
			.getBoundingClientRect().left - Pa(a, {
				marginLeft: 0
			}, function() {
				return a.getBoundingClientRect().left
			}) : 0)) + "px" : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		n.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
					e[a + V[d] + b] = f[d] || f[d - 2] || f[0]
				}
				return e
			}
		}, Na.test(a) || (n.cssHooks[a + b].set = db)
	}), n.fn.extend({
		css: function(a, b) {
			return Y(this, function(a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) {
						f[b[g]] = n.css(a, b[g], !1, d)
					}
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function() {
			return cb(this, !0)
		},
		hide: function() {
			return cb(this)
		},
		toggle: function(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
				W(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function gb(a, b, c, d, e) {
		return new gb.prototype.init(a, b, c, d, e)
	}
	n.Tween = gb, gb.prototype = {
		constructor: gb,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this
				.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = gb.propHooks[this.prop];
			return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = gb.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration *
					a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) *
				b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c &&
				c.set ? c.set(this) : gb.propHooks._default.set(this), this
		}
	}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a
					.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n
					.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem,
					a.prop, a.now + a.unit)
			}
		}
	}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return 0.5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/,
		kb = /queueHooks$/;

	function lb() {
		return a.setTimeout(function() {
			hb = void 0
		}), hb = n.now()
	}

	function mb(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
			c = V[e], d["margin" + c] = d["padding" + c] = a
		}
		return b && (d.opacity = d.width = a), d
	}

	function nb(a, b, c) {
		for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
			if (d = e[f].call(c, b, a)) {
				return d
			}
		}
	}

	function ob(a, b, c) {
		var d, e, f, g, h, i, j, k, m = this,
			o = {},
			p = a.style,
			q = a.nodeType && W(a),
			r = n._data(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty
			.fire = function() {
				h.unqueued || i()
			}), h.unqueued++, m.always(function() {
			m.always(function() {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p
				.overflowY
			], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
			"inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a
				.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l
			.shrinkWrapBlocks() || m.always(function() {
				p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
			}));
		for (d in b) {
			if (e = b[d], jb.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
					if ("show" !== e || !r || void 0 === r[d]) {
						continue
					}
					q = !0
				}
				o[d] = r && r[d] || n.style(a, d)
			} else {
				j = void 0
			}
		}
		if (n.isEmptyObject(o)) {
			"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j)
		} else {
			r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a)
			.show() : m.done(function() {
				n(a).hide()
			}), m.done(function() {
				var b;
				n._removeData(a, "fxshow");
				for (b in o) {
					n.style(a, b, o[b])
				}
			});
			for (d in o) {
				g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" ===
					d || "height" === d ? 1 : 0))
			}
		}
	}

	function pb(a, b) {
		var c, d, e, f, g;
		for (c in a) {
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[
					d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) {
					c in a || (a[c] = f[c], b[c] = e)
				}
			} else {
				b[d] = e
			}
		}
	}

	function qb(a, b, c) {
		var d, e, f = 0,
			g = qb.prefilters.length,
			h = n.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				if (e) {
					return !1
				}
				for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f =
						1 - d, g = 0, i = j.tweens.length; i > g; g++) {
					j.tweens[g].run(f)
				}
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: hb || lb(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) {
						return this
					}
					for (e = !0; d > c; c++) {
						j.tweens[c].run(1)
					}
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j,
						b
					]), this
				}
			}),
			k = j.props;
		for (pb(k, j.opts.specialEasing); g > f; f++) {
			if (d = qb.prefilters[f].call(j, a, k, j.opts)) {
				return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
			}
		}
		return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts
			.always)
	}
	n.Animation = n.extend(qb, {
			tweeners: {
				"*": [function(a, b) {
					var c = this.createTween(a, b);
					return X(c.elem, a, U.exec(b), c), c
				}]
			},
			tweener: function(a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
				for (var c, d = 0, e = a.length; e > d; d++) {
					c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
				}
			},
			prefilters: [ob],
			prefilter: function(a, b) {
				b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
			}
		}), n.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx
				.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d
					.queue = "fx"), d.old = d.complete, d.complete = function() {
					n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
				}, d
		}, n.fn.extend({
			fadeTo: function(a, b, c, d) {
				return this.filter(W).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function() {
						var b = qb(this, n.extend({}, a), f);
						(e || n._data(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
				var d = function(a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a ||
					"fx", []), this.each(function() {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = n._data(this);
					if (e) {
						g[e] && g[e].stop && d(g[e])
					} else {
						for (e in g) {
							g[e] && g[e].stop && kb.test(e) && d(g[e])
						}
					}
					for (e = f.length; e--;) {
						f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
							b = !1, f.splice(e, 1))
					}!b && c || n.dequeue(this, a)
				})
			},
			finish: function(a) {
				return a !== !1 && (a = a || "fx"), this.each(function() {
					var b, c = n._data(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0),
						b = f.length; b--;) {
						f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b,
							1))
					}
					for (b = 0; g > b; b++) {
						d[b] && d[b].finish && d[b].finish.call(this)
					}
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function(a, b) {
			var c = n.fn[b];
			n.fn[b] = function(a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !
					0), a, d, e)
			}
		}), n.each({
			slideDown: mb("show"),
			slideUp: mb("hide"),
			slideToggle: mb("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			n.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function() {
			var a, b = n.timers,
				c = 0;
			for (hb = n.now(); c < b.length; c++) {
				a = b[c], a() || b[c] !== a || b.splice(c--, 1)
			}
			b.length || n.fx.stop(), hb = void 0
		}, n.fx.timer = function(a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function() {
			ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function() {
			a.clearInterval(ib), ib = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function(b, c) {
			return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
				var e = a.setTimeout(c, b);
				d.stop = function() {
					a.clearTimeout(e)
				}
			})
		},
		function() {
			var a, b = d.createElement("input"),
				c = d.createElement("div"),
				e = d.createElement("select"),
				f = e.appendChild(d.createElement("option"));
			c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML =
				"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName(
					"a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[
					0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a
					.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b
				.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0,
				l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input =
				"" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue =
				"t" === b.value
		}();
	var rb = /\r/g,
		sb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({
		val: function(a) {
			var b, c, d, e = this[0];
			if (arguments.length) {
				return d = n.isFunction(a), this.each(function(c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null ==
						e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n
							.map(e, function(a) {
								return null == a ? "" : a + ""
							})), b = n.valHooks[this.type] || n.valHooks[this.nodeName
							.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e,
							"value") || (this.value = e))
				})
			}
			if (e) {
				return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in
					b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c
						.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type ||
							0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e :
							0; h > i; i++) {
						if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null ===
								c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c
								.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) {
								return b
							}
							g.push(b)
						}
					}
					return g
				},
				set: function(a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) {
						if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) {
							try {
								d.selected = c = !0
							} catch (h) {
								d.scrollHeight
							}
						} else {
							d.selected = !1
						}
					}
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), n.each(["radio", "checkbox"], function() {
		n.valHooks[this] = {
			set: function(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function(a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var tb, ub, vb = n.expr.attrHandle,
		wb = /^(?:checked|selected)$/i,
		xb = l.getSetAttribute,
		yb = l.input;
	n.fn.extend({
		attr: function(a, b) {
			return Y(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) {
				return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(
						a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(
						b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e &&
					"set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
						c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a,
						b), null == d ? void 0 : d))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
				f = b && b.match(G);
			if (f && 1 === a.nodeType) {
				while (c = f[e++]) {
					d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[
						d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a
						.removeAttribute(xb ? c : d)
				}
			}
		}
	}), ub = {
		set: function(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n
				.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
		var c = vb[b] || n.find.attr;
		yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
			var e, f;
			return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] =
				f), e
		} : vb[b] = function(a, b, c) {
			return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), yb && xb || (n.attrHooks.value = {
		set: function(a, b, c) {
			return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
		}
	}), xb || (tb = {
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "",
				"value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, vb.id = vb.name = vb.coords = function(a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, n.valHooks.button = {
		get: function(a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: tb.set
	}, n.attrHooks.contenteditable = {
		set: function(a, b, c) {
			tb.set(a, "" === b ? !1 : b, c)
		}
	}, n.each(["width", "height"], function(a, b) {
		n.attrHooks[b] = {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), l.style || (n.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || void 0
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	});
	var zb = /^(?:input|select|textarea|button|object)$/i,
		Ab = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function(a, b) {
			return Y(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = n.propFix[a] || a, this.each(function() {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), n.extend({
		prop: function(a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) {
				return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
					void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c :
					e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var b = n.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ?
						0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
		n.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		},
		set: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
		"useMap", "frameBorder", "contentEditable"
	], function() {
		n.propFix[this.toLowerCase()] = this
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;

	function Cb(a) {
		return n.attr(a, "class") || ""
	}
	n.fn.extend({
		addClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) {
				return this.each(function(b) {
					n(this).addClass(a.call(this, b, Cb(this)))
				})
			}
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) {
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++]) {
							d.indexOf(" " + f + " ") < 0 && (d += f + " ")
						}
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
				}
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) {
				return this.each(function(b) {
					n(this).removeClass(a.call(this, b, Cb(this)))
				})
			}
			if (!arguments.length) {
				return this.attr("class", "")
			}
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++]) {
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++]) {
							while (d.indexOf(" " + f + " ") > -1) {
								d = d.replace(" " + f + " ", " ")
							}
						}
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(
				a) : n.isFunction(a) ? this.each(function(c) {
					n(this).toggleClass(a.call(this, c, Cb(this), b), b)
				}) : this.each(function() {
					var b, d, e, f;
					if ("string" === c) {
						d = 0, e = n(this), f = a.match(G) || [];
						while (b = f[d++]) {
							e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
						}
					} else {
						void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this,
							"__className__", b), n.attr(this, "class", b || a === !1 ? "" :
							n._data(this, "__className__") || ""))
					}
				})
		},
		hasClass: function(a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while (c = this[d++]) {
				if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) {
					return !0
				}
			}
			return !1
		}
	}), n.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
		.split(" "),
		function(a, b) {
			n.fn[b] = function(a, c) {
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}
		}), n.fn.extend({
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Db = a.location,
		Eb = n.now(),
		Fb = /\?/,
		Gb =
		/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function(b) {
		if (a.JSON && a.JSON.parse) {
			return a.JSON.parse(b + "")
		}
		var c, d = null,
			e = n.trim(b + "");
		return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}, n.parseXML = function(b) {
		var c, d;
		if (!b || "string" != typeof b) {
			return null
		}
		try {
			a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a
				.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error(
			"Invalid XML: " + b), c
	};
	var Hb = /#.*$/,
		Ib = /([?&])_=[^&]*/,
		Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Lb = /^(?:GET|HEAD)$/,
		Mb = /^\/\//,
		Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Ob = {},
		Pb = {},
		Qb = "*/".concat("*"),
		Rb = Db.href,
		Sb = Nb.exec(Rb.toLowerCase()) || [];

	function Tb(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(G) || [];
			if (n.isFunction(c)) {
				while (d = f[e++]) {
					"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[
						d] || []).push(c)
				}
			}
		}
	}

	function Ub(a, b, c, d) {
		var e = {},
			f = a === Pb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function(a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
					g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Vb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (d in b) {
			void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
		}
		return c && n.extend(!0, a, c), a
	}

	function Wb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) {
			i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
		}
		if (e) {
			for (g in h) {
				if (h[g] && h[g].test(e)) {
					i.unshift(g);
					break
				}
			}
		}
		if (i[0] in c) {
			f = i[0]
		} else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Xb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1]) {
			for (g in a.converters) {
				j[g.toLowerCase()] = a.converters[g]
			}
		}
		f = k.shift();
		while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b,
					a.dataType)), i = f, f = k.shift()) {
				if ("*" === f) {
					f = i
				} else {
					if ("*" !== i && i !== f) {
						if (g = j[i + " " + f] || j["* " + f], !g) {
							for (e in j) {
								if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
									g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
									break
								}
							}
						}
						if (g !== !0) {
							if (g && a["throws"]) {
								b = g(b)
							} else {
								try {
									b = g(b)
								} catch (l) {
									return {
										state: "parsererror",
										error: g ? l : "No conversion from " + i + " to " + f
									}
								}
							}
						}
					}
				}
			}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Rb,
			type: "GET",
			isLocal: Kb.test(Sb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
		},
		ajaxPrefilter: Tb(Ob),
		ajaxTransport: Tb(Pb),
		ajax: function(b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
				m = l.context || l,
				o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
				p = n.Deferred(),
				q = n.Callbacks("once memory"),
				r = l.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(a) {
						var b;
						if (2 === u) {
							if (!k) {
								k = {};
								while (b = Jb.exec(g)) {
									k[b[1].toLowerCase()] = b[2]
								}
							}
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function() {
						return 2 === u ? g : null
					},
					setRequestHeader: function(a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function(a) {
						return u || (l.mimeType = a), this
					},
					statusCode: function(a) {
						var b;
						if (a) {
							if (2 > u) {
								for (b in a) {
									r[b] = [r[b], a[b]]
								}
							} else {
								w.always(a[w.status])
							}
						}
						return this
					},
					abort: function(a) {
						var b = a || v;
						return j && j.abort(b), y(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l
					.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c
				.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase()
				.match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l
					.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[
						1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l
				.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l
					.traditional)), Ub(Ob, l, c, w), 2 === u) {
				return w
			}
			i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l
				.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l
					.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l
					.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(
						f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w
					.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w
					.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l
					.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l
					.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[
					0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb +
					"; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) {
				w.setRequestHeader(e, l.headers[e])
			}
			if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) {
				return w.abort()
			}
			v = "abort";
			for (e in {
					success: 1,
					error: 1,
					complete: 1
				}) {
				w[e](l[e])
			}
			if (j = Ub(Pb, l, c, w)) {
				if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) {
					return w
				}
				l.async && l.timeout > 0 && (h = a.setTimeout(function() {
					w.abort("timeout")
				}, l.timeout));
				try {
					u = 1, j.send(s, y)
				} catch (x) {
					if (!(2 > u)) {
						throw x
					}
					y(-1, x)
				}
			} else {
				y(-1, "No Transport")
			}

			function y(b, c, d, e) {
				var k, s, t, v, x, y = c;
				2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b >
					0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(
						l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
							x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n
								.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" :
						304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !
							t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b,
					w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m,
						[w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" :
						"ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger(
						"ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function(a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function(a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function(a, b) {
		n[b] = function(a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, n.isPlainObject(a) && a))
		}
	}), n._evalUrl = function(a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function(a) {
			if (n.isFunction(a)) {
				return this.each(function(b) {
					n(this).wrapAll(a.call(this, b))
				})
			}
			if (this[0]) {
				var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) {
						a = a.firstChild
					}
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return n.isFunction(a) ? this.each(function(b) {
				n(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = n.isFunction(a);
			return this.each(function(c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	});

	function Yb(a) {
		return a.style && a.style.display || n.css(a, "display")
	}

	function Zb(a) {
		if (!n.contains(a.ownerDocument || d, a)) {
			return !0
		}
		while (a && 1 === a.nodeType) {
			if ("none" === Yb(a) || "hidden" === a.type) {
				return !0
			}
			a = a.parentNode
		}
		return !1
	}
	n.expr.filters.hidden = function(a) {
		return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects()
			.length : Zb(a)
	}, n.expr.filters.visible = function(a) {
		return !n.expr.filters.hidden(a)
	};
	var $b = /%20/g,
		_b = /\[\]$/,
		ac = /\r?\n/g,
		bc = /^(?:submit|button|image|reset|file)$/i,
		cc = /^(?:input|select|textarea|keygen)/i;

	function dc(a, b, c, d) {
		var e;
		if (n.isArray(b)) {
			n.each(b, function(b, e) {
				c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
					e, c, d)
			})
		} else {
			if (c || "object" !== n.type(b)) {
				d(a, b)
			} else {
				for (e in b) {
					dc(a + "[" + e + "]", b[e], c, d)
				}
			}
		}
	}
	n.param = function(a, b) {
		var c, d = [],
			e = function(a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" +
					encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n
			.isPlainObject(a)) {
			n.each(a, function() {
				e(this.name, this.value)
			})
		} else {
			for (c in a) {
				dc(c, a[c], b, e)
			}
		}
		return d.join("&").replace($b, "+")
	}, n.fn.extend({
		serialize: function() {
			return n.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc
					.test(a) && (this.checked || !Z.test(a))
			}).map(function(a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(ac, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(ac, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
		return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(
			this.type) && hc() || ic()
	} : hc;
	var ec = 0,
		fc = {},
		gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
		for (var a in fc) {
			fc[a](void 0, !0)
		}
	}), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
		if (!b.crossDomain || l.cors) {
			var c;
			return {
				send: function(d, e) {
					var f, g = b.xhr(),
						h = ++ec;
					if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
						for (f in b.xhrFields) {
							g[f] = b.xhrFields[f]
						}
					}
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain ||
						d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
					for (f in d) {
						void 0 !== d[f] && g.setRequestHeader(f, d[f] + "")
					}
					g.send(b.hasContent && b.data || null), c = function(a, d) {
							var f, i, j;
							if (c && (d || 4 === g.readyState)) {
								if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) {
									4 !== g.readyState && g.abort()
								} else {
									j = {}, f = g.status, "string" == typeof g.responseText && (j.text =
										g.responseText);
									try {
										i = g.statusText
									} catch (k) {
										i = ""
									}
									f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j
										.text ? 200 : 404
								}
							}
							j && e(f, i, j, g.getAllResponseHeaders())
						}, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[
						h] = c : c()
				},
				abort: function() {
					c && c(void 0, !0)
				}
			}
		}
	});

	function hc() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function ic() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function(a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), n.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var b, c = d.head || n("head")[0] || d.documentElement;
			return {
				send: function(e, f) {
					b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a
						.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(
						a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload =
							b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(
							b), b = null, c || f(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function() {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var jc = [],
		kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = jc.pop() || n.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b
				.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) &&
			"data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b
			.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !
			1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters[
				"script json"] = function() {
				return g || n.error(e + " was not called"), g[0]
			}, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
				g = arguments
			}, d.always(function() {
				void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c
					.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
			}), "script") : void 0
	}), n.parseHTML = function(a, b, c) {
		if (!a || "string" != typeof a) {
			return null
		}
		"boolean" == typeof b && (c = b, b = !1), b = b || d;
		var e = x.exec(a),
			f = !c && [];
		return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e
			.childNodes))
	};
	var lc = n.fn.load;
	n.fn.load = function(a, b, c) {
		if ("string" != typeof a && lc) {
			return lc.apply(this, arguments)
		}
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b =
			void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function(a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).always(c && function(a, b) {
			g.each(function() {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a,
	b) {
		n.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function(a) {
		return n.grep(n.timers, function(b) {
			return a === b.elem
		}).length
	};

	function mc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
		setOffset: function(a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n
				.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
				j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(
					i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m
					.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in
				b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function(a) {
			if (arguments.length) {
				return void 0 === a ? this : this.each(function(b) {
					n.offset.setOffset(this, a, b)
				})
			}
			var b, c, d = {
					top: 0,
					left: 0
				},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) {
				return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e
					.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
						top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
						left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
					}) : d
			}
		},
		position: function() {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this
					.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a
				.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0],
						"borderLeftWidth", !0)), {
					top: b.top - c.top - n.css(d, "marginTop", !0),
					left: b.left - c.left - n.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
					a = a.offsetParent
				}
				return a || Qa
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, b) {
		var c = /Y/.test(b);
		n.fn[a] = function(d) {
			return Y(this, function(a, d, e) {
				var f = mc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] :
					void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) :
						a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), n.each(["top", "left"], function(a, b) {
		n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
			return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function(a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function(c, d) {
			n.fn[d] = function(d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Y(this, function(b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] :
						9 === b.nodeType ? (e = b.documentElement, Math.max(b.body[
								"scroll" + a], e["scroll" + a], b.body["offset" +
							a], e["offset" + a], e["client" + a])) : void 0 === d ? n
						.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.extend({
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), n.fn.size = function() {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [],
function() {
		return n
	});
	var nc = a.jQuery,
		oc = a.$;
	return n.noConflict = function(b) {
		return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
	}, b || (a.jQuery = a.$ = n), n
});
/** Bootstrap v3.3.7 (http://getbootstrap.com) * Copyright 2011-2016 Twitter, Inc.* Licensed under the MIT license*/
if ("undefined" == typeof jQuery) {
	throw new Error("Bootstrap's JavaScript requires jQuery")
} + function(c) {
	var d = c.fn.jquery.split(" ")[0].split(".");
	if (d[0] < 2 && d[1] < 9 || 1 == d[0] && 9 == d[1] && d[2] < 1 || d[0] > 3) {
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
	}
}(jQuery), + function(c) {
	function d() {
		var e = document.createElement("bootstrap"),
			f = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var g in f) {
			if (void 0 !== e.style[g]) {
				return {
					end: f[g]
				}
			}
		}
		return !1
	}
	c.fn.emulateTransitionEnd = function(a) {
		var f = !1,
			g = this;
		c(this).one("bsTransitionEnd", function() {
			f = !0
		});
		var h = function() {
			f || c(g).trigger(c.support.transition.end)
		};
		return setTimeout(h, a), this
	}, c(function() {
		c.support.transition = d(), c.support.transition && (c.event.special.bsTransitionEnd = {
			bindType: c.support.transition.end,
			delegateType: c.support.transition.end,
			handle: function(a) {
				if (c(a.target).is(this)) {
					return a.handleObj.handler.apply(this, arguments)
				}
			}
		})
	})
}(jQuery), + function(f) {
	function g(a) {
		return this.each(function() {
			var b = f(this),
				d = b.data("bs.alert");
			d || b.data("bs.alert", d = new i(this)), "string" == typeof a && d[a].call(b)
		})
	}
	var h = '[data-dismiss="alert"]',
		i = function(a) {
			f(a).on("click", h, this.close)
		};
	i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(a) {
		function d() {
			m.detach().trigger("closed.bs.alert").remove()
		}
		var k = f(this),
			l = k.attr("data-target");
		l || (l = k.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, ""));
		var m = f("#" === l ? [] : l);
		a && a.preventDefault(), m.length || (m = k.closest(".alert")), m.trigger(a = f.Event("close.bs.alert")), a
			.isDefaultPrevented() || (m.removeClass("in"), f.support.transition && m.hasClass("fade") ? m.one(
				"bsTransitionEnd", d).emulateTransitionEnd(i.TRANSITION_DURATION) : d())
	};
	var j = f.fn.alert;
	f.fn.alert = g, f.fn.alert.Constructor = i, f.fn.alert.noConflict = function() {
		return f.fn.alert = j, this
	}, f(document).on("click.bs.alert.data-api", h, i.prototype.close)
}(jQuery), + function(e) {
	function f(a) {
		return this.each(function() {
			var b = e(this),
				c = b.data("bs.button"),
				i = "object" == typeof a && a;
			c || b.data("bs.button", c = new g(this, i)), "toggle" == a ? c.toggle() : a && c.setState(a)
		})
	}
	var g = function(a, c) {
		this.$element = e(a), this.options = e.extend({}, g.DEFAULTS, c), this.isLoading = !1
	};
	g.VERSION = "3.3.7", g.DEFAULTS = {
		loadingText: "loading..."
	}, g.prototype.setState = function(a) {
		var i = "disabled",
			j = this.$element,
			k = j.is("input") ? "val" : "html",
			l = j.data();
		a += "Text", null == l.resetText && j.data("resetText", j[k]()), setTimeout(e.proxy(function() {
			j[k](null == l[a] ? this.options[a] : l[a]), "loadingText" == a ? (this.isLoading = !0, j
				.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, j
				.removeClass(i).removeAttr(i).prop(i, !1))
		}, this), 0)
	}, g.prototype.toggle = function() {
		var d = !0,
			i = this.$element.closest('[data-toggle="buttons"]');
		if (i.length) {
			var j = this.$element.find("input");
			"radio" == j.prop("type") ? (j.prop("checked") && (d = !1), i.find(".active").removeClass("active"),
				this.$element.addClass("active")) : "checkbox" == j.prop("type") && (j.prop("checked") !== this
				.$element.hasClass("active") && (d = !1), this.$element.toggleClass("active")), j.prop(
				"checked", this.$element.hasClass("active")), d && j.trigger("change")
		} else {
			this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass(
				"active")
		}
	};
	var h = e.fn.button;
	e.fn.button = f, e.fn.button.Constructor = g, e.fn.button.noConflict = function() {
		return e.fn.button = h, this
	}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(a) {
		var b = e(a.target).closest(".btn");
		f.call(b, "toggle"), e(a.target).is('input[type="radio"], input[type="checkbox"]') || (a
		.preventDefault(), b.is("input,button") ? b.trigger("focus") : b.find(
			"input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(a) {
		e(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
	})
}(jQuery), + function(f) {
	function g(a) {
		return this.each(function() {
			var b = f(this),
				c = b.data("bs.carousel"),
				k = f.extend({}, h.DEFAULTS, b.data(), "object" == typeof a && a),
				l = "string" == typeof a ? a : k.slide;
			c || b.data("bs.carousel", c = new h(this, k)), "number" == typeof a ? c.to(a) : l ? c[l]() : k
				.interval && c.pause().cycle()
		})
	}
	var h = function(a, d) {
		this.$element = f(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this
			.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this
			.options.keyboard && this.$element.on("keydown.bs.carousel", f.proxy(this.keydown, this)), "hover" ==
			this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on(
				"mouseenter.bs.carousel", f.proxy(this.pause, this)).on("mouseleave.bs.carousel", f.proxy(this
				.cycle, this))
	};
	h.VERSION = "3.3.7", h.TRANSITION_DURATION = 600, h.DEFAULTS = {
		interval: 5000,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, h.prototype.keydown = function(b) {
		if (!/input|textarea/i.test(b.target.tagName)) {
			switch (b.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			b.preventDefault()
		}
	}, h.prototype.cycle = function(a) {
		return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !
			this.paused && (this.interval = setInterval(f.proxy(this.next, this), this.options.interval)), this
	}, h.prototype.getItemIndex = function(b) {
		return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
	}, h.prototype.getItemForDirection = function(k, l) {
		var m = this.getItemIndex(l),
			n = "prev" == k && 0 === m || "next" == k && m == this.$items.length - 1;
		if (n && !this.options.wrap) {
			return l
		}
		var o = "prev" == k ? -1 : 1,
			p = (m + o) % this.$items.length;
		return this.$items.eq(p)
	}, h.prototype.to = function(d) {
		var e = this,
			k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(d > this.$items.length - 1 || d < 0)) {
			return this.sliding ? this.$element.one("slid.bs.carousel", function() {
				e.to(d)
			}) : k == d ? this.pause().cycle() : this.slide(d > k ? "next" : "prev", this.$items.eq(d))
		}
	}, h.prototype.pause = function(a) {
		return a || (this.paused = !0), this.$element.find(".next, .prev").length && f.support.transition && (this
			.$element.trigger(f.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this
			.interval), this
	}, h.prototype.next = function() {
		if (!this.sliding) {
			return this.slide("next")
		}
	}, h.prototype.prev = function() {
		if (!this.sliding) {
			return this.slide("prev")
		}
	}, h.prototype.slide = function(a, c) {
		var n = this.$element.find(".item.active"),
			o = c || this.getItemForDirection(a, n),
			p = this.interval,
			q = "next" == a ? "left" : "right",
			r = this;
		if (o.hasClass("active")) {
			return this.sliding = !1
		}
		var s = o[0],
			t = f.Event("slide.bs.carousel", {
				relatedTarget: s,
				direction: q
			});
		if (this.$element.trigger(t), !t.isDefaultPrevented()) {
			if (this.sliding = !0, p && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var u = f(this.$indicators.children()[this.getItemIndex(o)]);
				u && u.addClass("active")
			}
			var v = f.Event("slid.bs.carousel", {
				relatedTarget: s,
				direction: q
			});
			return f.support.transition && this.$element.hasClass("slide") ? (o.addClass(a), o[0].offsetWidth, n
				.addClass(q), o.addClass(q), n.one("bsTransitionEnd", function() {
					o.removeClass([a, q].join(" ")).addClass("active"), n.removeClass(["active", q].join(
						" ")), r.sliding = !1, setTimeout(function() {
						r.$element.trigger(v)
					}, 0)
				}).emulateTransitionEnd(h.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass(
				"active"), this.sliding = !1, this.$element.trigger(v)), p && this.cycle(), this
		}
	};
	var i = f.fn.carousel;
	f.fn.carousel = g, f.fn.carousel.Constructor = h, f.fn.carousel.noConflict = function() {
		return f.fn.carousel = i, this
	};
	var j = function(a) {
		var b, k = f(this),
			l = f(k.attr("data-target") || (b = k.attr("href")) && b.replace(/.*(?=#[^\s]+$)/, ""));
		if (l.hasClass("carousel")) {
			var m = f.extend({}, l.data(), k.data()),
				n = k.attr("data-slide-to");
			n && (m.interval = !1), g.call(l, m), n && l.data("bs.carousel").to(n), a.preventDefault()
		}
	};
	f(document).on("click.bs.carousel.data-api", "[data-slide]", j).on("click.bs.carousel.data-api", "[data-slide-to]",
		j), f(window).on("load", function() {
		f('[data-ride="carousel"]').each(function() {
			var a = f(this);
			g.call(a, a.data())
		})
	})
}(jQuery), + function(f) {
	function g(a) {
		var e, k = a.attr("data-target") || (e = a.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
		return f(k)
	}

	function h(a) {
		return this.each(function() {
			var b = f(this),
				d = b.data("bs.collapse"),
				k = f.extend({}, i.DEFAULTS, b.data(), "object" == typeof a && a);
			!d && k.toggle && /show|hide/.test(a) && (k.toggle = !1), d || b.data("bs.collapse", d = new i(this,
				k)), "string" == typeof a && d[a]()
		})
	}
	var i = function(a, d) {
		this.$element = f(a), this.options = f.extend({}, i.DEFAULTS, d), this.$trigger = f(
				'[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id +
				'"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this
			.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
		toggle: !0
	}, i.prototype.dimension = function() {
		var b = this.$element.hasClass("width");
		return b ? "width" : "height"
	}, i.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var a, c = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(c && c.length && (a = c.data("bs.collapse"), a && a.transitioning))) {
				var d = f.Event("show.bs.collapse");
				if (this.$element.trigger(d), !d.isDefaultPrevented()) {
					c && c.length && (h.call(c, "hide"), a || c.data("bs.collapse", null));
					var k = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0),
						this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var l = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this
							.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!f.support.transition) {
						return l.call(this)
					}
					var m = f.camelCase(["scroll", k].join("-"));
					this.$element.one("bsTransitionEnd", f.proxy(l, this)).emulateTransitionEnd(i
						.TRANSITION_DURATION)[k](this.$element[0][m])
				}
			}
		}
	}, i.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var a = f.Event("hide.bs.collapse");
			if (this.$element.trigger(a), !a.isDefaultPrevented()) {
				var d = this.dimension();
				this.$element[d](this.$element[d]())[0].offsetHeight, this.$element.addClass("collapsing")
					.removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr(
						"aria-expanded", !1), this.transitioning = 1;
				var k = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse")
						.trigger("hidden.bs.collapse")
				};
				return f.support.transition ? void this.$element[d](0).one("bsTransitionEnd", f.proxy(k, this))
					.emulateTransitionEnd(i.TRANSITION_DURATION) : k.call(this)
			}
		}
	}, i.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, i.prototype.getParent = function() {
		return f(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
			.each(f.proxy(function(a, b) {
				var k = f(b);
				this.addAriaAndCollapsedClass(g(k), k)
			}, this)).end()
	}, i.prototype.addAriaAndCollapsedClass = function(d, e) {
		var k = d.hasClass("in");
		d.attr("aria-expanded", k), e.toggleClass("collapsed", !k).attr("aria-expanded", k)
	};
	var j = f.fn.collapse;
	f.fn.collapse = h, f.fn.collapse.Constructor = i, f.fn.collapse.noConflict = function() {
		return f.fn.collapse = j, this
	}, f(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
		var b = f(this);
		b.attr("data-target") || a.preventDefault();
		var c = g(b),
			k = c.data("bs.collapse"),
			l = k ? "toggle" : b.data();
		h.call(c, l)
	})
}(jQuery), + function(i) {
	function j(a) {
		var e = a.attr("data-target");
		e || (e = a.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = e && i(e);
		return f && f.length ? f : a.parent()
	}

	function k(a) {
		a && 3 === a.which || (i(m).remove(), i(n).each(function() {
			var b = i(this),
				c = j(b),
				g = {
					relatedTarget: this
				};
			c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && i
				.contains(c[0], a.target) || (c.trigger(a = i.Event("hide.bs.dropdown", g)), a
					.isDefaultPrevented() || (b.attr("aria-expanded", "false"), c.removeClass("open")
						.trigger(i.Event("hidden.bs.dropdown", g)))))
		}))
	}

	function l(a) {
		return this.each(function() {
			var b = i(this),
				e = b.data("bs.dropdown");
			e || b.data("bs.dropdown", e = new o(this)), "string" == typeof a && e[a].call(b)
		})
	}
	var m = ".dropdown-backdrop",
		n = '[data-toggle="dropdown"]',
		o = function(a) {
			i(a).on("click.bs.dropdown", this.toggle)
		};
	o.VERSION = "3.3.7", o.prototype.toggle = function(a) {
		var b = i(this);
		if (!b.is(".disabled, :disabled")) {
			var c = j(b),
				q = c.hasClass("open");
			if (k(), !q) {
				"ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && i(document
					.createElement("div")).addClass("dropdown-backdrop").insertAfter(i(this)).on("click", k);
				var r = {
					relatedTarget: this
				};
				if (c.trigger(a = i.Event("show.bs.dropdown", r)), a.isDefaultPrevented()) {
					return
				}
				b.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger(i.Event(
					"shown.bs.dropdown", r))
			}
			return !1
		}
	}, o.prototype.keydown = function(a) {
		if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
			var b = i(this);
			if (a.preventDefault(), a.stopPropagation(), !b.is(".disabled, :disabled")) {
				var f = j(b),
					q = f.hasClass("open");
				if (!q && 27 != a.which || q && 27 == a.which) {
					return 27 == a.which && f.find(n).trigger("focus"), b.trigger("click")
				}
				var r = " li:not(.disabled):visible a",
					s = f.find(".dropdown-menu" + r);
				if (s.length) {
					var t = s.index(a.target);
					38 == a.which && t > 0 && t--, 40 == a.which && t < s.length - 1 && t++, ~t || (t = 0), s.eq(t)
						.trigger("focus")
				}
			}
		}
	};
	var p = i.fn.dropdown;
	i.fn.dropdown = l, i.fn.dropdown.Constructor = o, i.fn.dropdown.noConflict = function() {
		return i.fn.dropdown = p, this
	}, i(document).on("click.bs.dropdown.data-api", k).on("click.bs.dropdown.data-api", ".dropdown form", function(
		b) {
		b.stopPropagation()
	}).on("click.bs.dropdown.data-api", n, o.prototype.toggle).on("keydown.bs.dropdown.data-api", n, o.prototype
		.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(e) {
	function f(a, c) {
		return this.each(function() {
			var b = e(this),
				d = b.data("bs.modal"),
				i = e.extend({}, g.DEFAULTS, b.data(), "object" == typeof a && a);
			d || b.data("bs.modal", d = new g(this, i)), "string" == typeof a ? d[a](c) : i.show && d.show(c)
		})
	}
	var g = function(a, d) {
		this.options = d, this.$body = e(document.body), this.$element = e(a), this.$dialog = this.$element.find(
				".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this
			.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(
				".modal-content").load(this.options.remote, e.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
	};
	g.VERSION = "3.3.7", g.TRANSITION_DURATION = 300, g.BACKDROP_TRANSITION_DURATION = 150, g.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, g.prototype.toggle = function(b) {
		return this.isShown ? this.hide() : this.show(b)
	}, g.prototype.show = function(a) {
		var c = this,
			i = e.Event("show.bs.modal", {
				relatedTarget: a
			});
		this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this
			.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this
			.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide,
				this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
				c.$element.one("mouseup.dismiss.bs.modal", function(d) {
					e(d.target).is(c.$element) && (c.ignoreBackdropClick = !0)
				})
			}), this.backdrop(function() {
				var b = e.support.transition && c.$element.hasClass("fade");
				c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0),
					c.adjustDialog(), b && c.$element[0].offsetWidth, c.$element.addClass("in"), c
					.enforceFocus();
				var d = e.Event("shown.bs.modal", {
					relatedTarget: a
				});
				b ? c.$dialog.one("bsTransitionEnd", function() {
					c.$element.trigger("focus").trigger(d)
				}).emulateTransitionEnd(g.TRANSITION_DURATION) : c.$element.trigger("focus").trigger(d)
			}))
	}, g.prototype.hide = function(a) {
		a && a.preventDefault(), a = e.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a
			.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off(
					"focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off(
					"mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support
				.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this
					.hideModal, this)).emulateTransitionEnd(g.TRANSITION_DURATION) : this.hideModal())
	}, g.prototype.enforceFocus = function() {
		e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(b) {
			document === b.target || this.$element[0] === b.target || this.$element.has(b.target)
				.length || this.$element.trigger("focus")
		}, this))
	}, g.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(b) {
			27 == b.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, g.prototype.resize = function() {
		this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off(
			"resize.bs.modal")
	}, g.prototype.hideModal = function() {
		var b = this;
		this.$element.hide(), this.backdrop(function() {
			b.$body.removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger(
				"hidden.bs.modal")
		})
	}, g.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, g.prototype.backdrop = function(a) {
		var c = this,
			i = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var j = e.support.transition && i;
			if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this
					.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(b) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(b
						.target === b.currentTarget && ("static" == this.options.backdrop ? this
							.$element[0].focus() : this.hide()))
				}, this)), j && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
				return
			}
			j ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION) : a()
		} else {
			if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass("in");
				var k = function() {
					c.removeBackdrop(), a && a()
				};
				e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", k)
					.emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION) : k()
			} else {
				a && a()
			}
		}
	}, g.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, g.prototype.adjustDialog = function() {
		var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
		})
	}, g.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, g.prototype.checkScrollbar = function() {
		var c = window.innerWidth;
		if (!c) {
			var d = document.documentElement.getBoundingClientRect();
			c = d.right - Math.abs(d.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < c, this.scrollbarWidth = this.measureScrollbar()
	}, g.prototype.setScrollbar = function() {
		var b = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css(
			"padding-right", b + this.scrollbarWidth)
	}, g.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, g.prototype.measureScrollbar = function() {
		var c = document.createElement("div");
		c.className = "modal-scrollbar-measure", this.$body.append(c);
		var d = c.offsetWidth - c.clientWidth;
		return this.$body[0].removeChild(c), d
	};
	var h = e.fn.modal;
	e.fn.modal = f, e.fn.modal.Constructor = g, e.fn.modal.noConflict = function() {
		return e.fn.modal = h, this
	}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(a) {
		var b = e(this),
			i = b.attr("href"),
			j = e(b.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
			k = j.data("bs.modal") ? "toggle" : e.extend({
				remote: !/#/.test(i) && i
			}, j.data(), b.data());
		b.is("a") && a.preventDefault(), j.one("show.bs.modal", function(c) {
			c.isDefaultPrevented() || j.one("hidden.bs.modal", function() {
				b.is(":visible") && b.trigger("focus")
			})
		}), f.call(j, k, this)
	})
}(jQuery), + function(e) {
	function f(a) {
		return this.each(function() {
			var b = e(this),
				c = b.data("bs.tooltip"),
				i = "object" == typeof a && a;
			!c && /destroy|hide/.test(a) || (c || b.data("bs.tooltip", c = new g(this, i)), "string" ==
				typeof a && c[a]())
		})
	}
	var g = function(c, d) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null,
			this.$element = null, this.inState = null, this.init("tooltip", c, d)
	};
	g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, g.prototype.init = function(a, j, k) {
		if (this.enabled = !0, this.type = a, this.$element = e(j), this.options = this.getOptions(k), this
			.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport
				.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this
			.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) {
			throw new Error("`selector` option must be specified when initializing " + this.type +
				" on the window.document object!")
		}
		for (var l = this.options.trigger.split(" "), m = l.length; m--;) {
			var n = l[m];
			if ("click" == n) {
				this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this))
			} else {
				if ("manual" != n) {
					var o = "hover" == n ? "mouseenter" : "focusin",
						p = "hover" == n ? "mouseleave" : "focusout";
					this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this
						.$element.on(p + "." + this.type, this.options.selector, e.proxy(this.leave, this))
				}
			}
		}
		this.options.selector ? this._options = e.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, g.prototype.getDefaults = function() {
		return g.DEFAULTS
	}, g.prototype.getOptions = function(a) {
		return a = e.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a
			.delay && (a.delay = {
				show: a.delay,
				hide: a.delay
			}), a
	}, g.prototype.getDelegateOptions = function() {
		var a = {},
			d = this.getDefaults();
		return this._options && e.each(this._options, function(b, c) {
			d[b] != c && (a[b] = c)
		}), a
	}, g.prototype.enter = function(a) {
		var d = a instanceof this.constructor ? a : e(a.currentTarget).data("bs." + this.type);
		return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), e(a.currentTarget).data(
			"bs." + this.type, d)), a instanceof e.Event && (d.inState["focusin" == a.type ? "focus" :
			"hover"] = !0), d.tip().hasClass("in") || "in" == d.hoverState ? void(d.hoverState = "in") : (
			clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void(d
				.timeout = setTimeout(function() {
					"in" == d.hoverState && d.show()
				}, d.options.delay.show)) : d.show())
	}, g.prototype.isInStateTrue = function() {
		for (var b in this.inState) {
			if (this.inState[b]) {
				return !0
			}
		}
		return !1
	}, g.prototype.leave = function(a) {
		var d = a instanceof this.constructor ? a : e(a.currentTarget).data("bs." + this.type);
		if (d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), e(a.currentTarget).data(
				"bs." + this.type, d)), a instanceof e.Event && (d.inState["focusout" == a.type ? "focus" :
				"hover"] = !1), !d.isInStateTrue()) {
			return clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void(d
				.timeout = setTimeout(function() {
					"out" == d.hoverState && d.hide()
				}, d.options.delay.hide)) : d.hide()
		}
	}, g.prototype.show = function() {
		var a = e.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(a);
			var c = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (a.isDefaultPrevented() || !c) {
				return
			}
			var r = this,
				s = this.tip(),
				t = this.getUID(this.type);
			this.setContent(), s.attr("id", t), this.$element.attr("aria-describedby", t), this.options.animation &&
				s.addClass("fade");
			var u = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this
					.$element[0]) : this.options.placement,
				v = /\s?auto?\s?/i,
				w = v.test(u);
			w && (u = u.replace(v, "") || "top"), s.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(u).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options
				.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var x = this.getPosition(),
				y = s[0].offsetWidth,
				z = s[0].offsetHeight;
			if (w) {
				var A = u,
					B = this.getPosition(this.$viewport);
				u = "bottom" == u && x.bottom + z > B.bottom ? "top" : "top" == u && x.top - z < B.top ? "bottom" :
					"right" == u && x.right + y > B.width ? "left" : "left" == u && x.left - y < B.left ? "right" :
					u, s.removeClass(A).addClass(u)
			}
			var C = this.getCalculatedOffset(u, x, y, z);
			this.applyPlacement(C, u);
			var D = function() {
				var b = r.hoverState;
				r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == b && r.leave(r)
			};
			e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", D).emulateTransitionEnd(g
				.TRANSITION_DURATION) : D()
		}
	}, g.prototype.applyPlacement = function(a, o) {
		var p = this.tip(),
			q = p[0].offsetWidth,
			r = p[0].offsetHeight,
			s = parseInt(p.css("margin-top"), 10),
			t = parseInt(p.css("margin-left"), 10);
		isNaN(s) && (s = 0), isNaN(t) && (t = 0), a.top += s, a.left += t, e.offset.setOffset(p[0], e.extend({
			using: function(b) {
				p.css({
					top: Math.round(b.top),
					left: Math.round(b.left)
				})
			}
		}, a), 0), p.addClass("in");
		var u = p[0].offsetWidth,
			v = p[0].offsetHeight;
		"top" == o && v != r && (a.top = a.top + r - v);
		var w = this.getViewportAdjustedDelta(o, a, u, v);
		w.left ? a.left += w.left : a.top += w.top;
		var x = /top|bottom/.test(o),
			y = x ? 2 * w.left - q + u : 2 * w.top - r + v,
			z = x ? "offsetWidth" : "offsetHeight";
		p.offset(a), this.replaceArrow(y, p[0][z], x)
	}, g.prototype.replaceArrow = function(d, i, j) {
		this.arrow().css(j ? "left" : "top", 50 * (1 - d / i) + "%").css(j ? "top" : "left", "")
	}, g.prototype.setContent = function() {
		var c = this.tip(),
			d = this.getTitle();
		c.find(".tooltip-inner")[this.options.html ? "html" : "text"](d), c.removeClass(
			"fade in top bottom left right")
	}, g.prototype.hide = function(a) {
		function c() {
			"in" != i.hoverState && j.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger(
				"hidden.bs." + i.type), a && a()
		}
		var i = this,
			j = e(this.$tip),
			k = e.Event("hide.bs." + this.type);
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			return j.removeClass("in"), e.support.transition && j.hasClass("fade") ? j.one("bsTransitionEnd", c)
				.emulateTransitionEnd(g.TRANSITION_DURATION) : c(), this.hoverState = null, this
		}
	}, g.prototype.fixTitle = function() {
		var b = this.$element;
		(b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b
			.attr("title") || "").attr("title", "")
	}, g.prototype.hasContent = function() {
		return this.getTitle()
	}, g.prototype.getPosition = function(a) {
		a = a || this.$element;
		var j = a[0],
			k = "BODY" == j.tagName,
			l = j.getBoundingClientRect();
		null == l.width && (l = e.extend({}, l, {
			width: l.right - l.left,
			height: l.bottom - l.top
		}));
		var m = window.SVGElement && j instanceof window.SVGElement,
			n = k ? {
				top: 0,
				left: 0
			} : m ? null : a.offset(),
			o = {
				scroll: k ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
			},
			p = k ? {
				width: e(window).width(),
				height: e(window).height()
			} : null;
		return e.extend({}, l, o, p, n)
	}, g.prototype.getCalculatedOffset = function(i, j, k, l) {
		return "bottom" == i ? {
			top: j.top + j.height,
			left: j.left + j.width / 2 - k / 2
		} : "top" == i ? {
			top: j.top - l,
			left: j.left + j.width / 2 - k / 2
		} : "left" == i ? {
			top: j.top + j.height / 2 - l / 2,
			left: j.left - k
		} : {
			top: j.top + j.height / 2 - l / 2,
			left: j.left + j.width
		}
	}, g.prototype.getViewportAdjustedDelta = function(l, m, n, o) {
		var p = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) {
			return p
		}
		var q = this.options.viewport && this.options.viewport.padding || 0,
			r = this.getPosition(this.$viewport);
		if (/right|left/.test(l)) {
			var s = m.top - q - r.scroll,
				t = m.top + q - r.scroll + o;
			s < r.top ? p.top = r.top - s : t > r.top + r.height && (p.top = r.top + r.height - t)
		} else {
			var u = m.left - q,
				v = m.left + q + n;
			u < r.left ? p.left = r.left - u : v > r.right && (p.left = r.left + r.width - v)
		}
		return p
	}, g.prototype.getTitle = function() {
		var d, i = this.$element,
			j = this.options;
		return d = i.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(i[0]) : j.title)
	}, g.prototype.getUID = function(b) {
		do {
			b += ~~(1000000 * Math.random())
		} while (document.getElementById(b));
		return b
	}, g.prototype.tip = function() {
		if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) {
			throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
		}
		return this.$tip
	}, g.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, g.prototype.enable = function() {
		this.enabled = !0
	}, g.prototype.disable = function() {
		this.enabled = !1
	}, g.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, g.prototype.toggle = function(a) {
		var d = this;
		a && (d = e(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this
				.getDelegateOptions()), e(a.currentTarget).data("bs." + this.type, d))), a ? (d.inState.click = !d
				.inState.click, d.isInStateTrue() ? d.enter(d) : d.leave(d)) : d.tip().hasClass("in") ? d.leave(d) :
			d.enter(d)
	}, g.prototype.destroy = function() {
		var b = this;
		clearTimeout(this.timeout), this.hide(function() {
			b.$element.off("." + b.type).removeData("bs." + b.type), b.$tip && b.$tip.detach(), b.$tip =
				null, b.$arrow = null, b.$viewport = null, b.$element = null
		})
	};
	var h = e.fn.tooltip;
	e.fn.tooltip = f, e.fn.tooltip.Constructor = g, e.fn.tooltip.noConflict = function() {
		return e.fn.tooltip = h, this
	}
}(jQuery), + function(e) {
	function f(a) {
		return this.each(function() {
			var b = e(this),
				c = b.data("bs.popover"),
				i = "object" == typeof a && a;
			!c && /destroy|hide/.test(a) || (c || b.data("bs.popover", c = new g(this, i)), "string" ==
				typeof a && c[a]())
		})
	}
	var g = function(c, d) {
		this.init("popover", c, d)
	};
	if (!e.fn.tooltip) {
		throw new Error("Popover requires tooltip.js")
	}
	g.VERSION = "3.3.7", g.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		}), g.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), g.prototype.constructor = g, g.prototype
		.getDefaults = function() {
			return g.DEFAULTS
		}, g.prototype.setContent = function() {
			var d = this.tip(),
				i = this.getTitle(),
				j = this.getContent();
			d.find(".popover-title")[this.options.html ? "html" : "text"](i), d.find(".popover-content").children()
				.detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), d
				.removeClass("fade top bottom left right in"), d.find(".popover-title").html() || d.find(
					".popover-title").hide()
		}, g.prototype.hasContent = function() {
			return this.getTitle() || this.getContent()
		}, g.prototype.getContent = function() {
			var c = this.$element,
				d = this.options;
			return c.attr("data-content") || ("function" == typeof d.content ? d.content.call(c[0]) : d.content)
		}, g.prototype.arrow = function() {
			return this.$arrow = this.$arrow || this.tip().find(".arrow")
		};
	var h = e.fn.popover;
	e.fn.popover = f, e.fn.popover.Constructor = g, e.fn.popover.noConflict = function() {
		return e.fn.popover = h, this
	}
}(jQuery), + function(e) {
	function f(a, b) {
		this.$body = e(document.body), this.$scrollElement = e(e(a).is(document.body) ? window : a), this.options = e
			.extend({}, f.DEFAULTS, b), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [],
			this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on(
				"scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
	}

	function g(a) {
		return this.each(function() {
			var b = e(this),
				c = b.data("bs.scrollspy"),
				i = "object" == typeof a && a;
			c || b.data("bs.scrollspy", c = new f(this, i)), "string" == typeof a && c[a]()
		})
	}
	f.VERSION = "3.3.7", f.DEFAULTS = {
		offset: 10
	}, f.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement
			.scrollHeight)
	}, f.prototype.refresh = function() {
		var a = this,
			i = "offset",
			j = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this
			.$scrollElement[0]) || (i = "position", j = this.$scrollElement.scrollTop()), this.$body.find(this
			.selector).map(function() {
			var c = e(this),
				d = c.data("target") || c.attr("href"),
				k = /^#./.test(d) && e(d);
			return k && k.length && k.is(":visible") && [
				[k[i]().top + j, d]
			] || null
		}).sort(function(c, d) {
			return c[0] - d[0]
		}).each(function() {
			a.offsets.push(this[0]), a.targets.push(this[1])
		})
	}, f.prototype.process = function() {
		var i, j = this.$scrollElement.scrollTop() + this.options.offset,
			k = this.getScrollHeight(),
			l = this.options.offset + k - this.$scrollElement.height(),
			m = this.offsets,
			n = this.targets,
			o = this.activeTarget;
		if (this.scrollHeight != k && this.refresh(), j >= l) {
			return o != (i = n[n.length - 1]) && this.activate(i)
		}
		if (o && j < m[0]) {
			return this.activeTarget = null, this.clear()
		}
		for (i = m.length; i--;) {
			o != n[i] && j >= m[i] && (void 0 === m[i + 1] || j < m[i + 1]) && this.activate(n[i])
		}
	}, f.prototype.activate = function(a) {
		this.activeTarget = a, this.clear();
		var i = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
			j = e(i).parents("li").addClass("active");
		j.parent(".dropdown-menu").length && (j = j.closest("li.dropdown").addClass("active")), j.trigger(
			"activate.bs.scrollspy")
	}, f.prototype.clear = function() {
		e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var h = e.fn.scrollspy;
	e.fn.scrollspy = g, e.fn.scrollspy.Constructor = f, e.fn.scrollspy.noConflict = function() {
		return e.fn.scrollspy = h, this
	}, e(window).on("load.bs.scrollspy.data-api", function() {
		e('[data-spy="scroll"]').each(function() {
			var a = e(this);
			g.call(a, a.data())
		})
	})
}(jQuery), + function(f) {
	function g(a) {
		return this.each(function() {
			var b = f(this),
				c = b.data("bs.tab");
			c || b.data("bs.tab", c = new h(this)), "string" == typeof a && c[a]()
		})
	}
	var h = function(a) {
		this.element = f(a)
	};
	h.VERSION = "3.3.7", h.TRANSITION_DURATION = 150, h.prototype.show = function() {
		var a = this.element,
			k = a.closest("ul:not(.dropdown-menu)"),
			l = a.data("target");
		if (l || (l = a.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass(
			"active")) {
			var m = k.find(".active:last a"),
				n = f.Event("hide.bs.tab", {
					relatedTarget: a[0]
				}),
				o = f.Event("show.bs.tab", {
					relatedTarget: m[0]
				});
			if (m.trigger(n), a.trigger(o), !o.isDefaultPrevented() && !n.isDefaultPrevented()) {
				var p = f(l);
				this.activate(a.closest("li"), k), this.activate(p, p.parent(), function() {
					m.trigger({
						type: "hidden.bs.tab",
						relatedTarget: a[0]
					}), a.trigger({
						type: "shown.bs.tab",
						relatedTarget: m[0]
					})
				})
			}
		}
	}, h.prototype.activate = function(a, c, k) {
		function l() {
			m.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find(
					'[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find(
					'[data-toggle="tab"]').attr("aria-expanded", !0), n ? (a[0].offsetWidth, a.addClass("in")) : a
				.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass(
					"active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), k && k()
		}
		var m = c.find("> .active"),
			n = k && f.support.transition && (m.length && m.hasClass("fade") || !!c.find("> .fade").length);
		m.length && n ? m.one("bsTransitionEnd", l).emulateTransitionEnd(h.TRANSITION_DURATION) : l(), m
			.removeClass("in")
	};
	var i = f.fn.tab;
	f.fn.tab = g, f.fn.tab.Constructor = h, f.fn.tab.noConflict = function() {
		return f.fn.tab = i, this
	};
	var j = function(a) {
		a.preventDefault(), g.call(f(this), "show")
	};
	f(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', j).on("click.bs.tab.data-api",
		'[data-toggle="pill"]', j)
}(jQuery), + function(e) {
	function f(a) {
		return this.each(function() {
			var b = e(this),
				c = b.data("bs.affix"),
				i = "object" == typeof a && a;
			c || b.data("bs.affix", c = new g(this, i)), "string" == typeof a && c[a]()
		})
	}
	var g = function(a, c) {
		this.options = e.extend({}, g.DEFAULTS, c), this.$target = e(this.options.target).on(
				"scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e
				.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(a), this.affixed = null, this
			.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	g.VERSION = "3.3.7", g.RESET = "affix affix-top affix-bottom", g.DEFAULTS = {
		offset: 0,
		target: window
	}, g.prototype.getState = function(k, l, m, n) {
		var o = this.$target.scrollTop(),
			p = this.$element.offset(),
			q = this.$target.height();
		if (null != m && "top" == this.affixed) {
			return o < m && "top"
		}
		if ("bottom" == this.affixed) {
			return null != m ? !(o + this.unpin <= p.top) && "bottom" : !(o + q <= k - n) && "bottom"
		}
		var r = null == this.affixed,
			s = r ? o : p.top,
			t = r ? q : l;
		return null != m && o <= m ? "top" : null != n && s + t >= k - n && "bottom"
	}, g.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) {
			return this.pinnedOffset
		}
		this.$element.removeClass(g.RESET).addClass("affix");
		var c = this.$target.scrollTop(),
			d = this.$element.offset();
		return this.pinnedOffset = d.top - c
	}, g.prototype.checkPositionWithEventLoop = function() {
		setTimeout(e.proxy(this.checkPosition, this), 1)
	}, g.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var a = this.$element.height(),
				c = this.options.offset,
				k = c.top,
				l = c.bottom,
				m = Math.max(e(document).height(), e(document.body).height());
			"object" != typeof c && (l = k = c), "function" == typeof k && (k = c.top(this.$element)), "function" ==
				typeof l && (l = c.bottom(this.$element));
			var n = this.getState(m, a, k, l);
			if (this.affixed != n) {
				null != this.unpin && this.$element.css("top", "");
				var o = "affix" + (n ? "-" + n : ""),
					p = e.Event(o + ".bs.affix");
				if (this.$element.trigger(p), p.isDefaultPrevented()) {
					return
				}
				this.affixed = n, this.unpin = "bottom" == n ? this.getPinnedOffset() : null, this.$element
					.removeClass(g.RESET).addClass(o).trigger(o.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == n && this.$element.offset({
				top: m - a - l
			})
		}
	};
	var h = e.fn.affix;
	e.fn.affix = f, e.fn.affix.Constructor = g, e.fn.affix.noConflict = function() {
		return e.fn.affix = h, this
	}, e(window).on("load", function() {
		e('[data-spy="affix"]').each(function() {
			var a = e(this),
				b = a.data();
			b.offset = b.offset || {}, null != b.offsetBottom && (b.offset.bottom = b.offsetBottom),
				null != b.offsetTop && (b.offset.top = b.offsetTop), f.call(a, b)
		})
	})
}(jQuery);
(function(a) {
	a.fn.counterUp = function(b) {
		var d = a.extend({
				time: 400,
				delay: 10,
				offset: 100,
				beginAt: 0,
				formatter: false,
				context: "window",
				callback: function() {}
			}, b),
			c;
		return this.each(function() {
			var e = a(this),
				f = {
					time: a(this).data("counterup-time") || d.time,
					delay: a(this).data("counterup-delay") || d.delay,
					offset: a(this).data("counterup-offset") || d.offset,
					beginAt: a(this).data("counterup-beginat") || d.beginAt,
					context: a(this).data("counterup-context") || d.context
				};
			var g = function() {
				var u = [];
				var j = f.time / f.delay;
				var t = a(this).attr("data-num") ? a(this).attr("data-num") : e.text();
				var o = /[0-9]+,[0-9]+/.test(t);
				t = t.replace(/,/g, "");
				var h = (t.split(".")[1] || []).length;
				if (f.beginAt > t) {
					f.beginAt = t
				}
				var p = /[0-9]+:[0-9]+:[0-9]+/.test(t);
				if (p) {
					var w = t.split(":"),
						q = 1;
					c = 0;
					while (w.length > 0) {
						c += q * parseInt(w.pop(), 10);
						q *= 60
					}
				}
				for (var n = j; n >= f.beginAt / t * j; n--) {
					var s = parseFloat(t / j * n).toFixed(h);
					if (p) {
						s = parseInt(c / j * n);
						var l = parseInt(s / 3600) % 24;
						var r = parseInt(s / 60) % 60;
						var v = parseInt(s % 60, 10);
						s = (l < 10 ? "0" + l : l) + ":" + (r < 10 ? "0" + r : r) + ":" + (v < 10 ?
							"0" + v : v)
					}
					if (o) {
						while (/(\d+)(\d{3})/.test(s.toString())) {
							s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2")
						}
					}
					if (d.formatter) {
						s = d.formatter.call(this, s)
					}
					u.unshift(s)
				}
				e.data("counterup-nums", u);
				e.text(f.beginAt);
				var k = function() {
					if (!e.data("counterup-nums")) {
						d.callback.call(this);
						return
					}
					e.html(e.data("counterup-nums").shift());
					if (e.data("counterup-nums").length) {
						setTimeout(e.data("counterup-func"), f.delay)
					} else {
						e.data("counterup-nums", null);
						e.data("counterup-func", null);
						d.callback.call(this)
					}
				};
				e.data("counterup-func", k);
				setTimeout(e.data("counterup-func"), f.delay)
			};
			e.waypoint(function(h) {
				g();
				this.destroy()
			}, {
				offset: f.offset + "%",
				context: f.context
			})
		})
	}
})(jQuery);
window.Modernizr = function(A, B, C) {
		function U(b) {
			J.cssText = b
		}

		function V(c, d) {
			return U(prefixes.join(c + ";") + (d || ""))
		}

		function W(c, d) {
			return typeof c === d
		}

		function X(c, d) {
			return !!~("" + c).indexOf(d)
		}

		function Y() {
			E.input = function(d) {
					for (var e = 0, f = d.length; e < f; e++) {
						P[d[e]] = d[e] in K
					}
					return P
				}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), E
				.inputtypes = function(b) {
					for (var c = 0, f, j, k, l = b.length; c < l; c++) {
						K.setAttribute("type", j = b[c]), f = K.type !== "text", f && (K.value = L, K.style.cssText =
							"position:absolute;visibility:hidden;", /^range$/.test(j) && K.style
							.WebkitAppearance !== C ? (F.appendChild(K), k = B.defaultView, f = k
								.getComputedStyle && k.getComputedStyle(K, null).WebkitAppearance !== "textfield" &&
								K.offsetHeight !== 0, F.removeChild(K)) : /^(search|tel)$/.test(j) || (
								/^(url|email)$/.test(j) ? f = K.checkValidity && K.checkValidity() === !1 :
								/^color$/.test(j) ? (F.appendChild(K), F.offsetWidth, f = K.value != L, F
									.removeChild(K)) : f = K.value != L)), O[b[c]] = !!f
					}
					return O
				}("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		var D = "2.0.6",
			E = {},
			F = B.documentElement,
			G = B.head || B.getElementsByTagName("head")[0],
			H = "modernizr",
			I = B.createElement(H),
			J = I.style,
			K = B.createElement("input"),
			L = ":)",
			M = Object.prototype.toString,
			N = {},
			O = {},
			P = {},
			Q = [],
			R, S = {}.hasOwnProperty,
			T;
		!W(S, C) && !W(S.call, C) ? T = function(c, d) {
			return S.call(c, d)
		} : T = function(c, d) {
			return d in c && W(c.constructor.prototype[d], C)
		};
		for (var Z in N) {
			T(N, Z) && (R = Z.toLowerCase(), E[R] = N[Z](), Q.push((E[R] ? "" : "no-") + R))
		}
		return E.input || Y(), E.addTest = function(c, e) {
			if (typeof c == "object") {
				for (var f in c) {
					T(c, f) && E.addTest(f, c[f])
				}
			} else {
				c = c.toLowerCase();
				if (E[c] !== C) {
					return
				}
				e = typeof e == "boolean" ? e : !!e(), F.className += " " + (e ? "" : "no-") + c, E[c] = e
			}
			return E
		}, U(""), I = K = null, E._version = D, E
	}(this, this.document),
	function() {
		var b = Modernizr.input.placeholder = "placeholder" in document.createElement("input");
		b && ((Modernizr.textarea || (Modernizr.textarea = {})).placeholder = "placeholder" in document.createElement(
			"textarea"))
	}();
/* Magnific Popup - v1.1.0 - 2016-02-20 * http://dimsemenov.com/plugins/magnific-popup/ * Copyright (c) 2016 Dmitry Semenov; */
! function(b) {
	"function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require(
		"jquery") : window.jQuery || window.Zepto)
}(function(V) {
	var X, Z, ab, ad, af, ah, aj = "Close",
		al = "BeforeClose",
		an = "AfterClose",
		ap = "BeforeAppend",
		ar = "MarkupParse",
		au = "Open",
		aw = "Change",
		ay = "mfp",
		aA = "." + ay,
		aC = "mfp-ready",
		aE = "mfp-removing",
		aG = "mfp-prevent-close",
		aI = function() {},
		aK = !!window.jQuery,
		aM = V(window),
		aN = function(b, d) {
			X.ev.on(ay + b + aA, d)
		},
		aO = function(a, g, h, i) {
			var j = document.createElement("div");
			return j.className = "mfp-" + a, h && (j.innerHTML = h), i ? g && g.appendChild(j) : (j = V(j), g && j
				.appendTo(g)), j
		},
		aP = function(a, b) {
			X.ev.triggerHandler(ay + a, b), X.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), X.st
				.callbacks[a] && X.st.callbacks[a].apply(X, V.isArray(b) ? b : [b]))
		},
		aQ = function(a) {
			return a === ah && X.currTemplate.closeBtn || (X.currTemplate.closeBtn = V(X.st.closeMarkup.replace(
				"%title%", X.st.tClose)), ah = a), X.currTemplate.closeBtn
		},
		W = function() {
			V.magnificPopup.instance || (X = new aI, X.init(), V.magnificPopup.instance = X)
		},
		Y = function() {
			var c = document.createElement("p").style,
				d = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== c.transition) {
				return !0
			}
			for (; d.length;) {
				if (d.pop() + "Transition" in c) {
					return !0
				}
			}
			return !1
		};
	aI.prototype = {
		constructor: aI,
		init: function() {
			var a = navigator.appVersion;
			X.isLowIE = X.isIE8 = document.all && !document.addEventListener, X.isAndroid = /android/gi
				.test(a), X.isIOS = /iphone|ipad|ipod/gi.test(a), X.supportsTransition = Y(), X
				.probablyMobile = X.isAndroid || X.isIOS ||
				/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator
					.userAgent), ab = V(document), X.popupsCache = {}
		},
		open: function(a) {
			var b;
			if (a.isObj === !1) {
				X.items = a.items.toArray(), X.index = 0;
				var d, f = a.items;
				for (b = 0; b < f.length; b++) {
					if (d = f[b], d.parsed && (d = d.el[0]), d === a.el[0]) {
						X.index = b;
						break
					}
				}
			} else {
				X.items = V.isArray(a.items) ? a.items : [a.items], X.index = a.index || 0
			}
			if (X.isOpen) {
				return void X.updateItemHTML()
			}
			X.types = [], af = "", a.mainEl && a.mainEl.length ? X.ev = a.mainEl.eq(0) : X.ev = ab, a.key ?
				(X.popupsCache[a.key] || (X.popupsCache[a.key] = {}), X.currTemplate = X.popupsCache[a
				.key]) : X.currTemplate = {}, X.st = V.extend(!0, {}, V.magnificPopup.defaults, a), X
				.fixedContentPos = "auto" === X.st.fixedContentPos ? !X.probablyMobile : X.st
				.fixedContentPos, X.st.modal && (X.st.closeOnContentClick = !1, X.st.closeOnBgClick = !1, X
					.st.showCloseBtn = !1, X.st.enableEscapeKey = !1), X.bgOverlay || (X.bgOverlay = aO(
					"bg").on("click" + aA, function() {
					X.close()
				}), X.wrap = aO("wrap").attr("tabindex", -1).on("click" + aA, function(c) {
					X._checkIfClose(c.target) && X.close()
				}), X.container = aO("container", X.wrap)), X.contentContainer = aO("content"), X.st
				.preloader && (X.preloader = aO("preloader", X.container, X.st.tLoading));
			var l = V.magnificPopup.modules;
			for (b = 0; b < l.length; b++) {
				var m = l[b];
				m = m.charAt(0).toUpperCase() + m.slice(1), X["init" + m].call(X)
			}
			aP("BeforeOpen"), X.st.showCloseBtn && (X.st.closeBtnInside ? (aN(ar, function(e, g, h, i) {
					h.close_replaceWith = aQ(i.type)
				}), af += " mfp-close-btn-in") : X.wrap.append(aQ())), X.st.alignTop && (af +=
					" mfp-align-top"), X.fixedContentPos ? X.wrap.css({
					overflow: X.st.overflowY,
					overflowX: "hidden",
					overflowY: X.st.overflowY
				}) : X.wrap.css({
					top: aM.scrollTop(),
					position: "absolute"
				}), (X.st.fixedBgPos === !1 || "auto" === X.st.fixedBgPos && !X.fixedContentPos) && X
				.bgOverlay.css({
					height: ab.height(),
					position: "absolute"
				}), X.st.enableEscapeKey && ab.on("keyup" + aA, function(c) {
					27 === c.keyCode && X.close()
				}), aM.on("resize" + aA, function() {
					X.updateSize()
				}), X.st.closeOnContentClick || (af += " mfp-auto-cursor"), af && X.wrap.addClass(af);
			var p = X.wH = aM.height(),
				q = {};
			if (X.fixedContentPos && X._hasScrollBar(p)) {
				var s = X._getScrollbarSize();
				s && (q.marginRight = s)
			}
			X.fixedContentPos && (X.isIE7 ? V("body, html").css("overflow", "hidden") : q.overflow =
				"hidden");
			var t = X.st.mainClass;
			return X.isIE7 && (t += " mfp-ie7"), t && X._addClassToMFP(t), X.updateItemHTML(), aP(
				"BuildControls"), V("html").css(q), X.bgOverlay.add(X.wrap).prependTo(X.st.prependTo ||
				V(document.body)), X._lastFocusedEl = document.activeElement, setTimeout(function() {
				X.content ? (X._addClassToMFP(aC), X._setFocus()) : X.bgOverlay.addClass(aC), ab.on(
					"focusin" + aA, X._onFocusIn)
			}, 16), X.isOpen = !0, X.updateSize(p), aP(au), a
		},
		close: function() {
			X.isOpen && (aP(al), X.isOpen = !1, X.st.removalDelay && !X.isLowIE && X.supportsTransition ? (X
				._addClassToMFP(aE), setTimeout(function() {
					X._close()
				}, X.st.removalDelay)) : X._close())
		},
		_close: function() {
			aP(aj);
			var a = aE + " " + aC + " ";
			if (X.bgOverlay.detach(), X.wrap.detach(), X.container.empty(), X.st.mainClass && (a += X.st
					.mainClass + " "), X._removeClassFromMFP(a), X.fixedContentPos) {
				var b = {
					marginRight: ""
				};
				X.isIE7 ? V("body, html").css("overflow", "") : b.overflow = "", V("html").css(b)
			}
			ab.off("keyup" + aA + " focusin" + aA), X.ev.off(aA), X.wrap.attr("class", "mfp-wrap")
				.removeAttr("style"), X.bgOverlay.attr("class", "mfp-bg"), X.container.attr("class",
					"mfp-container"), !X.st.showCloseBtn || X.st.closeBtnInside && X.currTemplate[X.currItem
					.type] !== !0 || X.currTemplate.closeBtn && X.currTemplate.closeBtn.detach(), X.st
				.autoFocusLast && X._lastFocusedEl && V(X._lastFocusedEl).focus(), X.currItem = null, X
				.content = null, X.currTemplate = null, X.prevHeight = 0, aP(an)
		},
		updateSize: function(b) {
			if (X.isIOS) {
				var e = document.documentElement.clientWidth / window.innerWidth,
					f = window.innerHeight * e;
				X.wrap.css("height", f), X.wH = f
			} else {
				X.wH = b || aM.height()
			}
			X.fixedContentPos || X.wrap.css("height", X.wH), aP("Resize")
		},
		updateItemHTML: function() {
			var a = X.items[X.index];
			X.contentContainer.detach(), X.content && X.content.detach(), a.parsed || (a = X.parseEl(X
				.index));
			var b = a.type;
			if (aP("BeforeChange", [X.currItem ? X.currItem.type : "", b]), X.currItem = a, !X.currTemplate[
					b]) {
				var e = X.st[b] ? X.st[b].markup : !1;
				aP("FirstMarkupParse", e), e ? X.currTemplate[b] = V(e) : X.currTemplate[b] = !0
			}
			ad && ad !== a.type && X.container.removeClass("mfp-" + ad + "-holder");
			var h = X["get" + b.charAt(0).toUpperCase() + b.slice(1)](a, X.currTemplate[b]);
			X.appendContent(h, b), a.preloaded = !0, aP(aw, a), ad = a.type, X.container.prepend(X
				.contentContainer), aP("AfterChange")
		},
		appendContent: function(b, d) {
			X.content = b, b ? X.st.showCloseBtn && X.st.closeBtnInside && X.currTemplate[d] === !0 ? X
				.content.find(".mfp-close").length || X.content.append(aQ()) : X.content = b : X.content =
				"", aP(ap), X.container.addClass("mfp-" + d + "-holder"), X.contentContainer.append(X
					.content)
		},
		parseEl: function(a) {
			var b, h = X.items[a];
			if (h.tagName ? h = {
					el: V(h)
				} : (b = h.type, h = {
					data: h,
					src: h.src
				}), h.el) {
				for (var i = X.types, j = 0; j < i.length; j++) {
					if (h.el.hasClass("mfp-" + i[j])) {
						b = i[j];
						break
					}
				}
				h.src = h.el.attr("data-mfp-src"), h.src || (h.src = h.el.attr("href"))
			}
			return h.type = b || X.st.type || "inline", h.index = a, h.parsed = !0, X.items[a] = h, aP(
				"ElementParse", h), X.items[a]
		},
		addGroup: function(b, f) {
			var g = function(a) {
				a.mfpEl = this, X._openClick(a, b, f)
			};
			f || (f = {});
			var h = "click.magnificPopup";
			f.mainEl = b, f.items ? (f.isObj = !0, b.off(h).on(h, g)) : (f.isObj = !1, f.delegate ? b.off(h)
				.on(h, f.delegate, g) : (f.items = b, b.off(h).on(h, g)))
		},
		_openClick: function(a, b, h) {
			var i = void 0 !== h.midClick ? h.midClick : V.magnificPopup.defaults.midClick;
			if (i || !(2 === a.which || a.ctrlKey || a.metaKey || a.altKey || a.shiftKey)) {
				var j = void 0 !== h.disableOn ? h.disableOn : V.magnificPopup.defaults.disableOn;
				if (j) {
					if (V.isFunction(j)) {
						if (!j.call(X)) {
							return !0
						}
					} else {
						if (aM.width() < j) {
							return !0
						}
					}
				}
				a.type && (a.preventDefault(), X.isOpen && a.stopPropagation()), h.el = V(a.mfpEl), h
					.delegate && (h.items = b.find(h.delegate)), X.open(h)
			}
		},
		updateStatus: function(b, c) {
			if (X.preloader) {
				Z !== b && X.container.removeClass("mfp-s-" + Z), c || "loading" !== b || (c = X.st
					.tLoading);
				var f = {
					status: b,
					text: c
				};
				aP("UpdateStatus", f), b = f.status, c = f.text, X.preloader.html(c), X.preloader.find("a")
					.on("click", function(d) {
						d.stopImmediatePropagation()
					}), X.container.addClass("mfp-s-" + b), Z = b
			}
		},
		_checkIfClose: function(a) {
			if (!V(a).hasClass(aG)) {
				var b = X.st.closeOnContentClick,
					f = X.st.closeOnBgClick;
				if (b && f) {
					return !0
				}
				if (!X.content || V(a).hasClass("mfp-close") || X.preloader && a === X.preloader[0]) {
					return !0
				}
				if (a === X.content[0] || V.contains(X.content[0], a)) {
					if (b) {
						return !0
					}
				} else {
					if (f && V.contains(document, a)) {
						return !0
					}
				}
				return !1
			}
		},
		_addClassToMFP: function(b) {
			X.bgOverlay.addClass(b), X.wrap.addClass(b)
		},
		_removeClassFromMFP: function(b) {
			this.bgOverlay.removeClass(b), X.wrap.removeClass(b)
		},
		_hasScrollBar: function(b) {
			return (X.isIE7 ? ab.height() : document.body.scrollHeight) > (b || aM.height())
		},
		_setFocus: function() {
			(X.st.focus ? X.content.find(X.st.focus).eq(0) : X.wrap).focus()
		},
		_onFocusIn: function(a) {
			return a.target === X.wrap[0] || V.contains(X.wrap[0], a.target) ? void 0 : (X._setFocus(), !1)
		},
		_parseMarkup: function(a, f, g) {
			var h;
			g.data && (f = V.extend(g.data, f)), aP(ar, [a, f, g]), V.each(f, function(b, e) {
				if (void 0 === e || e === !1) {
					return !0
				}
				if (h = b.split("_"), h.length > 1) {
					var i = a.find(aA + "-" + h[0]);
					if (i.length > 0) {
						var j = h[1];
						"replaceWith" === j ? i[0] !== e[0] && i.replaceWith(e) : "img" === j ? i
							.is("img") ? i.attr("src", e) : i.replaceWith(V("<img>").attr("src", e)
								.attr("class", i.attr("class"))) : i.attr(h[1], e)
					}
				} else {
					a.find(aA + "-" + b).html(e)
				}
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === X.scrollbarSize) {
				var b = document.createElement("div");
				b.style.cssText =
					"width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
					document.body.appendChild(b), X.scrollbarSize = b.offsetWidth - b.clientWidth, document
					.body.removeChild(b)
			}
			return X.scrollbarSize
		}
	}, V.magnificPopup = {
		instance: null,
		proto: aI.prototype,
		modules: [],
		open: function(a, d) {
			return W(), a = a ? V.extend(!0, {}, a) : {}, a.isObj = !0, a.index = d || 0, this.instance
				.open(a)
		},
		close: function() {
			return V.magnificPopup.instance && V.magnificPopup.instance.close()
		},
		registerModule: function(a, d) {
			d.options && (V.magnificPopup.defaults[a] = d.options), V.extend(this.proto, d.proto), this
				.modules.push(a)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, V.fn.magnificPopup = function(a) {
		W();
		var b = V(this);
		if ("string" == typeof a) {
			if ("open" === a) {
				var h, i = aK ? b.data("magnificPopup") : b[0].magnificPopup,
					j = parseInt(arguments[1], 10) || 0;
				i.items ? h = i.items[j] : (h = b, i.delegate && (h = h.find(i.delegate)), h = h.eq(j)), X
					._openClick({
						mfpEl: h
					}, b, i)
			} else {
				X.isOpen && X[a].apply(X, Array.prototype.slice.call(arguments, 1))
			}
		} else {
			a = V.extend(!0, {}, a), aK ? b.data("magnificPopup", a) : b[0].magnificPopup = a, X.addGroup(b, a)
		}
		return b
	};
	var aa, ac, ae, ag = "inline",
		ai = function() {
			ae && (ac.after(ae.addClass(aa)).detach(), ae = null)
		};
	V.magnificPopup.registerModule(ag, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				X.types.push(ag), aN(aj + "." + ag, function() {
					ai()
				})
			},
			getInline: function(a, b) {
				if (ai(), a.src) {
					var h = X.st.inline,
						i = V(a.src);
					if (i.length) {
						var j = i[0].parentNode;
						j && j.tagName && (ac || (aa = h.hiddenClass, ac = aO(aa), aa = "mfp-" + aa),
							ae = i.after(ac).detach().removeClass(aa)), X.updateStatus("ready")
					} else {
						X.updateStatus("error", h.tNotFound), i = V("<div>")
					}
					return a.inlineElement = i, i
				}
				return X.updateStatus("ready"), X._parseMarkup(b, {}, a), b
			}
		}
	});
	var ak, am = "ajax",
		ao = function() {
			ak && V(document.body).removeClass(ak)
		},
		aq = function() {
			ao(), X.req && X.req.abort()
		};
	V.magnificPopup.registerModule(am, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				X.types.push(am), ak = X.st.ajax.cursor, aN(aj + "." + am, aq), aN("BeforeChange." + am,
					aq)
			},
			getAjax: function(a) {
				ak && V(document.body).addClass(ak), X.updateStatus("loading");
				var b = V.extend({
					url: a.src,
					success: function(c, h, i) {
						var j = {
							data: c,
							xhr: i
						};
						aP("ParseAjax", j), X.appendContent(V(j.data), am), a.finished = !0,
							ao(), X._setFocus(), setTimeout(function() {
								X.wrap.addClass(aC)
							}, 16), X.updateStatus("ready"), aP("AjaxContentAdded")
					},
					error: function() {
						ao(), a.finished = a.loadError = !0, X.updateStatus("error", X.st
							.ajax.tError.replace("%url%", a.src))
					}
				}, X.st.ajax.settings);
				return X.req = V.ajax(b), ""
			}
		}
	});
	var at, av = function(a) {
		if (a.data && void 0 !== a.data.title) {
			return a.data.title
		}
		var b = X.st.image.titleSrc;
		if (b) {
			if (V.isFunction(b)) {
				return b.call(X, a)
			}
			if (a.el) {
				return a.el.attr(b) || ""
			}
		}
		return ""
	};
	V.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var a = X.st.image,
					b = ".image";
				X.types.push("image"), aN(au + b, function() {
					"image" === X.currItem.type && a.cursor && V(document.body).addClass(a
						.cursor)
				}), aN(aj + b, function() {
					a.cursor && V(document.body).removeClass(a.cursor), aM.off("resize" + aA)
				}), aN("Resize" + b, X.resizeImage), X.isLowIE && aN("AfterChange", X.resizeImage)
			},
			resizeImage: function() {
				var b = X.currItem;
				if (b && b.img && X.st.image.verticalFit) {
					var d = 0;
					X.isLowIE && (d = parseInt(b.img.css("padding-top"), 10) + parseInt(b.img.css(
						"padding-bottom"), 10)), b.img.css("max-height", X.wH - d)
				}
			},
			_onImageHasSize: function(b) {
				b.img && (b.hasSize = !0, at && clearInterval(at), b.isCheckingImgSize = !1, aP(
					"ImageHasSize", b), b.imgHidden && (X.content && X.content.removeClass(
					"mfp-loading"), b.imgHidden = !1))
			},
			findImageSize: function(b) {
				var f = 0,
					g = b.img[0],
					h = function(a) {
						at && clearInterval(at), at = setInterval(function() {
							return g.naturalWidth > 0 ? void X._onImageHasSize(b) : (f > 200 &&
								clearInterval(at), f++, void(3 === f ? h(10) : 40 === f ? h(
									50) : 100 === f && h(500)))
						}, a)
					};
				h(1)
			},
			getImage: function(a, b) {
				var k = 0,
					l = function() {
						a && (a.img[0].complete ? (a.img.off(".mfploader"), a === X.currItem && (X
								._onImageHasSize(a), X.updateStatus("ready")), a.hasSize = !0, a
							.loaded = !0, aP("ImageLoadComplete")) : (k++, 200 > k ? setTimeout(
							l, 100) : m()))
					},
					m = function() {
						a && (a.img.off(".mfploader"), a === X.currItem && (X._onImageHasSize(a), X
								.updateStatus("error", n.tError.replace("%url%", a.src))), a
							.hasSize = !0, a.loaded = !0, a.loadError = !0)
					},
					n = X.st.image,
					o = b.find(".mfp-img");
				if (o.length) {
					var p = document.createElement("img");
					p.className = "mfp-img", a.el && a.el.find("img").length && (p.alt = a.el.find(
							"img").attr("alt")), a.img = V(p).on("load.mfploader", l).on(
							"error.mfploader", m), p.src = a.src, o.is("img") && (a.img = a.img
					.clone()), p = a.img[0], p.naturalWidth > 0 ? a.hasSize = !0 : p.width || (a
							.hasSize = !1)
				}
				return X._parseMarkup(b, {
					title: av(a),
					img_replaceWith: a.img
				}, a), X.resizeImage(), a.hasSize ? (at && clearInterval(at), a.loadError ? (b
					.addClass("mfp-loading"), X.updateStatus("error", n.tError.replace("%url%",
						a.src))) : (b.removeClass("mfp-loading"), X.updateStatus("ready")), b) : (X
					.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, b
						.addClass("mfp-loading"), X.findImageSize(a)), b)
			}
		}
	});
	var ax, az = function() {
		return void 0 === ax && (ax = void 0 !== document.createElement("p").style.MozTransform), ax
	};
	V.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(b) {
				return b.is("img") ? b : b.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var b, h = X.st.zoom,
					i = ".zoom";
				if (h.enabled && X.supportsTransition) {
					var l, m, n = h.duration,
						o = function(c) {
							var g = c.clone().removeAttr("style").removeAttr("class").addClass(
									"mfp-animated-image"),
								j = "all " + h.duration / 1000 + "s " + h.easing,
								k = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								q = "transition";
							return k["-webkit-" + q] = k["-moz-" + q] = k["-o-" + q] = k[q] = j, g.css(
								k), g
						},
						p = function() {
							X.content.css("visibility", "visible")
						};
					aN("BuildControls" + i, function() {
						if (X._allowZoom()) {
							if (clearTimeout(l), X.content.css("visibility", "hidden"), b = X
								._getItemToZoom(), !b) {
								return void p()
							}
							m = o(b), m.css(X._getOffset()), X.wrap.append(m), l = setTimeout(
								function() {
									m.css(X._getOffset(!0)), l = setTimeout(function() {
										p(), setTimeout(function() {
											m.remove(), b = m = null, aP(
												"ZoomAnimationEnded")
										}, 16)
									}, n)
								}, 16)
						}
					}), aN(al + i, function() {
						if (X._allowZoom()) {
							if (clearTimeout(l), X.st.removalDelay = n, !b) {
								if (b = X._getItemToZoom(), !b) {
									return
								}
								m = o(b)
							}
							m.css(X._getOffset(!0)), X.wrap.append(m), X.content.css(
								"visibility", "hidden"), setTimeout(function() {
								m.css(X._getOffset())
							}, 16)
						}
					}), aN(aj + i, function() {
						X._allowZoom() && (p(), m && m.remove(), b = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === X.currItem.type
			},
			_getItemToZoom: function() {
				return X.currItem.hasSize ? X.currItem.img : !1
			},
			_getOffset: function(a) {
				var b;
				b = a ? X.currItem.img : X.st.zoom.opener(X.currItem.el || X.currItem);
				var i = b.offset(),
					j = parseInt(b.css("padding-top"), 10),
					k = parseInt(b.css("padding-bottom"), 10);
				i.top -= V(window).scrollTop() - j;
				var l = {
					width: b.width(),
					height: (aK ? b.innerHeight() : b[0].offsetHeight) - k - j
				};
				return az() ? l["-moz-transform"] = l.transform = "translate(" + i.left + "px," + i
					.top + "px)" : (l.left = i.left, l.top = i.top), l
			}
		}
	});
	var aB = "iframe",
		aD = "//about:blank",
		aF = function(b) {
			if (X.currTemplate[aB]) {
				var d = X.currTemplate[aB].find("iframe");
				d.length && (b || (d[0].src = aD), X.isIE8 && d.css("display", b ? "block" : "none"))
			}
		};
	V.magnificPopup.registerModule(aB, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				X.types.push(aB), aN("BeforeChange", function(d, e, f) {
					e !== f && (e === aB ? aF() : f === aB && aF(!0))
				}), aN(aj + "." + aB, function() {
					aF()
				})
			},
			getIframe: function(a, b) {
				var h = a.src,
					i = X.st.iframe;
				V.each(i.patterns, function() {
					return h.indexOf(this.index) > -1 ? (this.id && (h = "string" == typeof this
						.id ? h.substr(h.lastIndexOf(this.id) + this.id.length, h
							.length) : this.id.call(this, h)), h = this.src.replace(
						"%id%", h), !1) : void 0
				});
				var j = {};
				return i.srcAction && (j[i.srcAction] = h), X._parseMarkup(b, j, a), X.updateStatus(
					"ready"), b
			}
		}
	});
	var aH = function(b) {
			var d = X.items.length;
			return b > d - 1 ? b - d : 0 > b ? d + b : b
		},
		aJ = function(d, e, f) {
			return d.replace(/%curr%/gi, e + 1).replace(/%total%/gi, f)
		};
	V.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var a = X.st.gallery,
					b = ".mfp-gallery";
				return X.direction = !0, a && a.enabled ? (af += " mfp-gallery", aN(au + b, function() {
					a.navigateByImgClick && X.wrap.on("click" + b, ".mfp-img", function() {
						return X.items.length > 1 ? (X.next(), !1) : void 0
					}), ab.on("keydown" + b, function(c) {
						37 === c.keyCode ? X.prev() : 39 === c.keyCode && X.next()
					})
				}), aN("UpdateStatus" + b, function(d, e) {
					e.text && (e.text = aJ(e.text, X.currItem.index, X.items.length))
				}), aN(ar + b, function(c, h, i, j) {
					var k = X.items.length;
					i.counter = k > 1 ? aJ(a.tCounter, j.index, k) : ""
				}), aN("BuildControls" + b, function() {
					if (X.items.length > 1 && a.arrows && !X.arrowLeft) {
						var c = a.arrowMarkup,
							g = X.arrowLeft = V(c.replace(/%title%/gi, a.tPrev).replace(
								/%dir%/gi, "left")).addClass(aG),
							h = X.arrowRight = V(c.replace(/%title%/gi, a.tNext).replace(
								/%dir%/gi, "right")).addClass(aG);
						g.click(function() {
							X.prev()
						}), h.click(function() {
							X.next()
						}), X.container.append(g.add(h))
					}
				}), aN(aw + b, function() {
					X._preloadTimeout && clearTimeout(X._preloadTimeout), X
						._preloadTimeout = setTimeout(function() {
							X.preloadNearbyImages(), X._preloadTimeout = null
						}, 16)
				}), void aN(aj + b, function() {
					ab.off(b), X.wrap.off("click" + b), X.arrowRight = X.arrowLeft = null
				})) : !1
			},
			next: function() {
				X.direction = !0, X.index = aH(X.index + 1), X.updateItemHTML()
			},
			prev: function() {
				X.direction = !1, X.index = aH(X.index - 1), X.updateItemHTML()
			},
			goTo: function(b) {
				X.direction = b >= X.index, X.index = b, X.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var b, f = X.st.gallery.preload,
					g = Math.min(f[0], X.items.length),
					h = Math.min(f[1], X.items.length);
				for (b = 1; b <= (X.direction ? h : g); b++) {
					X._preloadItem(X.index + b)
				}
				for (b = 1; b <= (X.direction ? g : h); b++) {
					X._preloadItem(X.index - b)
				}
			},
			_preloadItem: function(a) {
				if (a = aH(a), !X.items[a].preloaded) {
					var b = X.items[a];
					b.parsed || (b = X.parseEl(a)), aP("LazyLoad", b), "image" === b.type && (b.img = V(
						'<img class="mfp-img" />').on("load.mfploader", function() {
						b.hasSize = !0
					}).on("error.mfploader", function() {
						b.hasSize = !0, b.loadError = !0, aP("LazyLoadError", b)
					}).attr("src", b.src)), b.preloaded = !0
				}
			}
		}
	});
	var aL = "retina";
	V.magnificPopup.registerModule(aL, {
		options: {
			replaceSrc: function(b) {
				return b.src.replace(/\.\w+$/, function(c) {
					return "@2x" + c
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (window.devicePixelRatio > 1) {
					var b = X.st.retina,
						d = b.ratio;
					d = isNaN(d) ? d() : d, d > 1 && (aN("ImageHasSize." + aL, function(c, e) {
						e.img.css({
							"max-width": e.img[0].naturalWidth / d,
							width: "100%"
						})
					}), aN("ElementParse." + aL, function(a, c) {
						c.src = b.replaceSrc(c, d)
					}))
				}
			}
		}
	}), W()
});
/*Waypoints - 4.0.1 Copyright © 2011-2016 Caleb Troughton Licensed under the MIT license. https://github.com/imakewebthings/waypoints/blob/master/licenses.txt*/
! function() {
	function c(d) {
		if (!d) {
			throw new Error("No options passed to Waypoint constructor")
		}
		if (!d.element) {
			throw new Error("No element option passed to Waypoint constructor")
		}
		if (!d.handler) {
			throw new Error("No handler option passed to Waypoint constructor")
		}
		this.key = "waypoint-" + a, this.options = c.Adapter.extend({}, c.defaults, d), this.element = this.options
			.element, this.adapter = new c.Adapter(this.element), this.callback = d.handler, this.axis = this.options
			.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this
			.group = c.Group.findOrCreate({
				name: this.options.group,
				axis: this.axis
			}), this.context = c.Context.findOrCreateByElement(this.options.context), c.offsetAliases[this.options
				.offset] && (this.options.offset = c.offsetAliases[this.options.offset]), this.group.add(this), this
			.context.add(this), b[this.key] = this, a += 1
	}
	var a = 0,
		b = {};
	c.prototype.queueTrigger = function(d) {
		this.group.queueTrigger(this, d)
	}, c.prototype.trigger = function(d) {
		this.enabled && this.callback && this.callback.apply(this, d)
	}, c.prototype.destroy = function() {
		this.context.remove(this), this.group.remove(this), delete b[this.key]
	}, c.prototype.disable = function() {
		return this.enabled = !1, this
	}, c.prototype.enable = function() {
		return this.context.refresh(), this.enabled = !0, this
	}, c.prototype.next = function() {
		return this.group.next(this)
	}, c.prototype.previous = function() {
		return this.group.previous(this)
	}, c.invokeAll = function(i) {
		var d = [];
		for (var g in b) {
			d.push(b[g])
		}
		for (var f = 0, h = d.length; h > f; f++) {
			d[f][i]()
		}
	}, c.destroyAll = function() {
		c.invokeAll("destroy")
	}, c.disableAll = function() {
		c.invokeAll("disable")
	}, c.enableAll = function() {
		c.Context.refreshAll();
		for (var d in b) {
			b[d].enabled = !0
		}
		return this
	}, c.refreshAll = function() {
		c.Context.refreshAll()
	}, c.viewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight
	}, c.viewportWidth = function() {
		return document.documentElement.clientWidth
	}, c.adapters = [], c.defaults = {
		context: window,
		continuous: !0,
		enabled: !0,
		group: "default",
		horizontal: !1,
		offset: 0
	}, c.offsetAliases = {
		"bottom-in-view": function() {
			return this.context.innerHeight() - this.adapter.outerHeight()
		},
		"right-in-view": function() {
			return this.context.innerWidth() - this.adapter.outerWidth()
		}
	}, window.Waypoint = c
}(),
function() {
	function g(e) {
		window.setTimeout(e, 1000 / 60)
	}

	function a(e) {
		this.element = e, this.Adapter = c.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" +
			b, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
				x: this.adapter.scrollLeft(),
				y: this.adapter.scrollTop()
			}, this.waypoints = {
				vertical: {},
				horizontal: {}
			}, e.waypointContextKey = this.key, d[e.waypointContextKey] = this, b += 1, c.windowContext || (c
				.windowContext = !0, c.windowContext = new a(window)), this.createThrottledScrollHandler(), this
			.createThrottledResizeHandler()
	}
	var b = 0,
		d = {},
		c = window.Waypoint,
		f = window.onload;
	a.prototype.add = function(i) {
		var h = i.options.horizontal ? "horizontal" : "vertical";
		this.waypoints[h][i.key] = i, this.refresh()
	}, a.prototype.checkEmpty = function() {
		var k = this.Adapter.isEmptyObject(this.waypoints.horizontal),
			h = this.Adapter.isEmptyObject(this.waypoints.vertical),
			j = this.element == this.element.window;
		k && h && !j && (this.adapter.off(".waypoints"), delete d[this.key])
	}, a.prototype.createThrottledResizeHandler = function() {
		function i() {
			h.handleResize(), h.didResize = !1
		}
		var h = this;
		this.adapter.on("resize.waypoints", function() {
			h.didResize || (h.didResize = !0, c.requestAnimationFrame(i))
		})
	}, a.prototype.createThrottledScrollHandler = function() {
		function i() {
			h.handleScroll(), h.didScroll = !1
		}
		var h = this;
		this.adapter.on("scroll.waypoints", function() {
			(!h.didScroll || c.isTouch) && (h.didScroll = !0, c.requestAnimationFrame(i))
		})
	}, a.prototype.handleResize = function() {
		c.Context.refreshAll()
	}, a.prototype.handleScroll = function() {
		var C = {},
			m = {
				horizontal: {
					newScroll: this.adapter.scrollLeft(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left"
				},
				vertical: {
					newScroll: this.adapter.scrollTop(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up"
				}
			};
		for (var v in m) {
			var y = m[v],
				x = y.newScroll > y.oldScroll,
				A = x ? y.forward : y.backward;
			for (var B in this.waypoints[v]) {
				var j = this.waypoints[v][B];
				if (null !== j.triggerPoint) {
					var w = y.oldScroll < j.triggerPoint,
						q = y.newScroll >= j.triggerPoint,
						z = w && q,
						D = !w && !q;
					(z || D) && (j.queueTrigger(A), C[j.group.id] = j.group)
				}
			}
		}
		for (var k in C) {
			C[k].flushTriggers()
		}
		this.oldScroll = {
			x: m.horizontal.newScroll,
			y: m.vertical.newScroll
		}
	}, a.prototype.innerHeight = function() {
		return this.element == this.element.window ? c.viewportHeight() : this.adapter.innerHeight()
	}, a.prototype.remove = function(e) {
		delete this.waypoints[e.axis][e.key], this.checkEmpty()
	}, a.prototype.innerWidth = function() {
		return this.element == this.element.window ? c.viewportWidth() : this.adapter.innerWidth()
	}, a.prototype.destroy = function() {
		var m = [];
		for (var h in this.waypoints) {
			for (var j in this.waypoints[h]) {
				m.push(this.waypoints[h][j])
			}
		}
		for (var l = 0, k = m.length; k > l; l++) {
			m[l].destroy()
		}
	}, a.prototype.refresh = function() {
		var F, n = this.element == this.element.window,
			z = n ? void 0 : this.adapter.offset(),
			B = {};
		this.handleScroll(), F = {
			horizontal: {
				contextOffset: n ? 0 : z.left,
				contextScroll: n ? 0 : this.oldScroll.x,
				contextDimension: this.innerWidth(),
				oldScroll: this.oldScroll.x,
				forward: "right",
				backward: "left",
				offsetProp: "left"
			},
			vertical: {
				contextOffset: n ? 0 : z.top,
				contextScroll: n ? 0 : this.oldScroll.y,
				contextDimension: this.innerHeight(),
				oldScroll: this.oldScroll.y,
				forward: "down",
				backward: "up",
				offsetProp: "top"
			}
		};
		for (var D in F) {
			var E = F[D];
			for (var j in this.waypoints[D]) {
				var A, x, C, G, k, m = this.waypoints[D][j],
					q = m.options.offset,
					H = m.triggerPoint,
					I = 0,
					v = null == H;
				m.element !== m.element.window && (I = m.adapter.offset()[E.offsetProp]), "function" == typeof q ?
					q = q.apply(m) : "string" == typeof q && (q = parseFloat(q), m.options.offset.indexOf("%") > -
						1 && (q = Math.ceil(E.contextDimension * q / 100))), A = E.contextScroll - E.contextOffset,
					m.triggerPoint = Math.floor(I + A - q), x = H < E.oldScroll, C = m.triggerPoint >= E.oldScroll,
					G = x && C, k = !x && !C, !v && G ? (m.queueTrigger(E.backward), B[m.group.id] = m.group) : !
					v && k ? (m.queueTrigger(E.forward), B[m.group.id] = m.group) : v && E.oldScroll >= m
					.triggerPoint && (m.queueTrigger(E.forward), B[m.group.id] = m.group)
			}
		}
		return c.requestAnimationFrame(function() {
			for (var e in B) {
				B[e].flushTriggers()
			}
		}), this
	}, a.findOrCreateByElement = function(e) {
		return a.findByElement(e) || new a(e)
	}, a.refreshAll = function() {
		for (var e in d) {
			d[e].refresh()
		}
	}, a.findByElement = function(e) {
		return d[e.waypointContextKey]
	}, window.onload = function() {
		f && f(), a.refreshAll()
	}, c.requestAnimationFrame = function(h) {
		var j = window.requestAnimationFrame || window.mozRequestAnimationFrame || window
			.webkitRequestAnimationFrame || g;
		j.call(window, h)
	}, c.Context = a
}(),
function() {
	function f(h, g) {
		return h.triggerPoint - g.triggerPoint
	}

	function a(h, g) {
		return g.triggerPoint - h.triggerPoint
	}

	function b(e) {
		this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this
			.clearTriggerQueues(), d[this.axis][this.name] = this
	}
	var d = {
			vertical: {},
			horizontal: {}
		},
		c = window.Waypoint;
	b.prototype.add = function(e) {
		this.waypoints.push(e)
	}, b.prototype.clearTriggerQueues = function() {
		this.triggerQueues = {
			up: [],
			down: [],
			left: [],
			right: []
		}
	}, b.prototype.flushTriggers = function() {
		for (var g in this.triggerQueues) {
			var j = this.triggerQueues[g],
				h = "up" === g || "left" === g;
			j.sort(h ? a : f);
			for (var k = 0, l = j.length; l > k; k += 1) {
				var e = j[k];
				(e.options.continuous || k === j.length - 1) && e.trigger([g])
			}
		}
		this.clearTriggerQueues()
	}, b.prototype.next = function(g) {
		this.waypoints.sort(f);
		var h = c.Adapter.inArray(g, this.waypoints),
			j = h === this.waypoints.length - 1;
		return j ? null : this.waypoints[h + 1]
	}, b.prototype.previous = function(g) {
		this.waypoints.sort(f);
		var h = c.Adapter.inArray(g, this.waypoints);
		return h ? this.waypoints[h - 1] : null
	}, b.prototype.queueTrigger = function(h, g) {
		this.triggerQueues[g].push(h)
	}, b.prototype.remove = function(h) {
		var g = c.Adapter.inArray(h, this.waypoints);
		g > -1 && this.waypoints.splice(g, 1)
	}, b.prototype.first = function() {
		return this.waypoints[0]
	}, b.prototype.last = function() {
		return this.waypoints[this.waypoints.length - 1]
	}, b.findOrCreate = function(e) {
		return d[e.axis][e.name] || new b(e)
	}, c.Group = b
}(),
function() {
	function c(d) {
		this.$element = a(d)
	}
	var a = window.jQuery,
		b = window.Waypoint;
	a.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"],
		function(d, f) {
			c.prototype[f] = function() {
				var e = Array.prototype.slice.call(arguments);
				return this.$element[f].apply(this.$element, e)
			}
		}), a.each(["extend", "inArray", "isEmptyObject"], function(d, e) {
		c[e] = a[e]
	}), b.adapters.push({
		name: "jquery",
		Adapter: c
	}), b.Adapter = c
}(),
function() {
	function b(c) {
		return function() {
			var d = [],
				e = arguments[0];
			return c.isFunction(arguments[0]) && (e = c.extend({}, arguments[1]), e.handler = arguments[0]), this
				.each(function() {
					var f = c.extend({}, e, {
						element: this
					});
					"string" == typeof f.context && (f.context = c(this).closest(f.context)[0]), d.push(new a(
						f))
				}), d
		}
	}
	var a = window.Waypoint;
	window.jQuery && (window.jQuery.fn.waypoint = b(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = b(
		window.Zepto))
}();
! function(p, q, r, s) {
	function t(a, d) {
		this.settings = null, this.options = p.extend({}, t.Defaults, d), this.$element = p(a), this.drag = p.extend({},
				B), this.state = p.extend({}, C), this.e = p.extend({}, D), this._plugins = {}, this._supress = {}, this
			._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null,
			this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], p.each(t
				.Plugins, p.proxy(function(c, e) {
					this._plugins[c[0].toLowerCase() + c.slice(1)] = new e(this)
				}, this)), p.each(t.Pipe, p.proxy(function(e, f) {
				this._pipe.push({
					filter: f.filter,
					run: p.proxy(f.run, this)
				})
			}, this)), this.setup(), this.initialize()
	}

	function u(b) {
		if (b.touches !== s) {
			return {
				x: b.touches[0].pageX,
				y: b.touches[0].pageY
			}
		}
		if (b.touches === s) {
			if (b.pageX !== s) {
				return {
					x: b.pageX,
					y: b.pageY
				}
			}
			if (b.pageX === s) {
				return {
					x: b.clientX,
					y: b.clientY
				}
			}
		}
	}

	function v(c) {
		var g, h, i = r.createElement("div"),
			j = c;
		for (g in j) {
			if (h = j[g], "undefined" != typeof i.style[h]) {
				return i = null, [h, g]
			}
		}
		return [!1]
	}

	function w() {
		return v(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}

	function x() {
		return v(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}

	function y() {
		return v(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}

	function z() {
		return "ontouchstart" in q || !!navigator.msMaxTouchPoints
	}

	function A() {
		return q.navigator.msPointerEnabled
	}
	var B, C, D;
	B = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	}, C = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	}, D = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	}, t.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: q,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	}, t.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, t.Plugins = {}, t.Pipe = [{
		filter: ["width", "items", "settings"],
		run: function(b) {
			b.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var c = this._clones,
				d = this.$stage.children(".cloned");
			(d.length !== c.length || !this.settings.loop && c.length > 0) && (this.$stage.children(
				".cloned").remove(), this._clones = [])
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var f, g, h = this._clones,
				i = this._items,
				j = this.settings.loop ? h.length - Math.max(2 * this.settings.items, 4) : 0;
			for (f = 0, g = Math.abs(j / 2); g > f; f++) {
				j > 0 ? (this.$stage.children().eq(i.length + h.length - 1).remove(), h.pop(), this.$stage
					.children().eq(0).remove(), h.pop()) : (h.push(h.length / 2), this.$stage.append(i[
					h[h.length - 1]].clone().addClass("cloned")), h.push(i.length - 1 - (h.length -
					1) / 2), this.$stage.prepend(i[h[h.length - 1]].clone().addClass("cloned")))
			}
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var g, h, i, j = this.settings.rtl ? 1 : -1,
				k = (this.width() / this.settings.items).toFixed(3),
				l = 0;
			for (this._coordinates = [], h = 0, i = this._clones.length + this._items.length; i > h; h++) {
				g = this._mergers[this.relative(h)], g = this.settings.mergeFit && Math.min(g, this.settings
					.items) || g, l += (this.settings.autoWidth ? this._items[this.relative(h)]
				.width() + this.settings.margin : k * g) * j, this._coordinates.push(l)
			}
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var a, f, g = (this.width() / this.settings.items).toFixed(3),
				h = {
					width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings
						.stagePadding,
					"padding-left": this.settings.stagePadding || "",
					"padding-right": this.settings.stagePadding || ""
				};
			if (this.$stage.css(h), h = {
					width: this.settings.autoWidth ? "auto" : g - this.settings.margin
				}, h[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this
				.settings.autoWidth && p.grep(this._mergers, function(b) {
					return b > 1
				}).length > 0) {
				for (a = 0, f = this._coordinates.length; f > a; a++) {
					h.width = Math.abs(this._coordinates[a]) - Math.abs(this._coordinates[a - 1] || 0) -
						this.settings.margin, this.$stage.children().eq(a).css(h)
				}
			} else {
				this.$stage.children().css(h)
			}
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(b) {
			b.current && this.reset(this.$stage.children().index(b.current))
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var j, k, l, m, n = this.settings.rtl ? 1 : -1,
				o = 2 * this.settings.stagePadding,
				E = this.coordinates(this.current()) + o,
				F = E + this.width() * n,
				G = [];
			for (l = 0, m = this._coordinates.length; m > l; l++) {
				j = this._coordinates[l - 1] || 0, k = Math.abs(this._coordinates[l]) + o * n, (this.op(j,
						"<=", E) && this.op(j, ">", F) || this.op(k, "<", E) && this.op(k, ">", F)) && G
					.push(l)
			}
			this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass),
				this.$stage.children(":eq(" + G.join("), :eq(") + ")").addClass(this.settings.activeClass),
				this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(
					this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this
					.settings.centerClass))
		}
	}], t.prototype.initialize = function() {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings
				.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings
			.autoWidth && this.state.imagesLoaded !== !0) {
			var a, d, f;
			if (a = this.$element.find("img"), d = this.settings.nestedItemSelector ? "." + this.settings
				.nestedItemSelector : s, f = this.$element.children(d).width(), a.length && 0 >= f) {
				return this.preloadAutoWidthImages(a), !1
			}
		}
		this.$element.addClass("owl-loading"), this.$stage = p("<" + this.settings.stageElement +
				' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage
				.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this
			.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this
			.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
	}, t.prototype.setup = function() {
		var a = this.viewport(),
			f = this.options.responsive,
			g = -1,
			h = null;
		f ? (p.each(f, function(b) {
				a >= b && b > g && (g = Number(b))
			}), h = p.extend({}, this.options, f[g]), delete h.responsive, h.responsiveClass && this.$element
			.attr("class", function(c, d) {
				return d.replace(/\b owl-responsive-\S+/g, "")
			}).addClass("owl-responsive-" + g)) : h = p.extend({}, this.options), (null === this.settings ||
			this._breakpoint !== g) && (this.trigger("change", {
			property: {
				name: "settings",
				value: h
			}
		}), this._breakpoint = g, this.settings = h, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, t.prototype.optionsLogic = function() {
		this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length <
			this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings
				.stagePadding = !1, this.settings.merge = !1)
	}, t.prototype.prepare = function(a) {
		var d = this.trigger("prepare", {
			content: a
		});
		return d.data || (d.data = p("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass)
			.append(a)), this.trigger("prepared", {
			content: d.data
		}), d.data
	}, t.prototype.update = function() {
		for (var a = 0, f = this._pipe.length, g = p.proxy(function(b) {
				return this[b]
			}, this._invalidated), h = {}; f > a;) {
			(this._invalidated.all || p.grep(this._pipe[a].filter, g).length > 0) && this._pipe[a].run(h), a++
		}
		this._invalidated = {}
	}, t.prototype.width = function(b) {
		switch (b = b || t.Width.Default) {
			case t.Width.Inner:
			case t.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, t.prototype.refresh = function() {
		if (0 === this._items.length) {
			return !1
		}(new Date).getTime();
		this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this
			.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = q.orientation, this
			.watchVisibility(), this.trigger("refreshed")
	}, t.prototype.eventsCall = function() {
		this.e._onDragStart = p.proxy(function(b) {
			this.onDragStart(b)
		}, this), this.e._onDragMove = p.proxy(function(b) {
			this.onDragMove(b)
		}, this), this.e._onDragEnd = p.proxy(function(b) {
			this.onDragEnd(b)
		}, this), this.e._onResize = p.proxy(function(b) {
			this.onResize(b)
		}, this), this.e._transitionEnd = p.proxy(function(b) {
			this.transitionEnd(b)
		}, this), this.e._preventClick = p.proxy(function(b) {
			this.preventClick(b)
		}, this)
	}, t.prototype.onThrottledResize = function() {
		q.clearTimeout(this.resizeTimer), this.resizeTimer = q.setTimeout(this.e._onResize, this.settings
			.responsiveRefreshRate)
	}, t.prototype.onResize = function() {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize")
			.isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this
				.refresh(), void this.trigger("resized")) : !1
	}, t.prototype.eventsRouter = function(c) {
		var d = c.type;
		"mousedown" === d || "touchstart" === d ? this.onDragStart(c) : "mousemove" === d || "touchmove" === d ?
			this.onDragMove(c) : "mouseup" === d || "touchend" === d ? this.onDragEnd(c) : "touchcancel" === d &&
			this.onDragEnd(c)
	}, t.prototype.internalEvents = function() {
		var a = (z(), A());
		this.settings.mouseDrag ? (this.$stage.on("mousedown", p.proxy(function(b) {
			this.eventsRouter(b)
		}, this)), this.$stage.on("dragstart", function() {
			return !1
		}), this.$stage.get(0).onselectstart = function() {
			return !1
		}) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !a && this.$stage.on(
			"touchstart touchcancel", p.proxy(function(b) {
				this.eventsRouter(b)
			}, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e
			._transitionEnd, !1), this.settings.responsive !== !1 && this.on(q, "resize", p.proxy(this
			.onThrottledResize, this))
	}, t.prototype.onDragStart = function(a) {
		var b, c, f, j;
		if (b = a.originalEvent || a || q.event, 3 === b.which || this.state.isTouch) {
			return !1
		}
		if ("mousedown" === b.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime =
			(new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state
			.isSwiping = !1, this.drag.distance = 0, c = u(b).x, f = u(b).y, this.drag.offsetX = this.$stage
			.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag
				.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin),
			this.state.inMotion && this.support3d) {
			j = this.getTransformProperty(), this.drag.offsetX = j, this.animate(j), this.state.inMotion = !0
		} else {
			if (this.state.inMotion && !this.support3d) {
				return this.state.inMotion = !1, !1
			}
		}
		this.drag.startX = c - this.drag.offsetX, this.drag.startY = f - this.drag.offsetY, this.drag.start = c -
			this.drag.startX, this.drag.targetEl = b.target || b.srcElement, this.drag.updatedX = this.drag.start, (
				"IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl
				.draggable = !1), p(r).on(
				"mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
				p.proxy(function(d) {
					this.eventsRouter(d)
				}, this))
	}, t.prototype.onDragMove = function(b) {
		var d, f, k, l, m, n;
		this.state.isTouch && (this.state.isScrolling || (d = b.originalEvent || b || q.event, f = u(d).x, k = u(d)
			.y, this.drag.currentX = f - this.drag.startX, this.drag.currentY = k - this.drag.startY, this
			.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state
			.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state
				.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag
				.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this
			.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items
				.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" ===
			this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) -
				this.coordinates(this._items.length)) : (l = this.coordinates(this.settings.rtl ? this
					.maximum() : this.minimum()), m = this.coordinates(this.settings.rtl ? this.minimum() :
					this.maximum()), n = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag
				.currentX = Math.max(Math.min(this.drag.currentX, l + n), m + n)), (this.drag.distance >
				8 || this.drag.distance < -8) && (d.preventDefault !== s ? d.preventDefault() : d
				.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (
				this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this
				.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag
				.updatedX)))
	}, t.prototype.onDragEnd = function(a) {
		var c, g, h;
		if (this.state.isTouch) {
			if ("mouseup" === a.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag
				.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this
				.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) {
				return this.state.inMotion = !1, !1
			}
			this.drag.endTime = (new Date).getTime(), c = this.drag.endTime - this.drag.startTime, g = Math.abs(this
					.drag.distance), (g > 3 || c > 300) && this.removeClick(this.drag.targetEl), h = this.closest(
					this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this
				.current(h), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag
				.updatedX !== this.coordinates(h) || this.transitionEnd(), this.drag.distance = 0, p(r).off(
					".owl.dragEvents")
		}
	}, t.prototype.removeClick = function(a) {
		this.drag.targetEl = a, p(a).on("click.preventClick", this.e._preventClick), q.setTimeout(function() {
			p(a).off("click.preventClick")
		}, 300)
	}, t.prototype.preventClick = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation && a.stopPropagation(), p(a
			.target).off("click.preventClick")
	}, t.prototype.getTransformProperty = function() {
		var b, d;
		return b = q.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), b =
			b.replace(/matrix(3d)?\(|\)/g, "").split(","), d = 16 === b.length, d !== !0 ? b[4] : b[12]
	}, t.prototype.closest = function(a) {
		var g = -1,
			h = 30,
			i = this.width(),
			j = this.coordinates();
		return this.settings.freeDrag || p.each(j, p.proxy(function(b, c) {
			return a > c - h && c + h > a ? g = b : this.op(a, "<", c) && this.op(a, ">", j[b + 1] ||
				c - i) && (g = "left" === this.state.direction ? b + 1 : b), -1 === g
		}, this)), this.settings.loop || (this.op(a, ">", j[this.minimum()]) ? g = a = this.minimum() : this.op(
			a, "<", j[this.maximum()]) && (g = a = this.maximum())), g
	}, t.prototype.animate = function(a) {
		this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
			transform: "translate3d(" + a + "px,0px, 0px)",
			transition: this.speed() / 1000 + "s"
		}) : this.state.isTouch ? this.$stage.css({
			left: a + "px"
		}) : this.$stage.animate({
			left: a
		}, this.speed() / 1000, this.settings.fallbackEasing, p.proxy(function() {
			this.state.inMotion && this.transitionEnd()
		}, this))
	}, t.prototype.current = function(c) {
		if (c === s) {
			return this._current
		}
		if (0 === this._items.length) {
			return s
		}
		if (c = this.normalize(c), this._current !== c) {
			var d = this.trigger("change", {
				property: {
					name: "position",
					value: c
				}
			});
			d.data !== s && (c = this.normalize(d.data)), this._current = c, this.invalidate("position"), this
				.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
		}
		return this._current
	}, t.prototype.invalidate = function(b) {
		this._invalidated[b] = !0
	}, t.prototype.reset = function(b) {
		b = this.normalize(b), b !== s && (this._speed = 0, this._current = b, this.suppress(["translate",
			"translated"
		]), this.animate(this.coordinates(b)), this.release(["translate", "translated"]))
	}, t.prototype.normalize = function(a, d) {
		var f = d ? this._items.length : this._items.length + this._clones.length;
		return !p.isNumeric(a) || 1 > f ? s : a = this._clones.length ? (a % f + f) % f : Math.max(this.minimum(d),
			Math.min(this.maximum(d), a))
	}, t.prototype.relative = function(b) {
		return b = this.normalize(b), b -= this._clones.length / 2, this.normalize(b, !0)
	}, t.prototype.maximum = function(g) {
		var h, i, j, k = 0,
			l = this.settings;
		if (g) {
			return this._items.length - 1
		}
		if (!l.loop && l.center) {
			h = this._items.length - 1
		} else {
			if (l.loop || l.center) {
				if (l.loop || l.center) {
					h = this._items.length + l.items
				} else {
					if (!l.autoWidth && !l.merge) {
						throw "Can not detect maximum absolute position."
					}
					for (revert = l.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
						(j = this.coordinates(k)) && !(j * revert >= i);) {
						h = ++k
					}
				}
			} else {
				h = this._items.length - l.items
			}
		}
		return h
	}, t.prototype.minimum = function(b) {
		return b ? 0 : this._clones.length / 2
	}, t.prototype.items = function(b) {
		return b === s ? this._items.slice() : (b = this.normalize(b, !0), this._items[b])
	}, t.prototype.mergers = function(b) {
		return b === s ? this._mergers.slice() : (b = this.normalize(b, !0), this._mergers[b])
	}, t.prototype.clones = function(a) {
		var d = this._clones.length / 2,
			g = d + this._items.length,
			h = function(b) {
				return b % 2 === 0 ? g + b / 2 : d - (b + 1) / 2
			};
		return a === s ? p.map(this._clones, function(c, e) {
			return h(e)
		}) : p.map(this._clones, function(b, e) {
			return b === a ? h(e) : null
		})
	}, t.prototype.speed = function(b) {
		return b !== s && (this._speed = b), this._speed
	}, t.prototype.coordinates = function(a) {
		var d = null;
		return a === s ? p.map(this._coordinates, p.proxy(function(c, e) {
			return this.coordinates(e)
		}, this)) : (this.settings.center ? (d = this._coordinates[a], d += (this.width() - d + (this
				._coordinates[a - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : d = this._coordinates[a -
			1] || 0, d)
	}, t.prototype.duration = function(d, e, f) {
		return Math.min(Math.max(Math.abs(e - d), 1), 6) * Math.abs(f || this.settings.smartSpeed)
	}, t.prototype.to = function(a, b) {
		if (this.settings.loop) {
			var k = a - this.relative(this.current()),
				l = this.current(),
				m = this.current(),
				n = this.current() + k,
				o = 0 > m - n ? !0 : !1,
				E = this._clones.length + this._items.length;
			n < this.settings.items && o === !1 ? (l = m + this._items.length, this.reset(l)) : n >= E - this
				.settings.items && o === !0 && (l = m - this._items.length, this.reset(l)), q.clearTimeout(this.e
					._goToLoop), this.e._goToLoop = q.setTimeout(p.proxy(function() {
					this.speed(this.duration(this.current(), l + k, b)), this.current(l + k), this.update()
				}, this), 30)
		} else {
			this.speed(this.duration(this.current(), a, b)), this.current(a), this.update()
		}
	}, t.prototype.next = function(b) {
		b = b || !1, this.to(this.relative(this.current()) + 1, b)
	}, t.prototype.prev = function(b) {
		b = b || !1, this.to(this.relative(this.current()) - 1, b)
	}, t.prototype.transitionEnd = function(b) {
		return b !== s && (b.stopPropagation(), (b.target || b.srcElement || b.originalTarget) !== this.$stage.get(
			0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
	}, t.prototype.viewport = function() {
		var a;
		if (this.options.responsiveBaseElement !== q) {
			a = p(this.options.responsiveBaseElement).width()
		} else {
			if (q.innerWidth) {
				a = q.innerWidth
			} else {
				if (!r.documentElement || !r.documentElement.clientWidth) {
					throw "Can not detect viewport width."
				}
				a = r.documentElement.clientWidth
			}
		}
		return a
	}, t.prototype.replace = function(a) {
		this.$stage.empty(), this._items = [], a && (a = a instanceof jQuery ? a : p(a)), this.settings
			.nestedItemSelector && (a = a.find("." + this.settings.nestedItemSelector)), a.filter(function() {
				return 1 === this.nodeType
			}).each(p.proxy(function(c, d) {
				d = this.prepare(d), this.$stage.append(d), this._items.push(d), this._mergers.push(1 * d
					.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(p.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this
			.invalidate("items")
	}, t.prototype.add = function(c, d) {
		d = d === s ? this._items.length : this.normalize(d, !0), this.trigger("add", {
				content: c,
				position: d
			}), 0 === this._items.length || d === this._items.length ? (this.$stage.append(c), this._items.push(c),
				this._mergers.push(1 * c.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (
				this._items[d].before(c), this._items.splice(d, 0, c), this._mergers.splice(d, 0, 1 * c.find(
					"[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"),
			this.trigger("added", {
				content: c,
				position: d
			})
	}, t.prototype.remove = function(b) {
		b = this.normalize(b, !0), b !== s && (this.trigger("remove", {
			content: this._items[b],
			position: b
		}), this._items[b].remove(), this._items.splice(b, 1), this._mergers.splice(b, 1), this.invalidate(
			"items"), this.trigger("removed", {
			content: null,
			position: b
		}))
	}, t.prototype.addTriggerableEvents = function() {
		var a = p.proxy(function(d, e) {
			return p.proxy(function(b) {
				b.relatedTarget !== this && (this.suppress([e]), d.apply(this, [].slice.call(
					arguments, 1)), this.release([e]))
			}, this)
		}, this);
		p.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, p.proxy(function(b, d) {
			this.$element.on(b + ".owl.carousel", a(d, b + ".owl.carousel"))
		}, this))
	}, t.prototype.watchVisibility = function() {
		function a(c) {
			return c.offsetWidth > 0 && c.offsetHeight > 0
		}

		function b() {
			a(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), q.clearInterval(
				this.e._checkVisibile))
		}
		a(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), q.clearInterval(this.e._checkVisibile),
			this.e._checkVisibile = q.setInterval(p.proxy(b, this), 500))
	}, t.prototype.preloadAutoWidthImages = function(a) {
		var g, h, i, j;
		g = 0, h = this, a.each(function(b, c) {
			i = p(c), j = new Image, j.onload = function() {
				g++, i.attr("src", j.src), i.css("opacity", 1), g >= a.length && (h.state
					.imagesLoaded = !0, h.initialize())
			}, j.src = i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")
		})
	}, t.prototype.destroy = function() {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass),
			this.settings.responsive !== !1 && p(q).off("resize.owl.carousel"), this.transitionEndVendor && this
			.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var a in this._plugins) {
			this._plugins[a].destroy()
		}(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off(
				"mousedown touchstart touchcancel"), p(r).off(".owl.dragEvents"), this.$stage.get(0).onselectstart =
			function() {}, this.$stage.off("dragstart", function() {
				return !1
			})), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element
			.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(),
			this.$stage.unwrap()
	}, t.prototype.op = function(e, f, g) {
		var h = this.settings.rtl;
		switch (f) {
			case "<":
				return h ? e > g : g > e;
			case ">":
				return h ? g > e : e > g;
			case ">=":
				return h ? g >= e : e >= g;
			case "<=":
				return h ? e >= g : g >= e
		}
	}, t.prototype.on = function(e, f, g, h) {
		e.addEventListener ? e.addEventListener(f, g, h) : e.attachEvent && e.attachEvent("on" + f, g)
	}, t.prototype.off = function(e, f, g, h) {
		e.removeEventListener ? e.removeEventListener(f, g, h) : e.detachEvent && e.detachEvent("on" + f, g)
	}, t.prototype.trigger = function(a, h, i) {
		var j = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			k = p.camelCase(p.grep(["on", a, i], function(b) {
				return b
			}).join("-").toLowerCase()),
			l = p.Event([a, "owl", i || "carousel"].join(".").toLowerCase(), p.extend({
				relatedTarget: this
			}, j, h));
		return this._supress[a] || (p.each(this._plugins, function(c, d) {
				d.onTrigger && d.onTrigger(l)
			}), this.$element.trigger(l), this.settings && "function" == typeof this.settings[k] && this
			.settings[k].apply(this, l)), l
	}, t.prototype.suppress = function(a) {
		p.each(a, p.proxy(function(c, d) {
			this._supress[d] = !0
		}, this))
	}, t.prototype.release = function(a) {
		p.each(a, p.proxy(function(c, d) {
			delete this._supress[d]
		}, this))
	}, t.prototype.browserSupport = function() {
		if (this.support3d = y(), this.support3d) {
			this.transformVendor = x();
			var b = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = b[w()], this.vendorName = this.transformVendor.replace(/Transform/i, ""),
				this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
		}
		this.state.orientation = q.orientation
	}, p.fn.owlCarousel = function(a) {
		return this.each(function() {
			p(this).data("owlCarousel") || p(this).data("owlCarousel", new t(this, a))
		})
	}, p.fn.owlCarousel.Constructor = t
}(window.Zepto || window.jQuery, window, document),
function(d, e) {
	var f = function(a) {
		this._core = a, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel": d.proxy(function(i) {
				if (i.namespace && this._core.settings && this._core.settings.lazyLoad && (i.property &&
						"position" == i.property.name || "initialized" == i.type)) {
					for (var j = this._core.settings, k = j.center && Math.ceil(j.items / 2) || j.items,
							l = j.center && -1 * k || 0, m = (i.property && i.property.value || this
								._core.current()) + l, n = this._core.clones().length, o = d.proxy(
								function(c, g) {
									this.load(g)
								}, this); l++ < k;) {
						this.load(n / 2 + this._core.relative(m)), n && d.each(this._core.clones(this
							._core.relative(m++)), o)
					}
				}
			}, this)
		}, this._core.options = d.extend({}, f.Defaults, this._core.options), this._core.$element.on(this
			._handlers)
	};
	f.Defaults = {
		lazyLoad: !1
	}, f.prototype.load = function(a) {
		var b = this._core.$stage.children().eq(a),
			g = b && b.find(".owl-lazy");
		!g || d.inArray(b.get(0), this._loaded) > -1 || (g.each(d.proxy(function(h, i) {
			var j, k = d(i),
				l = e.devicePixelRatio > 1 && k.attr("data-src-retina") || k.attr("data-src");
			this._core.trigger("load", {
				element: k,
				url: l
			}, "lazy"), k.is("img") ? k.one("load.owl.lazy", d.proxy(function() {
				k.css("opacity", 1), this._core.trigger("loaded", {
					element: k,
					url: l
				}, "lazy")
			}, this)).attr("src", l) : (j = new Image, j.onload = d.proxy(function() {
				k.css({
					"background-image": "url(" + l + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: k,
					url: l
				}, "lazy")
			}, this), j.src = l)
		}, this)), this._loaded.push(b.get(0)))
	}, f.prototype.destroy = function() {
		var c, g;
		for (c in this.handlers) {
			this._core.$element.off(c, this.handlers[c])
		}
		for (g in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[g] && (this[g] = null)
		}
	}, d.fn.owlCarousel.Constructor.Plugins.Lazy = f
}(window.Zepto || window.jQuery, window, document),
function(c) {
	var d = function(a) {
		this._core = a, this._handlers = {
			"initialized.owl.carousel": c.proxy(function() {
				this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": c.proxy(function(b) {
				this._core.settings.autoHeight && "position" == b.property.name && this.update()
			}, this),
			"loaded.owl.lazy": c.proxy(function(b) {
				this._core.settings.autoHeight && b.element.closest("." + this._core.settings
					.itemClass) === this._core.$stage.children().eq(this._core.current()) && this
					.update()
			}, this)
		}, this._core.options = c.extend({}, d.Defaults, this._core.options), this._core.$element.on(this
			._handlers)
	};
	d.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, d.prototype.update = function() {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(
			this._core.settings.autoHeightClass)
	}, d.prototype.destroy = function() {
		var e, f;
		for (e in this._handlers) {
			this._core.$element.off(e, this._handlers[e])
		}
		for (f in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[f] && (this[f] = null)
		}
	}, c.fn.owlCarousel.Constructor.Plugins.AutoHeight = d
}(window.Zepto || window.jQuery, window, document),
function(e, f, g) {
	var h = function(a) {
		this._core = a, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
			"resize.owl.carousel": e.proxy(function(b) {
				this._core.settings.video && !this.isInFullScreen() && b.preventDefault()
			}, this),
			"refresh.owl.carousel changed.owl.carousel": e.proxy(function() {
				this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": e.proxy(function(d) {
				var i = e(d.content).find(".owl-video");
				i.length && (i.css("display", "none"), this.fetch(i, e(d.content)))
			}, this)
		}, this._core.options = e.extend({}, h.Defaults, this._core.options), this._core.$element.on(this
			._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(b) {
			this.play(b)
		}, this))
	};
	h.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, h.prototype.fetch = function(i, j) {
		var k = i.attr("data-vimeo-id") ? "vimeo" : "youtube",
			l = i.attr("data-vimeo-id") || i.attr("data-youtube-id"),
			m = i.attr("data-width") || this._core.settings.videoWidth,
			n = i.attr("data-height") || this._core.settings.videoHeight,
			o = i.attr("href");
		if (!o) {
			throw new Error("Missing video URL.")
		}
		if (l = o.match(
				/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
				), l[3].indexOf("youtu") > -1) {
			k = "youtube"
		} else {
			if (!(l[3].indexOf("vimeo") > -1)) {
				throw new Error("Video URL not supported.")
			}
			k = "vimeo"
		}
		l = l[6], this._videos[o] = {
			type: k,
			id: l,
			width: m,
			height: n
		}, j.attr("data-video", o), this.thumbnail(i, this._videos[o])
	}, h.prototype.thumbnail = function(a, m) {
		var n, o, p, q = m.width && m.height ? 'style="width:' + m.width + "px;height:" + m.height + 'px;"' : "",
			r = a.find("img"),
			s = "src",
			t = "",
			u = this._core.settings,
			v = function(b) {
				o = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + t +
					'" ' + s + '="' + b + '"></div>' :
					'<div class="owl-video-tn" style="opacity:1;background-image:url(' + b + ')"></div>', a.after(
					n), a.after(o)
			};
		return a.wrap('<div class="owl-video-wrapper"' + q + "></div>"), this._core.settings.lazyLoad && (s =
			"data-src", t = "owl-lazy"), r.length ? (v(r.attr(s)), r.remove(), !1) : void("youtube" === m.type ?
			(p = "http://img.youtube.com/vi/" + m.id + "/hqdefault.jpg", v(p)) : "vimeo" === m.type && e.ajax({
				type: "GET",
				url: "http://vimeo.com/api/v2/video/" + m.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(b) {
					p = b[0].thumbnail_large, v(p)
				}
			}))
	}, h.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing
			.removeClass("owl-video-playing"), this._playing = null
	}, h.prototype.play = function(a) {
		this._core.trigger("play", null, "video"), this._playing && this.stop();
		var j, k, l = e(a.target || a.srcElement),
			m = l.closest("." + this._core.settings.itemClass),
			n = this._videos[m.attr("data-video")],
			o = n.width || "100%",
			p = n.height || this._core.$stage.height();
		"youtube" === n.type ? j = '<iframe width="' + o + '" height="' + p +
			'" src="http://www.youtube.com/embed/' + n.id + "?autoplay=1&v=" + n.id +
			'" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type && (j =
				'<iframe src="http://player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' +
				p + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), m
			.addClass("owl-video-playing"), this._playing = m, k = e('<div style="height:' + p + "px; width:" + o +
				'px" class="owl-video-frame">' + j + "</div>"), l.after(k)
	}, h.prototype.isInFullScreen = function() {
		var a = g.fullscreenElement || g.mozFullScreenElement || g.webkitFullscreenElement;
		return a && e(a).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), a &&
			this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this
			._playing && this._core.state.orientation !== f.orientation ? (this._core.state.orientation = f
				.orientation, !1) : !0
	}, h.prototype.destroy = function() {
		var c, d;
		this._core.$element.off("click.owl.video");
		for (c in this._handlers) {
			this._core.$element.off(c, this._handlers[c])
		}
		for (d in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[d] && (this[d] = null)
		}
	}, e.fn.owlCarousel.Constructor.Plugins.Video = h
}(window.Zepto || window.jQuery, window, document),
function(f, g, h, i) {
	var j = function(a) {
		this.core = a, this.core.options = f.extend({}, j.Defaults, this.core.options), this.swapping = !0, this
			.previous = i, this.next = i, this.handlers = {
				"change.owl.carousel": f.proxy(function(b) {
					"position" == b.property.name && (this.previous = this.core.current(), this.next = b
						.property.value)
				}, this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": f.proxy(function(b) {
					this.swapping = "translated" == b.type
				}, this),
				"translate.owl.carousel": f.proxy(function() {
					this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this
						.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
	};
	j.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, j.prototype.swap = function() {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var a, k = f.proxy(this.clear, this),
				l = this.core.$stage.children().eq(this.previous),
				m = this.core.$stage.children().eq(this.next),
				n = this.core.settings.animateIn,
				o = this.core.settings.animateOut;
			this.core.current() !== this.previous && (o && (a = this.core.coordinates(this.previous) - this.core
					.coordinates(this.next), l.css({
						left: a + "px"
					}).addClass("animated owl-animated-out").addClass(o).one(
						"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", k)),
				n && m.addClass("animated owl-animated-in").addClass(n).one(
					"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", k))
		}
	}, j.prototype.clear = function(a) {
		f(a.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut), this.core.transitionEnd()
	}, j.prototype.destroy = function() {
		var c, d;
		for (c in this.handlers) {
			this.core.$element.off(c, this.handlers[c])
		}
		for (d in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[d] && (this[d] = null)
		}
	}, f.fn.owlCarousel.Constructor.Plugins.Animate = j
}(window.Zepto || window.jQuery, window, document),
function(e, f, g) {
	var h = function(a) {
		this.core = a, this.core.options = e.extend({}, h.Defaults, this.core.options), this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": e.proxy(function() {
				this.autoplay()
			}, this),
			"play.owl.autoplay": e.proxy(function(d, i, j) {
				this.play(i, j)
			}, this),
			"stop.owl.autoplay": e.proxy(function() {
				this.stop()
			}, this),
			"mouseover.owl.autoplay": e.proxy(function() {
				this.core.settings.autoplayHoverPause && this.pause()
			}, this),
			"mouseleave.owl.autoplay": e.proxy(function() {
				this.core.settings.autoplayHoverPause && this.autoplay()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	h.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5000,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, h.prototype.autoplay = function() {
		this.core.settings.autoplay && !this.core.state.videoPlay ? (f.clearInterval(this.interval), this.interval =
			f.setInterval(e.proxy(function() {
				this.play()
			}, this), this.core.settings.autoplayTimeout)) : f.clearInterval(this.interval)
	}, h.prototype.play = function() {
		return g.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state
			.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void f
			.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
	}, h.prototype.stop = function() {
		f.clearInterval(this.interval)
	}, h.prototype.pause = function() {
		f.clearInterval(this.interval)
	}, h.prototype.destroy = function() {
		var b, d;
		f.clearInterval(this.interval);
		for (b in this.handlers) {
			this.core.$element.off(b, this.handlers[b])
		}
		for (d in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[d] && (this[d] = null)
		}
	}, e.fn.owlCarousel.Constructor.Plugins.autoplay = h
}(window.Zepto || window.jQuery, window, document),
function(c) {
	var d = function(a) {
		this._core = a, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this
			.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": c.proxy(function(e) {
					this._core.settings.dotsData && this._templates.push(c(e.content).find("[data-dot]")
						.andSelf("[data-dot]").attr("data-dot"))
				}, this),
				"add.owl.carousel": c.proxy(function(e) {
					this._core.settings.dotsData && this._templates.splice(e.position, 0, c(e.content).find(
						"[data-dot]").andSelf("[data-dot]").attr("data-dot"))
				}, this),
				"remove.owl.carousel prepared.owl.carousel": c.proxy(function(b) {
					this._core.settings.dotsData && this._templates.splice(b.position, 1)
				}, this),
				"change.owl.carousel": c.proxy(function(e) {
					if ("position" == e.property.name && !this._core.state.revert && !this._core.settings
						.loop && this._core.settings.navRewind) {
						var f = this._core.current(),
							g = this._core.maximum(),
							h = this._core.minimum();
						e.data = e.property.value > g ? f >= g ? h : g : e.property.value < h ? g : e
							.property.value
					}
				}, this),
				"changed.owl.carousel": c.proxy(function(b) {
					"position" == b.property.name && this.draw()
				}, this),
				"refreshed.owl.carousel": c.proxy(function() {
					this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger(
						"refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger(
						"refreshed", null, "navigation")
				}, this)
			}, this._core.options = c.extend({}, d.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	d.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	}, d.prototype.initialize = function() {
		var a, e, f = this._core.settings;
		f.dotsData || (this._templates = [c("<div>").addClass(f.dotClass).append(c("<span>")).prop("outerHTML")]), f
			.navContainer && f.dotsContainer || (this._controls.$container = c("<div>").addClass(f.controlsClass)
				.appendTo(this.$element)), this._controls.$indicators = f.dotsContainer ? c(f.dotsContainer) : c(
				"<div>").hide().addClass(f.dotsClass).appendTo(this._controls.$container), this._controls
			.$indicators.on("click", "div", c.proxy(function(g) {
				var h = c(g.target).parent().is(this._controls.$indicators) ? c(g.target).index() : c(g
					.target).parent().index();
				g.preventDefault(), this.to(h, f.dotsSpeed)
			}, this)), a = f.navContainer ? c(f.navContainer) : c("<div>").addClass(f.navContainerClass).prependTo(
				this._controls.$container), this._controls.$next = c("<" + f.navElement + ">"), this._controls
			.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(f.navClass[0]).html(f
				.navText[0]).hide().prependTo(a).on("click", c.proxy(function() {
				this.prev(f.navSpeed)
			}, this)), this._controls.$next.addClass(f.navClass[1]).html(f.navText[1]).hide().appendTo(a).on(
				"click", c.proxy(function() {
					this.next(f.navSpeed)
				}, this));
		for (e in this._overrides) {
			this._core[e] = c.proxy(this[e], this)
		}
	}, d.prototype.destroy = function() {
		var e, f, g, h;
		for (e in this._handlers) {
			this.$element.off(e, this._handlers[e])
		}
		for (f in this._controls) {
			this._controls[f].remove()
		}
		for (h in this.overides) {
			this._core[h] = this._overrides[h]
		}
		for (g in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[g] && (this[g] = null)
		}
	}, d.prototype.update = function() {
		var h, i, j, k = this._core.settings,
			l = this._core.clones().length / 2,
			m = l + this._core.items().length,
			n = k.center || k.autoWidth || k.dotData ? 1 : k.dotsEach || k.items;
		if ("page" !== k.slideBy && (k.slideBy = Math.min(k.slideBy, k.items)), k.dots || "page" == k.slideBy) {
			for (this._pages = [], h = l, i = 0, j = 0; m > h; h++) {
				(i >= n || 0 === i) && (this._pages.push({
					start: h - l,
					end: h - l + n - 1
				}), i = 0, ++j), i += this._core.mergers(this._core.relative(h))
			}
		}
	}, d.prototype.draw = function() {
		var a, g, h = "",
			i = this._core.settings,
			j = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!i.nav || i.loop || i.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= j), this
				._controls.$next.toggleClass("disabled", j >= this._core.maximum())), this._controls.$previous
			.toggle(i.nav), this._controls.$next.toggle(i.nav), i.dots) {
			if (a = this._pages.length - this._controls.$indicators.children().length, i.dotData && 0 !== a) {
				for (g = 0; g < this._controls.$indicators.children().length; g++) {
					h += this._templates[this._core.relative(g)]
				}
				this._controls.$indicators.html(h)
			} else {
				a > 0 ? (h = new Array(a + 1).join(this._templates[0]), this._controls.$indicators.append(h)) : 0 >
					a && this._controls.$indicators.children().slice(a).remove()
			}
			this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children()
				.eq(c.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(i.dots)
	}, d.prototype.onTrigger = function(a) {
		var e = this._core.settings;
		a.page = {
			index: c.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: e && (e.center || e.autoWidth || e.dotData ? 1 : e.dotsEach || e.items)
		}
	}, d.prototype.current = function() {
		var a = this._core.relative(this._core.current());
		return c.grep(this._pages, function(b) {
			return b.start <= a && b.end >= a
		}).pop()
	}, d.prototype.getPosition = function(a) {
		var f, g, h = this._core.settings;
		return "page" == h.slideBy ? (f = c.inArray(this.current(), this._pages), g = this._pages.length, a ? ++f :
			--f, f = this._pages[(f % g + g) % g].start) : (f = this._core.relative(this._core.current()), g =
			this._core.items().length, a ? f += h.slideBy : f -= h.slideBy), f
	}, d.prototype.next = function(a) {
		c.proxy(this._overrides.to, this._core)(this.getPosition(!0), a)
	}, d.prototype.prev = function(a) {
		c.proxy(this._overrides.to, this._core)(this.getPosition(!1), a)
	}, d.prototype.to = function(a, f, g) {
		var h;
		g ? c.proxy(this._overrides.to, this._core)(a, f) : (h = this._pages.length, c.proxy(this._overrides.to,
			this._core)(this._pages[(a % h + h) % h].start, f))
	}, c.fn.owlCarousel.Constructor.Plugins.Navigation = d
}(window.Zepto || window.jQuery, window, document),
function(d, e) {
	var f = function(a) {
		this._core = a, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": d.proxy(function() {
					"URLHash" == this._core.settings.startPosition && d(e).trigger(
						"hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": d.proxy(function(g) {
					var h = d(g.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
					this._hashes[h] = g.content
				}, this)
			}, this._core.options = d.extend({}, f.Defaults, this._core.options), this.$element.on(this._handlers),
			d(e).on("hashchange.owl.navigation", d.proxy(function() {
				var b = e.location.hash.substring(1),
					g = this._core.$stage.children(),
					h = this._hashes[b] && g.index(this._hashes[b]) || 0;
				return b ? void this._core.to(h, !1, !0) : !1
			}, this))
	};
	f.Defaults = {
		URLhashListener: !1
	}, f.prototype.destroy = function() {
		var a, b;
		d(e).off("hashchange.owl.navigation");
		for (a in this._handlers) {
			this._core.$element.off(a, this._handlers[a])
		}
		for (b in Object.getOwnPropertyNames(this)) {
			"function" != typeof this[b] && (this[b] = null)
		}
	}, d.fn.owlCarousel.Constructor.Plugins.Hash = f
}(window.Zepto || window.jQuery, window, document);
/* WOW - v1.1.3 - 2016-05-06* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
	var h, i, j, k, l, m = function(c, d) {
			return function() {
				return c.apply(d, arguments)
			}
		},
		n = [].indexOf || function(d) {
			for (var e = 0, f = this.length; f > e; e++) {
				if (e in this && this[e] === d) {
					return e
				}
			}
			return -1
		};
	i = function() {
		function b() {}
		return b.prototype.extend = function(e, f) {
			var g, o;
			for (g in f) {
				o = f[g], null == e[g] && (e[g] = o)
			}
			return e
		}, b.prototype.isMobile = function(c) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)
		}, b.prototype.createEvent = function(f, g, o, p) {
			var q;
			return null == g && (g = !1), null == o && (o = !1), null == p && (p = null), null != document
				.createEvent ? (q = document.createEvent("CustomEvent"), q.initCustomEvent(f, g, o, p)) :
				null != document.createEventObject ? (q = document.createEventObject(), q.eventType = f) : q
				.eventName = f, q
		}, b.prototype.emitEvent = function(c, d) {
			return null != c.dispatchEvent ? c.dispatchEvent(d) : d in (null != c) ? c[d]() : "on" + d in (
				null != c) ? c["on" + d]() : void 0
		}, b.prototype.addEvent = function(d, e, f) {
			return null != d.addEventListener ? d.addEventListener(e, f, !1) : null != d.attachEvent ? d
				.attachEvent("on" + e, f) : d[e] = f
		}, b.prototype.removeEvent = function(d, e, f) {
			return null != d.removeEventListener ? d.removeEventListener(e, f, !1) : null != d.detachEvent ?
				d.detachEvent("on" + e, f) : delete d[e]
		}, b.prototype.innerHeight = function() {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, b
	}(), j = this.WeakMap || this.MozWeakMap || (j = function() {
		function b() {
			this.keys = [], this.values = []
		}
		return b.prototype.get = function(g) {
			var o, p, q, r, s;
			for (s = this.keys, o = q = 0, r = s.length; r > q; o = ++q) {
				if (p = s[o], p === g) {
					return this.values[o]
				}
			}
		}, b.prototype.set = function(o, p) {
			var q, r, s, t, u;
			for (u = this.keys, q = s = 0, t = u.length; t > s; q = ++s) {
				if (r = u[q], r === o) {
					return void(this.values[q] = p)
				}
			}
			return this.keys.push(o), this.values.push(p)
		}, b
	}()), h = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (h =
	function() {
		function b() {
			"undefined" != typeof console && null !== console && console.warn(
					"MutationObserver is not supported by your browser."), "undefined" != typeof console &&
				null !== console && console.warn(
					"WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return b.notSupported = !0, b.prototype.observe = function() {}, b
	}()), k = this.getComputedStyle || function(c, d) {
		return this.getPropertyValue = function(a) {
			var e;
			return "float" === a && (a = "styleFloat"), l.test(a) && a.replace(l, function(f, g) {
				return g.toUpperCase()
			}), (null != (e = c.currentStyle) ? e[a] : void 0) || null
		}, this
	}, l = /(\-([a-z]){1})/g, this.WOW = function() {
		function a(b) {
			null == b && (b = {}), this.scrollCallback = m(this.scrollCallback, this), this.scrollHandler = m(
					this.scrollHandler, this), this.resetAnimation = m(this.resetAnimation, this), this.start =
				m(this.start, this), this.scrolled = !0, this.config = this.util().extend(b, this.defaults),
				null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b
					.scrollContainer)), this.animationNameCache = new j, this.wowEvent = this.util()
				.createEvent(this.config.boxClass)
		}
		return a.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null,
			scrollContainer: null
		}, a.prototype.init = function() {
			var b;
			return this.element = window.document.documentElement, "interactive" === (b = document
				.readyState) || "complete" === b ? this.start() : this.util().addEvent(document,
				"DOMContentLoaded", this.start), this.finished = []
		}, a.prototype.start = function() {
			var f, g, o, p;
			if (this.stopped = !1, this.boxes = function() {
					var b, q, r, s;
					for (r = this.element.querySelectorAll("." + this.config.boxClass), s = [], b = 0, q = r
						.length; q > b; b++) {
						f = r[b], s.push(f)
					}
					return s
				}.call(this), this.all = function() {
					var b, q, r, s;
					for (r = this.boxes, s = [], b = 0, q = r.length; q > b; b++) {
						f = r[b], s.push(f)
					}
					return s
				}.call(this), this.boxes.length) {
				if (this.disabled()) {
					this.resetStyle()
				} else {
					for (p = this.boxes, g = 0, o = p.length; o > g; g++) {
						f = p[g], this.applyStyle(f, !0)
					}
				}
			}
			return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll",
					this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler),
				this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new h(
				function(b) {
					return function(q) {
						var r, s, t, u, v;
						for (v = [], r = 0, s = q.length; s > r; r++) {
							u = q[r], v.push(function() {
								var e, w, x, y;
								for (x = u.addedNodes || [], y = [], e = 0, w = x
									.length; w > e; e++) {
									t = x[e], y.push(this.doSync(t))
								}
								return y
							}.call(b))
						}
						return v
					}
				}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, a.prototype.stop = function() {
			return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window,
				"scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this
				.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, a.prototype.sync = function(c) {
			return h.notSupported ? this.doSync(this.element) : void 0
		}, a.prototype.doSync = function(g) {
			var o, p, q, r, s;
			if (null == g && (g = this.element), 1 === g.nodeType) {
				for (g = g.parentNode || g, r = g.querySelectorAll("." + this.config.boxClass), s = [], p =
					0, q = r.length; q > p; p++) {
					o = r[p], n.call(this.all, o) < 0 ? (this.boxes.push(o), this.all.push(o), this
						.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(o, !0), s
						.push(this.scrolled = !0)) : s.push(void 0)
				}
				return s
			}
		}, a.prototype.show = function(b) {
			return this.applyStyle(b), b.className = b.className + " " + this.config.animateClass, null !=
				this.config.callback && this.config.callback(b), this.util().emitEvent(b, this.wowEvent),
				this.util().addEvent(b, "animationend", this.resetAnimation), this.util().addEvent(b,
					"oanimationend", this.resetAnimation), this.util().addEvent(b, "webkitAnimationEnd",
					this.resetAnimation), this.util().addEvent(b, "MSAnimationEnd", this.resetAnimation), b
		}, a.prototype.applyStyle = function(f, g) {
			var o, p, q;
			return p = f.getAttribute("data-wow-duration"), o = f.getAttribute("data-wow-delay"), q = f
				.getAttribute("data-wow-iteration"), this.animate(function(b) {
					return function() {
						return b.customStyle(f, g, p, o, q)
					}
				}(this))
		}, a.prototype.animate = function() {
			return "requestAnimationFrame" in window ? function(b) {
				return window.requestAnimationFrame(b)
			} : function(b) {
				return b()
			}
		}(), a.prototype.resetStyle = function() {
			var f, g, o, p, q;
			for (p = this.boxes, q = [], g = 0, o = p.length; o > g; g++) {
				f = p[g], q.push(f.style.visibility = "visible")
			}
			return q
		}, a.prototype.resetAnimation = function(c) {
			var d;
			return c.type.toLowerCase().indexOf("animationend") >= 0 ? (d = c.target || c.srcElement, d
				.className = d.className.replace(this.config.animateClass, "").trim()) : void 0
		}, a.prototype.customStyle = function(f, g, o, p, q) {
			return g && this.cacheAnimationName(f), f.style.visibility = g ? "hidden" : "visible", o && this
				.vendorSet(f.style, {
					animationDuration: o
				}), p && this.vendorSet(f.style, {
					animationDelay: p
				}), q && this.vendorSet(f.style, {
					animationIterationCount: q
				}), this.vendorSet(f.style, {
					animationName: g ? "none" : this.cachedAnimationName(f)
				}), f
		}, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function(g, o) {
			var p, q, r, s;
			q = [];
			for (p in o) {
				r = o[p], g["" + p] = r, q.push(function() {
					var c, e, f, t;
					for (f = this.vendors, t = [], c = 0, e = f.length; e > c; c++) {
						s = f[c], t.push(g["" + s + p.charAt(0).toUpperCase() + p.substr(1)] = r)
					}
					return t
				}.call(this))
			}
			return q
		}, a.prototype.vendorCSS = function(d, o) {
			var p, q, r, s, t, u;
			for (t = k(d), s = t.getPropertyCSSValue(o), r = this.vendors, p = 0, q = r.length; q >
				p; p++) {
				u = r[p], s = s || t.getPropertyCSSValue("-" + u + "-" + o)
			}
			return s
		}, a.prototype.animationName = function(d) {
			var e;
			try {
				e = this.vendorCSS(d, "animation-name").cssText
			} catch (f) {
				e = k(d).getPropertyValue("animation-name")
			}
			return "none" === e ? "" : e
		}, a.prototype.cacheAnimationName = function(b) {
			return this.animationNameCache.set(b, this.animationName(b))
		}, a.prototype.cachedAnimationName = function(b) {
			return this.animationNameCache.get(b)
		}, a.prototype.scrollHandler = function() {
			return this.scrolled = !0
		}, a.prototype.scrollCallback = function() {
			var b;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
				var f, g, o, p;
				for (o = this.boxes, p = [], f = 0, g = o.length; g > f; f++) {
					b = o[f], b && (this.isVisible(b) ? this.show(b) : p.push(b))
				}
				return p
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, a.prototype.offsetTop = function(c) {
			for (var d; void 0 === c.offsetTop;) {
				c = c.parentNode
			}
			for (d = c.offsetTop; c = c.offsetParent;) {
				d += c.offsetTop
			}
			return d
		}, a.prototype.isVisible = function(g) {
			var o, p, q, r, s;
			return p = g.getAttribute("data-wow-offset") || this.config.offset, s = this.config
				.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = s +
				Math.min(this.element.clientHeight, this.util().innerHeight()) - p, q = this.offsetTop(g),
				o = q + g.clientHeight, r >= q && o >= s
		}, a.prototype.util = function() {
			return null != this._util ? this._util : this._util = new i
		}, a.prototype.disabled = function() {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, a
	}()
}).call(this);
/* Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)*/
(function(a) {
	a.fn.parallaxie = function(b) {
		var b = a.extend({
			speed: 0.2,
			repeat: "no-repeat",
			size: "cover",
			pos_x: "center",
			offset: 0,
		}, b);
		this.each(function() {
			var c = a(this);
			var e = c.data("parallaxie");
			if (typeof e != "object") {
				e = {}
			}
			e = a.extend({}, b, e);
			var d = c.data("image");
			if (typeof d == "undefined") {
				d = c.css("background-image");
				if (!d) {
					return
				}
				var f = e.offset + (c.offset().top - a(window).scrollTop()) * (1 - e.speed);
				c.css({
					"background-image": d,
					"background-size": e.size,
					"background-repeat": e.repeat,
					"background-attachment": "fixed",
					"background-position": e.pos_x + " " + f + "px",
				});
				a(window).scroll(function() {
					var g = e.offset + (c.offset().top - a(window).scrollTop()) * (1 - e.speed);
					c.data("pos_y", g);
					c.css("background-position", e.pos_x + " " + g + "px")
				})
			}
		});
		return this
	}
}(jQuery))
/* skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
;
! function(ad, ah, al) {
	function ap(a) {
		if (au = ah.documentElement, ay = ah.body, bu(), aI = this, a = a || {}, a2 = a.constants || {}, a.easing) {
			for (var b in a.easing) {
				bF[b] = a.easing[b]
			}
		}
		bv = a.edgeStrategy || "set", aU = {
				beforerender: a.beforerender,
				render: a.render,
				keyframe: a.keyframe
			}, aY = a.forceHeight !== !1, aY && (aV = a.scale || 1), a6 = a.mobileDeceleration || bK, bf = a
			.smoothScrolling !== !1, bj = a.smoothScrollingDuration || ae, bn = {
				targetTop: aI.getScrollTop()
			}, bs = (a.mobileCheck || function() {
				return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || ad
					.opera)
			})(), bs ? (aQ = ah.getElementById(a.skrollrBody || bN), aQ && aE(), bI(), ax(au, [bp, bB], [bt])) : ax(au,
				[bp, bx], [bt]), aI.refresh(), bG(ad, "resize orientationchange", function() {
				var c = au.clientWidth,
					d = au.clientHeight;
				(d !== bg || c !== bc) && (bg = d, bc = c, bk = !0)
			});
		var e = by();
		return function f() {
			ab(), bD = e(f)
		}(), aI
	}
	var au, ay, aC = {
			get: function() {
				return aI
			},
			init: function(b) {
				return aI || new ap(b)
			},
			VERSION: "0.6.30"
		},
		aG = Object.prototype.hasOwnProperty,
		aK = ad.Math,
		aO = ad.getComputedStyle,
		aS = "touchstart",
		aW = "touchmove",
		a0 = "touchcancel",
		a4 = "touchend",
		a8 = "skrollable",
		bd = a8 + "-before",
		bh = a8 + "-between",
		bl = a8 + "-after",
		bp = "skrollr",
		bt = "no-" + bp,
		bx = bp + "-desktop",
		bB = bp + "-mobile",
		bE = "linear",
		bH = 1000,
		bK = 0.004,
		bN = "skrollr-body",
		ae = 200,
		ai = "start",
		am = "end",
		aq = "center",
		av = "bottom",
		az = "___skrollable_id",
		aD = /^(?:input|textarea|button|select)$/i,
		aH = /^\s+|\s+$/g,
		aL = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
		aP = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
		aT = /^(@?[a-z\-]+)\[(\w+)\]$/,
		aX = /-([a-z0-9_])/g,
		a1 = function(c, d) {
			return d.toUpperCase()
		},
		a5 = /[\-+]?[\d]*\.?[\d]+/g,
		a9 = /\{\?\}/g,
		be = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
		bi = /[a-z\-]+-gradient/g,
		bm = "",
		bq = "",
		bu = function() {
			var d = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
			if (aO) {
				var e = aO(ay, null);
				for (var f in e) {
					if (bm = f.match(d) || +f == f && e[f].match(d)) {
						break
					}
				}
				if (!bm) {
					return void(bm = bq = "")
				}
				bm = bm[0], "-" === bm.slice(0, 1) ? (bq = bm, bm = {
					"-webkit-": "webkit",
					"-moz-": "Moz",
					"-ms-": "ms",
					"-o-": "O"
				} [bm]) : bq = "-" + bm.toLowerCase() + "-"
			}
		},
		by = function() {
			var a = ad.requestAnimationFrame || ad[bm.toLowerCase() + "RequestAnimationFrame"],
				d = aJ();
			return (bs || !a) && (a = function(c) {
				var f = aJ() - d,
					g = aK.max(0, 1000 / 60 - f);
				return ad.setTimeout(function() {
					d = aJ(), c()
				}, g)
			}), a
		},
		bC = function() {
			var a = ad.cancelAnimationFrame || ad[bm.toLowerCase() + "CancelAnimationFrame"];
			return (bs || !a) && (a = function(c) {
				return ad.clearTimeout(c)
			}), a
		},
		bF = {
			begin: function() {
				return 0
			},
			end: function() {
				return 1
			},
			linear: function(b) {
				return b
			},
			quadratic: function(b) {
				return b * b
			},
			cubic: function(b) {
				return b * b * b
			},
			swing: function(b) {
				return -aK.cos(b * aK.PI) / 2 + 0.5
			},
			sqrt: function(b) {
				return aK.sqrt(b)
			},
			outCubic: function(b) {
				return aK.pow(b - 1, 3) + 1
			},
			bounce: function(c) {
				var d;
				if (0.5083 >= c) {
					d = 3
				} else {
					if (0.8489 >= c) {
						d = 9
					} else {
						if (0.9620800000000001 >= c) {
							d = 27
						} else {
							if (!(0.99981 >= c)) {
								return 1
							}
							d = 91
						}
					}
				}
				return 1 - aK.abs(3 * aK.cos(c * d * 1.028) / d)
			}
		};
	ap.prototype.refresh = function(b) {
		var c, o, A = !1;
		for (b === al ? (A = !0, aM = [], bo = 0, b = ah.getElementsByTagName("*")) : b.length === al && (b = [b]),
			c = 0, o = b.length; o > c; c++) {
			var B = b[c],
				C = B,
				D = [],
				E = bf,
				F = bv,
				G = !1;
			if (A && az in B && delete B[az], B.attributes) {
				for (var H = 0, I = B.attributes.length; I > H; H++) {
					var J = B.attributes[H];
					if ("data-anchor-target" !== J.name) {
						if ("data-smooth-scrolling" !== J.name) {
							if ("data-edge-strategy" !== J.name) {
								if ("data-emit-events" !== J.name) {
									var K = J.name.match(aL);
									if (null !== K) {
										var L = {
											props: J.value,
											element: B,
											eventType: J.name.replace(aX, a1)
										};
										D.push(L);
										var M = K[1];
										M && (L.constant = M.substr(1));
										var N = K[2];
										/p$/.test(N) ? (L.isPercentage = !0, L.offset = (0 | N.slice(0, -1)) /
											100) : L.offset = 0 | N;
										var O = K[3],
											P = K[4] || O;
										O && O !== ai && O !== am ? (L.mode = "relative", L.anchors = [O, P]) : (L
											.mode = "absolute", O === am ? L.isEnd = !0 : L.isPercentage || (L
												.offset = L.offset * aV))
									}
								} else {
									G = !0
								}
							} else {
								F = J.value
							}
						} else {
							E = "off" !== J.value
						}
					} else {
						if (C = ah.querySelector(J.value), null === C) {
							throw 'Unable to find anchor target "' + J.value + '"'
						}
					}
				}
				if (D.length) {
					var Q, R, S;
					!A && az in B ? (S = B[az], Q = aM[S].styleAttr, R = aM[S].classAttr) : (S = B[az] = bo++, Q = B
						.style.cssText, R = at(B)), aM[S] = {
						element: B,
						styleAttr: Q,
						classAttr: R,
						anchorTarget: C,
						keyFrames: D,
						smoothScrolling: E,
						edgeStrategy: F,
						emitEvents: G,
						lastFrameIndex: -1
					}, ax(B, [a8], [])
				}
			}
		}
		for (ag(), c = 0, o = b.length; o > c; c++) {
			var T = aM[b[c][az]];
			T !== al && (ac(T), aj(T))
		}
		return aI
	}, ap.prototype.relativeToAbsolute = function(e, i, j) {
		var k = au.clientHeight,
			l = e.getBoundingClientRect(),
			m = l.top,
			n = l.bottom - l.top;
		return i === av ? m -= k : i === aq && (m -= k / 2), j === av ? m += n : j === aq && (m += n / 2), m += aI
			.getScrollTop(), m + 0.5 | 0
	}, ap.prototype.animateTo = function(c, g) {
		g = g || {};
		var h = aJ(),
			i = aI.getScrollTop(),
			j = g.duration === al ? bH : g.duration;
		return bb = {
			startTop: i,
			topDiff: c - i,
			targetTop: c,
			duration: j,
			startTime: h,
			endTime: h + j,
			easing: bF[g.easing || bE],
			done: g.done
		}, bb.topDiff || (bb.done && bb.done.call(aI, !1), bb = al), aI
	}, ap.prototype.stopAnimateTo = function() {
		bb && bb.done && bb.done.call(aI, !0), bb = al
	}, ap.prototype.isAnimatingTo = function() {
		return !!bb
	}, ap.prototype.isMobile = function() {
		return bs
	}, ap.prototype.setScrollTop = function(a, d) {
		return br = d === !0, bs ? bw = aK.min(aK.max(a, 0), aR) : ad.scrollTo(0, a), aI
	}, ap.prototype.getScrollTop = function() {
		return bs ? bw : ad.pageYOffset || au.scrollTop || ay.scrollTop || 0
	}, ap.prototype.getMaxScrollTop = function() {
		return aR
	}, ap.prototype.on = function(c, d) {
		return aU[c] = d, aI
	}, ap.prototype.off = function(b) {
		return delete aU[b], aI
	}, ap.prototype.destroy = function() {
		var c = bC();
		c(bD), bM(), ax(au, [bt], [bp, bx, bB]);
		for (var e = 0, f = aM.length; f > e; e++) {
			aA(aM[e].element)
		}
		au.style.overflow = ay.style.overflow = "", au.style.height = ay.style.height = "", aQ && aC.setStyle(aQ,
				"transform", "none"), aI = al, aQ = al, aU = al, aY = al, aR = 0, aV = 1, a2 = al, a6 = al, aZ =
			"down", a3 = -1, bc = 0, bg = 0, bk = !1, bb = al, bf = al, bj = al, bn = al, br = al, bo = 0, bv = al,
			bs = !1, bw = 0, bz = al
	};
	var bI = function() {
			var a, b, c, e, f, i, k, l, m, n, w, x;
			bG(au, [aS, aW, a0, a4].join(" "), function(d) {
				var p = d.changedTouches[0];
				for (e = d.target; 3 === e.nodeType;) {
					e = e.parentNode
				}
				switch (f = p.clientY, i = p.clientX, n = d.timeStamp, aD.test(e.tagName) || d.preventDefault(),
					d.type) {
					case aS:
						a && a.blur(), aI.stopAnimateTo(), a = e, b = k = f, c = i, m = n;
						break;
					case aW:
						aD.test(e.tagName) && ah.activeElement !== e && d.preventDefault(), l = f - k, x = n -
							w, aI.setScrollTop(bw - l, !0), k = f, w = n;
						break;
					default:
					case a0:
					case a4:
						var q = b - f,
							r = c - i,
							s = r * r + q * q;
						if (49 > s) {
							if (!aD.test(a.tagName)) {
								a.focus();
								var t = ah.createEvent("MouseEvents");
								t.initMouseEvent("click", !0, !0, d.view, 1, p.screenX, p.screenY, p.clientX, p
										.clientY, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, 0, null), a
									.dispatchEvent(t)
							}
							return
						}
						a = al;
						var u = l / x;
						u = aK.max(aK.min(u, 3), -3);
						var g = aK.abs(u / a6),
							h = u * g + 0.5 * a6 * g * g,
							j = aI.getScrollTop() - h,
							o = 0;
						j > aR ? (o = (aR - j) / h, j = aR) : 0 > j && (o = -j / h, j = 0), g *= 1 - o, aI
							.animateTo(j + 0.5 | 0, {
								easing: "outCubic",
								duration: g
							})
				}
			}), ad.scrollTo(0, 0), au.style.overflow = ay.style.overflow = "hidden"
		},
		bL = function() {
			var e, i, p, q, r, s, t, u, v, w, x, y = au.clientHeight,
				z = ak();
			for (u = 0, v = aM.length; v > u; u++) {
				for (e = aM[u], i = e.element, p = e.anchorTarget, q = e.keyFrames, r = 0, s = q.length; s > r; r++) {
					t = q[r], w = t.offset, x = z[t.constant] || 0, t.frame = w, t.isPercentage && (w *= y, t.frame =
						w), "relative" === t.mode && (aA(i), t.frame = aI.relativeToAbsolute(p, t.anchors[0], t.anchors[
							1]) - w, aA(i, !0)), t.frame += x, aY && !t.isEnd && t.frame > aR && (aR = t.frame)
				}
			}
			for (aR = aK.max(aR, ao()), u = 0, v = aM.length; v > u; u++) {
				for (e = aM[u], q = e.keyFrames, r = 0, s = q.length; s > r; r++) {
					t = q[r], x = z[t.constant] || 0, t.isEnd && (t.frame = aR - t.offset + x)
				}
				e.keyFrames.sort(aN)
			}
		},
		bO = function(g, o) {
			for (var q = 0, D = aM.length; D > q; q++) {
				var E, F, G = aM[q],
					H = G.element,
					I = G.smoothScrolling ? g : o,
					J = G.keyFrames,
					K = J.length,
					L = J[0],
					M = J[J.length - 1],
					N = I < L.frame,
					O = I > M.frame,
					P = N ? L : M,
					Q = G.emitEvents,
					R = G.lastFrameIndex;
				if (N || O) {
					if (N && -1 === G.edge || O && 1 === G.edge) {
						continue
					}
					switch (N ? (ax(H, [bd], [bl, bh]), Q && R > -1 && (bP(H, L.eventType, aZ), G.lastFrameIndex = -
						1)) : (ax(H, [bl], [bd, bh]), Q && K > R && (bP(H, M.eventType, aZ), G.lastFrameIndex = K)), G
						.edge = N ? -1 : 1, G.edgeStrategy) {
						case "reset":
							aA(H);
							continue;
						case "ease":
							I = P.frame;
							break;
						default:
						case "set":
							var S = P.props;
							for (E in S) {
								aG.call(S, E) && (F = aw(S[E].value), 0 === E.indexOf("@") ? H.setAttribute(E.substr(1),
									F) : aC.setStyle(H, E, F))
							}
							continue
					}
				} else {
					0 !== G.edge && (ax(H, [a8, bh], [bd, bl]), G.edge = 0)
				}
				for (var T = 0; K - 1 > T; T++) {
					if (I >= J[T].frame && I <= J[T + 1].frame) {
						var h = J[T],
							p = J[T + 1];
						for (E in h.props) {
							if (aG.call(h.props, E)) {
								var r = (I - h.frame) / (p.frame - h.frame);
								r = h.props[E].easing(r), F = ar(h.props[E].value, p.props[E].value, r), F = aw(F),
									0 === E.indexOf("@") ? H.setAttribute(E.substr(1), F) : aC.setStyle(H, E, F)
							}
						}
						Q && R !== T && ("down" === aZ ? bP(H, h.eventType, aZ) : bP(H, p.eventType, aZ), G
							.lastFrameIndex = T);
						break
					}
				}
			}
		},
		ab = function() {
			bk && (bk = !1, ag());
			var c, g, j = aI.getScrollTop(),
				k = aJ();
			if (bb) {
				k >= bb.endTime ? (j = bb.targetTop, c = bb.done, bb = al) : (g = bb.easing((k - bb.startTime) / bb
					.duration), j = bb.startTop + g * bb.topDiff | 0), aI.setScrollTop(j, !0)
			} else {
				if (!br) {
					var l = bn.targetTop - j;
					l && (bn = {
						startTop: a3,
						topDiff: j - a3,
						targetTop: j,
						startTime: a7,
						endTime: a7 + bj
					}), k <= bn.endTime && (g = bF.sqrt((k - bn.startTime) / bj), j = bn.startTop + g * bn.topDiff |
						0)
				}
			}
			if (br || a3 !== j) {
				aZ = j > a3 ? "down" : a3 > j ? "up" : aZ, br = !1;
				var m = {
						curTop: j,
						lastTop: a3,
						maxTop: aR,
						direction: aZ
					},
					n = aU.beforerender && aU.beforerender.call(aI, m);
				n !== !1 && (bO(j, aI.getScrollTop()), bs && aQ && aC.setStyle(aQ, "transform", "translate(0, " + -bw +
					"px) " + bz), a3 = j, aU.render && aU.render.call(aI, m)), c && c.call(aI, !1)
			}
			a7 = k
		},
		ac = function(j) {
			for (var k = 0, l = j.keyFrames.length; l > k; k++) {
				for (var m, n, o, p, q = j.keyFrames[k], r = {}; null !== (p = aP.exec(q.props));) {
					o = p[1], n = p[2], m = o.match(aT), null !== m ? (o = m[1], m = m[2]) : m = bE, n = n.indexOf(
						"!") ? af(n) : [n.slice(1)], r[o] = {
							value: n,
							easing: bF[m]
						}
				}
				q.props = r
			}
		},
		af = function(c) {
			var d = [];
			return be.lastIndex = 0, c = c.replace(be, function(b) {
				return b.replace(a5, function(e) {
					return e / 255 * 100 + "%"
				})
			}), bq && (bi.lastIndex = 0, c = c.replace(bi, function(b) {
				return bq + b
			})), c = c.replace(a5, function(b) {
				return d.push(+b), "{?}"
			}), d.unshift(c), d
		},
		aj = function(e) {
			var f, g, h = {};
			for (f = 0, g = e.keyFrames.length; g > f; f++) {
				an(e.keyFrames[f], h)
			}
			for (h = {}, f = e.keyFrames.length - 1; f >= 0; f--) {
				an(e.keyFrames[f], h)
			}
		},
		an = function(d, e) {
			var f;
			for (f in e) {
				aG.call(d.props, f) || (d.props[f] = e[f])
			}
			for (f in d.props) {
				e[f] = d.props[f]
			}
		},
		ar = function(g, h, i) {
			var j, k = g.length;
			if (k !== h.length) {
				throw "Can't interpolate between \"" + g[0] + '" and "' + h[0] + '"'
			}
			var l = [g[0]];
			for (j = 1; k > j; j++) {
				l[j] = g[j] + (h[j] - g[j]) * i
			}
			return l
		},
		aw = function(c) {
			var d = 1;
			return a9.lastIndex = 0, c[0].replace(a9, function() {
				return c[d++]
			})
		},
		aA = function(g, h) {
			g = [].concat(g);
			for (var i, j, k = 0, l = g.length; l > k; k++) {
				j = g[k], i = aM[j[az]], i && (h ? (j.style.cssText = i.dirtyStyleAttr, ax(j, i.dirtyClassAttr)) : (i
					.dirtyStyleAttr = j.style.cssText, i.dirtyClassAttr = at(j), j.style.cssText = i.styleAttr,
					ax(j, i.classAttr)))
			}
		},
		aE = function() {
			bz = "translateZ(0)", aC.setStyle(aQ, "transform", bz);
			var e = aO(aQ),
				f = e.getPropertyValue("transform"),
				g = e.getPropertyValue(bq + "transform"),
				h = f && "none" !== f || g && "none" !== g;
			h || (bz = "")
		};
	aC.setStyle = function(f, g, h) {
		var i = f.style;
		if (g = g.replace(aX, a1).replace("-", ""), "zIndex" === g) {
			isNaN(h) ? i[g] = h : i[g] = "" + (0 | h)
		} else {
			if ("float" === g) {
				i.styleFloat = i.cssFloat = h
			} else {
				try {
					bm && (i[bm + g.slice(0, 1).toUpperCase() + g.slice(1)] = h), i[g] = h
				} catch (j) {}
			}
		}
	};
	var aI, aM, aQ, aU, aY, a2, a6, bb, bf, bj, bn, br, bv, bz, bD, bG = aC.addEvent = function(a, i, j) {
			var k = function(c) {
				return c = c || ad.event, c.target || (c.target = c.srcElement), c.preventDefault || (c
					.preventDefault = function() {
						c.returnValue = !1, c.defaultPrevented = !0
					}), j.call(this, c)
			};
			i = i.split(" ");
			for (var l, m = 0, n = i.length; n > m; m++) {
				l = i[m], a.addEventListener ? a.addEventListener(l, j, !1) : a.attachEvent("on" + l, k), bA.push({
					element: a,
					name: l,
					listener: j
				})
			}
		},
		bJ = aC.removeEvent = function(f, g, h) {
			g = g.split(" ");
			for (var i = 0, j = g.length; j > i; i++) {
				f.removeEventListener ? f.removeEventListener(g[i], h, !1) : f.detachEvent("on" + g[i], h)
			}
		},
		bM = function() {
			for (var d, e = 0, f = bA.length; f > e; e++) {
				d = bA[e], bJ(d.element, d.name, d.listener)
			}
			bA = []
		},
		bP = function(d, e, f) {
			aU.keyframe && aU.keyframe.call(aI, d, e, f)
		},
		ag = function() {
			var b = aI.getScrollTop();
			aR = 0, aY && !bs && (ay.style.height = ""), bL(), aY && !bs && (ay.style.height = aR + au.clientHeight +
				"px"), bs ? aI.setScrollTop(aK.min(aI.getScrollTop(), aR)) : aI.setScrollTop(b, !0), br = !0
		},
		ak = function() {
			var e, f, g = au.clientHeight,
				h = {};
			for (e in a2) {
				f = a2[e], "function" == typeof f ? f = f.call(aI) : /p$/.test(f) && (f = f.slice(0, -1) / 100 * g), h[
					e] = f
			}
			return h
		},
		ao = function() {
			var c, d = 0;
			return aQ && (d = aK.max(aQ.offsetHeight, aQ.scrollHeight)), c = aK.max(d, ay.scrollHeight, ay.offsetHeight,
				au.scrollHeight, au.offsetHeight, au.clientHeight), c - au.clientHeight
		},
		at = function(a) {
			var d = "className";
			return ad.SVGElement && a instanceof ad.SVGElement && (a = a[d], d = "baseVal"), a[d]
		},
		ax = function(a, c, l) {
			var m = "className";
			if (ad.SVGElement && a instanceof ad.SVGElement && (a = a[m], m = "baseVal"), l === al) {
				return void(a[m] = c)
			}
			for (var n = a[m], o = 0, p = l.length; p > o; o++) {
				n = aF(n).replace(aF(l[o]), " ")
			}
			n = aB(n);
			for (var q = 0, r = c.length; r > q; q++) {
				-1 === aF(n).indexOf(aF(c[q])) && (n += " " + c[q])
			}
			a[m] = aB(n)
		},
		aB = function(b) {
			return b.replace(aH, "")
		},
		aF = function(b) {
			return " " + b + " "
		},
		aJ = Date.now || function() {
			return +new Date
		},
		aN = function(c, d) {
			return c.frame - d.frame
		},
		aR = 0,
		aV = 1,
		aZ = "down",
		a3 = -1,
		a7 = aJ(),
		bc = 0,
		bg = 0,
		bk = !1,
		bo = 0,
		bs = !1,
		bw = 0,
		bA = [];
	"function" == typeof define && define.amd ? define([], function() {
		return aC
	}) : "undefined" != typeof module && module.exports ? module.exports = aC : ad.skrollr = aC
}(window, document);
/** Validator v0.8.1 for Bootstrap 3, by @1000hz*/
+
function(f) {
	function g(a) {
		return this.each(function() {
			var b = f(this),
				d = f.extend({}, i.DEFAULTS, b.data(), "object" == typeof a && a),
				k = b.data("bs.validator");
			(k || "destroy" != a) && (k || b.data("bs.validator", k = new i(this, d)), "string" == typeof a &&
				k[a]())
		})
	}
	var h = ':input:not([type="submit"], button):enabled:visible',
		i = function(a, d) {
			this.$element = f(a), this.options = d, d.errors = f.extend({}, i.DEFAULTS.errors, d.errors);
			for (var k in d.custom) {
				if (!d.errors[k]) {
					throw new Error("Missing default error message for custom validator: " + k)
				}
			}
			f.extend(i.VALIDATORS, d.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element
				.on("input.bs.validator change.bs.validator focusout.bs.validator", f.proxy(this.validateInput, this)),
				this.$element.on("submit.bs.validator", f.proxy(this.onSubmit, this)), this.$element.find(
					"[data-match]").each(function() {
					var e = f(this),
						l = e.data("match");
					f(l).on("input.bs.validator", function() {
						e.val() && e.trigger("input.bs.validator")
					})
				})
		};
	i.DEFAULTS = {
		delay: 500,
		html: !1,
		disable: !0,
		custom: {},
		errors: {
			match: "Does not match",
			minlength: "Not long enough"
		},
		feedback: {
			success: "glyphicon-ok",
			error: "glyphicon-warning-sign"
		}
	}, i.VALIDATORS = {
		"native": function(c) {
			var d = c[0];
			return d.checkValidity ? d.checkValidity() : !0
		},
		match: function(a) {
			var d = a.data("match");
			return !a.val() || a.val() === f(d).val()
		},
		minlength: function(c) {
			var d = c.data("minlength");
			return !c.val() || c.val().length >= d
		}
	}, i.prototype.validateInput = function(a) {
		var k = f(a.target),
			l = k.data("bs.validator.errors");
		if (k.is('[type="radio"]') && (k = this.$element.find('input[name="' + k.attr("name") + '"]')), this
			.$element.trigger(a = f.Event("validate.bs.validator", {
				relatedTarget: k[0]
			})), !a.isDefaultPrevented()) {
			var m = this;
			this.runValidators(k).done(function(b) {
				k.data("bs.validator.errors", b), b.length ? m.showErrors(k) : m.clearErrors(k), l && b
					.toString() === l.toString() || (a = b.length ? f.Event("invalid.bs.validator", {
						relatedTarget: k[0],
						detail: b
					}) : f.Event("valid.bs.validator", {
						relatedTarget: k[0],
						detail: l
					}), m.$element.trigger(a)), m.toggleSubmit(), m.$element.trigger(f.Event(
						"validated.bs.validator", {
							relatedTarget: k[0]
						}))
			})
		}
	}, i.prototype.runValidators = function(a) {
		function d(b) {
			return a.data(b + "-error") || a.data("error") || "native" == b && a[0].validationMessage || m.errors[b]
		}
		var k = [],
			l = f.Deferred(),
			m = this.options;
		return a.data("bs.validator.deferred") && a.data("bs.validator.deferred").reject(), a.data(
			"bs.validator.deferred", l), f.each(i.VALIDATORS, f.proxy(function(b, c) {
			if ((a.data(b) || "native" == b) && !c.call(this, a)) {
				var e = d(b);
				!~k.indexOf(e) && k.push(e)
			}
		}, this)), !k.length && a.val() && a.data("remote") ? this.defer(a, function() {
			var b = {};
			b[a.attr("name")] = a.val(), f.get(a.data("remote"), b).fail(function(c, e, n) {
				k.push(d("remote") || n)
			}).always(function() {
				l.resolve(k)
			})
		}) : l.resolve(k), l.promise()
	}, i.prototype.validate = function() {
		var b = this.options.delay;
		return this.options.delay = 0, this.$element.find(h).trigger("input.bs.validator"), this.options.delay = b,
			this
	}, i.prototype.showErrors = function(a) {
		var d = this.options.html ? "html" : "text";
		this.defer(a, function() {
			var b = a.closest(".form-group"),
				c = b.find(".help-block.with-errors"),
				k = b.find(".form-control-feedback"),
				l = a.data("bs.validator.errors");
			l.length && (l = f("<ul/>").addClass("list-unstyled").append(f.map(l, function(e) {
					return f("<li/>")[d](e)
				})), void 0 === c.data("bs.validator.originalContent") && c.data(
					"bs.validator.originalContent", c.html()), c.empty().append(l), b.addClass(
					"has-error"), k.length && k.removeClass(this.options.feedback.success) && k
				.addClass(this.options.feedback.error) && b.removeClass("has-success"))
		})
	}, i.prototype.clearErrors = function(e) {
		var k = e.closest(".form-group"),
			l = k.find(".help-block.with-errors"),
			m = k.find(".form-control-feedback");
		l.html(l.data("bs.validator.originalContent")), k.removeClass("has-error"), m.length && m.removeClass(this
			.options.feedback.error) && m.addClass(this.options.feedback.success) && k.addClass("has-success")
	}, i.prototype.hasErrors = function() {
		function a() {
			return !!(f(this).data("bs.validator.errors") || []).length
		}
		return !!this.$element.find(h).filter(a).length
	}, i.prototype.isIncomplete = function() {
		function a() {
			return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !f('[name="' + this.name +
				'"]:checked').length : "" === f.trim(this.value)
		}
		return !!this.$element.find(h).filter("[required]").filter(a).length
	}, i.prototype.onSubmit = function(b) {
		this.validate(), (this.isIncomplete() || this.hasErrors()) && b.preventDefault()
	}, i.prototype.toggleSubmit = function() {
		if (this.options.disable) {
			var a = f('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") +
				'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
			a.toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({
				"pointer-events": "all",
				cursor: "pointer"
			})
		}
	}, i.prototype.defer = function(a, d) {
		return d = f.proxy(d, this), this.options.delay ? (window.clearTimeout(a.data("bs.validator.timeout")),
			void a.data("bs.validator.timeout", window.setTimeout(d, this.options.delay))) : d()
	}, i.prototype.destroy = function() {
		return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element
			.find(h).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(
				function() {
					var a = f(this),
						d = a.data("bs.validator.timeout");
					window.clearTimeout(d) && a.removeData("bs.validator.timeout")
				}), this.$element.find(".help-block.with-errors").each(function() {
				var a = f(this),
					d = a.data("bs.validator.originalContent");
				a.removeData("bs.validator.originalContent").html(d)
			}), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this
			.$element.find(".has-error").removeClass("has-error"), this
	};
	var j = f.fn.validator;
	f.fn.validator = g, f.fn.validator.Constructor = i, f.fn.validator.noConflict = function() {
		return f.fn.validator = j, this
	}, f(window).on("load", function() {
		f('form[data-toggle="validator"]').each(function() {
			var a = f(this);
			g.call(a, a.data())
		})
	})
}(jQuery);
! function() {
	var c, b = function(al, W) {
		function ak(i) {
			return Math.floor(i)
		}

		function af() {
			var k = an.params.autoplay,
				i = an.slides.eq(an.activeIndex);
			i.attr("data-swiper-autoplay") && (k = i.attr("data-swiper-autoplay") || an.params.autoplay), an
				.autoplayTimeoutId = setTimeout(function() {
					an.params.loop ? (an.fixLoop(), an._slideNext(), an.emit("onAutoplay", an)) : an.isEnd ? W
						.autoplayStopOnLast ? an.stopAutoplay() : (an._slideTo(0), an.emit("onAutoplay", an)) :
						(an._slideNext(), an.emit("onAutoplay", an))
				}, k)
		}

		function ag(k, n) {
			var m = c(k.target);
			if (!m.is(n)) {
				if ("string" == typeof n) {
					m = m.parents(n)
				} else {
					if (n.nodeType) {
						var l;
						return m.parents().each(function(o, i) {
							i === n && (l = n)
						}), l ? n : void 0
					}
				}
			}
			if (0 !== m.length) {
				return m[0]
			}
		}

		function ab(k, i) {
			i = i || {};
			var m = window.MutationObserver || window.WebkitMutationObserver,
				l = new m(function(n) {
					n.forEach(function(o) {
						an.onResize(!0), an.emit("onObserverUpdate", an, o)
					})
				});
			l.observe(k, {
				attributes: void 0 === i.attributes || i.attributes,
				childList: void 0 === i.childList || i.childList,
				characterData: void 0 === i.characterData || i.characterData
			}), an.observers.push(l)
		}

		function ai(m) {
			m.originalEvent && (m = m.originalEvent);
			var k = m.keyCode || m.charCode;
			if (!an.params.allowSwipeToNext && (an.isHorizontal() && 39 === k || !an.isHorizontal() && 40 === k)) {
				return !1
			}
			if (!an.params.allowSwipeToPrev && (an.isHorizontal() && 37 === k || !an.isHorizontal() && 38 === k)) {
				return !1
			}
			if (!(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey || document.activeElement && document
					.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() ||
						"textarea" === document.activeElement.nodeName.toLowerCase()))) {
				if (37 === k || 39 === k || 38 === k || 40 === k) {
					var B = !1;
					if (an.container.parents("." + an.params.slideClass).length > 0 && 0 === an.container.parents(
							"." + an.params.slideActiveClass).length) {
						return
					}
					var A = {
							left: window.pageXOffset,
							top: window.pageYOffset
						},
						u = window.innerWidth,
						z = window.innerHeight,
						w = an.container.offset();
					an.rtl && (w.left = w.left - an.container[0].scrollLeft);
					for (var x = [
							[w.left, w.top],
							[w.left + an.width, w.top],
							[w.left, w.top + an.height],
							[w.left + an.width, w.top + an.height]
						], v = 0; v < x.length; v++) {
						var y = x[v];
						y[0] >= A.left && y[0] <= A.left + u && y[1] >= A.top && y[1] <= A.top + z && (B = !0)
					}
					if (!B) {
						return
					}
				}
				an.isHorizontal() ? (37 !== k && 39 !== k || (m.preventDefault ? m.preventDefault() : m
					.returnValue = !1), (39 === k && !an.rtl || 37 === k && an.rtl) && an.slideNext(), (
					37 === k && !an.rtl || 39 === k && an.rtl) && an.slidePrev()) : (38 !== k && 40 !== k || (m
						.preventDefault ? m.preventDefault() : m.returnValue = !1), 40 === k && an.slideNext(),
					38 === k && an.slidePrev()), an.emit("onKeyPress", an, k)
			}
		}

		function F(l) {
			var k = 0,
				o = 0,
				n = 0,
				m = 0;
			return "detail" in l && (o = l.detail), "wheelDelta" in l && (o = -l.wheelDelta / 120), "wheelDeltaY" in
				l && (o = -l.wheelDeltaY / 120), "wheelDeltaX" in l && (k = -l.wheelDeltaX / 120), "axis" in l && l
				.axis === l.HORIZONTAL_AXIS && (k = o, o = 0), n = 10 * k, m = 10 * o, "deltaY" in l && (m = l
					.deltaY), "deltaX" in l && (n = l.deltaX), (n || m) && l.deltaMode && (1 === l.deltaMode ? (n *=
					40, m *= 40) : (n *= 800, m *= 800)), n && !k && (k = n < 1 ? -1 : 1), m && !o && (o = m < 1 ? -
					1 : 1), {
					spinX: k,
					spinY: o,
					pixelX: n,
					pixelY: m
				}
		}

		function ao(l) {
			l.originalEvent && (l = l.originalEvent);
			var k = 0,
				v = an.rtl ? -1 : 1,
				u = F(l);
			if (an.params.mousewheelForceToAxis) {
				if (an.isHorizontal()) {
					if (!(Math.abs(u.pixelX) > Math.abs(u.pixelY))) {
						return
					}
					k = u.pixelX * v
				} else {
					if (!(Math.abs(u.pixelY) > Math.abs(u.pixelX))) {
						return
					}
					k = u.pixelY
				}
			} else {
				k = Math.abs(u.pixelX) > Math.abs(u.pixelY) ? -u.pixelX * v : -u.pixelY
			}
			if (0 !== k) {
				if (an.params.mousewheelInvert && (k = -k), an.params.freeMode) {
					var m = an.getWrapperTranslate() + k * an.params.mousewheelSensitivity,
						p = an.isBeginning,
						o = an.isEnd;
					if (m >= an.minTranslate() && (m = an.minTranslate()), m <= an.maxTranslate() && (m = an
							.maxTranslate()), an.setWrapperTransition(0), an.setWrapperTranslate(m), an
						.updateProgress(), an.updateActiveIndex(), (!p && an.isBeginning || !o && an.isEnd) && an
						.updateClasses(), an.params.freeModeSticky ? (clearTimeout(an.mousewheel.timeout), an
							.mousewheel.timeout = setTimeout(function() {
								an.slideReset()
							}, 300)) : an.params.lazyLoading && an.lazy && an.lazy.load(), an.emit("onScroll", an,
							l), an.params.autoplay && an.params.autoplayDisableOnInteraction && an.stopAutoplay(),
						0 === m || m === an.maxTranslate()) {
						return
					}
				} else {
					if ((new window.Date).getTime() - an.mousewheel.lastScrollTime > 60) {
						if (k < 0) {
							if (an.isEnd && !an.params.loop || an.animating) {
								if (an.params.mousewheelReleaseOnEdges) {
									return !0
								}
							} else {
								an.slideNext(), an.emit("onScroll", an, l)
							}
						} else {
							if (an.isBeginning && !an.params.loop || an.animating) {
								if (an.params.mousewheelReleaseOnEdges) {
									return !0
								}
							} else {
								an.slidePrev(), an.emit("onScroll", an, l)
							}
						}
					}
					an.mousewheel.lastScrollTime = (new window.Date).getTime()
				}
				return l.preventDefault ? l.preventDefault() : l.returnValue = !1, !1
			}
		}

		function q(k, u) {
			k = c(k);
			var p, l, o, m = an.rtl ? -1 : 1;
			p = k.attr("data-swiper-parallax") || "0", l = k.attr("data-swiper-parallax-x"), o = k.attr(
					"data-swiper-parallax-y"), l || o ? (l = l || "0", o = o || "0") : an.isHorizontal() ? (l = p,
					o = "0") : (o = p, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * u * m + "%" : l * u *
				m + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * u + "%" : o * u + "px", k.transform(
					"translate3d(" + l + ", " + o + ",0px)")
		}

		function ad(i) {
			return 0 !== i.indexOf("on") && (i = i[0] !== i[0].toUpperCase() ? "on" + i[0].toUpperCase() + i
				.substring(1) : "on" + i), i
		}
		if (!(this instanceof b)) {
			return new b(al, W)
		}
		var U = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				autoplayStopOnLast: !1,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeMomentumVelocityRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: 0.02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				flip: {
					slideShadows: !0,
					limitRotation: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: 0.94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				zoom: !1,
				zoomMax: 3,
				zoomMin: 1,
				zoomToggle: !0,
				scrollbar: null,
				scrollbarHide: !0,
				scrollbarDraggable: !1,
				scrollbarSnapOnRelease: !1,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelReleaseOnEdges: !1,
				mousewheelInvert: !1,
				mousewheelForceToAxis: !1,
				mousewheelSensitivity: 1,
				mousewheelEventsTarged: "container",
				hashnav: !1,
				hashnavWatchState: !1,
				history: !1,
				replaceState: !1,
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: 0.5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				pagination: null,
				paginationElement: "span",
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				paginationProgressRender: null,
				paginationFractionRender: null,
				paginationCustomRender: null,
				paginationType: "bullets",
				resistance: !0,
				resistanceRatio: 0.85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingInPrevNextAmount: 1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				controlBy: "slide",
				normalizeSlideIndex: !0,
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				passiveListeners: !0,
				containerModifierClass: "swiper-container-",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slideDuplicateNextClass: "swiper-slide-duplicate-next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationCurrentClass: "swiper-pagination-current",
				paginationTotalClass: "swiper-pagination-total",
				paginationHiddenClass: "swiper-pagination-hidden",
				paginationProgressbarClass: "swiper-pagination-progressbar",
				paginationClickableClass: "swiper-pagination-clickable",
				paginationModifierClass: "swiper-pagination-",
				lazyLoadingClass: "swiper-lazy",
				lazyStatusLoadingClass: "swiper-lazy-loading",
				lazyStatusLoadedClass: "swiper-lazy-loaded",
				lazyPreloaderClass: "swiper-lazy-preloader",
				notificationClass: "swiper-notification",
				preloaderClass: "preloader",
				zoomContainerClass: "swiper-zoom-container",
				observer: !1,
				observeParents: !1,
				a11y: !1,
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				runCallbacksOnInit: !0
			},
			Q = W && W.virtualTranslate;
		W = W || {};
		var N = {};
		for (var ap in W) {
			if ("object" != typeof W[ap] || null === W[ap] || (W[ap].nodeType || W[ap] === window || W[ap] ===
					document || void 0 !== h && W[ap] instanceof h || "undefined" != typeof jQuery && W[
					ap] instanceof jQuery)) {
				N[ap] = W[ap]
			} else {
				N[ap] = {};
				for (var aq in W[ap]) {
					N[ap][aq] = W[ap][aq]
				}
			}
		}
		for (var au in U) {
			if (void 0 === W[au]) {
				W[au] = U[au]
			} else {
				if ("object" == typeof W[au]) {
					for (var ar in U[au]) {
						void 0 === W[au][ar] && (W[au][ar] = U[au][ar])
					}
				}
			}
		}
		var an = this;
		if (an.params = W, an.originalParams = N, an.classNames = [], void 0 !== c && void 0 !== h && (c = h), (
				void 0 !== c || (c = void 0 === h ? window.Dom7 || window.Zepto || window.jQuery : h)) && (an.$ = c,
				an.currentBreakpoint = void 0, an.getActiveBreakpoint = function() {
					if (!an.params.breakpoints) {
						return !1
					}
					var k, i = !1,
						m = [];
					for (k in an.params.breakpoints) {
						an.params.breakpoints.hasOwnProperty(k) && m.push(k)
					}
					m.sort(function(o, n) {
						return parseInt(o, 10) > parseInt(n, 10)
					});
					for (var l = 0; l < m.length; l++) {
						(k = m[l]) >= window.innerWidth && !i && (i = k)
					}
					return i || "max"
				}, an.setBreakpoint = function() {
					var k = an.getActiveBreakpoint();
					if (k && an.currentBreakpoint !== k) {
						var i = k in an.params.breakpoints ? an.params.breakpoints[k] : an.originalParams,
							m = an.params.loop && i.slidesPerView !== an.params.slidesPerView;
						for (var l in i) {
							an.params[l] = i[l]
						}
						an.currentBreakpoint = k, m && an.destroyLoop && an.reLoop(!0)
					}
				}, an.params.breakpoints && an.setBreakpoint(), an.container = c(al), 0 !== an.container.length)) {
			if (an.container.length > 1) {
				var e = [];
				return an.container.each(function() {
					e.push(new b(this, W))
				}), e
			}
			an.container[0].swiper = an, an.container.data("swiper", an), an.classNames.push(an.params
					.containerModifierClass + an.params.direction), an.params.freeMode && an.classNames.push(an
					.params.containerModifierClass + "free-mode"), an.support.flexbox || (an.classNames.push(an
					.params.containerModifierClass + "no-flexbox"), an.params.slidesPerColumn = 1), an.params
				.autoHeight && an.classNames.push(an.params.containerModifierClass + "autoheight"), (an.params
					.parallax || an.params.watchSlidesVisibility) && (an.params.watchSlidesProgress = !0), an.params
				.touchReleaseOnEdges && (an.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(an
					.params.effect) >= 0 && (an.support.transforms3d ? (an.params.watchSlidesProgress = !0, an
					.classNames.push(an.params.containerModifierClass + "3d")) : an.params.effect = "slide"),
				"slide" !== an.params.effect && an.classNames.push(an.params.containerModifierClass + an.params
					.effect), "cube" === an.params.effect && (an.params.resistanceRatio = 0, an.params
					.slidesPerView = 1, an.params.slidesPerColumn = 1, an.params.slidesPerGroup = 1, an.params
					.centeredSlides = !1, an.params.spaceBetween = 0, an.params.virtualTranslate = !0), "fade" !==
				an.params.effect && "flip" !== an.params.effect || (an.params.slidesPerView = 1, an.params
					.slidesPerColumn = 1, an.params.slidesPerGroup = 1, an.params.watchSlidesProgress = !0, an
					.params.spaceBetween = 0, void 0 === Q && (an.params.virtualTranslate = !0)), an.params
				.grabCursor && an.support.touch && (an.params.grabCursor = !1), an.wrapper = an.container.children(
					"." + an.params.wrapperClass), an.params.pagination && (an.paginationContainer = c(an.params
						.pagination), an.params.uniqueNavElements && "string" == typeof an.params.pagination && an
					.paginationContainer.length > 1 && 1 === an.container.find(an.params.pagination).length && (an
						.paginationContainer = an.container.find(an.params.pagination)), "bullets" === an.params
					.paginationType && an.params.paginationClickable ? an.paginationContainer.addClass(an.params
						.paginationModifierClass + "clickable") : an.params.paginationClickable = !1, an
					.paginationContainer.addClass(an.params.paginationModifierClass + an.params.paginationType)), (
					an.params.nextButton || an.params.prevButton) && (an.params.nextButton && (an.nextButton = c(an
							.params.nextButton), an.params.uniqueNavElements && "string" == typeof an.params
						.nextButton && an.nextButton.length > 1 && 1 === an.container.find(an.params.nextButton)
						.length && (an.nextButton = an.container.find(an.params.nextButton))), an.params
					.prevButton && (an.prevButton = c(an.params.prevButton), an.params.uniqueNavElements &&
						"string" == typeof an.params.prevButton && an.prevButton.length > 1 && 1 === an.container
						.find(an.params.prevButton).length && (an.prevButton = an.container.find(an.params
							.prevButton)))), an.isHorizontal = function() {
					return "horizontal" === an.params.direction
				}, an.rtl = an.isHorizontal() && ("rtl" === an.container[0].dir.toLowerCase() || "rtl" === an
					.container.css("direction")), an.rtl && an.classNames.push(an.params.containerModifierClass +
					"rtl"), an.rtl && (an.wrongRTL = "-webkit-box" === an.wrapper.css("display")), an.params
				.slidesPerColumn > 1 && an.classNames.push(an.params.containerModifierClass + "multirow"), an.device
				.android && an.classNames.push(an.params.containerModifierClass + "android"), an.container.addClass(
					an.classNames.join(" ")), an.translate = 0, an.progress = 0, an.velocity = 0, an
				.lockSwipeToNext = function() {
					an.params.allowSwipeToNext = !1, an.params.allowSwipeToPrev === !1 && an.params.grabCursor && an
						.unsetGrabCursor()
				}, an.lockSwipeToPrev = function() {
					an.params.allowSwipeToPrev = !1, an.params.allowSwipeToNext === !1 && an.params.grabCursor && an
						.unsetGrabCursor()
				}, an.lockSwipes = function() {
					an.params.allowSwipeToNext = an.params.allowSwipeToPrev = !1, an.params.grabCursor && an
						.unsetGrabCursor()
				}, an.unlockSwipeToNext = function() {
					an.params.allowSwipeToNext = !0, an.params.allowSwipeToPrev === !0 && an.params.grabCursor && an
						.setGrabCursor()
				}, an.unlockSwipeToPrev = function() {
					an.params.allowSwipeToPrev = !0, an.params.allowSwipeToNext === !0 && an.params.grabCursor && an
						.setGrabCursor()
				}, an.unlockSwipes = function() {
					an.params.allowSwipeToNext = an.params.allowSwipeToPrev = !0, an.params.grabCursor && an
						.setGrabCursor()
				}, an.setGrabCursor = function(i) {
					an.container[0].style.cursor = "move", an.container[0].style.cursor = i ? "-webkit-grabbing" :
						"-webkit-grab", an.container[0].style.cursor = i ? "-moz-grabbin" : "-moz-grab", an
						.container[0].style.cursor = i ? "grabbing" : "grab"
				}, an.unsetGrabCursor = function() {
					an.container[0].style.cursor = ""
				}, an.params.grabCursor && an.setGrabCursor(), an.imagesToLoad = [], an.imagesLoaded = 0, an
				.loadImage = function(l, k, x, w, m, v) {
					function p() {
						v && v()
					}
					var u;
					l.complete && m ? p() : k ? (u = new window.Image, u.onload = p, u.onerror = p, w && (u.sizes =
						w), x && (u.srcset = x), k && (u.src = k)) : p()
				}, an.preloadImages = function() {
					function k() {
						void 0 !== an && null !== an && an && (void 0 !== an.imagesLoaded && an.imagesLoaded++, an
							.imagesLoaded === an.imagesToLoad.length && (an.params.updateOnImagesReady && an
								.update(), an.emit("onImagesReady", an)))
					}
					an.imagesToLoad = an.container.find("img");
					for (var i = 0; i < an.imagesToLoad.length; i++) {
						an.loadImage(an.imagesToLoad[i], an.imagesToLoad[i].currentSrc || an.imagesToLoad[i]
							.getAttribute("src"), an.imagesToLoad[i].srcset || an.imagesToLoad[i].getAttribute(
								"srcset"), an.imagesToLoad[i].sizes || an.imagesToLoad[i].getAttribute("sizes"),
							!0, k)
					}
				}, an.autoplayTimeoutId = void 0, an.autoplaying = !1, an.autoplayPaused = !1, an.startAutoplay =
				function() {
					return void 0 === an.autoplayTimeoutId && (!!an.params.autoplay && (!an.autoplaying && (an
						.autoplaying = !0, an.emit("onAutoplayStart", an), void af())))
				}, an.stopAutoplay = function(i) {
					an.autoplayTimeoutId && (an.autoplayTimeoutId && clearTimeout(an.autoplayTimeoutId), an
						.autoplaying = !1, an.autoplayTimeoutId = void 0, an.emit("onAutoplayStop", an))
				}, an.pauseAutoplay = function(i) {
					an.autoplayPaused || (an.autoplayTimeoutId && clearTimeout(an.autoplayTimeoutId), an
						.autoplayPaused = !0, 0 === i ? (an.autoplayPaused = !1, af()) : an.wrapper
						.transitionEnd(function() {
							an && (an.autoplayPaused = !1, an.autoplaying ? af() : an.stopAutoplay())
						}))
				}, an.minTranslate = function() {
					return -an.snapGrid[0]
				}, an.maxTranslate = function() {
					return -an.snapGrid[an.snapGrid.length - 1]
				}, an.updateAutoHeight = function() {
					var l, k = [],
						o = 0;
					if ("auto" !== an.params.slidesPerView && an.params.slidesPerView > 1) {
						for (l = 0; l < Math.ceil(an.params.slidesPerView); l++) {
							var n = an.activeIndex + l;
							if (n > an.slides.length) {
								break
							}
							k.push(an.slides.eq(n)[0])
						}
					} else {
						k.push(an.slides.eq(an.activeIndex)[0])
					}
					for (l = 0; l < k.length; l++) {
						if (void 0 !== k[l]) {
							var m = k[l].offsetHeight;
							o = m > o ? m : o
						}
					}
					o && an.wrapper.css("height", o + "px")
				}, an.updateContainerSize = function() {
					var k, i;
					k = void 0 !== an.params.width ? an.params.width : an.container[0].clientWidth, i = void 0 !==
						an.params.height ? an.params.height : an.container[0].clientHeight, 0 === k && an
						.isHorizontal() || 0 === i && !an.isHorizontal() || (k = k - parseInt(an.container.css(
								"padding-left"), 10) - parseInt(an.container.css("padding-right"), 10), i = i -
							parseInt(an.container.css("padding-top"), 10) - parseInt(an.container.css(
								"padding-bottom"), 10), an.width = k, an.height = i, an.size = an.isHorizontal() ?
							an.width : an.height)
				}, an.updateSlidesSize = function() {
					an.slides = an.wrapper.children("." + an.params.slideClass), an.snapGrid = [], an
					.slidesGrid = [], an.slidesSizesGrid = [];
					var w, k = an.params.spaceBetween,
						H = -an.params.slidesOffsetBefore,
						G = 0,
						z = 0;
					if (void 0 !== an.size) {
						"string" == typeof k && k.indexOf("%") >= 0 && (k = parseFloat(k.replace("%", "")) / 100 *
							an.size), an.virtualSize = -k, an.rtl ? an.slides.css({
							marginLeft: "",
							marginTop: ""
						}) : an.slides.css({
							marginRight: "",
							marginBottom: ""
						});
						var C;
						an.params.slidesPerColumn > 1 && (C = Math.floor(an.slides.length / an.params
								.slidesPerColumn) === an.slides.length / an.params.slidesPerColumn ? an.slides
							.length : Math.ceil(an.slides.length / an.params.slidesPerColumn) * an.params
							.slidesPerColumn, "auto" !== an.params.slidesPerView && "row" === an.params
							.slidesPerColumnFill && (C = Math.max(C, an.params.slidesPerView * an.params
								.slidesPerColumn)));
						var D, A = an.params.slidesPerColumn,
							E = C / A,
							v = E - (an.params.slidesPerColumn * E - an.slides.length);
						for (w = 0; w < an.slides.length; w++) {
							D = 0;
							var I = an.slides.eq(w);
							if (an.params.slidesPerColumn > 1) {
								var r, B, y;
								"column" === an.params.slidesPerColumnFill ? (B = Math.floor(w / A), y = w - B * A,
									(B > v || B === v && y === A - 1) && ++y >= A && (y = 0, B++), r = B + y *
									C / A, I.css({
										"-webkit-box-ordinal-group": r,
										"-moz-box-ordinal-group": r,
										"-ms-flex-order": r,
										"-webkit-order": r,
										order: r
									})) : (y = Math.floor(w / E), B = w - y * E), I.css("margin-" + (an
										.isHorizontal() ? "top" : "left"), 0 !== y && an.params.spaceBetween &&
									an.params.spaceBetween + "px").attr("data-swiper-column", B).attr(
									"data-swiper-row", y)
							}
							"none" !== I.css("display") && ("auto" === an.params.slidesPerView ? (D = an
									.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0), an.params
									.roundLengths && (D = ak(D))) : (D = (an.size - (an.params.slidesPerView -
										1) * k) / an.params.slidesPerView, an.params.roundLengths && (D = ak(
									D)), an.isHorizontal() ? an.slides[w].style.width = D + "px" : an.slides[w]
									.style.height = D + "px"), an.slides[w].swiperSlideSize = D, an
								.slidesSizesGrid.push(D), an.params.centeredSlides ? (H = H + D / 2 + G / 2 + k,
									0 === G && 0 !== w && (H = H - an.size / 2 - k), 0 === w && (H = H - an
										.size / 2 - k), Math.abs(H) < 0.001 && (H = 0), z % an.params
									.slidesPerGroup == 0 && an.snapGrid.push(H), an.slidesGrid.push(H)) : (z %
									an.params.slidesPerGroup == 0 && an.snapGrid.push(H), an.slidesGrid.push(H),
									H = H + D + k), an.virtualSize += D + k, G = D, z++)
						}
						an.virtualSize = Math.max(an.virtualSize, an.size) + an.params.slidesOffsetAfter;
						var x;
						if (an.rtl && an.wrongRTL && ("slide" === an.params.effect || "coverflow" === an.params
								.effect) && an.wrapper.css({
								width: an.virtualSize + an.params.spaceBetween + "px"
							}), an.support.flexbox && !an.params.setWrapperSize || (an.isHorizontal() ? an.wrapper
								.css({
									width: an.virtualSize + an.params.spaceBetween + "px"
								}) : an.wrapper.css({
									height: an.virtualSize + an.params.spaceBetween + "px"
								})), an.params.slidesPerColumn > 1 && (an.virtualSize = (D + an.params
								.spaceBetween) * C, an.virtualSize = Math.ceil(an.virtualSize / an.params
									.slidesPerColumn) - an.params.spaceBetween, an.isHorizontal() ? an.wrapper.css({
									width: an.virtualSize + an.params.spaceBetween + "px"
								}) : an.wrapper.css({
									height: an.virtualSize + an.params.spaceBetween + "px"
								}), an.params.centeredSlides)) {
							for (x = [], w = 0; w < an.snapGrid.length; w++) {
								an.snapGrid[w] < an.virtualSize + an.snapGrid[0] && x.push(an.snapGrid[w])
							}
							an.snapGrid = x
						}
						if (!an.params.centeredSlides) {
							for (x = [], w = 0; w < an.snapGrid.length; w++) {
								an.snapGrid[w] <= an.virtualSize - an.size && x.push(an.snapGrid[w])
							}
							an.snapGrid = x, Math.floor(an.virtualSize - an.size) - Math.floor(an.snapGrid[an
								.snapGrid.length - 1]) > 1 && an.snapGrid.push(an.virtualSize - an.size)
						}
						0 === an.snapGrid.length && (an.snapGrid = [0]), 0 !== an.params.spaceBetween && (an
							.isHorizontal() ? an.rtl ? an.slides.css({
								marginLeft: k + "px"
							}) : an.slides.css({
								marginRight: k + "px"
							}) : an.slides.css({
								marginBottom: k + "px"
							})), an.params.watchSlidesProgress && an.updateSlidesOffset()
					}
				}, an.updateSlidesOffset = function() {
					for (var i = 0; i < an.slides.length; i++) {
						an.slides[i].swiperSlideOffset = an.isHorizontal() ? an.slides[i].offsetLeft : an.slides[i]
							.offsetTop
					}
				}, an.currentSlidesPerView = function() {
					var l, k, o = 1;
					if (an.params.centeredSlides) {
						var n, m = an.slides[an.activeIndex].swiperSlideSize;
						for (l = an.activeIndex + 1; l < an.slides.length; l++) {
							an.slides[l] && !n && (m += an.slides[l].swiperSlideSize, o++, m > an.size && (n = !0))
						}
						for (k = an.activeIndex - 1; k >= 0; k--) {
							an.slides[k] && !n && (m += an.slides[k].swiperSlideSize, o++, m > an.size && (n = !0))
						}
					} else {
						for (l = an.activeIndex + 1; l < an.slides.length; l++) {
							an.slidesGrid[l] - an.slidesGrid[an.activeIndex] < an.size && o++
						}
					}
					return o
				}, an.updateSlidesProgress = function(l) {
					if (void 0 === l && (l = an.translate || 0), 0 !== an.slides.length) {
						void 0 === an.slides[0].swiperSlideOffset && an.updateSlidesOffset();
						var k = -l;
						an.rtl && (k = l), an.slides.removeClass(an.params.slideVisibleClass);
						for (var v = 0; v < an.slides.length; v++) {
							var u = an.slides[v],
								m = (k + (an.params.centeredSlides ? an.minTranslate() : 0) - u.swiperSlideOffset) /
								(u.swiperSlideSize + an.params.spaceBetween);
							if (an.params.watchSlidesVisibility) {
								var p = -(k - u.swiperSlideOffset),
									o = p + an.slidesSizesGrid[v];
								(p >= 0 && p < an.size || o > 0 && o <= an.size || p <= 0 && o >= an.size) && an
									.slides.eq(v).addClass(an.params.slideVisibleClass)
							}
							u.progress = an.rtl ? -m : m
						}
					}
				}, an.updateProgress = function(k) {
					void 0 === k && (k = an.translate || 0);
					var i = an.maxTranslate() - an.minTranslate(),
						m = an.isBeginning,
						l = an.isEnd;
					0 === i ? (an.progress = 0, an.isBeginning = an.isEnd = !0) : (an.progress = (k - an
							.minTranslate()) / i, an.isBeginning = an.progress <= 0, an.isEnd = an.progress >=
						1), an.isBeginning && !m && an.emit("onReachBeginning", an), an.isEnd && !l && an.emit(
						"onReachEnd", an), an.params.watchSlidesProgress && an.updateSlidesProgress(k), an.emit(
						"onProgress", an, an.progress)
				}, an.updateActiveIndex = function() {
					var k, i, m, l = an.rtl ? an.translate : -an.translate;
					for (i = 0; i < an.slidesGrid.length; i++) {
						void 0 !== an.slidesGrid[i + 1] ? l >= an.slidesGrid[i] && l < an.slidesGrid[i + 1] - (an
								.slidesGrid[i + 1] - an.slidesGrid[i]) / 2 ? k = i : l >= an.slidesGrid[i] && l < an
							.slidesGrid[i + 1] && (k = i + 1) : l >= an.slidesGrid[i] && (k = i)
					}
					an.params.normalizeSlideIndex && (k < 0 || void 0 === k) && (k = 0), m = Math.floor(k / an
							.params.slidesPerGroup), m >= an.snapGrid.length && (m = an.snapGrid.length - 1), k !==
						an.activeIndex && (an.snapIndex = m, an.previousIndex = an.activeIndex, an.activeIndex = k,
							an.updateClasses(), an.updateRealIndex())
				}, an.updateRealIndex = function() {
					an.realIndex = parseInt(an.slides.eq(an.activeIndex).attr("data-swiper-slide-index") || an
						.activeIndex, 10)
				}, an.updateClasses = function() {
					an.slides.removeClass(an.params.slideActiveClass + " " + an.params.slideNextClass + " " + an
						.params.slidePrevClass + " " + an.params.slideDuplicateActiveClass + " " + an.params
						.slideDuplicateNextClass + " " + an.params.slideDuplicatePrevClass);
					var i = an.slides.eq(an.activeIndex);
					i.addClass(an.params.slideActiveClass), W.loop && (i.hasClass(an.params.slideDuplicateClass) ?
						an.wrapper.children("." + an.params.slideClass + ":not(." + an.params
							.slideDuplicateClass + ')[data-swiper-slide-index="' + an.realIndex + '"]')
						.addClass(an.params.slideDuplicateActiveClass) : an.wrapper.children("." + an.params
							.slideClass + "." + an.params.slideDuplicateClass + '[data-swiper-slide-index="' +
							an.realIndex + '"]').addClass(an.params.slideDuplicateActiveClass));
					var y = i.next("." + an.params.slideClass).addClass(an.params.slideNextClass);
					an.params.loop && 0 === y.length && (y = an.slides.eq(0), y.addClass(an.params.slideNextClass));
					var x = i.prev("." + an.params.slideClass).addClass(an.params.slidePrevClass);
					if (an.params.loop && 0 === x.length && (x = an.slides.eq(-1), x.addClass(an.params
							.slidePrevClass)), W.loop && (y.hasClass(an.params.slideDuplicateClass) ? an.wrapper
							.children("." + an.params.slideClass + ":not(." + an.params.slideDuplicateClass +
								')[data-swiper-slide-index="' + y.attr("data-swiper-slide-index") + '"]').addClass(
								an.params.slideDuplicateNextClass) : an.wrapper.children("." + an.params
								.slideClass + "." + an.params.slideDuplicateClass + '[data-swiper-slide-index="' + y
								.attr("data-swiper-slide-index") + '"]').addClass(an.params
							.slideDuplicateNextClass), x.hasClass(an.params.slideDuplicateClass) ? an.wrapper
							.children("." + an.params.slideClass + ":not(." + an.params.slideDuplicateClass +
								')[data-swiper-slide-index="' + x.attr("data-swiper-slide-index") + '"]').addClass(
								an.params.slideDuplicatePrevClass) : an.wrapper.children("." + an.params
								.slideClass + "." + an.params.slideDuplicateClass + '[data-swiper-slide-index="' + x
								.attr("data-swiper-slide-index") + '"]').addClass(an.params.slideDuplicatePrevClass)
							), an.paginationContainer && an.paginationContainer.length > 0) {
						var w, m = an.params.loop ? Math.ceil((an.slides.length - 2 * an.loopedSlides) / an.params
							.slidesPerGroup) : an.snapGrid.length;
						if (an.params.loop ? (w = Math.ceil((an.activeIndex - an.loopedSlides) / an.params
									.slidesPerGroup), w > an.slides.length - 1 - 2 * an.loopedSlides && (w -= an
									.slides.length - 2 * an.loopedSlides), w > m - 1 && (w -= m), w < 0 &&
								"bullets" !== an.params.paginationType && (w = m + w)) : w = void 0 !== an
							.snapIndex ? an.snapIndex : an.activeIndex || 0, "bullets" === an.params
							.paginationType && an.bullets && an.bullets.length > 0 && (an.bullets.removeClass(an
								.params.bulletActiveClass), an.paginationContainer.length > 1 ? an.bullets.each(
								function() {
									c(this).index() === w && c(this).addClass(an.params.bulletActiveClass)
								}) : an.bullets.eq(w).addClass(an.params.bulletActiveClass)), "fraction" === an
							.params.paginationType && (an.paginationContainer.find("." + an.params
								.paginationCurrentClass).text(w + 1), an.paginationContainer.find("." + an
								.params.paginationTotalClass).text(m)), "progress" === an.params.paginationType) {
							var u = (w + 1) / m,
								k = u,
								v = 1;
							an.isHorizontal() || (v = u, k = 1), an.paginationContainer.find("." + an.params
								.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + k +
								") scaleY(" + v + ")").transition(an.params.speed)
						}
						"custom" === an.params.paginationType && an.params.paginationCustomRender && (an
							.paginationContainer.html(an.params.paginationCustomRender(an, w + 1, m)), an.emit(
								"onPaginationRendered", an, an.paginationContainer[0]))
					}
					an.params.loop || (an.params.prevButton && an.prevButton && an.prevButton.length > 0 && (an
							.isBeginning ? (an.prevButton.addClass(an.params.buttonDisabledClass), an.params
								.a11y && an.a11y && an.a11y.disable(an.prevButton)) : (an.prevButton
								.removeClass(an.params.buttonDisabledClass), an.params.a11y && an.a11y && an
								.a11y.enable(an.prevButton))), an.params.nextButton && an.nextButton && an
						.nextButton.length > 0 && (an.isEnd ? (an.nextButton.addClass(an.params
							.buttonDisabledClass), an.params.a11y && an.a11y && an.a11y.disable(an
							.nextButton)) : (an.nextButton.removeClass(an.params.buttonDisabledClass), an
							.params.a11y && an.a11y && an.a11y.enable(an.nextButton))))
				}, an.updatePagination = function() {
					if (an.params.pagination && an.paginationContainer && an.paginationContainer.length > 0) {
						var k = "";
						if ("bullets" === an.params.paginationType) {
							for (var i = an.params.loop ? Math.ceil((an.slides.length - 2 * an.loopedSlides) / an
									.params.slidesPerGroup) : an.snapGrid.length, l = 0; l < i; l++) {
								k += an.params.paginationBulletRender ? an.params.paginationBulletRender(an, l, an
										.params.bulletClass) : "<" + an.params.paginationElement + ' class="' + an
									.params.bulletClass + '"></' + an.params.paginationElement + ">"
							}
							an.paginationContainer.html(k), an.bullets = an.paginationContainer.find("." + an.params
									.bulletClass), an.params.paginationClickable && an.params.a11y && an.a11y && an
								.a11y.initPagination()
						}
						"fraction" === an.params.paginationType && (k = an.params.paginationFractionRender ? an
								.params.paginationFractionRender(an, an.params.paginationCurrentClass, an.params
									.paginationTotalClass) : '<span class="' + an.params.paginationCurrentClass +
								'"></span> / <span class="' + an.params.paginationTotalClass + '"></span>', an
								.paginationContainer.html(k)), "progress" === an.params.paginationType && (k = an
								.params.paginationProgressRender ? an.params.paginationProgressRender(an, an.params
									.paginationProgressbarClass) : '<span class="' + an.params
								.paginationProgressbarClass + '"></span>', an.paginationContainer.html(k)),
							"custom" !== an.params.paginationType && an.emit("onPaginationRendered", an, an
								.paginationContainer[0])
					}
				}, an.update = function(k) {
					function i() {
						an.rtl, an.translate;
						l = Math.min(Math.max(an.translate, an.maxTranslate()), an.minTranslate()), an
							.setWrapperTranslate(l), an.updateActiveIndex(), an.updateClasses()
					}
					if (an) {
						an.updateContainerSize(), an.updateSlidesSize(), an.updateProgress(), an.updatePagination(),
							an.updateClasses(), an.params.scrollbar && an.scrollbar && an.scrollbar.set();
						var l;
						if (k) {
							an.controller && an.controller.spline && (an.controller.spline = void 0), an.params
								.freeMode ? (i(), an.params.autoHeight && an.updateAutoHeight()) : (("auto" === an
										.params.slidesPerView || an.params.slidesPerView > 1) && an.isEnd && !an
									.params.centeredSlides ? an.slideTo(an.slides.length - 1, 0, !1, !0) : an
									.slideTo(an.activeIndex, 0, !1, !0)) || i()
						} else {
							an.params.autoHeight && an.updateAutoHeight()
						}
					}
				}, an.onResize = function(l) {
					an.params.onBeforeResize && an.params.onBeforeResize(an), an.params.breakpoints && an
						.setBreakpoint();
					var k = an.params.allowSwipeToPrev,
						o = an.params.allowSwipeToNext;
					an.params.allowSwipeToPrev = an.params.allowSwipeToNext = !0, an.updateContainerSize(), an
						.updateSlidesSize(), ("auto" === an.params.slidesPerView || an.params.freeMode || l) && an
						.updatePagination(), an.params.scrollbar && an.scrollbar && an.scrollbar.set(), an
						.controller && an.controller.spline && (an.controller.spline = void 0);
					var n = !1;
					if (an.params.freeMode) {
						var m = Math.min(Math.max(an.translate, an.maxTranslate()), an.minTranslate());
						an.setWrapperTranslate(m), an.updateActiveIndex(), an.updateClasses(), an.params
							.autoHeight && an.updateAutoHeight()
					} else {
						an.updateClasses(), n = ("auto" === an.params.slidesPerView || an.params.slidesPerView >
							1) && an.isEnd && !an.params.centeredSlides ? an.slideTo(an.slides.length - 1, 0, !1, !
								0) : an.slideTo(an.activeIndex, 0, !1, !0)
					}
					an.params.lazyLoading && !n && an.lazy && an.lazy.load(), an.params.allowSwipeToPrev = k, an
						.params.allowSwipeToNext = o, an.params.onAfterResize && an.params.onAfterResize(an)
				}, an.touchEventsDesktop = {
					start: "mousedown",
					move: "mousemove",
					end: "mouseup"
				}, window.navigator.pointerEnabled ? an.touchEventsDesktop = {
					start: "pointerdown",
					move: "pointermove",
					end: "pointerup"
				} : window.navigator.msPointerEnabled && (an.touchEventsDesktop = {
					start: "MSPointerDown",
					move: "MSPointerMove",
					end: "MSPointerUp"
				}), an.touchEvents = {
					start: an.support.touch || !an.params.simulateTouch ? "touchstart" : an.touchEventsDesktop
						.start,
					move: an.support.touch || !an.params.simulateTouch ? "touchmove" : an.touchEventsDesktop.move,
					end: an.support.touch || !an.params.simulateTouch ? "touchend" : an.touchEventsDesktop.end
				}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === an
					.params.touchEventsTarget ? an.container : an.wrapper).addClass("swiper-wp8-" + an.params
					.direction), an.initEvents = function(k) {
					var i = k ? "off" : "on",
						v = k ? "removeEventListener" : "addEventListener",
						u = "container" === an.params.touchEventsTarget ? an.container[0] : an.wrapper[0],
						p = an.support.touch ? u : document,
						l = !!an.params.nested;
					if (an.browser.ie) {
						u[v](an.touchEvents.start, an.onTouchStart, !1), p[v](an.touchEvents.move, an.onTouchMove,
							l), p[v](an.touchEvents.end, an.onTouchEnd, !1)
					} else {
						if (an.support.touch) {
							var m = !("touchstart" !== an.touchEvents.start || !an.support.passiveListener || !an
								.params.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							u[v](an.touchEvents.start, an.onTouchStart, m), u[v](an.touchEvents.move, an
								.onTouchMove, l), u[v](an.touchEvents.end, an.onTouchEnd, m)
						}(W.simulateTouch && !an.device.ios && !an.device.android || W.simulateTouch && !an.support
							.touch && an.device.ios) && (u[v]("mousedown", an.onTouchStart, !1), document[v](
							"mousemove", an.onTouchMove, l), document[v]("mouseup", an.onTouchEnd, !1))
					}
					window[v]("resize", an.onResize), an.params.nextButton && an.nextButton && an.nextButton
						.length > 0 && (an.nextButton[i]("click", an.onClickNext), an.params.a11y && an.a11y && an
							.nextButton[i]("keydown", an.a11y.onEnterKey)), an.params.prevButton && an.prevButton &&
						an.prevButton.length > 0 && (an.prevButton[i]("click", an.onClickPrev), an.params.a11y && an
							.a11y && an.prevButton[i]("keydown", an.a11y.onEnterKey)), an.params.pagination && an
						.params.paginationClickable && (an.paginationContainer[i]("click", "." + an.params
							.bulletClass, an.onClickIndex), an.params.a11y && an.a11y && an.paginationContainer[
							i]("keydown", "." + an.params.bulletClass, an.a11y.onEnterKey)), (an.params
							.preventClicks || an.params.preventClicksPropagation) && u[v]("click", an.preventClicks,
							!0)
				}, an.attachEvents = function() {
					an.initEvents()
				}, an.detachEvents = function() {
					an.initEvents(!0)
				}, an.allowClick = !0, an.preventClicks = function(i) {
					an.allowClick || (an.params.preventClicks && i.preventDefault(), an.params
						.preventClicksPropagation && an.animating && (i.stopPropagation(), i
							.stopImmediatePropagation()))
				}, an.onClickNext = function(i) {
					i.preventDefault(), an.isEnd && !an.params.loop || an.slideNext()
				}, an.onClickPrev = function(i) {
					i.preventDefault(), an.isBeginning && !an.params.loop || an.slidePrev()
				}, an.onClickIndex = function(i) {
					i.preventDefault();
					var k = c(this).index() * an.params.slidesPerGroup;
					an.params.loop && (k += an.loopedSlides), an.slideTo(k)
				}, an.updateClickedSlide = function(k) {
					var w = ag(k, "." + an.params.slideClass),
						v = !1;
					if (w) {
						for (var m = 0; m < an.slides.length; m++) {
							an.slides[m] === w && (v = !0)
						}
					}
					if (!w || !v) {
						return an.clickedSlide = void 0, void(an.clickedIndex = void 0)
					}
					if (an.clickedSlide = w, an.clickedIndex = c(w).index(), an.params.slideToClickedSlide &&
						void 0 !== an.clickedIndex && an.clickedIndex !== an.activeIndex) {
						var u, p = an.clickedIndex,
							o = "auto" === an.params.slidesPerView ? an.currentSlidesPerView() : an.params
							.slidesPerView;
						if (an.params.loop) {
							if (an.animating) {
								return
							}
							u = parseInt(c(an.clickedSlide).attr("data-swiper-slide-index"), 10), an.params
								.centeredSlides ? p < an.loopedSlides - o / 2 || p > an.slides.length - an
								.loopedSlides + o / 2 ? (an.fixLoop(), p = an.wrapper.children("." + an.params
									.slideClass + '[data-swiper-slide-index="' + u + '"]:not(.' + an.params
									.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
									an.slideTo(p)
								}, 0)) : an.slideTo(p) : p > an.slides.length - o ? (an.fixLoop(), p = an.wrapper
									.children("." + an.params.slideClass + '[data-swiper-slide-index="' + u +
										'"]:not(.' + an.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(
										function() {
											an.slideTo(p)
										}, 0)) : an.slideTo(p)
						} else {
							an.slideTo(p)
						}
					}
				};
			var am, t, aw, ae, K, aj, Z, aa, ac, J, j = "input, select, textarea, button, video",
				V = Date.now(),
				R = [];
			an.animating = !1, an.touches = {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			};
			var at, a;
			an.onTouchStart = function(k) {
				if (k.originalEvent && (k = k.originalEvent), (at = "touchstart" === k.type) || !("which" in
					k) || 3 !== k.which) {
					if (an.params.noSwiping && ag(k, "." + an.params.noSwipingClass)) {
						return void(an.allowClick = !0)
					}
					if (!an.params.swipeHandler || ag(k, an.params.swipeHandler)) {
						var n = an.touches.currentX = "touchstart" === k.type ? k.targetTouches[0].pageX : k
							.pageX,
							m = an.touches.currentY = "touchstart" === k.type ? k.targetTouches[0].pageY : k
							.pageY;
						if (!(an.device.ios && an.params.iOSEdgeSwipeDetection && n <= an.params
								.iOSEdgeSwipeThreshold)) {
							if (am = !0, t = !1, aw = !0, K = void 0, a = void 0, an.touches.startX = n, an
								.touches.startY = m, ae = Date.now(), an.allowClick = !0, an
								.updateContainerSize(), an.swipeDirection = void 0, an.params.threshold > 0 && (
									aa = !1), "touchstart" !== k.type) {
								var l = !0;
								c(k.target).is(j) && (l = !1), document.activeElement && c(document
										.activeElement).is(j) && document.activeElement.blur(), l && k
									.preventDefault()
							}
							an.emit("onTouchStart", an, k)
						}
					}
				}
			}, an.onTouchMove = function(i) {
				if (i.originalEvent && (i = i.originalEvent), !at || "mousemove" !== i.type) {
					if (i.preventedByNestedSwiper) {
						return an.touches.startX = "touchmove" === i.type ? i.targetTouches[0].pageX : i.pageX,
							void(an.touches.startY = "touchmove" === i.type ? i.targetTouches[0].pageY : i
								.pageY)
					}
					if (an.params.onlyExternal) {
						return an.allowClick = !1, void(am && (an.touches.startX = an.touches.currentX =
							"touchmove" === i.type ? i.targetTouches[0].pageX : i.pageX, an.touches
							.startY = an.touches.currentY = "touchmove" === i.type ? i.targetTouches[0]
							.pageY : i.pageY, ae = Date.now()))
					}
					if (at && an.params.touchReleaseOnEdges && !an.params.loop) {
						if (an.isHorizontal()) {
							if (an.touches.currentX < an.touches.startX && an.translate <= an.maxTranslate() ||
								an.touches.currentX > an.touches.startX && an.translate >= an.minTranslate()) {
								return
							}
						} else {
							if (an.touches.currentY < an.touches.startY && an.translate <= an.maxTranslate() ||
								an.touches.currentY > an.touches.startY && an.translate >= an.minTranslate()) {
								return
							}
						}
					}
					if (at && document.activeElement && i.target === document.activeElement && c(i.target).is(
						j)) {
						return t = !0, void(an.allowClick = !1)
					}
					if (aw && an.emit("onTouchMove", an, i), !(i.targetTouches && i.targetTouches.length > 1)) {
						if (an.touches.currentX = "touchmove" === i.type ? i.targetTouches[0].pageX : i.pageX,
							an.touches.currentY = "touchmove" === i.type ? i.targetTouches[0].pageY : i.pageY,
							void 0 === K) {
							var m;
							an.isHorizontal() && an.touches.currentY === an.touches.startY || !an
							.isHorizontal() && an.touches.currentX === an.touches.startX ? K = !1 : (m = 180 *
									Math.atan2(Math.abs(an.touches.currentY - an.touches.startY), Math.abs(an
										.touches.currentX - an.touches.startX)) / Math.PI, K = an
								.isHorizontal() ? m > an.params.touchAngle : 90 - m > an.params.touchAngle)
						}
						if (K && an.emit("onTouchMoveOpposite", an, i), void 0 === a && (an.touches.currentX ===
								an.touches.startX && an.touches.currentY === an.touches.startY || (a = !0)),
							am) {
							if (K) {
								return void(am = !1)
							}
							if (a) {
								an.allowClick = !1, an.emit("onSliderMove", an, i), i.preventDefault(), an
									.params.touchMoveStopPropagation && !an.params.nested && i
								.stopPropagation(), t || (W.loop && an.fixLoop(), Z = an.getWrapperTranslate(),
										an.setWrapperTransition(0), an.animating && an.wrapper.trigger(
											"webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
											), an.params.autoplay && an.autoplaying && (an.params
											.autoplayDisableOnInteraction ? an.stopAutoplay() : an
											.pauseAutoplay()), J = !1, !an.params.grabCursor || an.params
										.allowSwipeToNext !== !0 && an.params.allowSwipeToPrev !== !0 || an
										.setGrabCursor(!0)), t = !0;
								var l = an.touches.diff = an.isHorizontal() ? an.touches.currentX - an.touches
									.startX : an.touches.currentY - an.touches.startY;
								l *= an.params.touchRatio, an.rtl && (l = -l), an.swipeDirection = l > 0 ?
									"prev" : "next", aj = l + Z;
								var k = !0;
								if (l > 0 && aj > an.minTranslate() ? (k = !1, an.params.resistance && (aj = an
										.minTranslate() - 1 + Math.pow(-an.minTranslate() + Z + l, an.params
											.resistanceRatio))) : l < 0 && aj < an.maxTranslate() && (k = !1, an
										.params.resistance && (aj = an.maxTranslate() + 1 - Math.pow(an
											.maxTranslate() - Z - l, an.params.resistanceRatio))), k && (i
										.preventedByNestedSwiper = !0), !an.params.allowSwipeToNext &&
									"next" === an.swipeDirection && aj < Z && (aj = Z), !an.params
									.allowSwipeToPrev && "prev" === an.swipeDirection && aj > Z && (aj = Z), an
									.params.threshold > 0) {
									if (!(Math.abs(l) > an.params.threshold || aa)) {
										return void(aj = Z)
									}
									if (!aa) {
										return aa = !0, an.touches.startX = an.touches.currentX, an.touches
											.startY = an.touches.currentY, aj = Z, void(an.touches.diff = an
												.isHorizontal() ? an.touches.currentX - an.touches.startX : an
												.touches.currentY - an.touches.startY)
									}
								}
								an.params.followFinger && ((an.params.freeMode || an.params
									.watchSlidesProgress) && an.updateActiveIndex(), an.params.freeMode && (
										0 === R.length && R.push({
											position: an.touches[an.isHorizontal() ? "startX" :
												"startY"],
											time: ae
										}), R.push({
											position: an.touches[an.isHorizontal() ? "currentX" :
												"currentY"],
											time: (new window.Date).getTime()
										})), an.updateProgress(aj), an.setWrapperTranslate(aj))
							}
						}
					}
				}
			}, an.onTouchEnd = function(k) {
				if (k.originalEvent && (k = k.originalEvent), aw && an.emit("onTouchEnd", an, k), aw = !1, am) {
					an.params.grabCursor && t && am && (an.params.allowSwipeToNext === !0 || an.params
						.allowSwipeToPrev === !0) && an.setGrabCursor(!1);
					var S = Date.now(),
						P = S - ae;
					if (an.allowClick && (an.updateClickedSlide(k), an.emit("onTap", an, k), P < 300 && S - V >
							300 && (ac && clearTimeout(ac), ac = setTimeout(function() {
								an && (an.params.paginationHide && an.paginationContainer.length > 0 &&
									!c(k.target).hasClass(an.params.bulletClass) && an
									.paginationContainer.toggleClass(an.params
										.paginationHiddenClass), an.emit("onClick", an, k))
							}, 300)), P < 300 && S - V < 300 && (ac && clearTimeout(ac), an.emit("onDoubleTap",
								an, k))), V = Date.now(), setTimeout(function() {
							an && (an.allowClick = !0)
						}, 0), !am || !t || !an.swipeDirection || 0 === an.touches.diff || aj === Z) {
						return void(am = t = !1)
					}
					am = t = !1;
					var E;
					if (E = an.params.followFinger ? an.rtl ? an.translate : -an.translate : -aj, an.params
						.freeMode) {
						if (E < -an.minTranslate()) {
							return void an.slideTo(an.activeIndex)
						}
						if (E > -an.maxTranslate()) {
							return void(an.slides.length < an.snapGrid.length ? an.slideTo(an.snapGrid.length -
								1) : an.slideTo(an.slides.length - 1))
						}
						if (an.params.freeModeMomentum) {
							if (R.length > 1) {
								var O = R.pop(),
									I = R.pop(),
									L = O.position - I.position,
									G = O.time - I.time;
								an.velocity = L / G, an.velocity = an.velocity / 2, Math.abs(an.velocity) < an
									.params.freeModeMinimumVelocity && (an.velocity = 0), (G > 150 || (
										new window.Date).getTime() - O.time > 300) && (an.velocity = 0)
							} else {
								an.velocity = 0
							}
							an.velocity = an.velocity * an.params.freeModeMomentumVelocityRatio, R.length = 0;
							var M = 1000 * an.params.freeModeMomentumRatio,
								A = an.velocity * M,
								T = an.translate + A;
							an.rtl && (T = -T);
							var z, H = !1,
								D = 20 * Math.abs(an.velocity) * an.params.freeModeMomentumBounceRatio;
							if (T < an.maxTranslate()) {
								an.params.freeModeMomentumBounce ? (T + an.maxTranslate() < -D && (T = an
										.maxTranslate() - D), z = an.maxTranslate(), H = !0, J = !0) : T = an
									.maxTranslate()
							} else {
								if (T > an.minTranslate()) {
									an.params.freeModeMomentumBounce ? (T - an.minTranslate() > D && (T = an
											.minTranslate() + D), z = an.minTranslate(), H = !0, J = !0) : T =
										an.minTranslate()
								} else {
									if (an.params.freeModeSticky) {
										var C, B = 0;
										for (B = 0; B < an.snapGrid.length; B += 1) {
											if (an.snapGrid[B] > -T) {
												C = B;
												break
											}
										}
										T = Math.abs(an.snapGrid[C] - T) < Math.abs(an.snapGrid[C - 1] - T) ||
											"next" === an.swipeDirection ? an.snapGrid[C] : an.snapGrid[C - 1],
											an.rtl || (T = -T)
									}
								}
							}
							if (0 !== an.velocity) {
								M = an.rtl ? Math.abs((-T - an.translate) / an.velocity) : Math.abs((T - an
									.translate) / an.velocity)
							} else {
								if (an.params.freeModeSticky) {
									return void an.slideReset()
								}
							}
							an.params.freeModeMomentumBounce && H ? (an.updateProgress(z), an
								.setWrapperTransition(M), an.setWrapperTranslate(T), an.onTransitionStart(),
								an.animating = !0, an.wrapper.transitionEnd(function() {
									an && J && (an.emit("onMomentumBounce", an), an
										.setWrapperTransition(an.params.speed), an
										.setWrapperTranslate(z), an.wrapper.transitionEnd(
									function() {
											an && an.onTransitionEnd()
										}))
								})) : an.velocity ? (an.updateProgress(T), an.setWrapperTransition(M), an
								.setWrapperTranslate(T), an.onTransitionStart(), an.animating || (an
									.animating = !0, an.wrapper.transitionEnd(function() {
										an && an.onTransitionEnd()
									}))) : an.updateProgress(T), an.updateActiveIndex()
						}
						return void((!an.params.freeModeMomentum || P >= an.params.longSwipesMs) && (an
							.updateProgress(), an.updateActiveIndex()))
					}
					var X, Y = 0,
						ay = an.slidesSizesGrid[0];
					for (X = 0; X < an.slidesGrid.length; X += an.params.slidesPerGroup) {
						void 0 !== an.slidesGrid[X + an.params.slidesPerGroup] ? E >= an.slidesGrid[X] && E < an
							.slidesGrid[X + an.params.slidesPerGroup] && (Y = X, ay = an.slidesGrid[X + an
								.params.slidesPerGroup] - an.slidesGrid[X]) : E >= an.slidesGrid[X] && (Y = X,
								ay = an.slidesGrid[an.slidesGrid.length - 1] - an.slidesGrid[an.slidesGrid
									.length - 2])
					}
					var ax = (E - an.slidesGrid[Y]) / ay;
					if (P > an.params.longSwipesMs) {
						if (!an.params.longSwipes) {
							return void an.slideTo(an.activeIndex)
						}
						"next" === an.swipeDirection && (ax >= an.params.longSwipesRatio ? an.slideTo(Y + an
							.params.slidesPerGroup) : an.slideTo(Y)), "prev" === an.swipeDirection && (ax >
							1 - an.params.longSwipesRatio ? an.slideTo(Y + an.params.slidesPerGroup) : an
							.slideTo(Y))
					} else {
						if (!an.params.shortSwipes) {
							return void an.slideTo(an.activeIndex)
						}
						"next" === an.swipeDirection && an.slideTo(Y + an.params.slidesPerGroup), "prev" === an
							.swipeDirection && an.slideTo(Y)
					}
				}
			}, an._slideTo = function(k, i) {
				return an.slideTo(k, i, !0, !0)
			}, an.slideTo = function(l, k, p, o) {
				void 0 === p && (p = !0), void 0 === l && (l = 0), l < 0 && (l = 0), an.snapIndex = Math.floor(
					l / an.params.slidesPerGroup), an.snapIndex >= an.snapGrid.length && (an.snapIndex = an
					.snapGrid.length - 1);
				var m = -an.snapGrid[an.snapIndex];
				if (an.params.autoplay && an.autoplaying && (o || !an.params.autoplayDisableOnInteraction ? an
						.pauseAutoplay(k) : an.stopAutoplay()), an.updateProgress(m), an.params
					.normalizeSlideIndex) {
					for (var n = 0; n < an.slidesGrid.length; n++) {
						-Math.floor(100 * m) >= Math.floor(100 * an.slidesGrid[n]) && (l = n)
					}
				}
				return !(!an.params.allowSwipeToNext && m < an.translate && m < an.minTranslate()) && (!(!an
					.params.allowSwipeToPrev && m > an.translate && m > an.maxTranslate() && (an
						.activeIndex || 0) !== l) && (void 0 === k && (k = an.params.speed), an
					.previousIndex = an.activeIndex || 0, an.activeIndex = l, an.updateRealIndex(), an
					.rtl && -m === an.translate || !an.rtl && m === an.translate ? (an.params
						.autoHeight && an.updateAutoHeight(), an.updateClasses(), "slide" !== an.params
						.effect && an.setWrapperTranslate(m), !1) : (an.updateClasses(), an
						.onTransitionStart(p), 0 === k || an.browser.lteIE9 ? (an.setWrapperTranslate(
							m), an.setWrapperTransition(0), an.onTransitionEnd(p)) : (an
							.setWrapperTranslate(m), an.setWrapperTransition(k), an.animating || (an
								.animating = !0, an.wrapper.transitionEnd(function() {
									an && an.onTransitionEnd(p)
								}))), !0)))
			}, an.onTransitionStart = function(i) {
				void 0 === i && (i = !0), an.params.autoHeight && an.updateAutoHeight(), an.lazy && an.lazy
					.onTransitionStart(), i && (an.emit("onTransitionStart", an), an.activeIndex !== an
						.previousIndex && (an.emit("onSlideChangeStart", an), an.activeIndex > an
							.previousIndex ? an.emit("onSlideNextStart", an) : an.emit("onSlidePrevStart", an)))
			}, an.onTransitionEnd = function(i) {
				an.animating = !1, an.setWrapperTransition(0), void 0 === i && (i = !0), an.lazy && an.lazy
					.onTransitionEnd(), i && (an.emit("onTransitionEnd", an), an.activeIndex !== an
						.previousIndex && (an.emit("onSlideChangeEnd", an), an.activeIndex > an.previousIndex ?
							an.emit("onSlideNextEnd", an) : an.emit("onSlidePrevEnd", an))), an.params
					.history && an.history && an.history.setHistory(an.params.history, an.activeIndex), an
					.params.hashnav && an.hashnav && an.hashnav.setHash()
			}, an.slideNext = function(k, i, l) {
				if (an.params.loop) {
					if (an.animating) {
						return !1
					}
					an.fixLoop();
					an.container[0].clientLeft;
					return an.slideTo(an.activeIndex + an.params.slidesPerGroup, i, k, l)
				}
				return an.slideTo(an.activeIndex + an.params.slidesPerGroup, i, k, l)
			}, an._slideNext = function(i) {
				return an.slideNext(!0, i, !0)
			}, an.slidePrev = function(k, i, l) {
				if (an.params.loop) {
					if (an.animating) {
						return !1
					}
					an.fixLoop();
					an.container[0].clientLeft;
					return an.slideTo(an.activeIndex - 1, i, k, l)
				}
				return an.slideTo(an.activeIndex - 1, i, k, l)
			}, an._slidePrev = function(i) {
				return an.slidePrev(!0, i, !0)
			}, an.slideReset = function(k, i, l) {
				return an.slideTo(an.activeIndex, i, k)
			}, an.disableTouchControl = function() {
				return an.params.onlyExternal = !0, !0
			}, an.enableTouchControl = function() {
				return an.params.onlyExternal = !1, !0
			}, an.setWrapperTransition = function(k, i) {
				an.wrapper.transition(k), "slide" !== an.params.effect && an.effects[an.params.effect] && an
					.effects[an.params.effect].setTransition(k), an.params.parallax && an.parallax && an
					.parallax.setTransition(k), an.params.scrollbar && an.scrollbar && an.scrollbar
					.setTransition(k), an.params.control && an.controller && an.controller.setTransition(k, i),
					an.emit("onSetTransition", an, k)
			}, an.setWrapperTranslate = function(l, k, v) {
				var u = 0,
					m = 0;
				an.isHorizontal() ? u = an.rtl ? -l : l : m = l, an.params.roundLengths && (u = ak(u), m = ak(
					m)), an.params.virtualTranslate || (an.support.transforms3d ? an.wrapper.transform(
					"translate3d(" + u + "px, " + m + "px, 0px)") : an.wrapper.transform("translate(" +
					u + "px, " + m + "px)")), an.translate = an.isHorizontal() ? u : m;
				var p, r = an.maxTranslate() - an.minTranslate();
				p = 0 === r ? 0 : (l - an.minTranslate()) / r, p !== an.progress && an.updateProgress(l), k &&
					an.updateActiveIndex(), "slide" !== an.params.effect && an.effects[an.params.effect] && an
					.effects[an.params.effect].setTranslate(an.translate), an.params.parallax && an.parallax &&
					an.parallax.setTranslate(an.translate), an.params.scrollbar && an.scrollbar && an.scrollbar
					.setTranslate(an.translate), an.params.control && an.controller && an.controller
					.setTranslate(an.translate, v), an.emit("onSetTranslate", an, an.translate)
			}, an.getTranslate = function(l, k) {
				var p, o, m, n;
				return void 0 === k && (k = "x"), an.params.virtualTranslate ? an.rtl ? -an.translate : an
					.translate : (m = window.getComputedStyle(l, null), window.WebKitCSSMatrix ? (o = m
							.transform || m.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map(
								function(i) {
									return i.replace(",", ".")
								}).join(", ")), n = new window.WebKitCSSMatrix("none" === o ? "" : o)) : (n = m
							.MozTransform || m.OTransform || m.MsTransform || m.msTransform || m.transform || m
							.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), p = n
							.toString().split(",")), "x" === k && (o = window.WebKitCSSMatrix ? n.m41 : 16 === p
							.length ? parseFloat(p[12]) : parseFloat(p[4])), "y" === k && (o = window
							.WebKitCSSMatrix ? n.m42 : 16 === p.length ? parseFloat(p[13]) : parseFloat(p[5])),
						an.rtl && o && (o = -o), o || 0)
			}, an.getWrapperTranslate = function(i) {
				return void 0 === i && (i = an.isHorizontal() ? "x" : "y"), an.getTranslate(an.wrapper[0], i)
			}, an.observers = [], an.initObservers = function() {
				if (an.params.observeParents) {
					for (var k = an.container.parents(), i = 0; i < k.length; i++) {
						ab(k[i])
					}
				}
				ab(an.container[0], {
					childList: !1
				}), ab(an.wrapper[0], {
					attributes: !1
				})
			}, an.disconnectObservers = function() {
				for (var i = 0; i < an.observers.length; i++) {
					an.observers[i].disconnect()
				}
				an.observers = []
			}, an.createLoop = function() {
				an.wrapper.children("." + an.params.slideClass + "." + an.params.slideDuplicateClass).remove();
				var k = an.wrapper.children("." + an.params.slideClass);
				"auto" !== an.params.slidesPerView || an.params.loopedSlides || (an.params.loopedSlides = k
						.length), an.loopedSlides = parseInt(an.params.loopedSlides || an.params.slidesPerView,
						10), an.loopedSlides = an.loopedSlides + an.params.loopAdditionalSlides, an
					.loopedSlides > k.length && (an.loopedSlides = k.length);
				var n, m = [],
					l = [];
				for (k.each(function(p, o) {
						var i = c(this);
						p < an.loopedSlides && l.push(o), p < k.length && p >= k.length - an.loopedSlides &&
							m.push(o), i.attr("data-swiper-slide-index", p)
					}), n = 0; n < l.length; n++) {
					an.wrapper.append(c(l[n].cloneNode(!0)).addClass(an.params.slideDuplicateClass))
				}
				for (n = m.length - 1; n >= 0; n--) {
					an.wrapper.prepend(c(m[n].cloneNode(!0)).addClass(an.params.slideDuplicateClass))
				}
			}, an.destroyLoop = function() {
				an.wrapper.children("." + an.params.slideClass + "." + an.params.slideDuplicateClass).remove(),
					an.slides.removeAttr("data-swiper-slide-index")
			}, an.reLoop = function(k) {
				var i = an.activeIndex - an.loopedSlides;
				an.destroyLoop(), an.createLoop(), an.updateSlidesSize(), k && an.slideTo(i + an.loopedSlides,
					0, !1)
			}, an.fixLoop = function() {
				var i;
				an.activeIndex < an.loopedSlides ? (i = an.slides.length - 3 * an.loopedSlides + an.activeIndex,
					i += an.loopedSlides, an.slideTo(i, 0, !1, !0)) : ("auto" === an.params.slidesPerView &&
					an.activeIndex >= 2 * an.loopedSlides || an.activeIndex > an.slides.length - 2 * an
					.params.slidesPerView) && (i = -an.slides.length + an.activeIndex + an.loopedSlides,
					i += an.loopedSlides, an.slideTo(i, 0, !1, !0))
			}, an.appendSlide = function(k) {
				if (an.params.loop && an.destroyLoop(), "object" == typeof k && k.length) {
					for (var i = 0; i < k.length; i++) {
						k[i] && an.wrapper.append(k[i])
					}
				} else {
					an.wrapper.append(k)
				}
				an.params.loop && an.createLoop(), an.params.observer && an.support.observer || an.update(!0)
			}, an.prependSlide = function(k) {
				an.params.loop && an.destroyLoop();
				var i = an.activeIndex + 1;
				if ("object" == typeof k && k.length) {
					for (var l = 0; l < k.length; l++) {
						k[l] && an.wrapper.prepend(k[l])
					}
					i = an.activeIndex + k.length
				} else {
					an.wrapper.prepend(k)
				}
				an.params.loop && an.createLoop(), an.params.observer && an.support.observer || an.update(!0),
					an.slideTo(i, 0, !1)
			}, an.removeSlide = function(k) {
				an.params.loop && (an.destroyLoop(), an.slides = an.wrapper.children("." + an.params
					.slideClass));
				var i, m = an.activeIndex;
				if ("object" == typeof k && k.length) {
					for (var l = 0; l < k.length; l++) {
						i = k[l], an.slides[i] && an.slides.eq(i).remove(), i < m && m--
					}
					m = Math.max(m, 0)
				} else {
					i = k, an.slides[i] && an.slides.eq(i).remove(), i < m && m--, m = Math.max(m, 0)
				}
				an.params.loop && an.createLoop(), an.params.observer && an.support.observer || an.update(!0),
					an.params.loop ? an.slideTo(m + an.loopedSlides, 0, !1) : an.slideTo(m, 0, !1)
			}, an.removeAllSlides = function() {
				for (var k = [], i = 0; i < an.slides.length; i++) {
					k.push(i)
				}
				an.removeSlide(k)
			}, an.effects = {
				fade: {
					setTranslate: function() {
						for (var l = 0; l < an.slides.length; l++) {
							var k = an.slides.eq(l),
								p = k[0].swiperSlideOffset,
								o = -p;
							an.params.virtualTranslate || (o -= an.translate);
							var m = 0;
							an.isHorizontal() || (m = o, o = 0);
							var n = an.params.fade.crossFade ? Math.max(1 - Math.abs(k[0].progress), 0) :
								1 + Math.min(Math.max(k[0].progress, -1), 0);
							k.css({
								opacity: n
							}).transform("translate3d(" + o + "px, " + m + "px, 0px)")
						}
					},
					setTransition: function(k) {
						if (an.slides.transition(k), an.params.virtualTranslate && 0 !== k) {
							var i = !1;
							an.slides.transitionEnd(function() {
								if (!i && an) {
									i = !0, an.animating = !1;
									for (var l = ["webkitTransitionEnd", "transitionend",
											"oTransitionEnd", "MSTransitionEnd",
											"msTransitionEnd"
										], m = 0; m < l.length; m++) {
										an.wrapper.trigger(l[m])
									}
								}
							})
						}
					}
				},
				flip: {
					setTranslate: function() {
						for (var k = 0; k < an.slides.length; k++) {
							var C = an.slides.eq(k),
								B = C[0].progress;
							an.params.flip.limitRotation && (B = Math.max(Math.min(C[0].progress, 1), -1));
							var v = C[0].swiperSlideOffset,
								A = -180 * B,
								x = A,
								y = 0,
								w = -v,
								z = 0;
							if (an.isHorizontal() ? an.rtl && (x = -x) : (z = w, w = 0, y = -x, x = 0), C[0]
								.style.zIndex = -Math.abs(Math.round(B)) + an.slides.length, an.params.flip
								.slideShadows) {
								var m = an.isHorizontal() ? C.find(".swiper-slide-shadow-left") : C.find(
										".swiper-slide-shadow-top"),
									D = an.isHorizontal() ? C.find(".swiper-slide-shadow-right") : C.find(
										".swiper-slide-shadow-bottom");
								0 === m.length && (m = c('<div class="swiper-slide-shadow-' + (an
										.isHorizontal() ? "left" : "top") + '"></div>'), C.append(m)), 0 ===
									D.length && (D = c('<div class="swiper-slide-shadow-' + (an
											.isHorizontal() ? "right" : "bottom") + '"></div>'), C.append(
										D)), m.length && (m[0].style.opacity = Math.max(-B, 0)), D.length &&
									(D[0].style.opacity = Math.max(B, 0))
							}
							C.transform("translate3d(" + w + "px, " + z + "px, 0px) rotateX(" + y +
								"deg) rotateY(" + x + "deg)")
						}
					},
					setTransition: function(i) {
						if (an.slides.transition(i).find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
								).transition(i), an.params.virtualTranslate && 0 !== i) {
							var k = !1;
							an.slides.eq(an.activeIndex).transitionEnd(function() {
								if (!k && an && c(this).hasClass(an.params.slideActiveClass)) {
									k = !0, an.animating = !1;
									for (var l = ["webkitTransitionEnd", "transitionend",
											"oTransitionEnd", "MSTransitionEnd",
											"msTransitionEnd"
										], m = 0; m < l.length; m++) {
										an.wrapper.trigger(l[m])
									}
								}
							})
						}
					}
				},
				cube: {
					setTranslate: function() {
						var k, P = 0;
						an.params.cube.shadow && (an.isHorizontal() ? (k = an.wrapper.find(
								".swiper-cube-shadow"), 0 === k.length && (k = c(
								'<div class="swiper-cube-shadow"></div>'), an.wrapper.append(k)), k
							.css({
								height: an.width + "px"
							})) : (k = an.container.find(".swiper-cube-shadow"), 0 === k.length && (
							k = c('<div class="swiper-cube-shadow"></div>'), an.container
							.append(k))));
						for (var O = 0; O < an.slides.length; O++) {
							var D = an.slides.eq(O),
								M = 90 * O,
								H = Math.floor(M / 360);
							an.rtl && (M = -M, H = Math.floor(-M / 360));
							var I = Math.max(Math.min(D[0].progress, 1), -1),
								E = 0,
								L = 0,
								z = 0;
							O % 4 == 0 ? (E = 4 * -H * an.size, z = 0) : (O - 1) % 4 == 0 ? (E = 0, z = 4 *
								-H * an.size) : (O - 2) % 4 == 0 ? (E = an.size + 4 * H * an.size, z =
								an.size) : (O - 3) % 4 == 0 && (E = -an.size, z = 3 * an.size + 4 * an
								.size * H), an.rtl && (E = -E), an.isHorizontal() || (L = E, E = 0);
							var S = "rotateX(" + (an.isHorizontal() ? 0 : -M) + "deg) rotateY(" + (an
									.isHorizontal() ? M : 0) + "deg) translate3d(" + E + "px, " + L +
								"px, " + z + "px)";
							if (I <= 1 && I > -1 && (P = 90 * O + 90 * I, an.rtl && (P = 90 * -O - 90 * I)),
								D.transform(S), an.params.cube.slideShadows) {
								var x = an.isHorizontal() ? D.find(".swiper-slide-shadow-left") : D.find(
										".swiper-slide-shadow-top"),
									G = an.isHorizontal() ? D.find(".swiper-slide-shadow-right") : D.find(
										".swiper-slide-shadow-bottom");
								0 === x.length && (x = c('<div class="swiper-slide-shadow-' + (an
										.isHorizontal() ? "left" : "top") + '"></div>'), D.append(x)), 0 ===
									G.length && (G = c('<div class="swiper-slide-shadow-' + (an
											.isHorizontal() ? "right" : "bottom") + '"></div>'), D.append(
										G)), x.length && (x[0].style.opacity = Math.max(-I, 0)), G.length &&
									(G[0].style.opacity = Math.max(I, 0))
							}
						}
						if (an.wrapper.css({
								"-webkit-transform-origin": "50% 50% -" + an.size / 2 + "px",
								"-moz-transform-origin": "50% 50% -" + an.size / 2 + "px",
								"-ms-transform-origin": "50% 50% -" + an.size / 2 + "px",
								"transform-origin": "50% 50% -" + an.size / 2 + "px"
							}), an.params.cube.shadow) {
							if (an.isHorizontal()) {
								k.transform("translate3d(0px, " + (an.width / 2 + an.params.cube
										.shadowOffset) + "px, " + -an.width / 2 +
									"px) rotateX(90deg) rotateZ(0deg) scale(" + an.params.cube
									.shadowScale + ")")
							} else {
								var C = Math.abs(P) - 90 * Math.floor(Math.abs(P) / 90),
									B = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math
										.PI / 360) / 2),
									A = an.params.cube.shadowScale,
									T = an.params.cube.shadowScale / B,
									X = an.params.cube.shadowOffset;
								k.transform("scale3d(" + A + ", 1, " + T + ") translate3d(0px, " + (an
										.height / 2 + X) + "px, " + -an.height / 2 / T +
									"px) rotateX(-90deg)")
							}
						}
						var Y = an.isSafari || an.isUiWebView ? -an.size / 2 : 0;
						an.wrapper.transform("translate3d(0px,0," + Y + "px) rotateX(" + (an
							.isHorizontal() ? 0 : P) + "deg) rotateY(" + (an.isHorizontal() ? -P : 0) +
							"deg)")
					},
					setTransition: function(i) {
						an.slides.transition(i).find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
								).transition(i), an.params.cube.shadow && !an.isHorizontal() && an.container
							.find(".swiper-cube-shadow").transition(i)
					}
				},
				coverflow: {
					setTranslate: function() {
						for (var k = an.translate, O = an.isHorizontal() ? -k + an.width / 2 : -k + an
								.height / 2, M = an.isHorizontal() ? an.params.coverflow.rotate : -an.params
								.coverflow.rotate, C = an.params.coverflow.depth, L = 0, G = an.slides
								.length; L < G; L++) {
							var H = an.slides.eq(L),
								D = an.slidesSizesGrid[L],
								I = H[0].swiperSlideOffset,
								y = (O - I - D / 2) / D * an.params.coverflow.modifier,
								P = an.isHorizontal() ? M * y : 0,
								x = an.isHorizontal() ? 0 : M * y,
								E = -C * Math.abs(y),
								B = an.isHorizontal() ? 0 : an.params.coverflow.stretch * y,
								A = an.isHorizontal() ? an.params.coverflow.stretch * y : 0;
							Math.abs(A) < 0.001 && (A = 0), Math.abs(B) < 0.001 && (B = 0), Math.abs(E) <
								0.001 && (E = 0), Math.abs(P) < 0.001 && (P = 0), Math.abs(x) < 0.001 && (
									x = 0);
							var z = "translate3d(" + A + "px," + B + "px," + E + "px)  rotateX(" + x +
								"deg) rotateY(" + P + "deg)";
							if (H.transform(z), H[0].style.zIndex = 1 - Math.abs(Math.round(y)), an.params
								.coverflow.slideShadows) {
								var S = an.isHorizontal() ? H.find(".swiper-slide-shadow-left") : H.find(
										".swiper-slide-shadow-top"),
									T = an.isHorizontal() ? H.find(".swiper-slide-shadow-right") : H.find(
										".swiper-slide-shadow-bottom");
								0 === S.length && (S = c('<div class="swiper-slide-shadow-' + (an
										.isHorizontal() ? "left" : "top") + '"></div>'), H.append(S)), 0 ===
									T.length && (T = c('<div class="swiper-slide-shadow-' + (an
											.isHorizontal() ? "right" : "bottom") + '"></div>'), H.append(
										T)), S.length && (S[0].style.opacity = y > 0 ? y : 0), T.length && (
										T[0].style.opacity = -y > 0 ? -y : 0)
							}
						}
						if (an.browser.ie) {
							an.wrapper[0].style.perspectiveOrigin = O + "px 50%"
						}
					},
					setTransition: function(i) {
						an.slides.transition(i).find(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							).transition(i)
					}
				}
			}, an.lazy = {
				initialImageLoaded: !1,
				loadImageInSlide: function(k, n) {
					if (void 0 !== k && (void 0 === n && (n = !0), 0 !== an.slides.length)) {
						var m = an.slides.eq(k),
							l = m.find("." + an.params.lazyLoadingClass + ":not(." + an.params
								.lazyStatusLoadedClass + "):not(." + an.params.lazyStatusLoadingClass + ")"
								);
						!m.hasClass(an.params.lazyLoadingClass) || m.hasClass(an.params
							.lazyStatusLoadedClass) || m.hasClass(an.params.lazyStatusLoadingClass) || (
							l = l.add(m[0])), 0 !== l.length && l.each(function() {
							var p = c(this);
							p.addClass(an.params.lazyStatusLoadingClass);
							var s = p.attr("data-background"),
								w = p.attr("data-src"),
								u = p.attr("data-srcset"),
								v = p.attr("data-sizes");
							an.loadImage(p[0], w || s, u, v, !1, function() {
								if (void 0 !== an && null !== an && an) {
									if (s ? (p.css("background-image", 'url("' + s + '")'),
											p.removeAttr("data-background")) : (u && (p
											.attr("srcset", u), p.removeAttr(
												"data-srcset")), v && (p.attr("sizes",
											v), p.removeAttr("data-sizes")), w && (p
											.attr("src", w), p.removeAttr("data-src"))), p
										.addClass(an.params.lazyStatusLoadedClass)
										.removeClass(an.params.lazyStatusLoadingClass), m
										.find("." + an.params.lazyPreloaderClass + ", ." +
											an.params.preloaderClass).remove(), an.params
										.loop && n) {
										var i = m.attr("data-swiper-slide-index");
										if (m.hasClass(an.params.slideDuplicateClass)) {
											var o = an.wrapper.children(
												'[data-swiper-slide-index="' + i +
												'"]:not(.' + an.params
												.slideDuplicateClass + ")");
											an.lazy.loadImageInSlide(o.index(), !1)
										} else {
											var r = an.wrapper.children("." + an.params
												.slideDuplicateClass +
												'[data-swiper-slide-index="' + i + '"]');
											an.lazy.loadImageInSlide(r.index(), !1)
										}
									}
									an.emit("onLazyImageReady", an, m[0], p[0])
								}
							}), an.emit("onLazyImageLoad", an, m[0], p[0])
						})
					}
				},
				load: function() {
					var k, y = an.params.slidesPerView;
					if ("auto" === y && (y = 0), an.lazy.initialImageLoaded || (an.lazy
							.initialImageLoaded = !0), an.params.watchSlidesVisibility) {
						an.wrapper.children("." + an.params.slideVisibleClass).each(function() {
							an.lazy.loadImageInSlide(c(this).index())
						})
					} else {
						if (y > 1) {
							for (k = an.activeIndex; k < an.activeIndex + y; k++) {
								an.slides[k] && an.lazy.loadImageInSlide(k)
							}
						} else {
							an.lazy.loadImageInSlide(an.activeIndex)
						}
					}
					if (an.params.lazyLoadingInPrevNext) {
						if (y > 1 || an.params.lazyLoadingInPrevNextAmount && an.params
							.lazyLoadingInPrevNextAmount > 1) {
							var x = an.params.lazyLoadingInPrevNextAmount,
								m = y,
								w = Math.min(an.activeIndex + m + Math.max(x, m), an.slides.length),
								u = Math.max(an.activeIndex - Math.max(m, x), 0);
							for (k = an.activeIndex + y; k < w; k++) {
								an.slides[k] && an.lazy.loadImageInSlide(k)
							}
							for (k = u; k < an.activeIndex; k++) {
								an.slides[k] && an.lazy.loadImageInSlide(k)
							}
						} else {
							var v = an.wrapper.children("." + an.params.slideNextClass);
							v.length > 0 && an.lazy.loadImageInSlide(v.index());
							var p = an.wrapper.children("." + an.params.slidePrevClass);
							p.length > 0 && an.lazy.loadImageInSlide(p.index())
						}
					}
				},
				onTransitionStart: function() {
					an.params.lazyLoading && (an.params.lazyLoadingOnTransitionStart || !an.params
						.lazyLoadingOnTransitionStart && !an.lazy.initialImageLoaded) && an.lazy.load()
				},
				onTransitionEnd: function() {
					an.params.lazyLoading && !an.params.lazyLoadingOnTransitionStart && an.lazy.load()
				}
			}, an.scrollbar = {
				isTouched: !1,
				setDragPosition: function(l) {
					var k = an.scrollbar,
						p = an.isHorizontal() ? "touchstart" === l.type || "touchmove" === l.type ? l
						.targetTouches[0].pageX : l.pageX || l.clientX : "touchstart" === l.type ||
						"touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY || l.clientY,
						o = p - k.track.offset()[an.isHorizontal() ? "left" : "top"] - k.dragSize / 2,
						m = -an.minTranslate() * k.moveDivider,
						n = -an.maxTranslate() * k.moveDivider;
					o < m ? o = m : o > n && (o = n), o = -o / k.moveDivider, an.updateProgress(o), an
						.setWrapperTranslate(o, !0)
				},
				dragStart: function(k) {
					var i = an.scrollbar;
					i.isTouched = !0, k.preventDefault(), k.stopPropagation(), i.setDragPosition(k),
						clearTimeout(i.dragTimeout), i.track.transition(0), an.params.scrollbarHide && i
						.track.css("opacity", 1), an.wrapper.transition(100), i.drag.transition(100), an
						.emit("onScrollbarDragStart", an)
				},
				dragMove: function(k) {
					var i = an.scrollbar;
					i.isTouched && (k.preventDefault ? k.preventDefault() : k.returnValue = !1, i
						.setDragPosition(k), an.wrapper.transition(0), i.track.transition(0), i.drag
						.transition(0), an.emit("onScrollbarDragMove", an))
				},
				dragEnd: function(k) {
					var i = an.scrollbar;
					i.isTouched && (i.isTouched = !1, an.params.scrollbarHide && (clearTimeout(i
							.dragTimeout), i.dragTimeout = setTimeout(function() {
							i.track.css("opacity", 0), i.track.transition(400)
						}, 1000)), an.emit("onScrollbarDragEnd", an), an.params
						.scrollbarSnapOnRelease && an.slideReset())
				},
				draggableEvents: function() {
					return an.params.simulateTouch !== !1 || an.support.touch ? an.touchEvents : an
						.touchEventsDesktop
				}(),
				enableDraggable: function() {
					var i = an.scrollbar,
						k = an.support.touch ? i.track : document;
					c(i.track).on(i.draggableEvents.start, i.dragStart), c(k).on(i.draggableEvents.move, i
						.dragMove), c(k).on(i.draggableEvents.end, i.dragEnd)
				},
				disableDraggable: function() {
					var i = an.scrollbar,
						k = an.support.touch ? i.track : document;
					c(i.track).off(i.draggableEvents.start, i.dragStart), c(k).off(i.draggableEvents.move, i
						.dragMove), c(k).off(i.draggableEvents.end, i.dragEnd)
				},
				set: function() {
					if (an.params.scrollbar) {
						var i = an.scrollbar;
						i.track = c(an.params.scrollbar), an.params.uniqueNavElements && "string" ==
							typeof an.params.scrollbar && i.track.length > 1 && 1 === an.container.find(an
								.params.scrollbar).length && (i.track = an.container.find(an.params
								.scrollbar)), i.drag = i.track.find(".swiper-scrollbar-drag"), 0 === i.drag
							.length && (i.drag = c('<div class="swiper-scrollbar-drag"></div>'), i.track
								.append(i.drag)), i.drag[0].style.width = "", i.drag[0].style.height = "", i
							.trackSize = an.isHorizontal() ? i.track[0].offsetWidth : i.track[0]
							.offsetHeight, i.divider = an.size / an.virtualSize, i.moveDivider = i.divider *
							(i.trackSize / an.size), i.dragSize = i.trackSize * i.divider, an
						.isHorizontal() ? i.drag[0].style.width = i.dragSize + "px" : i.drag[0].style
							.height = i.dragSize + "px", i.divider >= 1 ? i.track[0].style.display =
							"none" : i.track[0].style.display = "", an.params.scrollbarHide && (i.track[0]
								.style.opacity = 0)
					}
				},
				setTranslate: function() {
					if (an.params.scrollbar) {
						var k, i = an.scrollbar,
							l = (an.translate, i.dragSize);
						k = (i.trackSize - i.dragSize) * an.progress, an.rtl && an.isHorizontal() ? (k = -k,
								k > 0 ? (l = i.dragSize - k, k = 0) : -k + i.dragSize > i.trackSize && (l =
									i.trackSize + k)) : k < 0 ? (l = i.dragSize + k, k = 0) : k + i
							.dragSize > i.trackSize && (l = i.trackSize - k), an.isHorizontal() ? (an
								.support.transforms3d ? i.drag.transform("translate3d(" + k + "px, 0, 0)") :
								i.drag.transform("translateX(" + k + "px)"), i.drag[0].style.width = l +
								"px") : (an.support.transforms3d ? i.drag.transform("translate3d(0px, " +
									k + "px, 0)") : i.drag.transform("translateY(" + k + "px)"), i.drag[0]
								.style.height = l + "px"), an.params.scrollbarHide && (clearTimeout(i
								.timeout), i.track[0].style.opacity = 1, i.timeout = setTimeout(
								function() {
									i.track[0].style.opacity = 0, i.track.transition(400)
								}, 1000))
					}
				},
				setTransition: function(i) {
					an.params.scrollbar && an.scrollbar.drag.transition(i)
				}
			}, an.controller = {
				LinearSpline: function(l, k) {
					var o = function() {
						var p, i, r;
						return function(v, u) {
							for (i = -1, p = v.length; p - i > 1;) {
								v[r = p + i >> 1] <= u ? i = r : p = r
							}
							return p
						}
					}();
					this.x = l, this.y = k, this.lastIndex = l.length - 1;
					var n, m;
					this.x.length;
					this.interpolate = function(i) {
						return i ? (m = o(this.x, i), n = m - 1, (i - this.x[n]) * (this.y[m] - this.y[
							n]) / (this.x[m] - this.x[n]) + this.y[n]) : 0
					}
				},
				getInterpolateFunction: function(i) {
					an.controller.spline || (an.controller.spline = an.params.loop ? new an.controller
						.LinearSpline(an.slidesGrid, i.slidesGrid) : new an.controller.LinearSpline(an
							.snapGrid, i.snapGrid))
				},
				setTranslate: function(k, w) {
					function v(i) {
						k = i.rtl && "horizontal" === i.params.direction ? -an.translate : an.translate,
							"slide" === an.params.controlBy && (an.controller.getInterpolateFunction(i),
								u = -an.controller.spline.interpolate(-k)), u && "container" !== an.params
							.controlBy || (l = (i.maxTranslate() - i.minTranslate()) / (an.maxTranslate() -
								an.minTranslate()), u = (k - an.minTranslate()) * l + i.minTranslate()), an
							.params.controlInverse && (u = i.maxTranslate() - u), i.updateProgress(u), i
							.setWrapperTranslate(u, !1, an), i.updateActiveIndex()
					}
					var l, u, m = an.params.control;
					if (Array.isArray(m)) {
						for (var p = 0; p < m.length; p++) {
							m[p] !== w && m[p] instanceof b && v(m[p])
						}
					} else {
						m instanceof b && w !== m && v(m)
					}
				},
				setTransition: function(k, o) {
					function n(i) {
						i.setWrapperTransition(k, an), 0 !== k && (i.onTransitionStart(), i.wrapper
							.transitionEnd(function() {
								m && (i.params.loop && "slide" === an.params.controlBy && i
								.fixLoop(), i.onTransitionEnd())
							}))
					}
					var l, m = an.params.control;
					if (Array.isArray(m)) {
						for (l = 0; l < m.length; l++) {
							m[l] !== o && m[l] instanceof b && n(m[l])
						}
					} else {
						m instanceof b && o !== m && n(m)
					}
				}
			}, an.hashnav = {
				onHashCange: function(k, i) {
					var l = document.location.hash.replace("#", "");
					l !== an.slides.eq(an.activeIndex).attr("data-hash") && an.slideTo(an.wrapper.children(
						"." + an.params.slideClass + '[data-hash="' + l + '"]').index())
				},
				attachEvents: function(i) {
					var k = i ? "off" : "on";
					c(window)[k]("hashchange", an.hashnav.onHashCange)
				},
				setHash: function() {
					if (an.hashnav.initialized && an.params.hashnav) {
						if (an.params.replaceState && window.history && window.history.replaceState) {
							window.history.replaceState(null, null, "#" + an.slides.eq(an.activeIndex).attr(
								"data-hash") || "")
						} else {
							var k = an.slides.eq(an.activeIndex),
								i = k.attr("data-hash") || k.attr("data-history");
							document.location.hash = i || ""
						}
					}
				},
				init: function() {
					if (an.params.hashnav && !an.params.history) {
						an.hashnav.initialized = !0;
						var l = document.location.hash.replace("#", "");
						if (l) {
							for (var k = 0, p = an.slides.length; k < p; k++) {
								var o = an.slides.eq(k),
									m = o.attr("data-hash") || o.attr("data-history");
								if (m === l && !o.hasClass(an.params.slideDuplicateClass)) {
									var n = o.index();
									an.slideTo(n, 0, an.params.runCallbacksOnInit, !0)
								}
							}
						}
						an.params.hashnavWatchState && an.hashnav.attachEvents()
					}
				},
				destroy: function() {
					an.params.hashnavWatchState && an.hashnav.attachEvents(!0)
				}
			}, an.history = {
				init: function() {
					if (an.params.history) {
						if (!window.history || !window.history.pushState) {
							return an.params.history = !1, void(an.params.hashnav = !0)
						}
						an.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key ||
							this.paths.value) && (this.scrollToSlide(0, this.paths.value, an.params
							.runCallbacksOnInit), an.params.replaceState || window.addEventListener(
							"popstate", this.setHistoryPopState))
					}
				},
				setHistoryPopState: function() {
					an.history.paths = an.history.getPathValues(), an.history.scrollToSlide(an.params.speed,
						an.history.paths.value, !1)
				},
				getPathValues: function() {
					var k = window.location.pathname.slice(1).split("/"),
						i = k.length;
					return {
						key: k[i - 2],
						value: k[i - 1]
					}
				},
				setHistory: function(k, i) {
					if (an.history.initialized && an.params.history) {
						var m = an.slides.eq(i),
							l = this.slugify(m.attr("data-history"));
						window.location.pathname.includes(k) || (l = k + "/" + l), an.params.replaceState ?
							window.history.replaceState(null, null, l) : window.history.pushState(null,
								null, l)
					}
				},
				slugify: function(i) {
					return i.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(
						/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
				},
				scrollToSlide: function(l, k, x) {
					if (k) {
						for (var w = 0, m = an.slides.length; w < m; w++) {
							var v = an.slides.eq(w),
								p = this.slugify(v.attr("data-history"));
							if (p === k && !v.hasClass(an.params.slideDuplicateClass)) {
								var u = v.index();
								an.slideTo(u, l, x)
							}
						}
					} else {
						an.slideTo(0, l, x)
					}
				}
			}, an.disableKeyboardControl = function() {
				an.params.keyboardControl = !1, c(document).off("keydown", ai)
			}, an.enableKeyboardControl = function() {
				an.params.keyboardControl = !0, c(document).on("keydown", ai)
			}, an.mousewheel = {
				event: !1,
				lastScrollTime: (new window.Date).getTime()
			}, an.params.mousewheelControl && (an.mousewheel.event = navigator.userAgent.indexOf("firefox") > -
				1 ? "DOMMouseScroll" : function() {
					var k = "onwheel" in document;
					if (!k) {
						var i = document.createElement("div");
						i.setAttribute("onwheel", "return;"), k = "function" == typeof i.onwheel
					}
					return !k && document.implementation && document.implementation.hasFeature && document
						.implementation.hasFeature("", "") !== !0 && (k = document.implementation.hasFeature(
							"Events.wheel", "3.0")), k
				}() ? "wheel" : "mousewheel"), an.disableMousewheelControl = function() {
				if (!an.mousewheel.event) {
					return !1
				}
				var i = an.container;
				return "container" !== an.params.mousewheelEventsTarged && (i = c(an.params
						.mousewheelEventsTarged)), i.off(an.mousewheel.event, ao), an.params
					.mousewheelControl = !1, !0
			}, an.enableMousewheelControl = function() {
				if (!an.mousewheel.event) {
					return !1
				}
				var i = an.container;
				return "container" !== an.params.mousewheelEventsTarged && (i = c(an.params
						.mousewheelEventsTarged)), i.on(an.mousewheel.event, ao), an.params
					.mousewheelControl = !0, !0
			}, an.parallax = {
				setTranslate: function() {
					an.container.children(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
						.each(function() {
							q(this, an.progress)
						}), an.slides.each(function() {
							var i = c(this);
							i.find(
									"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
								.each(function() {
									q(this, Math.min(Math.max(i[0].progress, -1), 1))
								})
						})
				},
				setTransition: function(i) {
					void 0 === i && (i = an.params.speed), an.container.find(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
						.each(function() {
							var l = c(this),
								k = parseInt(l.attr("data-swiper-parallax-duration"), 10) || i;
							0 === i && (k = 0), l.transition(k)
						})
				}
			}, an.zoom = {
				scale: 1,
				currentScale: 1,
				isScaling: !1,
				gesture: {
					slide: void 0,
					slideWidth: void 0,
					slideHeight: void 0,
					image: void 0,
					imageWrap: void 0,
					zoomMax: an.params.zoomMax
				},
				image: {
					isTouched: void 0,
					isMoved: void 0,
					currentX: void 0,
					currentY: void 0,
					minX: void 0,
					minY: void 0,
					maxX: void 0,
					maxY: void 0,
					width: void 0,
					height: void 0,
					startX: void 0,
					startY: void 0,
					touchesStart: {},
					touchesCurrent: {}
				},
				velocity: {
					x: void 0,
					y: void 0,
					prevPositionX: void 0,
					prevPositionY: void 0,
					prevTime: void 0
				},
				getDistanceBetweenTouches: function(l) {
					if (l.targetTouches.length < 2) {
						return 1
					}
					var k = l.targetTouches[0].pageX,
						o = l.targetTouches[0].pageY,
						n = l.targetTouches[1].pageX,
						m = l.targetTouches[1].pageY;
					return Math.sqrt(Math.pow(n - k, 2) + Math.pow(m - o, 2))
				},
				onGestureStart: function(i) {
					var k = an.zoom;
					if (!an.support.gestures) {
						if ("touchstart" !== i.type || "touchstart" === i.type && i.targetTouches.length <
							2) {
							return
						}
						k.gesture.scaleStart = k.getDistanceBetweenTouches(i)
					}
					if (!(k.gesture.slide && k.gesture.slide.length || (k.gesture.slide = c(this), 0 === k
							.gesture.slide.length && (k.gesture.slide = an.slides.eq(an.activeIndex)), k
							.gesture.image = k.gesture.slide.find("img, svg, canvas"), k.gesture
							.imageWrap = k.gesture.image.parent("." + an.params.zoomContainerClass), k
							.gesture.zoomMax = k.gesture.imageWrap.attr("data-swiper-zoom") || an.params
							.zoomMax, 0 !== k.gesture.imageWrap.length))) {
						return void(k.gesture.image = void 0)
					}
					k.gesture.image.transition(0), k.isScaling = !0
				},
				onGestureChange: function(k) {
					var i = an.zoom;
					if (!an.support.gestures) {
						if ("touchmove" !== k.type || "touchmove" === k.type && k.targetTouches.length <
							2) {
							return
						}
						i.gesture.scaleMove = i.getDistanceBetweenTouches(k)
					}
					i.gesture.image && 0 !== i.gesture.image.length && (an.support.gestures ? i.scale = k
						.scale * i.currentScale : i.scale = i.gesture.scaleMove / i.gesture.scaleStart *
						i.currentScale, i.scale > i.gesture.zoomMax && (i.scale = i.gesture.zoomMax -
							1 + Math.pow(i.scale - i.gesture.zoomMax + 1, 0.5)), i.scale < an.params
						.zoomMin && (i.scale = an.params.zoomMin + 1 - Math.pow(an.params.zoomMin - i
							.scale + 1, 0.5)), i.gesture.image.transform("translate3d(0,0,0) scale(" + i
							.scale + ")"))
				},
				onGestureEnd: function(k) {
					var i = an.zoom;
					!an.support.gestures && ("touchend" !== k.type || "touchend" === k.type && k
							.changedTouches.length < 2) || i.gesture.image && 0 !== i.gesture.image
						.length && (i.scale = Math.max(Math.min(i.scale, i.gesture.zoomMax), an.params
								.zoomMin), i.gesture.image.transition(an.params.speed).transform(
								"translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i
							.isScaling = !1, 1 === i.scale && (i.gesture.slide = void 0))
				},
				onTouchStart: function(k, i) {
					var l = k.zoom;
					l.gesture.image && 0 !== l.gesture.image.length && (l.image.isTouched || ("android" ===
						k.device.os && i.preventDefault(), l.image.isTouched = !0, l.image
						.touchesStart.x = "touchstart" === i.type ? i.targetTouches[0].pageX : i
						.pageX, l.image.touchesStart.y = "touchstart" === i.type ? i.targetTouches[
							0].pageY : i.pageY))
				},
				onTouchMove: function(k) {
					var i = an.zoom;
					if (i.gesture.image && 0 !== i.gesture.image.length && (an.allowClick = !1, i.image
							.isTouched && i.gesture.slide)) {
						i.image.isMoved || (i.image.width = i.gesture.image[0].offsetWidth, i.image.height =
							i.gesture.image[0].offsetHeight, i.image.startX = an.getTranslate(i.gesture
								.imageWrap[0], "x") || 0, i.image.startY = an.getTranslate(i.gesture
								.imageWrap[0], "y") || 0, i.gesture.slideWidth = i.gesture.slide[0]
							.offsetWidth, i.gesture.slideHeight = i.gesture.slide[0].offsetHeight, i
							.gesture.imageWrap.transition(0), an.rtl && (i.image.startX = -i.image
								.startX), an.rtl && (i.image.startY = -i.image.startY));
						var m = i.image.width * i.scale,
							l = i.image.height * i.scale;
						if (!(m < i.gesture.slideWidth && l < i.gesture.slideHeight)) {
							if (i.image.minX = Math.min(i.gesture.slideWidth / 2 - m / 2, 0), i.image
								.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 -
									l / 2, 0), i.image.maxY = -i.image.minY, i.image.touchesCurrent.x =
								"touchmove" === k.type ? k.targetTouches[0].pageX : k.pageX, i.image
								.touchesCurrent.y = "touchmove" === k.type ? k.targetTouches[0].pageY : k
								.pageY, !i.image.isMoved && !i.isScaling) {
								if (an.isHorizontal() && Math.floor(i.image.minX) === Math.floor(i.image
										.startX) && i.image.touchesCurrent.x < i.image.touchesStart.x ||
									Math.floor(i.image.maxX) === Math.floor(i.image.startX) && i.image
									.touchesCurrent.x > i.image.touchesStart.x) {
									return void(i.image.isTouched = !1)
								}
								if (!an.isHorizontal() && Math.floor(i.image.minY) === Math.floor(i.image
										.startY) && i.image.touchesCurrent.y < i.image.touchesStart.y ||
									Math.floor(i.image.maxY) === Math.floor(i.image.startY) && i.image
									.touchesCurrent.y > i.image.touchesStart.y) {
									return void(i.image.isTouched = !1)
								}
							}
							k.preventDefault(), k.stopPropagation(), i.image.isMoved = !0, i.image
								.currentX = i.image.touchesCurrent.x - i.image.touchesStart.x + i.image
								.startX, i.image.currentY = i.image.touchesCurrent.y - i.image.touchesStart
								.y + i.image.startY, i.image.currentX < i.image.minX && (i.image.currentX =
									i.image.minX + 1 - Math.pow(i.image.minX - i.image.currentX + 1, 0.8)),
								i.image.currentX > i.image.maxX && (i.image.currentX = i.image.maxX - 1 +
									Math.pow(i.image.currentX - i.image.maxX + 1, 0.8)), i.image.currentY <
								i.image.minY && (i.image.currentY = i.image.minY + 1 - Math.pow(i.image
									.minY - i.image.currentY + 1, 0.8)), i.image.currentY > i.image.maxY &&
								(i.image.currentY = i.image.maxY - 1 + Math.pow(i.image.currentY - i.image
									.maxY + 1, 0.8)), i.velocity.prevPositionX || (i.velocity
									.prevPositionX = i.image.touchesCurrent.x), i.velocity.prevPositionY ||
								(i.velocity.prevPositionY = i.image.touchesCurrent.y), i.velocity
								.prevTime || (i.velocity.prevTime = Date.now()), i.velocity.x = (i.image
									.touchesCurrent.x - i.velocity.prevPositionX) / (Date.now() - i.velocity
									.prevTime) / 2, i.velocity.y = (i.image.touchesCurrent.y - i.velocity
									.prevPositionY) / (Date.now() - i.velocity.prevTime) / 2, Math.abs(i
									.image.touchesCurrent.x - i.velocity.prevPositionX) < 2 && (i.velocity
									.x = 0), Math.abs(i.image.touchesCurrent.y - i.velocity.prevPositionY) <
								2 && (i.velocity.y = 0), i.velocity.prevPositionX = i.image.touchesCurrent
								.x, i.velocity.prevPositionY = i.image.touchesCurrent.y, i.velocity
								.prevTime = Date.now(), i.gesture.imageWrap.transform("translate3d(" + i
									.image.currentX + "px, " + i.image.currentY + "px,0)")
						}
					}
				},
				onTouchEnd: function(v, k) {
					var D = v.zoom;
					if (D.gesture.image && 0 !== D.gesture.image.length) {
						if (!D.image.isTouched || !D.image.isMoved) {
							return D.image.isTouched = !1, void(D.image.isMoved = !1)
						}
						D.image.isTouched = !1, D.image.isMoved = !1;
						var C = 300,
							w = 300,
							B = D.velocity.x * C,
							y = D.image.currentX + B,
							z = D.velocity.y * w,
							x = D.image.currentY + z;
						0 !== D.velocity.x && (C = Math.abs((y - D.image.currentX) / D.velocity.x)), 0 !== D
							.velocity.y && (w = Math.abs((x - D.image.currentY) / D.velocity.y));
						var A = Math.max(C, w);
						D.image.currentX = y, D.image.currentY = x;
						var m = D.image.width * D.scale,
							E = D.image.height * D.scale;
						D.image.minX = Math.min(D.gesture.slideWidth / 2 - m / 2, 0), D.image.maxX = -D
							.image.minX, D.image.minY = Math.min(D.gesture.slideHeight / 2 - E / 2, 0), D
							.image.maxY = -D.image.minY, D.image.currentX = Math.max(Math.min(D.image
								.currentX, D.image.maxX), D.image.minX), D.image.currentY = Math.max(Math
								.min(D.image.currentY, D.image.maxY), D.image.minY), D.gesture.imageWrap
							.transition(A).transform("translate3d(" + D.image.currentX + "px, " + D.image
								.currentY + "px,0)")
					}
				},
				onTransitionEnd: function(k) {
					var i = k.zoom;
					i.gesture.slide && k.previousIndex !== k.activeIndex && (i.gesture.image.transform(
							"translate3d(0,0,0) scale(1)"), i.gesture.imageWrap.transform(
							"translate3d(0,0,0)"), i.gesture.slide = i.gesture.image = i.gesture
						.imageWrap = void 0, i.scale = i.currentScale = 1)
				},
				toggleZoom: function(k, S) {
					var P = k.zoom;
					if (P.gesture.slide || (P.gesture.slide = k.clickedSlide ? c(k.clickedSlide) : k.slides
							.eq(k.activeIndex), P.gesture.image = P.gesture.slide.find("img, svg, canvas"),
							P.gesture.imageWrap = P.gesture.image.parent("." + k.params.zoomContainerClass)
							), P.gesture.image && 0 !== P.gesture.image.length) {
						var E, O, I, L, G, M, A, Y, z, H, D, C, B, ax, ay, aA, az, X;
						void 0 === P.image.touchesStart.x && S ? (E = "touchend" === S.type ? S
							.changedTouches[0].pageX : S.pageX, O = "touchend" === S.type ? S
							.changedTouches[0].pageY : S.pageY) : (E = P.image.touchesStart.x, O = P
							.image.touchesStart.y), P.scale && 1 !== P.scale ? (P.scale = P
							.currentScale = 1, P.gesture.imageWrap.transition(300).transform(
								"translate3d(0,0,0)"), P.gesture.image.transition(300).transform(
								"translate3d(0,0,0) scale(1)"), P.gesture.slide = void 0) : (P.scale = P
							.currentScale = P.gesture.imageWrap.attr("data-swiper-zoom") || k.params
							.zoomMax, S ? (az = P.gesture.slide[0].offsetWidth, X = P.gesture.slide[0]
								.offsetHeight, I = P.gesture.slide.offset().left, L = P.gesture.slide
								.offset().top, G = I + az / 2 - E, M = L + X / 2 - O, z = P.gesture
								.image[0].offsetWidth, H = P.gesture.image[0].offsetHeight, D = z * P
								.scale, C = H * P.scale, B = Math.min(az / 2 - D / 2, 0), ax = Math.min(
									X / 2 - C / 2, 0), ay = -B, aA = -ax, A = G * P.scale, Y = M * P
								.scale, A < B && (A = B), A > ay && (A = ay), Y < ax && (Y = ax), Y >
								aA && (Y = aA)) : (A = 0, Y = 0), P.gesture.imageWrap.transition(300)
							.transform("translate3d(" + A + "px, " + Y + "px,0)"), P.gesture.image
							.transition(300).transform("translate3d(0,0,0) scale(" + P.scale + ")"))
					}
				},
				attachEvents: function(i) {
					var l = i ? "off" : "on";
					if (an.params.zoom) {
						var k = (an.slides, !("touchstart" !== an.touchEvents.start || !an.support
							.passiveListener || !an.params.passiveListeners) && {
							passive: !0,
							capture: !1
						});
						an.support.gestures ? (an.slides[l]("gesturestart", an.zoom.onGestureStart, k), an
								.slides[l]("gesturechange", an.zoom.onGestureChange, k), an.slides[l](
									"gestureend", an.zoom.onGestureEnd, k)) : "touchstart" === an
							.touchEvents.start && (an.slides[l](an.touchEvents.start, an.zoom
								.onGestureStart, k), an.slides[l](an.touchEvents.move, an.zoom
								.onGestureChange, k), an.slides[l](an.touchEvents.end, an.zoom
								.onGestureEnd, k)), an[l]("touchStart", an.zoom.onTouchStart), an.slides
							.each(function(m, n) {
								c(n).find("." + an.params.zoomContainerClass).length > 0 && c(n)[l](an
									.touchEvents.move, an.zoom.onTouchMove)
							}), an[l]("touchEnd", an.zoom.onTouchEnd), an[l]("transitionEnd", an.zoom
								.onTransitionEnd), an.params.zoomToggle && an.on("doubleTap", an.zoom
								.toggleZoom)
					}
				},
				init: function() {
					an.zoom.attachEvents()
				},
				destroy: function() {
					an.zoom.attachEvents(!0)
				}
			}, an._plugins = [];
			for (var av in an.plugins) {
				var ah = an.plugins[av](an, an.params[av]);
				ah && an._plugins.push(ah)
			}
			return an.callPlugins = function(k) {
				for (var i = 0; i < an._plugins.length; i++) {
					k in an._plugins[i] && an._plugins[i][k](arguments[1], arguments[2], arguments[3],
						arguments[4], arguments[5])
				}
			}, an.emitterEventListeners = {}, an.emit = function(k) {
				an.params[k] && an.params[k](arguments[1], arguments[2], arguments[3], arguments[4], arguments[
					5]);
				var i;
				if (an.emitterEventListeners[k]) {
					for (i = 0; i < an.emitterEventListeners[k].length; i++) {
						an.emitterEventListeners[k][i](arguments[1], arguments[2], arguments[3], arguments[4],
							arguments[5])
					}
				}
				an.callPlugins && an.callPlugins(k, arguments[1], arguments[2], arguments[3], arguments[4],
					arguments[5])
			}, an.on = function(k, i) {
				return k = ad(k), an.emitterEventListeners[k] || (an.emitterEventListeners[k] = []), an
					.emitterEventListeners[k].push(i), an
			}, an.off = function(k, i) {
				var l;
				if (k = ad(k), void 0 === i) {
					return an.emitterEventListeners[k] = [], an
				}
				if (an.emitterEventListeners[k] && 0 !== an.emitterEventListeners[k].length) {
					for (l = 0; l < an.emitterEventListeners[k].length; l++) {
						an.emitterEventListeners[k][l] === i && an.emitterEventListeners[k].splice(l, 1)
					}
					return an
				}
			}, an.once = function(k, i) {
				k = ad(k);
				var l = function() {
					i(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), an.off(k, l)
				};
				return an.on(k, l), an
			}, an.a11y = {
				makeFocusable: function(i) {
					return i.attr("tabIndex", "0"), i
				},
				addRole: function(k, i) {
					return k.attr("role", i), k
				},
				addLabel: function(k, i) {
					return k.attr("aria-label", i), k
				},
				disable: function(i) {
					return i.attr("aria-disabled", !0), i
				},
				enable: function(i) {
					return i.attr("aria-disabled", !1), i
				},
				onEnterKey: function(i) {
					13 === i.keyCode && (c(i.target).is(an.params.nextButton) ? (an.onClickNext(i), an
						.isEnd ? an.a11y.notify(an.params.lastSlideMessage) : an.a11y.notify(an
							.params.nextSlideMessage)) : c(i.target).is(an.params.prevButton) && (an
						.onClickPrev(i), an.isBeginning ? an.a11y.notify(an.params
							.firstSlideMessage) : an.a11y.notify(an.params.prevSlideMessage)), c(i
						.target).is("." + an.params.bulletClass) && c(i.target)[0].click())
				},
				liveRegion: c('<span class="' + an.params.notificationClass +
					'" aria-live="assertive" aria-atomic="true"></span>'),
				notify: function(k) {
					var i = an.a11y.liveRegion;
					0 !== i.length && (i.html(""), i.html(k))
				},
				init: function() {
					an.params.nextButton && an.nextButton && an.nextButton.length > 0 && (an.a11y
							.makeFocusable(an.nextButton), an.a11y.addRole(an.nextButton, "button"), an.a11y
							.addLabel(an.nextButton, an.params.nextSlideMessage)), an.params.prevButton &&
						an.prevButton && an.prevButton.length > 0 && (an.a11y.makeFocusable(an.prevButton),
							an.a11y.addRole(an.prevButton, "button"), an.a11y.addLabel(an.prevButton, an
								.params.prevSlideMessage)), c(an.container).append(an.a11y.liveRegion)
				},
				initPagination: function() {
					an.params.pagination && an.params.paginationClickable && an.bullets && an.bullets
						.length && an.bullets.each(function() {
							var i = c(this);
							an.a11y.makeFocusable(i), an.a11y.addRole(i, "button"), an.a11y.addLabel(i,
								an.params.paginationBulletMessage.replace(/{{index}}/, i.index() +
									1))
						})
				},
				destroy: function() {
					an.a11y.liveRegion && an.a11y.liveRegion.length > 0 && an.a11y.liveRegion.remove()
				}
			}, an.init = function() {
				an.params.loop && an.createLoop(), an.updateContainerSize(), an.updateSlidesSize(), an
					.updatePagination(), an.params.scrollbar && an.scrollbar && (an.scrollbar.set(), an.params
						.scrollbarDraggable && an.scrollbar.enableDraggable()), "slide" !== an.params.effect &&
					an.effects[an.params.effect] && (an.params.loop || an.updateProgress(), an.effects[an.params
						.effect].setTranslate()), an.params.loop ? an.slideTo(an.params.initialSlide + an
						.loopedSlides, 0, an.params.runCallbacksOnInit) : (an.slideTo(an.params.initialSlide, 0,
						an.params.runCallbacksOnInit), 0 === an.params.initialSlide && (an.parallax && an
						.params.parallax && an.parallax.setTranslate(), an.lazy && an.params.lazyLoading &&
						(an.lazy.load(), an.lazy.initialImageLoaded = !0))), an.attachEvents(), an.params
					.observer && an.support.observer && an.initObservers(), an.params.preloadImages && !an
					.params.lazyLoading && an.preloadImages(), an.params.zoom && an.zoom && an.zoom.init(), an
					.params.autoplay && an.startAutoplay(), an.params.keyboardControl && an
					.enableKeyboardControl && an.enableKeyboardControl(), an.params.mousewheelControl && an
					.enableMousewheelControl && an.enableMousewheelControl(), an.params.hashnavReplaceState && (
						an.params.replaceState = an.params.hashnavReplaceState), an.params.history && an
					.history && an.history.init(), an.params.hashnav && an.hashnav && an.hashnav.init(), an
					.params.a11y && an.a11y && an.a11y.init(), an.emit("onInit", an)
			}, an.cleanupStyles = function() {
				an.container.removeClass(an.classNames.join(" ")).removeAttr("style"), an.wrapper.removeAttr(
						"style"), an.slides && an.slides.length && an.slides.removeClass([an.params
						.slideVisibleClass, an.params.slideActiveClass, an.params.slideNextClass, an.params
						.slidePrevClass
					].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr(
						"data-swiper-row"), an.paginationContainer && an.paginationContainer.length && an
					.paginationContainer.removeClass(an.params.paginationHiddenClass), an.bullets && an.bullets
					.length && an.bullets.removeClass(an.params.bulletActiveClass), an.params.prevButton && c(an
						.params.prevButton).removeClass(an.params.buttonDisabledClass), an.params.nextButton &&
					c(an.params.nextButton).removeClass(an.params.buttonDisabledClass), an.params.scrollbar &&
					an.scrollbar && (an.scrollbar.track && an.scrollbar.track.length && an.scrollbar.track
						.removeAttr("style"), an.scrollbar.drag && an.scrollbar.drag.length && an.scrollbar.drag
						.removeAttr("style"))
			}, an.destroy = function(k, i) {
				an.detachEvents(), an.stopAutoplay(), an.params.scrollbar && an.scrollbar && an.params
					.scrollbarDraggable && an.scrollbar.disableDraggable(), an.params.loop && an.destroyLoop(),
					i && an.cleanupStyles(), an.disconnectObservers(), an.params.zoom && an.zoom && an.zoom
					.destroy(), an.params.keyboardControl && an.disableKeyboardControl && an
					.disableKeyboardControl(), an.params.mousewheelControl && an.disableMousewheelControl && an
					.disableMousewheelControl(), an.params.a11y && an.a11y && an.a11y.destroy(), an.params
					.history && !an.params.replaceState && window.removeEventListener("popstate", an.history
						.setHistoryPopState), an.params.hashnav && an.hashnav && an.hashnav.destroy(), an.emit(
						"onDestroy"), k !== !1 && (an = null)
			}, an.init(), an
		}
	};
	b.prototype = {
		isSafari: function() {
			var a = window.navigator.userAgent.toLowerCase();
			return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
		isArray: function(a) {
			return "[object Array]" === Object.prototype.toString.apply(a)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator
				.pointerEnabled && window.navigator.maxTouchPoints > 1,
			lteIE9: function() {
				var a = document.createElement("div");
				return a.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === a.getElementsByTagName("i")
					.length
			}()
		},
		device: function() {
			var k = window.navigator.userAgent,
				j = k.match(/(Android);?[\s\/]+([\d.]+)?/),
				n = k.match(/(iPad).*OS\s([\d_]+)/),
				m = k.match(/(iPod)(.*OS\s([\d_]+))?/),
				l = !n && k.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			return {
				ios: n || l || m,
				android: j
			}
		}(),
		support: {
			touch: window.Modernizr && Modernizr.touch === !0 || function() {
				return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
			}(),
			transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
				var a = document.createElement("div").style;
				return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a ||
					"MsPerspective" in a || "perspective" in a
			}(),
			flexbox: function() {
				for (var j = document.createElement("div").style, i =
						"alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient"
						.split(" "), k = 0; k < i.length; k++) {
					if (i[k] in j) {
						return !0
					}
				}
			}(),
			observer: function() {
				return "MutationObserver" in window || "WebkitMutationObserver" in window
			}(),
			passiveListener: function() {
				var j = !1;
				try {
					var i = Object.defineProperty({}, "passive", {
						get: function() {
							j = !0
						}
					});
					window.addEventListener("testPassiveListener", null, i)
				} catch (j) {}
				return j
			}(),
			gestures: function() {
				return "ongesturestart" in window
			}()
		},
		plugins: {}
	};
	for (var h = (function() {
			var j = function(l) {
					var k = this,
						m = 0;
					for (m = 0; m < l.length; m++) {
						k[m] = l[m]
					}
					return k.length = l.length, this
				},
				i = function(e, w) {
					var v = [],
						k = 0;
					if (e && !w && e instanceof j) {
						return e
					}
					if (e) {
						if ("string" == typeof e) {
							var u, p, q = e.trim();
							if (q.indexOf("<") >= 0 && q.indexOf(">") >= 0) {
								var m = "div";
								for (0 === q.indexOf("<li") && (m = "ul"), 0 === q.indexOf("<tr") && (m =
										"tbody"), 0 !== q.indexOf("<td") && 0 !== q.indexOf("<th") || (m =
									"tr"), 0 === q.indexOf("<tbody") && (m = "table"), 0 === q.indexOf(
										"<option") && (m = "select"), p = document.createElement(m), p
									.innerHTML = e, k = 0; k < p.childNodes.length; k++) {
									v.push(p.childNodes[k])
								}
							} else {
								for (u = w || "#" !== e[0] || e.match(/[ .<>:~]/) ? (w || document)
									.querySelectorAll(e) : [document.getElementById(e.split("#")[1])], k =
									0; k < u.length; k++) {
									u[k] && v.push(u[k])
								}
							}
						} else {
							if (e.nodeType || e === window || e === document) {
								v.push(e)
							} else {
								if (e.length > 0 && e[0].nodeType) {
									for (k = 0; k < e.length; k++) {
										v.push(e[k])
									}
								}
							}
						}
					}
					return new j(v)
				};
			return j.prototype = {
				addClass: function(l) {
					if (void 0 === l) {
						return this
					}
					for (var k = l.split(" "), n = 0; n < k.length; n++) {
						for (var m = 0; m < this.length; m++) {
							this[m].classList.add(k[n])
						}
					}
					return this
				},
				removeClass: function(l) {
					for (var k = l.split(" "), n = 0; n < k.length; n++) {
						for (var m = 0; m < this.length; m++) {
							this[m].classList.remove(k[n])
						}
					}
					return this
				},
				hasClass: function(a) {
					return !!this[0] && this[0].classList.contains(a)
				},
				toggleClass: function(l) {
					for (var k = l.split(" "), n = 0; n < k.length; n++) {
						for (var m = 0; m < this.length; m++) {
							this[m].classList.toggle(k[n])
						}
					}
					return this
				},
				attr: function(l, k) {
					if (1 === arguments.length && "string" == typeof l) {
						return this[0] ? this[0].getAttribute(l) : void 0
					}
					for (var n = 0; n < this.length; n++) {
						if (2 === arguments.length) {
							this[n].setAttribute(l, k)
						} else {
							for (var m in l) {
								this[n][m] = l[m], this[n].setAttribute(m, l[m])
							}
						}
					}
					return this
				},
				removeAttr: function(l) {
					for (var k = 0; k < this.length; k++) {
						this[k].removeAttribute(l)
					}
					return this
				},
				data: function(l, k) {
					if (void 0 !== k) {
						for (var o = 0; o < this.length; o++) {
							var n = this[o];
							n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n
								.dom7ElementDataStorage[l] = k
						}
						return this
					}
					if (this[0]) {
						var m = this[0].getAttribute("data-" + l);
						return m ? m : this[0].dom7ElementDataStorage && l in this[0]
							.dom7ElementDataStorage ? this[0].dom7ElementDataStorage[l] : void 0
					}
				},
				transform: function(l) {
					for (var k = 0; k < this.length; k++) {
						var m = this[k].style;
						m.webkitTransform = m.MsTransform = m.msTransform = m.MozTransform = m
							.OTransform = m.transform = l
					}
					return this
				},
				transition: function(l) {
					"string" != typeof l && (l += "ms");
					for (var k = 0; k < this.length; k++) {
						var m = this[k].style;
						m.webkitTransitionDuration = m.MsTransitionDuration = m.msTransitionDuration = m
							.MozTransitionDuration = m.OTransitionDuration = m.transitionDuration = l
					}
					return this
				},
				on: function(a, w, v, k) {
					function u(l) {
						var o = l.target;
						if (i(o).is(w)) {
							v.call(o, l)
						} else {
							for (var t = i(o).parents(), s = 0; s < t.length; s++) {
								i(t[s]).is(w) && v.call(t[s], l)
							}
						}
					}
					var p, q, m = a.split(" ");
					for (p = 0; p < this.length; p++) {
						if ("function" == typeof w || w === !1) {
							for ("function" == typeof w && (v = arguments[1], k = arguments[2] || !1),
								q = 0; q < m.length; q++) {
								this[p].addEventListener(m[q], v, k)
							}
						} else {
							for (q = 0; q < m.length; q++) {
								this[p].dom7LiveListeners || (this[p].dom7LiveListeners = []), this[p]
									.dom7LiveListeners.push({
										listener: v,
										liveListener: u
									}), this[p].addEventListener(m[q], u, k)
							}
						}
					}
					return this
				},
				off: function(l, k, w, v) {
					for (var m = l.split(" "), u = 0; u < m.length; u++) {
						for (var p = 0; p < this.length; p++) {
							if ("function" == typeof k || k === !1) {
								"function" == typeof k && (w = arguments[1], v = arguments[2] || !1),
									this[p].removeEventListener(m[u], w, v)
							} else {
								if (this[p].dom7LiveListeners) {
									for (var q = 0; q < this[p].dom7LiveListeners.length; q++) {
										this[p].dom7LiveListeners[q].listener === w && this[p]
											.removeEventListener(m[u], this[p].dom7LiveListeners[q]
												.liveListener, v)
									}
								}
							}
						}
					}
					return this
				},
				once: function(l, k, p, o) {
					function m(a) {
						p(a), n.off(l, k, m, o)
					}
					var n = this;
					"function" == typeof k && (k = !1, p = arguments[1], o = arguments[2]), n.on(l, k,
						m, o)
				},
				trigger: function(l, k) {
					for (var n = 0; n < this.length; n++) {
						var m;
						try {
							m = new window.CustomEvent(l, {
								detail: k,
								bubbles: !0,
								cancelable: !0
							})
						} catch (n) {
							m = document.createEvent("Event"), m.initEvent(l, !0, !0), m.detail = k
						}
						this[n].dispatchEvent(m)
					}
					return this
				},
				transitionEnd: function(l) {
					function k(a) {
						if (a.target === this) {
							for (l.call(this, a), o = 0; o < n.length; o++) {
								m.off(n[o], k)
							}
						}
					}
					var o, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd",
							"MSTransitionEnd", "msTransitionEnd"
						],
						m = this;
					if (l) {
						for (o = 0; o < n.length; o++) {
							m.on(n[o], k)
						}
					}
					return this
				},
				width: function() {
					return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this
						.css("width")) : null
				},
				outerWidth: function(a) {
					return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css(
							"margin-right")) + parseFloat(this.css("margin-left")) : this[0]
						.offsetWidth : null
				},
				height: function() {
					return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this
						.css("height")) : null
				},
				outerHeight: function(a) {
					return this.length > 0 ? a ? this[0].offsetHeight + parseFloat(this.css(
							"margin-top")) + parseFloat(this.css("margin-bottom")) : this[0]
						.offsetHeight : null
				},
				offset: function() {
					if (this.length > 0) {
						var l = this[0],
							k = l.getBoundingClientRect(),
							u = document.body,
							q = l.clientTop || u.clientTop || 0,
							m = l.clientLeft || u.clientLeft || 0,
							p = window.pageYOffset || l.scrollTop,
							o = window.pageXOffset || l.scrollLeft;
						return {
							top: k.top + p - q,
							left: k.left + o - m
						}
					}
					return null
				},
				css: function(l, k) {
					var n;
					if (1 === arguments.length) {
						if ("string" != typeof l) {
							for (n = 0; n < this.length; n++) {
								for (var m in l) {
									this[n].style[m] = l[m]
								}
							}
							return this
						}
						if (this[0]) {
							return window.getComputedStyle(this[0], null).getPropertyValue(l)
						}
					}
					if (2 === arguments.length && "string" == typeof l) {
						for (n = 0; n < this.length; n++) {
							this[n].style[l] = k
						}
						return this
					}
					return this
				},
				each: function(l) {
					for (var k = 0; k < this.length; k++) {
						l.call(this[k], k, this[k])
					}
					return this
				},
				html: function(l) {
					if (void 0 === l) {
						return this[0] ? this[0].innerHTML : void 0
					}
					for (var k = 0; k < this.length; k++) {
						this[k].innerHTML = l
					}
					return this
				},
				text: function(l) {
					if (void 0 === l) {
						return this[0] ? this[0].textContent.trim() : null
					}
					for (var k = 0; k < this.length; k++) {
						this[k].textContent = l
					}
					return this
				},
				is: function(l) {
					if (!this[0]) {
						return !1
					}
					var k, a;
					if ("string" == typeof l) {
						var e = this[0];
						if (e === document) {
							return l === document
						}
						if (e === window) {
							return l === window
						}
						if (e.matches) {
							return e.matches(l)
						}
						if (e.webkitMatchesSelector) {
							return e.webkitMatchesSelector(l)
						}
						if (e.mozMatchesSelector) {
							return e.mozMatchesSelector(l)
						}
						if (e.msMatchesSelector) {
							return e.msMatchesSelector(l)
						}
						for (k = i(l), a = 0; a < k.length; a++) {
							if (k[a] === this[0]) {
								return !0
							}
						}
						return !1
					}
					if (l === document) {
						return this[0] === document
					}
					if (l === window) {
						return this[0] === window
					}
					if (l.nodeType || l instanceof j) {
						for (k = l.nodeType ? [l] : l, a = 0; a < k.length; a++) {
							if (k[a] === this[0]) {
								return !0
							}
						}
						return !1
					}
					return !1
				},
				index: function() {
					if (this[0]) {
						for (var l = this[0], k = 0; null !== (l = l.previousSibling);) {
							1 === l.nodeType && k++
						}
						return k
					}
				},
				eq: function(e) {
					if (void 0 === e) {
						return this
					}
					var l, k = this.length;
					return e > k - 1 ? new j([]) : e < 0 ? (l = k + e, new j(l < 0 ? [] : [this[l]])) :
						new j([this[e]])
				},
				append: function(e) {
					var m, l;
					for (m = 0; m < this.length; m++) {
						if ("string" == typeof e) {
							var k = document.createElement("div");
							for (k.innerHTML = e; k.firstChild;) {
								this[m].appendChild(k.firstChild)
							}
						} else {
							if (e instanceof j) {
								for (l = 0; l < e.length; l++) {
									this[m].appendChild(e[l])
								}
							} else {
								this[m].appendChild(e)
							}
						}
					}
					return this
				},
				prepend: function(e) {
					var m, l;
					for (m = 0; m < this.length; m++) {
						if ("string" == typeof e) {
							var k = document.createElement("div");
							for (k.innerHTML = e, l = k.childNodes.length - 1; l >= 0; l--) {
								this[m].insertBefore(k.childNodes[l], this[m].childNodes[0])
							}
						} else {
							if (e instanceof j) {
								for (l = 0; l < e.length; l++) {
									this[m].insertBefore(e[l], this[m].childNodes[0])
								}
							} else {
								this[m].insertBefore(e, this[m].childNodes[0])
							}
						}
					}
					return this
				},
				insertBefore: function(a) {
					for (var m = i(a), l = 0; l < this.length; l++) {
						if (1 === m.length) {
							m[0].parentNode.insertBefore(this[l], m[0])
						} else {
							if (m.length > 1) {
								for (var k = 0; k < m.length; k++) {
									m[k].parentNode.insertBefore(this[l].cloneNode(!0), m[k])
								}
							}
						}
					}
				},
				insertAfter: function(a) {
					for (var m = i(a), l = 0; l < this.length; l++) {
						if (1 === m.length) {
							m[0].parentNode.insertBefore(this[l], m[0].nextSibling)
						} else {
							if (m.length > 1) {
								for (var k = 0; k < m.length; k++) {
									m[k].parentNode.insertBefore(this[l].cloneNode(!0), m[k]
										.nextSibling)
								}
							}
						}
					}
				},
				next: function(a) {
					return new j(this.length > 0 ? a ? this[0].nextElementSibling && i(this[0]
							.nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0]
						.nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				},
				nextAll: function(l) {
					var k = [],
						a = this[0];
					if (!a) {
						return new j([])
					}
					for (; a.nextElementSibling;) {
						var e = a.nextElementSibling;
						l ? i(e).is(l) && k.push(e) : k.push(e), a = e
					}
					return new j(k)
				},
				prev: function(a) {
					return new j(this.length > 0 ? a ? this[0].previousElementSibling && i(this[0]
							.previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] :
						this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				},
				prevAll: function(l) {
					var k = [],
						a = this[0];
					if (!a) {
						return new j([])
					}
					for (; a.previousElementSibling;) {
						var e = a.previousElementSibling;
						l ? i(e).is(l) && k.push(e) : k.push(e), a = e
					}
					return new j(k)
				},
				parent: function(a) {
					for (var l = [], k = 0; k < this.length; k++) {
						a ? i(this[k].parentNode).is(a) && l.push(this[k].parentNode) : l.push(this[k]
							.parentNode)
					}
					return i(i.unique(l))
				},
				parents: function(a) {
					for (var m = [], l = 0; l < this.length; l++) {
						for (var k = this[l].parentNode; k;) {
							a ? i(k).is(a) && m.push(k) : m.push(k), k = k.parentNode
						}
					}
					return i(i.unique(m))
				},
				find: function(e) {
					for (var n = [], m = 0; m < this.length; m++) {
						for (var k = this[m].querySelectorAll(e), l = 0; l < k.length; l++) {
							n.push(k[l])
						}
					}
					return new j(n)
				},
				children: function(m) {
					for (var l = [], a = 0; a < this.length; a++) {
						for (var k = this[a].childNodes, e = 0; e < k.length; e++) {
							m ? 1 === k[e].nodeType && i(k[e]).is(m) && l.push(k[e]) : 1 === k[e]
								.nodeType && l.push(k[e])
						}
					}
					return new j(i.unique(l))
				},
				remove: function() {
					for (var a = 0; a < this.length; a++) {
						this[a].parentNode && this[a].parentNode.removeChild(this[a])
					}
					return this
				},
				add: function() {
					var a, m, l = this;
					for (a = 0; a < arguments.length; a++) {
						var k = i(arguments[a]);
						for (m = 0; m < k.length; m++) {
							l[l.length] = k[m], l.length++
						}
					}
					return l
				}
			}, i.fn = j.prototype, i.unique = function(l) {
				for (var k = [], m = 0; m < l.length; m++) {
					k.indexOf(l[m]) === -1 && k.push(l[m])
				}
				return k
			}, i
		}()), g = ["jQuery", "Zepto", "Dom7"], d = 0; d < g.length; d++) {
		window[g[d]] && function(a) {
			a.fn.swiper = function(i) {
				var e;
				return a(this).each(function() {
					var j = new b(this, i);
					e || (e = j)
				}), e
			}
		}(window[g[d]])
	}
	var f;
	f = void 0 === h ? window.Dom7 || window.Zepto || window.jQuery : h, f && ("transitionEnd" in f.fn || (f.fn
		.transitionEnd = function(k) {
			function j(a) {
				if (a.target === this) {
					for (k.call(this, a), n = 0; n < m.length; n++) {
						l.off(m[n], j)
					}
				}
			}
			var n, m = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd",
					"msTransitionEnd"
				],
				l = this;
			if (k) {
				for (n = 0; n < m.length; n++) {
					l.on(m[n], j)
				}
			}
			return this
		}), "transform" in f.fn || (f.fn.transform = function(j) {
		for (var i = 0; i < this.length; i++) {
			var k = this[i].style;
			k.webkitTransform = k.MsTransform = k.msTransform = k.MozTransform = k.OTransform = k
				.transform = j
		}
		return this
	}), "transition" in f.fn || (f.fn.transition = function(j) {
		"string" != typeof j && (j += "ms");
		for (var i = 0; i < this.length; i++) {
			var k = this[i].style;
			k.webkitTransitionDuration = k.MsTransitionDuration = k.msTransitionDuration = k
				.MozTransitionDuration = k.OTransitionDuration = k.transitionDuration = j
		}
		return this
	}), "outerWidth" in f.fn || (f.fn.outerWidth = function(a) {
		return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) +
			parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
	})), window.Swiper = b
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd &&
	define([], function() {
		return window.Swiper
	});
(function(a) {
	a.ajaxChimp = {
		responses: {
			"We have sent you a confirmation email": 0,
			"Please enter a value": 1,
			"An email address must contain a single @": 2,
			"The domain portion of the email address is invalid (the portion after the @: )": 3,
			"The username portion of the email address is invalid (the portion before the @: )": 4,
			"This email address looks fake or invalid. Please enter a real email address": 5
		},
		translations: {
			en: null
		},
		init: function(c, b) {
			a(c).ajaxChimp(b)
		}
	};
	a.fn.ajaxChimp = function(b) {
		a(this).each(function(f, c) {
			var e = a(c);
			var d = e.find("input[type=email]");
			var g = e.find("label[for=" + d.attr("id") + "]");
			var h = a.extend({
				url: e.attr("action"),
				language: "en"
			}, b);
			var j = h.url.replace("/post?", "/post-json?").concat("&c=?");
			e.attr("novalidate", "true");
			d.attr("name", "EMAIL");
			e.submit(function() {
				var l;

				function n(s) {
					if (s.result === "success") {
						l = "We have sent you a confirmation email";
						g.removeClass("error").addClass("valid");
						d.removeClass("error").addClass("valid")
					} else {
						d.removeClass("valid").addClass("error");
						g.removeClass("valid").addClass("error");
						var q = -1;
						try {
							var r = s.msg.split(" - ", 2);
							if (r[1] === undefined) {
								l = s.msg
							} else {
								var p = parseInt(r[0], 10);
								if (p.toString() === r[0]) {
									q = r[0];
									l = r[1]
								} else {
									q = -1;
									l = s.msg
								}
							}
						} catch (o) {
							q = -1;
							l = s.msg
						}
					}
					if (h.language !== "en" && a.ajaxChimp.responses[l] !== undefined && a
						.ajaxChimp.translations && a.ajaxChimp.translations[h.language] && a
						.ajaxChimp.translations[h.language][a.ajaxChimp.responses[l]]) {
						l = a.ajaxChimp.translations[h.language][a.ajaxChimp.responses[l]]
					}
					g.html(l);
					g.show(2000);
					if (h.callback) {
						h.callback(s)
					}
				}
				var i = {};
				var k = e.serializeArray();
				a.each(k, function(o, p) {
					i[p.name] = p.value
				});
				a.ajax({
					url: j,
					data: i,
					success: n,
					dataType: "jsonp",
					error: function(o, p) {
						console.log("mailchimp ajax submit error: " + p)
					}
				});
				var m = "Submitting...";
				if (h.language !== "en" && a.ajaxChimp.translations && a.ajaxChimp.translations[
						h.language] && a.ajaxChimp.translations[h.language]["submit"]) {
					m = a.ajaxChimp.translations[h.language]["submit"]
				}
				g.html(m).show(2000);
				return false
			})
		});
		return this
	}
})(jQuery);
/* * multiscroll.js 0.2.2 * https://github.com/alvarotrigo/multiscroll.js */
! function(b, e, a, c, d) {
	b.fn.multiscroll = function(O) {
		var ac = b.fn.multiscroll;
		O = b.extend({
			verticalCentered: !0,
			scrollingSpeed: 700,
			easing: "easeInQuart",
			menu: !1,
			sectionsColor: [],
			anchors: [],
			navigation: !1,
			navigationPosition: "right",
			navigationColor: "#000",
			navigationTooltips: [],
			loopBottom: !1,
			loopTop: !1,
			css3: !1,
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			normalScrollElements: null,
			keyboardScrolling: !0,
			touchSensitivity: 5,
			sectionSelector: ".ms-section",
			leftSelector: ".ms-left",
			rightSelector: ".ms-right",
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterResize: null
		}, O);
		var U = 600,
			ab = navigator.userAgent.match(
				/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
				),
			V = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
		".ms-right" !== O.rightSelector && b(O.rightSelector).addClass("ms-right"), ".ms-left" !== O.leftSelector &&
			b(O.leftSelector).addClass("ms-left");
		var ag, j, X, ak = b(".ms-left").find(".ms-section").length,
			ad = !1,
			af = b(e).height(),
			K = function() {
				var f;
				f = e.PointerEvent ? {
					down: "pointerdown",
					move: "pointermove"
				} : {
					down: "MSPointerDown",
					move: "MSPointerMove"
				};
				return f
			}(),
			ai = {
				touchmove: "ontouchmove" in e ? "touchmove" : K.move,
				touchstart: "ontouchstart" in e ? "touchstart" : K.down
			};

		function G() {
			var f = e.location.hash.replace("#", "");
			if (f.length) {
				var g = b(".ms-left").find('[data-anchor="' + f + '"]');
				("undefined" == typeof lastScrolledDestiny || f !== lastScrolledDestiny) && ao(g)
			}
		}

		function Z(f) {
			f.preventDefault();
			var g = b(this).parent().index();
			ao(b(".ms-left .ms-section").eq(g))
		}

		function I() {
			var f = b(this).data("tooltip");
			b('<div class="multiscroll-tooltip ' + O.navigationPosition + '">' + f + "</div>").hide().appendTo(b(
				this)).fadeIn(200)
		}

		function al() {
			b(this).find(".multiscroll-tooltip").fadeOut(200, function() {
				b(this).remove()
			})
		}
		am(), ap(), O.css3 && (O.css3 = function() {
			var f, i = a.createElement("p"),
				g = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			for (var h in a.body.insertBefore(i, null), g) {
				i.style[h] !== d && (i.style[h] = "translate3d(1px,1px,1px)", f = e.getComputedStyle(i)
					.getPropertyValue(g[h]))
			}
			return a.body.removeChild(i), f !== d && 0 < f.length && "none" !== f
		}()), b("html, body").css({
			overflow: "hidden",
			height: "100%"
		}), ".ms-section" !== O.sectionSelector && b(O.sectionSelector).each(function() {
			b(this).addClass("ms-section")
		}), O.navigation && (b("body").append('<div id="multiscroll-nav"><ul></ul></div>'), (ag = b(
			"#multiscroll-nav")).css("color", O.navigationColor), ag.addClass(O.navigationPosition)), b(
			".ms-right, .ms-left").css({
			width: "50%",
			position: "absolute",
			height: "100%",
			"-ms-touch-action": "none"
		}), b(".ms-right").css({
			right: "1px",
			top: "0",
			"-ms-touch-action": "none",
			"touch-action": "none"
		}), b(".ms-left").css({
			left: "0",
			top: "0",
			"-ms-touch-action": "none",
			"touch-action": "none"
		}), b(".ms-left .ms-section, .ms-right .ms-section").each(function() {
			var f, i = b(this).index();
			if ((O.paddingTop || O.paddingBottom) && b(this).css("padding", O.paddingTop + " 0 " + O
					.paddingBottom + " 0"), void 0 !== O.sectionsColor[i] && b(this).css("background-color",
					O.sectionsColor[i]), void 0 !== O.anchors[i] && b(this).attr("data-anchor", O.anchors[
					i]), O.verticalCentered && (f = b(this)).addClass("ms-table").wrapInner(
					'<div class="ms-tableCell" style="height: ' + Y(f) + 'px" />'), b(this).closest(
					".ms-left").length && O.navigation) {
				var g = "";
				O.anchors.length && (g = O.anchors[i]);
				var h = O.navigationTooltips[i];
				void 0 === h && (h = ""), O.navigation && ag.find("ul").append('<li data-tooltip="' + h +
					'"><a href="#' + g + '"><span></span></a></li>')
			}
		}), b(".ms-right").html(b(".ms-right").find(".ms-section").get().reverse()), b(
			".ms-left .ms-section, .ms-right .ms-section").each(function() {
			var f = b(this).index();
			b(this).css({
				height: "100%"
			}), !f && O.navigation && ag.find("li").eq(f).find("a").addClass("active")
		}).promise().done(function() {
			b(".ms-left .ms-section.active").length || (b(".ms-right").find(".ms-section").last().addClass(
					"active"), b(".ms-left").find(".ms-section").first().addClass("active")), O
				.navigation && ag.css("margin-top", "-" + ag.height() / 2 + "px"), b.isFunction(O
					.afterRender) && O.afterRender.call(this), q(), N(), b(e).on("load", function() {
					var f, g;
					f = e.location.hash.replace("#", ""), g = b('.ms-left .ms-section[data-anchor="' +
						f + '"]'), f.length && ao(g)
				})
		}), b(e).on("hashchange", G), b(a).keydown(function(f) {
			clearTimeout(X);
			var h = b(a.activeElement);
			if (!h.is("textarea") && !h.is("input") && !h.is("select") && O.keyboardScrolling) {
				var g = f.which; - 1 < b.inArray(g, [40, 38, 32, 33, 34]) && f.preventDefault(), X =
					setTimeout(function() {
						! function(i) {
							var k = i.shiftKey;
							switch (i.which) {
								case 38:
								case 33:
									ac.moveSectionUp();
									break;
								case 32:
									if (k) {
										ac.moveSectionUp();
										break
									}
									case 40:
									case 34:
										ac.moveSectionDown();
										break;
									case 36:
										ac.moveTo(1);
										break;
									case 35:
										ac.moveTo(b(".ms-left .ms-section").length);
										break;
									default:
							}
						}(f)
					}, 150)
			}
		}), b(a).mousedown(function(f) {
			if (1 == f.button) {
				return f.preventDefault(), !1
			}
		}), b(a).on("click", "#multiscroll-nav a", Z), b(a).on({
			mouseenter: I,
			mouseleave: al
		}, "#multiscroll-nav li"), O.normalScrollElements && (b(a).on("mouseenter", O.normalScrollElements,
			function() {
				ac.setMouseWheelScrolling(!1)
			}), b(a).on("mouseleave", O.normalScrollElements, function() {
			ac.setMouseWheelScrolling(!0)
		})), b(e).on("resize", ah);
		var R = af;

		function ah() {
			if (ab) {
				var f = b(a.activeElement);
				if (!f.is("textarea") && !f.is("input") && !f.is("select")) {
					var g = b(e).height();
					c.abs(g - R) > 20 * c.max(R, g) / 100 && (an(!0), R = g)
				}
			} else {
				clearTimeout(j), j = setTimeout(function() {
					an(!0)
				}, 350)
			}
		}

		function an(f) {
			af = b(e).height(), b(".ms-tableCell").each(function() {
					b(this).css({
						height: Y(b(this).parent())
					})
				}), O.scrollOverflow && scrollBarHandler.createScrollBarForAll(), q(), b.isFunction(O
				.afterResize) && O.afterResize.call(this)
		}

		function q() {
			O.css3 ? (aj(b(".ms-left"), "translate3d(0px, -" + b(".ms-left").find(".ms-section.active").position()
				.top + "px, 0px)", !1), aj(b(".ms-right"), "translate3d(0px, -" + b(".ms-right").find(
				".ms-section.active").position().top + "px, 0px)", !1)) : (b(".ms-left").css("top", -b(
				".ms-left").find(".ms-section.active").position().top), b(".ms-right").css("top", -b(
				".ms-right").find(".ms-section.active").position().top))
		}

		function ao(k) {
			var C = k.index(),
				x = b(".ms-right").find(".ms-section").eq(ak - 1 - C),
				y = k.data("anchor"),
				p = b(".ms-left .ms-section.active").index() + 1,
				B = function(i) {
					var m = b(".ms-left .ms-section.active").index(),
						l = i.index();
					if (l < m) {
						return "up"
					}
					return "down"
				}(k);
			ad = !0;
			var f, u, z, g = k.position().top,
				w = x.position().top;
			if (x.addClass("active").siblings().removeClass("active"), k.addClass("active").siblings().removeClass(
					"active"), function(i) {
					O.anchors.length && (location.hash = i);
					N()
				}(y), O.css3) {
				b.isFunction(O.onLeave) && O.onLeave.call(this, p, C + 1, B);
				var h = "translate3d(0px, -" + g + "px, 0px)",
					D = "translate3d(0px, -" + w + "px, 0px)";
				aj(b(".ms-left"), h, !0), aj(b(".ms-right"), D, !0), setTimeout(function() {
					b.isFunction(O.afterLoad) && O.afterLoad.call(this, y, C + 1), setTimeout(function() {
						ad = !1
					}, U)
				}, O.scrollingSpeed)
			} else {
				b.isFunction(O.onLeave) && O.onLeave.call(this, p, C + 1, B), b(".ms-left").animate({
					top: -g
				}, O.scrollingSpeed, O.easing, function() {
					b.isFunction(O.afterLoad) && O.afterLoad.call(this, y, C + 1), setTimeout(function() {
						ad = !1
					}, U)
				}), b(".ms-right").animate({
					top: -w
				}, O.scrollingSpeed, O.easing)
			}
			lastScrolledDestiny = y, f = y, O.menu && (b(O.menu).find(".active").removeClass("active"), b(O.menu)
				.find('[data-menuanchor="' + f + '"]').addClass("active")), u = y, z = C, O.navigation && (b(
				"#multiscroll-nav").find(".active").removeClass("active"), u ? b("#multiscroll-nav").find(
				'a[href="#' + u + '"]').addClass("active") : b("#multiscroll-nav").find("li").eq(z).find(
				"a").addClass("active"))
		}

		function am() {
			a.addEventListener ? (a.addEventListener("mousewheel", H, !1), a.addEventListener("wheel", H, !1)) : a
				.attachEvent("onmousewheel", H)
		}

		function H(f) {
			f = e.event || f;
			var g = c.max(-1, c.min(1, f.wheelDelta || -f.deltaY || -f.detail));
			return ad || (g < 0 ? ac.moveSectionDown() : ac.moveSectionUp()), !1
		}

		function aj(f, i, g) {
			var h;
			f.toggleClass("ms-easing", g), f.css({
				"-webkit-transform": h = i,
				"-moz-transform": h,
				"-ms-transform": h,
				transform: h
			})
		}

		function N() {
			var f = b(".ms-left .ms-section.active"),
				l = f.data("anchor"),
				h = f.index(),
				k = String(h);
			O.anchors.length && (k = l), k = k.replace("/", "-").replace("#", "");
			var g = new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b", "g");
			b("body")[0].className = b("body")[0].className.replace(g, ""), b("body").addClass("ms-viewing-" + k)
		}

		function Y(f) {
			var h = af;
			if (O.paddingTop || O.paddingBottom) {
				var g = parseInt(f.css("padding-top")) + parseInt(f.css("padding-bottom"));
				h = af - g
			}
			return h
		}
		ac.moveSectionUp = function() {
			var f = b(".ms-left .ms-section.active").prev(".ms-section");
			!f.length && O.loopTop && (f = b(".ms-left .ms-section").last()), f.length && ao(f)
		}, ac.moveSectionDown = function() {
			var f = b(".ms-left .ms-section.active").next(".ms-section");
			!f.length && O.loopBottom && (f = b(".ms-left .ms-section").first()), f.length && ao(f)
		}, ac.moveTo = function(f) {
			ao(isNaN(f) ? b('.ms-left [data-anchor="' + f + '"]') : b(".ms-left .ms-section").eq(f - 1))
		}, ac.setKeyboardScrolling = function(f) {
			O.keyboardScrolling = f
		}, ac.setMouseWheelScrolling = function(f) {
			f ? am() : a.addEventListener ? (a.removeEventListener("mousewheel", H, !1), a.removeEventListener(
				"wheel", H, !1)) : a.detachEvent("onmousewheel", H)
		}, ac.setScrollingSpeed = function(f) {
			O.scrollingSpeed = f
		};
		var W = 0,
			A = 0;

		function J(f) {
			if (aa(f)) {
				event.preventDefault();
				b(".ms-left .ms-section.active");
				if (!ad) {
					var g = Q(f);
					A = g.y, g.x, c.abs(W - A) > b(e).height() / 100 * O.touchSensitivity && (A < W ? ac
						.moveSectionDown() : W < A && ac.moveSectionUp())
				}
			}
		}

		function aa(f) {
			return void 0 === f.pointerType || "mouse" != f.pointerType
		}

		function ae(f) {
			if (aa(f)) {
				var g = Q(f);
				W = g.y, g.x
			}
		}

		function ap() {
			(V || ab) && (a.removeEventListener(ai.touchstart, ae), a.removeEventListener(ai.touchmove, J, {
				passive: !1
			}), a.addEventListener(ai.touchstart, ae), a.addEventListener(ai.touchmove, J, {
				passive: !1
			}))
		}

		function Q(f) {
			var g = [];
			return g.y = void 0 !== f.pageY && (f.pageY || f.pageX) ? f.pageY : f.touches[0].pageY, g.x = void 0 !==
				f.pageX && (f.pageY || f.pageX) ? f.pageX : f.touches[0].pageX, V && aa(f) && void 0 !== f
				.touches && (g.y = f.touches[0].pageY, g.x = f.touches[0].pageX), g
		}
		ac.destroy = function() {
			ac.setKeyboardScrolling(!1), ac.setMouseWheelScrolling(!1), (V || ab) && (a.removeEventListener(ai
					.touchstart, ae), a.removeEventListener(ai.touchmove, J, {
					passive: !1
				})), b(e).off("hashchange", G).off("resize", ah), b(a).off("mouseenter", "#multiscroll-nav li")
				.off("mouseleave", "#multiscroll-nav li").off("click", "#multiscroll-nav a")
		}, ac.build = function() {
			ac.setKeyboardScrolling(!0), ac.setMouseWheelScrolling(!0), ap(), b(e).on("hashchange", G).on(
				"resize", ah), b(a).on("mouseenter", "#multiscroll-nav li", I).on("mouseleave",
				"#multiscroll-nav li", al).on("click", "#multiscroll-nav a", Z)
		}
	}
}(jQuery, window, document, Math);
/* jQuery UI - v1.9.2 - 2014-03-21*/
jQuery.effects || function(c, f) {
	var d = c.uiBackCompat !== !1,
		b = "ui-effects-";
	c.effects = {
			effect: {}
		},
		function(D, v) {
			function e(l, n, m) {
				var h = g[n.type] || {};
				return null == l ? m || !n.def ? null : n.def : (l = h.floor ? ~~l : parseFloat(l), isNaN(l) ? n
					.def : h.mod ? (l + h.mod) % h.mod : 0 > l ? 0 : l > h.max ? h.max : l)
			}

			function C(i) {
				var h = E(),
					l = h._rgba = [];
				return i = i.toLowerCase(), x(w, function(F, p) {
					var u, s = p.re.exec(i),
						a = s && p.parse(s),
						m = p.space || "rgba";
					return a ? (u = h[m](a), h[j[m].cache] = u[j[m].cache], l = h._rgba = u._rgba, !1) : v
				}), l.length ? ("0,0,0,0" === l.join() && D.extend(l, B.transparent), h) : B[i]
			}

			function y(a, l, h) {
				return h = (h + 1) % 1, 1 > 6 * h ? a + 6 * (l - a) * h : 1 > 2 * h ? l : 2 > 3 * h ? a + 6 * (l -
					a) * (2 / 3 - h) : a
			}
			var B, z =
				"backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
				.split(" "),
				q = /^([\-+])=\s*(\d+\.?\d*)/,
				w = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					parse: function(a) {
						return [a[1], a[2], a[3], a[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					parse: function(a) {
						return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function(a) {
						return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function(a) {
						return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3],
							16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function(a) {
						return [a[1], a[2] / 100, a[3] / 100, a[4]]
					}
				}],
				E = D.Color = function(l, m, h, n) {
					return new D.Color.fn.parse(l, m, h, n)
				},
				j = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				g = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				A = E.support = {},
				k = D("<p>")[0],
				x = D.each;
			k.style.cssText = "background-color:rgba(1,1,1,.5)", A.rgba = k.style.backgroundColor.indexOf("rgba") >
				-1, x(j, function(a, h) {
					h.cache = "_" + a, h.props.alpha = {
						idx: 3,
						type: "percent",
						def: 1
					}
				}), E.fn = D.extend(E.prototype, {
					parse: function(s, t, m, r) {
						if (s === v) {
							return this._rgba = [null, null, null, null], this
						}(s.jquery || s.nodeType) && (s = D(s).css(t), t = v);
						var a = this,
							u = D.type(s),
							i = this._rgba = [];
						return t !== v && (s = [s, t, m, r], u = "array"), "string" === u ? this.parse(C(
							s) || B._default) : "array" === u ? (x(j.rgba.props, function(h, l) {
							i[l.idx] = e(s[l.idx], l)
						}), this) : "object" === u ? (s instanceof E ? x(j, function(h, l) {
							s[l.cache] && (a[l.cache] = s[l.cache].slice())
						}) : x(j, function(n, h) {
							var l = h.cache;
							x(h.props, function(o, p) {
								if (!a[l] && h.to) {
									if ("alpha" === o || null == s[o]) {
										return
									}
									a[l] = h.to(a._rgba)
								}
								a[l][p.idx] = e(s[o], p, !0)
							}), a[l] && 0 > c.inArray(null, a[l].slice(0, 3)) && (a[l][3] =
								1, h.from && (a._rgba = h.from(a[l])))
						}), this) : v
					},
					is: function(i) {
						var m = E(i),
							h = !0,
							l = this;
						return x(j, function(a, p) {
							var t, s = m[p.cache];
							return s && (t = l[p.cache] || p.to && p.to(l._rgba) || [], x(p.props,
								function(n, o) {
									return null != s[o.idx] ? h = s[o.idx] === t[o.idx] : v
								})), h
						}), h
					},
					_space: function() {
						var a = [],
							h = this;
						return x(j, function(m, l) {
							h[l.cache] && a.push(m)
						}), a.pop()
					},
					transition: function(a, H) {
						var m = E(a),
							G = m._space(),
							p = j[G],
							F = 0 === this.alpha() ? E("transparent") : this,
							u = F[p.cache] || p.to(F._rgba),
							l = u.slice();
						return m = m[p.cache], x(p.props, function(h, I) {
							var o = I.idx,
								t = u[o],
								i = m[o],
								J = g[I.type] || {};
							null !== i && (null === t ? l[o] = i : (J.mod && (i - t > J.mod / 2 ?
									t += J.mod : t - i > J.mod / 2 && (t -= J.mod)), l[o] =
								e((i - t) * H + t, I)))
						}), this[G](l)
					},
					blend: function(l) {
						if (1 === this._rgba[3]) {
							return this
						}
						var m = this._rgba.slice(),
							h = m.pop(),
							n = E(l)._rgba;
						return E(D.map(m, function(a, i) {
							return (1 - h) * n[i] + h * a
						}))
					},
					toRgbaString: function() {
						var a = "rgba(",
							h = D.map(this._rgba, function(i, l) {
								return null == i ? l > 2 ? 1 : 0 : i
							});
						return 1 === h[3] && (h.pop(), a = "rgb("), a + h.join() + ")"
					},
					toHslaString: function() {
						var a = "hsla(",
							h = D.map(this.hsla(), function(i, l) {
								return null == i && (i = l > 2 ? 1 : 0), l && 3 > l && (i = Math.round(
									100 * i) + "%"), i
							});
						return 1 === h[3] && (h.pop(), a = "hsl("), a + h.join() + ")"
					},
					toHexString: function(l) {
						var m = this._rgba.slice(),
							h = m.pop();
						return l && m.push(~~(255 * h)), "#" + D.map(m, function(a) {
							return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
						}).join("")
					},
					toString: function() {
						return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
					}
				}), E.fn.parse.prototype = E.fn, j.hsla.to = function(F) {
					if (null == F[0] || null == F[1] || null == F[2]) {
						return [null, null, null, F[3]]
					}
					var N, H, m = F[0] / 255,
						M = F[1] / 255,
						J = F[2] / 255,
						L = F[3],
						K = Math.max(m, M, J),
						G = Math.min(m, M, J),
						I = K - G,
						O = K + G,
						p = 0.5 * O;
					return N = G === K ? 0 : m === K ? 60 * (M - J) / I + 360 : M === K ? 60 * (J - m) / I + 120 :
						60 * (m - M) / I + 240, H = 0 === p || 1 === p ? p : 0.5 >= p ? I / O : I / (2 - O), [Math
							.round(N) % 360, H, p, null == L ? 1 : L
						]
				}, j.hsla.from = function(l) {
					if (null == l[0] || null == l[1] || null == l[2]) {
						return [null, null, null, l[3]]
					}
					var F = l[0] / 360,
						m = l[1],
						h = l[2],
						u = l[3],
						p = 0.5 >= h ? h * (1 + m) : h + m - h * m,
						n = 2 * h - p;
					return [Math.round(255 * y(n, p, F + 1 / 3)), Math.round(255 * y(n, p, F)), Math.round(255 * y(
						n, p, F - 1 / 3)), u]
				}, x(j, function(a, t) {
					var i = t.props,
						p = t.cache,
						m = t.to,
						h = t.from;
					E.fn[a] = function(o) {
						if (m && !this[p] && (this[p] = m(this._rgba)), o === v) {
							return this[p].slice()
						}
						var u, r = D.type(o),
							n = "array" === r || "object" === r ? o : arguments,
							l = this[p].slice();
						return x(i, function(s, G) {
							var F = n["object" === r ? s : G.idx];
							null == F && (F = l[G.idx]), l[G.idx] = e(F, G)
						}), h ? (u = E(h(l)), u[p] = l, u) : E(l)
					}, x(i, function(n, l) {
						E.fn[n] || (E.fn[n] = function(J) {
							var G, I = D.type(J),
								H = "alpha" === n ? this._hsla ? "hsla" : "rgba" : a,
								F = this[H](),
								K = F[l.idx];
							return "undefined" === I ? K : ("function" === I && (J = J.call(
									this, K), I = D.type(J)), null == J && l.empty ? this :
								("string" === I && (G = q.exec(J), G && (J = K + parseFloat(
										G[2]) * ("+" === G[1] ? 1 : -1))), F[l.idx] = J,
									this[H](F)))
						})
					})
				}), x(z, function(a, h) {
					D.cssHooks[h] = {
						set: function(m, i) {
							var t, F, u = "";
							if ("string" !== D.type(i) || (t = C(i))) {
								if (i = E(t || i), !A.rgba && 1 !== i._rgba[3]) {
									for (F = "backgroundColor" === h ? m.parentNode : m;
										("" === u || "transparent" === u) && F && F.style;) {
										try {
											u = D.css(F, "backgroundColor"), F = F.parentNode
										} catch (p) {}
									}
									i = i.blend(u && "transparent" !== u ? u : "_default")
								}
								i = i.toRgbaString()
							}
							try {
								m.style[h] = i
							} catch (s) {}
						}
					}, D.fx.step[h] = function(i) {
						i.colorInit || (i.start = E(i.elem, h), i.end = E(i.end), i.colorInit = !0), D
							.cssHooks[h].set(i.elem, i.start.transition(i.end, i.pos))
					}
				}), D.cssHooks.borderColor = {
					expand: function(a) {
						var h = {};
						return x(["Top", "Right", "Bottom", "Left"], function(m, l) {
							h["border" + l + "Color"] = a
						}), h
					}
				}, B = D.Color.names = {
					aqua: "#00ffff",
					black: "#000000",
					blue: "#0000ff",
					fuchsia: "#ff00ff",
					gray: "#808080",
					green: "#008000",
					lime: "#00ff00",
					maroon: "#800000",
					navy: "#000080",
					olive: "#808000",
					purple: "#800080",
					red: "#ff0000",
					silver: "#c0c0c0",
					teal: "#008080",
					white: "#ffffff",
					yellow: "#ffff00",
					transparent: [null, null, null, 0],
					_default: "#ffffff"
				}
		}(jQuery),
		function() {
			function g() {
				var n, l, k = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this,
						null) : this.currentStyle,
					m = {};
				if (k && k.length && k[0] && k[k[0]]) {
					for (l = k.length; l--;) {
						n = k[l], "string" == typeof k[n] && (m[c.camelCase(n)] = k[n])
					}
				} else {
					for (n in k) {
						"string" == typeof k[n] && (m[n] = k[n])
					}
				}
				return m
			}

			function e(o, l) {
				var k, n, m = {};
				for (k in l) {
					n = l[k], o[k] !== n && (h[k] || (c.fx.step[k] || !isNaN(parseFloat(n))) && (m[k] = n))
				}
				return m
			}
			var j = ["add", "remove", "toggle"],
				h = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(k, a) {
				c.fx.step[a] = function(i) {
					("none" !== i.end && !i.setAttr || 1 === i.pos && !i.setAttr) && (jQuery.style(i
						.elem, a, i.end), i.setAttr = !0)
				}
			}), c.effects.animateClass = function(m, i, l, k) {
				var a = c.speed(i, l, k);
				return this.queue(function() {
					var q, t = c(this),
						s = t.attr("class") || "",
						p = a.children ? t.find("*").andSelf() : t;
					p = p.map(function() {
						var n = c(this);
						return {
							el: n,
							start: g.call(this)
						}
					}), q = function() {
						c.each(j, function(n, o) {
							m[o] && t[o + "Class"](m[o])
						})
					}, q(), p = p.map(function() {
						return this.end = g.call(this.el[0]), this.diff = e(this.start, this
							.end), this
					}), t.attr("class", s), p = p.map(function() {
						var r = this,
							o = c.Deferred(),
							n = jQuery.extend({}, a, {
								queue: !1,
								complete: function() {
									o.resolve(r)
								}
							});
						return this.el.animate(this.diff, n), o.promise()
					}), c.when.apply(c, p.get()).done(function() {
						q(), c.each(arguments, function() {
							var n = this.el;
							c.each(this.diff, function(o) {
								n.css(o, "")
							})
						}), a.complete.call(t[0])
					})
				})
			}, c.fn.extend({
				_addClass: c.fn.addClass,
				addClass: function(n, l, k, m) {
					return l ? c.effects.animateClass.call(this, {
						add: n
					}, l, k, m) : this._addClass(n)
				},
				_removeClass: c.fn.removeClass,
				removeClass: function(n, l, k, m) {
					return l ? c.effects.animateClass.call(this, {
						remove: n
					}, l, k, m) : this._removeClass(n)
				},
				_toggleClass: c.fn.toggleClass,
				toggleClass: function(l, k, p, m, o) {
					return "boolean" == typeof k || k === f ? p ? c.effects.animateClass.call(this, k ?
					{
						add: l
					} : {
						remove: l
					}, p, m, o) : this._toggleClass(l, k) : c.effects.animateClass.call(this, {
						toggle: l
					}, k, p, m)
				},
				switchClass: function(p, l, k, o, m) {
					return c.effects.animateClass.call(this, {
						add: l,
						remove: p
					}, k, o, m)
				}
			})
		}(),
		function() {
			function e(k, h, g, j) {
				return c.isPlainObject(k) && (h = k, k = k.effect), k = {
						effect: k
					}, null == h && (h = {}), c.isFunction(h) && (j = h, g = null, h = {}), ("number" == typeof h ||
						c.fx.speeds[h]) && (j = g, g = h, h = {}), c.isFunction(g) && (j = g, g = null), h && c
					.extend(k, h), g = g || h.duration, k.duration = c.fx.off ? 0 : "number" == typeof g ? g : g in
					c.fx.speeds ? c.fx.speeds[g] : c.fx.speeds._default, k.complete = j || h.complete, k
			}

			function a(g) {
				return !g || "number" == typeof g || c.fx.speeds[g] ? !0 : "string" != typeof g || c.effects.effect[
					g] ? !1 : d && c.effects[g] ? !1 : !0
			}
			c.extend(c.effects, {
				version: "1.9.2",
				save: function(g, j) {
					for (var h = 0; j.length > h; h++) {
						null !== j[h] && g.data(b + j[h], g[0].style[j[h]])
					}
				},
				restore: function(g, h) {
					var k, j;
					for (j = 0; h.length > j; j++) {
						null !== h[j] && (k = g.data(b + h[j]), k === f && (k = ""), g.css(h[j], k))
					}
				},
				setMode: function(g, h) {
					return "toggle" === h && (h = g.is(":hidden") ? "show" : "hide"), h
				},
				getBaseline: function(h, k) {
					var j, g;
					switch (h[0]) {
						case "top":
							j = 0;
							break;
						case "middle":
							j = 0.5;
							break;
						case "bottom":
							j = 1;
							break;
						default:
							j = h[0] / k.height
					}
					switch (h[1]) {
						case "left":
							g = 0;
							break;
						case "center":
							g = 0.5;
							break;
						case "right":
							g = 1;
							break;
						default:
							g = h[1] / k.width
					}
					return {
						x: g,
						y: j
					}
				},
				createWrapper: function(m) {
					if (m.parent().is(".ui-effects-wrapper")) {
						return m.parent()
					}
					var h = {
							width: m.outerWidth(!0),
							height: m.outerHeight(!0),
							"float": m.css("float")
						},
						g = c("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						l = {
							width: m.width(),
							height: m.height()
						},
						j = document.activeElement;
					try {
						j.id
					} catch (k) {
						j = document.body
					}
					return m.wrap(g), (m[0] === j || c.contains(m[0], j)) && c(j).focus(), g = m
					.parent(), "static" === m.css("position") ? (g.css({
						position: "relative"
					}), m.css({
						position: "relative"
					})) : (c.extend(h, {
						position: m.css("position"),
						zIndex: m.css("z-index")
					}), c.each(["top", "left", "bottom", "right"], function(n, i) {
						h[i] = m.css(i), isNaN(parseInt(h[i], 10)) && (h[i] = "auto")
					}), m.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), m.css(l), g.css(h).show()
				},
				removeWrapper: function(h) {
					var g = document.activeElement;
					return h.parent().is(".ui-effects-wrapper") && (h.parent().replaceWith(h), (h[0] ===
						g || c.contains(h[0], g)) && c(g).focus()), h
				},
				setTransition: function(k, h, g, j) {
					return j = j || {}, c.each(h, function(l, m) {
						var o = k.cssUnit(m);
						o[0] > 0 && (j[m] = o[0] * g + o[1])
					}), j
				}
			}), c.fn.extend({
				effect: function() {
					function m(u) {
						function h() {
							c.isFunction(o) && o.call(q[0]), c.isFunction(u) && u()
						}
						var q = c(this),
							o = g.complete,
							p = g.mode;
						(q.is(":hidden") ? "hide" === p : "show" === p) ? h(): k.call(q[0], g, h)
					}
					var g = e.apply(this, arguments),
						j = g.mode,
						l = g.queue,
						k = c.effects.effect[g.effect],
						i = !k && d && c.effects[g.effect];
					return c.fx.off || !k && !i ? j ? this[j](g.duration, g.complete) : this.each(
						function() {
							g.complete && g.complete.call(this)
						}) : k ? l === !1 ? this.each(m) : this.queue(l || "fx", m) : i.call(this, {
						options: g,
						duration: g.duration,
						callback: g.complete,
						mode: g.mode
					})
				},
				_show: c.fn.show,
				show: function(g) {
					if (a(g)) {
						return this._show.apply(this, arguments)
					}
					var h = e.apply(this, arguments);
					return h.mode = "show", this.effect.call(this, h)
				},
				_hide: c.fn.hide,
				hide: function(g) {
					if (a(g)) {
						return this._hide.apply(this, arguments)
					}
					var h = e.apply(this, arguments);
					return h.mode = "hide", this.effect.call(this, h)
				},
				__toggle: c.fn.toggle,
				toggle: function(h) {
					if (a(h) || "boolean" == typeof h || c.isFunction(h)) {
						return this.__toggle.apply(this, arguments)
					}
					var g = e.apply(this, arguments);
					return g.mode = "toggle", this.effect.call(this, g)
				},
				cssUnit: function(j) {
					var h = this.css(j),
						g = [];
					return c.each(["em", "px", "%", "pt"], function(i, k) {
						h.indexOf(k) > 0 && (g = [parseFloat(h), k])
					}), g
				}
			})
		}(),
		function() {
			var a = {};
			c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(g, h) {
				a[h] = function(e) {
					return Math.pow(e, g + 2)
				}
			}), c.extend(a, {
				Sine: function(g) {
					return 1 - Math.cos(g * Math.PI / 2)
				},
				Circ: function(g) {
					return 1 - Math.sqrt(1 - g * g)
				},
				Elastic: function(g) {
					return 0 === g || 1 === g ? g : -Math.pow(2, 8 * (g - 1)) * Math.sin((80 * (g - 1) -
						7.5) * Math.PI / 15)
				},
				Back: function(g) {
					return g * g * (3 * g - 2)
				},
				Bounce: function(g) {
					for (var j, h = 4;
						((j = Math.pow(2, --h)) - 1) / 11 > g;) {}
					return 1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((3 * j - 2) / 22 - g, 2)
				}
			}), c.each(a, function(g, e) {
				c.easing["easeIn" + g] = e, c.easing["easeOut" + g] = function(h) {
					return 1 - e(1 - h)
				}, c.easing["easeInOut" + g] = function(h) {
					return 0.5 > h ? e(2 * h) / 2 : 1 - e(-2 * h + 2) / 2
				}
			})
		}()
}(jQuery);
