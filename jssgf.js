/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
jssgf = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,7],$V2=[1,9],$V3=[7,9],$V4=[1,17],$V5=[7,9,12,14,17],$V6=[5,7,9],$V7=[1,23],$V8=[7,9,12,14,17,19],$V9=[7,9,12,14,17,19,21,23,24,25];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"output":3,"collection":4,"EOF":5,"gametree":6,"(":7,"sequence":8,")":9,"gametrees":10,"node":11,";":12,"property":13,"WHITE_SPACE":14,"propident":15,"propvalues":16,"MAYBE_PROPIDENT":17,"propvalue":18,"[":19,"cvaluetype":20,"]":21,"text":22,"OTHER_CHAR":23,"SOFT_LINEBREAK":24,"ESCAPE_CHAR":25,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"(",9:")",12:";",14:"WHITE_SPACE",17:"MAYBE_PROPIDENT",19:"[",21:"]",23:"OTHER_CHAR",24:"SOFT_LINEBREAK",25:"ESCAPE_CHAR"},
productions_: [0,[3,2],[4,1],[4,2],[6,3],[6,4],[10,1],[10,2],[8,1],[8,2],[11,1],[11,2],[11,3],[13,2],[15,1],[15,2],[16,0],[16,1],[16,2],[18,3],[20,1],[22,0],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            if (debug) {
                console.log($$[$0-1]);
                /*
                var n = $$[$0-1][0];
                while (n._children.length > 0) {
                    console.log(n);
                    n = n._children[0];
                }
                */
            }
            return $$[$0-1];
        
break;
case 2: case 6:
 this.$ = [$$[$0]]; 
break;
case 3: case 7:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 4: case 15: case 19: case 29:
 this.$ = $$[$0-1]; 
break;
case 5:
 this.$ = addGameTrees($$[$0-2], $$[$0-1]); 
break;
case 8: case 14: case 17: case 20:
 this.$ = $$[$0]; 
break;
case 9:
 $$[$0-1]._children.push($$[$0]); this.$ = $$[$0-1]; 
break;
case 10:
 this.$ = {_children: []}; 
break;
case 11:

            if (typeof $$[$0-1][$$[$0][0]] !== 'undefined') {
                if (strict) {
                    throw new Error('double properties');
                }
            } else {
                $$[$0-1][$$[$0][0]] = $$[$0][1];
                this.$ = $$[$0-1];
            }
        
break;
case 12:

            if (typeof $$[$0-2][$$[$0][0]] !== 'undefined') {
                if (strict) {
                    throw new Error('double properties');
                }
            } else {
                $$[$0-2][$$[$0][0]] = $$[$0][1];
                this.$ = $$[$0-2];
            }
        
break;
case 13:
 this.$ = [$$[$0-1], $$[$0]]; 
break;
case 16:
 this.$ = null; 
break;
case 18:
 var a; if ($$[$0-1] instanceof Array) a = $$[$0-1]; else a = [$$[$0-1]]; this.$ = a.concat($$[$0]); 
break;
case 21:
 this.$ = '' 
break;
case 22: case 23: case 24: case 25:
 this.$ = $$[$0-1] + yytext 
break;
case 26: case 27: case 28:
 this.$ = $$[$0-1] + $$[$0]; 
break;
case 30:
 this.$ = $$[$0-1] + $$[$0].slice(1); 
break;
}
},
table: [{3:1,4:2,6:3,7:$V0},{1:[3]},{5:[1,5],6:6,7:$V0},o($V1,[2,2]),{8:7,11:8,12:$V2},{1:[2,1]},o($V1,[2,3]),{6:12,7:$V0,9:[1,10],10:11},o($V3,[2,8],{11:8,8:13,13:14,15:16,12:$V2,14:[1,15],17:$V4}),o($V5,[2,10]),o($V6,[2,4]),{6:19,7:$V0,9:[1,18]},o($V3,[2,6]),o($V3,[2,9]),o($V5,[2,11]),{13:20,15:16,17:$V4},o($V5,[2,16],{16:21,18:22,19:$V7}),o([7,9,12,17,19],[2,14],{14:[1,24]}),o($V6,[2,5]),o($V3,[2,7]),o($V5,[2,12]),o($V5,[2,13],{18:25,19:$V7}),o($V8,[2,17]),o($V9,[2,21],{20:26,22:27}),o($V8,[2,15]),o($V8,[2,18]),{21:[1,28]},{7:[1,29],9:[1,30],12:[1,31],14:[1,33],17:[1,34],19:[1,32],21:[2,20],23:[1,35],24:[1,36],25:[1,37]},o($V8,[2,19]),o($V9,[2,22]),o($V9,[2,23]),o($V9,[2,24]),o($V9,[2,25]),o($V9,[2,26]),o($V9,[2,27]),o($V9,[2,28]),o($V9,[2,29]),o($V9,[2,30])],
defaultActions: {5:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* prologue */
var strict = false; // if true, throw exception when overlapping a property in a node.
var debug = false;
function addGameTrees(s, gts){
	var n = s;
	while (n._children.length == 1)
		n = n._children[0];
	n._children = gts;
	return s;
}

// Generated by CoffeeScript 1.10.0

/*
SGF libarary
(C) 2013-2014 ICHIKAWA, Yuji (New 3 Rs)
 */

/*
 * jssgf.parse to parse SGF string
 * jssgf.isSgf to check if a string is SGF
 * jssgf.nthMoveNode to get a node of nth move
 */
var SGFCollection, SGFGameTree, SGFNode, escapePropvalue, gameTree2string, node2string, propvalues2string,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

parser.stringify = function(c) {

  /*
  stringifies collection c
  parser is a export variable generated by jison
   */
  return c.map(gameTree2string).join('');
};

gameTree2string = function(gameTree) {
  var e, n, result;
  result = '(';
  n = gameTree;
  while (true) {
    result += node2string(n);
    if (n._children.length === 0) {
      break;
    } else if (n._children.length === 1) {
      n = n._children[0];
    } else {
      result += ((function() {
        var i, len, ref, results;
        ref = n._children;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          results.push(gameTree2string(e));
        }
        return results;
      })()).join('');
      break;
    }
  }
  return result += ')';
};

node2string = function(node) {
  var k, v;
  return ';' + ((function() {
    var results;
    results = [];
    for (k in node) {
      v = node[k];
      if (!/^_/.test(k)) {
        results.push(k + propvalues2string(v));
      }
    }
    return results;
  })()).join('');
};

propvalues2string = function(propvalues) {
  var e;
  if (!(propvalues instanceof Array)) {
    propvalues = [propvalues];
  }
  return ((function() {
    var i, len, results;
    results = [];
    for (i = 0, len = propvalues.length; i < len; i++) {
      e = propvalues[i];
      results.push("[" + (escapePropvalue(e)) + "]");
    }
    return results;
  })()).join('');
};

escapePropvalue = function(propvalue) {
  return propvalue.replace(/([\]\\])/g, '\\$1');
};

parser.isSgf = function(sgf) {

  /* returns true if string sgf is SGF format. */
  var e, error;
  try {
    parser.parse(sgf);
    return true;
  } catch (error) {
    e = error;
    return false;
  }
};

parser.nthMoveNode = function(root, n) {

  /*
  returns a node of primary nth move
  if n is larger than total moves, returns the last move
   */
  var node, num;
  num = 0;
  node = root;
  while (node._children.length > 0 && num < n) {
    node = node._children[0];
    if ((node.B != null) || (node.W != null)) {
      num += 1;
    }
  }
  return node;
};

SGFNode = (function() {
  function SGFNode() {}

  SGFNode.prototype.toString = function() {
    return node2string(this);
  };

  return SGFNode;

})();

SGFGameTree = (function(superClass) {
  extend(SGFGameTree, superClass);

  SGFGameTree.fromParsed = function(gameTree) {
    var each, i, k, len, ref, result, v;
    result = new this();
    for (k in gameTree) {
      v = gameTree[k];
      if (k !== '_children') {
        result[k] = v;
      }
    }
    ref = gameTree._children;
    for (i = 0, len = ref.length; i < len; i++) {
      each = ref[i];
      result._children.push(SGFGameTree.fromParsed(each));
    }
    return result;
  };

  function SGFGameTree() {
    SGFGameTree.__super__.constructor.call(this);
    this._children = [];
  }

  SGFGameTree.prototype.toStringRecursively = function() {
    var each, node, result;
    result = '(';
    node = this;
    while (true) {
      result += node.toString();
      if (node._children.length === 0) {
        break;
      } else if (node._children.length === 1) {
        node = node._children[0];
      } else {
        result += ((function() {
          var i, len, ref, results;
          ref = node._children;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            each = ref[i];
            results.push(each.toStringRecursively());
          }
          return results;
        })()).join('');
        break;
      }
    }
    return result += ')';
  };

  return SGFGameTree;

})(SGFNode);

SGFCollection = (function(superClass) {
  extend(SGFCollection, superClass);

  function SGFCollection() {
    return SGFCollection.__super__.constructor.apply(this, arguments);
  }

  SGFCollection.fromParsed = function(collection) {
    var each, i, len, result;
    result = new this();
    for (i = 0, len = collection.length; i < len; i++) {
      each = collection[i];
      result.push(SGFGameTree.fromParsed(each));
    }
    return result;
  };

  SGFCollection.prototype.toString = function() {
    var each;
    return ((function() {
      var i, len, results;
      results = [];
      for (i = 0, len = this.length; i < len; i++) {
        each = this[i];
        results.push(each.toStringRecursively());
      }
      return results;
    }).call(this)).join('\n');
  };

  return SGFCollection;

})(Array);

parser.SGFCollection = SGFCollection;

parser.SGFGameTree = SGFGameTree;
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 7;
break;
case 1:return 9;
break;
case 2:return 12;
break;
case 3:return 19;
break;
case 4:return 21;
break;
case 5:return 14;
break;
case 6:return 24;
break;
case 7:return 25;
break;
case 8:return 17;
break;
case 9:return 23;
break;
case 10:return 5;
break;
}
},
rules: [/^(?:\s*\(\s*)/,/^(?:\s*\)\s*)/,/^(?:\s*;\s*)/,/^(?:\s*\[)/,/^(?:\]\s*)/,/^(?:\s+)/,/^(?:\\[\r\n]+)/,/^(?:\\.)/,/^(?:[A-Z]+)/,/^(?:.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = jssgf;
    } else {
        exports.jsgf = jssgf;
    }
} else {
    this.jssgf = jssgf;
}
